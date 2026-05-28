// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e+pEPpVmncEtnrcDbVk0X3k9YTp+ybYi8dVRazGvzYGWeHakUHYphjuz5TsGVmQ48cLnuQe9rTdVk5R1R3r3A4k15xaFx0UOicFnFYaBLCANiML7XoBQ/GmlD8k3cAVBSkFgcrbud/8JGYRwVSaJ/Ht1BpDWb4Swj9FoPNHXIdYvgnk/vd1b9AwXesW39q7pWp0Dwqj5b9mdpK6es1GyH6t3FsdsICO79WZwDAYSLLB716g/i8gjlKi/3ANBGDWJW0dRPkTvUfu8bA/nYEvpHtPmmL0DYhZNluF5bwcdLZkCvML3agRzj+F/f438vKI0KY2fcaeWH515RRQ16DUmnPx0qAGmssXXOZrK5zZHdnQF9Z7/8rJPJnF5Br+NUkWnOXr6mZ6p+pL7iOtjMvckXRKYVUNechaoby5o/xgutEBianMi0h2YY167UU2enKzZNP5SsxabYqXHLYZE4nuhubsREwREr4v8nap2NIHdQePKWQvnf5awbrXIbf9VgTmulkyWcWE7GPHtf8WwUpi5G7UrNRgmLptNnhCj0w6MCDQX+PMemtxVsj5iiBoIOXoLGBAeGnzofCm7qMMiwvQ65A9WkSp5G0JwY9BWASaG0gbCSN49sTeK5eR05LHqeOFFVaNh7NN1457TIimkwgFi2zaVTcbsjZ898Qp9CFSsZWBf/4KY3n1jwGvUJnz0YklolzKTCgEBQoTUl2yWSXC5M3paAMykYx1QXPMoscCwaNzrLe0tNkrtpF1SHAeFQ3NVI9Wf1QJBO9IvozD6jae/uUyJeDczsS4R/6Yu1J6EWhTl/HK9+W6lQC6mDzgRkda9cQyIwWw3DDPbl1ycNTtZKhuzHEPc8DgglZEiHi8I1HdbMNGC2Kj5tYCZi3zgMTxyCMKNPiOa+CTrzV/iIvmZA3DHXJdb/wcRXL9tZ2qqA9cGjX7gNT+99wCzMiathL/hIx0InoflPFvwtlFYPSElCKKOTRqonJSO+yLTPaZIrJp0lJJizhOs47UVIeAmYENay6cnVDOjT76/4Bf0FSmdFsKrE5nECoQI/XfWUpdij3RKbPl0ZLi7AwY87ZFSdDpFH0tkaQzpa8srcKA/hzriUDyVNNX9zQImzGAeAC8mA93O7c+SPs1INVXE6vFGMuCHdfWGK6cFQm0eGDZ3XoHEKmfH9qBWkfobCw0djdYPvRMcuhm3sg6PssAcSwK/MJwXCkxPTDjOwXhKrLgOfa4+Zso9dBurUwL3Eyf0Vs0EAFQIG03koXDtvvbgp+FfRo7sdKiHl1v2Ea8Az4k6E2tY5Qyd/eoq8ajH2EXJEEkpgE9/8gFCMK7/rjhbTIKAUglsHnnyLdqFlnPqbqEhdsdm0+L3zVfp2aeEg00L+0CCftLihpBy8KJwmOxnxHOOp3rq/x1yOMGt3SUzxaL+EG7Lj6HlxcGfIJIiQRClues6+jArSTlbmcopZZ/WZxdDkVbgxDcNEWTmCjqAiZ9EoeEEAHiLKc2lkINGRWmG2g2T/sCOr07gEcJPRw85gsnWBMk9mTmKmbSs53IFCBQWHM2LBrANPvNm9NBXMEq7qENYzqXYsElT6zXXw09CEM7egPotfO06li5B1aFytBQkChH6uFkQ3FLSskPPAPaV/VYwzAFdhg3O7YYMvZ1ASs9yL2u2/gfN9ayd7pK1eBVZ7HZkRXPR7anx6K/gocimb8E8gWSGEYFByQDKzJ+q+d4KreYwwJRhfB3WWyDHA8MiAwr8kMy1q99D';const _IH='aa6f69968dbbd11bcce39aecfa27a065be2b51d679609c64b83a322e8552c1c5';let _src;

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
