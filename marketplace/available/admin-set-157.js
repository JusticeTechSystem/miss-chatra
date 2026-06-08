// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y1jZPic5JuFX4YkauPxeb0p2lAzt1wLFHgNrK5QR5wboinp0p7Tu+hmRMZFPlbfLK0ecwoJ0A4KJjLLCIdOL1B8OctvBsenWdi8Oq5Yyqegcankm/HlB0Smf5c7yGaf554XVp9Y/+GoYOvuovwvpXmOmKHv7IDD9qBu4IyEL+gTgQCcZgg0fvQCT0Je8Grt47kv4aMSv1PXR3uhGU1fzHdybxF2BhWEOoxNE01LjFgH4gBeXM5GBebw1KTFwR0mWr0ccXVTdiNGhBzFqLL8eH5RzJu6Q0kdTUH0tnNIoMwsWvLRDgZPXnm6794b8X89nVH7/35qQqxZoDQ4w+Ef+tPqMGB6agA1W+GCGcK2dvBqhxCUqYnhW+038Zyk46v0NHkdtAMEb8thuBcmn82wHNnkqr991aQTwfvLjJGdmcpThkxDAMxHikuIrwXuy/tBYo4ivdTtGlKR/3FsYK/LMbb9w/PrldFEkWtBXsURQgBOqsXBpKZm5KNwDh/Xly9+8Aw/92d8ZAg25xKJ2o+Msp5+GbWPvyJ07NWKns+DeqsIp7JYjQoW2sNgC24HO7DR0oi7OasLl0GVOVZ0zdg6WG+X9Bd8Ksu6vSm/UA0jX24Y8adiBeiVFtXITLl6iOTrdxYL4xeTxo4E36uWzi+1L//rWspZM1x5IwExWQBOk/C8kZd7lmxdt/KR4xaFDaaXVJKLtN+b62Fv6a/32Sn/oJzrk3h9/3WVvJB71rnI0+CO1lgH2aJGQIQ1dgNhDOSl/o/d82Pwu0GT4M/6SsGVYWvrIqGycFVBd1C7ZXcNnFYN3yH/0qk6o+6QhnvwVIPUmZymM49wdupvmym7tkSk7Buh10nMl2mhFAO83XYwY82h6FfYCQwUok7iSYoFb4i3AismirZlAcRm+zIpvdt9CbapJSXI0t9DIFbWPfkVPqbmivqfaoA6lF1dFgIl/zt9QE6/gg7FurIWfAZ0YtxP8v4OUaiEojnMWcULLRg==';const _IH='a52a0ce5abef1a6acdeb21d256af37c344b8c56ea7463daaaa96bc789bc43baf';let _src;

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
