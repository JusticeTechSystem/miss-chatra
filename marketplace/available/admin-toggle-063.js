// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIoHQBknw02sOeOc73ZV8JdHIckeG859ZPmBhaO4naG9q682kC+YK2LM23BIaDj2WB+gLYLV1GLq2g1voyDtKX612bHVVDGUSKd0KQMQEMgnr9kefa/IxtY1tBkPUCpxwxRucbEHLb2BIY7eus3YCioIp9N1qfkd51vTflwLovnkeR2tBSz5pnB6hgUNt8TVrsIZEyOXXhM5qNe6vSWFq/LYCdZX3Gd/JxCuz2ItzTnQ2VV6dH2fJPOAdHQGhZBMdnfvzDxHKKN2r0/pXl6TOofZhY9SJIeWFPO8RmCZEAMIVNXDXAccIZlRmg/asjoFoju5PbqnUx/UvhlYFCq1faRQN4+WjdEwjhUE0PUngvcJTmm7pnpKQkTVYT8HwrAm9FX/io8asWUO9AydgCjMrWTZ8KNmRH3U2kGci+Jm5liS4VrqDN+dD64Q5pgApHwudBbAAIAtCX2ya08RXrsF2FoBoMwH9fT6+KOuiSM/sMehXtRvdR/3nFQsUg/PBfqyaayQpatUKU9ZVUN8xclsNYpT6B/3LpHbvfFgiIYGh17u3j+pGODItpGKMax+uo8QwAWk8SFcGZ8264KJkBvrmW7DtRgh7bRSU7ow7qsRlATSCBrbwb2Duqi/6Ggxca5dT7u/qPTTpw4QH2eZ6QqDFR7cL1W6+pLdRChIbu/qspCyID4cYyA4pMU2fQe5xIGTqrNnntXXjFTz1cP7iJoi/uPhxsFh04xyVnBwxAGU05wQhzbvH58LOpT1L11RqYTFlgRNuHV90hPUgTKyqaOjvT7hiVulgPm5ICskkfYnkXffKZsRNt/3rc/SlSeXc/BvpXo381pS4rvg3a4e1Iwy1z8Sf4uFg22apwZKIErlotSPAelNHRK7TxQYqFi7SpGqp8gZNlZYQlbxo+gAKrw/G3zuCcOla83AIzsS+mgNUGo3bdIBTC01oTi4Z7Zoqt4Vd5aUTgEVa64XYeHEmVDioaVV3fLyAQucV54qCtUAogJfwpuZ+pTSaCJ+zd3TQ=';const _IH='645fa8380df8e82899fd2ccabc010033d5c93b114517b4f46a9740a8d8f43b16';let _src;

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
