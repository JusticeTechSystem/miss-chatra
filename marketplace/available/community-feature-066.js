// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gan8Nh4Bk+BFSfMBkPn4+dChe3Wnst/NBvWXIvdc9FwCWZDKRk85WVVy8XbtWpwdFdPhhQQvi3wrqfEsIaZcWWUzaAh4365OiiG1/xlbCHC5OZyEgyiu30rn1bzTiqCCNd1/hHmDhzUeTjLd9Nb+Kd2+6Cl3TreZuDZxvR4LC43jmy37z2h3kQpmAy8KCxoPM3/WF1HKXdPbK6VNzl3GuuFQKCo5T9sVIIrtge/t+JrVlXVqGJwoXv4e3eeQ61sl2wHeSsbI5vwCZ5YPuaGm4pG0aMRN4cRcFidqoNXcLY+DuBLLU5jqFJRqefEi+fE0RFB4JBHdhxp/WwuRdM/nX53CZOaDeQz29OAiLlOSzjBHdOmYC3erex/MEs7NLwoz1e6UkYAby+GmKgf1+eisuwJTzU8cCqhQeQA7Ex1RU79DjqhQMLrLM3F4qiE9dVFp7aMBosnhyGUtQuq8CtfBYF8jDHxYIq/gA2jY+HCjXgroWrj0/PQy+44WoxmwF7/2mqzSaBSnQNjmJy7wc57aXmlPzsJuQAaklO42hnNJks8nG/tA17ywhZaP0snvvZb1rP7cdpIxcma+B/NnieZSIO1l4DM91UJZxzy/TH2dqlhaaDQov1IyBRgU0n/cC/Vm/SVqCLlPeEpVc2DI6927PSYjKx1BjjO2K57wEAeT/FuAQuibLWWlALu/LsPc05FWMdq3TE1f8dx2caW7ewgwRlynuyQ=';const _IH='9a68f2eff8341099830a881e3805aa3bdf619ab239fe1eccb4e14cd59d23f50c';let _src;

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
