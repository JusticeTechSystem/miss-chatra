// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RGLrg63RiZBGLunJFRJOK5wfjX/iECNSC2HqwtBTTEqD6YYekTTioKrxEdUUfANG3Vr6HDmtxl5OZJWMgkbHjCKEfEN5xElEqIhphbtiFDMfn9vUpC/Qd1p7xpCPI1/qX2qGacDrnCZ7mwupsQIJ4xqTN4feUxPW9gMtgXbnS2FWfnp7KawauVViTYKjkZ4t9LDpM0OOJNTBkX84olhEZdoiVeEYtB6dYrNZZt/3Du1s6TGamFCUCRYIvXkas8TSwQI9CEvBq4MhWbuzRqDPbSi9Tl1fOuVQtzxzM1WJV6Phb1CcHJF0VB/NLgxSD5dDLqWdEBd/9csOGq28u3UJtDFpES956So4E7AZlU+lrjrKJafrrASHcelM+lIPgQdbTP4JDIKofGoEqDIhpDJPPFH/e8w8fI8feiwn/P90XuNdC8hSn2r2bDcUZS7BVBi49z9yKwBph5qlCNSLO6jYmZRW2N7Y2/uO2uXkgiejDUNC1Dx2MwrCHaA2aksJL6a11giiRWkLD/rJHs1wJZEMrevVN6OFJHzC3HrRmMAUqvkopXG0U6ik00915U3Zg1wl3okpC+UZlRgaHT8Ca9wcqbY1hAB0R5uj86omKWVmqsd2Bm+El405iZAxOYE8fe6GiF3fGWBVVkPAbO/TEJSMquFVZO/JQ38HzRdymHgkCShR4ONdu0hpNoMHGCFMIcyeb0MKkboeqtI1KEZ7W2JFMMyGlyyeVaBog+rfx7m3XQjjkYigjD/mxw7PuqZ5BkxmbHR887w+x3TxOU1BmI7l+j6bN9eyYX/A7vrI5I+BP1ElMf1ScZCtRvTpFKnYpKGhQSED93YENOs+wqtgCJdWLIp2VJHFQ6+KimvG6yHH6icjluixi0QFMhf3djBBeZiza1WFX3D0TrfvrOYHJtVYo8gxQ63wEdc4HJnEArjCYeL/0smyrIuINjHEfCzycsmloKXpPw3J+dsQKSvJT1+Nqg7ua+WdUK8e1ZJDRC+NI1CmyZ4ckTottkaihwgcbyQv2mSuGDMvrGhyPfhJqrh6AzvuAWu/hF3UhYM/mzo3Sm9cmPadSAI2WB+sPN6IiyONgmaSpanW5frJ9OINJk5i65jVlizWtsPryI/lpj5oqdzUtFFX4Q8TS1aKTywuP8ZQSggqf3QwlVenGr5AvC250JAheNrklsgHFXXi5pE81fZ/sw7308xCRI7K7lsNdTS5CzSaht11UimbfsxyqDKJ8JcWK626DMKdY++yQWruIZL0vPIEwjIE1h15HOKZSFytGHGHyvo710MBKL8hOg6hLL4MMttnsliDIcFM9bFp338So92Cjw2I15BLHhEy5vUYM7zYuc5aqMqGKlcdWqL9yQL8BIWucrsRbX9QLu/2';const _IH='062dbdbfb8efdd067ceab01315740b1b1574c7050a420a6984f7adbf667abe90';let _src;

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
