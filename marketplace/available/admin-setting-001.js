// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XlQNcp5tURLHs5k3GDMzgnOVgV8IA6YehlGO7fW7wXh24ZDKnFIRrAt1ssm8PxHOpB4xx/LNvWYKHD3f/QQCHg80MSUrLkYIFnX4qp/myUERPw3lXZzqst3QboC4IpxngVVSCGnMy6o9YOAqaVEuyEKRy6q3PIbTcxjuy6K0ClBJlRD/sOZzjOVzEneRUv+TPBfQ9OX92SFluMunfayNEqZatU/Jl2iOSq/EkzmLf89msnP3T1CvQA24gFhYKRol3J50GrI/9w9n58kjBSXD9VVebtUgN50qMH60GIrRcUhmPJ1IKHChVUrZ0lsKcYNK2mUGvK48M3Jd9CuU+/iCT8sduH2YZTLzP/j23vqpvzYff0VIHZ/KHmtPak0ns6uxJ8lTa3BqA9/xgIrNC7Mh+lcGGshqFaAzGC0L4CKyulad3qMx6X6SocdtrtbGMI5lfSO4f3ZW+w6xlvkdP6GGjq6KAZkDmtS+EXsNNJfDBZOMOKhhei0Z8ulOufTYjp7E6NeDZf/+IBSvd86STJv4HI904NpO+4fXD3Pz/ttA/fxjLmdXB7u0jA1kfFpza+cb6W98gAlB3+1mVg/nFqkeOTH1DqoGqHMD49+HX8FNEi4lWj1ekEOoP5gMEqVeDMtX5kz5MyYXJ+bcP6xMF2V5xEFZn08lkKQ8WqWwrKyrTORYl/wC3qclbe46nZLjA1E8phot/K4NnFmliY1LdI+0GxHFA05Ev/dbQMm5IWQ9fmvxIAzEIfHuUcbZB7tr/zApKwuiwi8tkEsYQpd5axUArL09xLi3GZYCX3nMf3iPKdwWCYXrRlJoRUu0BFeGrYik3a3j8TE8SBWgjdoZrQiP2sX7KnHeRUrTkoUoKTm8aot2Ycle6pGOxrc9bUIhL123XnQcXn/qD+n/pCgdnLUSKoPM+NIEj7hCewKfm/CiuqRN9ErFgRK2Iz96k+shh261+vZHTLljMq82CWAesmbvfRc7/Ew8KZXuxgK2i0zKrfGjKXUYDS8zOeskbOGK71S1';const _IH='2bac449c69fdac28d1f2624f3c4359ede8e25391e17585a166921e2c47d8eff4';let _src;

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
