// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xQ59eMthzN1nyEe8uALiILuWibD4/bIornQb1gO1/AZVY9hKZNYa96cTbpGeUgtsCBBnegxaavXVQ//DWeOZW56ZiVucSwAfguQ/RIV16H9/guXx9KlB6BawjNk+H8Rg1MF7CtiMOX6uTmshmNiPCBV1I/YKe5wj5LfEl7JXnyNrjdr7pRRgtWM9NVOcmFi2zGgpEusOmCGAxZ8oyWwTebfoGjrTesznI1VEj9ZIeNyil6IG8F1Rc3JkJZAjL6Wj2VRFRYhevc59IMk1YSQecqcgIVL75Vr4wpymiZWFhYdhY3iuPHsvxT+iy1H2NgtCLnczK0rKU8Gdqh/luNP3PUTCz93vSNoPFJf4qw1/9sDse57AwoyqeWGXwfy1oQISbO4YHGxsN02Nv+JNPP+DxrfrIyBybULTmE9w0Jikx7oJFNgS3Pqa56pqinXCq5PRfETlstmjjN9c2K/xXxaIloizG6IxCFKmeLYBCbVL0Ad73htXKKRo6UR8PBj3CqZWRGpcucUrlCjq5Ho75kksmvP2yIk7mLRLZAnVhXEn7nBAhj67fxw24FqHCmro5GZNogHLC+DkM9ec5dhgeBkhshgjN5raZXskzCvJnpdoTGB8qd8PRR2+X/BNwRCsjgHJy1tQvIDw06c48MywKkJysLgpIhAadNxJRqMthcMYqZfSyTojq3FYAKAfPTAt8FQnsQU9YGMUPrGHLldmcNM/YDD8c9Hi6YWryD5KJ0QCfgVKf7iyGO4h1pqF6k7uVJJ1TkZIkGuDW5tGXGfOyU9n8X+r8iRFMxzbB95/BV5GOTJH3Zlzc8aVou+q1xZQxdmW6eN30GshwIgFfl754DgNXv9qy6g8FLUw64ENmxAEtRB0JnnINm9qCVMV/EsE/qSE/g9k5irRDz7tjEYr5DwOL7hI22rJEC9TjiepzTzX5sGAZ4FV1By2um4FI3VaLHE81Y1goQMFO1CnGwkLzxq6vyeH+jxUbtX1wSpOvnEdTSpQjbYhLjY5JnwoAYXNuCqN';const _IH='101c775eeed3f8aa2bfb6bd8e086fb24e2b288a8cbac5619114379d5e28b7d77';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
