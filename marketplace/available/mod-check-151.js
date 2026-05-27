// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l89HeV36K/cnfmAqQbDpa3AMKpwfFvoqD1Es7Upyn/UIguRXC1oaXAC+u3+6+Un73uKzgGxJhZRpBMDU8rqLbzdW6q/4hCvSuiKCph0hI7m0l6JRE3qPIsYCEz4vZ7HSr6r9LScjWT1N+k7GPXRcL7iVsK4iPkQCYxBecDCShvuy97pq4xje+S8FoQg2QffFMfz1tPbplUW5zYMTraqwPOlyzDlCWA/vNyKRLAY0F5n9MfwVrgrwtJRsKIB+WIRu00N14v1IkWHKay3h1QhxjJWzfpgYrIrasJbgS2bqCEEoDjrQ1PszaPY6DWwxjwUnr5OS3LVL2HJvHHjgyXh21IJ1G/2rB6mcD5LARrUIZA1jI95n/F1/THyL2R5cjstoegeTgwIXiXjaNyM2/DBDlD11noZideAL3SRtQjkXaGKt/9wzIxPIabpjJKB9bzTER7gasPWygS5W10fhdPjelQ2kAcfG/nORlQmzxUMw7tEE8B2z5JGxEUVH+ju67KXyIsp4O4YmHa42wi3cE4luGykAPsDQ/bBMLzqA8oAXHMEL128FoD878SsAX/IxUt0LGJYWsGyhb7Nhvkpb2q8yI4rXevY++lFwNf4FFlc3JWnOJ+lUTBLnXvrvaNiMwmfdzNWtF0ovnN8KoXNhSlhGnsFmEDMtnprSnq1HYADfynOzF9h8o87NPWMbOJIA0BjJXxneZoQq22c1q3ByF3kZPrL7AOEKf5OfcZetEO7T1BvhXgbVAbyva/uYkZg23J1bg2b9cUHFDkoDGar88Vhhoq57NMsqg5j0EL4SyM+UnTvv+bOY9tWj5D7OtDcSDWYykFTJBGhhpgXKuBrHebPF9Fl4o4v9SpjnYJM2vIsiuG1V7xVZxBWa9mpkPSblzjqgVK3AB8q49uzlRrRUWw5m9yddFsF//sqIUakh3n415yDp519c1RCXfvcyTMezGsBCnBmqAtGy1BO3g95I1sCgC40l40/BEJRG9qkkHgebll4XqeHpx6Q6JqSTQHK83XCwlIeyumcL6ZzLNMfAQ5bTXMABVeBE2XJXZ4dbAHkb7WgwOAuYfDgLb9Uni1oZNmKFN8lkszHBi8m1Frs+y9hOgJfRU+Wh4+skPrnAqtDphTbHLKj5GfKtS/w25RsClyQd8sjKPecsNC7dajTrFaatCdEH/D1OzvRT9q6MEylFKgGbBaHUC7AgI+3ajb/9QPoBIsK8tHDOLh+aZFk7tLKOupogR73SeduSH984D9wJvsjpKW300YVUAxHc+ndaV8sQXJlr8q+o0+L069ce+9CJVAu5dHZN+QXuSSftWd+w40WWzHXrRePGdHITCz5Q3tcQNBcY1bUDx5OH1IeCqwZ5EdRzi5lNzfayzGb473DB';const _IH='5ee81a2da6156fa1a6b2948c752ddb0adfd5fbcf18702925ffee43990040dbd3';let _src;

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
