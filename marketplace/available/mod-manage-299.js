// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UIZ4QFsROYWi3K9gQQrmne5sRd3SQtqhm3lQsikdUCiALGpRgoxFUPq3dTrj3WwdvJy/2fzbUKMK+eR62AkqfQi6vu/tA8uBtShH2C0xG+A/fvOKmkhJoILCm4zLvqsPx/rTEZE9P5LQjHEdpiBQZ8H/ChcW/0K5igfqkEz8i3F6GW8xFGsIZfG/AYWTjcd/IRxyh3QVREctq7dTaFfEbZ3k3n9hd74VP+QhpYxe2Lz0T7QL3sl2GwDDf3e0QihCIJ8Ai+Bt9sfY0qHrxzlELXPIx+EWZmtZSNCe3idpDLrz8H/ehR0mE6Y66s3kb8MraAmqtjlGIsI6KZl0GGi3I06dNJ9m4cC+k/eH99gqCxqgwOwfpdTpvGn1nQ8d5q0k0fTQCRI4p2JT+nEVlgx0mLBsNYwHW1BqFBSMyhxVubFH1wB0y7z+H1v77KXemVpvPsyZWs00SxQe3c+W+bkynosQQbw9zXE8Rs6XrLacVNWLd7/cf0/gD6hWFSiDJpvMM3KseVAyPk96FVAMCGup26SlaiB4AuQB2GuU2Mw0wNr2Gmkg7QU6OF2Us1xyW3AWppjNd0VyAca0BBP/1NmDojbDnJ84OQhVqnnoS2czMKjiQokI4BtYaGk3dQfDqg3HeEuIQD3vDDbF/POTn1LtpGqfj4t5ZOn7Ko1B6ztrGMNDhwgsH8ndvfsjE5gI52SG2VPfUcBIlaz5RBAoWaz6jl0sgPBchnhsdim5mypxYT4H59i6iZfeVEecrD6zfBk5akFZp+1JBCWJRilMcQxeMrwfgB5T1jmUcMfefi5KpegbhY/xh3TEtbWpUkDa9+Vc2qt/y0/9YcbuUvyCzz54/v0LrHuKKUjbtSAtFFfvw+B1srzhxlA9ekwEjsv2Y7CuHu0s4Pgucr2I4BLnRPViIDhm4UFKNvjZMmhn8iDS9CVrO6K24/bmMQojhcrKLR86Yeu6Rzlpox6O26kf/Nw1r62YhK38eAFa2E52yXaPtr3GJaAAMbdu0GOCvGowKhPrvRLqOHpktvz6f0Z0LDfE5Dwb8cYfsmNJQAypkegxwI2WozciyrA5kT+MvhYk+TNEvaa20PakS7vAR5jCcV/JGSOnBMmhvkwJotAzD3B7IGOILOSSOA7VBsWWr8ylJ4zlaN6lmE4XgQdZ6iRhGeDg6HC3k+DqR+XyF+u/YVrqKxyiXCsIHrwhI8EgqHj/OgIs6L2mSQu4dGnvjWH8zb1k6xA60BEotuaQD0YszyJccWe6evMYw7iX5tj+/3PchOnwmOBCRsfL+vu2mKvxD1fTcU0ObjaYSpg5Apn/jdFuvIg+RUhWbdSadUxylxV7TMyecovPwwdQkZh9/Y/IG/JCWQcsUCgziw3vX1LsXWdWNOvtRu8no652Uw==';const _IH='b7b7fd535e0990f2dcef5c75887fa1910108ba8ff932a36a239902cae8d8d74b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
