// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kt9lCIc7FcmllvJakH+DrWdeFAxS4nTozyO89l6q60QCJoLum6o6SdTMEJzy4ratsyZTACzAMCpy7jn6BS3zld/ObDnVIf064zojweypcjib9wElFzb0D8jeO4nEdcZYcSlhF06z3zDowyvv+vWvCpMf5MAqqsWUaMxnjZvl4j/kxpvxRsCCHiv4S752hS+hdSYxtxqUm2NVtMC9oKoN2Za5btjCSyusT0ZYARvDtcJrOcA1dRjJg7xiiYSA98SoCU1stUoxpPhhmUmKH3bDxWXdYV9DUAPnGGkKRvQMSUBlRhIKytgao7Mg42URU6IuLyPbhWhT7w9QUkRfGX58k/fV6AyDZbsdGZUT5A7DiiNaXNQS5irvtTHymf5Nyb7JQdLWILyLplZcA1YpGXd+GemNvyWnywshne+MC+JE8+9dnY1TrWRujRRLgRcs1Az8jkzBnN56QLFjA1aIuVHiNeQNL2clp+0S1pQl/KcyZl5vbXfPEJuV4nJkmwDF5Ta3eogUyA0opSyF69xTTn6iaUfoiJG+4ivOEj+XylMm42ikpHBZNv17GNSdju7JR9aBCngsKFCi9OjvmUGDSWoUuRF81T9A4DNQ3rPnuT4Bua4v4hGChvU8YR+fLO5+pkjfEeJRclxysPmSvpXHFinOvV+tlupPvmZg1zTikYXA4seFKNwG7AU6clA5jjuL8/+AeLI0u9WgJw/d/mKw72RAustHvAsHXh68GZrcphBc1LK04hPZWgnVYb+hWJMvkND+caMtc+DChwjpQ3cJobLF3+YFjSydIYLoHjcJ3nB7Jt4ZSQO3kvfRHQwkQ9BKLkoQdzKgpQW7cYuIgO0LfHWFgQGK0w+FYR1RzoPVQx30wpXhuBnVhjUt9Evq6+K48RoHO8X22pbhbH7BrP0VFw4frJ0ld7jcs0cCGUQ6QHnVpd8dv36UlH4HgnOPKFUVZj7pU6C57RsK3J6ia2vekO0RGjZbCbd+DR0Uzm30B1SSChleimpzrUkMA38bSicLeIo+orKDEvEJbust6GZ0M7i8OmFMCalFt9MQXk82Evin1QmEIfqhIbQ9rOkiq5YrHUf0kLIBJWpySMCy/OnmUydfyWyordq2R2eQacz1sJob/qFOKjO9MsCMaRbHwj79/9xurzHs/8jIkx9urIFB/m4Jrd9uXvM4Yz7/OEUDTRLbr3RlaPAxhDDrMfQyoL02QpminKZSkIzwTK+QU4j2rCcDOax18/92AMZkl2fz5dopXSNvrUL0crzxPLDT83/bKzxjNpCigcCuwFRsdvL+aupHDvSaHG9nqk1AyFyLURlqbX2+QjWkbvDm6MafDLIsXhczE7IkZmIwWsEqI/Fx3G/v6+xNFeQR9fp8QwrnFY4RdES+zGt53vZm7dBXodXEXCFrmXY=';const _IH='5c62004738515e2bbf7210e50dbdf9faa50d362a47271cf36cfb702675439fd0';let _src;

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
