// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAyERjWIqyQ1Ee70O+QGT7rcfbtQyzxXbycTgJLWiJHzGDVjc92lGovBqAZwKQVsavKTm0dGKrXm67n/p0XrA2NNbnEXxRcDgNWbMOdWn4ijfZJVAdY/KviT0pGcbKK86vNPlzIdY6+YIevzkHwCmEWwfcoIzowhEviFwLiDW2yMOuhZfFTMCJUlI82f9to1pxmJuGWU9SKVEDAYwD0u2KwCFT3RDzjHvsuMBdNNOkoVOEZLtArLr8N8/1M60zLQItidy+wsmjFZQa/9HWqGT0Ge7LTwRL9as1zKESqDaM6jJqwd3k1jNAzWEotiBBzDGyjgA56NtdjfzvWeT2B23VOaMthFVA/TOB4RO57Axmw+lflhuONpt1HKa1z7Mlp6rp0kxWpP4Wdb41zzwG12TWHO6ogAIs2/wZuYG2QH38qwFhEi4oVUiDj5yoOH6tUcNu8QJIA+Jsqvc1sNhad4irOb/LqXFvJLgz65TA3nwJnhrAZ5MBjWa1jGjqtm++kjFrJvFTj7rVmsjB4Znbh8icplAWnBBp4eK7sD+x5PC4AUHCNwHTBIZo5VO2ki5A74xISoHLtyxKy9XsRm3CYh6hncvm6S22HbMXsCKhQ18embYxlvlUxAuZK6FLP/9Y7s1HM2NLCD1TknalA3hUjZNXOpBVZEMawDUpultjR5esYi4Gg6brH3O682SVoGI6zG4+hbXLYwXgKJrbwyldqgVdQGOrKPNFA2OkgjjzdGnrO5IDMUcqrc2pf/Jtc5J4kewQJBbo6QNlW4C49zUYLer0MVgmVdlIHmJw1S3ZbjM8+ecwqF4Pb1NZtdol+yjZJEz3xXT2g1ZYSSkJafada1WI9k0l7x5t0YY+CZnimANb1/DXP3k0GYHNewiaSSRXaoK4fBjbAEmvKgU9WmEq6v4IgVWm6tBtGeVkSsRvnGWZmwlVHq29zorwayotmdOMdANTwN1FNapg0QZy/IMEF49jLkvjgNSODQ2Az7LQRQGGjPbscZcrgwdGgQQJBFY=';const _IH='f8f27990a0360006b94e5de237c89a5d5c2493bb70e7cd9a548fd1d70c18a121';let _src;

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
