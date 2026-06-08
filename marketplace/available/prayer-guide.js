// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JC7Mx5WdkuXHdYaD9EZXlnGRrcH/80RAfPj/en/F8P/Cm14CYhf2WG3vTP3weDyKINwwjV+lwz4cKwiEvBBvnZ/tTE/O/50b3E4UaBXSCqFVFtWR7dn4GINHGYzYNL59RcqVl84i8fnxdn5zwpnOxsxSGipYF8G4g0cFKjQxuhU2EKMGKyXrkSpI2c1L1LuUdEts/ZQu+kW8zOYHzJ2Yi8F8BIYGUzhDvTCWwOaZlCrxLa+1jOhgPjx+rAHaoZ7n4/RPHmlbXoZgP7fKwHn30DenoCpBjgFH7nZOe7E7aTERjxOON/ypO42ZiYi1Ovw3KIz6PxkU3FtYGDmV5triZQQizd3fycl5AI/OoZmeag4SvT+9CNWpMw7Gxg+h+BqUpcN0j94Cibq6EhzhaGFvilpkJJwMe6C7B2SenlNwwmPbcw+eyapUpigY2Tib1B4ouZSahJ21wQqM2+lwxAEN2iDhJjlfzWk1jvnXwYWQfLG1005RsIXOM0Ad9rIqK+p5fo9ylZAKhG47jzwUT4Ly/9x6liNSMflx/ysxz6z7sDGgJ/brG1x6fZBCwHMSZZJFBH/jD4AXFxUwdbHKly9k7H0BfO7uSzYnTuxSxSOfZpuTMwJLatqbAOrnIttJKeYUERkqw6BP9FPOQ6X4fPOojgp/burYbISzztYOhH/hJwVldxNGpBQpQRDj6/lK0CpnYJO/OZqe5wuEFxmhopH3rLoslgdygSJ7kk4Uk7Blnj65dU86WBevMXuJe7+lri+aHMKchIvqdXqe/9cnBvPnofHDa9HMdoH3p1UpB0dl7fixgoj6NdAB8OIXoKNi7gDLw+EzHNt8ieUwOMS+K/sCTdu1EN95qdkyI/r/3fHbJ4Bta3xhwcd7SBIad5WAenYgJ8ZA8CdPwAqP1VFIIhqFNPzWmihFD4jvK1yVFyFpiaYYSUj29OOH9inYgvPsRO1nWoUuzJSYrFxD93SRJjz229mOeLby65TI7j2a/aBcdP3YjeKSKUSOo2isw2DvJzNB64WR8KSvJaPiOHqky47mf9jbuHOSwoJ456O8KV4msMg4ANDHxXaAFKVFaZ4t9IyVUHjRHxUiB/NsZuNLxEBiEr3aOCvTCcf6NiOFUvxfkSAF6q6nPfi1tnAKtj+hvS3PDI77YekLTwC06cQRLiUNlQF7/dFrM90Ps/OJCmJsJF6OTTeDNjE87vXKX1RXmPd5/W5OjFw4FxoNoRZr9b23c/qTRV1Vp+ESEOaGakA+rWeD1ItFNJzIcOWROANFSDxaaPUOwdj46pYu7hZvR5KO9bVwkIygJT0GasFadjnjTCo4QfmBAweCP5KGFWKPzXj8P8YbP/dLEdMh/5dA63/y9WkNUiAJE36PwTQIkQgUWI5CINt7W5UJeu4QY7RI7fvYICakkJC8fpIcQE4ur2Kelb3FumdIw+QbbSDHLvBcWKvvR/BlK3Ts7WNpwfGV+sK9y/yQUi6jzGh95wYY0cHHZpvZ1tQGY+m2a5JkL2yReaJmTvDllMSk+JH2s8UeuEu0iI1lCDAySJlcPz7Ao9SeSNBMq25jEOq88eX8Hg5VGw0KYhjvu7sfqASQ+hDzGqyRou0gzEWCqi7O8jdw/F7zbJxdd957KKsw21glQ+GBpQtRm86H2m23DZjCCSAVzVIZCHmtKaoFMzmck0RPWCP4apQ021ZUDhstCwqbNziDKdorpA14lSxHliQLA81B6JZLZG7Z+TyD0BkPQF6OOJHbjIlPwGt8H6Z7yy8Sf8le4GvZ4DZXtsnedglExxf9hhmu76Q2JYe0L6OGfrIVgirydd1Tsud26ZwadBzMV55fAA==';const _IH='2db72010a281b2e816875c37c83c0e7767dc66b5ddf6a117334b5efe6a09773a';let _src;

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
