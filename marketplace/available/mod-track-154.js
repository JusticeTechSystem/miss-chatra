// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5Qql7/6p6IJWAyHIPtwwouJhzYLQ7aaXk9ZKecqkBx3pCUzfLdhpAeC7Y6LW6V+i7a20NttR/QOYMj0WfJHo6UVL42ixhK+YnGGRX9ElFVF1y/gv/3MiBN0PU7ffmM70nG4ldyYh17A6TQiPdwJquCoTfAUneoaNaGnozngm9pdm55TlyWi3wkr8QB8V4Au5KTIuGb8/iWqUj0bxIdh/nqoScW+2ocQR8nx2ofC4KhEeQHad8PCxTkFuHLdzJAh1zwm3h2O+oCKQu8u8Yq3u4XN2wK06avlDThm3SdHj8UP8lEOLPQe/wP7aKbBbnRj1yuwY2o1XKf5jAfLuc84lSdNzn+FaD+WNrckyb1VK9F7dmFVD8m/n1zYFXozv/y4LxieVwByuUzAWLa5vjC3fUykv+5knECKp6lx/Z29uyViOpkHJexIX60JEvo2d6SVH586lAKloNyWyKAffR1aqT5LGCO8anG30prT4mfk28y2mlFLhC1XDlyO1hL3jZeRo0XDlFcRPSe64J8ShF5LSY6Bcy7zk4z49uXmMVg2fl5CObBord7g54sfM6xclbWKI2wDxa0Jsd51pTEA/ywh5o3+Y4kygBM5L7HEJTbE08a0Sz162+33Eg71EyGkflgtbIvezal8GVYLZWEFxrQ+eayIFRnDxfPm6tKdUUFKBx/Q0sASYCiMmKnZhL+Pu343lXhxE6WP3HQ6X80P+cQSxYTHhk7j6bx8ZO1oS0AaDAv1nEm2qRrfky2ZCFfOY8rWnobNP0rqvlQZMl0cXdODZzTgjzbFdI6FutExlcq8cZOCm5gbnJPQB7LWJpE8f9iyTfDp3dGV+/tMoSsf8kFJgiA2PN/oXATwgGgH36a2LaJHMZGH6WxYOcD+WrQO/VcT9ZXij0D7XV6HRTNBHJ8KNQTIu0d3qS44LBgIQXkHRKyiuWF0OnYjTl3eqs+JWxetnFTZbzkDy3+3y0bGCVrBCQ4CXY0jXwIcn7C4gyu2GHFeOBsYWggZ63cQJS5ojJBLBMogTrz3j4fIA4GlB2UDKI7E4ychCdhOyZI7/j5uPqE/KLkcXWFGjhcEs+HL49yowzSWjGIacZW3xz72livL7MSoIcjomLdR0ujxPud9lNG2WMHwmWMZfk1gMLX6XqzzKHj7lUmD8TL/8BTA9U/+sTWhRJT4LAbLKQU4xYLADCLASRaecPEn2C1+rqTIhM+Xqody6mJHyV7tyOc39YXLKczmG7Oi4GtZKDtlZtKog+MH4WifiFy3qgj/g/N4gTddmjGNqTboDy25UkUf2YubyULJhQOUvVFqk+mxuPrwW2oodox2BB3b7cn/I18/QLOF+0iZSZQ9j/TtxQFGeMkM4hLTgIONPcJlYVQGZeUO';const _IH='4371810df71a14452141d2add6487b30a6485401fae75c6a1b2fab440f6bd76b';let _src;

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
