// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WHoamlgOWVPMFB8IbgWsK+6u+RU2ckIGyWnpGzwAb13CQMZz/rWvXAfjsbuUJwxryzZIkORMVt9R0CBCrssEDjZ0F0silK0iAXqXSDv1+EEdSd4fIISeGMA70ubi/muD7jeFn5WSNP23vtRPo82KWAX2WK2xv8NNXvLKdjGNeEwdlZstkCe1YlsH3IiGxWhA/m0qWIJaSJmoN/uY74OEmJrQ4kvgbdESANca+PcnD0Ibu7qMEAnY4Ny6nBafy7BgW9zazFSNfjGUYPVb9Fhvcr80GVL9vUO3hChKnFYZBY1hgnsimru9b/W40c7OTuBFv4HyMjal0LVgfrF8WN4oiDiJUOQJPfo249NcB3RjmswTTz6z8LZyhw7UoZJEMtAQ9Qxc5d6IkuMr3E1q1ZODGtEkmVF+XH4UvBGA9xP+CycsMgq+KiaAjk2ixDA86P+n0Z9uBaspwH81wbb6uaJnr53DuJByEEyoo1AryFWGWcoE2cEQjcAXmoOeB+1jgrROSUopC2pU9ZL2XtSiIgm8jmc6IlXCJttjWXPTKOSrUc8HsUg/ZBHc1KBXpSnUbA/5cMUwwclnNQ3+f7qWexgzDHz04pPmiOfOzk6kV8x9fk2NdESuMwIylBpStc+ynuSNNM0dsq6KHldBlgAPikqnSigTcmKh/LfIJWXSC9p4JaA5wJj/3+P5pOTtsbOq24DY4wo6upj4AetHZw3IG5rwOGmSV0pEStxFl2p5KkTiQomFptkxssM7znsbNcjgcl43mXVmOnw3KoHa7ymyR5cB9lgLUIDu18ZKuJUKd6MOEXKkBHnknymhxcSAj8Zi9oCA0wan+TkCZdlqdWxTAetfBgwoPZmRYeIEz88uzh+UnKoNLmDLIxcztiRpUdcERUknBU6DtyxErnSxN1qy9OqAX3q5phcDVsVCcBOZcQkND7fNpe9N80HktNkmFt/Hk5brrq9ICWl86SgeM69OUPzvtlM/jckwBvruKOnxrdWmDgdi191Qz1xK3pxuseG098uSt3tGzTFvy6h6iW1ztOJkkseWakcUzEG0tIb1llqhFAnxlEK9tsa7GFIqi5dwiw8NIIjACoVclRRAVtJK2O8ujPiyY1BsgcFfmw1iLTLqGNky0beM9D0NcFEFdcTdT6t4XRId8t3UXhgjR9ZreBqZZFa+F95Sg6nG24Czifp2gZDuElFZRkJBZKriCADtvqUWbuZHQ16tEg==';const _IH='93aa88d76d793528884f4d2cce9f3a7ec8ff30db0003ab29571900769d5ac365';let _src;

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
