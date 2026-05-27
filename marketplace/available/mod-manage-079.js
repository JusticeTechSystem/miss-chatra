// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2aT9UrgDgIRd9N62mghDZ1DG/RhcErKQwF6TvSQ4hJlIwo+vY0AC4KiAUFl2u/OuPv2ByJLLdOW8SsLSif/qC7GVix9o3+l796aTWkGOWJVNpAtaWqGACwMreHot9H4o22bZ80i9k8BezzdZ/WNHWnohdYNXhtow468Vp6dWV/MZlAOOSoszreCAh/SQehC/+mDSeVkm3bMAXkoW66fjWYC1UW+95B2XFhJVHvTy/QKg7WSwtyeupTv2cge86esnUPDRe2gHNMyq7HWZfxtVJaRGXhYd5WlGh46SDiYaYuCeoylClyaSGSp+RdFGhEqUXxRw624xEAi/5ONTex0UFNkg96ihIVywc0CQef/4ArSK4jiwI4ST+6HnTQcxhIkyw/PbOLOtx9WCuJyidxQhdlvTSpg3OshYTROycJVKFfb+YO5Hxdq+qJYyFi/bLF5Bc4yqYYwYbiQ/nb9v2tugM3jbTO3W5N9ZK8k2FV/llco3htobXviHUWV+ImlNAxMbiM8KUdFK9u6/x4wxeNdDnsS7x06LeJNUzKSbDYQ0mnfvMY4QKmzZmk6j1K1xzoEVeDh5GQqKWy+zzXisfLBHBNKt/Lk2TTEb5unWdQknjmVfa8fVzB1zidcZ/iuww7CKHotJFE2w6vsWcHLnOgmaRvGi8gzUcerf6Qx+nSVr7xlVG1WCZ8NXIXQqOGt9c6m1w44sdN7bcanLV8FN3J7DlGa+g6DN+8O7iojvMMx1b34b5SbEbVOhw1Lmwy1gIRU+7I5jpResawToILn4b0w+N3b+Dzo7UAEZHBrsnzOyFr1GaxYlWYB9gUoVQzjkaMgFzgrwkA5Q/BCcobpIN3FRpI6j61CTDthLFWJjhkqsOb6YFe3Orha8fOGgnyd+a1gi0JNIsLCQw4PjNz4im5yva+SWainiO1sQmxRJGY1NbuGlFYReY6U+0WWkOLsdNVJ0n4r0VhZTsqPaA+WwDA6GF5CJno4andWpFhGaWfDNvW3FxS2Zs8NA//xTiM3PkaS5aD7T6t9WbYLEhYC48duX2EbomMKG8UBrfOB9sm7JhGVS3na628o/wDLCWdGJ+1c+Nas52JPv0sxyQdgBi6mWOHTD7B+e3ej6SFeifc6FgCQoo+INKiJj9L2h8uPRedXv/d4omIiwdt8ylcnGiJK6I9Z8ppvqaro2qERraMQ9x1Xx2dR9hW4ho4BOXvh9aMvarrxmj1ES99PIep4o1QPDPHm1iTGy5w3oSPHHr/mihfIo1rO0EWQKtTRlfRvTRWmRKumPa1eEa6IoYhaV1JgxLwz0Qv10PeAOVguX+PV2nkmavQmC71+902t6xGiUZEqKQAK14LKqV5mf6MBKTFiZpyc8eRZT6GVv56Jlr7PSo2gqfE=';const _IH='4c905094149acf8c58fe7c7bed96c043c1aca1b25b8114a9f4f4ee37327ee0d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
