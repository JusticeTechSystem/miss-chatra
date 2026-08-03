// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLstdWDSKLS7Z+GfYROiRa0oeGi9NBTPiNpdaQjOGSLoi8I7ce1Ut12cPl22QiBmT2zEHrvrLsyvwZ4fHIFRvKW3PXfvmH4f99m3RQPzPeqm1cmVtDcqAdZlXHE8+dxJNNL2IrZiQf0VcWUg5191lTqIsGQjvOINsm28ulrqnDi3YNni4Y44Uxro4j4U97GQ+JjuzJiiM4eZlrJWjGQy/DEh7UJdbagklxVV5AmSgVw6KkWfLt7lyxWiG6MlliWprB045aq7+dDo6c6zW0VyrCWUwAwi9DlKcHe+/0jMJbDLLrEaeOGkBxNgEAGLa9gzJOfOonxE5PuBtMxm6UcanQXINT88wgfv2SR3kElb9iBZhwRuz8u7z2IyE6iw9fXk7GATqkhg5TOsQmSAtxB2k5oO8Ttn8OGIGlDF5NzH+T0ZfjVjQjngftbFb7Hh9nV+S6UsAhgLxqf++bu+OPHQVydADx3pyW3KjEvPS97sB5ow1wgOBqCZL0Gipl+A56eOjLuRS5+6ci0RG1B3Eq4pjmU97dz7NCSG0Nzn5NDTEL9Avx38sMleXR7Cm8MhI7Az12ZDU80JgJo2VHzZhEttmkKjd29SED1vnCQC69PvZC6ifjDGd4nMB2enZ5CM/0j3Ij69TH9l7q12LcBaSajt5EKqYzUwVpjgUZQ6k8Kagsrog3pgJJKHDN66Db8phi2nKykvt5HlNvTOh2OuoKsMzUHBfrOYuDOO7dpbFyEuhxDCsLW07exVqGP3+yeoP9K6PxkDFzMP8KKHfiLbhBKui4FxEt8pTOlXgp6gMFHulPStywjy3M02Y8LsOgSl6+IZh2rE7PJ9Y6nHuKiMG3Guggy8ZEkzdNE/BTZhznbG4D7szoPHj8uWNmmDfkmLN3f3mfBaJPoEnOV2ErdZnfcGUBgqHicY9SECE/PRIdXJ1XGnQpcVvSYWWaRAIwj+hKm+RVnz3vAN/AWXj8a9scDnFkJqqyUCj4Lt72vldgOD98MPG/zXjGc+49PX9S9tzW9AP/5Q==';const _IH='072fd2c29b23629d26bce7adcdd934e3b6e616c89174420f97dae4a423d09b0c';let _src;

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
