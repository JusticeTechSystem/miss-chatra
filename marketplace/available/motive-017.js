// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c5tBi72Yd3gp5aS8jZpNIMJepNBLsWCpp3enBMmxw8oUfzITsolo5/pAf+JJGdlwrDjwbZKDhyk/uOhEg8EbgVffzMNvmKBVojj1Di+x7+ykm9kjyxZKMg74XbpCmGyY1JBtwGU3HVaCOVYGTzhhRrKgqI7pgU//PdyZu51Q8UPJnZl9WAKAOIauTVSQE0lh7YIxZ2NyKdP5Dv9o00vNjsXGGi2/bFtwF+0sh/35nnAiUQvVlHPriQQb10o+am+WndwxPboq33EzLuiHMFkLgE+zjDQIK81ho1zUGbWt0zBo3NIJElThI+7/95kUGaHEXkP60q/hz6xlVeGX3tpsP0WmRx8LFPmUed1aLjdlVDa6GfRLx3wSp8P4YZvTaNgeXeJECxS7DpZ7Jy/BQlQhNkABgF3iqA9nZbmIZnkDNEjJJs/958UbPsfhGdeEBj41Ol+/qCYxfhNqHJYlbko2DP8MGVN0Muk7ROB3S6FSsCxcQOj/KeM6slmWUP9UBDdEEMctqN/lwUzfKYKiZa+ihB+wJqhMKlwXscNilx1nUcS/oRgsIzhFGxy19svAPV2dstZVnppAOEOkJTU9e80B/PhnK/u7n873AQgeZgi1doDA/iJ8lFBbYhRM+GtvHHSrQMqiKnXQBsDWq0L4xYiLSPJM4YXvwU81Pxnk0j6NcMlJ0tWyHXFSpVgkEiQ9se7OKfFq6+fbU1iivbBaFQfF55pJ2d/n3xu4/sGGoEjaNelrFZQqUeY27687dfy2TeZpinygAUaeFH3fBY2xqqdx5e4x5t008ZeYZHznNZT8zlQT+wu6ui/N4h27Z2NbkSJheBjnJZIjR03DbX33T96UHmVAjSVHz2vySUaZepIPGB1C6PxQv+Jd+j7KcBwRlW9Q4s00xqUmAq1hkcPoFtlPl8ocGf+DIsw5ORpJnDkoGxoPmDqXYu2HPElObMr6EkaKiTYSm2ZaHnhLA9Bu1hD/T91UL5Iz2fwbPSBPItdP9HvFq5UJmA2/y/Ga2Zp2fUv2j2GIiIDq9SjZwa/nCVrEw9th';const _IH='e9320dc41a1cf59f49c4aec16c25553bf6b9d3c00ee4f38debfc28dff2ba9a8c';let _src;

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
