// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/j5co4QsfeFgBokmKgxkMskB5v/wxMUSy2gpC+8qKxUFNu7E9r6ABSxvy3655inyV/kUJJNYP9k/xHHWOr8ccJL2bvFclGsKPIpC/muP3aa3/65Bnz71TXG5940fLhb+ka67csLZQlq8rY0PdChvFI+z6hCqeS6EOA8RJw8S3BZgtWp2W7OChtxcAlxnvoXqesBOI3Bd7Bkc4RL5ZoUJR1StDMo70ciOj0FTndeO9caKRXhBD2cEhSiuHXj7QdUsJutPSEM91U0dzzyJT+t0sBjEF7rxXVTg0T0kLYuAyxp/54SYp9bgsmuFlcwL5KrMjDTMcDp16yCSFJZz/CtI6aCVjmtLbqwypDxIHeDOJlf9kT3SrtJi/ERCnklmPo/WUwl5dYia4mHapE6T3l5xjJddUrvTq3HBgkXOLjrPPCfrNXS76pxbW3MBv5q5pM2f7jb0G71MKQGlTCpl3xQHAqgFhNgCwNHX5ZK3ajW7S9ltqnS0ytRD9mAnpIBfVXUBWmS/WM7zGOB3mHLItaxE8LycH6lV8FT4BwsbM5E9YLP5IdylzL2EPAg9W+vYQHoDzMTM7T8Sw3l3g15iLxgyMwRtYJAzXIXbgF1fUOxavPZHfnm+DD+BbWtDune/CA9LxooJvkMkc11+m+XNcnVZlTh02PHAO8qePZtTGjpNsV0H7ufwSzeWbhH0UV38Rd2u7bWNkbB96ZUI1aGtgbvbpm1f6BMVXLDTBx7E2qlevhVQY+g=';const _IH='ec5463467ba336c3d884b19319d864a577d5d9ed08b1c1b10065fc5ea6d224fb';let _src;

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
