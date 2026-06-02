// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='elDQF5mRUnD1rlEYkXZnAY+SW65VfKsRdDne3U6LgaBqN12Z8PLWMAe/ySsaNS1DJ5Jprl8VPFmWuR2DBe/SmOB+karq1hXYdORwiXMW/64QFNcyvhyC5Q6wfTv+Bza4o2hLqpohq+CWbvh34KwlsDW4ORU/hu3j0mvid089v87UmGu4CkkcxFBwRQHYWc1e00ugo2tTNQ6qlSSx7APK6e1QCNhYOGvIogbcQny37rFQdw6JnOKiHcrLSeW1sKyLgUtn2zHUDLW1SzhN69dHL9RDhcaexinzCbWIDLsEt7h09CdkUbxN+Ui6BIITUq3Enb/tUK2/IRDrd2KRXhZJYMz8Cf5Z55F6pWXndhAcGDWKw26NQeNTg7l5Rm4nImlH8nb5Dx169Tx9b7WDYrhJH/ckbV+6BWxxMUo11AgR3AxyMA3AwV/ujtO9kHuET3Cm6vdnqstv9kuzII6uQIOzVgqx9KREZzv06pemw/j/l66y13+6lsF3OTmaAsDwN7uMnvi322v2kedkqFWZiEVBfLKwFjl6e1WfxIaP7SK5rjMNYwCjO0Pb5yvJm9NiEHA5F1Jt/RENPvoU7MjJEmtuGe9pJzdC1d/Hl71D4iPACjSggB99XS1SAFLETFV00yo2pHNw1m/ZxBy2YP9zp1XKFSS+FtbODoGRZennYIcwJhd0C8uH+xUxDzIFZYx/PpDJnscYAVcy9NO7eDAfUowta5pfWZwGQYL5cqltmI+YumrQutHszK9yCbMIYcy0F1lL6WJje28/f+aZtZQ0CvhNQegTKeObYN7YNHQcJa0MD9q93fUfybe4nDF0cayO/vNe7DU/7qaMlUwTO0E+lL9pJ5SUtm+eOh9xAY11kbaMioDNPGYZ/1u3pfW0SkUy6nXS811Vu+kR7LIfClWSD4x6BEsr21j58LHMvF9gmDtvN122FG9EjeEVuVNOcq5tYgbl1AThsgWWzRUr3Y0XH1r1Smwg9cWAFXs9JTX1ykxE0grys8oB/POCd9cnIEaewA3t9fgiFCu2rK1Q1T5RnCQvE8esRNzy4evaHgSm4TXhKJj+VpLxHhoYJzZqzDSHYXPFxW/YIYbvqD0+PAVMchTNUXjSHdE55n7bN/Y34ZQJ6tWD9BDdWANmj2ic2UzdMp74diNekvyA4Cxvw1I/aaj4ec35gQMOxIBXmZzli+etU+kvMkFDczMTpOs1IjdpfVHofxZOKo/wYK8=';const _IH='b7516ba0c8c8e8f0e932eb80a22fc9bdccdb1021cf632097b1ed218954081555';let _src;

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
