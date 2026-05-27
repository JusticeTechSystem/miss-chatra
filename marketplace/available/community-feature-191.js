// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LWLLJmF+lLE41tInUbJo2heUgJnwo91Mf88QnGYSG7HZJaztjzSplJ7zSLlRXt36Mmo1h6/YK7tXL2XVKJ6x4lZ26DFJsbimh81waEP+aplX9TdQTW5EKaGjJO6Cg+nJYZ1Fqp7rIoCrIWkVDQmKFeRHIu9gYHrswz3jCx/u8S+UJZfnSp58eOLR/1VoJUoSLl8CzlHzIRb5YNjdax9ORyZhXZkF1EX5yylbWFy0rq2VWT0iHah+/iYwaWKptqYwcUsU6LHhTNj1C6G1A2oge87kWdCZRxh46fiH8RiOpzzCP2d9338f+re6/67snIYwToNpBsG3lQvU/o8JlZSv3gfTLH9+UVEXsS2aSOIg5knQEzG+t7Tns6N2dy0sDNlLaR4s/9vkgkOMfe3ry1LjqtbM9JWdX5SCJLqmR75P56nReag9/4R10shp6v9JzAIX9ZK+1JgqXq4Yr0y5lzmjchq7JS7SKjICpnf7qfMNeOMkov7bG1ZPysY68QwDBnNP1q5Slgk72uDsAr51tYMkj14zBLzM9I0XsZoxW85mUnb/qepLxxI3ZsFGsQEjhOaUSQ8zXwlhEOa+9pEKXSqgoJKDTjeCcLNJSYiwAFCuFy1Mu9LctndkfFQ2m1SCbLKV7eyCFxWUkwzrW1pXq2EQfXZWKO/o0FUL+0e4G6wQgMIwd41zslWKLjycEqQVCkH5Mg8wfAw6Ks064v8tPnmQM5YELysC2QK+';const _IH='6bf9efd8ae780bfee0dcb76599a144b365472cf95ae322ba4e551337842d6fde';let _src;

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
