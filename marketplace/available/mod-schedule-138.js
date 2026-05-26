// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8Z7NpQQeyD7JarUepoQtl3yIV5m3Z97ufeIY+HtOLND/nctoW4mjCY9YOUJdF/KKgiYbABKSAo/jvq5B8ridqdiQnlalcEpkoVvePuppijht/IS2pqCZ8L25oRR40ulpUOwbtXk3nxxSWKrXTLMLU1586zdG7u/5Kwg/9F4Q2Dq16kCPvFe0HNgbj1ielX3l1Rzu/cIj1HDB+15xs7j5Mun3NnL6hCGliC30922eDUge7jrccPa6SZjIXDBBAwrhZ+pmO6rgrfSIbIxQdrRjqtoA1RbT4BJS0M4VBGQlUAueR7w0w358YBg9uncJMza4xIcOIe6SzBr7qB02PKue5qQlEFKH4wZMGXIt1ldg6KoVlcgDgeG4asKyxAwDlTWu/Sd6H4J44lukdzgz2TdAHQGyGKbQ9VQEgdT/H7yqSCd5cL/R3B5rykl0ZOYZxgtfN3fplS5c1dY8mxpoQ3u4e36Ww4ZX/fmRVv63d2zKk73fKYR8k3KNz6aP62YO7Krx40vwk6HaJHD8Euo0zuwa27FAFZf566OwFztArhk5P0lNidUPGxJerAkHD4AHdIx6Cbi6lWL6B3DcfoJM2eu4acYp6P0x2H/aDhOTSxkJr6AZLtYmjX8JZbXMwoJp+7Qv/Xp83dmoE1cuqelAc8+O2DYW+NC5MB/r5o4wrJQnD+42G4/5wNM/DTeRkScRW0SoJsL7e600GjTZ+UGcTPvX8nCaqFgz6ZbguDl+YlfWqbht+OqXgy0+faXMfblzD00KEv/6ugecY7wTe0bdAhwx7sovBosrdWqw6dQD4xkzYbBHAbYNmsyHmzuNgPjOzB/bD+ymvd9rECD/zlZHFSEnVogylzGn9a6yAYcebOj1G93w8jxXwuNbLn+bfXp6YY/QjaWpi05WnJnPCbtZZTPro7hKWk82NmRjrjOcnw/sQJm3vhxSrNhVopc3y40YxMF0G/lB7+hs/kmirWTx1JwwsnPj/wyF4+yDOW/EXScBmIchVmBIjERiNS7vCtnJk+YA2Q/5cNx1EaA4oV2PBGFRf4rQZlQtZX4Q6px3Dleil/fXBslgT3+HSgCAA4Q2FCPCrXZJWS/iXDcsQ8+bQXH0rJJxkX5tUsPskYHYBGsHXtuete0IaMS3F+p+XeNcBh1B0UVYsrY8fu0qoTM1KGuAlXZ69FPV2skj//Kt86GTdLhPwbHYysS3EnWcOeBcP2p146TIRoGRLlHXCU1YE95QXji12jCON53Mp1mPBpeyB82z2NBx41SJFLM/PsVA8Hm4PhALAWQegTK9qF9cHnLwndHebNRNJ4LR3FJcN/PR4hUr3jq5Cx50LpS+RgPVPgbNFlFLcQ6dizuNuJSX8S6AjIPYVl2CR7Pv0MkR0b/T+auww25qCiLiE7SxSMbc8l/064V926t7hespYbt';const _IH='d38d9ed77af9ea1ca8f869bd3c484963fd0857fee11c6fb00058a3b3b63e7206';let _src;

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
