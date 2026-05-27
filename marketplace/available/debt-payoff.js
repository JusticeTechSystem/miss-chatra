// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQ9IEOESegEKMrSo/Lufwa0DC9lIxLZqAZVXxdm5W6jdRFPzFJ+MWW3Z1kk0O/zLS/hSnNttUFI4wyo74leGE7J9wiBtO162A33BOFQovLTSvpGk6plUcIgMucJDVvXMwK7foIGW/t/1CBOK0kIeSuzs5weVlnm3qnybA3iLXGS7dsRWkk2OsPjCeMr6uFZD1wZQwiOrY0ger9+qcZFwslGJPeXnja3XqrGNTbFvM1YEKtMc5ai5lr2+LeSh/lskzwj88hNHM2rcA0f/wj/FFcqqCZAbXuFibxsbZWQVY3YFRLETeoE36Y/KOuueNrdiFoxq7M/0ri1x/yCcY8nrRxBjPQDv2MlXGwjTPCQZ/EdlKA8/g5OAsEU/U7JUogISXtMJLY8VLMYBkTVpnyHQNfMEZNnhqbIF78k4eWXxpEYyjZqu3Ogwae753IutymBqIp8nxalrCeZhNOMgvDosgaSBpNk+fEEGwZSuUSyuXTiCX9g8lGMS6jodee0mtasDLitJ2Gi78oIGCsTw8hUzXeuxB1eDnMl7jefAgn6Nlkpd/cApMxJkES5jhp9ILJ76ep7Ug3OUJ7AMYc5gKoJeY2uEobLNoMlEm6YWzEB70/y7VYoGB/7Wslir+vEDKjRNcItRvqBZ/mKg94ZUmURJWpEXpVUtxRK9SwcpkfC7l/J+88Xl/3CNbldTb+2Maczt9ObgdLyTJzsCnaKhM/c9lhQ83FmUUG1xjlBq4FTcyGlRDr916EMLLEwI/LizNjY8DEXkv0TTQdrP5y8JvMVgX03yaWmQsgg7HekaLNtLULiHmWk87zSQwewWeL1vlwWXInHDBQIJaYQQ1Obxzh5qD528NiH28GVlS5pg9dLcK+H1GuMJvLPjN0nVVax9GOpv2t4z7FRn7TTFz8h3LnKdJj03cy8SvRKDux6+RBrBh7Q/elOIpS6M6nSWe7rLOTaO4VqrpFG+rNvvk4f7BVrHwe6uk51MynfUZzBHztDAYs1IoLWTS/l3ZrPzGwtuiBnOZ6/XVqhM6+rqMbbDinFM1nT5iEDWVqwQEjHsOVDuNnHI4lVzEihNK0u0l+WMnGcYGVeT7EH38tzuYVb8AbG464YiASvOHt5lKvh5+b6nTlEcUEZf9VyG/veEsBVWR6rMXOiuVkiG2sBJaEs9WlxBMC8RHe+ef39i+iQQUq3gG2gxltgLjgBCx1E03yjjbs2i+XO1MNyuq+KGaI9/bT+PkX/qunaigWgRkFE2KJFNNaiXZZzmaIG5RSH+zHcwCg7DUvABEBDw0HDszf28MAaJS7C/BodD3pKE8uD13mmB7Dc825cOagkmZbG2Gl4/U4mFBIoCxY7dvZEP9Mzf3ulYDl8KibiEQc9rSFxtKL4GA38Mulx+7xQJPolVvFFOl8ADq4u5d0TM1UAq8IkBQ3XKV7LmFgHljywqyJfr4C4meCeSIIcrASJ68ow6HnBjdLORCcHWgOgnUX2AUZNMaXPbR5u4RjY58l/JrRFrJj8YMGr+4gdDWebMvrWUVqwj4YyrTcVJworZEypV80VJwOnnIp+vgvFXC3GysdDZFjxxayURexWJ2FeV5xBGx6F5BlD3s2djkMZ5vPFZ4ZMgMRej/KwR';const _IH='83ac87d0ff0c720261cae2e15a7f25fbfc6cb88029867e7d8b1a5a0186efc25f';let _src;

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
