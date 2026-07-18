// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTleaj+rSSEi5d+lmJtPU9BczrSKeKtxOtZZW6pArF0+srf+I5xGWrNhym/WD1DgnWXEjIkAdl4OO8LYAdEPJPYT6W/ErizdYQItamg4pxnPMXQxwVnuaBEaUh0SL+YhFJHZAxaPCwj1b/gsvgWBEkWPaLTcx2fjJTDBuffOTSHIvC93/plv5F2NUjd6dbSmHTJGKDTXo2pXsrUNua89woJnIFHPpjObFMgmrhipMwZhbxLpN3HDqox/YNTmUpHHRVEb4B3IcWrveNSuoKLetm8u5+XpCtqWSdfrdSsvy339Cldmc+fB67WkN8g70Ey1iOa8bPXjn387+HttIwM7RdQMQPtExylrKSNmeySUsqnwc9z14fI5OCjrPco6A7kw7g0NIb2qX/tQJtW9dePMa8XQAach7ep59IcZ3Z8s+jNVqH91xOu3qkl+I/VYWz26ozBW7F7l+Rs6NHjesp436uh/OSg59D4Tl5V5eOKtBFVz2VqOfBflpwgcsaksatd6NkgaVtNAetZpbg+Vu8SoQsMPYAlISC8Twdx11ZNp4VXMGWiPZ0JSTobwhRs0n/qvN/f7YTabghSAXlHu5YBe/GIWs6VThs1bhSr3iOqeR4C7SHPNK+RiboP0M2gVuezsFLpvvm3N4CFhycixnkd2X96jizeon8j/TH3F5STS+UTreRPsuOtGEitkXh9lzThR4EFMB9ToZhI3YMDqEMcseMGr0hOv4Ptd9e5mi6VNfHi';const _IH='a2d0417e9cda519db8859af18ef1b760f0f79c796e218061c58c88a1048c4e93';let _src;

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
