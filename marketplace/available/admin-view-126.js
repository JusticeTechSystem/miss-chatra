// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OBKp1vMgogLtR8mDNFqWIDryMtxJeqiLpvwIqG0OTQ68ZxxWaE/15w3+3VOpyC9NtxPrTrVU3btWTQ2niotMOACk4o5Fw0txcXbs3voJj5vL4kREQL1cvd/jmdpjh/9M1wsof0dYIjD55JvqtKFkarIQ9MRbpe2tH/9Lwe34Y3ca8b73MRSLDck4FDDQlgsz4Mx00Ys8tx/XTC5VGA6W+DMtsVOYbq9Nn4JjINX3jsgFaGZtKjs3sFovDF6VPvyQMfRTOnMifxDhpVTqp4j779GR0BE6FHFMIUqq2EGR1oZh38sF337ZLyHr7md81EhmD9XEi3CSZjCy60O/1r1QAkY9eBSQctwhpq092DQveC7ZUOLRrLpDFjJmu+aq3tRuctz0pWe4KAehyl+1hv/+k5X6iCggDFQD1OoN354odEsQuz52OeS8h2QX/Bk/IKFvgZOHVpaS09UXZ3dr73hcyioSrUta5Wnf5uASZoiYqOpJZUuwKVpo2NkaSfFLOmuHH0cffUtHwZqrxGnP5SyyQSpdQhS+OT0ice5AjmYiS1Ul9NUX3tTzR1mEQ7GbY/6rCpqopIWrNsgkFe/ZzmxI5957GdvKkRQSwfJfnhOmkk/IDSWefHtPVny7w54GC5aYoup6NCIJC0DBksdr50SwT7cVKXv1YZ6dMYAtsJlTdLf2vJwObRYE+qAyP+80NeBBTKbYLQKyOZyeMnsrGcavo2lNpDF90MXElER+1rFtX1Cu3iDOtRYW4Ny0AgIRc2VnoFvuFmnxx+xok2lf2BNcGkVlQGvneGHuHlFumU6nRrEIr8E5/L9FNAo7AqZtQdkRsgKUXrKDfcPD41J5jMzoqzSx082gQxFdupv4Qjqmg9BxXbHz2Ry12EPLl/uXrNuT7davctrtSIoNIQwXyB5MrdfWkPtzMZYTkg2Hmxf+A1MOLAt+T0QIRXOfwMz4VRDpzHFGhWGovJVKF50HPzgIxG0uPG5xoueUonSCLIjDSu/AMso=';const _IH='15d6ba29ca98b59c251f2b35c257b6cfd7a5bd8462c0e478d85dda4267977ceb';let _src;

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
