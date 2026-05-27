// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4aIjUa5y5Jc5/Xk4JXj655CZqCOQUioTZApZv7L4RnBoUljpF5Kmlw2cUvA3GGwgSsvDO5XfgeDcdQeKIN+GysbjFX4ZyJNO8lm9fpMqkAgdKfKvihoF0PlIIYnr8joWH/nYhI8aWeHSyxdDAU441Knt9nebejLcNSrn846MhpLU7Jed20q0UlJtcHrTXUKX6SWtFZQhYooJTEDCOYWwwBU90AzKzWcUoe/HmiaFwBUlN8Qz5jONeDu6S/AkHxQ7/hvsZgC6LZQIOwdN4qjR8eyz1dYs7vT0gDvBJoLcM35be8uKDxY9SlBrxkLpzZMwHMJxDnbBmzWmdc9p7kApHq5ZjIlIuy7Q76PQ84I6Nrekda7ITtqsAvWLUoxrkZQZiIrx5iLENFfgrUCe5H2xXL2xpjb2omYDXXCMIfjNsLQyHiCX+wVYNezojBqd9ZWEXbtjP5Yhr/W/zuk1INhAEdi0FsQEivNF2T6uD+vzl9axfj8sq3TmXwbWRbgw2uo8szFfeZb9byGH4DM5y6y+a4XprBW/hbzS5VJoQimrshBJrUVWa2OosKOQlwOo7iCTWMJtBpVB9PAnh7eeX3iP5MF/8+tJ77w0M0/xtxPT1v+tMwAOFkiPs1ckk+ZdaR44E+wbawyfjGQy0fJMyfqdWpSv9HXzay/fBdD4Gy+p2YFbiNq7bjm/5Ik/oezX1Ir1TtEbtBjpCDvVfWk2X+UNckQq7CTH4SQJK+9RLZCJUjxLYy2UMYoLaIKqmfp0KRAkfxeTTkE8MUGvdzFx39/Cq1K2Nb3cRgZUlLMk/Xq4u88RNSsX2UO05KbJiWBa4oGKdeNu1ofi99WowxCAscmCpWPdiOfkysjpyGvADcX2TEAS+T7B2CWxiCn1LMqXIz68rjsbBG7ynhx7jnSsiE0YgWsC0K/t3rIHbJJTObcUDFG78u/02JlKue94C/OnRzD3gQkFbZZFbvurCyjB7af8HRZsdCz2ggODJGySRyqNRxiE+f7+UjVDg+otavhUael+ZtPdCFv3XGMB7efpOaGAdj/wpZ70zzReoduvCIGlVFQnnvdTqHywfUexyRBgmpG14xepQgYVKrmo7w0VwoBQMlYpOQt+urR89lgT2VL8lMlvzp3+Ll5lg/Td6Jy4Mi1C8cgfY4acUXiEio74X8Yta9YT4zKexuWrBUrXn94cAa3OBd90+vRjYUWNo19my3R/Y4ckcQ3OFGld+F9VIVZdyE+oWl9AMd4ZPeZ3rVsECvN3iFXzeh7IE2m6oly0NL0j8pL1FuNZfA40ai2e6YQhR51E6B7WNLHMC6N63J5EuE9koTCg3+VjiQedO5poKmybVe8NkiRwhEWUjLP7JJdc+ndEmnJ9alVZ97IMEZo';const _IH='74fb41d53b299a6c37fd2bbf0f20172b913be54bdcbed0e7585b26777a623825';let _src;

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
