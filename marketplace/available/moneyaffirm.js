// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cp62KWJF51ou65jQZMfhf5MgHvn6yp5riDqrXk9M+gXPzuBpnw+h3dLWN8k4m3mbYfTKghWFNwxi/WP6hTD32GqMWwtzgTYviy6vgRe8HRa/+CnTNODf+x2DkQg1rE5pi/zGro9m45HvGUWYo1JW2PQu37KcZa3BN1rjoP+g+p39BliOij0dySIsj+XhzNx6cVfn2wGvwaKkVCywr1F+sUhjqWGxkzZlr4jn83/WjQas6WjCnVQsCyimGb/uXpy3/E1teD6EhsJvMuAHDD/CMNQMMgA1u1lAtQA4TnqYon5pdOykCqCLwlK8GjijQsh64IYSGeZnZUk0N1jWQM1yKzEmZN88ptem5oC0vqLdsKbcYHyry6NjnjeNd/uU+g65LbgoCbzySZWqU8y7EFw0ppqg0s2wHzA6o1gJPpKy5pVhvZzUj2WP58ytlikIW4CC9s/J7dibZ8IMvTDO8HW5rANkOy6kEHa/AwCrRJMsiELC9zjr32n6vmPCje7BCZueNfy8D3Q8mAKIqxxJ1Ob9gtV7IpS1h/BQqGch2N7vE+RRYzZ6Yjf7UbOKqwYzz8qeBWmXCljdxpYbErRIKMfoXgv/HdpiZTfrf7mKDyoCUKEiJ0c2XiX9716LxJaC7BbvtFECARAnsLTnyMXyD6quGXJiQn32oqFWdpwfbeNQ75kZJr6uySmnFkpNsSxl+H4XrDscDck03qgodP5qAyWTyy0HAiESGi7h2tvw+QTHH3IcnUJL0QGtqFKhIA04XvvFbe9bGBDghtR+1W79KP/Wn8zZiHjAk/LXwr+BoXMae5H59Mq3beHXuRU6e+ORo9o97aiI+uvgDVawEQweC8hrflckyjB7SNldG///CaZZRlMSE1Y5fjlDg8dX94/SM04S3EOAP5as71PbdGMF5iM69ebennOghGN/C06KR1fNPktBEFe0tfsp64JUlo0OymnMeTN6wqKAKAA6jXNU8q9LQ10grnhPeECNSKzkk2rMzAgjwLI2sh0BsahiEvc0PHNku6r+Nu7OecZ3o/z/3D6kmm23KoDoy7uCO8Bsp0GpxvOUDZoexRB0y4gYx3ULlxeu9NqYaeoLNGiUtmRlSG98ojAxj4GKAm31D3H4+41DtJQeRkAPpMprIMGp5XnIQlGXXKhXz3X6SsXb6Dj3UiwQq4vcAB2hVT7h2oBkG8ix35q/uyY4qeBeBeh5pTVloDRdBee6kpoJRUaMvp9uaQ==';const _IH='aa96e861c0933ddf17081da2bac71aed9282121b7d5314e2f1f9c309e4212bb9';let _src;

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
