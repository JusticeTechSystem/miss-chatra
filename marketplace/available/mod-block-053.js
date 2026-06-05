// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJ+LPQXZK2BSeVwgrJSFJ0YQJUA1B+rM0mHrSR9k5hpxOrAAnS2pv5+rs2ofkizSzoMiv5YPPRqfO6e7b3zlpDKzwtHRtfHTMHkDpPNZrZSFSsyv5NROvgWhQwUUA00b1hl2m6HShGV5fV9SCFyxHXsF5SfEo2wV6c6Rkyddoah5M3B+u0buNZajjIr7p77CTWC5gVriA3uygwN3h9RU4IDWmm2UET0F9057vH8BFX+NUvkW6OgrwlcVynj8E2jl/5H3NM6ZHFnbHz4rrbM4UOzsgOLEepj0h68AUd+tv1v3n94Rg8uKP7VIe8COGrg/RPxt+Lime/O4u/Fn4l6uy4V4CEUNAozULz8sWgkz8Js8CaKWl/gB4VkYYpbNMsjhWiUpXKM1C5TQoB2zE1KXBDEHCGQPIlFyWhnpOAyEAE5IAkABHsNmXrj+1N3nKGs6GZ+W3ns827lPGslsqIMjuyv6ZkvHfdyC6VArNdEJTkHa/DE3dm2lFHFbcAAa4MRUYgqwofxN2tEOfpZq8ifCUxLljZKpPf7lRUTM9v5twoN1NnPWck+Z93R5VWI3D54oF4gy9rOKesRPqHg3zhaU8KxfP+tRK3bq3oFDjm/udrs4TzIxaSjd+d5D7jYThZbWY1Mr2lXs7lcH52wlWQPu+yl7kVDhKDN/rC1m9e7mfc5d8gdvyOWtcAe3BMezXlitpRwQWJHA4mMiYjoE+DCcIrkgBbV6IsdLazRRdvfKE/R3M9gZo2/ECi47KRd2A4/MeuKlds6LFU4JX4qwgZdHDTZ56TVQacdo4gfuc8tbhPfWAnT6etDDkqBka2x44JJUzTbpcJVse2wElF2fjaIwQer6XqxT6MUmWP2Wh2qfrD/runvYpFEK/1w+HH7hyquIt42+bt/p56AosPcCDmZhsl3uXtZmmITk23cAiWaIr4cpnup2oaEdlZI/8lncF5R3s1LUYxqGazTzVt63KBQF8wkNXhZN88S6NlH2PHNk1PBoJ5EusQ9IwEGBykvnKAPy9tZPXGgZlyDHMuB1+G0LNyIIw2P4zDf0AxHRHysPhuY7gSnTOd0/gGTayb54pEoe3ztVtLTxCeS8TQwdbd31Mklfg4HZQMlR8JWGZIsaZXNfaLKh05pcPz124WCq9e5yFd/x7XlTFWcj1mBw2MUMFg1+rWaxDfYzBajXnNNUitKSpnEwNrP1WMaqW3RZYb4dqvOLmGzwjn87RFPtePTbTtp58mXeHlbhNP2bnzIGnxcIQcJem0PoQyGcv2wRoI0h+g4FvDSoKsZerXJ5/gQJmprVKlMcxve7LwgetDvcEX/z1ltK725Yo7ip0/ITp6UO3IVE2YkCEgkBTDXBs4rqHVp+OMNYeteffA==';const _IH='4dea3ced1cb53d7b8b652cce2236061b28019fb62b70ac671942ede4cd2067d2';let _src;

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
