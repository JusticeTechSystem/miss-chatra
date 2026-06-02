// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qNDH0tK3razCLI/d7nXQYuzhEQ6g3Y16n8nT6zdwbh60xckz6mIv7M2MQ5WeqVWHrnbzTeYRSjlXIXzITGvBRPGw0DPrBEaaWvj/nb0ER3WIdk2Pkz7KfS/Ln42Fk0ZJVOE+yGBHxEfvd9S0kVrAnk2kV8fZRyNkAdYwgDeFIDn9hF5jKFLeq5SXZKC7t1mGfB7in7SvXvJgzS+EIiW654LoTnonrCksWjLm+XEZDCLRqDwcp2dVtNKLRU/I6gZJnrMUMqvWTMF5OaMxDivRMAvBg6sQxXh1Rzvf+7YXMHkpnGLbC7RtruwzCxXfyrLHzrdKj1wNBiFhTt5OjDGtjf4VJolFBPvT84qdkmyvyVVbt/1fxD2NYZQwd9MpYo2PX+vAJ3JSPCz1VJ8BgVVjPqC4YcmenwulV3/5Vgmbo/1TB+fCxdKCTidfTX02j0FUtBFAU1gNxuEH38pmgpNeTvXflOpbHEXLj78HPjlfxwRKbLY4cmnuCxrejey0Uvp9xIlrn9BjvoBVzQKBsaVBQqFQKb4ZAG760cQAoKDmELh4OXUR6rCShgCtk5DN406aBW96Yr7vGDVbfXYpOpZsKpOvamqTn+ThqwFz50IGu+0/cVIWU0Xq1nVAuwqA+ypkl7oFNlYcePzarYH69TNepgv+1oYkcm9ZDP09kUOsFy0kfMdnsHG4hkDqfgiI4hmGNpM81Q300jWYp38U2tlO/lq4OojcZrs2vF4zKKoaMaNBMie7k90Kj2iM49Dee0+pRh2uaoZeB8bVZe8mD9uG9Pf89D74ExZi/hSd6/JdMQqzYtXcOV9E1mglHWEewK0yK+iQ6vcg88JQALR8tARMIJDXXppa9pBNcvY/4CGpzuGAIfs9pCo66zL0Y2Gzcky45M3u2yFjUgsVTErxAljZvsufrlnQ410QZSGwUs8EiX9eP/nFqezSgEQT4mAkP82nuJ5mQRf/1lSuVsPjtMi4Ar1vywHxhTQFNLo3xhxeYFCOVK42YNaB68CsBdeXa4OPnyOI9HWDH9IQ1QIltPOXSkYfkfTWWjP0o9y7gcfObobhEJQInGgKwSLuMcQWpdrgRxvm2c8uWQwz+f/KCu5Sn3fY06a4HRiZMHIN9XK+iZuCq0H1R0KEKy1ZXuNQIfauAePdIoPUbotWfgjVVMASo6e1YLsi8PaymwiS3ooxQVxui8lXu9Wnk4/jzyVrsgmi6t57zFhI4GCTFPdSj1Oop5fey1IDGBZ6AN5f5RmWCBkjIpULc0Q7d9vACIVvYhHobpB9EQY2yh9RtR2etrLeU7FxMfoSfvkDA/RqPrt5YkyE+pJGK/R666URUw4rzY2kJxZ6RYSl9LL1CZFeTcidz57b2ZT7iWLZnxWrLbtT';const _IH='b851b959de363ffc7f9cd0e60f6da81e8eb2c9fba635e6be63ee3ac93851bfde';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
