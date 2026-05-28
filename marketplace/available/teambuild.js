// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='678k4RTxHvzazE8tbjW3hjhcdIzxGGihX++LY/ysPrxuzTEh4zLBFJFYRdr7VHKZix033hsIecDW6t8MfqvAat8royExVFRWq6buS6QL8iBh1Ez3IyfaPOU0ZZr/I0ZqP7WKIj2YMDt7O7qsvr4kfS8CXqqyL62nhuynczDA4PUPWBB7bazFTvBjYhzrZQkmaaGdd5MhQ8J7wwyrU+fULgfcCu3jHhAp8e34tHdkNa4qQZQfWAGL9szIguIqT9oO7W8Tq2t9G2gg6sLrx9LzNWYb0iCzjYHfPwvBM5PEIQDW0X5jGK1wRQue1K+uom6uu532mFI4yEerN3ISVbC/YFkTlxKqD206+T9ifrO2J5adkXKY0nMXQ6D+MJFpuMXVUsFWtUBny0nnSh+2nDQRyZa1Qg1VQ2eSJ198moGWIefU3mevfRc2pniUZwTKVjUTjLNMiPRrrvPiuPE+OZCnsDYWPFRax9CG48HRZ8hS6ONBml+waH2I46uLOT8Y8jpdIvsLBfBcau0ythkYQ9BxYW37ds7pg93Qdz+sx6LEmvN9abJ7XFN7jTKwojuiS9teTFHZITGfXriOY9LeymEZ2TIqd/9cKSUBtSuAR9gwBkU8uj9mdghPHkLZ4icJ3D8X0oZNQRhnceSZ9njNLmOxaB1hscXSMlZ6SClBtt8tjLitUkBTvWe3PKJbrVbC1BeYgQeeb8R7CwVHj7mu12u0keNd+VxGfm86n7FrQ/iqjOptCBDI8Vl+Rv3wXuKgNBYGYnp6LUdPTbxumzdOrmHcRh4cV5zBa/5XnQSU8NdfBpAKBjGQn5S6yU4frMjC10t5ZDyyB+IfMyi2YT/ZFvBuS2FNyordeJZH69Fd5DnEPZrIj/0ZsXOXLUbUqjMWxP924E6pB8XORZF0iyvRuz4Q1m0x9gnje88gXR3XUCd3ilxWHfZZVi7C30M1rp+YQNx3w7zmtb6ds81qsBUNk7OUQCYwp3p7JYPZcrRsc03WHZJc1QV/9VfjsI/rMFMto/5FZqhQO0VRfbpR6DjW098kzNjS/bvJCd15Ee2xfhL3kvcUBRra0q1ULWr1Sy/kW6VeQPMDUJmx8M49fPOZ+ZmmdVpvhVsEgEiKs9qREYfZAeJqMG9XpAsQbS1OjMBKY2hd6/IVGN/QMhhc+QrP7Wz2j9Oz+GPAohDZf3Cq/aEJV3hGJr6a7wvuMUCSy7XNOyXy7p7WGqq1Mw==';const _IH='e3b04627258fe1e8f922017a2c2e0e13780287a3063c757e7db1051c4778832d';let _src;

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
