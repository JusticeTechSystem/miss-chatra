// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tpc/8ClDR5EMKJk9tQwiwz924i4wzCnnXX9lTDltmjym2mxMth1dUA2pm3SmP/oV6WpT3ZpDVVZlBoWSNxJM1sJR65wWjjAB7sdWJnmLg3qYUbVXuZWqTP0tOAh1cwUeBSEfcWmS8r/QcF0itJE3/BQHhVHW0rNCWNmEmqf2CcnruTFsI2+juBk/05rddkHl7KHCGY+uNjRSn0gyrNK9EAwjz/1iwx5qFUf+RQ/K31TTdTdcATk2B+PInh5EKpSp+ZYdUnKTLYVVglrTlzcTCiidOnKOnVqcNAaS/Xh+iDbIzjsprty0Ow5EwwIqltkUsGvCMJk3FQb+EntDWorQqEJYDgdHUOBll5kaRgpltUeLTp8tB2TT71VGr7N+JTAKyyRmxLR19tXgFFrx0R+5cwrsonh64VULoTO9KIpwsaKXjJ1JwL+hgWAs38pC35MKd9GX0U+gnjvnxY861iUkU8BjfnzLPR7e3O3UkWpt1foYRNtMnEp2J522mW/3YAyzPvZ27MMhzobEG4XNBbczUgV+C+qeUaPPpNvGfo5At+RB150iWmCHEfWNvoVoWIvOolxGZ9JkRyBfBRBiAhsaCFXOW9AVh87nRqPopurX2jB0pFQc50jazpQcIm6P/eWIKz+WxKEgDNhDZQmGeRZ66/1vlG+dSqaiL1LpktFhOQA4jC6QQ6RLlIiUuLaW9sT0GIj5TvYsNo3s7UCKs6nRhJhFJ4gIClDoAk7zr0ARmwOUjEf6Y+O52yaUZ+HOjMzj0fbP1MDlVc8sBCnffw+7Et6JDpg+tZ+kKVVRBF3lTvscZUScU4LVs1/D9p9NzwvdvsKGlU6XPNS1c7YveC/cIEF7lAaD5HlFZxVCCso7oiNV+pAIAn8Th3LbM56tP0NlO41gWRXri/aPXWmKveTZjMqCr/7EVcunHe6Ag9d3ILkGLGUuSmXyhqjjHxnRlWUSmpEoQqdN7oBebROjsrH2dj7JbPfe73pn4wPEeOHcTyJtNDNm+p67mbfMqfeH4gCBHqT7hhnHyn22kynOyFKZlsI/Bx331Y1g2foL7r6ulUVCiqV6zC/MXS1hN5t2jjoBfbWZJGGaDnlvXXX5CjvpiLp8rgDG6z4X9Y4LboBX3T+2kPg6nozzdcwG43kMz6YNOvT/4lcuY+A/QrJfyLwLsc7Vi0YUHBZhRRhYiuMfkSkzHgifv5eEAMTK5oFAhdz8qjN2BcY7NY7+/sBoaL7E6Sc10puvB6fO4OCRYEqwJWgGZMdo7TNcXnZEjj9uDFGzdlu5/R/eQzlM2GcspYejzV5wfVgIro0iZhXcKcPONlYIcL9DfWRBQNAGo5/fncRorbkB7d1tderZHFIJIHMzvvPjDly3xfsOyw==';const _IH='4fae69a50679044ebc5911b038a6cd44f2c67d62d96581c0f0f047dcbbc057d6';let _src;

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
