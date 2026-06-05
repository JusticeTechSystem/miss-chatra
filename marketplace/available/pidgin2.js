// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sZW/S5bq/je+OhEO7EHCS12y4dimG9/SwqMX5R8RLbiSTrWolb9OBS8qdKdRp1KjKHKROgIi2CxBo7gEFfQIUMIULfqP9EE88W7p0lTciOPJdX9wffUVz4xYes8/YnQDZlU6bF3TzC9QJ+bXZEGpO+n9t3tTLctC82lReittxb5K2RmCAw5WjNli2n8x0e2aIIAGLVRZ41rVCWzOMmb1xhf1sgYPxYhHcRLI0mhY+PxNY3GRptvbnpLOjy/jonLhixPb6lVMbgKoGChPbujwDNwvlTko3vRz2DOD6euPlyRjCflmH1lquf1Qbt3IOd0PT24kdBOHIyvRkxDXDal+xEQDGzUP+t2m3J2k7jDq4oJ3l4MECFMV7qICnrt2y08GMqd/qhFHL8CDxDP8g2OyWLMXHiIjW62ZQtyvlz0SCS3G+3SWoICBdfsQ7g3tE2tRut99WN9PRydwO+8fEis+fL2Ti0d/LhUQYXpiucdMCsSaRMUfMu0t3TnfedpN8inEdMcQNE1eVoiNC/xftDIoEQd2EjfMbp8JXSwgq3YljhbAH0Kp/sE+K2NwVd479a33qeMjqPKxSRwjjL9k6TApVPZb5fhuhkMyXZo6hRZxvc+TgJ+FbYTOeugiuDm8iwaC379duqmlR+mMro4Y0ix7Zz1SMVV7vmdaJth0SrzEdhY0PrlliNBXV9E3ontBgrSNodqA33liEkfWVQ89c7WY4C4WcqGlnDzTzWGUI5SohGqieTvVp4Sx6Yx5d0qQm6fKBN1ir0Br9ksgmmT4/knEBrs4Vj9pf1WyOncD94TLrKIUhyrxKEZbMaKnVEpMWIRxsK4MlmksiBoPKPU/zBiTQtzAF+8UsUA0p39vQlO+Lh/6kU2jV+J/Gjkb0y20vbxsktx4Qyw3XPDX1aJzWiTL5d0bz61Mt0g0mjeZCA2yw8AuGzYdqKuoD+sdK+kCrKUwi2eWjP/JFDgxqcho0hZgRMTbibVHfPea7bcerRhHSK0mb7XsZE588mSRV127g8gF2LnltVIuZWwDQRqP+7dcsZ60tNXBQXwERicqKOqXPvA3nbsABoqnhjyB5iaXYQ1eG+ehcjOveBeQHtvewkIEJUQ38gFhHp+dyLlniS5Q0Imsnrk+TTT0NUsqfng7myyKSB+tal0EXG3qtSC7S/yqzr65w0FfAiazYqmhvKp+GrcwdBrEZWh1sEzNgRg0Ag==';const _IH='a6845dbe5fce9d8550b3c0f81f443d735736c950c2e1a77dbd8ad5afe1b6887b';let _src;

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
