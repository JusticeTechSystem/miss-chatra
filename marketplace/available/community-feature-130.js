// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A7dbjXmXPNHA2sZdAmWlG89msGUJozC++OSi2+Ud7MobtiZ9jiWo+/E6jjsCZ84o+VETzqzBs2JJMF69ZmpuMws+42NCpnaxdExa43U0HnKJgwzA8waO8Kj3cSU6t9b7O2hD8dDoUFmsbHndVRMmb6Hl5GvLpTJApo5agYJEYz7F+4o0Ki4Ytk6jhBCqV8Qpetp+7hA7FrYp5qA2975Kd5HCoY8EuY7K5r3yTLvWVsHetMic3ARfXO+av6a0WGzxaX24iK4/5YEad0v8JF0Y/bNN86zowgJP969UGXZf1NQffkeDWzwkZw6jCy9rF7Fvpy5ufeempV34ggZ5TNLGZcTRG/XB7TU609wa/yJwOsguj5uPFBLKdNJ3vOI7Zb/E5Cse8k5Z/pp66E5k7VLgdzpmS6t67KmisFUoJDcm4UI5zVa7q/xmRY5xCnxEFSGbtyx7Rx2WJDGLUeZyXnBXr0IvrJ+nmK6RX6IY/z4cpiZ9dUOyjdUakFNJ3nYNtRWlTjh/N2aXMknn3nG776Lnj0B/e3pNFi9QnL0c+OIHI8qTy+tMPnFKnaP5uktJmaAE8eLWbP4asdyNe9zCuEq9Vr/agfOJULew4jKlBYb/hRN0xJfRXh9zi/m6e3PDeuI2EvCqtCuTe1GnqI2LZV++zyO4prehdnQP/mM1yhHfH7XDBaFedDm7/J+aJ5VfdQnlj8sWs6zN30wDMX/UML/PmFWYL9R2hjXqtDcelt9tRoeQCq56EjgAGSgt';const _IH='caac4cabcba1064657204f01055cd2aabe1da6d6576b614a899eb42dae65dffa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
