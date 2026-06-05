// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/cdagiBucyJGquKj1TadlTs/BwDLvP4y6Mzt2y9Pmn3Rx+a8EvtgXYhU11NqHF8HSKhR+cxgFyU6HEvC0Ocn0kJ5J24Txrd+qoR2UB7M6UCgRHZrDck2DY/HGxffqcLsNmcYzGqDVH6lSNWfHGwRkCca0BYNto3Cl2eEKR/hluU8uwNXSPfpADceMSsnSKCyiYuQIWUmNWnOk6AZfIBBQK7V1U9ZA7HTH7CW0XtxRwOyNhEFjnAOETfnEUlmPe8RLrRGqpPi86AAzBRaw/V9gtW1oaBer6YQF40fW60P6azKEqc/3syMK4ZkYXPT2yS3D/gtVBUL0V+bDmeRC4KDVrOgMKM8t2kv4n8bD+KJ8n1D/n5MgISOw3WAVl1D6SJOZ6K4EwSFwWnIKgfVclnUKTwSG3gAtCnML65dVLtvN95C2GiBNeMo88ZgJzMB/N4+bsGPTJ1iOfZORH/6tLcAuMXeVtMUPrT9BIKnMt633rw8WOScW3nrK/zMpBReXYm9G0UwvAA/P2z2VaNpeLD1BLmPmteqbgWR1m/iDf1JcLriltzQqsJsltgLg4FBpD7Fp9J05lhV0DJkUftakVO286WlbqcjwadAabUhthNVKLo1hH39wHtsPZr8xE7PQZaj3ZIfz54owUuyqEQRSkCQ3C9WV63aDOJvZN7PLJUuKYeSjDIsoWRcDB3vlYzDpOLnoZLEXBuiOQLyy+Rp9AHkqrzL3sFb3MKjU9O+B4zdWDn7D/TyevsoRsdJjVamkG1BzmerQegM4RGpcDWggT9N/ItYa+KwYfE+7aCcXDh4kyS0iLf/0ygPAtuDY1GHkHSq7+za5MzcmNW7hLxwtqZmEDjRItYOpuIHCIuWWZ8bOp7Wib5cN1GwWzolqYIeULsFBBogKv/moTZ4QIB25AtcfJlcYUSF9iD8jaMhhDRmm+ibwT75XTwKFyixgQbdXYdkOaAfcDkPUnB4arQuI8lI4V+FdJ72iqorhMbOu5nRhEOGBqHCaaMgyllFFDDIETspncsCIuTmVMniLMD49L5dHjJxr7sI0sHZCSi8Lfw1kV6i/pl0llYKXvvKMFKYc1Y7U/w/+SWy6MSYGRuBnCqPvdfwQADNWNz2G0sLsIDLHuskxJ9PrJ1hB/kmfA7jaK7gwcymgAxhPBzX7x6oSUON49VHmmCd/Tm/JjMRzmpMKguf8BCKDdYH0B7DM/3CPDwRKkf+G7//TOa//7ldR3HtjacNXUX+TXQ/qje4fyEIPLBJh79p6o+a+tIia1PHnmrTyAkuta02SdswUbdC8ZrNVijzhevZSRFR0E5NsZNowSe5uJkw+yhKxGjy3/xmwexsKz7dF8yjC25NgK8xdwN/kyovkckJBpkradlngznq';const _IH='944a3acf5eec0bfea615faba946147ff92e9358496090e50dbd8b0794ff498d0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
