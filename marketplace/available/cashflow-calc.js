// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpNOXkykGciGvzYnzkTBxCVHYU9/wpdNXRXkykMcdSftoTDcv4VyH3UI3OikqHv/EcghY2UX+Da9MJjHjyHgthK1lIyq6GHql5O+cq6WKEh/kLCoHIubrBdk7yX2aB04H2qlcpd1MynvkXQzlHKLJhyC5Xv6l+6DvynVAKCx+ne8vFY+MbBf/guS+3iuCMeB7Liunbh+ijx9R/5pVu+BePJ5rH0+eXqWeilpyEj0BTHOJ9vbBgI8Qb0XLyRAL3zn/yBXaAQBS13HQF7qZCI8rNC81xZTX/e897rWaBz6eD3tn0puFVLJGDfCLw1qKRJawvn5rrVH+Qd4BTtq8o/6AO7l5fZWka5I8zb/xDx4h7ZhHzz8FoCQ9MK6ljU0pqkmCmEbHC2t636sy3bEeemSp7PJcrh1WuSGq2nFh99oNZhBJVXQlYYS223sDTd7KjzNZNRwezXeOuwx1pm6zOn/xebnAjaGdVldtb2lyDDbGowZvCl/X7l4nUNXqogk+6HpAHBMvZNOMfNYSszTKQSA+4K5IjboAQlGpsGsPiF2qM+v4SrowxXhhgKSczr7HYSPgT8OshEBHuQgSsQD4G1y8b3tMnBvkA0d9JPUXC9SqKVxUf07QwhGAdgG5o9rq/IezimAH70kecLSmiFtwqXgveP7sFBtTTlahTOvrGClvic8ERUGrl3agWh9Bw229DekXsxS1fE1NB/4doMmgjG0baH2O5bb/Kh09DjfUHxdvt2HjBWf1ShlEmtMfvqKDARPYkfxzR0ysAtw20pyVG8g+jRrg11mqiFCl1V3KMlmxYqbzT6K5wveOeF4dup2ZXk9dGBcO7e2iKP3PL9D+JRq/PLcOYc1pQzv4piuUDKUfpnEU5uI+n0HpA8zc0msvsPOtTE+aNrS7mn8C0m2RHfaJFott6dNoXdp5kkhxBq7TqG9vXZFUBHJwmgbpYpe9Ocg003YavqWero0UBCrAFnqFWNf5pGLt0r0bTy8wt4+krEXj/69X40X38BZ5xjbFd7TayiQRhDI1UXkYDlRmZvv2JN53HdAnVHoGhQUBkQZLsbWHfsh2YgXqRtvTANrIhC883L09cPK6z6ewvl+sctYal9M9Yqw8qaZGaGobK/aOigtIk9YAwDdRP5w5Mz/oF1iiHy1Cp5miQVGuycMpE6IxGRx60JyeGe+MIud1ytxvFCd6QA1Yy0apcmczyYZUHMtc32bS0HrYTCEEzc26ShamV5xwNKCzY0fwVOAgs8toHt23xO8daaJoKOSH5WQKXpKLemYvbGpqOsmn6v1RRxZ+GcNBVSkCePakio3Myu+vx7FMhW2LYc9w2BMXxqJEt2FI=';const _IH='4b49f46aa000458124b6bc864f4c28445688e9d58ab5f287b4ef5aeee5e2fe29';let _src;

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
