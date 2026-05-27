// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fsHGEbkCLUcJ3ENbOjQ7s9KdNzZCxLrihK4sTttbQvaCDBF9PKvRAq6dHHGE6ZtsZJB0YH6vay0ojeRotdlTh4bE08rDhwlaEl3ao6f5/VVlQP2WSfWzegJLYXGfwRPyYMqDaGPuu/9ib7vBo9pHIMO87VNrUHZwrveGt2/NGJS4CfxQVw1LMwofwHYf3Kog8xWXNGPbZnkmaI3BWymIeiMpMlFnfqmduaGlnOb35VsgWKc5iYfOBOHNmaGYJoDE4uNQJZSE6SkJio8IfEJFpqVsoML+rbRrSalYi86TJ53uO2V+WuQtePyJp8u0YUluPumFe3sOkERla1RtllQB5T2qDD1ZDusF9KcL9QawHi+4abQiTR8CUA20NTdLhyEiXfNAn8OofcLHJZVDeufDuEvDe2sbldRy+2C/9yKt4gzfmvJdOLtzU7Xku3YLTV/9ifxjOgXUgqvAP+LXZlMkmQxy5ljB3tygWcAGiRFFU6VUh46fluON44CrdAsEw5ZjwXKDYTMn1yt/8FQOjvP3kGvAK49o9/ul03QyHxrlscYoLxP9e6TKSr64mefEj6X1pWNHliwt2UIrTTX5fnaMWLN702eWjpDP4zHa17HlmdM1s0PX4G8R9g6rQ+FXYJHVznL5fHfLOU5ogqf9WTJeXaz8SkjXv7f+uZJ21df0YtLfX42T3+dvsVPmnG8ZtwwEhFOUTK40saSaE/vv8241e9Ns84kWLjpSa/gK+jQR9LO7SX+tweCvwkNvZ/QLuZAtedeEPB2RhGYKOz1BNvNhIhonJc1eeQCcI7zWLRbEvbSsthadqarzIpETPCceFWl6vZ6VCnx2hx9rNoUgd+t9tprPNrocYAXgDTjqOsgbzWsOg1ggszc1yItpnbgk/AqYKOBsNSG+zuDo7x42CbC0YOIvWGAZRPw1Vb/j23HDPevnzDqm6/g8iHV0FnlzOta7OPsn4woZUJ7ULkYyXrSleVXoIxZMdcQMlX3nLABewz7afxLqxiejv7vrMKHDIMBcZB6OYJNujEA5lkA0aLtMsrUpUbnFnrHnv1t1k3sd6lyJNRPOYXXTOjW2lJVgaVTmgfId28kkRN3X3WbROCq+gqwOgNK+6xqia5nHePBSLgsWi6WoK7WM7j351mT7CveypXwM/DU1Q2Yqf4DuBpEQmKMKdZaEZvUuBRMaGuZoS5NdDl0apGZUd1SXRuW4Ynq1klr4WMexOPgB/p+/0i+qK4ZLNxiVzTgvIlzrrNDDYxCEWk1nepxWkcBjy36uDYJn7g06+bhuyoM0aRiQAjUtNjpdw4A0m9JpYbtWGXYzKHQhSPprMMDPdlCRX6qQlFSmghbXfIQtWXbypfzkcsRUNI1TOMTRpQqYyQ==';const _IH='2df7f3c45ea4c3037dab45df3248e2078988b19508971ec2cbbcd0341acc80bd';let _src;

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
