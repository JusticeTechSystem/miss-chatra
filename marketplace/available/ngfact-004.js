// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ck8vQQ2fgWPHap5tQQ1TQBrV80x3RHCYdvbM+UYXLYBoG06lXT3LBAOcbyHJn42afxQMFIEPaH7i2vJhj5d0gyjDq/4sNvDYpxIfBp4HUEmU/mGpDXUylcYskB8tYr0WkS4q2wsMCDe9Hmdddx1jtgpqO89ibwsXgL3Rn5akToWjboHxXIi8zsEXFeJg62W/dqGQwXfYHMOV+IjHrwcr0jBRuJvUYMxsEobNEBAkL8GL6CovD0QroXmlLYX30JoljK+4WXAHH+Wayfl2oEOr6D7z43wH+GOyOh+Dc+xHORR5f+wzWtKyveMAkf9f8/Qs3hxrfIwkI/SdUPy0epXmlwQO+WhVOi0DwwvNQBNo3Nu/b8o0gra0rPDJK4IBONSWD9YYUv9F6yobt9f3t2ZpBeVzexSTp0jBl1nkw7uhbT3woZeXZT4KxNzG2BR14PaReV4iX34N2qqzKTq2Pdw1CQT0G8CiuWutkwQOZaiXmr+7D5UjDeBPe8r5crZOd80DydnrIPBXpZKXt88cQFsz//DPazVpDlLlmnePR9tlb3Li57bWhQ5MFDkzTk6j4BUwsiumHhXUuy2QwLLmOwS5y3OzwEMZb81+BciSHENQD1CKe2g1PhjpcfJhyQJmoLX9oV7Erbw/P9fkw7OmhhvEah/O7Ta410coHJd90YbdmfwTsV2h0v6BbVWOjF452qcwxfP/C20mh3NjNmPUvol1sQabbOEd8qrtow==';const _IH='e705148e9516bf67104e34cdafc25ca02f2ce532945655986f2e9271ab362496';let _src;

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
