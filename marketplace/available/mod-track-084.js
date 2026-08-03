// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS041yod3v53vQo/F75tCTT3XCYz3m2O6C675+EpIg7IlZSw9mYhS0+LsmCJa5Ybz69zW7edNfBjpUVscTZdUazos923zlLRE/ryTWkNmxl15ck+KAO2YOD0XNrUUHEIQ3v5Z3VyQANT/LRtwjYT9RZUDiX/0XnPVPV806Ph1jwN+BMlAgOEUIADiXivCXlJbocGwF2SL5msyY3vO5JL7tuc4w32ZEw+0t5FQvLLBs+Y7S410xXTqFRnjATSkBNg9PeS1tbEv6LEU6W67iGy4Mh6S6vP20Ov58mIP2nwSQZCZZx+FPRlV7szLjaFTF2WSagO9SNv++hm4SRXsHYE+1jhE3i50sY4LdNCq7sTF5Ja1NZ/wBWXHVOM4o71sdAW4RpHwEkHCaojszeR8AGm4Npf0hgcQOR2eGKwRvj6XBzn+wtcadVj8wKtKGMVbOy/yhw821LhrxL+sEovtjKlscQnlxGoJ5El3jbkj6BYiDIwY6HznbT2kGwdspVTieFYBMewzEvlUdoDuUp4qK/Z1s7HgyFJvGNwp2m4DtfCRZd9rZ+a/vNHkqlJ8Zew9TO6/BDzua0IYv1SGAoxOcgmr2eflISBgwK1kwFpdQsDvj4kXpRMpCXnkENUR44PzwOnV5xyIXm6iWdcpuiQBaisnGSJtTG0EqBCt+nBt6FXHU6gcvRtWCX/Jr7XJgY/Xg9td+bmPwrZEQGDW7eU4IIdJoCNNUBIm0i9jXal/3CMggghx2PzZjGjgK5uUl9ebXLGz60Ii287dZhv32KgCA5VfDHs5meBp4Z83xO4GakRr4ynzEOCN6y7JgEzFA1Qmoxx9aH2x6K/aqGHgdhdcp9pR1MmyhihZojcB0WcLiXVITBSEfvKh1voyh+lztHyoSV3W1JvUJZGxYDMVh2Ah9fm5gG4msuawAudifTHoEH2TuiiLaeQBlYdT37BVd49rOOGrXtX/5Sanec1DDoj3z8GzY5ovvdstK58TXetTIiA/O0x+2fmrwqrqopL1TWlZPsBS941jPO4q7DVz69aR4jCOWFCO+kfj3YUQpijMNYChps9pm2ETX0Ta/KpjIczMEjk1k9z9acLcfwf+JDTjvw9K+M2Tisqx9iJoK0rH+VyzYLEBh/0ksKWtphj54FzHRbAsVsXd5f4Zu+09jVFSw1Q9b2l8S+ztcZ7COUEf9kHmSQQO/zLBphDGk0UEfNJWp6w9vw1qEh5ldLacdTGk/R4GrS09EwETbzizGwROpVguMpLxYMr17CdVfTvm7wrWiUW4YmbGwByLbjiALFQrUen5qT81F6g11+MRQC7j2t8BLg2kDmBt44SJPrQTzYzuqMutkuM2/fWbm5wgERx01nnYtYIzIqsEEE';const _IH='3d88728ac3c3d703cbfcc8ead973820acfe1f8eccf24778608feffe5e867400e';let _src;

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
