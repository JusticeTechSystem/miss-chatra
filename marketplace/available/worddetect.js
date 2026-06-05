// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ArahM9C2Sb5WKjMpRCSwan/MQ7EflQ+3O1qyTug9m+uIdEH2Vt6dO5Dswh4QKgbuPEfd1kQqR0dTr9tYb8WXmDAJNfT5xGnVREk5ZkzIaqQk6rCyJy0v/Ahn9ejem/ZGeQJHK4xwgsCQLIA+D1BjngZ7/nXG/02IpH+ylDEZY6j7LAgwC90SjFgfIEYOZZIsAQE9HRc1j31mjjfaG/asPdLi4k9ZNE0nquWf+oYee8Mtrl44BmU2huAIvQCbk1S8x/hn1u9wuiol+tH71HTLROzGzpMXjq0Mn3viDs96LZB1b0/X2czxJYNMdr5EA25C3lhLEc7GC2QPT8udGKMDmJGwoRXFjTWoiLMM3XFr2RHnUg6snZN3G3LDzHyFLxHq8JuphlftytRdHwx5L8MFzqoNxI0eJOHE8qZkpNFP3vy6ed5LuXNN9rEZqEKcNnT3m1UMaCZDEeONBV1lZj5yIDdpSObDDH6lrlC7hHImm+Trf+fbkzMOgaKS1UjNghqpF/8LDINkLKxypkOC9/8s6NCmZqc0LFgtQuimeIgbGqkbZofr2NY/BAZLrzL/Qbw0HfldyJNiLr/ysKMak5isIGouS8e7/v8IUIf0Exg5kKbXUSsgMeh6+UMNzRD92yuODssCrGS8xAtVc7AEKRybyn5orhjUmZtQpLb8ZgYlLUSgy4VwWK8KNHZDsb/gefkdpp5tzZ9UnubhQsPlZK+/mGqF1Q8KfwaHpAi4kBZrbdUXA0o2Ke6OlDN4A8YscvH6vJ+JZqT0toTZ1P/Su2fP4VVsqDcely1+Kd0tBPAda6vazFZZaRN8abLmNmA5s2v5KA98eeazLhAFXkxD7OI+rlako+oD8RH8fn8djS54BzZ1BkJPIL37Tp13PL0YIKPweOQewq55SmDsEAo3fkDAkVUixtZRV6+P5MMQsmdl/jnwSdMkVYHRqJCGKijHdYSWcYPp2P3oLRxd3Xz59EY/uwtqqPVnjxrxfrOq0n5TSl5j3Kegol2wffEKVsd6Pe1ZKGxDyqBqaMGditE5gxdaaFW5v5Qfkr29JhGa0zrBUWxz9F8O4cJwzei5d65l8OfwOul2CyruRPaKjGVTOliZlwAWVCZxZdam/cTzG/9HjpPbOgtK9z9uT049TorR63viXLs2DNuC4jfNKyZLbFifs3BWRG4i+iTuUDQC9YfthYwyNmHo4i52onbpw6VNUWEy';const _IH='d115b0b2ee2fcc0332e3620acf2b1396cac5ac9b1d49b7ca58ee686e2e335c14';let _src;

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
