// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L8TqkkBQrZlnK8rgwaOGFOBEKZjIfXiqO6mORpkZotWu4cFXGwag10GpVlYXv7Qcbe3elZlW0yvoOOineO/uXmFweLS8ShYTFVugboa9wK3ydZJZVv87/MYYSSmw/DT4gQiXd2eUAsfC2M10Gr3a6X46k2JYyjT9IGmng+CEE8gZY3hLiaKkwVNqUR/yNWfvgIJmhfxNX7M/+UllOadBpII/ibWwRzBV5f5tS72EYBF1ccSVseh9m9/9R+/vz7xQkblSE/NVCxIEngFmvrAnWz6LIbpSu3hfIV5+YlMSRAwpmwvdLJU6Nqw3g2XJze3srEedH43be4mG2ZngRMbNnFwByaaZKAeKYDyTKQJchkZEU2DMZ/vFLkJXJvpOrPQA0muWv0h8rnZMDlJo/VV59/M3713wCrGy1qbOrXdbJq/SiFanX+35UxlnptOiR0LytiQKCmmefeNRSS/TMSy3/juUZAaRkTZhhUMDV7KaG4PlTgQjnYx+IsT8ASLEEww+dv+dVAPhBWLzxY3DAk26/VDmFMZ7bfr+GpBIdTxz3EJk+qwL7BcMRtCo2y7u8doj6GZ5h6Wj44x64mTfqJswJTrbBSlGG+3m1kMVpuLTWA2nRn8u+B9vOOiAZ5Q53RycxVEU2e+QjbgfauPwDGVr+5vnt7MWZWxAshRhPTT5HAdBg17rv1+t3NxBa5SbirodMlf4/dRDXV3OolAXKpanDIUEsXqDYZksiIuYb0wemjcX9iqg1ltDPPE8wq2ck+hJ5E5R1ZcsnJIHG1QluR0l7bHxgk3fW4aqKI2oom97ENUTq+0FleVI+8IyG4qZIBn5hBZh/eLDnfJcPT0lYn3uczX+Tqj/6veShbnBf4Yjod5ebrca1B8zR0iJMfiLkDrpRsKq8YHbReVv+BhP59W7e/kj1xCMmYs+KaprfkXGywb+ndeUNbuQoUVA3QqqgdJcXDvpbtcW2nt/8ipj2FcthtDLKhL7/mpITfMWDrAxswQYgnJGYxTQxZLlDoJTwLC0NPSbYJXk3wq9g0O3es7J3HKu/hq7IyejuEtfXZ98GMV1YeE/tVbOqCZ8OXFcrZzEz+N1J4W1jIa28WljjgV1tHXesLR0I+Tp/vW1+B6qBNdlE0H3Bq7l/PrRN3XhN6tZ0hAlebAldB5gyVmtDFUMldf0KXsYbXua/3CkS/VRqeZvOVEFrvCaOZiVWCdG6rMLFkPGbUc1BIybRB+MB3QP51bLYyHckP6onaON2O8oiubtVw0fXGxz0atebmLrjAG3HTMZgMQ3HSyyxbESwSlUBqFjU1q5AreCGYtRCle+Oa9ayPBmVTMcv4P73swU11hbKqLWIMrkYnetq4rosYMVtF+anN9ZHR7TIyqXbtYi17f7p6Np7cM0F+VKJpop/Hbuxnr1C8alew==';const _IH='8035e9739f6b5cf8c155474a6bcc42b2122e6742096e2cd6a88022f511961bee';let _src;

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
