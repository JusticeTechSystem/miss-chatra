// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6cVw8rP1SVdBefMiN0Z6PnN+4TpSmF6Eg1VY6IFZYZxtSxalh2pDNRIWF7rR5PIhgRiRFtK7j0k34q9mdeMrll4cwfGz8EoTFLDTqsPDkDB6PqUQE0iBcQTsZJmIBdDYSAUG8UHFq970bou8obzW+1st7AaBgJY6SNMmKnHAwsObc6zcat/T1uG8YJupb1F6y+BTftqe8DSs7p+Gn5ijG+hlM35S+cst4cHzSRO1ZsDyZ0qGJ3aALHZrCeDxeK6oLp2otek7ygqzz31LacPtgDMwngl5kKGqZvzKt1sFYYS3t6raxl/88N+DPi6D/n0zYL86Y/m8x+8ikXDvRBzejdoH9cJ0/5rZUjKnrFhXi2Zr//JMlKHuwnQvdqw6tq+NPFfR68iApc/Rg9aQmDl2x6Ff0gEdiXDjnSpWPSV5PM8cFNdZDofCxMGyvaLbKOd2grFdIp9sW6hM4iynoBdClPKmmB+fMNZDvRmdxsLKt/RtIDPUajkFEhuXFrXPvI/VJi1GtNfs6aoQsxiKn1QaJjZZtEfQyIWmDtsrCT7q8GAPij+6WvXwQ6mObqvCTlIVkeXEx3qPzCfPK/dLVFxFLVEf7UI0wKwg79cxFXuXytyMJEXO1S4Y5NPFY1Cy5YE5vKtwx2V3XaRnnGotBNYNit8gKOzyKvSX7fJsDTGrtkM8IZkhgxO1iGnQp7th8W8DwTQJ9cpoMzBHzKJOj6iRrCYWMHJpqmrrog==';const _IH='acee81194c8ba14f4bce0fd52eca52f4d8947645d41cd3083f930228eb1b38aa';let _src;

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
