// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyMeMl0Rv///rm0hrVnLcsa7thnd2UnwdArcYsbNgGGwoijrhmW3dy4kE7hgCsVePfhIhByUtSA9cHJb6Ls8UuiNdPQDXfch55j6WtFIfEcdbNTW/Xv7WLYDWdQNBefX2KxeFmOGIKFt0DBLtVQBHIi7R7tkWkrNxAObENORaUeLiWh26p1e6KWEJt2Xt6eB6Oy77gUi6uDKE1kEfADGAhHYA+UV7d+XfMwTsPyadi4vgXRNP3nWaNIjgdVNfpunsE2E2dj3DpvnWBbpMA8otHbtL3Nzkycln6MPgOv6JtvnUCCbtogDjjy8CIsp+lNBXP82CPJ+v4aiRRQ2uMlOStJYn498vXTbjq78HIY/7ZW37Gw2/204OgJgZsFOUP6Zpfac4mpojtcm3lL5QMaazYOvvp4r58tY2VrtulVe2C78fYp6fhS4Rczu6l/Ncb6t6A7JcLrNhS6o7xQor9/KYKXLLwg7NxMitmVAo4AoENwvIKPfAaFyr5vtvIyEFcPdJJ+NrsQ3oGYGMDe9Vl8+Wl96NNSbRcKq1aG7hvQNJ4eDUQvp4SdQ9Yo8DDrpkUTQkmncrfjaHM9JhdXHyR4mGksGIwIyf2Twjj1yhhVOrJ1WMqkjrWHsiF4SsEJ82Kd3lJnU8AbL5dcimyy/41NhaH+b207xtulzwZJJ220tU40hJXBBGwJ2Emg3Hvqjyc0DGzR7g+6Ho6xXhMxLm7kR0deCqsmIN1+Qo8Q=';const _IH='c1b2c3ea8f0582c68133cc7a255abe99df170cf56b314e60d9fa614cd11c485d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
