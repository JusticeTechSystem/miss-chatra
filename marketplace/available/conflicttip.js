// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XdqeyBuJYYmGmOS7sK4xq4FP5l4nf8NPmwinTT+Nveuss3fgGK+PQKbU2qOHqYrmxw0xBzG6zGJS4H9pTz5vkFRieYa17UyIsO0Q0HY4D+knzRMJ0l6uK+C/EwtHM3FfUkhGujrdSL4mgTONYxIZUihAj1xzI7szYoIwGXrpXFNy4XQ1tH4x5X5mJ1OD13gYCXddnS7pRsep4K/jnpIYsO6MXGFC8cBVEF0KvFg2tWNz2Tm4fT/DY66uYhH/7qNpf48u9pbhPq/ibgdqLP6rADfuVOFKS0TMWGGILmhOPDY+C7xY1A3elyv1jgv7Mun0O0PFHQWmhS9mo3yg9SdDuY7gVMiHR0OuYHNGV0zYQ8XSFnq5c1Xrf0bmwPQ56FcnuvOY9PKBmI7SIojd52EXeEWdUmmSMdxwiDBnOxi55pUy0iyN01sUmJJmf3gMwxVrPqtTschU0W++4QtWdbV7tmsi5Ot7Efs4aFHDCc8WpXrRKsp4CdYS0T3mY8OeWncwC+ytUmbYaptA0BSizD/9jl0pr27Yqz2s67k6D3rFdBKIpigyTcagguTCQvbCal2kv6zN41XyKzsZtikD6+hn64K/CbOsAnxcZ4GShU6opzYcGu+POhcXWFPifVKAXVWrfjeVsEEsaKAEGxapgwhh44OO1QL5lYWgP6d6LxV96bnCyqvMpeRcZlWfP/7EXlqXB6NJiiRGYNvZNbUNapZoPVZzN9bTzzfCU7J83L1p+sX4NQryMZ94y2oe8DLna8suwU0GQYZVg9XrFdk2pwUPNjW4o8K7X1wQib+lvdELCuKIM16P43UyBRwXwI6lwNvRkrHp+P/1+i29QljBxIsJyYaVPzi38Uqb9zKWl7NwSe67OCSFf58FQvZFLc6PzR0EUPQtC8r8cUcb6M5QZU/trFGY5iqplpCrgr9LJbRJoNVY9G03iR4C88oLccrlTIEBOPd72oNxr3iB2ZAbL+9ONYKxHFCe6XcIrxley5Nyn6WF453B/0KH7QgzYXK53l7sDBq0MJ+25a1Bp1iG17j/q9HMxayuQAioyZcpliPdmDG0Gz3PnRI58MMRBPRSYQYwpBEDfgeoFjTzTwfs1Mcs1fOymnflfQDsD2Ki9Dgm5zfZRIK/j/mTTwyG+mZJD3kW2D3MJxVP2ocz8A1LvJ2e1GkTc5sMQCbyIao09NiV+/iRi3DnijEj4t1KoXKIlciqe2DM6J9S42oSzJJf';const _IH='fd52a7602ef7689060eebfba2cd257441093d0a68554940e6d12525f77867709';let _src;

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
