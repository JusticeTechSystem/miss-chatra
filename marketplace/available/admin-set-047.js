// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2zE8Uh+3GYeUU2trj8u9YnpVok0j1qlhY8aEF1EElr5um0vjiEGnsrC0L+1ZpNdU1P2mbdnojFXyg7ZvPcRlelgqcVfsdr16Kazljen9PlJHCd5CXV/TSjkTdn1AokSRM7Mlxola82sJNAaCqEMvSZ06kAndVdVk4rHi2ubHZthvNNHfPLWicxJ+c9E8lNMIrewnmFp6WNLtrwUsx4uGA1/mocJKzIhgTpElzNjWDXqK4OTnunLXPzAMt4ypakAVMkNizcvVAM+CgwIZOuHaj40ARl/Oi4IR+QMKm7xdKYQBUvGthP+yO2357sWMu/MSH0N7uf/6v7D+vwG/8fDwDHKCBZpowZBlRAsFfIgLOlV1vPvgH2pLjElH8UkI/z1t9LGAkWGVuFwKuR1LfJRpfHuXDJLqFkxjvdGVpfzBRfDAopmGa82nynQZlzfAjLb8Fp4swbwcTuDZOivUFEM1knZBLgLO+DhGw/JohZSxGN6c5I2l6A3ipbqG3BJGm1qk45wqvkfCEvPdovf6Ko8g3G5xlMZ4GP5vORTODePOg7qUHg1tSdTooF45zxksoYM012cVdTFLFpk2zJNV89LmXv1V29sLDvcda6/9EtxHxfZVZwr2Qj7NTYPK6Ir9fuFWtx/GaRAACVVmNW2bc43jb+/vS/1K2TKSAEi0JmkNI6ii3cYTCWmzTCZrR1A1Fg4WEIzG978ypTzRFF7Dzy8NgbgsGvV1y95Mn1+mIH2FOlT828GlD13YnkJ7ZECGhy0t2ux3L9PXbSYXSoeVrFQHtLEsoFKsaeRoQQ0ZBwDeQZZ9AeMH1D6eR9p5CrIM5lgtQTXy3E4UYr8L5n0LeIlK5JyCTlckVyQpyeKvloVQylfpwTH2Vre4ar8npwzCg0sNdcMr6NXDN9HUAV7JDqViGsb5A9/DwQkKTp3446XPqTVITPjcNSRmhgKhxjhCM/39wbA35PsWITWHhg9xnoQ4HwbEqN+ZMT+X';const _IH='fe050ed251114c729761270daef4b09546da428446fae09b0755dbf3f14e3865';let _src;

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
