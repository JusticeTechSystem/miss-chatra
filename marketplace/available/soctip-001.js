// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+CWjeQZ4BlHU2WrbA2eOeDEC1KhHrQR8BtgQRMlWs8i5CIwXIcesYuekLFoj2EYji3NXXYaGSFjWa4cgrtBVhfSmuqOaf36Tx00TAoC8yTfaRYPs+Dw/7UCcZd/FsXZBZjE7wCr4ouYPmPKRPGIT7UOIdbRJtWwPL6ahHXLbpB5XUlAclXJm5g58aXSYjXjc0L4+vh/i7PBj5YQexhnnjdB6JL0JOvZzaoQXu8UMx9tXZMc3sIujia55si/cWs/qcv6OHgduYonPescwTe/piQqcQMBKkPtrv2tIZObvaPW1DUZffxXq/sgxHvLeN3fcwsSCLXEGqOuGphjoYOUP+gvX9ccFhdQIHpcTOXY1ybS1/QgSF5zBi8BJ7/2Z9AWMNsv/Ye11qJvJxfHas5PtyHgKZqQtfCDsNVT4GoSF9LFiQ+YIAe5OW+9ceUxFnqrP/7wgzUbeLC/jy+jTqjF5SMrHydW3yf0Ab2zfI9ybLX73CYBBpOUIYQ3FRSI/YvsOLTww0IbWL+pABley0C8oXNqU0Df5DrAwzXCds5fHMFWxa8IpdFVO51PiGZgg65yJ9eKEgie9R6KsDZXQb6MtKl4j7r530K6mOTkjpedpl38Hdp6r45v1dibSVZltyyamiF2zepwIGkohnaq8tU2ZH2T3YBH1CJrLwnYSgfIRUEF22R1LJpPiDepU+c6HnXLUzpFMaCO/FdR7Zyb2A4KA7XxOB+s8gPBHa23KiagJ1fMTBaKXVCXrJ83M3YcGZkxpKy/WnegtHxYjqy5s0EbjUyyopMg4MEuAzrechrIA2LGxsLobgxyvMOr8f5zamhTshICHDqyygrpzdZODXcT4vcaMK1kvjBBssiDxlFpsHY0AioS/5rhWvt1nGS5s5vdBsdmlrK5dRHp78E1AAKYPYR0oMb9mPCyCrtKFoNEuid9bY6QojaS7uYgJt59InG2mF1uBfEGZ+S8ZeQhVtIEn9cl9hVOBO2MdRudGhYkMN9NbDrAaO5ajHxhfqAApLgdz5Cz1jnESos6lW0fmaFkwyaOigl0DIdC+kLkrSo2U69qPslb2o4yKSvVc9jLMiI5SLMyu56vd37bM=';const _IH='aadbee33d6673eecda03f5f2cb9e7c639297ff9954b59a82582702a50ae20431';let _src;

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
