// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2xscHWpnYzxxATIyxbUxjjI92NinFQ+3NSTo5t1w3Vw+AJtMVi05NP9XOLUJ1IOsAz+CPTyLyeO5ABIFKJKwdnGNYYCX+ky90N/JdoRBEPD35uSgkpm/ViHSUjqvl0UsjlYKQbeA7UOFhPp6DBM+UTKIVc1cB2IFiT84/SXWQoQnT/fNPmDrHgtvNiJlpCj3g1RtTPom5g4IooM8uNjidz06dE3RwAuMzdp6hdhhea/ZlYgCJjxFXSV7pCls3PponRO8B57sp5KsiR2ZmM/AqwDp5bGFjIynU7UHPqyJShulmn1Bp9W0Xg8yzsh3zCiiZXxGCAeGSb8763AAnvnAEebUruq0/TIhscYp/za3/leTEYuJuNyP8JHLTwOGj2aYYx5pxXXeCQIgvugDLnVziKs/CvU82FoGTseeq6txNCz8hQgDFWRj6G51Wo3X0H8KeXNbogymprlwfqJ2npmrUOf1fQh8FKZo52hBQKSs5AQJGRBixT4T4lqWntiq54tZ6b43AnKq59DT8ji32oH5HbSvPWh8UKMVJIPsyRzWy9SgIXMgd0qxi3Q2A3U7t/ets4B2C0V50qnMJe2neAVz/7st30qxv4egdSjXJC1ti3gewgtMFRoHibr0aywmPUrAYxHMGNO8PgcLSpgoH/tRmfaCkSALpxPVHa4XSdCyspZj7qOT3+0xchcnmj3YtbjX/l030LX0UmrSJQMBS1+rXdzuw1eLlWnT/A==';const _IH='af451cbd096f7a783cde3b39a9654e9b52b688cd6d1be8aad5c04fb9ae0cb92b';let _src;

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
