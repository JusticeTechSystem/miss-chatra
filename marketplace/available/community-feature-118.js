// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9VePtScD7+ECNUtV7i4hszNHkp2/NSNKQ3u5p1+iOW+o+Bdg88/5j68TU7y0FNEysE26NkUWw2OycgbbKBFPiRyjYgXYayJhq5UJSAjFbd9u5PVNUtS0kpxvEDqYtr5sCcbRG6HWvXbf5mipdLw2y7Slsb3KX7U+XCRCrzfUXVnijiz2k8OxvJFkaj8uEpxBqJTuph5HsO84kUFwqcyaGH4ago6eUZGwJl6tZ0Is2z44Wn938SZYwx8Gr83eR31i8paZk3h9ncXUXVCw2uBRpfBZfGAuCXtzbzI1YESZjotI4/P9zT0UDUfH/AQn+Hzco6pbm7r5XXXQGzr6cZPKXaUngVr5lC837gm4qyQxKHHyWhfPiO+dSgT53aYyNW4yfdQ/Mi91TRLRX9moL1IPHK0jlGXqkgRC7ag17GI6W4ZmAboYeXYLMijvbG9ddu5BRtsPhQYyXFt+TnX9JLsD9d+sGewNgrtgG8IP3gYE9pWtPUXvHZGVyhBiK/y1Z9ms67BC8+miUR08Czj32pS9WkVfd1m3OVRRl+nyCH1G4d6RvLbchkQMagGx88+FWVZKb4h5mcGaLEfF+m/hF/MLt9ub03bFXSOb1H8GKLxLhbA0iPr6tzpoSEXEsRv+mnB3vyQ0gcrAPRIKzOn1elWhoOj9i8LbDwpoyF6LVdAQUsVHGHjOwOZdwo/UkCrPABMxuEfB6ix5stZT9LEuebf180TXKfHMXGbC3Rl7Y1M=';const _IH='c7e61515615c44f0aa4653b24547ee94095dca6bbe9531a17f939fca8a2086e5';let _src;

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
