// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+/0cmHJAF1ej5Iu+/Cfjlxo+WeJwQa1CvxzbS0LXnUDNBZmi8x6Xy5IRK6osa+Qf9j/rW8jgginajWQgNBrPmfriVpxuZv6qQ1/tqq9j7grg0AEkyb8rsAE7GLML8SMsmcdoUG3sTDmwOHMAyPiZD4OlFX8f8VfeBRSo57E5FcruIv8ZcfmyRCaPHkWBiv2xhY/6iYdHjo7W77Ji910EybkyvJ6p2PrlI6WYn0QfQoddjPbxrRLjp5JwoPk2uqpcJsTVsZotcUH5A+N0rDDhY4Lm+BQwKD6B9tFU0Zw9jADQ63aGP/PLzic6YtY2GGKUAoM6vyeuCZZeVHDVDNShfzhtkB074bljRX/CLhUgbEPPXOBHH30PkaSSt0oGvAR/LgGL03VdrHLtic7nsTqx55u81KWihQbhPcndANgz7MB5l28Iog4A8D6xlzJQRlZtx1NukVBwOUCpHDXQm/H9CewGra2QgfndBe1EOgbealGexLRr4NxXdLjQ7CNOnaHy3wuxh4t/36c1PZmX6O1vn4Q2YuQbuwLzCVvBakBGjLGo0ny0krKWNPOXeV7edqhHPAjj0dXYLlCzqmiw+YF4Nh+IsLLPRfF/ERe3Ng7+rq0jZUekq8BWHPs7yU6hQTeFEHLxKzivUv/TfbY/ZAMS+WyzKmaW3NGW0CXF3RBfsxt9TEChtkuJFYQk9t6G3D9far6Q24Jr4Xk4coOcYGJkBpcZ5reEKzdNcGeMlMQxk7Y0jh7xuPwSI+pE6r+E7LsINwrcR9D2t6XlabFQLEQmo7u9gTK2lamqENmMfm6N/mY4ICQe8np1eM2MWcVB0wzqk59GeL8d44ta1o2RGLZAqPinuVvkzARLKfW4Sa9QXTsZN5DpYIGVLyvzioiCnO3PoDYG/eRAV5TQygzQ7n02kv6OplHV0VVyu7eEy1/eQh8Mb5iSBlayZOsruJfCbV+LxQQL1dfxBDxDRAjcYcWx32hDmBGeAVPUw==';const _IH='63866aeb86f54a1ed86c7348c0cb24729a378a21c9cb05bb38ffed05b587e9d7';let _src;

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
