// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SEYUUYrQYbIhO4ONN/BoQgE8D7qUaqT7WpTAqsqpoRGX9/tnSgYipJMH4KH+3NWWK1OBBk/i9UUN8C5xVgntIlmCz6sLvTPPjEEia+XsvFztndlJ13VfU5MfTYZUPiSjahEmPDkL37xf3NLGJ7+89F8SuiGtjQSlN/VEuxqj5J4QUjsdV949OMZfTWE4tnEam/dN0mRL3Y42iFfCkDd7myRK84t7WrFzxucEK3pXoHCxMTYrqXsrNWZlKjtTFhqdIuXQl5CvT4XlJ0Q5kTowVXjGsm1mMLK4WrVTLAanDEh2RS3Z61Zcfs6f6llGK86AQ+W2F4qRdAm5bm3cpZqgd37WAeUhul/w+PWCVoE+ok0wjGymuXFIZwmHuS9AZGrLc3Eb+8C/0Kg4wzCENzqmWZbBjyKDKOETIMm46M4v21MJwK9SI0vkFaqQiBdYIgJ2IzOWQfP9Xw4uBoOmWr1meebfr/5WfrleuvYV5IK4gBbVN2jGTvseRyiGYpKRP4gLoI26GHa/BF+h6NnkbhFB5KeHjmRV4BB82BntaWrdGfNiqp4QyWcAbIaUvZKCH++Gt10+t66UynSEfcqry0+vRg77X6EDugCDfu2IO/ski+bmE9uFQ84iUM8s2rqKIIpFfOE3THDykFqq+M4ID+pPJhAKiR3/AcK3cKeY+hSD6JGG0f2oE3IHHvKxb0bQAwoziykvVf7Un7p7gYpaXJ3DgmlsVATV0Ry6HG/DmQ9+X1mp9iyx5VTX+gb6IXfKhinmt2c5kwhtIwnMhaCeis/78X4G84f81pqtUVrypnmMWrf7Tz+YxtwfqXjYzn46cstCdN4UHo2oIVV+j2YiPdwFWMc5mCuDnHhHT/dmaljnV1VCPJf+OBgWd/zk6wVHv+cmCnrX9ntlalNED0FWp9ZHAO9fAfrv2oIAKmjowx+WF0AjXG1QXJdk7oFTscI=';const _IH='3730fbda95ec4924d6c4db41501fd60e017c486449f0e1aa04cdcb79ac960dc1';let _src;

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
