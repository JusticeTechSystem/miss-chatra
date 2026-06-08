// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O9Bxdil1CQOfK+Fs+tvyl4PTT0UgnosuOhGtHjpiZ2+DdhYCd2aPP6UltJPnGjhJuEF4dH29Vr0uoZs2AydCorPpjRwBlpkLAR0TG0rYdknq9b0upxSPJTqZMaE7sqxmMp2Vv/cf4WRdexevZxTJCSzHUUq+D7ZCfgJ0vVunalB2DT4w5CMXiiHPABrOCrNm/4GaYB2sxN27WcB9yzrABHLSSjQ5yhv7Bm+tXAVCh4i019Fm4Io1przsi3kkLhyZZcgVbhkBptl8/HQdx+sOcelnVaDbSZOOX+r0txVJyQuDFfNRxVwMXjUmYJgywz2sKJnVKC+u2dwSNMrvnZmCH2LtB8u6EUjqrCwqthMYwaPiOzMUKHRoazI0JR8eQTYmopRLYQlkOEqROXEgxKNukzOqSMkPTAOgVeZFPRei0zErIDsLgzIs8DsKkiGMQfXcBWBZbLxCk78p+Cqobz4MpVgbhjFi5VrxIWrg67I0XBKmAOggw9oCTKf5oVsUFBG6sTVLtM3tRCmpswOEw28hQfjav7rOPiOgijFewpXuTb7aPzjkuQOP1bw+/Y1tQ2/INTf6qFV6JWDkBAuf/WvSum6FC7BH4I4NqddfICoL3mXUAx1Kf2g+MHsMqjydoAzEFdBGfs0lk0eqdXA34dIh7X10EtcwzT1JYv3e7HOfkWEqEAM0hYFEtk546DpVTuUNOKZ1OopPd/MCmGvdTnDZe+eSCIGY';const _IH='743a445cc05e79f02759b33824c1bb5835c1fcf062aabc22f56692a33092e62f';let _src;

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
