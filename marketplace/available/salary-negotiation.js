// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j1ni9tm7aUZTo2wxJa7oAEBDe1WMJQJXi776220YFBY2Z9Z0C1/nyfe4NUAmHQclCLK6vBXvbenTSF+98ylkRMsab0TUjHdy4G06z5j4w1wN+G6xweF5LMbU4qeabJJEV/7gwzuq8754VOtHR06Nkjl0IbypC7kdICsKglbS+UYvfIZ/ARDqRjvK3fNtbOEcDIqOaz3EiX7GZwbiOzhafuRG/icX7Wa2SPKqX3Pb2fHO5UEY3y+ystwt1S7Fpf/u8+ur0SX6CC0rrkjC91IAaudUYc8V9/jy1ziH5iG+9ZeXbtBHAKOptTaAAkwIcZwC4bIVxZbBZnPmuuuAfmVdjNdRB3CUG6EKvtuhIbBo/ntyngpbNieGgpQwIxUPPfoVZY22hNxLIUuFkUbbEjMIFA3Y1WdQt4pIi7GB7g5lIVJRjw7AN3K0j/f+rC1GmJ0RyRwn91DcpAepnaK6PXr4YeWocrunEvZSxsPiesQA4j4q1ismSqprnmlMezN0NFY0xY59XoPXzXxSkgpAODK2wQjdJJN1aqcT3+XPcENJnFc/dueOqvgr3FVEynq9vl1UAUwaUU/5J+M5m2Vf5zNEOnNDwn13sAN3jBcDmM2Q9mQyk+XxjFQ5SfqUlFJrxQs/jahpV47pvuXaGKwZtpGr2hoM31VhXUFj8m1qdu4lYMfo+mt2XRikVUSYcgZiqNHFeD6VH8SqvCbZFdLP3gSshjFYoQaX2kTRDsUN7PAEPal2tFJvLXu5ia3FS6+gy6fkRVqNOM2vC2/n+RLiNnDuUIPLLEQxVFbN8MBJsDThW4RdVUd9HL0tiHGHQ7y9Mq1zkj2PGW1cV1yCFPvrAzaG1GVUZYHr9vILysJKEo4WrmBw5sPNo4eG+tjOLMLJflP9I7OIiM7GZqEvmU8D6zALgo+mxjN8Q4/Y3B723fpJ+G+yV7a30ucniEplhjUdHl0zICKdqVPK/0Q1Iuv+JNxDn/kPSvTPotAe7vbEn8tycmA3S87cxpH+3c0zOWUQwAxfDqFnd3orD9T13YJPRL3O5R1ymctoyHKQZywHECEdBh8rYLaOvItpjh3N0LCJ8mlv+B9Xg3A5GbQDQR7KQE/ucm2AmY+ekXFaghrPs5grRyeW8NORDiyzi7+tnT3F/wKC6YAGTNmYIXEAhSr84m+trVyga4ASOGVbfVFKB7bbIVkyfpSYIyPVAqTzDdgzLXVTldO0GYOWQupBpqNUumt9NWXGEV9PprF9J/07Ol/g4uyBSJ86f5ahJDMU8YGpv9pvUjhFuoJaPnz5/osLUXFV+1EXEck4RjenowrMWRuq0esWSpWk0vuDL4i9TuWE5LrgKQFr0E4PrFIqT2zWo14t0L8QCdxMRV4=';const _IH='1838f0a2593d4a9435601e36f4f7793c27d8ebc9722dd6c4d1cfa295e162e281';let _src;

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
