// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w8zSw+7ukb0uIAbTPTE/0d/o7t+q8b5hUwFqMuHmzNpWyJAJ+nkeIB+iLz1hOIwgV5AmSCKVgiGw05BroByY+UKRci74IaZb3biZ7q+CIAHToqQ+KQCAlW08eHkdxa1VSnIsE8GtH8xixHSSf4byU/6KXavNDHI0JrIXKPZ1mYziZcdB4mcEHdA2eHVclUkXBN9xjvDDK/IdV8tzp0NwqZ6SFqalCNVWBlr9riWpPBr2LB2UXNBNm6//N9XdSnG6cTLjJOrrxxCGvT6GbYAl/scwhDW/N3H02FnAc3omefa+a/lEcbl2eG3UnVaaIbgPcwOp5YZPvfpM6ytKFki/jp6VbgH55GsIoUnHcDJ8LGI7foopuh+gIQK5N3vYNBXm95m8BAV3qE3A5lQ6pntFmX6Z+hnE4+4Nj8zcMhAnIn7oFCgnCPJQEQ5onQg516VKPKnyjfp3bVRy5o/s2hChX5ZeUk/lss3/thOWVAGzH2LUlfmoxExp/XEZMOQYuDmyjMtkO/zvq0UFCxMJ2vSB5sp5vrx0Ydh4jg41KTIwX9b4sv82ahvIzSTQy675jECr2cgCMsHJzgdePe3GfIBnwyztEqRdn5kW6HLQ8ShlrSRtKMcF54I18yp06MNiNjli9rblsxzqL1XBR+kC4MMSd2sU1HYIvj3iZJdSjOJGB6g52L0L8gGT8nvB4NNk0pHbqV9DU3ohgDozeBhApblqOZ2M20Vp3yDHX7RMCy567LsTdBg=';const _IH='757fc15703373689b2ee0f75c509ef45f82433a943d4a6ace781e7fab2de5482';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
