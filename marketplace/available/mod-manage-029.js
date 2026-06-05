// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6qcCqyVA8bUTWm6wz9LPssVeOl4BjigwKODXWi7LQd6jiY/OKJNWL4Q+2sEm1ADe1wXS9Gi+9MOyF6hwqTSuNRF5w6TbHSRPyCG4kxshI0U6hQbkIjYoPOagng2x3eLvBVpPDXDPPRxh+mDzM0YgqhYbcBQaQ2FaLmTWb5L5B2or4W/kaQSQZ9cx4jWjIpu3GDqe9YTwDfAajzvihxoPIHnDCjpXRaJ1MV/L3yDYFrfCg49RSokThZjTS+hxeu6kkfhPT3yldDcfbqfvCDgOZwrZsohqu/F9GVSzWFwslKwrWkHaoeZRInubqmk1U5WEdch0kP7wR6G8ecUhPd+xISHgixK7Fe4IdUd7ezeRbEXJBZvHWJ7V1kiEcsKqCrhKApfGZKMWPr9ql990ZgVYoXas2RaPI4rnsnWXjqcKZpnHXk/dkHea7boHlMW/ZMoao7Flkr8GCXqwThxpCd+djWGqW11rsxbQxhqbyo8owqRUAEQf2BifQz0OZYjo+PjYb3gZR/78s3Gyo61Z5LvLboGJkBkrcLmwHQG8GlRhzIdpzL2nQGIORvkUZy7fEvh5yfFuCaTqBhNgYJIPSEe/uzwSsm0CQK6/xy3VrTHB49/i8giG6MxLITA7fp5FtHjAPBMxim2LjdBoI76ZnUcrTWR2RB2E1V9sug8ZQko+gQyhwj80iK0+lJp3oUmEpHGFiINTu8w0hM/rBNEsG9sIDZJ6QhEmJ4Z1aLQ6C2CMt2dkk8mayJQ+o35RyHTnOruORdTzs+6o6NleAduxHxTtXeAvm72f01TKRk5a88OFR1Qil8fY9Wd7T5j792Vf20rAS5GgsZRxR6yzyTSKvnoRECSy/fVt/GlAPV1axHgM2P9+msgi/6CRq/W3NE5Chg2eERIRCVUaJyWT1HG4Hz4vYQMaP9obKhCttq6r9Ft+V4n+WUZu5gM0wCX8g0nvr7TZg7qP7hv48cQfl1JzuwtM9AU4xTDP66WRBIxcGVGRTSHyiwefn5EL0WNpjztnDWxr08LCeq4cdWjk3ENjyeyZEvgV4RTi8nd/XAyHGtPuxLQKwhT/7OS8B9cb5QPI6HSAGIHY4dC+6QL7qYoY8H6N9YOGt9ibkD8j3C7hFvgCvH+XjQBiRBCTikRslDjHHVELH0RcKlNQXXGD2vocmzbYNhFWfLj4tY6NCEXzr1BdQTYXpd4FK6BpA6+tuWBHEQWxwVdQw0GPOgHGRyYL7M1KyIv0/hVJaf5RVkjwgqGjW9x/6XzNf5WkJ+jPN4Xds0U2EzO1LntxGWlZQKn/ipTaNO3fWh1dDIYNh0AuufcELcXhr5UExf6HMW1QmgblTjFvNsQt3kSVpZvuLEhdzeEEywkW8b7wWMdM2HmgeCCyLU+EV94=';const _IH='580e74f98d5caa736272c5db3f134c2a162bdd4ebd457acce45c36a65ecb7cff';let _src;

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
