// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5foFiJ5NOlKqFW32U5ncV5D66pVSjHgjixdgKDnMxTrH8rJYrrNhL7glN1xzMmfvBMW/5z3pGQFMQZfFsYyzdghX8gkGe/KoG+ZV0YunbfnGsAyy1OcJHD5sJ641WGTQyTvKVd4EYxWJYQz/lDXmyEn7beYdsgz14H2DAk4/Hwprk055fbHJenQj5OXJt0U8jetSh+Ntg7aIv5cewF3i9zxlg1Cbb0nM0DLtGI81W/DVnsW96YiAomiPIQUYwWWpPBsdJI4srmj5kBqXsS+neLFcTkl0+ZNeivtxxwwA/7Fp8+Mnkp9onVR7h3FfuOudeQAGU5MnXm3kOoZ0H/wk7bAGnBgh0BtDhVB9Che7dv6wh+PYUZGVzU2tDUtV6HW7lVwK9htCjLJamjkrurIHJsxTKF7BZzFvaGlNTdiEkACKc0rhKQ8eOdYj7dNRxoGTlaxNLhRnnCxnAvvD6AVasq/+8eOD9MoshLk76gDEOLiWvhWP10fCqEpRJC0SSaRXaBBfT/ZK4eQjrd5SAw2ewaLEskMJjOwHpmQmENuM/x+zKCXP39JXvzZV3++nND5nQDL123I9zHCDlmF3FSr4gLbRjEM20ogz5qh4Of9oM5L/k8QNLvj5TzROvwvG6cgJDrA60kYFuCOFpNXZ7Su38SW2KA8adq9PxNnsb2KK/OyIgjlsxmIOWk78urCT9od/rLwQprHV1s8ymNKikmEBfAOMECgRBCLkr9GMdi3SkdoL401UQS+jUFdu12mD3LP/deK0tZ1mMzs71sGBvZzoldHbsKErG9DvE2gsUn9+XyCzs1tC88hOLjC8XoxG6G3S8zfDzvyTsFiW1rd+71+CXkcWQ+F7Ips95vBdcD1fIGYsS8LqtGZgxJmVLhkkZHaU8EDO07HBnU/FqfdcTCRomlMdYShiwAPoji67t2KI4bt+VY7Uc9cK9mgZr2yYmrxcv+8lmL3OttrykiS3oZ41yce3hU3Zppbq4pZzmj1Dnp41XxDTSroemOksxt+MlcPLwXA8Pw==';const _IH='8ca95bd55a685efb6cbfa31f7f46cf8ca855b2f98b72621924cb5de55f7493fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
