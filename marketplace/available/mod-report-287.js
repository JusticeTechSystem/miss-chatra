// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ptN5Nu6dmfpSCx02KMvaMlHr4zMkYsCVXEonPzCOc7FnTBQhHPfF+xD1U/hiJI2CEqNdlkcDhycs9SgarHrb5k/JvwLzMFNNrkaIQDT6sBhyByj7B/b/OoSTdTGhbLxMq5R92w0lUQcbwwCp4JCzXVMTZ48VWfBwAFfk+yKgCXXfxlZjhRdN3LzTVmuExhWTgjCm6NPxTNAUvmt8hAoYuCF9Z6LUqegMxdOxZsUgIGlg5BLeIrsdCZIwLC5tzEENmLFg/gWqrp3kNvR4dTtGPyekgoUwYf+jv4hMalk80MePRv+J5Mz1Q+EtnXKujJ4G91I0VmtLdtGLV0H+4KflN4+ljJMnx/xtiLhjqwmrBusvwufrW4wBIDKnGlGUJCtUbIMxyW/LwRMysa//TsWFj2I3LkXi21B0fatx95zmqVP2+GGHp6xWUosSAuxp7vBO2EPan1VdsK5QNpygeYRMa1EEBIY+in6RW8aZ6i4V9mYpaiS84e/0qobF4LWXp6kyE2BaK6rThaeGIgXkxZSke9rPrpX+fzyMhckPkH/bYzGO3eu59/vQdoUGqHdKjmSRneFB1AiKIqDmseEFmdjD/rDiKS3P+gdXrWd7Rlv4FA6rEFlvxD5EpbztbVvvyku3ZNsJwX8V2XYFt9xO5nXD3HeK1XhRxM/anOJs/WgLpytsfT7nntH5TlatfUVRsc8M2OZtvQbeXWHvHucNMPxIj43OoJimreNhKjOzfCpfQktHrvXSccdMN4oBGk+QdAWakTdDJOzSdkRvInBV4C7bEkEGXq4VHgINwtOirogmbOYztfZvjyDFkBTgXBLWxXQjyNhLGq2uKpc4s6f9BTTxkphnQE1KrSJ8T5Fs4UY9QSZvH4XSPFgcR2De1kF8StoejkbnedkyDi9gHT36yldc4uMh5U5QOlEckr9C/2WGgOOBnLOjJH9g1/zVAAOMDvxXeH48RLejUn1A4ThUmlAt6b7ZMyk7mEu3rK9qS8l46PO+GWGnKpbYqOFqkWmAFpDV9ZRB3iOWHy8otaQh1ffGlAz9ScRe7ZO4rSKy09Cb1Nn12JhRdBC0pp5H/rOlqmXY7ACtv57tOR6/tM7ANeJxKxqv4Mz75wLy+zO1sgKcWvkh9wRIS7F6ytQD3JyPyOvnddzSxcfd4Cl1p2x8xACyM+TcQGXAtW8+dmsqwwX0jm3BsywwNg6knLV9cq7WKEk+DtYr2WULN7JPrxff9Ljlu+1hdizGSz/2/a3z8n0ftydS1GvB70yHpi6pRQomKYNUd3K+B5rQYJwK3Cp/Lw/MHN5m3SZBcpJ96CPF4ZRhDbJwxx5+d8B/1jjlqngh257jopT5oJ1N/nQkC0eiqlRV6aMUyeyidXKNfo7vvzYCINviHjCJ4IW0Ag==';const _IH='6740730b43a50e958b118a28a7ce24b995106c59c3b1378fac3a1ce6f447a5dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
