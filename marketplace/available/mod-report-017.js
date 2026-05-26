// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N9yKOIRsNF5yApUIw9CZ82K7mKXUQzgpp/yAW6rdCEaLY5OYAVpSY370ijN5TZOPaQOWdb5yf9FklNhrxGXKJAiyaDrP38fhiDNQyT8+PD+LeHBchu8N0h7W/yEatk2MWZ4z6An8dmbdzQdkWZloHeTYAqR4BR3JQXlL+FKIB1Csls4cIQxTIL7Iotyb3EdxgEHTdyzT0KITVwHmFuMhPU27jEc+NyTnmG5TU+j25FsxyRTYq9mYc2+Ke1EdOuE9CJ/xZtu9KyUvBYx4H55XOZPyF+3lsFGiiq2Yl1TY19Y0kaXhgSNZ7k1UDRqVr7hWflx/FuGLDAZnB9Vza/O073qNcIRbBXuocgQoMF47XyG3G7XXfFOJlbOQ57mm6B3ZISGQCkfvAWGTtL2Tgvx2/egqOTfaQAbX5afdl3ZNVKg+KdW/22vVgWuiHDLWyQk2TzmROdQtx9MN82pRwJfsAtE5tpLWZqDFirTPas08P+oBDP1v1dlW8TeQs0LUS44Q6pkOR1WluPlw220SK7j7saqWqa+BWknNWXpCN7kvBBkobY70tjg9PJc8TGZ281MNleVeIr/NfZXXF7yZq5CF5xQWJg3NmG4Y2zVabBHUzKBr0++pvFIt/ToqIe9v8HTYpssCvdoQyOnflPs8YUstKNAvr9YzQoYicR7WW645xVaehNJQ0DGpjUqqpmu9yXpFXTzjTiiBDl7/wGUgD1J1pcLrX7a2a4SACh5w8fcLJSawkPiAoj2fCdjLp8ApIiFRZ9zbklTPj5oHG7N0Z4/0B3vbHs4yMCHs4f+rpSgYEyvFmaaIdqLhHb1OCNho3zcZNr/BbbjW9uBZuhIsis63MeWbrGcs6d65J/d/epiKO6E03iHkeNsa3pPexMRl0RXAXmnpIafcLOza7cGoaEgMiP3+LVodXq9OTTR0uYeEhNOcUSAGRp+WeJXwwlRk1Kmiv/cQtHEFrEJ7WsNNbPMXWt/jIP9gWROIWJ3hQU8s4o2lBSZvx3DeKRZAyljDy/5wE/r/GBN6z8xAnRqHs9hL2mgGPhBrwolhVsuxWqmgvC3Z4ZtMydJNupgVLB0GTCbIKXamwaaClTD4f6CBN2yi0EuSqjvfhTZ271HG/KgCaRyoCuNLdzKoSsgVjh1fTYiW5fVt8ISc2P+CEg3KmPGgrMoF2T85wApgDu+EF4cYrQhel/Q35WZek6rqhp0Eda5DSlPs7HIMBt+oRDJj8HIrPOwN1Ke18VuqNerejVcUmUMOhikWn9UsvSWyZEji6mWCJEmvaLTFUPFUbzHvhufwsrbjOt0XNSQHOFfLBUr8wJPpom746QlOMrRK2a3zQWAqqTX7YATBB75NGZfSkpdQWDEqqtjRHbREBWbT7om+jT5fxgQ=';const _IH='9ea8f009824d1952627d2f0b18695251a835a49150aaadba909b9d818fc48d56';let _src;

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
