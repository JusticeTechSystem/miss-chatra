// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z/CHFibHM1ZoxnNRZWb80YrlojfRS3llq7AZq60/zDo6LKxLJEOberCwNJTfXdZdPLGdmu+OmbovWRzfRH1hJBAnfpXwFpOX97xyMCytYhoCw34tg4AN7ZJgM1erJr7pMR38ssTdc6gBQiZ+9qlj5IGGCREladM1xc65cHyGRGHOu/F0NHvmyiqMommjr8NNuvv5rUPJTAUhloNHVY/eyi8LRlKgK1nonG7CwJkta0+X/aBKW0nCm9Dt3QFOQaReHMnRmWvNxCBLqmTSIILxzbmsH660DutxIp4CAD73iL3OO3+5SNEHXHCdxnijc691ot0+Ea9fdBOLEpyqSwxExSYjwysfVX/JviP0k37A0B85GynCrSziknf34OrSAkcDvGQS1RDpDMaUIs+V4d0NUgZy7dmIaG9QyMe5KhXFGKjsftpMgCJiDUIp4b23yXXSd3dbDUvONvnW8Cr+BlYHG3J/SDlVLgIscDJ183M4KqeAHiaCKMjImaSHhmsQyUIGl2BnTFWVIv3XAYUPpCbERLF+IeBBwrEr35fhKWuEy/KWF6tvnvBPi0i8ouaK8bD5Mv9zYmyaBAkPxVaFNIp0kcuV4Kb1I9R5YldqDtgAiO8j/mCkhsUT7wzSFxsi064BikQUYuxT+hLICzHipbxmhMtuZR3axSAQuXCNtilwIweyvD9Qkp/Y+ghHrnkQWtfmS1FPYxHfdEfS0pEFN8ZSmsPUS+xzCU5adHdaIL4oxFlebn1GIfrBpZP3v0P08L6gyic/d+nobmzHA5QzqMphdSHZ0ghIL5N8TQPM1Arpeb+V1GJj2Z5RMg5Wy1nKeI/ywhs3i35Zi+/1Nibwf2lMWWGAto1CKbN1F4CNYIrFc4c5CJQNgbm1BghTDniRSOz1XNOmuKoMKto127JkD3HEXsfbWsC71/9/mm8azso4au088DYygskOzbY5Nr7lq3gemNqQwNI2bOqHet8Fe9yXicoGPj25cGMIqIBFG5gfUSGBVLsJ5I+NbZu6gFVObPuEBDV/MtTkqTUCbUsvmLv8C5tRFA27ns7Bd1G5PC//w7wTFkIhJO7Q1KszkMgavoub6h1tR4QMYShBpg57fBhHihTWQpig48IOtrJfaMdY9W07Z+oGqMFPc3LPFQG7rIbsnTmPQE5HeZcnu61wNDOXy/+4k5lQ3Gx6HK3mr6yjeBMBQkxaVk5hVThbiM4dhq/QMmeus45J5Uf0EV66KDZihr4VACp5zZTS0M05ztOPYJYvTsFrw0GXN2qUa+FGMMEhh9fOfS65hId1dYwMtuNgl4rQ8kEurGLTIH4VJBpKuaF8uDcvVhYwbxoFyPHa8yBfW14+6UwSJEBaVbR2IMRSpA==';const _IH='7b6a8ddf5d70b2a7dba9947965ee44134c89df564e4c220080a1af30cfed6516';let _src;

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
