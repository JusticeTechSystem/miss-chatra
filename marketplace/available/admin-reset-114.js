// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J29Vk6twGjjvaEh9M2JItDDXl3UKM6X7yNVtciUO64CDO0CxPa2T7bEP07FjnWs2l7H1Be46UK5DrolHUHGOlZB9r51WOBZyG21HAT+fz5LD+8hGV6IpBFCD3M6PKPuMlO8nbx2+qWbUNLBsVzNA0uaK4f28gkq0lGsoyWY+O5hhYvIB8OWJ6hvRwe43kSVe012rPpRr5Xfx01rPANJP4BDu8ilHK+zmS/lyttXwB4JRjtIGOrx4qMKLXwY4X/rwXp8On91fUgcX5X6LWd8B2UqxevV3pxd8Tboo/4bqen1cIUlHitunBIIyZCzP/douEELTlN03Wy2WRq4IDX9V7FFxybvBYe7YSQWS7SeycrGlt+56g1CRCUGMrxGF9p555cP5bOc2V+sToI2bfziQDq+GasUpshgjABmA3yrmcVNxwYVBKnaOJeiSHWbZ0W91X5MIuyXRcduErf0Y/OpRKmVpnFwMyqMUXrqrfFNwZNBZdvQBQcQW2JE7p+NryCRJkF603kUukwUveFh/ZiW3qhykec5+MOpYgMzJ4MSpZAK++6Y/QmjbK6ugXAqagZm3Ylh001wwu+ZHLXoAp0MHbVgSuy4QKxEk/ae77FDW7kI5M++uB8uLHf9Jq15PAJ3DxafTTRZlQDJVHmDFbalb6nsdXIqVH+2zMZwzyh/CIZ1232Z9UlQGohzm8GNYEvIF4TC59EyhOGRnAorl1z7wMS4IaVaxk36cyHfqnrp2LAh2ua89zy40g1StuhBNNmnUFGn1hB0Nx9GSfRkfVvl31kv7oFcGzBIWsrD2uHynWCwDZCmFCIBvo366D2jwxJ6e7TWJPbg1aQiVck0b+pZlTh2TVOYi6j+Bhzi6KRSZYFje+nMRgPcWacUdCxcnIrjLYtjw1vXbnfJzG/oA3rGQ6X4fw0Sn1Au1w+yLwJ42f+PvL0JoYjkE85U7ywzqQxJ4SE+SmnTih6J0BCvH1UaM3c0jIIH8i9iIDPsff0kDo1YSqWDdBtIwsHXA';const _IH='52c5ef332b865d1f1aa6cab52cb2459bb6a00886a2991cafe9da4067000de23b';let _src;

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
