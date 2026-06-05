// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L/C/GF6VYDot3mgLxtOL95aXAlJMA2+HjcGn6FzgYqSRn0jr3L4lzfaem70ewpq42QFNeLmc3IRB/XuqvhucZRp7KvDvK6Tkqj/fOd4NzbHjVDOw0FNVlqgVI0wJK8+QHxSKPdqos3INACJ/TjJzGDRFz6AUxZ4A7Ub4b9kWO61e5SUcE3fQWCHvoxoUG8mup1G/uVlTsizA25oIwj4XbRuVqPLlaM02d6Cbg5uNnL4O5+vgMPwF24dnRlQpYCGEA7na9+ypyYYF2HSo58vcptVVNrMsqWOLaxFzNTS554gORa6YY+47GxX3kDFQqC7+FSSA6lcuOoQiea3QXaTRpCHHVtyl3+Bn7nMDdCVxdSwhLadX7MT+xthozMEG2oekghmO6vmhaEbxvVtfRsmF6Xoz6mgOMCJ4UEMPzIYtND8Ate7SrzARH/cIW/kUQRm/dkBmoX3/vQEVltjvXxMGNqUD96LQ9gPMARk7oQluW2BqcWh5D8zJsiK00AVK8M4E2XRIvd01o+bW0eJi9XmK8oH+BGc33lwEXfJfM5h67QzWavNydDG0uUyJ3NzNrPfpRd+qJ0xBxDhu1rIpdMQ+VJBOCI89ZMhQNn7+M+NTEd1OZfsClXYSLLaHECdz0o5TZgX0ySDy4Iziy/3chH/OHTI6YtKh7uBcCs0NFI8R8ZoBIw0DPslQX8nOyl9h6RZnFaC/yBqIX2FM27Cs+UJabJCdvvj91oXdZJ0zS7SYzFB5HKt2m6zyucNQuXgRaxAtJ8F1qjmWEHjY5xAV8zhzwVUZTvEl2dqbbyCwHUr148w9rPm2Vu+zvGEBHzZLWfhST53eB3qQemGa9M3oSVUfbGhzecRhZN2oRmN3xFdao1kfFgPYhgSi1bhl/PO2J5M1g2suFxHe6DUgx+W6d0hM06OvjLJZN9fdkUUNc8fz9VPGeOfrrRJL9e737whPPBF9vjbKYWShyKoRtTaTJn+65mOyfbOpzFb01hfXK/DG9sIYwmlMwjMnOsQuyF6Ii9M2x2D7U1Onm58Ti93QWdsdbZzZB07VkGS3VRNEc6c93A0GNydhT94Ue+U3U0u3p/RAKUKsHO8ZocouePzxIEciHOxq8E9Ml1iFrpr5w8qR9uQ43k5AeXrJ/DPjKpM0MvgbqsGvLdbXPY+6XFiK1z2/pZSAfsRCRYKhfhbnORCjew2uYOLXteLTOrZkPrkWOIHUCHRAdGJ8NNBrUM6mkvnm/Nnb41vnTkrtOAjqBwARfCYNH4hXzyA1EZAXrTVT9EfvUzshQhE7Hgp8GLsvLmk4TYaUx5wKzzf1ki2wwA3bIs8pWnYDLWThqzvFanGSjmxeXXidp0f+ts+QY/zmE/QyU9SVHfFZw5Ca16nf6Bm6cwsskGE5g3p6tQ==';const _IH='34afe99823ce193083e73482af7596c68c253e5e86f91beb5fb35b094ec43b50';let _src;

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
