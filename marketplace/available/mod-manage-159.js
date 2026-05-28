// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJBrbtp+HMC9ev+y5zZ73CC0H0hK1bL0SrU6pYz647m35TcMThsfrmy9vqRvlFteOSuvSGgCOmmCjWmJ0CBvx9+vRhiNK1DvKeksb+vOU68hbqYh4TEiIGe8ZtmR2GhgakVTPcn3C3EdMoRbuyu5k9HT/KaXOXJcdROyIUCfzzsc3AjA4RfrDENQBq55kK7MQWj9v+2BPEoncV7kzmi0ncHAlvjvk9fjYS1eYOrUTE54gW/SZpaYjxD2jVc1To8/LrK4NXmgDo45mqCls0RlCRAXAtnpeog7fNF6HJGjLCzwnlhWPClFaTUSyqkRB3+pIoX3ZRH67GCrB1UaikR7ldb4hsHqpEOo2QKQvRzFNOXPgwwIRZdUl5Zl6hmg/QWFfPNxlQgNa1skjWfAs2VsBIyehfqGcrTW5y2LmyDtP8X2Zb9vDkdcZcZRDaKx+gqPfVgkvZjpQoubmzkNz+AUz9bZc48qzifIG4e1b2k2CynSEVq2YjyQtlZfJO+AnUHRxPQSDkJwgsGi/wchbmQR177Qz9bF+iY2rLDO/EucKFEREHPF9Nvpqj5zbj+pQk6+S40ScoKeNorSNQi+tyCg5yYPMPSLAb1KJ5KPsAtZ9GcqOrgDWmq2zkACNkZRIhGmkK6ktEg+3u5Rn+Rp51inka3cPJaKTyyqXCmGTIJLYvomxqFFRSlrIa7mrU1ynqGRV7eFFCvu0LT2j+wtEnkdfneMoCA0/qBaasshmfFspe84T/KhJzZeqXaajN5zG+cATS66oLNSEQy9k/RGrr/88wFjyr4VkrlM+6es+pFEsjiEOjDoaaSmuP6o1jMAY3XVkPe9VtwI+AomdG7G6oF/ERugeRHVux9CleIOtYfcOKjJ620E655G09jwtBDCySN/WtzhzJhnwCqWeMXsAw9Ck52fPsIom/ytP8QfDMNxZYGawLGgPvTsk2F/dCKMCeFdsRhw3bHn5xxZlFpKXFw9z1EM8LwOLLxccZzegQ90JVVxXv9JsrB34xLXcud+YEbBAJ55PnODM28cEEYbYH3q+wp4L0KZOK3HSsDxnY5ZFOBgWHSOgsQJM46LZd7xJcptnDQzBUlbJd/5hK45HHvVxFYH0Y6pooLxLsGzO9K693bJjQpmzKenTPMZt1VBiHA5Mm3hvQfXQcIKLmeHpAa0uRwzc4Gg+8YfmQNlCO72bVZDZPh5snhjfFL7cDmyxem+EC1Dh6Qw0bf86HKDY7QX/ABRqcn2B50o8HntXNepY7NiKGKLfIk8EsW1jrKhe1a0O5oxYEdJpZU39XnGYLIagna25Rcjc8/GpjDRdHpViQyNSi7mabdl1FHpLR/JLlxVj/7GIfI96AeniFy5swFmlLAVt0kSAYhBEW00M9IGIQm5Yauk5hd17w==';const _IH='fe2f956f08396edddd53103f7b4bc0c3512a963e33d6eb2731b5f579120f78b2';let _src;

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
