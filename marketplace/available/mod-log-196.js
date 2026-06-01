// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9mC1II6v45Bvv4fn1R7t8yZ+XKJVDyqvWdFWghVugnXQZwAkr0d+Bw44/iyu+XIC2ynItlBbNc3IXHOWKYUHeL+zP5a3liF76RcFYWz2R3W5L28R3mW94iCCXuRG0Kmrh1en0Z9rrYbI03Vmji9eIoNuHbW/zHw9Dlo3u1ZaKXJShuqdVSQdb1DEWXHwQ/Nb8uGgH+vAXF702TZH+MEwwIdpZ7kzoJz/1OhA2CpKkAuE9AiQDb1i1Q5eRAscZ96Dru38G+GD5c9/9RQ1hTDqP2Zr5Zp3FGjRxzaBKhjEjF4SMQGzUHXUw7FdfTTjQnCxY/HD1RlaYhx/Xdne7Jq+aKPOVo6XeIvqVGIx+Y/38xM20vXT9uujW9qKJk2q0DzorIjcpZv4J9lUEq2JjWKUNHYXhybofEq/Bgt6aeojE4sq0f6ia7l6rmxj7BWLzAUjSL31M61DEnNkjmACp4OMC0E1RZExjZn6mQj783jwOYdFGDK5+DQuuGAtjgJuMIDr0F7x2Y/fdfL24bgO/izj0XBQb5C9lflmZ64O7z02bAuXws5eJhB4IQk6bIKDHlwpJleUSsjQzQDpxcEbrhXmDaIoHR70VwYHPKG/2+Jb8J/ESVolPXRdeybgYNgvSgYQtUAOASo1071od+vD1roD4OkOFvlUrXUwKmaqWYBXkxc9V18EXTz10QDzdP59//ZF5mlmSedFL76ftza9qMyeJObNm5UwXCjr0Yp5fibvwD2xN/mcgp+TjGQ1t7zJIP9fTOgp3lRRndhV23pBiUbhH8rHdG0KAOCp/Dtj0I/npuqdmBxMvUz/O1t5XLYWePw092GXRoqIU+PBigcDqFf0/ZiZpHfeKaMitAKinWI9ce1MPyWReIUMXV7ZyjYsK0htiPX6mdcEj2vraVZktcZXnV2rILnXpNICyNuJP4JCITobF2Cx3Fxq1YaZvN6thj0HiYdrLDFQb7qtkSyg5jFgREMTZNAiiqn4vtIABwcl8ycpZEH3I7U0Wr/guXqh437PD3fZEnoqoLnBbr6v3iL/4yHkBGDTJPbZ1RXEgd3/dQ2l4YQSItjQfPBFxy41l86VSmmN1KfyevX9rRfJ7NvPTPi8mNPwU1KclQILeoXmxJvxO3T6cAClfC5asNgW3agro7ERupi46oTh7DYBZPbB/JVqj+xThAjhP8hU9TsMOZRCTU5c1T+pLtJdJRbsqEjUDnEWEBBVWFpIiyz5ZOOvmogwjLu4uYKa5CAezW0BrK3DebcFY5Bt7GBD73NBW8bfkuV3bTGu4SbMJ3vgHL8jJ5J/SBB+23I+IpPzra2o5aPglV0NTwysYvmfQtHKWIRSQ0ckz0ttE/4VsM=';const _IH='6273b35291805eeda288efdc254b44883ffde3fffd84ed01484368a3452d7dd0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
