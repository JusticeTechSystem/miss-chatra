// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RXPOfxIOA60wsINSUmDVECkzsXtcdRuuBXcUnWw4iSsIt8U7xlRNkDufUO9avlzMjPLUwdBK40FWq1TDSz7KFzAu2Q1BGFmZ1FBOza3hBsgpgIIbkPa9EcEt3jfvMFb1lFjJ8djJI2cuS2CWPGQMx0oBWypuKWSaIoYCVFJR9VAM5vVIg5gbAltwFRiYJMTqvYXUa7kv17gzBpOrEw9nS/XT+ykv2fxe/9nq3UOK8snnolRGO3GOC6Jz6w4C8GWAHX32jZB38yATnOuq2pHKJFuBUsngh4qrZs71kHLAtFFygKzpUQWMDdqpMpTCAcN1ufYVkzmCrndGh30TZ8PtIP0DQO9yEZu3FuKSt9KMZ1iGrTv5tDXeh13BRbr8P+Uxqgvky4SNtVm5WhGUPEulbJdbyao5bRCHDDjKudlX6rzWPGgftIF9MqQ9fXOUmDL+l2x9HNF1YG3ElBWZOydxiojZlv0I+84Fe2FEHSEexzdGW9b+w1VgWdAmnsMkYTmZsYdEY5y7xhKlo8FkmOD9EKQkhb8oE1y6snmY6SWZU+XXFy27hvEKYacOUNBMejR1/Y0psU2wQZ+d5N4tc/jk3m9MQH2TxoZEtdX0brOkvAW7rn/QCpOw3PPkGs1WOHk0ytzy0A66rFr5rP27ZlkH7H3ZaM5ULUH5AbPbpeva0jIZPTeQGlJu/OGDbdqZOw/1FFHq3l0DtI/Ug6YOlP540z4AbmYtWvvGGxAO4LwJg4FMSEHOS2v1xMSKI6cAhNNP3ExyHaGiX9MkDnz7nyRLOAL7uQre4tn/bqCiPp/SDVgkzjh9+v45nGn74mDNYZ0/Io9pjxAfbY1rnvLXZRJAT3COSnhQjOPpj7iSPYDNjEzFes5scVZ7S96dLc7nExHkZ8SPAXXJIikDdxq+JO4YFyvyzDxsjuxGQBbiCxVLXlmBNjFS3zAs+PhilFF9/W6eNo02Dhgv4n1lvWQXRElKXPofCV8lU/LZE0eJScx+IiuZYayPZsZUCJlNbbHIRg3bAqd6Jdnned9pU2KdhmdoOU6nP7t7aSikQiWrCbfAyVShuCe8bSDNdfy5BtVmkWKaM2HATbowN9Nbqh0HFi1LsEMbOZOfgO+HRcQptniEGsXW3EHCVEA4LdUNIPtyySXJ0jQrckZdH5hqGNSgTABOaali9OB1bPtwpjHYfprZbta/2UmxmU0XuwUpJT+mDXLtOw2KaCzXYcFRk4Go87alMRbCuXNoEJh+4dzh3o5Mj7YBtyHa0+702ToxD6zI1evGnd2nGGg7+k/cIwMqvceJx2LpYjXbD6DWKrSrFYufPGLB/qMQQ4rsLiAut2sxETWVj0QipmqaR62jPafS9LdV+0KhrVQGn1KoUKemkNgZ';const _IH='7d98276eb3dabd812691baf087ebe62d1428857330900a0d7f18ecc2b97489f2';let _src;

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
