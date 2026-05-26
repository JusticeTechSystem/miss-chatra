// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UozhlVJ0bUkdU8hl75U5juJR0J+nXP3WfxZsPJUphLwgZ2c4KuIMNO8/MNaU6DUvMzZxQ9+wk2QRxJFj0v+k3frqGZYR651QAbxrmXjprhnwfh6Ca9OHV70KRLjR96/S1ci4NNPFMeS3FgAj27Fc+zb9BedPX7PJbEzTkxN/XFodaeTnK8nGro6j5kIdn4RRsd2a3m3KO+3HcUVUA1NdMVbYCKtXzjGFlBrSu1Mo2MpSgVVFkOaorrC+JRvUutZYYqWJpWBHPqZv+pLzuPJnFclA2tUDHhKkn7ky5rCDjX+3SOkQUetQa1IiMJzCPDEbOK9qkCnfN7LHwao/G5tzsNQ71PRajuRdNeZzrGf5vt+aivT7pipnqE4PCvlbLG5fDmoHGw7YdbzvG4FVWuOW4OtLyXgdQtC2C9UuDZxqXyiceG5K/YWFTAQKsM2QsnbM5eVvMg4PWzer5ynzpwk0sq4eP9iNo0Fcg3HF8RIslZihjJnDCjU1qTUnywBPI8k7M3D5+4kOYBDIxSQdN7UJGE+EeR3e0S4Zv0Yx4+8Wt/Z0ed2Gm4nW20bDVeFIjMtdhUGHK6swz1nDSTT9D/l1NWqtWA32PCkBxqUHWm9BqPPwNzfKve/dohxv9aFYrROImCAKM3OmeAQb2EomvnD1aBes8hXZBzYcX4XhxQ27qom+JuhKT1RV1x1r/nAwFmw445bvVCHrH0wo5QsRtlj0rWUJFRsn/0CPOavOgdfJdvLTYXJgFAbRZI0DFqpHC6yboI69uIpZaTupwJKTe14ZVCSee7Yqxv/6Wjut8vyHs0vDIvKoDyjp1p8oOZ6mLcG//4CYBXpW9psRKloprKKxEkDNBb73MpKMcj+5yUg4dhksLjDA7UvWOwbHNe24XN8bTWAXLGQc6rlZFAyQh1LHS2Q+hszozPQBh64al57dHgoHOXK/OQi/l0IIRKUiGBCGRVPpVzGGuQPbrsLqInpOwJdFDILXhtc+q4ZwMtAButyhJNs=';const _IH='172fa5d30fcec94352ccb426b7d163f7b4091ad273d01d48bb0e3303b0609004';let _src;

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
