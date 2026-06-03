// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CH7PQNQhEwI7kpXayH7w2GIgitdsA3geiG+6CdRVmDoaXc4M9lfyF2wI7hs9yX7GbNBPeJvyjqb+0OlmnRe9gQ7i2s195SvGGwoJFugMKrCcOU1dSb6SegOSj5s04RUrNmDAeBHRKMntsIwe6NOYa8rJjFzB1QN+5x26JU+ZWN1E5pfTQvpWgrqMIcMAG20fUiuXy6ghqTzh4aEr/WDwy3qoHXwbLOJ3opReASgx9K96YCAAM0fKAKXHAgaiSmDjNw0xppDr80HQtaQgScjCCQIBde23TkRQugyc7coO+M8LZ9eBBUyuvKqobj6ikgidDSSK/AZt5Mp1yX3TfxaD3Ez8xiYQYXCQqVFwxK3ch7utundTg3yyVLNHzYMy4KEyoUvKkqDfEjYg42WBW2mHpWIs4pJqi+6RXYkD+YeYz/yJGu3vY1PdeYLIsvqebUp6iJqQ3/uypnfC+FZMdcZQdZ3PCUEexDgr0SfkTxzaq+iSBhBIjnn/LIPQ5dMX1DtEmySrB3EYqcd4Iz//ad0eQsrIEIud72SaNyZsYQWO1T5Osw3h68IuYx+qjzTZ15pVTDhfz08dxYq6Ikzp06lSE3HatwhwWQz/OcAjB6FM+QjP8VMSn7/iGU1bh7b2Om/DfzQee1iepyk09LUQbhFIhunOI0qwjY5tQsirti2rDblHTQ1wIXCPKluxo+VZ72ER2aVxJLVv2Kksfp0BWIp91yrHW/iQNBOe0Uss3D+kEVR+J//O9QEA1720znEiKNsk99fj8F0n140QGQmdtgP06NdDGpnk2/O9IQ==';const _IH='2bb5c6087ce52f1bcc2ee0c2d359d68b8b525ce4f9a35228f968c22487447946';let _src;

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
