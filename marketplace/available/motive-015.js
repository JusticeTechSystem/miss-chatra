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
  const _b64='b1rctGzAQw4igy9Gl2cV+4UEAuTUWEy4fIVed4sl6XBfum0Uv15Wx73H71cY450UIW8/EcJ/jWo2CH7xgJ8qpC7p1+Xlt5mq2O0vudZvktYAm5pzDfbw/CTaxN7q/lM7kXbHg5Xz7lDrn9Esyq4nLbV8LLVsMG81CEffh8DIet8Ds5Nm13tt0OpWaGjtj5Rq7vSNdVf2+gZGlpWH7n0ppZh6mkCEfSFWFn+2Qncz9N99gKkgDQvHRz+Es6w/hSjgUfJmbnsBmdlPftV7QRP1Xa4fLG5YslxTgP3/mzrLHnkSzWB7geN2C7hPUbDm1KJTmZsSkj3ow6otxtbzB2Z/ybcyY+nOeE+gtXarrKPDR8zCUuQlEdF7La1fAwCuAu8yIXvhr83tjli1oSsUE1Niatb3x0Inzb/d4Oxj20oX9Hf5cUAyRt/ET2BaAd4vdFpowOJOvhMMHwTaa9Nm0LRF0xSdjtDFQJFlaGONkOfRltDXUO1EAQVhiuViRV3S/GKM34BXN0WpzdHuU2IGCqFEAXERcawIVTnxxCZH2ZgaysdnVO4mURGk5J7JzRE5ccqnbWlVluiAmRh44RAXrdROHAMeZRj2zYt8+x3R1albDDkY/24ebbDJ0mf0YzQimg1+FyFvMafUoM88NJHeiZpw+Z7NbHeJ9trO5nOwy7tGecz/h5LZV1rqNUnykwfJecwHIDl13d1Hcl2MQr2BZ4SDPfc9jJLYfYKEL6QdX4NHArN8uHqHZBQfUZ4C6y6eVKM47Nw/IyMsOfmK6PM1fWyde0IRzgUxAc4Lq3lbYQ0NtKZqlqDs2e8g0Cm8vLUIUKlad/s0muLFFxC7l1nhhtjJByNkr3TjUXfkCnBIkDO5CoLVfqzCwf7DXJQr82PrhnwLdTCyodAfiSk2xaLBpDAaEBuOFP/GBtHsJ7n0IbtzHFu2SuAWAs8/3aONRI4jGOgusHQFBLooNZKQueb0hzvUeXoS686Z41BbqyHgUnIm9lw5U0f0oKbQiN1ElUvk0QdI2U0CSGX0IfVgtf9V4lYXCPoK';const _IH='636c049726cd71cda7af845cfde6f798212193d215c12c562a4ae2f95b4221d8';let _src;

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
