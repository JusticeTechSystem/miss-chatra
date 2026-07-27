// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjmzQbChNOY+vafLPX0FNPCHrIXfFijWnce0xBxl4kxWew9gBVvuoCeL8F4SDwt/7nJNNo47zUmXYsn4+sKvduT6ZCjqHpVlJeD7myWpO5GxfMyEzNaeIOgMKLHLq1CQGDwrCJ0DCQbJT63IC2VM0MrhVmHx6JrN7YRKBpnldyGej0DkfP9t+hWqOeFfoWrXyd2RUcdrSTaGZpzg/6ILXqslnJESt8CJycF2dbPqngS0b3yw2+2JkRXlxXUX3J9xZU1SKx50p30UIczN7KK0eR90kDFmqRZyjAjjxkO8CjKBt0g4tRApulxNpgJXrafbCNJ0nfPd8ekPr5x9DkoB1uTD9szm+lUKX/BidDFIUCsVz7bP92SffKJUnHfNhNo6vupm3rgVKB0ArZF00PBdfYQXe0ifT0pzjlPDVM2Gi9XHMleRgVhVBLacGOiO5+0H0G2O1S+U5AOf5zaj+s7AR0WG7QhlqZPlXIh1xwDeAlXqsC6Cv0Ya0xejhH2obRFKHFr5PP3kGGYSaZ9Jg3KNiKZ2iT6IDKT2JdJsLUs1s09u+zU1OnfeFakisZGhv1Qnut1lAsoORSd67F9v8RHctNFEs5vFy7oCGeme/4PK4aTHmpILZLj+QUyyIRJMKxw39BYeeL0vY46mN6hrwHdKCstRyIeBK5oJqBBqnIzNyho7fFpPAS/y6c2u1lBDixgg4EneJQcd+laoJupLvfrqjGA5Ty9yaYUXENte5+QKlNJlyCXOmchT5225y7Asf8BhO7Aryxx4vsB7svyflGW7h5+eOj6kFvzzdKdMzIIls8OvIbOTP/tE35AHwU/GjTrtsfsv966nGgJ9v07Uk2W1N/8vNG5+hbhZ+7Dxc96chLG2dxuoH7+5xhcmRFjUW34kNWAVxT1JUsEunzPlrcF5kNmVgNDZIlvctyh6LRXsE3KxSNSWnTuovSDoZHvH71aXGLXfmFEGDo5sQmWvJUjFXWSAsUxWZaUd7XYa2W0woAmkgw9jms/WoitOcyvQC9vH7ZHy1C';const _IH='c3b95a506169c7b5f62be159e1d9e49a112a8b08f949263b9f6dca52503fd6ed';let _src;

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
