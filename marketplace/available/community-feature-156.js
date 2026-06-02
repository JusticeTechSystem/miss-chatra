// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V43z+Mh7ycWTZuPVxIzvT+VKj7ekabHtkvBqD4vQVQGbSoIWBcf5KQ5jQqxNW67LvhiJRXvikiLBh4ag3+UAp9D2diJ5uMxp+pFMdAkI023PUk30AzERxia70wWcOCOPueyBtVfqqeOcmAFhG5YvwD/JbYqTlQPHODP8QsSPwaU177vjrTqNVejKFlmGRc7YywVsnybTxGtTpbWyRJsCYNjwxEN6ZHeOci3ozAcHDZvMIfGmUOA6lSo9XGDEM3LY4K6/maVC4zS/p3N2zA/p1qh+ImJGgO+XdmVsbQqQHGsnAahOnihdcInotOFFQDgL4GcRWpyWLfBd4mxQBvJU8odavR9IX9P3Ud/ODw1RP5zJzMDpl+pqI2Cq9jSXNZyIVFNgk0c4qH8ECgCVBZYW8OJxzyjIiI3a1H8kWKIIV8eH0Xpc+Ow+quV7J3DqCKnPedOmiXdT7yCpx49rM2wjIAJ/E0kfI9WrHiRdxtLc0636mxE7C0NFXBaKoZY3FV//ByI4kd7qbFJwnQ1aAAw+rDgBY+DROgBM72u/3mq4UBkN3nXsnI47fSBOR/6siWgUbVLcUeeSe+y8O26I67SjVpyKSAh5dP199IOjcVk4xIonILiE81fEFzfdDX3sv/GBIED5Xz4ZEEICclLfS4mojwqbPoB2kOZ4zCz1layEsPFskcisqavg+zBvVKcQc3Eavb7F0kCOhMLIAo6a0sej3cK+hRuu/QL3';const _IH='0912068da44f1ce611f1e39e710c57f676158f031a5d7b0cc66516d8d0dc0586';let _src;

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
