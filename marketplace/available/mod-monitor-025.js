// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RvYS2k6cI8SkDY2amY4WUirl4ggVZtTHfd7lpEmSUBHvuKpqZBfokIKblCuexvS3GG3hN+NCK4yGvRAzcybFki7Dyq54ZROHvnykJciffbt5sRpWtN2cY9XbQtNYnb8x/WhfLWGBIA7DW1RLhru1X5TeZEPA9Sb8bpJb0/JSD+54fA0o5UY5BlNworGKysfdJsqsbqoWFk+M8wnD8I1jfy+P6F9RVQDC5DdBGGOOVXFlx+oTI+tEnu2qZGV20yj974X9SOJ3/zdPaGNS1IyB332q2C6bBonGQ6UhVFaLRsMIy9B3l4SeL9EgA6GTMkLTTv9EElFPHaZkKcODb+9KQNnZxq7ghM7ZM5dGNpJxxoLz8inHtGfEyISzd5mmt0pfhqVS2oRY0ufT1DYeN1Yloc5HlCZy9XppfpRZlRNJZ98NkcmAzBX2e8kKRzZ9HYx79P/RvmgezOQCzjoANCAslc5sH7K5fIgxnEmhMU+vBTapXS6ub9B/6u/N7PRLrbDi4THv6aKsV1AchrSTqQKxlIzSF3CUZ/B0DIOWTXjYU2R2QciCFbJEFoRjO5lT8mbfXGUNE/JLhnIlBIGptEaG23fLJlldD9TqJyY2vniIBpR7XZJiyu7dGzxOmgnvaBJnw0GuMK5rUikOkwjYqUvEsFqv0d/dYgujD5MP2BpB5Qw3lefdvX0WlShW0g2qs87gRP9QM7l8ikKW1kMvSckSCr3qF4wKXvAiP31M+UqraEFOCTD/mutCjQDXrzrnyM6y2DkM6ULjjgzi09kJy1H9o+1bZrKl5ItFrIfS/jv3ujp5UgFcPjmEWqNjZ6XQv8SAYonCmiz+8rwUQ1RMwnRFkcIM/Tc5fFcYcvOGF/nQ2FDlkKSJ4FPkLK3TclGGAqdlzPXWgHPu6vg1LJft0o9mc+O3KE/BXvpYzoqtX+q6kNVM2fQ7Q11Aje3EYj4Wkkiz7MaltG0UIS1h0I2iSof8k6GYOcAHrqccRj13MGLsr7jJlpJNUf9Cwfu9xPGL8f1KSHDRQHdM8iGXQ8FTqv3mH8IX8lvPDpa/ziA/300pVvCTrrZveoyQNRaf6s1U3Xj3oTjrUF43lPM5rzQzh5iXq7TaouAIY3lB0rPFupyPkWRzt4OuYMP2wbxMOhc/nkqR8IBwaK4AA9LGmgLWZlQBVTGL8tRLFYdF6o5e5Tfk6Ldxyy+snS3tx/Jgft5r5LL9WI2QuSdOhMPi2+lkjcfFMfFp/atT9ygXcoKAOpy/Zppi4T/gr+DtBEQx5B1j5tQLcuc9QSUwH4O1vv73FTeVyeNJzxUnjIeewbBM18TNYs5pKizIG77gql7iqUCMk5t5rkby6VgEtkjmEvl0mf8LQwIXz9WnFNdis8s5RuvlDqIp5UoImUYfiUA2DbTT';const _IH='afbfbd1a6da0286ae90aa7912a32c42212db07b3f1c38714044c5fef28c4c5b2';let _src;

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
