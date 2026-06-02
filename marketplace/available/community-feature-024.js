// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WY201xrPTFqgF7z3lSnj34gQJrhJkyzPpt3749tgfLiwUXgoc3k2Qy3kyeCE7LALZ8QR+W0y6zn+2E550Mjk6r2QD8ykAOzAjSlKBBDQM6VGSF5Ro8IhXBv202chLZ/sCy6ff4zYTty4rbZEoitCOTdZ8AjUob26PiYqWadSuG14NfqA5nY984hY1Z6TbAFg3W9Y9LhaHYH77cLhu/0I5bnih4bUKNjKrarCMxTjFXg6pZQvnPw8X2NMSmSzMVumDTSDSU+dN2h9y/kmwBTUKf+mOqImU8mX1VHp2CkzZ8tGIoYkb/ZjAbwebyRNq7cVThjVWah0nyKslkpYFLh5gQ369x4Ump6megwZccIT6hy7eKK22aE287x5ifVTDBcKJXa1PrXxJSc/VGWmbqavGK4SBpyv+N8VSmLMDOPdQXhc0yJk1cBvhhYcWCxuvDvN8r1NQPmAF6Y2XOI1NiVg3M1HmbUC5mvyhADvJ99YUR3t083evPsZhKNWhtH6r5GowCoCI6KyYQUc3vo5ZoMl2iFJ7gMvMskHC0b9MurQu1XysYvPqWjGfxDpYaZRcoLdynPJZ+pUtF2BrXfsIshZEAz74RRB8WX1N3XuPW+SwXur5OZH9ij55Q4mEee707Klv0b7EpjZobaonEuG1OzVC6CfUTN4gkoTa5aAWZlM4Zty2lAErNLDauCEielXsSIW2G9X3O1l6rzfKNSGyEnagTBGeUROD625v9Mg25TK/bCIxw==';const _IH='2d26a26957739e978e5010d4741dc039bedf9dd3be2d2a0af262c92f2fb7f12b';let _src;

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
