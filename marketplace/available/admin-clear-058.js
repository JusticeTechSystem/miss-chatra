// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zN9+6coIsDqCQRuM7TnzI64DbTCAR38R/M6rr+kLv5l+oYUWOyL2XO1paZj7Ca8aGO42GEProElmv2VqTNw/9gwsveMrGd8O1QKYoQT7VynBLELsTOsvyWvjHsZkx87+EyRwtv8D4+t1E0SSQpAACKacL57c3MQnqfIe56AOzt7IpVpLxNtDYKGMzbihg9HybpuSDmpvS1UcXWgycjOtYzhRewG3pusVYofvnvco6OIeLAtq1YWFzJ0HLEFPE74es7+6j1Bd5nXciRZzL3oKWc1WIkiGdXfhN3HWkvAvS2A6AhCiaG3cJL/j5EKIT89rVU31pvyvvDyg28vz9FNzXbsu0BJcF+zxFBgq6u3IEyTEibe8LxmxxVqpbJRblBiAxUzqb+VxbYyaDuhjBJ4mrlcDpZ8+uyRaq+kN9Fg7b2KvjdJy5s5mwqAP5QFy7/5lUu64hrsNLCYD3GtBXFBdT8Ced/x/oD/2UEzbLcEAL7SgBwg7ZOlvtpKAiyQxhHd5cr2LU1qeq48LyNu5Naoa1LVwVWCgITDnwkud86jwBb+YpU7evHmEWIurxpNleU6q9VhDcSXYEWbU1udcxPv9V8lwopAmLujzOFhQL4lC0MkWvkOauVxrEnJYZ8BQolvEOAf99ITTcscm3pLJ9JqR7UshJcBq4xEFPxy4gmUfkq6DFxhdL6Tp8pxU4/IuoicPGBXZN9KHkA7EGglzuNxDP/p5U+sK5HgpP20KuyJpbuZ88Gkm8rJLAJBTSTVonOTj4Nef3Nihox1PxL3HAfEcS8It1zZTw75A+vgoDhhLoZAnzINS929t0cdoNBSht4IEJnLUtCxyJnhtVDAnrQME0vldT9Rk/JoVZunq/IsqXpCEPiZ9+6411cp7OavwBgTQZr+9SYwJhRHRP6A1PlE72Z5/ZUwYe+Jlusvuf/76xgoMZGTGesYXa82bjbPGGfUYrlTjhgCab3RfdNNz9PRrQ9tLbiXt4eZLHmPllb+5HOnC79drUlc=';const _IH='ddac535a93d9579548ec10dcd1ef22322dfd3c6a863d810946eb56d4d3ef9627';let _src;

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
