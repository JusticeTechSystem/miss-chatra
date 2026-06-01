// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxWsBEMNQ4obXeIT8IBoJnRxQp1vZAO4vdo5ZYkPC/YDdF7yfBU8md5a6QdIWawzxTR+zEPWs879leZHOiO5W+gJ77F/sOTr9MoSB9ZmkN23hX5LAB9xTkav3IVRhfvV/73t8q3c1NQaYJTMd+8vb1sd1fZC3yO8DvG0ykjtqpRs/3ZD5gVmIw2kXaWPX1JwCqhJ79S60Fh5OqPkjo867jy94jagC/5+em1FAJvrcXDywv6DOv/sYdpxZwwqrFEazErl6YTK0z9D6IPF6LMeKP+2Pz9a+ypsDS6M4iroXxzgXAd6b89m86KaPrPJdNbKYd1IIwuHDF23voOqZ2cDPWpPj2E0sZ+wAD5TAHxJq+oAJz43QAZTHv7f29X8T7ZQpma0srqSK1wjZ0zgT8A9T3Zz3LdWdCZ16jNBi+54rW9cUedIi37DwncQR8i0qkXfoRT015vmb4cdIxCAGIAKdZEeVqhAzhHIUH/DpzjGGHzR75+16FYiLpvbTPD30IqQFUBRszVCpyHft0CgSCr8ZWVyVjpan3pix5U8a/kWpB3xcBQED6KVlcDd6em+Di3gplPH6fpeZFckYUHcxpyEmhMwM/XnK/GVD+t9R98fKEa263+FFvc5D23TCTKLo3jmP/3ZiavYcjUb4yP43eGY2rPtu6KhTy1/q8QEiaW1ZNspLJ7sBvNyTAL8KWukQzyoqXXUds6kE0nwD3XR+J6+jU9rQNnVCWqN57pGlDtxh6uAj7Bj79lAedUSoduwRUkmGPQ+xEnsz1T4WYlIsn+5Hl+pUY36ZvXWCwl96l3CApujYeB/UunZBYT84svQt0MP0h9PwbvOaBOaLwEV7uWuH6oX2JJHb2Iau6fIgT3VhmseVxWson/0zYulAO15+2r3vVhTVhdgQXOnmQlEw8I7XNE1gvOAB5bjcRCXJwZg9Vai5DKAm0D6Wewb5z09Vc/hTzVFF5jF8JtbIXuHd2nxgQc6kq/SsvJzvVA0FCGmCuk4NWQr/hZfW3zo0IycEYlxWyFeYSJ/elB2Aqfzh2Nu28RiOXFMBOJeNsIReGX4FmLBdkln2YS4CJLsCYlXeh6edQAWyso5h4U2F4weoB9yIj9Mk+khn4IocmHvttlrCppUFfeJmBx6u7JN3xXIkhxwOpwk60doPT9nyNtc63W1go0Ot9V9YRjmjQCTL/MEqTaOpgUZmFXlZ2E5k85EEJ/AkUI681zSZdoe35lkMmHMC9GI2t8xo1N+Yi/bQF1iV4aouHNHUuaoRYerk7dTxc8fdE57+MhC5cm3wv8EM0DNqAxgB+ugrBmKyf4aXXTRwULT1wtdFrIph+Vq4elBb/SydRn/zWVE+Mj819yJ3ox5mhKcwaSVyRhD5UUIDZbzqyw7lbEhb+9BbAA=';const _IH='58ea252fa57221c69ad5fb678f01ca783e8f24d025830b8ee4b0e85f2da3825c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
