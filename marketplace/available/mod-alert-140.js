// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ91srdMOynuJVG+bKuGon13f33xUo5EbaXA0rMStx+1GF3gwstmlZ1jmLpmA5ISs/h6ykp5WtG8Ot4QdS4A5zFR5H6Rc5O4MEApPtJaliN01tuYAP35hYB2CPz2ATZ5nmNSK13CmDZKskt7QqJ7/oWmVVPMVYhuBYQXHhgJxxgKUs4Ozx3BI18V5HKDYIXTfOpsnLUSo65XyPVAURnKiqEULa2hBKmr3fHxxW2qterhGBiWFvaisqoCYgpee87X+L3D+a7UGcrGNlFN/Pl+uegKFB7gUM3sP0fUBtt2OHb+tWSBAyC5ySe3QbUGsoR7vlpiCZkmlq1DrCKE8Izm7RajbMBKA8m8BW72Zu+2KzRmS5DBENhnBJfxeCmoT2HKYqgVxyCPv+R4JhtRnUbV0wXmw+nZsuajmQS83v8lmcvTIW7HbrqD04Jvi4iTMc21R+1OJNw18nDeaCfdGWcEGU4Kabssw0olz5Cdc9bSy5MuMP3nOwEyaABGzbL2y/CIjgcNnhdIwguxxF+2T3XNHtYv4Qefgng6mLrM4x4dJdRKw3i9jaTgpt+rO7cVbtqFdek/S4VOjH4/mVNmWowZsD/QMk+pkDJUu3xeD9DI4lkwo0VjIPNN8iirEgFlusWk6v2k0Qlra+yKWEm6ealeuydtg5H2ZYog82bB3DxMDJvcet/QnFHozaVFcmrzaMFv9VpBoMuHhVighQQr2n5U8QiWYu3Y3OOlt8gfM/gtTK30kmqsr4mI640A2tp9Bphs2mEaZE5JHKVa8X4LaeWmatsIftZ68NLVDbiA0ueipahKNkcMxmSW00RdBdbOxKZOZM+/XdQcZV3wbAyEUqM2oM2M6M6+g6svzDCepdSbdU6XrqQKHbJXjjjFtmb/DTZfc3cRydV5txDXeCoaoti89CLdx4F6P6WvtyBFmoRvHQE21Qb3X/lkJ1VOlYIj6pnamkUG14y3NwMIKBW1+TojhUr/Xivzvs5t/gHUMLuAOA6UFLO2/lB22otXOwujapIQgMHARHRbZCGVo1bAIBinqPsnKTAwnkp7GuXV+zVCXgq9hjSNdHGMcbtl68qUbNkG3yZvOQ2zNdi7Mv6ylwvl1eBkeL4Y3i04VdDix0VBVUYQg39Url1AtokWLbXFaRaSuI89SkvaU6VbyaxABVXvv7vm47Zqe4Fdcm/5/Aqm3kZtqwStzh4xpNa0gw0kYk/euAz3QsLY+xsRCvM0Z3OSjHyjuFtk/X1CxT2zUfse/CwT9ERfs/ZhcQLyptKPSkPHwWVY/3nEnCaDsMg/+p5EbCH8Cszs8ABickZG8ii6FG5QTNc596ORFfWFPNAEa82/NYutOAeiPZaluhxrnQ7OSqPCQrGAxxPYpjS5wce2sTA==';const _IH='7a40d0e76f27178701766ed314cfd12da8e578dd46c0a65c6fd8a34ccba77428';let _src;

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
