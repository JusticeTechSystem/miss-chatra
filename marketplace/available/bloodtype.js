// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvtv5Fw3VVbwu7545IWsdxT0pngeXqddeobCv0RHk2rXZWupBCSKM1Vwhj1hgRAMBSTzhazF8mun+ibUBaALFK/HeaUHjAJxKVdrsBsLS/ezj9pqZ9nKnZlsf0JQZwnaWWN1tV0FvPvL9ehZ51NPoHxZ5nP5b68sMaphEoGXy/ssX1c5dkIycMxGgEzRX8R4AJQvm9TYFpJdfW9s32drXqvmYheQUsFGJmGssW+AbGUap55TRvD4i3SsXtZy0w2gAy/jGpJi3nWHDFBmXDzSG9xlC3x9tQ8XJ0y+TmvEFQvqZVRGbujELat5+CFI3VX9rqrorOqa/GtXNNL9ntqbA/zeRZtIVR+yR08sqXWBKzMJh7XAyK7j0Bgl8mjS2Oomi9VDtDmssOguTBhejfRApOtZMt51hJpYaB1+y5AeOfLj0rPshvQ3u55NYBmfr3ABdBAn8NtTUadyodLjIKjQ4kqF7ckuvb7xqIL7rD5/rVYrXfsx2RyjtuEUeJE/dId2g5Mb8xeMV5OKuBRTikBXH0b+fkQMNbGXNn7PJQaUZMuh1Zt5QDDwYlTCh4C2PA2qJr+LX51pGaXWZeJKfChrCSA4iob1KBD/DSoYvR9cKFBqOlXzjaezBFYIqha66LBI0w+JW3d4v5oXeRQ1qWxLdLC4LE4z7qnyQlA1kqgFA7x/1slGcroXrDBiJFdu/5yliQWxl51OkaiLHbBSE5S4UiL+YsukF9i4yDGHUKqWXURhTeAxdCWI1YDe9UH9AWWecAfmHcTc/jKUmLS2rrHf+Blftm21qyfiNzzag0XukFNeceh+58uOIT3rJft3ZC9dOpriSL8qYD0jAT299bI+FOqDQOz0oIoqtF50rmo5NkAbYMt23CmWS6hvvYO/hHJEdKBGoTy60RsZC4fXmegnM2TAausxWsOn0aviVKRMtnodqzVWyjN59aSNKT6Vx/b2dR/sQgMvfOjQHg4aT6ey4RbKtUObn8y+MlWBOPqif8rOinPwv6tnjxThAX21prkNJ7dnG566YBCmTw4cugdeEprtt/IQF3tfPEwzFKp3pbZ7c07jB3XUo2+3s2oqs+YDYc781kdfAFit3gbM6YnnzDCvI+wY4MnOPYB8Rci/j3kfQhOrfFIsZ/7riOPNR20BMOV9zn79VzD4I+Nw6ueDWuLgsSYtnN12+ITKYavn16hkH4N5Z/uT/GQRx5o+Iotq7NgFKGIQ==';const _IH='f7a3dc9d5698fa29446cb295b82c8a0e812bca5f574c4f951c4fe631d1e90de2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
