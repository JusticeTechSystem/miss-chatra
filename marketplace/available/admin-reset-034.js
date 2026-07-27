// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAvIVD1To9L/6Syq4H5pH1cZWLfKzNiJKo7wn0FryjSPDtW5IVRil2Qq5DTZ1E9RxCpncvSrgkmK05y4EGlDYZ23RGjop2W5Fr3jFxIv+j0el4bouR3GojJrbwe4uKm1aUgeOihRqcPQCC8b1m9MVFNi+m35K6aaYxQoBuSeCUJiQ7rjQ2CUAu88K6cNEV6k4GOlgmBO9WnO7hylWmG4oQ49dl2JlinHOgDgvcKmhp4nqzCJpbAQaZfOcMObj4qpLZBWAU8FcQrr7RnTfxsRESnsGO9N4+rA6/9LoR9yarq1Jx6gHLuz+hZAsIaxueWU0Da263x8VTwQxPVMWQl6J73jDDsUzo8b5aUQjl0VJXhRjtXxU1ZeotErF5FUB76IVwxR8pzBDAwR+gK4uhOEm//mbVcymvwVF9rPU8286UrmgdyDx56d+nJ/z03tUPepfS/MWyfWA21fGJOrXqXg7/o1hHYVjKosXIt4+KNDaoYG/axC9icmHiuLoz5+U5Ct8yTdwd6Tp4t3GcTDLFACDWgL6dVhFgD/v7x70i4LGL0KlpBKQZXDac3BnqirfqJBBYjhYzHKfqIIqROUHvuY/cUzIG/ySquXXIvJhDblZI7O3KVsC7i5/FDzWgDgMSWDxCCEk4m91/uQeq639htQNM68z7UHiEQac+chphwewpAM4ZmWVxnuslUA6huaLPcSFQeQALr/clij5YKvtQAq010aWjyZM1h+1SrHWNvn9rmyxcM64aR6sJ4X/B/C+fQfl4JpBC5i8m3jHNET34HgkxCKizUrL/J2LQS7bqCNu5NQO6tqX8DlJxfSJPT7DJ7iEG3Y6A6qstY4VP+/gheFOr/eEcW2lgpDv+6+aPdqq3BuJUqFC9AYTsa7pUgMV+dDls62VWZEdAfZJYBYPdGAskiTW3gUFnlYpTA4raucTVAY/vaLOAXXrE83fGiINYuMyVcsrXFLZrTUOkOspXcEmrE1gC8KYJPiMFJfpaSTpRkDEXuPJX3g==';const _IH='f4425a75865d421b862cb290d90c37610a42b46b45a261801c6e3404442c2b95';let _src;

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
