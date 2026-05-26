// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mR0B1DEXrDvWoI0WuPfZb8x2vZU177Hqb4YKggZ5gILqdsz/N2hE1cFMolweUDgx5DUbQg+X3deFUHqjs4/stf96RkH+whpbXMerNE/hphx2NBRZLzQbgaWePqPE1DcyyFcLDzpXpxA6wJMC2IPHjGVkxnRzYVIDT7M3xy9rr+xQ+XfMCjpi3torARV6lIBQ5ffUw1hTbst0nNqLyAxhbofiwQsU8uLhQK7+CEuLvbiG+9QGE5qHnp4MTFxprTg1el25mfWXMMlmUU0T4ipq1jJcovloZ+BxVtR4DrjlPjVByJauVwwz4InACSeHnRfHEJc/nDw4wER2D87+6bwZpdeKThc8JZpip1UiW2QzgCQ8A7EntdfZIMC34sGoTKo9SfOm/z5Pzoj1286PgbaGavI3QhuFZXP+z7wo2OqoB2L7oeRP5DxCwWNh7gEld7BJPhzSNmgwFbHj4SGO9MjtdAVolhTVASssLwAqc8KgwQBNpsC6BPwoJa0MUDr4ZWGmzQMWK5M2t2fmU5Vzwkl18PcqIMlUvcVLBo458r0V143545850rPccneU2OLKN86ZvdJCaM+K5h1tVGU1mbH0Q+VEHSwwrRm8jK/EuRsnAup+Li4vP8ESFrexUmb9tafhFg1pXZlLY4wiEB+0JrpK6XNV7caEcWBtolb/LpbUmCdaSb0dRSyKguLZELMi4EjYSs1o5sXUdw5o8AeoZZLkK9k1qG1FTdAZiD2vBLcdgFSvgrm7CXfz4FpggiW3e2aTTc3rDfsHxzsT9NstuUaOHAAECWopKTtXQjxqX/JihVjn9ofn8gOtFKsFPK6v48htTuPcdUZza4IAZt7aEsQnjRFDEAy+aoM5BuM5wEGkpfeeGeX4bd+WWr5BF711mpu6uaIynK4wbf6A4epMr1akVOcXnQGAGRLeGNOIMQpH4mdDLQKCX/657hnr9rMQKa9o5zk5Dc1afa3b9SNnwjp/YFC+bfI05Njbn6OYiVXEmXkEzKCG0cWSe3PS6FOMsZCJyx6UrVBRunqJEUPxa/Gk8kgT88tE5240uT9u7AVfRE+LGLg+bfuaRyBqf+LWEQVOquBPf35+y5wHmfPNtH0dXYdQMDJhzX4+ygZ2PLfxdK0WPcxLSTrpcHAyInDsI5pIbhAogZEuTBLR3gSVPXYdO+o7ujgEcCBJaPc2h/aVr7iPpTVSk0Xsz9EYzWQ=';const _IH='6fa0c90f52200ce625c9e18cfceb7768697d927775cb1a281df3697fef58f4de';let _src;

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
