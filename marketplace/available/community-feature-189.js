// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gfg9bwQVqgkXm/S+ai/UPsW0lhGDqM8uKQJGduv7FNPhR0C6kDZ8NuIeZ1lEDs11HS5pCYg2Hck+a/LqbVFaTXfKeIUa9BMy9rrYNejKnwEafxAPKKBotHzXhsps+DM6012xyze8XGQgql3g4HYz+WtoYea48Bv7H6G2zlDVd6X5qBjjL/xcIuK9qNK2W6WmqUgapxwK2u29kAhHEwltPQ73IYTSgSAjtN+1HPWOriRT4cJGTLzyH73C+w95MJtWJWyv4f+2Mh4QLo/tm9NS9jJ3bdJw6kYn3xZ6yR0fUBPEkfXRP05KBD4UCRrepgiyrMP1dHdvx7T9n3NKgKW1LzESyjElRSSacuqmrBmOKJjFddlDCmqJLbVweYhiHfYDVNBZ+Ft+bVRMAW7WVXKOBTpCpL6k5vN+ynquwfD8KmNPXOWEEm9JwrOZi84xluPqySUM4/+WjuDwXzK+cORFkrR2aqumy5iS465rk//jeZdmx7RQIReHlwvx9JRgF1JxpoBVg5E+EU8IdfvORMH0DPwhBJNu4CQfdOygejJ3j+ezUNq4PCQXr4dLaiVBdqEV0v3177gqFt0w1TRd2cHqd2wtPWagTn8qL0Ax3QLch8/LWHDFbCKCrQrPgX2Ma/NgWMOm1AkTG8aY7irLKpaCbxTsGKFazpPp0nHW8k8Im0Iik18PQI8z9DvQm6HNVdFQ+SQmjW+0i1CNIg7mSInk6iGIXXCXzAmflpn6QxLnWnWsgRrSv0w=';const _IH='f20a190d93106b005bbda90b7a971df719432bb9d915290330e072710dff8829';let _src;

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
