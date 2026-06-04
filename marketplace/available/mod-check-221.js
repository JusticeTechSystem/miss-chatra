// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/dSAlt0NU3htxGow05fxwaBxt/ZZzMWZKeioMdlicQAuotgCMKlLpRjd8B9siUG4QZkPDgnnkjAx6SL1P6P+s5T3FbT2RSsc1XdbpU5qeMtvIeyzum6rwf4AfliaXVlds8cUNn27hKgbdQVdXNLzzFYDF+zcGofO9GUBmdSGsLdauHNMfRHb2uuakOlrpmj+gbfdcMbvwsgzXr6tWRdLw22VkfyjjRWJSjyVyhFoBAAgBH0zAoNzZ29w/OESfJsOYY58dCefLENypV6jX+0soEigg8QiXGFq7Xg5KQ1m9dG54kXpgZ3+ciHqjp32uW4dJnipKgTXt8Q/J7XgIk7aT1JCwY8gLgW+mZXiHmt5Ho/uOz5dVo8hD3mpp1zAQuPXJfbJGbx2Lg+MnEmCuD6Kmze64KkDBR7q0uyC6rycQgMoNhFuYb0lwn47nTBjxhowBt8ayIymGz5ME7eKKo2nzW2pG5LKnfSGskE0GJPnuu+z6YbnYFAWAFeg8BRki0IglV0tRIOnnXjBvgzNuS/RS9rYtIoJUmWGMKTorjNNXBB2XQwDtLCahMQi1hYZ4aBq77x13fP7GNmOqvlmOcMSy0rStA1o8eiW/XX1SoVrmd/vAIEJWYV1bZMtcABFA5ZHBV5G7YmoQkvuMWzcmHS1dWQVSibuvqoJC2i0Cr8S18bW0tiJ4Gf3bOGzGYjQyPqF1D+h91rjAE8yoYofLiEVfWTBPCtVZp2vNL2KPQp5fXEKiAKRsRHIrx6Wa67ijEDeuDew7sg1TOSWC6iDYUT8JgST7HCZ6N5gYSkr2va6WsQHO8phAqZJXvBmkf8KH4JBSEYnlnBVgpJwdIILxjd+SmxRUn0gCM9oJrR7bqWTJP9TmwdLpa+vU6pDwv3P5r4nwABZFA/arTw4w9ExOBJ0kQmTbudb1Z+TssXak072jEOrtZw6sVtKETXXeAP+xgnbbtDpopckKtP/3ja1PKgvk9aaOaDNXbViDTugMFPbHVfQ8ZmfxFMSixj/ye4xFBY7VtjqPAU4velKYiN8+TrbBIWF+K+g4vZXPL9S0ccF/h0wa8ehJAFWGpO/dMoZtmiFTxD04IRJV2WNbuc8/coGE+tv4oenW26ExwQirhynkD5n1DapUsuTQgxZZM0YHV40QJMoBCIEtNw8FFtssvXa0rHl46r8Ku4JJ6hXHDmxsU2Kjdih8+DPQ49MjIXwpkEhZHDDw0lr4lytXd8CeNtuRMVR1nn31e43JtYCbdpUnWo1OSvAu8buGcUqZDoxLomvZ7CkR0ba0g9LWlSqbK9GCK/fT9bDkyay4IG4NpaUfsQoqRhm0saFmTxROnal3Glew3Nc1NaVecc3nPoP2ef/8jynpoXHQyy4LjNUkVN';const _IH='1ce0924474420db9e371e1e4c0295f7e9fa3fbe03709c60e10f052920163e668';let _src;

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
