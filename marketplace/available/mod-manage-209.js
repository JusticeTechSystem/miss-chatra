// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7n/3OuxVzPpfOQNNqRfwPxBk8SECZg1Xb0oBFtnOnpk5++74IdM3ARpdcMsrkbsBhAjpc7074x83ugtPFVHK7LZsxteD+H6zal7rCOcQcAANbzrVXZR83wWIsQNSzumqBZqfr3vEb8GsfhsyYxFdCwAt6vgXdCQcLPUNJvcqIiOq8R7KeXQAktRpoN/0gXu0hg3NCM2FJfpoZgIzALALei6Yr895wuePUVZSZkwsYaSpPq3jOBfJOSiz9BIPn0pPXLTXPUliNryixQWqNEJQWOKJ73dDSCmBcaz6EergoCbR/61/coXULL8pf9Ujkf9G+fuoOo1EJOW8vlTqpRfvHLpctHp6jZ2s46ysT7FJAJMlJwAGnXilr2T3wNCM7+//WR+7emuxkDH2PakmCeCskIFHWuJ6SMxH5RzuNZFdMLVJGY1IXGuVx8CJqfiqOv4zB8rAjPitjsEOOmkZuU/uaY0yWa5+hSK3jyQfJnNId3eVoe5R2Q2Tb8UpBRpMnYcQSfMiirbCxuyPxm+Xnz2frJr7AKL3H+KmKuG4kINOqmYVkdOwWvC3PSQyG3+2eN1QB+MVmhrxBLCHHwV2pOMJWlsG+FwZFZMH/DLccFQuNZQS6tyXdRbA+h2AlUSKW5JIhZjYU41y4hHIVvJkrjjcI5MaBP/m4ndarY+I8PzxM14zeBUquPyhMGNqSNSfzqEM4P6aRnN/35oU6/ckZC7WXrMRkQg64I1PYzVdMZ3MOfwJ8kHiJ5oNxjZ7wzFgtsANRhca3tmHXInN6QfUmJrGII7T80+prpTeBY8V8gNeLpq8Flp9v/a1pSi+649orkDJmOt12JtQb+E0xuR6T2G0k1cBJFFU06zJZVuOufwvOCaJJY1Ma+cVJ2jNWH0kP4nlA2MSqnlM7UAoUcqWcsmpwk4wckJ3emJkaG0yL8h/aEFqYYquo5LpBB1THBR3h6C6bjIE0EFb9xQo6jblGKjI1HvEtQDMLFbzUjs2LoXG0mJGBz4WQxf+OZwaws0EPl/If4JrHZpqC1o3kC+BnbJbQQs3rlcwmTI0RynOqS04qihVnVnLehsPH6pkqcnsmlMwG6EcrODTD7gXG/bCCmmGCgKvD/NorPDvUY2f+mZwzuOmqHLcCDO818VkYrVQr9PIjGI4ILCI4v/qHDMYQkC2ZmORxxUyshG6upeHdphlN7gQv8+eM2iFBmcGXatNihnMLCLr5mjVrGY/WOy3InGF9PEirVpgNMmADu8QztS0HyBD9r/V4ro+r/mii6RPZ0PEw/MGsIiRLKsnf6uiU8VVKAhJ/+KphWhhggAB/vAGiOkltPrHxEAqQzajORFAFbvv4G5TgScPvnby+92sGmYqMWAVH/dN1SBWA+JeA7r7hVK2swzhTTm4Rg==';const _IH='2d303184d0d7ad06e66a271fe62d92ac623e16372dfab160c0d01b5419a07b3b';let _src;

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
