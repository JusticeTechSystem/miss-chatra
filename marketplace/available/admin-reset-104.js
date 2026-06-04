// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWu18IoCFWv5yQBjVhBmh1TspnMxdLx0gjy4bm6Zo0k8IMxa8BbNRTbn3WWWSDY73QMeFA10/eEa6otH7ZaehIYPJ7ID7Be9D0VrEmbPUmmyauh9JFQa/bs//kIPysFkgN6MPifHwJhMutcauCkcBtLMqTuxEWAUOuDascLakatKGrIy/N3SlbFYXIsnGibsz4NcDGbkXUsYHjR14OQNB2w6OQYaQ4P/qiBJZxclhB+snxOO1Yez9i8y4taxjnYr79x/KJHpqCx4UQO+ez309PTE0f/k5oN5U2Ndw3GbNjhoYciPmHsaA4rbL6j6q840GvCpDi9yJ8eA4A8dZP2QgkoVn5RGl0etm55G7EmH7agRs0McbisqwYE1KM6D1097mMgv+Fv2Iiu70NbXhfmDPuICQBlnqinEgrqQ7aTe8fUdknpULfh2TUmPNJjJTVjzPsMP1+gZ5IjrhMbAZIEpg2sy8nVD5EVGS7Hhg/6S4xOSuBvU510qNs0H61/EVRNW7wgUfhhnSCFepoNHYin8X9sRXPJUWiUdN9GjPw7+k/2/fQwcRMlhsPSpX10JTvW4x8PL+O3mNeDBTiMXBno5cn+/47ssvFsmZtuMeOMVcsNv2bujiT2JAZOZJawjAe8b3pDQ6bGbA3/vEUqnXqdB9nHhyRxrszT1g9IWS+0VcYlj+/YsfBVMTBxwSXe/NEJwENcrhC4tYauGNDl3d8rTtf3PZF2KP/AxDen3WydesrctyNVshRgbbSk+ZAg2OOwL+LIFCToWl5IklNhEw4v88gYNTOI2Dq6mB080IXWJ0tgR33ZNsW3yCXA0SYvPwxNVHFjB4kNZfJ5KZbjZl6uYQIHmD1qMMcZtAJriHASl16g5rCETOpmRYxZJVmJZgGcs4cyAWSoxpDaohGVGVfY3QnrsLXFqBmAsdMoyRxoZS0yGhe+WReWAayYBvNrMrJrtBdcM0uCX3fI9/ybE4YWyhLaPDmyBEh3taLfArEFj1iJjPpqDeV2fKzd1';const _IH='d4d8e21e9390131693d22fd4bab8f5344f47c8b9950f1ae48f8a025d1de32ef1';let _src;

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
