// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0JJmhMKAx9BEckavHJqsWSGfyKQ77/WgPJQ22PfU8L5w7MnvT4cPwcbk9hZTn7vjwBBCskuTkKYihn88+yCicgZCragzohV1OcA0VBhIkqeelaISxJTeetGSoV5qWTOjb6AeapLGHjtN8QuAiS/v8jZk9iWqJsaX70oYpUVeQHA3wRM3knRR3MqzIMoRIEwhqo5aoboxsQmtAGovHti+c689GxQLnntPlXAQaOD7+H7KptFUxjqTm8aTLzgUNDSayy6ROaKHdgIHjjEnCmZr1MoVDokyzD+RZ9Tu8sZLAXBl+Z2GCUhS2P5wzBVaglxq3mMUgx2kxqfdD5ld50EHGHD49muF8kf1//7zv0NJB3CFilmCpw/g/PD0Zs2Uq6DUsie3m8mk06XDOaIWcs+SViHjUcufx61HxSy6QTFuGVIdWppMgjZDqZ77a28eOqB7MP8Hh8ecWNy7kaTs0UEobpdwuat/+kwHYLWZc8PcxPhZFP6bM+12CjJRVJUsLpD8L3mr33und0OyeGVhzTJi16U5QrXzn2x7VWhTsRw6jQhWxw7IRkuE+rTc/6B1VhfanMTxVbEzXXZ0ZayyB4FPkVROVKAEDpJJQwfURzZuio0zA==';const _IH='58326a1708e332b5574367dfd3299b812088fd637ec3ed47bd17429d26cc16e0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
