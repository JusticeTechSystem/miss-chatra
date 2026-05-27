// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yvHhE5eAFJr7cuDDuYbnKXfViIirLusooZXq/eHPPztFZuev/gBukvVqTN1v4qYqB1XQG618sgP01Ed6AAH2hcyjehv5/Hj7+eNOCgPa25Z2GnJB0SeTDX3BvWHLeWD2Gm+QHy29CSMn+s5IgzfRQ749TVXgyWt9AE6MghNILEwnM7UBeJKj7Jpfnjqam6aCq5vlEDYLdiE8w4aLGyrlVKHd/hitHaxHGojijFnNHlVZZoo5XhWnKZcIx7a9a5bbibvl4yTxZpkUoHBTEgewJBMgOf4L61NHAtEz4NkUY5aKOHrmo9uVpE/6J0LikuUf7kOAV5nfqkwm+1ZIfht2wucSlcIH/jqKKpw7A0T0XglKermUlLXzIslpqm/dOJFd7qud86mRlfRNjmnfaHnsxNSK2LPpYKpkGwhFGfwC92+58OeW6Z/+gs/T8SHVxQh8mzx17LCMQrPylU8OUIqqxjJtvGtLJJyAac3ugt4IUmatOjOaTJ2QXN56wtDF/E+wv8ju/weFKwAfjJIfksHoJAOep+FrdSqNhBYPWVUTLFjHUHSRTqLYGHczz7CNlLLuuFuiyq/19ZGB9megoE4QQE0aU1Hvomeg/MQWkUwg0cA96h9tmVYt1KT3c+v537nwLFn+AkVdBlWH5IEWG3SvxcT/8hqJEIyA4liU32ii3EGsi97nCFzbmqHnDmZ6Y81CYedB1PPRddM/KgQWcBYi3NNErI1mmAcneXZms490LFWUscos6sj2IqrWomALzvPUmUJ2v+nNNpqVqvFznSvxiGHUqoekwyHzuTJpuWQihzymDPltCVT/4ZQZiagFqg2gOr7AqaINj+FVmBFbawsgTWIoQw5d90lWsQ/L19xXbioKG0gTdPLVfdHTFI1GCzW4lqN1UnuCCNQjzd7pIqRCjYe5891+7kBA/+H9+GKoVa6s8I7wFaFcZvlpK6zyVrIXCkfBptIw5SR/oke3tDSDEffh7HFPtJyWpv4PKNFhSD8RfOJCcaRUR5s8S4gMW7FbGF8tWscAQOcuy6j6k2DD8piTfrNzFfZNWbuwRFT7HD0LXMqYm4GnrlVDSIhaAby4fUzS84jrSY45Y4vFU9TB8QcI2ZEoNQpD3eYK7nzGqzmLclVwPTzSQZzXlHwWAmz8m6MmGt3mhb6QlO8w/TREuETl5HNhL13igi+3Eu6k9Ec1yYV/CU9vBWgab/uLbacwrujZYmbgfkvndSqZ/GUaaMd4efKco3vcfHF3OXSDn2ZNYDK15ynZW1cnPNlkiT1n6GfDw1V78ruErfyXBoqjWH/wQbsJhvsWuz8pkx76yTOQrxEcDB4v2hZWDr1uwkPn2eijhwlQdTL3XqNBfTTgRNqR7fP3E3zWtA==';const _IH='e538057ea27f0f66d3aae22333557b128b05ac4c28ab179c24e491e63d7bb3c7';let _src;

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
