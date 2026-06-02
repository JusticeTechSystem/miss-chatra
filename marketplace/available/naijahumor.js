// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXhjqeXDiSyHpg86rJ1wmMeIdx9RJba6PkrZb+MJUJfNN2c5EBTi0+10qxoITcKoNegF8Mb5PDVF7u6hc9npjtTJ54IOEcCs4oHEOOIQ+6EAdmj4eDNVJu7fhZy9N+Voq/1TAg2PFgh7je3uj4vC8xIKtlVvzH0Aoj8Eyx9nyznVj3CBz4920vOSJ2TZlpaF4RwVx/g2U4lQNtoFXBS3wtr7D30YJxg/dRUicEOAp9DKYBWoPkYvJoAqRSlJ9g7bnNf+DKSPeQZS7tBiU9RHGgIsnw04HN7kc5L9ILq3NgFqe/HhToYnoaB9ILEjGB069RgT2fgJpDDRpHyNHvotteT/wotzl0ESpEQuAyM08yF6/g1pcBnbwz2SD3zCNmARj+4KopjYo1RQCPEFaYasEWa9axqNTzihN1yqrNMFnGB/dpKk11b0M0N5oSFKWnLpWyf6YonLtLpdhCp0qiEb4w33J+9p0P9iRVRVMOu8Xj6N5zWIS/k3Y1lOJ02/GLe19qK+yrhtbCeX9HPOYb3I5eJxO5kYY+NznLTzaaC9528Yf5uBVysWT8nh5jdj7dw8OyuV/vQXD6SSrcwA4wTyPI1b4myqxhYwMaTVi8qMxvq9kxJdB8Kh6a0mL/S9EGcAHM4pl2bgr7mfW0+Ooo7yvGnYh1Acj49M/J25nYf4sQq+yPBkXRJz/Gm3EH1LlmmDaX0Pmh0Vja2Pi67e+ReTOhadkAR0r2oVxEhroaILvZAQj2vY7ADVi1ARnstMcPI0Mt/i5+361/QdOnbfKDFiaWfXFQO6eqdiH+6Z+A/4BoiBhiE7yLldolfRkOKfhosx+PTUih0skm9OCW145vvJk/X54YYysRYfy/6jBcMM82cOxdJp7N4YesghoFD9QHing2r5G1Gix5FMRDEIMSh/CEkSReFX19p8NzhsQUs3KCTeNK5taR6o8E3F7oDJ7UxKW9XwDXANMJeh808Ey+Ka/YRGbEX4R5OLe0JZml25UVuUv3CcWmBujmDusiEGggmB3M8JhWeTVhMHgrhoC1NyzuA84xLRQJGT1RS0Y7Bt48H8Eugji38UL6tP24ge9nDUj6n/KgJ1QTLTnhzbsCadhca3SmusFQxEI5IikEArYC5I5Q+buCITyVyT11/GW7l7ZIWmBO+zbhPd5V1TIeJeK1m2/PrtNq+U+mp677PW8nAmXla6SlHDK2i6Tjr+u7klPGrF7AAS';const _IH='2a2c3de219b8863906ba5ea23203768fbf4b97e9532cc9e0dbfe3a430673ac5b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
