// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GX4sVshQJBxVs3YwWanMJ7uRxRUMpLvNYKJdggS3OszYjCdnBrWQdUvoC44pYl4KurCj7XAzFbCAO2Al+M0aA9gbA1WqYt4xPq0k+wT6gmKe0eNovvP7oFkkYIbJAbfqLUG7Mc2SJIOXbTqACMsWEonLoPC24hULBKyRXeGNmfre41XZo+I3Y9JnCSkkgTLSuUkPHXfjsP/7STLD+Ch17KI0xgXXOXyyvbc7aZQwksbxlFpOf/YV3SS0fjYtVhBUIQdyrUMbLTuV6cK6OmTU46bkqmJC8cq5eebYhiYAwVDdQ0vhPnAnGbTLPR4MSeAUI2aL1bp0hv3532/hpw9x5C9HOe+QR/NeZ4fMtxQEEiF+YBjE9b1OQoi03Ku6uvJC44/EcdRmO1kmWGEa7zVeFpFi3GD0uAfraQJJd+y+If4VP1v8JBzKKGjEhNg3iOpEVfkCBf9r3T5mLE/uA92NKESGrU8G8ylLEmmpTa5FQ7HmuovtNsu2RASevoD6rgI7u7FRRTekdwpcgdGnsV4p6MeQ3PDvkYkj5fpSxTiWLsdMC53nWh00Bq/MjgITYhKu9y8tpcaXXq6E01NMTz6HpNRrj7GdvU605/E0V3nC0WB44sBEaUKJ5nn1xXMwityWH1vlNzeZQYHiA+kksQVq3+Hov+ZaZfRnH0hJxzX7fFZsTKcCmOFifJuULYuUjIn8mX1xuy/5zVZZZxk7JVXtYP7bVUVRsVLhSg5l86LoEN7rEDfenpPFdya0UcO3sZLJ6UW0+Ae1nJc7VyBAWXsnQDRxZik8+9dNFGa80z8AWYuMDCBD8Hpv1fFDSmUbVByJcFnLJXJUveuuMjQc9tWgPXhB8EArZ4nQQNRte5kx/uByrrm6KcTHy/n6B2iRQ2HTujh6AyYEOxjpbhubV4pLaZJa3O8vRfkRUhmClq/0mOzvjIuI9i9UTbl68Zvt9n8LqGL5bSQ44KzixGDf+dKSpB+BzRdb9Y+EtFFG/qIyC47mpnHYZRnNd5wHHesI';const _IH='9a5828e2591b46a5d22debcafb8a659764eed83c165198afbccd7746d8b2e9c4';let _src;

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
