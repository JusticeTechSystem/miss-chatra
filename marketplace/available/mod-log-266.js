// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ19KMt4qkdWWjDG8jz+krNtAMjw5aA4i8hajcKZzv7dYN02WD7PgK/Bh2e/CIC2Ed9lOfDVstIpfNjZ5Rqcv5szjdSmq5JTvbcaeZ2OzKlCr8xM/6/ZVK/SiOE6zutnlU1HZEkjsTc7zmJ0j7UbHZBsOGL8lI9m6VBB+Aqhj1lPs21LaATOEmm6CoOMbKOrer5KlDRU2G0f6GFZB8Z7qF5mLIyhqBj0eT3g6McIGCJFL05tq3ygodlw2ES+8E6gk4jy8HssusyQtmk6nuvMf3km1cLDPLgnjQ4zaxh4Kqwju6p81JOYc1bFJ1urRTwV96PCZ/8g9Xk2OvkNYH52Soi5i5Fos+HfYXw0f1XTS2mjLzxp2hKOoI+U7gFgM1LO56v19qOov8JLwUSiL7vwnm/21swCKuU9N19JWJdd41kiAU4iKw9QTHR78xNndUOHf7YCZOULg1LhXcjMuzU4QQi6bYVIh3ateObkZje6dRpuQLOMH+xqo6b7uXduI1xdb6y/4VvBv++TDX+pad6d+XctO0vt9jz5Rwmx7pQHVU2y0GQVgWmKsyAeqKMNP0wosDrUGDbNd/rXWQKydc0ziG9Sw4UWdzBSalBBVfuNdDKRREZb3Urw9kyEJnTgQrUIHhfH+YItvuGI+EhNgrwZN0JZJjy/fEtdtdatIAswDHSKJYVR8dRjlfxFZyWwdKVeRzdf0iG6vL0qM1ty4pKY7g2jSZI04swN8AoEPb6BQiVOktZPdX7frSYAqzhTMNFI9amib2PsMx5E6F+NKD2++7LBjsXd4L6V9awfY3VFyDOjrwhfCgxrRMaRN6DFHVEk2gEuB/z6oFd8cLaZyAQOrVGnchs+yCciXyczjxldFvmCSuWqX5gMsyisPqa7lvH8R6qS7bYLC2UV7Ebm5MKV8cZVQPvHyuhzp0FIpVAkAJFI7Ey4VCphSbF9Oo4wA2qg12BZhvzVR5SbFkdlIKbQZ6HBrbxQcYOtNz81TGfGQS9Xsu2Yvdy8TGOXI8h3abgkKqH2eaV65WCe0/HbXVR0fz12KEd/apd72mXEHnpY66HoaM9LYExliC9cw3r99utI2CeJH5SI178wrZ996kaUT9G+wp5ZCS1d2hSQ6QZ66E4KXYrHntQzzRLKVYw4N+Jr8BTkngnjGgLPMFeNJ74X5teiJJ14oBvAIaQnIGfEt78xhpO1U0OV4SRH1jbGbcbJ2PQXrfozA4jtPUz030YWu4fdfabU7Q7Q2zp2oX2d8BDOXcn1QQFpTkmxDKFgB1DGg5zwW8ZWdwWFCp9VzrBnuj1eRAkZXYAwDlkktfWReOVWERt7z6WhiNH3B2qcuTf5alMnktGr1Vs4zjuo=';const _IH='8a6bb5fd68cbe559456b9c2f5a34f91dd0008053f2003ca73d290d13a25d0d71';let _src;

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
