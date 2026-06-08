// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G+K36Y6L4eLSiqsF10eop7ZIL2xaCNUg7mBgZf5Pkbx1RnlU9DNKEvL9phgSJuLDOpqR8kNkhYLNqb7XbPk+whI8cwNhyr5rgX36RGzBh+EyFno+hjwQ3EW9iACV4I3KznSoVrFaNeYDbuKl0pNK5OIn6K27anr/CbmHwbzby+6k22coZWLryiw94xuNHeUw4rXone8OTbVi8jvNhm78uQTWZVIptzJxxk/MVDB/388/rw6An/zXGdRndouJOaQsS4d4nYWPKtYFt59QjUR0zZKLUwEzO+8PGGRXoKrGJMnLrchxpBjYh7/66B/LT0yQf/p5SSnqO+id0++j5SXZFH1anT4iFR0JLuNQLN5Z4Me4VxONRuj0z2C6Ahq115miTBoNmM4eT3RHazXzRrCARoiebjgVpF8alx4e2vkTTdAhC3k+ukbt3zdnXCFpGT+4ZxestEKGqM4OX8AuCeZvXrI7a2cleHmHnFMAgOLy06ar7iu2bmSL8Qspf/RUlbdboZBCb3AoTTMcowQzaT9/UV/1NtFRTGzQyp/QTvsVdmq4e/zzBXiINQDwOzJGEz3Va8WLveLnpJrfEvKdEUjw0g4uNGvOucYuSaEix2VAhiU6zXvJ5HvhKZfZh2J0fVrcEBPXqe0QX2774QlHKpC/0dQqL1yHlUxcW2TGwEIH0f2FHurrl1CqZ28S9V3o4gWM6VnDLZjKq9skEWL8bl0hMKewDte2ynj2N5yA0oioPz0Fi08r4rctF5tfvvBricYhjfCFg2Hr1nV26TB8JWbrvWvhcsDqdF69Obz8s+QyJ/2yFh8AgDI8jSBENWiDHUSnuFVKBVJa71FMC+W2Z8hqThBLAbjcZN0ZnU9+7a9RGhnSon3BK76hYoS6H4ZCMAKhSTXrawLp4fvNQJU3F8N/cJbpR0Zs67QjXbQBTcFv9Dke5Epdo48tiaQ3eT9xFcysLToLEJSXKvWNg1FSjAXqLsA7i/fHn2w7W7EYN7zUMB30LWJGVA0o1uwRlddVAUHMd5la16FL/Nt9Heyl0cgKNXHjWUh0UzKxTYsluYFXwIpYt6VU77DWqek2EpMNiT1mOqjQGdv1gBwx1UOmoMu0kHNE9icwPwxpNLG2Q2/jhvF7ioKXzPU9G6HOUqLioxOygRqNa0RLkh9IlAqEBREiA52mxjsxER3mt6ls+En7IIiMt55G8p7belP0clacoy1l6RQflOwoZEotJGgtPGHVgjPhy2jxQtfhL9lP3L1ho1tajn3WPnlHQ3xGh3fj54vxUukY38HsCAdspBM2/u1GaVWMEl8Q6zKR9/j/vfzyyJB65xBpaXU7rFVHHGvtfA5YbpjtrxTOAoZ55OMNfiUubeH20evM/9ILrRo7pS23zajZrrTWKntWMPhcI1XSzGSLnJBbWx0rqQ==';const _IH='bcdfe35f749448c6c98f4dff36a62375c1d4147b9529b116eaaf8032eac089c0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
