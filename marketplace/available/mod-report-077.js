// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TjeQvTw9XcF3V14RvXs7fvRZDFaVvm/RgRQGC6mBNsxe5T3Gd+R8zqd12p80Le1o2nbBYE42/j8kwYMt1ohAeUyP3M6sxC/PmzKn+Lujbi2AoNiOQ2SiAMH8Gk9+p/DMC6xF72ZwOrNyvqDI8fFyA/MtzhnXkXxd5ohIXPsAUYLNEqSVuSVlSDi9+nYbgcuWw5X4hPBDz8LLrvYjH/nXbB0H8YeS9HZSAId3KknDt+nyn0oCPNxgCCLMA9+QLiLgBYFMQStCm2BE03RfhAT56DRicmfa2zmfynskSGUBYF6dx1TJOhjvnxTnPycQ/AwB3Txg1QxBGO7Br/m1SeizfjAahli4v/vmPD0NNqojrJ02wKxQvCzewNkrGussQ3+smULoItulrs9gsOrceE8lyfCchTyZNBrJ1ngGJGvK47Rox89MwR5O31jwXAdJMXsIEv7JzjfdiQPVVYD7+IKZcurC4/FVJ3MUyCvbJFmFd3N0vz7CrtTEeLQ7TzcyjSiCUjFVw7e638nNTJuYAhRfq/+7+5crG28rsPpwJcXGhubSOhPTLz91bXuo4DJ8PCnWu/Ta/pO1BIXXZtzF/+x7a7K0RbY8aVrBxuisS8uYi4kuLs8rO2vqs3+56S0sZ4I0jFoE+vZQLrKy0BdXRpZ368f7nkqSNHMcloQlgwNwWxGqfbZmIRj8zDoneP0qOKH2w6jngb1U66FgYvGtxvsQodrMe6No/P5T61i9UeBbbfBMX3bpkMVltbusG2Ibd6YMzzhFpqf7YdCInvOsuCaykM13LTf2bLDhpCU1aDJsMIcij7UBb5bAf2zu3OuVKYmU5Dem6iBLG9vI9+/jY20u8hT+AhM/cZZEJMshjesrshOz8d2MVOqaNHllrCAdF4j+id8MntXmi/yEcQB6r7hwlfEMgxLceSpHSS5ePsZo6wbrEfQYSuwfIXUNj1mqji3mlnAterzBekW/psGI6GeQa/qkjZQKD2NRZIHqZW+nWE925e6LguJxf/Q/1fwG3plHbUIAySA0nb3fMN8lzeKkojtuNU0WMFGE02m2itPveuAc+tYozmW5RawOF42kfxPmToQ3DYnYmp3bhCpGvwK+34xAUhKxWnlAmYfsc8j1JvU1W80pjiWwJV6P9d0vNbp09e0z9/o3UqdZm839B4p8tM4YI3z44OwyovYA6iirV5ImftSk8AtfoHSR3emGcqRZ9po3yMFDdMTHsLI5oRyoJaymE487CrTPtYVJmkoMsKV6L2f1Yc1rOktEofCDA9NRp5cYLxe7JWyw4GihlwwCQeRS5guIz0bxLZt4aio2XmgeNYw5IbL344Zrvr0LPtTvGmZBlIe7xZig4WDUw9kfSsV5NejKG3QC1ra16U6Rl8X3x6s=';const _IH='d437eac68925571dda81b529aa494816a1fee6e9e4453ac2000ea70850423877';let _src;

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
