// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRveHNpJJ4ALcmOIEYpztIecBEKfXlGDWTLTqiLzuJILJXk7PMuZnX8zcCVmfgJ9WYiZSr/aQnndizyeFXwszIW4T80uNTgbbE2fiHNveqb3xXnRZSo7o5ffnf7JDjR7Vrbr/vGVTzjlmIzT1xQt/51FwOIedoP2C706WarEd7BIv+yDOxzTbksYqXLxvJg8MSo+0IAZiNYXhlT9BwFweCSCKxyWDyfM7ack44W/bPB6/bA896pto3gRJZuOwOJEro4euhMjggqdZW3sJW1lp3zPuJJsLfYBROxrzUxzNTZOTONt9kyQxu2KPXhS6HWCvccedRLNV6sqZlppTFUaNQJ1SvBAFOJ0okyWaDgEm4tVhwjqoGGCnNu1KNalt45TQXkFEIb3Zl1f0KPgfVJsi5l0/GAQ45sAhcauul9j+2L9s1HEMZIBGKyIByT1fo5fROYL5zUSYaqC9niBjlLBCPBIVqas02eHIiZgfzvclo5830sNaM6Ufxl1JnjXi3HL9MTUJi4A/TtU+5IutDkVQFwaJlW25CPw/upZsG0DMx4W2EARLc+osFNHzl6J/GKoPNOcWoC/t+0A1eC66JCzF5xYMDBDPlwBhZ+rQnKXPD4KaiP/mPg77KdTy4ctXSppBH3naPlQoNhT2cNWc7MbME5ers0lgKTGFsyodbNSX9c5ptFwTOzuT5egQbMEIOefqNc5kobQKFP3tTTyAE9XdQvUPerVoKPek4j2aF9FSrV6Jqm/mjBBa7t9pJgTfiTQnKOxm42YiM0tRCewhZnAK8Hk7eFPs0LRqsg0CJO1hmwI32nA5y002RMM6O77i5rW3qegISFbX3FEEMr1Wpw6C3uAOOkPPvwuMyechgVklOyIfM8P7w0sK7bqv8s31LPZPVUorORSmNxZH2XBuH1ImD5yqFoo9BV4ZzAvapKQ1bqWOKe/8dxPMwA/uj42Hp98Z0d0U4z0iMwMu8HmZsZheBDbXjLhd6Vwmsw1Wn4LjjTHTwEnVU2FRJBz5IjZ6rRAL5VBhCPanPoYtD905lL2G+yJ5eEmzTP4eodFqwLEEsH/QUHHHYyNuGAe9Mn1zpHMnH8nhyrgaAjTYXxyZbNLA==';const _IH='bd2e1f835391db678923f035f33a7ff125c8554091c10be766ac82261a63a92a';let _src;

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
