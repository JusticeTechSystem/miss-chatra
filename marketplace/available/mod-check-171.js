// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgeM+oO8jTcKEtEzeMpQU28bgLhcP+m6fvQoFIte4DxhgItYuV8Fs5ci4pvOvp4BhRXLTUJgtfTZtUPQCuSyxu/fddwD84uK5BXcM23pGNjd6tVY/RMKJjOfvv4ZhLU9+/X30pAkxC7Df9Y5gGmk9MRIQsp6XjtBaJCi5wH5gpn/PH36UEKOfBGK69+JVl9LgNFY2yxcUrBL9KTAKcgV9s6g6xYhoEx3JS0wgssPCYWen+sLw9uch9Wb8CTeVwVyXQhIDWMLlSLU7JtyT6l6aMOl9vHXLKfrFCxWogz8wZJqqfVEfzypjw3GBOCtnVbTzBeec0nwzfZ3HAAmigYRmZhdUQl21uCE4squk13PO2EN5E52hOwAjeRqDic4Cn23I55B1XvZ8pLAW8I3LzX1REeISXs4UPbMoH6PqagPMXL9lmLNlhivw4K1fXE6GoHMo8ZCL7trEAIfhETb0Nxg/HcdxvtdWBlRuuDw97vJ4D/aOLDkEdivCzhOUvYUuXxQ6Pq3Yobq4/hUee5ZcJgo5/+SILwTgyEvJhTBoll/Ou1mbFRCX1pqHFjpUbkOD/0+xxF9v1P5YBmyHqyEMTYbTBofLSr445ifitGBWxJI3MOkNxSRmjybtyB9YyZEmatX9tOP3gyfRPRdyNx+RFOeRcBpH7QSJ6sP2ao5zqjKWuD/OUqPJ+xb1RNLOrcpxGTz0BL7VTBDQ/nk9SrJ9T9CuPGEbUGjPrNWp+m6WpxOlpjpmTx/VXWq4CPKeVvqSqTFGmItTq6SyCamqp9STcTaUlWT2UO0RmzAOEIaPWV8U8qbOzxTuO8b1pS7djFY1SVcTi21odbKDVFBEsjtgMdKjiSBoqjNRhwPdIiycPjqLXB5dkFh6JcSO+dJOA3bD2/MRNBAY/e3qGKm1zZ3Lc2iQ2rcDttCgZ5WTzB/Zl22Xa7Y+8uy8e5Wo2BszxnEdSIkWRNYwbO2BMSKyzM2T1frAh7MjioilzQYGYQGJp09EvJHpaVQzOxy/QCN7j/UGFRJLbV6ShU7NJsv4MUZHkhTEMn99LDh7o3+GPDyMt0tRnZooA6JB1BYHiokO1YbbAwoq9yX8oN5YAS7QInDxmlhVKSYkMJxAnWzFFB+3svK9AlmBVX8P3oVZ955jTeXAU4YeCWB1AmzT/F9MkxTzDdLgiNj4b4DDC6x6fJLqWDZMF2pGlPwAudRw8a7WzRVb4N5E2zKlM/XyGdaKwzaXoqcoXHdqCKpQDJB/ORfQW0GMy3UiJStRnvMd/3FyJIlkn6oUoXhW1QI+X6qZ+lULA+NU49nfbQpDXYAe030ckv7LKlWYlBVbLYl1zgINE5hThkAwJwah8n86C/voqmCqUgNRqsTNdP8nSGaTJLKJzJIQ=';const _IH='6560dfd00e97d3151ea691fbf7b885ab418237427daba69fcbdb26451d4de35e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
