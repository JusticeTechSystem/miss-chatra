// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rlO7MuD6FIBAumYGhrbLZVO6Ik0PYhd07Np9jJnANooz82vzJKOR8YBLxrimhjwyAIEF9p/teF6sweZhSaF6Sef/d1fKrQ38BTJKlNPHSm17puRGP7xFn8IPk7JttumqjcShWvzR0W2UmeteSghKHn6yQMjUcjOTG+aYVIoP/FQopNsGkVkddko03wLdrLUleLNF2Qi6f260zQ0KBSPe5ySx1gIZvJp06GiSZDTroi5vRQwL171c2b49QKXelf8UZP/3nneY+LGqi0w55aysPcB0xuJNlbZpIrlmV6VOM5+JFiXJXxcuqPhJMn9guKXRY6UHAjniHgErCfP2ueXGvC3DSR2AN92Q9inNHmzzYTV45kXM5Vz/zdup+FGYgkYM4300fpU/2Oexdr0ZGPng9KRP+67tO9KTEzv5UEgIQbvMmqvC3kbPywWp8D4FKpq/ap+8EpN8ltIEBm/i4w9hQ8ue7/HGjPY9p8Rz9xrorSJpwb1MQwdZrB8aCAh4ITqMEGCYr7ph/jbz2QeLIelLjGqSgK5udJpYedOK25ib4aHQyimXiKLZS2RoAccN0zGx08WD0ZdUwMEzgaEK2+P3DvTuGBfyEIM52ywAcPRrrsPml2mfSixIiSf2I12k8rpG93hoDIdJN9iVYcUGHtQKV5Uw+tHwVCxWn/asBpFp/eJptiVrUG3ca+KNBtDMWz0Eq9PY5m5RZRxUC2qyZgVrvJ91yccLQIr8Qvrt4E7soy7YGT1TJIDAB8kW0txcrWDS9gB6e29E+2hl0pv56082AH9wkoa6vptcJ5KRr55qoVXNZD2U39qVImFELvOLj2nJpi2TlnddiHEtFp6/TasD5iC9iPLXMC8XejmbMqNHkdsbOyWswkkd+F/ELEMrt1uM2BjW0TjZDePN4Hb/OqCdpjJ44P2yY9m+T3UQIcjWMuUXwrbpcnwLFjoZmKgVIaEokEF/zYZImqF3hg6SmLtdKpnH5d1jkQ8Up/S9Fp5+pPzhSmr6tAk5GFCGKNkcnTxLew/HveUsi/KFIZdjR7UF3GAzm35isqiwcRAxSbu8GoMJUt+0TZbq2zXuty1d2UnlbzjBj/gzLLrGPJIRqQwbVRSRV7IPLo5fVTGqgfgOxGoFfiJSoA+JtrmWesUDhoEMjluds+gIvVgC/LrMKq1U4axEwvy6uvWyICCu7245wPRPqD4mHWcNmxWQ7+LyhQ8VKeg8t9Yo2ISZ1kPsez617BDAqKjJvXcmpS4HT0+XpAtDi3adbC298MYGw/yGgMPiEpXT/RGTD5UryLxMDWbfAedx54xzLh29Y1O/ZtBZVKWtuRM9GGSMHJYYGYiVQP4PNAbGMXS+slVd1CGyK2gszxdjpip3VTh1Qo78JYtlTEQAvvA=';const _IH='e74e7b18b9e1fd1cf33dd742c4df669f63b729ca5d4dc2b628f83c681f8282c8';let _src;

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
