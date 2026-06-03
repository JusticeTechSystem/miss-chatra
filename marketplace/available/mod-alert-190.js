// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='emvr9ZY988goSJkPFKaUpiZyQcskSdQXbX6VReE3Dn7NQY4AhTzXp2FlpKr4AhqPlZtBOCnQRFkRTEaYq8ZYtFnbCo1lbkoD8d8im/JABF48DHH6ZYPKUBuUDcdG+AeNxiubSKCzOrTnx6vU4E6y4z8uBaXu6BrUKMK4G4tAGUPmeYTYtqFmaJzQsbdNNxDBFx1jN7ZvnfUmL+8OpC2AqTmlgrnq0ooUt/mYFcYXxYXKZSJe+X6f31n1obc9GmDvmE78GCnKD4wxTytGmJ62t4evEwktO4iCZja4hCEoFaGxx2w9z9MFFOGQi8vGBcpudUN1LN3QQqbrKWX9DahUf5c6Bg5fAlW5zxa+TJrOf2yC+itbGRzhab+Q0ptIXdsLxFoe4FKTjpXY5y9+Gezv6SoWcXyD0DHp1hIJoAx7d7VO9k1K8KL07zSWNCVfKmC1G1eUqmR6qve42jEQaHTqLA4nODO3lHehm+iF8XPosjfzNjW/hdclJCCUdnI8xtqVkYvTkMohRITfReB+aOXJw1BFR3nUbn8d10R8Cj0eOhs7xVziTknLRO9em0+Y+hnZyw1DijLkDlNp7ru+8KOmS+ujRADSAkBr9xJn/pkKsrXegeE66TKih8QkY7elFMtCFvowGK3NrFo7X9uRzimkVPvJBf1OkoX/Ao0XDM/6C6XeBuP5xtQ0jb+H4TVtQnWFG/tDPGqq8OPF6qAxaoQkk9JrOkJ3MgDR2k8fueX5jvzXwLs2oQakeKIQGXk97VUngrsNZn6F7R84nemorsJresJNY0mCLv9XCE7FV/v2fXn79Q+JUPRGKfVFOH5gsfmcVzDg6VSQGKlXPc9Pjz6yZx60/n9Ilo+DAMhZzCL8yxVtuUfOg4KNGyo1wvL7to/f62WWEt5X2jj5bEq4HjDhRbiURfubGR+Dv0syguUe64yMUANyW7O8TLPfT9PA1iB2H99HkudLq5kN0MoTCaPB5G5ecZsuSp4cUV3J4p/W32HIMr+HV7QW+7YtnrhgsTLHnIU42AKmQmkZQyz9JtF0KyCUuSRba5GR1tVth4NAJLholLH4MtWSNHZwsZfJBou8FKkdJVUprG0DezO/SXm0bql7Y8xAReqFGivRQw8lfKZVyejyG/qx+GFcY9JHGeCbpaCAAQ3wwVJxM3LZnmu01SxCl12tCUnBuNyN5UE7+qvXstDiO3VHVI3QbfcjNt+mud6U0Z1xk0IwN1qmWFeUp78o+IEDZKEBqSdlwI1JEuCWXEGVOVhVXoOLiSZ1FKZnZgNclU547HfSHsAku1b2yu1eRVAhUF/hQ8XQmFDGCLX54ZR/OF6qupxvJfN744ia2zZTOeMM8VN8Z8KTXlPuynexsEekspLpWPLV8HYo';const _IH='c0a8e8f9149db2cff72f86198b16932715da59cb3f714a725e0962267fdde3bd';let _src;

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
