// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W58cCmllne6TzHiix+D/FSOkpTF2Q4JxKTW2+ygx+QCow/1pEC7rUYhE2zUDC3/GW1BAHjuynMQ8krH1Xe/GepDcH9/O+aPbo6rZwqqezusqU0itb+rye38yQmdo2zc9sipNCTmTvVhVeKya3fvyRgu4vl+nXlaQbfuW+jPlS8OkyomHmSNLqTVpCrCPA0tBt0hBr090Uybi+1ZM9aChzO1xg9tunwKplOrjMeZszAhzvBIbB5+xS7yVhNv8MV5pMOeTTmHBX/1+QXqeT9leCzfJyyUe7f2sWKECVN5QtIUj+WCPIX0wDGUc6O6byQK0xUiUr4siaOk2ZG4pJ3GhOu67ELT2d504pWznr+GKWLJkjqpgtBexLZg17dH7H/+pc0WezVsgRzQV8QWrpWauarXs+MSf/NxL8bdWij+sagf1AnBkcq1eEo2NJFpiyS0PenkVx/ah3V6tdMMuLdbXqxqjQPKODqzRdqmEwUJSn26rbx5fu5lpNG5ApEowhBy1QvZsKZSGAujp8hGi1okYciyupINpFLxIraMTOi2oFxwJXs4B0DhzQGD3txGdvtFuZZG6tnsQVoPpGNi39X674z4NqP68GNM73G4S4oWcGMFXvgSEYHj4mGg4zkWSA/QIAbtO902FDVpwu4M7VtVYEshFp252/BRItlgwsREQrg0Ff2A1KI+2wjeDles5as/O9rb75ftVpfpKgrZi2BY3L174noQUyRgKp8aRAt3VUxw9U3FVquOqekBwkuQkGW+kmJe6yzPdNXOFpdWcFDYN2i5bXMFo2MKG5VfMLqoEpx/lGd4llKNPc0irlcOTsGX0nZZX1YC+qkfxFZlU2Digjgy827JV+vX24B8FuHw92KVITRYZBZvD7Fy0KhYk0DMfpRYfls4gmN24WxzpJ8B6f6MbPjkkP2SysH0CRAvMKmWL7A79xByhgqnxIDf4UmrLx01v5M3kGgoW5rrbGFQ0wgL5O6e4af35wDLdOtxzm0FaGwJ+LkREO5r6a0TbfoVPiZ3g74VJX23y+3RO+afSocQHiaogJY6rtPV1BFI5+GK4w7vMdaQuylA2CClEv5OnJCWtMUtmO6sd6kQjXKD+xBqMbAXrw+KDJ3vahOnH3+Xsuc9A5Qj0oJmsB8V97cPrgfUfT1KJivAyifGlgqaY132vapFJy55YbI/rnwIpyqr+g3b4CMJtGC7Q8xBPdOWr9YZ86KdTFWXlqj45pFjjM0rA2zgM1sd1r4iKxDAJM/JO48T11cXcyUmjZXwnNNlA3cBn/4mfTgG/bCgu7OyMrzUuYosCK1PQq7H3YNoxxP6RLV6NrYIgnI+IB3jxQnv1LuvvUqS3dhMfLGtuopjPaUzWbe+9x4lBozEmfFKoK5yWtTIYaUg57AV94VaZ';const _IH='9c1a6be399091764210d84ddc35da973aff08c742a4e7f1ddb21c775a1f72df1';let _src;

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
