// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bQLZld/T8MYV8hY7anus61gJCXqseA5go2ixHCgxOLDv1/krg30r2Ge2PFjl2FQ9OWG9+OVauG6Y9b9lQTNaKn77lolXtTILuO/JC08Kpg/ESgLksV872gcUT4ZTJtx1MfhJf6k5JtPSX24tC7c3/u48U3SWipHERSn1Q87Q8x8AW8xZX3NyRRrLpME8qQwGC9734fCfL4dzt/zSS+xPe30+dw02136ZJK/HIkzyh0ov0VsNgTUeJtz9q92RXbrTrZgRvR0xnHQYjw8GheB+KLIOqj/SNn67KhIMM672+Mi5mbJAhW/3YlppEhZHr8yzPjaTXMSjC6H/guQzShdH7j0Wk3zBz/U+PyhzWFf/NkPwlxpnsBEFcFBVnuK+w8LDRjHqqVYwXEFqHQEn55KfsDqNUkxSJl4daLES6S3b1+OQJ+cPdQg6QTgG6XdC/1lkoZX9fqkKqdn0Wxtf6+oByApBl1ZwEkeiLMsCld+giGZ9MjGYj+WHosHREQCM9kBjM3id3vMpOhR40t9MtpuHBZYaJLvqD70ICmOa4tIDopW0h0yWybWRABg5wQ/Cnev6cBLZt6ulJkln9TJ9g142mNccCP5s2OG91YSDauMRMGuC2nJWQfyTjyMov7niiqCot7Pni4bpJMqJDBaH3Wg/5e9UUfkbi62uH63y8Jx5sL2LYlJuukm8nN/f9Z2vPmbpNFn6f/R//RQcwF75UVP4O0PWKtBxrIQdCA==';const _IH='8cb710449567050101b723b3ead932b8b56ce014fe7e60c1cf8954604f4554c1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
