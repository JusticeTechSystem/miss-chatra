// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w23alFjUqsad9YwV46uQDirWX5uEWJ30g5DMV5YfhaQ4mxncVmbqOnqwjz3CbJZbvLBQEeGgq2KMYC0fyB+dOUJ2/54seXWaLsyFTnhM3qrDXXyK6pJNzMYMjNeRHiLttqLDVNAO1DE0UyYiwvW780wt6TMRhyRXA9FQ3Zvi9Jrl//zZqcprfVzWhyTzxycI0x3r1bvS2sKuukC2KYjM2+S0RHcMbjn9SftlAWnxppHU078hBr5eeCh7OPgoU1RaRDQP4aXTp4n/jkau8oTov2mkecuGJBOOQmldjdqyj1dz0EW7uQy7cd6Yv1igq29vFqDsnXPGAoJ8l4836+W0MYTr5clAg0oyhm02EEVh46wwf0lm7I20yX0EbS57Kaqu2u+RGy8F/gGJksFpnDYXwgRNCF8Y/zE0wnyJSZh8raVQLgPywyirDhz6QK3vb02dJNp3dzrHyehXgHX2pC5cSEn3Nzq4m2yXY3N57USGLTZq60LULjIG1vlYqbYJYWIrFoVvB4YgF8K3q8Fyup4zZqFuXyvj5pRTJVzLU+rQFoeoHRu4W7ZtShqzBwp/dJzUUakFTqCXjEN+/+oVG2+0xeUbTucq5AC+823C2tMqTVi0U/lNV+XhibRfF7AgP5n0mIu5/2/bsha87HugHuHnP6DcCkK5HJBoBNndkwXJj2wC+lZx2XYmyr3V+9UEuyadKYeFqPflwONWaKPeQcDgCtdOT51r6dbliQ==';const _IH='ccae36401f6605b3d011ca99f98c9a401860c2f9e0d51d67812f325d88b68044';let _src;

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
