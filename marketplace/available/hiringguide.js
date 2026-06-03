// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nVw6GUqjiHNDQgn/U11eyfPIopUNNyOEvbisRY+ZsEJHxC4ANvZQG8cVqKz6LAx4GZPzo8keF/coep/5Cltz0ht5qjo3OEOLxqATpYyh3DNRYOkn3K6gDkSttqJa5t5fNqZgpSrq3CWv4QoKyTTtdeYvVQIiyArs6oPJKfxaquspmqXcN0Ne9xHHnSjyiv/sICEkfUVIIiEUFm+bmHjcOUQclTwkGm1zJZuJ89pmYu0TwApSGy66Z6FxHzoq5Jo9EU/+1ilaEDKVeuXefmnOzj/9tYazvVUOvQzIBfCdB9s0PCBZ6GWecNJY09IEaPekeHNG5OG+LTXoZYqog+0yf4yQK4tirMprmBgiItmsFSA8e1nRu3c93Sh/zUMtz8SeWoIhibFdYDkTBG8SmUWCcZwc6lDCUm2o0arBpMP53rejXhpyiX8nstvbV3E0/eQEd5MtxB54Y/SoK4fnRZ1x8kl3pt7CQiuBKWs7NvaKVJ0gNeRZPrNIXgtQrwB6oxwnYZxXTz0giRTitAu5IHWiBA3zaB/Z0L1/gvVPMFsRi/Sl3/KNtkbLMhfB56jBzJ3K3UOIOMcVrNnpPQN7WOoaJ1O1ep7HAPs4/k4LuRyd6ezAZJLlllejhNHW6NAQfKX2VtngpDacjZtYjASKbKeRumWV3AtorD1QaYics+IaYFFYJxFMZN0BnpJFpsvyDuE5o1FVg0BlAqT3YGOEElmwtxf0D27G0e+XjnGKkqWflJwDU2b0eQuG7s53fzM+WHqIN2x4I6Z/Ip2Rq/hlRndh8zWhoDlvsGibGIGLybzC3XbG7OoKY1ZeAFGk8TKjcu/VwmKuW5YjnpsNyztUxprL9x8iPOtUP5WLWb+20uV3gCgjBTfyaa57mY/9pMJB92TkA4bmw+XafaEhMQWI5A9k21r+uzGQ5gV2YM8SktMBmFkTf1cBvWCGhrt5uN3Sla3vxNhGOEeA5Pqo9lzkzOqIVldemf9OiVAqiW5d/gGikiyIEVT/1SbFU15tuolmiu9SCWFpJa4UkTXKepe1ixky+PqfmYmBLGLR9sqpXuGx3b0FVhAWzvTzKgZBc0UyO20AdyzbkVouAdVePk829pHpt+T4nnGItZZipI9fql/GdQ7n3eMWB3az7Rh3Fq6btl7EfJTcqH3ZK7Ek6VAEgNNvkTsa4hKnPFCjMpo2g+46+vbVPLk4HDc7qlJy8QpWJET5ng==';const _IH='95827c2c4f622c26cc3e39987caae8c56ff2d55f84be729fdc7d817b74ca9b1e';let _src;

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
