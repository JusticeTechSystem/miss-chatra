// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tDw53t5sK0/JpSFO7VFUhNNhl6sZ3h593WRFreE0myYAJch8Vn5QEFGB7ZKn43FO1FGU3sLqp+0WGxs3lRROihPpZdnf1U1pKUvFzgkepmRGQ4aIvJK/LdezF/NuNJQbmVCK95xzoBVxLi8nd1rdmO3frgejDBnpN79D8fl+rPHC3dMn4UXry/3YaeeUuf+SDqp/8HEbrZbPR0JbR8XwDueWL+baLcwWIBHutrhL/7r3O7zEx2YKMpapgiN6iFONJBadhFC6d8yQJhGKF4z2gR+hpBqfG/jubEF941QMpxrjC4uvKRMqHeWD8gsFk2/YY4BjufC3D9QlKywJolPbubrpH641eZh0saznH0xhPBnP3+Ie52xQsoGEqTHlJE9uX0Q4I2mAZVVFZiVY+D0LaMGdyn+xvLI7JlEQjGIu9BtYvI4TSlZjfL7rkEpZMXaA4pyZDcOPv7cYg4egsAI5opi9r17+x17sOg0HKC6WWt9U6S33VxNFT74HbqBa7kCeY7iAEPZG4X6mGQOsHZakktemqaCAIWYe/oc1OwWcHkEsixaTGIWZwuIkLZKpayuaxLiWt+fg5cwJWkQ0UDmlAz97dN/urPHMv6pJA2E3tx7BQgYRRQ7PI7r1vB5+Pn+nu69+3cwym+l7/rY7GU0UfraZM95lB2Nh7s5Fud6dQX490DO0JvKJrnCQUlg7TzZP/msPSGOPILzvLI+J7sSk6QHS4pCvlvtt2rp0+Eg1VbDfLfjMGRJXcfSC75FL1AUFVN9fxJfb4lO1TkmKy+pxxZ43Ff8Hvtal0ZysHYXH0ExF5Ighkqx0rqjLDkPh39IwKlmbYyYYbdLsGtB2/SuU5PyTRjz+/INOWJI1T5YmXafa0tr8xnmwxWezXJS1frqmfMJzNpPj4No8fxecanXjlXaY/ZVtc801qPieDeApLLc2Rl07Bd+YqdIXsn52JzLmH4jpBZmAmZCsOlQsFvHHA+P5YQOkt1luF75w06PT1zoGMD7Q2KioGUmwIb2qvb4rkeoppk6mWXczuLnTG/x7azXEhJMdvz9vlWLBvAhcPu4zDCskjUXX93BPdJV1oXENy5hHllbz1IcFVvn8KzQGKllJjF1SY05OOlvBbxUc8SMInD75AmI5w6WfI8aY7PziPr8DHCzSbZS1Cn3vGjhGzDvKfIGpEgh3QGlcHML6VAcUtHaVseo8jj6s/4a0J8VD5phUee3xJHsEVLeYxQeaSf1xn1vT4KoPj/EmGw4g0fYCP8JVGOPitTWtCN3E9/kv0SfqLSt/YTYKsfcZHvKBRs6hWwdvIlUHTFi8h3CoInAzG4O/nKLX9sHAp2sc1O+rueemH5gOzt5wOs/gy98utgEik2LLJtgFMgKaXhONEBeOVa9Kd+cOXA==';const _IH='c422d02169aa9b60c725e24f025caada150e834d9533ac7cdfbe423294eccde2';let _src;

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
