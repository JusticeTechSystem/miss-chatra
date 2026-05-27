// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Aklp1YvJQXNGk62cqJMlSE9EjsZERPzA6408IiG/qyDeXOX792Pl0WpcRtocj4jb5jS9Jfa+lO9iii+xehkEK0TwB7hAuYwbAr4ZQdoNoQfPM8NvOyhjvQB6h1Wf4rocPC/9VRH8D/+amr3AA4Ve6uly7eQtqxlkC9Jc08zE8k8SXo+AMKhaVT+ahTU9taBruEKbfIR8eLakvgdv7+WhKU2wupC40/w08FQec+Hon+8RGlooCnbbQeU8u9P1/rboF+X1RGz31e+sYDvkrFqAd5lCAYeNKNUaawLMYTDZkyy5P1Nrt5cVgJhUD+qpxYjUQUbld3wK/3XxscM8a2QAiRZl5Az3FNyLWTDvFtlnAMmoms5q4jk1VhD1bJJWCmknWJZcECXXWoBNzRUjfq4VxzgDggHh3hWW9rhF0Gl6SlP+eVv5c0UzR9ZtLeDspmvkjCpXkye+3ehws9p1catm8s6O29vWI4olm4mgnu+uLNKzRfUZqV/4FS8eSmZO2+TQX/TBRJV+Skimlj2RGCeQpRxSV99MtQV44b27RaPF0smr6O2oh6ahEv0xVVXqxzTXQBAKjEPU8InYAO6WyyaMVJEPKXsbOIIYAghtTa24Jy+itPXVfR2v2Q3fMiRlMw+rI5p6Y64CZ71Fph8y2Q1r0PleNIXBB3+BFOnLqpCqa0rD+U4kmxYkzzp/Ct9m1eJNlQeid0xwVZC8xNCVzb5VdeMlL5APPrqlHeIH2FNQA+Db6xI3qIb+E4aL1dspl24hT/IHUEq5HuUgvAHqG3xS1UgKHqyqj+Uxq6TcY2ycs8PbDvU8rebulstK1DItrDyu6FQljVTrgwJlWv62rGRbGPXkVhij51H63T6nNbma8xYhRue4MPC5SEOTwaTH5dREZPLIfCdDwTG/FzqqfnpMn/DzGVk6mu9AqAyB00bhXsIW/xbd9xxKSdZ4TwJvdj0bUhwJhBG9Nysifmyyqvjqynp3hlb05/Qo9zK8btbIN84tmxxKORW7Fec=';const _IH='c7c56a599d31f02a69561412dea2543ebc0c55c62b8bdc85b73170354a7d825e';let _src;

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
