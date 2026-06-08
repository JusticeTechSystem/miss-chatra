// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wUix/TKqZyN8CpqwjD2llRvlj7vgWq0V5JETVks1PaZyjhBABff28U5KcV7YRG3muHoQDQVv+yUa7xGdMGJUdD1XK9XCgnfvK5osXF5FQgB2MFK4aHQb+rv0RLdUqW89oXMwFOnXVOwUQNknr0OQ9T5pQZbrm3HROqbNmFMy5Dff5C3i4rbKQUtaIo1uTmCWTR20+uaum0bruTV+ky/GPoRl2OE9T/9jv9kIbA884sxA2Rzqmkxkw/eqZ+/MMHnqSd5rM4eO+M+aYCDXTAVizfdi3JKnvsnpyashYFiO0oGGjluQOA+JgwqgTzP8VSDGo7hi18WhBHEdoj70aYWg1r6F8vO6dfRERjSdSBoBQQfDXHDIiN4N/sZH0P9tow+gbpXFcrdgQR9LoYrklekBvRUvK4e85V3mjSB0efMGM1YBSJwsT10ICDmtXcMA2WXThSdolfqkpWS882lxm4h8OAMzp1lZAvCVXNMM6Jh3UvWZgWRV9gDoqQ8Hw/ocF4wR3CU3/l1otxHhg0dHc6c0mw64DavINFhTjI0KzXmizoMpNCkuS5xx+f3BidVy4TLcQ+7GG2gUfByBtp7NHzEH2c6fWFoqqvowMuzbLUExmp3Jl/xRbwskPHd6r4gI1q61MJJRoAViqpMuQ0L+ysxzSR0p3EZt3pDryoyMrNj36tbt55GAzuV6isz/FSvA4wR3CITgsctXSicn+AhIBr1jRp1Cf/aj18sQrGT6SVhEL14rPMUN0Jt46apzjaC9H8lHJweIrxnuXZ5oVP1TKt3Uia11aJyJuFz/SH8gJFY6NvX1ubNAHvgqWNYvdk+SYhkXpXz2r4oKY8IC1189g6mk8wobcRKzlu3hUskxnnTaukx/9Wbdx/YB783RxOzCze8ryA5J5Ey+O4HrNc23TVPQx7CIcXLAWRQeEak/AfG9dcVhYC6Glh4Yqsw1Q68GNReKueszGNkirTXJWw2u6OlJ5Gm2PHuJk2Jk4J690THK8BAJ8Oc=';const _IH='93f5b2e1b726d0370702fb8e075e8c53e572877953509f01ac041b86a23076b8';let _src;

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
