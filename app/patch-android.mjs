// Run inside app/ after `npx cap add android`: sets the version and (when a key is given) release signing.
import fs from 'node:fs';
const file = 'android/app/build.gradle';
let s = fs.readFileSync(file, 'utf8');
const code = process.env.VERSION_CODE || '1', name = process.env.VERSION_NAME || '1.0.0';

if (!/versionCode\s+\d+/.test(s) || !/versionName\s+"[^"]*"/.test(s)) throw new Error('Could not find versionCode / versionName in build.gradle');
s = s.replace(/versionCode\s+\d+/, `versionCode ${code}`).replace(/versionName\s+"[^"]*"/, `versionName "${name}"`);

if (process.env.ANDROID_KEYSTORE_PATH) {
  const signing = `
    signingConfigs {
        release {
            storeFile file(System.getenv("ANDROID_KEYSTORE_PATH"))
            storePassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
            keyAlias System.getenv("ANDROID_KEY_ALIAS")
            keyPassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
            storeType "pkcs12"
        }
    }
`;
  if (!/buildTypes\s*\{/.test(s)) throw new Error('Could not find buildTypes in build.gradle');
  s = s.replace(/(\n\s*)buildTypes\s*\{/, `${signing}$1buildTypes {`);
  s = s.replace(/(buildTypes\s*\{\s*release\s*\{)/, `$1\n            signingConfig signingConfigs.release`);
  if (!s.includes('signingConfig signingConfigs.release')) throw new Error('Could not attach the signing config to the release build type');
  console.log('Release signing configured.');
} else {
  console.log('No signing key given: the release bundle will be unsigned (fine for checking the build).');
}
fs.writeFileSync(file, s);
console.log(`versionCode ${code}, versionName ${name}`);
console.log('--- android/app/build.gradle (head) ---');
console.log(s.split('\n').slice(0, 60).join('\n'));
