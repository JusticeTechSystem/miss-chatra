// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ91AsHcZDY7vn1AvcwW3EDJjxOFfXffCQxYQIjiplTOsKdoxlxddGrM1Neo1abe3Z5/un7lCvGkat8erQ09HRBuMNTksjjwUfw+VpUIpWxA4DC4ncUqvYHeJCnjEkAAFgEmMXzBFXLVjeQ7g21YW0ubWQCowAgJWEHMBJTjcDPJR2A8y+vBs9VewTBJqAoX4e2OdR4sM4uLYtxSsUkjgYyr1TjHMwiFKs+Yq1O8CDgImIffSQwkuhyy6n2v2oWI3OIq0rBBE1e8YjKVHDQcGsl+OIWGaum0TX2f0keY2EhJGEVVXb6fIqGWZVND6XA4wn1l6elgWB59iW0rMlC6aZfvQqAfh7y0/K0kd9AxbxUkQ1hy6/OVmMkUDY6k0dLeb4xpgr6n2rP/59X0a2ZLrHgxB3YNCCk4LFm+rYV1iruR1WXrc3VdYzdrmpjogKEp57WY0M/CIK382w1nPvOyJd3d5mMu6Y4x4wnRaRluPLLxiCv8OkOG9qBwWqbzfpo2/TJgmlZO8IIFmx3bKgZzkxlUhDak2XMMWt72GaFrQGsWVhmsUlm0eekiSbglMxrMieWdUYt5F97GmtdqykQvc/Kq7NNwKaa8NvpzQighRrNEFNOyd8d/IoFAttEGXisbWiBwOjLgCuSxgdzQaqqTwfFJXVTEMDPEauObi/Q5un5mPXSinFiREB4uak2Tx5i0zMtYhXIM6MUzDZJnUYpOU7OidXFtWPJ5jhkx7FVkWStatg/YB6/o9IRfn6sZb0SL7fszvVYqCrApZPpVyOLKawnJeKWpP3FKCaYTlFm9EVmx1WiiHuwXQgdMKm5bTg1sAH4s8g0qDX3//W+A133pgnhHRINlaLmP6qWoTPDKvBMtvPc90CZgsdChq5rDWKLgfMLP0dksELY46xgA/52oyDYYhGglvTsakrkndSEd77F1qveAret6uGGxBiMLWAQFxQk/JssytmkL9pQ1eya/LRnDGegANNNscSqKU+rUhlG73hqsqMUTMVbpnBJfun83wTxlqGgE62Sh82+o8Q6gunX8d85dshUCIhkQewK1/NyJkY++2zydPeHIBjHejWBVoOtgcGvRmzkbAAsRd5qJseNzoP7LFOGLSy2ijVb8BtIfOpnfRPrktMNz/TdupdfCAYhmMskvyPKETKnIs6FmVSb+TEruVjasY4ZBrWzXrAUU4+TIlZtjpq5jcfozk3mLBw0/l90mGC8hyd7Noa4M=';const _IH='2fc15893b62743d3bb9c81e76f5122f62f85273e05711fcbaa65f1693e9f5ea8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
