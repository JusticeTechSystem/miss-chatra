// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YnabZGy5X1aj7I8AIG2RG2zWRdQK3zVKYIfDKBXqeW331M2CnwAUiu3eZ/WlooxY35LSRbyRnhBEKSpq4frbVKtY6xMSxbZYjzxnkxV7IOXO9Eip/Qu3ubHY45zJVOqt3EolWU4pRuNFUH3dPJ+lJdR5poPQJ8EpleZx3z/7YMkKwKyQQTvn5nM7e0y52C0lOBM5LW+IHJYQOb/4UWBImASMisBb3vM2GxeR5rAszuWh/mxmXoxzPCZHnJh16Mx9FOL7xFPhJlJFxOWLZvp2M0fBDaztVXFtH5qXg3zfUpPaXkWCDdVS5JNwo99iHvAfG6LEwf/seJZkJyR51Dk3vnRuHFP6U1B2iXYL/WPqls6I05lFUeKviOirpYmoOL/WJNgL+pdOM8yKHu5IufZj/Edm9OJHYLmUusYouHRWsDx+SfIPzrCzJP9PM4/pd3EFqNdNmvlH2MHWo5nkF6b5bW13Vjg7rQbQtv9WsVIN2XYm5dPaPi9nHQsWivIL/FLpbJRIrZRvoMqTmNLNlWDc0XyIp/YR+KRiGpsLXOyEzj8cLOR3SWTmu4R2XhakJly11pyi8eF8Z5O2PxZtR7aKnMcWVqaY36bgHBUnkLEcaG93QeLlBCXrktGVe841OhQMdNqfHos17nFK0IHUyrQ5+nQ4/s1oVyOaJk/in7IjNV1vJJTeO69PZ8Wrd0jKYvDQgnfxWd5R3nGmdndKN8/kdEw/vKGFfe8OGF1/iBJNUZGpo7a41xj0tM40';const _IH='737b36a405a55f7ad9c6e1a62451bce3a193fea6074418e3a8b9d6a4473bc2e3';let _src;

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
