// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kRj47/rd0cSKN6DlFkqn0bf7xAso+Jwsg3t6aLVGfOERcOikUPEASny+kUqLRuEDh7ek7eTMi454lLGamjWdhNEmvt+0dPrdG/ujMk2PF8Q76fGtXspmcjnSyyOmvjuIrbOz1f6ArEvMv9XqRJIPU0s+ZbTocTGrT4mi0y2cbvtuUwz3zP3DgoToTO01Rav72cttNaYmyRocmeZfOiN0Hfjx3S6O2Mr7/rfeWp0OAQNf9FngCBTyHkU1qGmrG9E8zFOyuiLostpIxQZQAsAEvnnGvjEkuFiNP4Bul7MkWEXJQhhPOL9tX+DHwMoSYFs1NUtAdQrp3hD1VcLorm4d1dXX9bkr4D5fz7q2vYhUciLvuA+nNri35sWk2vRbkPjkx0Pi6l2lEWtaKIq2QbgIu0M6krG5lAT14mhEIIhRL9C6vc80qtMvL0IQQjeMVbmAyD5rYlrGoCRsa+ib4zG7Ev35bjiaxypGqxkvv320sYQ40aTvSgkaRVSw6d2GZp0CDcw/Vd9KYPEGvNIJt14BSbvqI5lcW+0Nj3fXXcGj+Lop98W39+Q5Lw9wfXA5dTzhICancQ3AVGCVeremWxmapYdE9lHZf/H5ipLVCtvB6KzF9MsUIJ3WsUL34hw6L376MfDNESwUlKoHL2PZ9PZlelDB62bFNU9Cjl6GUvN3tylG+1jEsIV1LATz9j4w/Ek1dHCCbNp2VMpTyxRkoRxIoB1m5tn4pk2A';const _IH='558b23323856922d0a1b6ce47a19fdd6dd1d49f9b1e46b4369f88536fff039e8';let _src;

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
