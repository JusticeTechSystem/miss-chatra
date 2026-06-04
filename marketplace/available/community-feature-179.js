// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p37ig4dLJ2voGRLZfm0VBGmBIw6NSFAEInlOP0oNA3l0xADQhlyJXB0WoUOVrqGhikQSfDDAfcwl8oy1uNRjQfDdBmOXg2nPnd70rUzFumWS3DRZ6nJ7aeTMMNSJxci2Z/gTaZ++Ze+WLQyWVkJD1UbUpwkaXGzCTY/22mklT7VE6lUHpMd1RTu97Am6lD0uScgcEDKXc6KEwXZCJ+1TDKFWmqtLDScSLan2z+5NHv4hpF5re76RPS46K1Meo8iDgz6x44fOonUE8AcKxWDxAGGNrHH2483EbjOLoyaw8R98FY+8dnV+93D7UM7+pFQhs0UuN+jXUQVg0T27oHlXnBp+Z2SfrulBVhnjI7Tpa7QDTmXBHgfS5eGPQ2jIB4ZwR9dXtIa6jyTQI2NA2nz9Op880fbU/f9DKAsFraMv2olQDgERLnYfeAK9yvIF9SPsSrWHsR8mhyCH8YBRvW2YrtXACL2l8laAPHXVzW+TU8ydKvJyshMScbgGSDaT5ZGZ5NQH29lBW3ZRaBXcu1BQ+CtI3b/Mln4jUuhwSiQU3JzgfWhRIYIFjyZQRKkhHhaXv99LQpHBe2AFSFKVqYcEp8n1q4am0YzeFeZdz8yDJ7xAl30PbHdyCyyWZoD10kAQjX6xQSeSM3LxdKg4JAcbeTzlXBg4Si90TQr6AOWn1YiIfL8JgTkSOP7XY8q9x6mRiIlehulRLxYy/LLWO+H7p5lzpBqc92kIvY8HXS6RKUaM+HWHE5Y=';const _IH='8eb8ee2912eb421e0594ea802a73af8f8a5095c77b7c79d4f69064904a57e3f8';let _src;

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
