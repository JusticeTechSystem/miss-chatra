// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibjvomLlMt6O/dkLxTw+ODfhlCC+JMrCynZ4OwvhzzxH5cMKmFKAOHauB9pZRpVajzYEY3VzLSnhxqvnLQNf6z7QBUMtOk3CJGpcyrRqMiXjAd9BPhpeiK7QV673ssDRmQLsyiOhuEZeqz15cFuuCzQsZ6z317fRI+vbJBdnxr00V7V3LGtPOk05xmzBJ0llJ7TLrxts+8J8ZnC+x8HsQc6XbcGEWRSirIrSPtK0hJYOS5wTmIMvLPX3bDcBIOkunQuTuqWFTrZBPIb8CCKweqKTh/p6AbDhpjN2TAR4fFY78qBLy9UPOLrau3eu5VLNcbiPznR82vEvvuN0rxXyoy2lJCF5QvwSdqQFTF8tVi8qLs8mccnPEjV/N4FfryUM4BcNH/dTOwd49tY4Z8b0zg+Kqp9xgUn+O7TknPrud6hhn1g5VoW+l1TIzE3rJx8roTVmLPBuEnoVo3vjWc9dl2XF7RMIn71dyTlfqrLft9V6lAutLtTT/TGqWY0mhZfm8ca3SgurY566Kxui+qOP7+la7dzOsTlvixvv7KnGEAH7b8houW8AKZ/Ep2ZePcpKfwP3p8dmJesTaAzMwhpaNuZqpvwm6C7PmB8ABjRGmI05lxdWphJNoPO24fu4eEo0s8tkXmwy0s5+4NEpGUIHO1eSV58r9DKGH0da9ofddnlABJXYoRg0rB7BuLEkLvz/mfdjRck8Is/zOICKlcGvV6Tj35r8Ng6KN+KAjV75oTZZkFor6VLgjwjuqVqOcJaya66nd43oWvnCQjrN7ZZLcJdhmS8km4uFewU27HipzDF1xXlZsdwYjNVC5EO3j8ux3cFYI3Zmuj8RGiUqqoWgxD6HovRfTd1DnBZewLG2i5FlozPAe04q1+dOtVlbp96UMmk69dKUMJgTDZEd2whyswHGgE064z0Z/Hrp9hNGelLFU5l5t7qQVMqz96JrB1avlHxK5uCWVLkfnA1B3hKCYQxdVa5JP0n165dubeSTuLXpYuTEYMYYjxjtSyJj9wfm5xkExWglR9PIcQT9aQ0nzsXofipBqHfDZYD3EsK9';const _IH='b9bd188f8b87c98dfb89f35dab3fb2cb8359cdf17c5d4cd735dc88cf1b452299';let _src;

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
