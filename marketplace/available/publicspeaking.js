// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byk/CBGaDptdICN3QEGYE9xoxngjT5j3tnp4SDyBUQLaBFlBtKpzbpYQmqFbfd6u3D7GVnqm3q+0pILBOJoJCM2FcfXQ5X8uHNCzYFYN6tOGfIxs1r+5dbs8y9EZBEdGTfh3jb1+YctJJJEg+Zrx91MIzTQ/hZwUunYEkcNWcqfVfuUBsupnNh/QqCMNXfjMp10TUH9qkZQs/59tpoA1dDxoQ7fenxhoyd1VHMc7WfcuLBffpIhvTX4YRBFljbc40I20KqnL9XMEYfU0zkBP8TR1GzWjsrxSi1qXRXclErAV5VAscnPhUEqq2RyrsS7lMvUz+LHe34+4tcelEEPxgzkCiqs/ntmePKep3M58vVr45AftENd2uwSJeKK2fM9I3T2eTzzvHrKpCO4HAn82jRi+TPccQY/XqvsqHa8QdDVQoX9SHpyLE+mSqBRl9dS/GY6qwhBTAbqBBVSuUZe1QRtcapPam/J6s1xt56lqz3qrd+g9EX6DU6h4VOpuefQEuU1ghCEkZ/YP9fC0GwN/mX6xj+zAFmTd+hqqxnMFOtzBEhVVc6bKEk+pnFA0p8Hd2uGLFaEVn2uopzrXhXbRPU6D7J1kVsy/k+MIkPQMg26i2/0Fja8Cv/RUM7H1VxZXHP/RsXjKZdPTrJ4kjxbOI+D7EcyY9ZVQGKufJlbY7MB5ygBd3NOUvy5PaOY3VnVEoH9UTJVqyinHipg2l6XmfPFQRvc8da5SQJyUyJGSa8g9ZtvxAhEvHpdsHvkezfgLHaJv4Yi0sSf5NWc58bd+t0UMdbPVWq+oh1hOctJZo7QRF1TK86lRaRh0W6wYdaS5TDNcKqeRYKGAqNY7XXQKzdLP6oqbHrD7lHj+k5qVRES/HTjemSx3dK/l4GU1Hn1y7qRewxL9QLew4cnf9VqFY2Z707f3RyifWZjrGIAE8hPumt+/wbw014S5drbyxMmQguee8YIbWG87cfCAisnjiAVnBiRZ3oT94P8jg4P7G/xp7SQCd8TKOWT7CXDGCLE0v52/bZ6zDupkZbsVN0Q2XpTIKCMTbq3s/5qXtjk6eIur3HDAna/QfGK0E/0k6Kfan4huiX7plpukG0paTcAAuxqBj7pfiPw5Hv3W/4jZpJY/xwnZLWmInhumqdZLNs4gKZd+HHHbuZ0oSXmSQmFjwb9xI8e/rclenll4e8zRg1n8Vn7LWOaU445kZnWavOakQaOUv7CSXzW2FM9vQDLwi9cq';const _IH='e11a7735b1c23a70cf036ef3892bdc630f664fbbed9cf76aa25da645e96c90cf';let _src;

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
