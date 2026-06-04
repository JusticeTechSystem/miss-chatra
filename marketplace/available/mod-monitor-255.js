// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rJFr57jxqUhTyP+dhRTkF4cH+CX8xNI0zjJFZmPT8iFJAlVlYYiGunMIhe9cYWyZMODvicCE4aNdsBc3168eNhOaXq1DbL/veQYqo2itgI8ag9tD/y5tY4oUi7Bk8GnIBl7RIGqRKpy8WwUxWyJ8swCqW/tHXV7cBWr4G8RcYacWwClQ8asHMpUffvobBeTbfQn6hijablbQ+PwkpO30lOVZZvMeoyIBIKZxiJF2PQIVFAcxIxNWxfzjUxjq5zBIp/3jPuOcKZyuwK0BN/oi60ehAjJ9/jmmKWGAm0AIVOCpVkhiV087N6XSbJaK+6qURLDIJQs82/eSG0xFIbXe+7ps0td+CBGw80CNvWOHYtmhGlx+AyMS7+BZRTBcc20/sAZ4HKWRmENkYD/E8O9AlyLWOhEztSqV/qsUqVI5C7gnIdZjTL/fMLG/eqlqIF6oRks1hox2WUYlV28LBMSEPuvFh7XLW6eN6iq6pSCBXxzu6NoC/usiSxtnbD5/yxp8Y+DMRt3Q21AuZjd6nqEpgZ4pG0/QgTZkwkk7GqrHd9TlA/MT4SFBzNNx5BF5d+xNZ5Z4x6QFnEvilplvXmII4FjdL4AZInufMguwSHQ82978AOPOcSyOMUAsIMsG7enw2WZgyHHUwdZai0F8PhycbHCZTB0iWgdNMdkpUp7yxP6rAwXvIY41q6P6c+DN6vKVhZUkjOSRu+dN1jpGOpm8kU3HCUtKvfA/tXyJSvjmtUtf+eBlv6J1UDKUutJM13lxAsglMPs+5rVBuG0H5SHhxXDM/Ay6uWkkiKY/kNpDluERBA1uQGXKLQQY1iqC1Vx9H6jHHo5Za7fMGILvOdIcPv+iC3nuwdnLOZejxVNA+19DiDokgETf52dmhbHOzN6ZZjI8+cSVRXRhmhgXlJQ5VtT3V0NeGUOCbXUuXUJZGr2SlQ/SRGUTq9WoKZEuqHmxJwUBVPIgiaTKwOP6BzHYVAPkiWJDllzXR7dScloB5PrfPBjWgVs2BRyiKs79fU9lxncKiz3Y4PdBZQSHjGQs3zyyMXMYeeHBlVq6xoYfr5VF40ryATq5HIOQB0Wghsl+fdQoRLzgyB8L4z/aPR6AFrJLPnkX87zLGkCSm72ghnuR5rqkCFEl8l7Rxd3HGN4NYtfyu+AYGgaBBWfrBGtS0Iy+kN+CrrpiCsJwBoW72qE2vWjwuv0sD6JSDLyXK6pcqb0XO/AmN94HDDCgH+EW80Mna1NSmxh6TGKueCCYo5BhrDNSQ9l/mJioU9fxLXg2+uBVbdkyrlbtB5VwSqVGjOZhA+WRS48FEMjs9xzGfB3Ob46ipeSEZp/hL5wioDc8GgTMP/ZK9Xhzj79yLByeQ7I+dQ0Zm2MLYrQ9J5xF94upUoUjUC+s8hxaJvv4t2TxJh0=';const _IH='cc37d97501c3fbc86a31765fbacc35ab9bbf2dde05e4152724b073ffef46fb18';let _src;

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
