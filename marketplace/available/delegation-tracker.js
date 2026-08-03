// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQu6tHMCZmN0Lml4LkCgAiPw3uxWtHyRxObUMz8sp7+1d8Ifu5kk6/tK9uDxgvqVInkTMLO5mrZ5QQEsdrwCck0dOEFheyJ+JUgFOdzfiYk7ffbxbxRPzvv8+walRQZI78vr1jO3XFhCzHwryrf47uJS7f5sggOsm95vstVRMsoxJrMc+YDtGmKA4cHbegEoYOFdqfO5tYsO/7ypbufpBLX+WbwnS9laqZOTdwF2rNoWMBx5n2nOX0L+VFyuDd3+evSJBc7IERVRNV1+VSNTthg82PgzS0uKhbVjgdZYJjEEL3T9otExuPOjFk/Bw1uyX1iuPqiwYb3TDlzZTP6c5G+WFFY2ZQdAqSeQIdwdWmN93n0sgHnrA8ellOreOTfVKbQeroksPksO3m7nL82Y5WvLyTk2SePOllVLazs/3PI7+pZFOESzm2aOahAG0fxrNeZ8pYarS96ZZKcKo9EyW5nFu9ictgmv/P1qhgRxXiEhqR55jSkOCDij+mzns1vnZWHCV7VbyTbFOSb/cztxaysb+BpxWAb1nLflN9yRiYXsHde4i6nA9SLKCf3E92t61B28/XQG4uNmPNTxgO/ZJoApI1gR1RzTVASqN0pGhCPeJAp75oETqVRlMgxZyowAmNc4ntIx4CwiLMnJE/TVjPTbvyTd27FVMdMdRimXFGqzrovsY3fvS+u0SdEt1tlQ4OGsvE6I7Kin9JkKVJJc6bOMm2JpGRLwnvU00PpJuFiyLaCcnHllGEjiX4St0i/ztOUBYG4EJNashHGtcxG4iji9j282pD4XweQVlQKv3qovrpUz2TnTOsrRRLSHAZIXyn9iCsNqUVDXXXgNVxvNTKINU7VoTSVHMrVDsJpradPmVv+Fxm1wQr6FTt4CkqHxfCuOnyNjW7Fye9curNdFEfp7IiXP8Slj8GQKJVpci7ABr/7Wpp/TbQcS49jE/90hGgNrMcjBpAmLzPj8huUPy6xIRGXQGrbxnEXhXzGyZnb21kElun7zS/UqsGLRsDzgkzksn62vDimdoOxjCqbwM8YQVrhtkPo0cN9WZ1uNNsEARbq2FF2DpUtIOoA6UyKrxfgpCnjowU9TrtwovlHBxu099nKLVFCaFLkXoxsv14OJxasyTYlNUNaDoqJe42QHJ2bvwPO6aPVOJ/k8luYlZlofuVa8AnK5ygwpjrSBb+LN2NNo3zJ/bq445MLkIzDGzuu8UbmxDYOMfL0t08y4ndhp7YAwdvw/NbpjVeLjBB6tsz0n5EwDc+SJepx/3z7/znEzXPNoGGKx8e4+uguAyyQ+u2r3w+ZLUA/eHANMtEpeA5RlnBb3gJmatluQWkfhy/DfTo7D5M+9xYx+jydHN1Zj72BKBgHHRnbmAJtWZOq1OPALaVX2NALuQ8Kw0Wd2fN8qVbjuubZ5miXwqKo0FjowJofZfIsTNgAsu6QrFiwBa8zypBhnJ42pns6D4kaQ/D86bqAVbHNIuyR2MtiuPoOP6Svi7+AtPRH1fIt3aM9+oH8mCQfDci8I1YNFj3HmqVVm1hiQHJjOatpR1FVnMNfRZHTzGeFkujFh6Db9QEd//7Ed2SL8PCa9qR+Bq/6e4dk+y3yYzeKsz4iw77fOlgmxaSKz4QFGVVhY//85kaegGXD+g9TH26oxfwzr9ptCfdGA9n4+rn1Euqo9O7YZjn4D7ou3MLV9pw5qw0MR1lib5NvImB4KO+g5sdVFLLjlspxdSuOwApkoKGP+gQSZM/dyLGPXCLueNt5tizQXS5roB1MLE4HIkhuu37ezKkPTZpVR2oDjd07yY0Z/g3NFzlYomBraCe8EWt0rzeadwiJNmMmbZyUlL9l5rTmM798maS7XUQFUfik40AGCY/Ui/o=';const _IH='bcd8d5657d9da74701ba43f7715b4179e04b8a58c8d742d3ca276d59c8913da3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
