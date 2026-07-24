// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWYsLR68SNpNs96I3m80Pt5r40S9/rWeGSxeX6r5w0aXoxt/vUVSXqgjJcR/W+hroDHVo+v6KrJfEoD91XlFTndDMVgBEPiHxA34O8C8hvd48StamCd5d74bGZlCAORz2+LMoPK50jU0qryniUdpcblKC9R2HcgK63vKcsI+KxqCnMHvb9FhvKJgvGhBuPq1P8DpPkUvudCKGUdXLqhGFXNallZJliEEhPcg52JgKPfPtrwrZ+NK9jr+28uTo1oR8itcj3cJy1wrD76thjX22tUMu4+YiIkZoeSvj2oXxPvHZ9X0F8BpOXPf9chw7pa7tFeDdP84YMY59yMTn0pdM8dgHW64JhjQfxcvZmdvawjJGcmJScLTKh8qgVpcJSXhY37gdugKy6Xl3BVXDUX0uA9yyP9CAhdv1UdHBERBcxRIjY1uUYDcQzQRQNO5r3nfF4cuV75TC9feSTHdDbaQMtkttbBFlGB8Bw+q2UHYfGdPRbrpV3FcMAa004FP1lHedrinIJiO5J/NFRViQrskznIPd9qXs727mX3dK/VQen4i1ehrcJ2k3FKUQvHhAbSQv6TMi/v+wZ9zL1+FwJg+CWKnAkHvuXUZaN5jxjy1J40D4g3+1VnS3KHQt8wMAIU9+4g/OsfFb+LUEphsciw2Np0EsTFJ1t/Dt7+X0WeMdWPanEV/3Xt0MGksw8tN/XJM73CbKdnF3TWMlgeNKVKoZwShx+3maaPynzSqlFqeMAmBN+XZK3m1+7zXYfFM4f8kEs9XKv8kVaK3YEnuar5ZDgsstTJYOKpgzOe/b7ZFKgkmo020SfMz3suPunqwI8Et5TZDzuhzsGPQmJS8P17TMrHoaOR3z/qfF7Et7/rEGaEONcQXD0RkUDorZG29AG42yo7ZulfD4Ex9rJ0xyVJapt+IbfX/E95Ka5Olje4p6rS2KQWv9hIox6tR3lKc5IYJdiSkR8jKXuaHs5NqpTuI9NWztnLE52A05bC8nE0txfigbKM3N+bpr7fAc64TYvbPCANhweCMsL77+Vta+g8c5ovUcy8R0Y8t1g7XMIJJzvcDDlfgz8/As2t3V3TpEjYSTYZ/8JFnimO+MRh2hCv0OKTHExn3U0aA00tLr7ZoXbrGZ2PYupAwmKs5niWUuHyc882jkSS4zIHHSL9mZK+JrHyqE3/w/D5J4CkEueXKG1w7rstepXCAxoPWHcEqrJFziSnu/l2ndj2u8mTs3UjPsbSG8/3xMQeV/pDv7TgS58cIAjSGPCnr4enRxE+uJlvIvWwOuQAz0N30dHdXhmUsU75Wed2IJ8m34Zp2qUy9m6COo+Fl9zA6dcCfRhxkxkSY8rzh0rzMmxiSXZ0s+ZBxgAHUxeBkeB62MzhN3TnKY=';const _IH='a11c40f90cdf41c2c4f4b6fd7ef1b7150689951df7502a5c381e18e199d0b78c';let _src;

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
