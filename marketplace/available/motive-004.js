// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZhpxoZOtH7rcdKvvAdhdQADNj927w6vNunWKlJ5vhoo9ecJO6ONW/B0dy7Zvb13IbZgpigwOQltVmpwBRqgkR39OOhNoOGsxIEe8o5QAgY/RJ5GJZQ93LjyHOOhl8RceqHLDXOSzhOBY7O0ZCanvVmJ5ORtV5LknI6jQSs+I3rKjY12gzLXbLjEXyhChmSwY1mxWWJyminaxla0l1zopEzlSPpAdshn+Hj+0Ol27EV2jy+4uEX52KPHz42pkHOQj3XD0QYyCggunvS1tWcX32zUxMUYKKTeZ36UHW3idYboKX8PPcQ3Wutzb2+H4ZCF3a4dGYa3dgTRkld6UM7Ehao+bKK8J5KJzK3TE1SVRIICC7JE9tFHp8iBPLXf90eFp1bFYQAEmar1Tunj2gAZf5YeQ9lAyM4ctnrqLnZ8BN/6Hy2nkaqnh0oaw+2qNL5I6NXEJwm76tBQHUZQRi8io6hpY7oxI/uVWFd2QdOAKZ5XEsbPhBWzZZH2gvRNt6BV+IkFJWT8DYOM5RLsmqFnvbf0Tje39fQVMownxnOnnIjKqyXucT8apCMPa/06dbkqhaWblqwMthRhygkeyC8FEOMKbY+QBB3ESFaxAUP1Qe/33Ky2kYFNZN2GPnMZUfcRSNam9Awa7iPIHwsSQ5B56uXQkRsK1l8lX+KvMQi5ei8a0npBZX14pjbZ/Fofr6qiG54eDOiAVDBvap33cksZHZS2dc5iUbJicnoy87eNKm2JsogyL8rdu9d2/b1Y5kN/GATqxuaOnjqaZgSLF/BuC7VChhCZKSRRbYCwGeyPU4YzI5qH5QjGG/AEgtBN/pmm7rJ0O2kAH89uIXtdVLlCEo9hxJ0QFbVUnLreCPzosF6EIpZhB3u407XO/CrVFHBAJaJMHAOrkubJSZ9MyttFy807WRJCxhNyz2e2HTLwe2rJJWWVooOrVW4S6IaRJY8gZCRntmihegwS/T7956WH4oKHCFeFL2/UG95SRNJjk+t36E2s9W0jSGMNy8m56aizAkqBd8MQDlgZJMFlD26k=';const _IH='532df47325fe962286c6d25f004f01bbb6285b5b9515a583c524fe3d4d5a95a8';let _src;

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
