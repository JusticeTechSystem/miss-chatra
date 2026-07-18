// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVkbMriuarPQSaw/agI+dRWGjrEU6uxhzziKtDeoVI7C5BCN1NUbBKCfMxWnZosxjMJnV4vMNHV0B/kpTyLAkI+CdDdfBboLpH6Uwp7sQhQmTBpT5o5yQFElVgFeWaRY5wmuGfdpR2yHbUgnqcbLXiRq5pYZXAsPzu0wKp605YD4M0uhnls2WV1twQVbI8LIyzXkDJnsJCvwpSflvoPrKGycmQGmw8c62xRLiIth3L94K6vE3M40CvKD8RRAghYld65PSfrdOFbkeO0rVp1P35VVW8dbsUB84DJ4gAbBF7ZEvCPGvPwhaZ1NhSAhvoGOaj8DyhCJDOPSpgL4drYeX7cqQKJqlpPnS/NMQ7Ztbty1pJxUoNJZF+Hhlxqu90XR+Ny/DDqmM8Aq7RVrMeoAoDXg1Pc/mjckEuUyrxsbEsltrBMVkPBkL/8xmSTxuSe1vm+dRJ+MnMwAcP9q7pVsj7PpderTi9orRNKtBUyVU9HtdmjYWn/CNx9lR0wa0oMEF97Wgu9OQuOFWENfWJaKyJKNjFvwoPntrvGHUOVgImsOAjVdlOmmmc/gJ1+5GvPO27jEbeU2sLWwuigSI4Ks6IaGuI1QT+NDAY6VVmmasQRZKYT55QuE6fNxu3l6sp1gvaDnCwvuRlRxSfCwJI4gn20Vk3xZoeUa5KW6r/QcnfOTHl/YeFCTX5ZT55B/cmSu3JQoqNfzEbh9Efv9CQg+2r8Uus0GwVq86en+DcG/mYF8bzMp8dlYcEJ+rTb5UgAep3MLSPpCVutz/SDNCPGhDGwsgVR9lypx/SU1vZ1cWX5OxOZdsTNRC4tXBXbKsGcYzWfaclAucgBNjCv8XkK93iG9tF/2byGH2GW2Re3Jl03BwIWxy6g8JCSTYf2euVM7uGd8X6usT/YrRz2F7kIa5fzfusP4mii23mQad40qpX57PgovQyk2OrjBytjjOBFqmmVGOLEwfdbKMFWS38VGtImHOoY9a3v4p//c9Ddp0b1tZi3LF62NSU/Gh1XjKch62jt93LvjL4UZIxMELBz9BF0ByB+YJja4xEivoahB2VEunjc7CtyQP0uWrmh2QyxOoERkgou80n/iK9iQ==';const _IH='3d3b90935ac2175e31126b7c250a0b6c3579f2aed6912415a70bebbea8193ff7';let _src;

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
