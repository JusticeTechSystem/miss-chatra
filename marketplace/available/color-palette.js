// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaZ+no8bvMNuHAI6H/dbEH/31X33/dWJsKl7QhSvnCp2FhlOaerJtoHmmVeVCw60UYD9M5hEkwPhbZzwAzTy+WuVputcbTBz+t0s87EwP+gX8C+dTAfQriGB3jIpfeinUK7i1DjQCoKWPCY4uSjvDCIwmPelywKszmeSTUIn+QAKT6nYeBvecXnbvugwlXulnuixlPJZiDDYT7N46/GU0VDbibu4EiqwYoFtwq+rEFt7vBiY658L484/jBH+dh0qC9AxYFI9sRn6CUMwgInLDuBVVrmnNrAjM3k7lKEDVlBTInA1OWweEQPrQF5ROKirGh/fxFLO/z6BK9SMLnQQhMCdAJz3SG4sBWtMTCIGmDvXR75E777IxUVp/rODVAZaCvW+v7ig2zYb+c4jccLT4Da2uBHyxfNJYYCmW71OM9K10I+0VNCuBf/Q0eA8nVVHzrhs1oWI/zGwx0R0WpAnAzobRWnChaFh6eAiFAM27YoCHIJSnAz0bvLchiCUoTxx3IAaDNemcblLE2T8Lp12f6s6+ymYWsMo2Boeabyo4eO1uenrKmxD74E6pbK5PJXWEWy+yhjEHy+wEwnn5AaoHYB9RyCHEGQWP6DqQ2eadJRmrHuO/dc6vepYzNbqO9mbngth1vEiB523bn9ELdMIfFIYMXQcjwlPJmpBtJdxc8thWingt1gSn9Z8orLX7CgIeE0jfIuHKs0k0jzborNFsNAktOM0thFgnbnK5LzDwiXlSMLC/JtuBedWohyNaCqmDBgXpizGB3trPtUFkUmeUC0OzAKr7V+Qb0Cf1R5YLs2neRxY/Td/WtWbikM4vrPrpiUL7iLPpUCI1MS6Rw8i9fKqJQDUldGb4zJGpV8s2gga56nwj0uSy7xtQ71yx1ObCv+MEcMMmqKwfkYrKZ+5BE4/DFeEclgwltiZ6b8zgGGWytNsX6esz71Ja9mvjDhhW2hwbZbG+TlB19VNNwB619Y3aCJ/nqweZ/lGdVoqxlodIjJH0OyjhBshnrTSQEcbsFg74zD3FQC2eil4XvlL7+qbptOTqFhD1JMbmB7+WieCaJ0sWFVp8BcBydMwroSaC1q9M7eIR/PPhg62I1bS0iW4UK68nAmuUBOWpa35ZO+cUJ+YM+SVIJUFCCjgHf3jxEAkDFrQYKLQt6KTT4zVszU+M7IuBhR3gvXkCFX1207hf7VO2ZCUl/cBH/eUx+hwvyRlOStICaqk5o3ssK98cVWOLzvGkrOCc5EM7mS0b2dYAEo7UU+ja2m0F0NUTtAJU6A0gTuxkyWwWWiFIfq5qJhFhMyeBzD4OjrczWrvhkEahlcbrK9B1T6JgItjh9gZYh8U45HTnWa8aX4BFyYw2TdKcrVQ+jJa7tK0FSGhF9L6p2RbJCrLMBP30TIJb60Xynq9l6GyDjGlcWQ1uYOhWaEFgrz9FrHyRmbfPlWkzkqx+F2VIK3ZnQRfIzTSnTvAwh61KK9NpPqs3QWYWFU0rPX7rc2Htx3IQn8zJUZ7jd9lV8P/SxeXCG76VzI1ZX7YwCDjhWrJMUsV5PQLdRMtTWBD+89aiiL3Y6YGmpMUECFel4lyjJVyLpwUax5t0UwEHyMQ';const _IH='7284d136c1b72c85b18bebd24b1ab20b924b5e86db88fd1b9836e69d6ff10ce7';let _src;

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
