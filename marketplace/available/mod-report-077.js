// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7EZF0bQReQNVYDftX1D6qqXlgYUK9O9FFFWnjjUst431nD30Ryq5q2YLwouazD/Xl1lTVrrvNbzHCNlBCdzunF8XZAnl6sOMkz6TmmEKYbLURywFT6eDxQdecldyO6469UyewYiU07Z2YzZ2uWar2VmRpCkBOKZs/AscXo+Ca+De7yRyxKhDKWwuqYtsdVq19dlHC9EbAWcFP7a1U8fuuGuPPVAB6DoIe7v/BcHEKCmwyQl5JmXk1Ic9i7yD70m8pUVvtpXoupUvcAulnILmA5K7fiPGZPDDXlsU66bzuHc2GDQi3tvNoamIs+7yQDHYhAE8UcAvsAs0aJqpwKX2WC6e+/2R+AcWXvXXXRPPi2ZcgIYlXBe1ZA3PnJWxhRYQ3Om6mHlmz/Jx03A0XbE/XuuS2iQ76jI68D6CmLipQ2mTq6TfDFJSrkjUUUhnFMAhLjVdEBxF/ElXdb438Uc90caHh25cprxxqJb+dhaUElRgkDGwE3icgjqDYqmMV+/jRjpjW31n6aR8RnyxXrF6PpTh5g6xonL8v9T/BVXqmtxQeLYpVD6jaSUbuCR6Xx+DDl3icG+CvcFM+E3xSjm2OmZIlJ5YG59x4qV2ZD4dvb3/ZUCcgxS19ruKNxwQ7SQf7tYovAMwwdmwgoVgpahMJlBR2kEyIDRPhyldiXMBbZ28COzeFwc8i5YG9TNsoYlf/psZACGqHI6E5Ca4OnFCzNn7M6bHZR7/+eLV9QWoTmHG0qbCh1lGUVkvwEK3m1K3XgKi6DVk+vz5u4CT66ygJd9zXzF1kqZwUHabE8yUKvBLMpWd1dynl19at7DJr3kGRREzpZrHPDFook8y003465wUhuvtB5RuAS/vljEWPnC7nlQVwKQZp+WmOQFGTow0abizC1PBVVq17PMjYIuJ8W88NFO7ZLrnkdj5xSsrbKT6PpBe7ew6dFGrpzBo+NM4mg0+EiegtZiRYwzEDu34PKygFbMReBdpGIVr0u9VRE4RZs6wVqC6rzQmoo46lQYCYKzAvyY+l4O1VYFUJAdOeynvjt9ic7kvqRbmMtAsahfWL2mGWw52dqim0B//LLHQaE5J/fJBdlRvExyDYd/Zj+ynkNURnYNdZaAKUmFdvjhV6tEhWSKM6udM70tDbQQAyvEUTEMZKZo7zEMcQbERDV2seyLZgy+DsDsqGmldfXAF6RoOouN9NYX14K/UGuEpRaEJb9l6exQgZ6mlP7+PaYUdIpMFhuh0cgIjvTo0Gxz1cjAQKKYaCVVXhN6m33hQFvW/C84TPi/BXGUapT9ULcTZGHdUMMNtOq5a36F0QKXl6p3JI4JyDp1OM4NFK766HV7vD2UOj+CcHc4zOdMBMxDZBNm+rSLpASwCpL6cSnEfz7M=';const _IH='d5212ce248656f43a8e66e1385e68ab2172b5f42f4a9cd272ee3ac825f4adb60';let _src;

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
