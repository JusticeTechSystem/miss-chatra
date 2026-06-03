// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7uAhPw9R0lIqxLJmmuQKSUK/hZnIf9FZRU//0cO61WJS6HgT7cFYYNA5yK+Q0or1wX16uR2Th/6Vfie701SEvKyg2uJrRULSqRZjeQNDecA6uPv2EBdxILjlDQ+UrtKUdaqTJdHQ27/WRidLJ8VtrfNCQWF4yPqFj5ItxRI9D8ElpqN7/i2QA7kBR+9pgDhurgKFwI0MhjxjaAnYMV+F60Hj5/fEhPHpzUWrn3hHO34zq6JphhPpHTRMpNlJbEjOOSW4LLx/rQL7scK7sF9eOIVfOBqhpolxdVvet/fzZNOFp1iCHseMHEGvjgzFnxsOgJ3Jr3nYKyziCkx8SEK4+N5SdEUUahfXMu8Rp67lB4Szm8v8vjMsvnIjbjHLmel4DJfhhCOL7kiHntgfda/pMdHNpnAWLkeqyMtSeuzWPRzhzNXQaBsuK8f7H7kGJ2dpikTlW6y7WSuUSMLd8Xp6L0Kd1vXK+L9927LrbLUKglJtvrwBnpTKegteHRsIMI1XyrMCxpGMWqHr08DJVF+JC69U0Jkm9vvcm+ftFW9MsRcPlQvoy/kcVLL6CNKpxazadlC+EqIlQLvbTJGp5w5u9L2QzLUB8whjVhnJ+897yyC9th96NL0nOQ/UhZ9Rx4X3ncb+wXSYgU+RtTZLkck6OKlG3eDiRHXksU1cCuLWDbX4PWDWD7RwB3TqQvQMjlWonmsA2mxqP4MjFbh9WgrrQopJuiQD3utAOI9G8XP0KYZ29F6rGn5SE/MGa+7GExOaWmR7BIleHbytiBkwJLac8rIZ/DtmNySgRwBKv5aAI1C7aXCGkqVPBy7W3NJsdUCMCQdu+35NkkCw24u3IM4V93geg4L697zkfcOL55GfLJl/jvGJP7uhfvfipTuIrAXdTdQXALtT7pZ3GAYAQnHhQDjpy6U2zyXIdwElDa7cwVsrh8hg1SmOX9uCp9CrtI2j8eiBgImefqyNInyA7RN4e9AqJbfujYpqKTxOGigwB2nqL2qS3J7X67LQDMye70oD47FW6B8USVpkrGMFmcixwQc1S/j2mkmuB/wjMFY1tUU213e6OxrtYRNxGP/bSNiSjpj7t6hDL+D+Xe2MTvEnkGdRxDYEzqhocRHrlqFHMJeAE8eblAd/imYfL5Z5YX94X1dFDhEJ8VE7CJS3OLwFU3Yjjc5uC9DqHM3s3JIRS4jrNKqzrfbqgzvaeBUNvOP7VRv5Vf2yXEMIyz+YfBWlDad0FIABk2FsofsPpRo/Y9cg3MPrITEsg2b4SM/z8BzhWZHhnzBYFyU47frwvzXnr4ITGQ0JCMcz0sXdOG/yoXN60/bnUWmFgOvnrmUeVkOvDav4qSTdzxd3KRziYSTrevWaDG5EoSUNz8mYhNIlQEPzUxyEefIxBvf4Q09S3waR/o7wf6Vr2SXhSMuGYV//dP/gj0LeXsqeJC/VGul9Fz1L76KFrsLGh+xzNuaX4LcuMlvCfiWiXCbhDlAXi5n5Bi/lH7x6mueZc4qJbCcrL8jfjpQe29eG8/2OCr9hyl89M+X81VZJ23qdJ2NfFxwc8UVqVO3/NL6sWfl4y4tVxdC4JAQFadUgUDZifwiyKhIeMnMvG68Swvb8ktnacCFipvSR0u57R/ToRg==';const _IH='9c7fa30a8f5da645e91866afe472d55b0709a8abdebd50a0b2f90fde2c123fbe';let _src;

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
