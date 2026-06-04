// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b7rumq2o+GBws4Bxe5JxaMO9m+VdiiyitPEnP4HaQYkDs0cBbCaHwkNNcN5dOrQFm4pdBgf+j7O405k5U93WLhZciEK6v6UJ74ARlTz1IW2Zk7becqRKj0724wDKq5ZMn94kMwzmZx5euQOrzebefERzTTNdncXelFYzk0R5DA/l4aaBBrGQ6YM7ZTiPHOqigzoC5G8MbU0YmHBSwtBZXcYnXATVW2TdygM2B1TneUNBq3MgRT5DFPgrSS6IlvELoKWTC1mUk+Gs/CxpKXqcg8jn+jaRNfZMJjyWVBoLO8d3PTyaNZ4B24yJrQfcYESwBeQNU++xVTO5wPUlTICYWrx6IdyIPJbYZlBFz7OukWCb/Ph8GBoTBJ3wUBMMM+EnW6RXsWyJSa3s0LzFReppS2Gv7+HvqxD2yHJlOs52vAmMuSLgr6/uIaoFBBGSYvYMEkUv7v48PacPBwWCYFW0V40syvjlM/LwaNbOVHoPeCoCWC6mBK+o2fpO6ohFTUPyPqPA88VgKcDEhO0hN/oq6KG9PO729MFNGy4cc7X30ypsZCQw3NPfc8nSg8MweU2eHVVSPITFh2WdsOoA5AwvPSuhG6oOuX31aD4QHHGqapcAPv3kBfbRW+r+atuoQuTiAy3yevagy7gbQUET6A6J5G80bTg8fBCiUEm5depsEPV1ywVhjvMahX2bVUUwBvc5LWe1RExgmSU2oPnVZ93CQuoA3sWGrMIl0UwocmoITFP83JVoDI5H9tvV2+03lXY1DX0JnA0RF7BTHSj1QR+KWigqAFPfwkXqv/bTJ7V0fC4I7qSWnCwkXsMccreUAzREO8q64uCAr5Btfiw0xJN5p0WSJkBFpvXCSJ1EkEuGqM5DclCcEm6QzECPS3PQgQ4VFumn1UkAw3aQ454ZuG8gyezRl3DoZuWgg/FQFwtlBKxYbJREd5C+0oVCo3MUajBfPGTDNDe2e3UYDsVUGAxtzlRQeVq3ah+gVChA7R0ZmtLfCv5RV9qLbBLcmVlF7V6KxvzKX7D1XlbEOrU6uuh/ZiGnGYfqjv7y6/Ko78pL95NUt7DV9rXxqjs7ojV524T4sE2F/vrKXNdyieSG8Mlq7UOwUk99aFWG4sPpCabyLZvV5AWXW2WLBBRoYJYRZWS/1RFHYfjXhcsBiNgyosRsrq8dkYYYR9lRRqBSloZ0KWbmJdkByAOTVExlen40L85Zlg==';const _IH='74655d0080b3bc574c41a9c895ccddfecca0b0a5dc4c708e6842c2f1a97b69e8';let _src;

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
