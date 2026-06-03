// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nHetIZxtb2TiUKf5cgMjDyh8qh7RYMVgkyU3Xn8JnX1rVUN20d2Gp564DboYxzZJb3TBxxl+/3TQd0dgIy5NxrOJ3kwxWuEtw13d3VU7qT0/8A79ZLGEkAE4JoNM1x9+80k1VZiOxePgciKmMn4JJMX8KkChvArnnj/7iDrAyRy/9z92o45cFgT63wMVaYUqqwW0b9/z/tGbbUxYZNHBSjmIgleLZeL9q++gKxkUhoDCl+lRBGXdUtgMw7FT/6AlR+vmSivePQEx+hA46A1X2rzpcNK3O9icooe9Cfq2+RZ6nWOYGfnEgTlrrZ5vgU3APm9+PD5fxJUj5qCOKgkQBQhO/KT/U8z4mBhLrT1fRc78tGWoSHnq+Ay0204ulVKQ462AUZqR9BoN2triGcrLC2NpMRZMA9jbLCNWQSiPhkm0lS3rcSYH3KaUb/LgwPEMMpuvtdCJQuxSgMEWHZJiyvi+BxQGGxzH/RWi+VyfIdBBds9id2z90tySTGMNehF3NZGpQZJ0Pmd3NB1rr97G19fX9SYgSkYLclof3E4MrMioF94I3zPCNvwWh3hxZZP9fLc+jM8bdIT1/chrbx/YHXXarEfrFtbgYch+TQ3ZrengSpm0BUYxWhrXZctm6yzCv5+cHWhszp0e7OmhyJa3Htj8BH5nZRzm6BMipISXeWYicLTlScsaUGiC+CaSVp1+O0DhU+1wkPTnSOSo0eaE7tNJ7KpOj4heWQ33Po12VSvgRw4afJE0e2RaA+mT3lvB9480EdUFLOSxIYb6NvIhlwH+HAnd1RE0lSd4aHWrlnYxPlB5jM9A6BKUhUjGW2kiU6n1l0gdOpfBhWoSWPKfwdl72yLabtcmDh1so7JOUlmmrYyNuYKRInfOGLoeXfsMViYZjoZWUIo2zx5JzbW6l1gb1kes5qzmnxYjtIbINxRA+u8gwrxaZ64Zc1TIGc1wSv/ye1xNgijkw+DeA/l3dGNOsSR3mXOGfx93dQ/cmjVZSCZ3O5yl/TsvTOlVN6irvSgZd0L89C6GoG8aPaTJ67XpHFM4qm+IG5hG5G0OaQ0R5iC/Nt2C74+sX+kqeQ7Cd2yl51wAF5+SYTpx+1VEQ7HwdQV1gW2P0jlcB/xhwPZZovqIgqy1bMf+rtIovl7Jx/IKbj0SjzY0Zo54PUZlRYrKTBmo1uU69CBZi5OZSGff4tN4xs6zRI85msAzc9jW2Ql5lBI8NnyfIdDS49F1LJBwSDIbMurTEm5/A1+l1jOrR1bdULBOdquMDjhISTdcpqQkB5h/7e/66BgGSRori37/MfNsj0aYbwndfvPYKIq+R+C376stK4j9e7JiyhskzmilBqf9idhH1cfscJRFOhkPpLrDJc6DHduUY3JTa7UuCdo=';const _IH='d98055264f39c3df380a7a0eaac1e685011ec98c40719588a865c172ce699cfa';let _src;

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
