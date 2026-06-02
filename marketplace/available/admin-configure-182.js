// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mk7MEpz8aZcme5CUmDxQZsh4zTCYJ+xKlTdvOOeJywOQlWFJaZ3WzBD+HTfBHh4CYJYeX1e8GPHFScRIVPtMmUaD6f3jlwBdtpfZj6vnFBGOL7YtSbH4TDJpzMLcfzHqI+z/qDipfMFr8xXEo1hj3iUzECeVGoDq+DD3kKf8wV0Qlh5VIqOWOhey1kJfV3gmNS71wEPvvu7Gbqk241ewKcLxXXhGuRjvB3njqnMFi42BdBBLXrewZQV4eyrd2qxHXm1aDgKAjyulfPbWSQQM5ACvt0lL4UdkGu+BsZ5c59q4DnYkkbD2JmCYaybRqB4v86QC3+j8LR8cBm7B2k4bC2ZzN8zgqtRO+GcBNropfh0D+P/wtWbceuzzX5P/xJFB6u1QyH9CNOvhNRHW/okBDUWUuRo79mqu4AGKcfb39akNoM1vFQEukfiY4HOE0qVUWBHrCSac+4/AFeHH2zmDjdnFq4+zG0gTw3uxhabFoDiv7ik6ZPKIsCceVwK/5qcH+DTRlLWdUOJoWdoRCKEYbqc8MZKZt/3bUXc/xbU2fGYX3pN8PlM9WH/M3W/wq/87mS2m504vzK6NK/OsFHIC1PuT8EG89jiXnRz0SyMFUFL+rnlEACpt3CeVE1YRkLrNmb2ACk6G9VhluEwHFHaGlT96lXrgBspjBN8tMxJyxHd3F5ItbHOC5ABOClv2piI2iXvvdUsmh8glvdMKxpLtN9EVNzN9cLE0AMnC5S+3ASQYpbchXdFKxC4vM3+Dau0Fnux81Ncx0UGQVGo2e+k+x1rxFHrbRlVQTTnuIP0McwJrHtgB44IQ032tvrU9Ml9Au3F2RWX3CUSy1Lt260ddz2W/8PARo+BF9Q9Ec5LlrafEx6x2Ptw3+DGKVyXB8SPnNzkzg87WCQOZDPLsn3bqw4ZHz5uZkt0MkRv59Rq/stHOiomNvR1th7BQ9h0/2capZOLhBwhW0eox6fwLFfTJYOQYjwGi1MYiEK8gcoHNRlIeZ3lHZLSRuEqC07mdqJYQw7WWMJ8CWd/madWjXNXdClaPyrRwMQ==';const _IH='468290b5b8bb8565e5f11b9bccc2f25f5c389be9622089755aff923f4a5c28f4';let _src;

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
