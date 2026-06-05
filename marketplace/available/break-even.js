// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2tfWsO2yCujAqCNuzVXRJ4Mw9+EK+Aq6mzZuMfM1ciGFG95/L/y8MNNm2et2Q6dLa/gKYbp0dYCqkCDD5siqazJ8Pz+Isaoavz8RQkHybKb+9cAtlfpktQ6ESytMIPNEOZbQjBT+kS+0clvYsNb9ybeBxn1+3puxft88gZISkXZ3Ckx+9ZOh1mJr3qZTst5u8sxmgR31RwaBwNvIzX1Y9+2XSbR/sB7KnUKQaIAMcss9AxFbiA91YS7hP/uQGn/zdnO+p0uEJbonMULKX1gKeCxw1QQNLw5a+MgkvWH6aKZAK0qy9cEP27DM+aB2ja7k1difRj4TNvn2PrDdRN9/07VGLe1FZ6PsWyWoieXJ2doI+AtK60bZKGErGLUb79leNy2OZrLd5k3VUXWWmGB7K2sWB4bP1f+t3iBUQa7N5yNSxzHznRYSe1uTK2qGX7Ty2DdjJ7EsG5pBrbBhDpF+cXaSUYS0d2XDJ6rJRW4sya7rjzBa0vfsUxiJ/NtGCoIJknZ4BqcKobaL6Z792H/RykX9xb5kIG55SV+i693aAbu2DTh8GSBKgwAVKzKgnxoZaXvKzBdPimH7vHmtb9xVHCxatRmoQRlD+qOGqCXtmQMy9e/ONZKErOPk9bX0yCnoGVggDqwjmoU4zixXZhjaw4i3eLjXSgLedSaJhl3OdDS+lMLdPiDls3Wm3GJ9gHugGlxIyTtQI8g3S9Pqh4LPZbRXr3HH3qAhTcbSdhCMIvfnd2PKcB1cLcqME03sNuJIA/nJYdgYJJkX7mXFZg8hoFQ4qssDx27M7SvxRZy6r7C7kCQwlIRj1R0NzQjZLuAhkrjUyrJvzXR4sf5Bku8FdytamGSMcGT3tO/QXYHYvkoR4oMtK8r/XMPU8+A7xieM3biwsV+4B9tdwCi2K80L19t9Rhak2x4tg3KYuEeMJanCDCeFl5AhavooYn8DgD3JaUevBrYtcMvmt/Tp2YeHatbkoKvHGGzw0CAbzQKlJq/VUUwCynxVW8S2KCCd1tQL42IYMfKlrxndYHes5FIQi/Pu5LLUmOs4Lgagv01wSDPaaKB42PfJC42RamSofGVXPalULZsxqUN4WsHrNctxOyQ98tuq+y10a/aSfq2tH/wBUpbuHr0zNk4pTQO0YcMVLF2f9Y0VjvQdxkrNN0izzJeA4GzIP8yVUfvCsRTO7hD4YPqtCwenPhG8N3YUG0wkTs9SynGPeRjxXO5P17eVe2Oi+SSvrIb+UDyG/R+5DKZXk+X8PTUuLtMDS4Eec8q4Wp9cci0ofAx/wY+pJ9aPBg6jYCyYSpWvlsWs3G3p5zjXboFtYBkuI2jxDmbmgEw7JsaM6t/XnlxbAY185U1v5JPgLEevxgS0loiHKLtP0qzDVJoNLjPxYtvDKujrzeb/d++ZCVd7T7tAIWDCb9sBmhf+dH3Ti0qd4NkKHDtPZwdYUwzslThkREEqPSv5g0oHDTrBhMx2swvtDAsg173xCLvCkVtvK4VdvXFjMboz/KlOo/dC6VokEiUloAcVIKZR51lvifc9/rEx83EcoCaDjPJZ26Wkyo5NEYf';const _IH='96e0aa0d013e63c2527fb8691696fb6d9fbc0a58b017f25bb9bc49d41ab49772';let _src;

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
