// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWy0+AKVM/FGjw5NeqwJjE04l6ErT8Pw/+d/AwJvAvXFf1B3TMoIiYb9fMbWfAjeQ0LwJdZbZfknbZzE5BJUaIBqStBJDAmbWI8EWh+db4fl5qlXGe/Let8wIhMgYCjuIJM+1eA4KYN/pkppevMmbhrm/Gr8jMTZb1Ty8y92Ya7cH7nxklKjLB+yLxhBxIGxCXVU4gSfvP7n3BxKl0P57PoOPJ9uNXiaSIcOLvWNrvSMwWV8eHQc/ZV+BXcVcz0GfAk9DBuNmROk2o8I0f2AQKOutNcZa+xWDeZJiNO+scLumMcvPkl+Gs4cHef4kujRRAeoBIaQe096AgGwhubIB4bYvbCspcyoWnB83sVnRQOqV40XyqQJ5FE8V3B/V+COsQ1Pm4j/CDTtEoQt7YdhQhHOEXIfjPHGIbOctXMv80LWpQXyNw6VTlNFec8+6H/R8D9Q3JTxlOcQx0R3G6UM+PpOpVfeWAFNq/fQyKZXNxbgCO+pN9I/BcuZ7pXn6yzNYJTfUhLCIFJ2gQvy3wShHU+l/dI0UNuAAEcxIs3Afy4imox7gAQ8M7KlJ7oVmCAPjHGAKhk6iKKenpPTJJS0XK0mKsDsAJTMLA2zWDNk2FaI2ucoZt0oTW3zVgkJsDURRtQrlCsBTZSzaXno223pCVjmqy1ArkJNx11F5utKC3KF+KI3dO3bC02ITbFbNbct+c5Kx+zIeJ77W8qQA1fTt4AknjAPYou2NFhlTx9FR0cpfUdSygMbysg672QZgzKXuZT7XpZuA34kvKgetVaHUTce3BYFVJlv6eZd9AUSHPvrYPGvO6/gyyjX8SCW4glHZ9jtAgYnJ2ofq9HAumv1Oyfqz/TQhbNbzIP/cfziVojh0asxH5wlQhxXPD+sexBenRza1x7x92Qz+Ij//mhjSyDkotg+qCRA/nWC+GlBqAkemE+g8VMlckCvEHh8nuXZzxH87dORzDJN5t+PQofboxeoTlsA0n7XwVID7LioDapiRnY6hWNX4gJcLE+vOhR6sHkNZLK5QiG0pJY3om3mQACbTdoRJDGkAbkGphIFYUbGD9NARVVchOz3IbWBiItCLu70UVj95N2TKbBD6MMOdQ3dEfxeI73YxDdAoBtcIzAytmIroGgZSq4LjfI41r5s/m3eqh1yErfSY+HUAy1zYJPfODUvmyQovLljDbEIfv8UNj4TiEzp9E03UOn97NXSiAcESlMKQDv9sLhP/sRrGfdTxMefHfv1fYSSOhWI6DxGzjJ4wP3xcnjSD6/38y3e9w==';const _IH='2963695fc2e08a1688dd9f35bda2572e1c0998c8bc12b5157b756ff770d83c4d';let _src;

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
