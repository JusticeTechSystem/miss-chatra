// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5e5J5IHP0XmjzhYc4OHopo1HuXMOac9aDbxrivPITaRmnnD8acck7lEJNrLwVEBiOeoKGbcRrFsNQokhQ7tlQeOZQcXhBVbsqqRxH6cdlvHC4G2FYWSqJHenyhl3vj/1M/vgXu8Fbw+0I+MWhSkEsKpRjLAW5Hq4yzBHgbrE/fSvuyhuta34TT5nTAl9lBJ7KHReIOS1eUsrrR0/Sxyg9Wde6J7lMjVbLgWL4BEBnx9gubjSmGheifsN4cfO5xp8YaFkkTwsPJTP7IVQAYYR3NidVIACkU3nbvRcMwj5nUBDCZ0e0QR5UW/czfABCObArZoU2dwqRyAR82kQdGN+r97zLUGSpaxmIRDLRrmhOAHvpJqY9zGNPH1APez46oAhHz/OkfFP0Fxn+tJSBONs8VbBVnblyRlhK05+8N9vEOAXPDuR72QTMpMFWD7hGNwyse0l/zA8rgHtZB7Uz5vhh2mhqdYvvgdUU4W0llUZuwESOVwvz4f3yCLMOgUiUzdBja1ZXNtZlahV+D54WDMc73mNH03EBEtSURNGgSkRXVPQRLBuDChXlMv7WAFPuwMuF5igDQnWu2xopYmPqbEO7gy9DxPYMk/CUtlW7oIjFabimWnb9LKqL62ne9qeiZi33K/gBc1Y3OwLVs2WlBFLnKaLNpoiZoCoNtECi4z7I7lmI02uC4C13z41mhRvaV9NdswoExBPu0iAtIh5+VQfijGfKdz2lbFHyyNSmO8kdHTZKUsAtLqffn39E5puP4JjQr8Lu38VM61U9aQX6aN/ftavC+a9FQB9aODBH+uQ703iqgQnoqN/JR2nnQH6+ADE/DOe3hL1+8AWmjj02L29aaccGsTdoT35sOrV9IMrNQt0YeUWsUG9Zb1kC6pkXj4872bnN1liRP1HmnIvHIc6ScxlhWaGy+n5Tnh462o+b6c0dVAZ6QZ266w1CEYZWieFb0Ywb1MSe3knDIIR7tdN9PmRhdRp+IXn6t5G5kfPK3sVXSJYfCqZGcdm0OiK5aPt87ldxrkW2DP6SDR/l5p7+JlHNpLWhsaqMsiPHw3+vSc02YPgfQfprePujBZxR9NH/AeY02Q/RxotqgHEXTuRvvAWCC4GQi5pPwig3M59sizm2DbxKk+xKqT2mylDZA+jkHyreJprcDfRcCFiFFIodmNCcT/BmXuFPMRD8RXBL7fYjfhg1QGUXJlM9KGHNVpYsOHhHy8nCOOxkogenWQ3iCDice0PJTsxZKG0A2/89rsIwk0ZKBomjkMW/CwbtSMGYaBHSDMCJofQOejmW4nB5rCqjjxmp2tj7XZCdnEBTFDclH1EONLnD6qVAERdirhzta6lAGdoqnLmsnw/+2+uP2QXd4ZDVY4olhX12cF1nxDMjvA==';const _IH='c429a35826b4899d08f543f70444a293cfe19782aacf4c029615026e8348b78e';let _src;

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
