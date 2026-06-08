// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cEQfpCZ7yPaWMetWMxWoE6OOhVneyOpitMPhC0oArbN8MX1ssjnr0KqlFX2+CDheYOOFDiAtkPSmijH9wIS1N5NDbE81iWvYXhmRwaQJ6Duxh5mmKLur4Q9P/X36HP5/STXv8ptMM2tqM0TzUD20w+Ur1t4oP+npsCMHm9fKCD89xPH/Wbohz/i+hAjhhTMZjI+GRhHmh6N6kH0E7+j60YuDEbuTZWi+zKByfNjeT41cS/hR8xows66bchVsbfItPuzqJbhr/Rh1Loy+Ct2QKfvzT3+YiGeuLEWG7lVOaSct9Ix2JKwxFQCtwEhWp77laeIlbkIm/T76FmSGHfKWg/XVR9vGqyP4QZDikqgq0aql8xxDO7tSvlniSwPdtX+zU+ezBfQK7Pok/zWj177dfq/DF/0b1KUciXqyM8lPju3r2HyF7o6IRThW6jFKLsWXhALruvaqft1QdrFSWnR01m5p9H3qlt4jTa3uzqRT+7eARQEdWyV6INfr8mGm2T+Eg/3v3f3TAGShPxBUhfIIz99N1LAcXWoxa2/qFtOA/fc7DxnQA4fg7qJOM71kqfldPipxm7hutEfrgtzQ84C1Fea/lmOb2gc05XeqO+rOKZ21dg0ep4z7f1MdfiWX3WU5v9jPU2WRlUfAZ1+yLIflF56ykcLw18coLWud4Mnwbl8afbDW+sxjHLga678bDN/n/2Ut2eakzSbEFaovFYwuIhBjRYkf5RJZf+gR9xKuGIY53AU/f5KE6rNrCOgyhLzG+wS69e4vFkYs8w5iiyjeFkKv0IUP870qbfZXSoElt062NgrUfwJMlGRaT8hG4P0/KTa8FWUKdn0oP+DpGZC/CjqLZONwisAhLdhCpih/nkuCPYqmLCUpwio7EUQMo/DczH4NRQDDdACMD20i2U0+K1tJ5pwAPcy7HWYcslEsj1ev1dsmKSa+u63bggQ/wxizvM5qTtgf8u5y55BVVnfyXvVHR4NKEdEPx5/PVMuPw5YrcNrotVZt06Epwc2LSPkc0RYE8PLY84JSW1+eCD+t0U8sc4XqYbxWwohZRY/bJCyA7ys9xgOuPprJsQyyX1cTZjJZ0D+olwoeZnJxR4LmHOaqBvYobmuh8N3203p85XuVc734MMbcUJ/RaPa5Qe6xZ6ieXL3V2NosH8hqTn0rgxvOvLvvLpca3ynHKxVoXQomk6g3cNOHMOJ5keuz+nXxRy7xKTY9qhVrZ5G0E2H5XcUCqiisQ9DiP/uNAS4kKVynMxgWUzFxHStHyJTeHaeHqsf3jlIWUGxhyE7gcD7rd7bZK6wxsUpejNY8w4R1lP58Wb7x43DG+GDx4ZzgMFLDu6tCKvaEiczhtzfjwSMADQaYUPx/9wV6cdlfzMIEyHU0Aq376pXK+mLrcw9dHpe4MHmmSeZNisfuQbIdJoTf2skV7Ion0BDMlKsMugv6pZWaqY+VQpQIUoiL3A==';const _IH='12a675092ed199bf5b27e3a109521236716c82878f58395e81efa3aa55ea22dc';let _src;

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
