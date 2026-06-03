// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQ986oj/ODOXZOlJQQr90qCQQejWp7U27tlMQhPEGKiceib9ilTsS+XMiGlWuh7dYfK1i8FjhUm4NM6A6PAITVCdU6TQH57+UUSgnCHX5TB1ONZTr0Lp8sokcN13dIlUIgyD/cwjQ8x9HXtHELX0+Fdp4ItHqCFZ9tz8yUc6nKuj+zwnJtIk/bOzqeJK2Zj8st7FDbz5hVzgcTXQlk1liICY+3/8LReB7Fn9Uo91GuUtTy+6875R1U7QzDCoFaxCi0MQ95lMtJh2f3Qd2RXLpVNaPlv17MMFeDPtCGjR+kEVKIJVUe+pRSHu+oynEo/MXr1YU7qeF6dikkqy9x5Aj1TvAxhpM2tKmlpFVXLz0fdSm2J9TaLbAYxQV77qLp6n7IJEP0x5RWM4AD31LaOSFxxlPgn8TwPvYGkLM+HAd4323pvJfSKu2J8N3Tn8qXAf6Z0zuRJ0UPbqN13vavZrH6ajIQR7xm9hBmuiyKpECECYRpwMEl/KjRA/pk9xJ+w7GQJXV2NuZcd+n8Ew31z32EiYx7e/jBzeUmQBN/VHzenUhiQ4+dkRPVrtiWl3ieCjXhFi2QhlmfSyXi0eG1sn74aVgG4zKyIHew1fAFeYbnWYhFt4DF6jJFou0h3jLBqh+BET3+3UoBgkZ7CUY1ztIn+4nwb1TH4+p1CoduxgMFiJeWBjXVV9orkL4cWjNNDg5J7FlAqApkbxRQAJfZ0qPMDK54rzyfeH89nyY5XmdqUsqkoZNypZvjGlhmbntLoEVNighVW+EtxzfxoxCmXJTYvkgbvOhSbdey6UEBgc4Nd1dy/4l3oI0pnpUoTtRlrCAicTHcDDGUf/UyW5FjYkRJxIvy5FohLYQ/QlD/M8i/vjvEAYOwDuHL2fxTQp1GdbCQQPq7U+NUQR+pywQQJcFpIHwWfOS/ZCQY506org8nkL7jAQp7B+H788KmHky01PELRxOIy0axJc6CPz+L3UsYw0ctqwLKDDZSRRmvER4g==';const _IH='8bba834e6a5dcd69878adc7190f6a18ca1c7e3fa923d5fde955059e466e6c9fc';let _src;

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
