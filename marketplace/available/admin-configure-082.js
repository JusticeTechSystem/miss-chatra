// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DYgT1/usDS+8ohp57g6eJb1xUOmFX1XPbmCbRPYxrBvw+9CbDVXn6+UQCXKSX3T6QcdTg+587k1MS6GHY/jGjGqvKS0QAd9NBPaHmfVpDwmmPkoUtCh+/i5JmqKs0FTeqxtAJNQ2zGTgVaDgiEv1e3AMyNDq3udjy1ybW5Xd0Xojn5H58lc//1+FCcnvlK+23NtrTZrcIIyoUH1m2b/4y8316t/TSrcUr9EfKlsRV8RHuD0Xbj4sTQGpYMMXjhACOJalkn2H4Y9VasVAAAY3XZ6z5am3G49bhwy2DmzVs0k/zuDQyylu6R3wK5YuFHLW+uR0awqyI8y9JwRDISegyQeSXdePZuIn5wgjOqqWvEu2121uEsoltVfTDhXCX+9sdcpkp7I7CEquNrKrl5PgCYJ86b7Rc9YWopTJh+KaE18cQVkkOBSQ6SAJvPe+hG1AaKol+5v6nP2HP6byG7JgTXFzvCw2gDWoNjaqj7he6MF0ZA3otycPUsWfl8ZLqDIiyJYvaDv8x14ANaMpPdi1KCpTxJhtEOvRawPA4i6HTVWKGGIUbizE7auyAsORy7ns63KkyZr7TZNr0uIl2sHz3dGCLVtntYoRDvtiJ7RcImlInaROhQgxq1Z+8xtXTWGrl5uP5L25KUAPzUOUsfcpNQEIQEtlyguWNcB2/pKVCTbue78/bunBtGwYLhm4o3Na+LKzn9f5hhtNuTMIzgpWeqslIlxJTriVT1nq9Kms/eom3BdbXaLA+QfFzX/V1a2j767J6TNF1qsV6ArlbnrW4fR94SOInl3hIprZyJzgqZSqFuXNlStg5VwFObyQwM5W5z6zd6GxgQcz/MCicgLsIVjae67JZUXrxJNWki/Jl7Nw1XiDBD143OxDzi958SnjrdwW3Hzdj+Vq4dv7vZv9LQlvNKI3pnHyhAGxt1zMyR+R1v9D1CCPc7GK+AstqF/sL8uSFGXDnFCuU/wqODyvNXwQBdoInwXVDmtWfLpmOQ4aCDZ3lUBYsak1wTXbd/DfRkacLJDZd6KnopuX3GyVn59f';const _IH='72e180a4b5fa188b4e16d7114da9fb6ad56267e56794a54daa5406b08bb3c039';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
