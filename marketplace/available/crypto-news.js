// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXp7bw/RgaKQVmxkTso8crC3DlyU2s9lpIisGt3EIynLnXW6wlpBOBmPKqB9tyosiduenO5Rb1/fhuV02b6GixHy42Emv2BnzEnWBSE/mwZ3zjB3azfvwkWKyLNviRFRPU1Kfn6ov31Nqk1mMwJ+ljQK1U+s4q/XVHGvS1T3tMLD6yX+fehJnXCF8FcTWWz9M0EezVSJO05z3rob8ZeLo6elu8/KfQHUi5BkLV4YIjpBSbXsqQLRHZGanx8saYyRsLPVrTVzoLOkPiVppEuVgJ4CeF/6cha0LzVyiGLWRMx9GF1RoPuKRDGOWzYQ8rh1oUrrV6eZGzhNaGlcRY3vValJsQxxfnRuZZukhfnawAVGN/uBEw+UD2yfvWlZ0g9ZI3r2YjO36SNTirfwJjKJLe5+D1mJEpsXo5sDAcj9MJueLIELp0c+BzGQ/wyWEfV6ZC5DPdNOALXS0wpksVNIL8bQzobZsnP5ImUPTuZtSp/SdrFl7RCuRLCK0PZVytWAz7WDHZhvGJdHxOJkgEMH4kzV53ENcySLuJV3IUPda76QrxZIBTWAb2CHLq9UWYRVwFzDJh78Gt5Jds05wh23IZLUeDnebherSORgN7akbNYXdvnDlCudbGju0cT5XzPSDrzRytolaiYRC+y6CLdupyqlSmZ11aJxvH4uzoVqzOARdmIcW8trp958SwcA+wEfyoqBGN/8xp4TEd+CbTHDuSChiSR05qTqUTclrQZMSc04FumdgV8TMLfXjRV/AvHRVeMDzopuC1N7bqM9jPISkplEZhFJzd74O4aUwxovl6Zg6byLJDKXgQZDrYHMBpNL2L6LRiYe8D8S1210gUiY6uD+Uafd0mySdB3TaFEVs+KcS2c7OV6brrNsB9shulP4TFYyC6yq+umwjWWLuSW7PN4ctGGb+p0PAGMn86BUT+XuXP9GJ4HGuL4KOVrsjJfLRASihvXq0pKmPY44HJrJVvzzOi62yZyJcSa/5fAiXD8ml43WTzrzH/8AQYcvseq/YhfN/Kh9bD9syOlOqvmInf8xatPbNZsRNyIVBC8+vs/azqe/t0Tx0tc4ozuSjw2A5AfCUPVdQt3QG+to2MOEe5zEx92GOf6cwLnBvePEuEeqbedCjgD6CcPY1k7xNjDC5jnCb3ye2nn2idhO6ENOTc+4Iwx09juJVYL4uQWosyniF6L2i5dIva+uMQcniglx2cSjoOjGFqzaMkTcvF5xa1czZSHEdYme23z9/nwWArWjxa/PF8F6TcGNgF+8lMzSzA6Vx2QCDV+pXvgaFxKC77Guig==';const _IH='30deb84bcadbe08727046915e5e438dee22fd807881c6ea168922fb8ab9de8ed';let _src;

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
