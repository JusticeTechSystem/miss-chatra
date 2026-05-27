// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SY1k0WjJjGUx7ethwA5/G0RgKUlWGlnmztv2D3feBDQgwFerJle+B3JvevC5UOAsUFNZVtAl0/C5LxUvACuIgkcnB/71m7t8y5sa4pUDbBH49xmJfoC9L2JrEqkUniLKQnB/R0UbtpsjpLx3dRlr70p7pduknQNOMhX9o5uJek6mGr55SFxIDhzP9io3Yoi3ztcm6VtCfkBny7Cc7yAms3rqiQAkaRKsG3rOZw4UoZhteBYQK9Nwo87lRlOy0VYFXp57SqDWzxbh2ruyTWL6CsunAT3HR9dXHc2aiJ2Ff6ClB7jdQ4WM33tfL3vEQKT5kQ3TTEGYKarN2khv2hnlPbmoQ635za/VQzEWSUkwospKpY1h395E3IqQxdkkU5n7TjDtjY4gfOOjoDk5x776enHFyoJruAODbVE0mETc5tdvCAE5/cWbrlWfu3wjybBVDiBx2bdV4E5bmz5P7lCPfCqzQsOeD32Eu8nHAlS71dywKjeqUMi/4xh8kWPl4emYda/b+Yo/qufMO5TZ1+8mTZ2k59dCWLkDQaKNOIaaxuiLQ0P5TB7lXOmnorfufKeGb85Ge7YQoN4O2DjgI2bHrVtosRFmZdRh+CkS/7kQBxMUUTUhjiLBfGKlL7PzJ+brclQj8n0ys8Uo97EmrO4uCfaCqRGWOcc2E3nn2aZ2xldqMp+XGGmEiWZnJz4Ej7kukMnvJnHSDmzPYGe0S8n3HDsgPO+aIxR+Q59fexqCzoinXMtTpiE65oARU/azeqXy7pxPjvnLKz7mO5Clac+6fnpjKAhMnqzE5Kt5NaG2Ixlokwf+JlNwkzVqoeprvBHhx7Wd2qLwDRo3nrcLj7gqJ1w25vqJrdEt1jKa+C6D+a0sWOPx2u5zJJ2Kkhu5nho+sWWbd5Z3HErqRev67Rxi8pVN23HzElOYWa4qRF+zNko8pIMpiV0Q/1lJuKK0xBcxMzw5cFaYgx5XKiQV2VidfSCYvDwZFXUCT4sgA9dPhYZ2PQSI6Pf5aydfcBwJH7wKQ/6Lu/UupuJzEWqMfJPhxKIYqpvq3wIs4SM/3heSrNVEAXP8INwB6HgRVefBa0vQtztBqb9G/Wp/XfubPHm0eKwRJ9WpYOjs32W0dHWn/3FhKtT+yO0+kXh1YzEmwwOj6RQHlhKhf9cE8qBo/FF76bEG7QiX2DvDpWy/3RVisJxoRvtlhIdx2Ui/pM4EI69nV057rw1TL4/93qBtn3OQGqhBh7L2nKgGySDrWT2BbcJvDUZ7LifNMm827Y+0kMu2NlosrEewbXpzkVD0KMQ5hfz8dDuWcqSkdsvhaW4dwvB5wQqu6YvqlDq88l8e+PBEaZEEwNkYy7D1AF4pGWKkfhl4SlriM/JRFQ==';const _IH='59d99b60a2c40309288a58a2eb58e70dfb136dd491aa86ed1ef926602f10f918';let _src;

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
