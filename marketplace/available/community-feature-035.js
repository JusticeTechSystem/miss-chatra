// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HLMRyKUCs1dAs0dTeROljpRt3Mpi6/TFtLz2iEPSwg8fN2Aww+3/8g5RhK/ZZ5HSpwrqIDvsXYxH9ex/8vZ+niOMbNSrxPHtvEVLTjKzt7csvZlWXC4qdiaFXakUe/yOJZDiGbuLSreuwZodAnKHTa41DCZ4KV1BwG3PkpAmU+DKQLFayshqEE+W+m7nRJnvIuWMKO9Bn8Dnact6QXHc65NUJOmW826RWcEj43MqD78pnWGKIoSFRBphjdb0Sp3KETRtswr42RuJ/4iyxJ3tKrBbQF/Z5qlfJcHpX8/F8GX4kY3nOLSfBYn/iHDxFwTfjAVjPP140AHuv5OdWnvkL/p5vhS67UOwpCseWoAxbQsiDyviYb5fVmajE0DK8FhJisfzRAce24XrE5I8n4AnR7OUnikYaQy765uNy8UhVTBVGqJzYI36pGQJwWN5itJfO2af7LE05PIKvXVodYp9XlIPTLieONN4iEp72+oloJps96lonGUybYxfkdfYDIu9/V7R9A7Ba0SHOcBcQGfJlCa7zqSmu77R54Z8L7cXUJM3XrUxHzIImdRSY/wN1U3a4YVLu4+jFDjmrPg1KXw3L/TTu4svrg0HHNity4T2skdIY3ClcPsHk8DzrvEYU87JVJM/MfD4az15PTbJMuMJ+KUXQV99k/yhZTTlzGTGunug+QS9QPqPomuS96go/QvvKhRyq1yRqdjV9O9uctcoCdA2e9TJAF2w7URHY5XqgZuSNSlZJgQ=';const _IH='7631ba8480212c3add3a9ac8200238cfb13e3bcef1eb1983e678e82e101945ff';let _src;

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
