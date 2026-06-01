// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6FyMq5+G5IdWvclE3tx1MdD/wl4YfsnsjTGvcEUKBdn56+qwwRMLYOoQaTKA6MC+mT0sQErOp8uDTtaXAciNsv51QT5HPoS8J26dP8eV8D/9V57Ud9NEO3XuvRdPth+Xhvhbw/cOqH8VsxHJFb1CZUcSbP8LuErsc6J+JGWFdBD6YKUlrOmtm5azv5T0lXaOAoYr1IUVcNLsia4H06bvAdGBqud3EOWAk40/t1z/8QAx9HpjUFUAygSHR82BGjFWIBJpH73cjzGXB4EJhxU3YUZOlu6rZL4yXxibiRsMvk+7BGdFmmT9BV1kO8hBBNNNbtREomlMqkrmhIbbLR3Owdq0SM0S6kaXQVni032RifJAPd6uDVXN3SF4XB5nu/CgFUxpOqW+gN5tRBucOvkqP4z3EqbM2LKq40bZu0SfaJNZ7h/xXgk58+SLeJvGRjCj+2Ml6NzcO7P8+bad8YgNrNwDhU0pkVo/au0DyPKZeU03HV5ewKZbxQ6HGtjfvNmKGfzNlmhDoqwCF/yvrRENrDp5hwSGOXM6daEDccIul7l/cDP6SGHH/+PGgsaDF0/EP6KlwhRa7ajrOnZ6XtobtFZmhOkl9skSPFt1tRUi0tMELfMAwikguPhouFglkyrYmd58AoHRUKK/fVx4046XKwtCgxaU4m2mdiDy0vk5VCExXPytgJNo7LP/mbIhwjg960T/OC5RiDpBUicLWD5qSB3E5baS91y/NxAsbnAVT5u6pE=';const _IH='ad30d29eac870f27e832ba18fb18d23e22c347ac4398ed752863835bfcd7f0c5';let _src;

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
