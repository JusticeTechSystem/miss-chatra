// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR08T/uMNRm+FBh3Okft2vHjN0C+IYaPubm20aloYzowSh9PmENotRohegCngSrDg2/tzuCfpIWBu2Uc5NP85UGtPoF7/UPTLeyugsuJPb/XV4qq6Mp9b+JskysQlBkssJdQVTgmiCAF0cqBwCsWE3loo86al9PMnuI7ZV+0its7mfzF7/biaOBNm0oe/SygT6tunGo/sTvWkuAi40AiCJAMR9qvgRa2lGtRmBsOQZQafYf1oVpIUeeaw81bBNEa6Xig3BhFCkix9jsJgwMx8wg5VS6V0ckDfJ/G7ps84mngUuroiVZdL+sKmCoghhCRss4v2PrGuEaBMpebp8OmPrT09uG107JsAeLgWOt13NDS1OM1ujwYHipNOOwiZvP9mhRxdIfJKg4u8GnAhIJ9TpgjSE7Q4wq+omFYGvIEoHcZsZW3Awsqi1NYFWmFwmhpI5cldqZxskqkRguc84UivSPPtUEoJdhfB4LYWTLeiVf+2TJQM0fFFfsyxt7DbkDaXmjLrUWsvWBTcs1CmTKiXqgXpXWcHOlQoftr77KYgRBcckqRNQEvEwd1ER96LnME1pmc2PUqzpN/yd37ST7/RavOiZERmg1qSYSW9zlTLQEOAMcOH41/oDnjCJ06toL8fQMFVbHPRUhxx2mNJN2iDdiRYsxSBW3zZ7gJJg+ZLNjKEMd6hRvRD2ZuyvC0oJZRvoyPuPd/nkIs5whozD7tFOnI/HNZvS+j1XGtZUiXr+fWvjzps+QEg==';const _IH='ef190ceed689c19ece033a79b763ba6af4fcb688dd8bb562685bd37e89b556d0';let _src;

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
