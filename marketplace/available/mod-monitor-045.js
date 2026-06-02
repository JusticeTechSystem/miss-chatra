// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='si2rv5mxMCmzXlg56bZSUFKQ0YaFakic6IKdH73DaeF7T/hd1gmBQ+zljh/sKElyW3V3Np95gl5VINc0grmR///1Kd8n0Epr1Qz/rBArFZmlKqoOXMRG54kzFZhpPsfEFA0ldttSKGCw40Wsuaya2Ha/tCs/KVJzEdsVe8By69VahQKEQQGzIreOzySBep1YRJNAxY1cb+F9U8nixKHDDUX25iFgwWsms1PAjri64Ah5Ya2o7T3WLzXpl9r6N9tycZrjw85JRr/+u0/CbALIHtt1Z4pjDU2Y0vPdfeoPx74A4b3OmOGkvd702ePSUCD6+LIvBKfA11g7UUT1tOXbS+kNdaru+CvzUMyBgXSg1GeL4ogwiShWqaJEJKPLIeYlCeV633mREPC7Pv+exMgutFblnoud4JqfGLz/0MeyzBk9HHs0xMNe7k1Gn17bQm2hrKH3imEel3D6NH6cA8BLkqptlJCf0uZOB93NVGJ1HkxkMnJ+TOvCbzzOfNPv/KS5Q7DCH/xMpN5V+lFVAdenng5+Ew76pxKlJPb5n4lntIx6wIe9bpkYdjf9zTmnVhg1GWB7Op5F/tLSrSzzmqJhTVbUkCurcfLpC5i38+RDfUMATKMHZc/KGGLGVxo1hrXSEfu50tx8Dy7Y37aTvG/i8M0Qfqrlbtesq5zyZLQ3g5oz8ldmfXAflCTfrXH+6eaRQHnnix8xqhbjkE57vIzRD0OdOVFGRw+lCXIajH5URQcUKIohMwZixy8/mqY4IGzYoMG9wH8CezYOo+1lomhCPf1eMFBv4v+lWN4hXfMUce3ELkDjBbsWrbKhAQFVIOLbCl/RvrqnizBEo+JPep7JiJBsGpGG7YJTKAQw4rxIUpi9sMjSFdsQZ5NmP3tCSvBPHoTpoKwtOH/K2M6HTorxzyC+oNcVbhMnkjdmpF6y4nP/3ESghPsALVLd57puVnrcqwdelhPAya1Oajon+y+jUOako4+icClFNrHMHZCb1Qd3xfcJo6L3YgKHNSBwfFm1D7ktbbMwMXPcqwxmnieYEqkX5Bx+OYpDsdKvp4hQ6yiuqnFYJLUOkjxYHHA9IRd8Acatkfr6uarMzjOwPu2G2udKHQw0ICfhmpnW3WZchRdg90yRG46se8fV+RyKE1J/2zLu6UvcSFxDZbsCKT06vaWWKdHIcm+pxbEnp0yeWLFW6DbGyHTCjRIGu2Ro2HN2TZgQIb7qhMIfTY1gQAroujJF397m7Fdqv3bruiPxt/utdnq2EDY5zcGr/VMBFgXGfslJ8MQEA29Vv6JWssDsEN3A+Y3VESGiAId82iUiWppNl6Pfu44ufw6kk4aC4FzcgVP8odOy4OS/pmYb1NEOnsoDDi65USrgdLSV7rEJRV/cxwuIfZd0jYBM2IKO';const _IH='45072569117b3fd017a66895bd38df3f0c752391ea237f04d0d9c4f64a6f3e5f';let _src;

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
