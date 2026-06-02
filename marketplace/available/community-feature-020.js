// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCzt2z7u9Nm7w5JzhqWF5AKYJL4KytYA/j/Q/EmlSxsCBkXzMCuNPbm0tKP/vJz2y9wJ2Ip8ITfTK2FeLUryDYmpYw5p9hQB8dqtYNfSO7Wnrk8lqgYnncxjpsPoqs2AnQC7Pc/CluOIgvnqmYv/O/p+QFUczdybrPs+ptKGH6XoxvwDC6tsTZLNdPf2nHlsBDMST8Yy+WqcmQqO2CM96LjGlRtYIY+GtMlqjtgwqd40S2v/ni+EyVBg1ERkPh4w2zV4lgjiWQoYw3C9l1E0WJBiduuLEtj8SqQ8WmhlrinsRBZpSkY5WIKepVl5gk9td56uRazweqwOSQrTrnAgsSTk5dzoMsnElgdCiWn2ZmCSmN1WVkNKj0OPNFPAACjRe/9UPkZDbvjuK586uvii4jDgWXNuf9X1drRfapPcdVwtMd018t5vM0wZQKl7tReBw4on8NnpnoQkCx2SPKdA4FVqeWny09XYEGPw2WhmLY9kghMgzv84i84DfBk8OG7Sil6x4/V33AgrfhtzpxPtefvuoDpt1szzd/B+IZOOeeV0ZFFxgt9998WK+UP0hUdoiuIezKSU9hUj0prEUGNANjDhWyQQfSo+Yj2G4hFZe9moZsI63FNORrTFPCrJy4nBYoB9QsUkc3e/EgLpHrgwtr/2BGzPTVeFPoyGZ9Uf8ZXX1woFzqqT4PyGahadl4ikBrsiJS8A1hv5GrwFLDXGeavne7uMjOLYePbeu6CAQr3o2ditQN4=';const _IH='03ffdbdb59235c35f7347fd7f526722d4d7450d473c690d82f8ecabfe5523416';let _src;

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
