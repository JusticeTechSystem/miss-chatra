// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUUDWZHWePYT3FoO9rtchx2Dv/ZhaalYOSn1bAJkYf3sAXR6V9Z/n31IZn1bD00SFIAx+jBfIpCb1+tSOJUIRCy/pv0svCTS4S4GPKOGc14BHAwPm9qX53bN5/Lm2OYfaVTqjcqFhKx/9yoN3DHI1oDOS8jZWgAK1WUuWBTWQOk0wcMrYUN6MCjCa8nE4Iid+CD32hv/CtbpLsVtJ2EsRW/qpVJfGUmkb7m7gHSBgIHgyf+dnMnYFreMUvudB85mhFw3ZZy3T9UBYzMp8dqWCGBoHspVSz1cTxdCQn+eC7XohC15SBCsHWgoeTkJ7q4TSR6Gfr5U2467qGGFDdF26Y8NnouqD6z/iUNV4cCFVkZYA6x5BMYC00JXmIOXeXHh0wadcb62qQvKWZdgemRtXQTo2y4npbgfon8DZjY0Mp/kMEPTLiNs7KZvFHXeSRURgq/LRsts/Lv6DGgg0XjIU+TUweWQuCxlvoQ39kiUf67cUwlwxkyMPfXM8nWozf3oEAfT30YsSH/mnGx3NgXIZe9LO7k4ap968Dz04pErJSLlBggt2bY6BzIKGXeOQ9Z94P7B6g1ypxVgxNbXHaxAxQ4T7XkJxBxXeheAtdis36j/rWTDh3xGnvIVZoKcibuP6p8wZ+1GEZspMMPmthtiq2O46roZGppXxaHkfT796PTczQkpWe3H/S1Y+5O28Gwn0d/M7S2oL/Y4NK4wJVnay9Nj3WuuhOJ0PfkkBurJTlK4BjYROUE=';const _IH='c1f6042ca4b1756711b17eef7b16c693f52f9ab6f14444a5d70d165cd11fa701';let _src;

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
