// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Bm4y051NITNhbdzZkYnEBGS96ZrUdLszJ4EeGGnx2aAxAkfsRwwnD2ziIxDBVHyWYcbAckeXCipEKve12lvYFDFn3q4k6z3RfBwblkVUrSGOna9DF06jfAdQskl8vfHJpACW92HnISG+BRKw6rTK/su9XQWERkX2QoxVSlG28Z3PUUSajm6ra7GV2cFYGTK1Yj24/Q/5+n3mjFSn+gzhZCLRisgv9UT+71/fAJ8lSuJzHRcMA3UXg4esIKURz3pzXJqS/UdD1HqZM0Q8qSQBpVkMvB0xx5VSq6Dv6K0TYLGpyOXbdN8lrJ3POWu0PLwh6Zx9Qj0S2KZ2soR0eAKMfaj9r47LpbIhVfXEHigKUq9TFGm+9pqiPyXVU3ias78i2lhnChKBHL0pXOlu/aTzm6B/oH+Tl71CahgD392k8eOUULJRXtf/mJ/d1EH3OX2IvNEJbBqWl/fi8pjZO7V/BRyAVu8l/65FSS09ME3KSjU19iELHb2lTis2sHUjhYWn++xoHuz7EQFWJf8cFjAZalJb0SVbkIMq98C6t7sKXKIeGNVl4L3ZsLVK93vogIWQJgTxEtpBiVfVbUKPCOIVoGUzau8f+/faOD4FrEyyQm5Qznc0rD0zeMCH3HV6WuzG/vTX1PtHlW/AabCvDdDIwQHN8lvgFABITgxklZPVH4v4ev0kTC6Ey9bqor6m/CVcCnhAiURI0cMgSD0J1OG2uoicd6SrZ3qWnlRTu2nKSfbsfpagF4NHcB7hidQ1hC7+YuvDcadwfYhctFBxXKiolu4VsfbPnyZzVCGwXmddU+Rcowt645Sul96Da3nHBTxMT2aWVcJ0JqGLhp4Wb5qIybpFbDPW4lFEuRi1deVUSsfH4nkRjx7T6vberG1aoPQ2JVTwXbsPlQ3/rMSJuEafhMlQQWW8iKJYV1cquv/oObDMXQwABSM+IV6cLj5j90iXGaBHqewlQ0iuT5729yLqEJfO9U28zDPSv5bfJrqqCnr40GzomlvMFapU+EQome2E7ZKKy/D6FGu8i6uDxiMY+6ikYRpxum2G+jQdPC/bgQ9uQj7XWnuTNZKa2Bslow7hkYXkJ9vRBlopwo8i0HOBPWGyBl+0n+LWNvLN4+ITULyy5OrxFPEVXw+GPFPkGuJ0iOCvHnUTyuX9YMoobjOUfBCSxlydc4VcSPucZRI8HCWaDrE7WdTn/ozX2b9jr/Rlun2Oe/EX4SHdLgKZT+9bNYrFutFYUBmCUQskfdW2atv00fRywbqtoCBPyY5C4WP179A21W7Mo4FLbUVE9ho+ov5YwMoPfB8dGLaHdg8hpjU2z8c9mFlBf0AWf+6WAUHWhFWLc80WM04dHvgLdvowRKNxT5KlKPSbs2tbFOAXDRW3lflq3Nrtg==';const _IH='48fc935d141b2613930b58c378e03f59b1632ed186e2f10ddcf6eeb9a68ca466';let _src;

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
