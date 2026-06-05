// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dXXlLkEvLMZiPVIQpsDTKIj/sgVDzzODoloDddbORIDEKOV8wArrFr6zFhvszeDhHyh5Um8NxB2AGibCqrrgxhGyzZDX56LmYDdaVoKOufEGVmmSpBgY/lacwpdZ+oIkDmEKnOndrrHo2c2urCIO73t7XdE9en2u9ErRVEn/XHWwWv+Mqd8VayZDEXvH1gQAVe0s02nDkaJNPK12iEU74+rAeRwH6DZG/p9N0yn1YuTECHSOVPN2vK9Gugp6mz2TvcA64solbAjAxzlncOIbO2zKO0x9GfEg2KiBcoWP6OLV2Ts1t+8JvddzUmqLqCXLj526EEYjpoPgScwcQ72Qn9CVWcK7lOp8q4z3w4L/Jn7GJ/IsLBwL+nI17RGOLN3BkbhS5uFYXcExqng8sUOfRA1jsXHpkcnlAlY0iNmfre2lAyJPWuYVjKgMzlP8J+xOkX6tsZ4vbMKFp0+63Ua2PpG7/N0QMyzjGqka3VpxB5G6vrGJLjy+3Bd+UYpMNabLrHf89bXraGDsSgNedZlVVKAfJfKqduSVbvjgWnVg+iEOzCg/roP2DIMvOlyyxzPd0qHhvf59btTtpztYPT6OBYW0fDnyb8HzV0Oli3TxNVt3kJzSPAon5H+VLXiLw5f8UGJGybO13PWoaxYI3X/AvUa6yOP34nRnpxuM03dIyyi2cuca8CKUasHY3yUt/3TgM/9zg5hEUHRJqqpo7sOzRYu3Zy/yxZje1t2of7I=';const _IH='e5e90bd3eae92bf874a07827cfcf20a828b390d0a04168cbdd8ec5411fdae428';let _src;

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
