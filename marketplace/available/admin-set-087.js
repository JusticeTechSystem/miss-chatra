// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='na8CVRQz4CQI1zU73qrK+UikCXhTRZPm/EM3R9VNTT0VDcyaembQio69DhBKF6ywXJgKTT/nHOaOtv7Bcg4HtMR+1DKFDgkKjp03S673aELMBklEwhAv4QVPlxE+KSUsigz4vH3id43d+cxYvV41TTyty7XK/hPMNr/d/1s1Ym4wBtbPugEl2L2Vx75u+C4h3nEMTWYQWnuuL9SQ6IWjVQTG33/0dvbVswILqTopm51nwPC3XElbGILj2COlD1kUHcUft5gGIJIKCUUeA1FVXSeowPZ5Af4i20MaP/TUNkv5+bOfDR6sLxpNoSYYkjSGZm4DuqZFmxFWRWC5Jcy0jDdlvd8PC/URhoSEwUdpeUT8hqi9hli6jX+e84jSf0xRvv8dI3cuwnBMdWKnu2oysuxuVels7H/5WPZJqtGYv7CUUIwDZzBb5KlTkCkGGK+74iZelMPjeQTNflpIpZgrswT03uAUzhxmSy5ng+1Rc5z6BF10jQdAePJMEdBdBCwdhwy5gvns9xr6jVrpnZg/MQYqghR/Ok4ThpcgNyglQsZ/l37xatw7E8KMf4UVZRD4uNHj43UEakrOjNMDpOTyL9Lc0Y1foQ0K5Eyq7/bAaOJdLL9yBpB6DJutRntC/jgkO6yW0YSsN1fa9So+cGrr3OmHG6AtasLLAPjcyRUV/gJfZrVwjSATfdY5Fy/2V8UBfY17KdCgQhNXl+lkPdhdPvARSh2lgz44SfYP94vt5tcJA5DmwnVvczN4Tr2EenF9S3HQm1747Et3xRFWt+f87p4XmLGGMXlCYb0N5EybZQvq+Wo0Wk+xsvS2lRcP8/qFNxmknXgbBWCPXNZrqvjyeQZo05xaOnY+pne3/okeTPjD4uZK3Yw1uKrBjcS63ONr5OQyEIdilQ/FYoQZNaDfViSKfZ0Z+fdbv8y9BcycHtfqyAflW1r7I4JeT8QnHTa04AXYtzFwIbs5zq9e4+1CQlUIhh8ucm7F';const _IH='4a9e88164c954ac42e8a9de26d4582d21f33eb2c886736da71af96e28fd75c7d';let _src;

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
