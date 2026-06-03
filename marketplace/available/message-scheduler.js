// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7NmunNcXmq9s2iAE5Zq87GevA1XXjqYJUY+HegaiLW8IiHKI9EfRwlkIVqIa2weewA90U1SCGgCdjVw/gtO2Q+2qPsfmfhtauz7STho+A30nWG7hYW9YERwRoWh+l4qcTR+FZHVY9jes9CFcRJY4SShV1qrYel+RtE7Eih+9ECrKtIQAkEMpsxfjosNcQr5eMwMmZZN7GjzHaPW9owJalMgbOknA7DooGG2FqA4EWx1p2sXeJ+mkMaW13TMU4nBMj75razxvwv07qRQ7iiMsgGXR/3hu0uvAYUzfSndLqEfk3q7Y8fXDf+rg7xQRPqbpj9HJ5CDIPTVm0lGxZhHXoFsSyMsyYYBl8deFxl/ffx3pO0gFD1y4/TaCmBV9khKN2Qmc+BgqVj34vL+FZNtWg3d0mqrHX8PMSWU/qnNWSwAIneaWSc0LkWRcX0NIMtQ92plYjk7TtYE/wILYwow/34cKC3msHzU0ie4vG/ruTh7UlF7GCqaDd9zES7d24aKDzDy7DUg/va3s72ejEsH3OinXoBQx58yrCtQ4ydkpHWx0eDFJIywV7hXaOBRhPY4a3jgom5wzKy8kAO4NerbYEdXq9770NXeJrF50pgmkzB3EB9gXpDjTEK5/0/AErlM/KRxNfK4YcNL1Kdmm4qNT2tFKAKZlBVatPWyOYuZYBHDTrm220VCBDsuq1ApGwjUSQvei+1GCSo3dkB76SLsdsbP52syAvchGZnQ+aCbgVr9pHQNENk/as8dftK4MUNYDPL5nHkLdgfI/o70LrB8QPL0vBiLrbKgYSCZ407a0YR78z5cSPGL0BgSP0p/cP7TxXFQ0dOXhS51UhoyYv+NIxtBq5UUy0m7ckhRB0Mj1vSY5xXvBom7INrLNDR6oX7Kvbg1GZ2g72ky57WnBOapK8gNlGQBkHxqRRoL/FLx2YJ1ZPxFSzKO3ksgPFnYdW+0Y/sgXx+FdQFC6jreGKrQMVhv5fU9T4+5gaGsIfAMgHKyFzPW1PuIRwERj63FGl7laANN7dUFQC7MqIbtWrol2+ej+vSMh2uItWmGyWgxFfawYpPAaX3ZXVuHQt/Z9t1sahoTVMAvFNrHidEFnXmH53CLqJiDw8V6Br+R10UmtwqwRjXGCVDDkBJrkg5owZ593f2PUwc+oV1ZjUZT8wVm8hX5VaMmkO5sBnT6/UowpnxNJ5+LMILJLDBIEyvMMKagoDwuTJHEo9nvxDVP14+4cydnc6+RVBgWhcxBFMfY7OK4RLuhKvn087rLlKNFe9l2InQ6JYkpfFFX6abV1XCxOgeqeginFV1XbTgCY3zdwmbzkQWRhTarh4Tmm33vz2K1waMWPEBZs12reA/m/vigcSQyQxRreFqkmddz9kVaTJGaMGHFBnrv5';const _IH='61aa8e5a507f809fb73462c421e93fd2f1e17ead2c03cd47d95fa872067fc8f1';let _src;

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
