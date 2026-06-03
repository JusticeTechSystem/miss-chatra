// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x9j6Pza4q3HZrhz/NeZprO1TiQg6BHPUbH1fHovLlJHyhSM1qEbN2pQOo7Pn0B1SskJGVJSivJSnbHjvcRRPhHmNbxTbRfgmka5Qbeh5ZhNYwC8fgPPSy8N+9hvTWrH97VjxUKsUYmAvoX01WW5F5fhIlIPciwzTSi5fm/6JZwPMCabJPn0PiC6q4mhTVdV+KKdEKO+Oe4O2AUh+JuJJgVEwwUXhcNhBLIbIoabMItbYH5jvRqTnGgItYxwYBQ7r/re2UJ4dz9ivi0cSNG1TUe5vxMCa4pSbseD7Ko5XJslOijz571mywKloZUxODMycgwvmUtIyqlCBW3eq4sxDtbqGRb151byFvQUBii/oCwwXTTLxHRUvUZ4WKD+t4uqf05BqeAPRrg0VgvuDbU9qwsQ6F4DunGevYBmvA8jdhdS3/AvAC5a2jMgez0fPng4Yyc/C65tFv7UVRvbtnpP88XF8nRaXPR9kE1V7eJoibPzuHtUlwOzjU7Kb3NUyf3oH5skS1aSk8OMr1yg3HWwRoHuYovS2tRnFsZK3jAKsjQV2+5/I8ztkmySfLdcYTb5gtMvNkjWE5roaNJxXNgnxoORLl9XdSuoQdCjbtDv0gq6x5pZ+d8WWTY56Pa3iOJHu0g80q0+9LN7X2ZAz8f+p0u2MF65p0NGVU2PDR5rQtvBxonofitUvNsOS+YQ550w5EY1MLuVLIah5RpS7wJF+17d+alGdmWvArvM+dxpigHfQAt+ooyV6Q2PZ3Q1S4lpi21RxJTExB8XVQ4f1GhpQrwHjk5ypD4kW4yrdlMLn4THvKTFtsyvgbWHbCy+BakSjzK83Qor/qECpIA3o2KVUrzdzNOZYFEInEMbI3jC+51fgJj6JMmoJ9+wfrWyr68IuGV6PeqOjuFH+kmAwS1X9GmmRmXvX3Te4fFbmuW9s/Fx6CZiBW6c8/vOjQZ3EIyAESOcEPcnAQaY3GfQJOs7Tr5I5zpNtD/ADVg/KPYZmG3ZhEFu8V5BPoQVnmgGF0JOAGymBclsCEmErzk3oakdcxgucv/rsgW+sujtVgcBC4w0DdLIkpNkA17lZjUduRpDJQUax/dftDJeslWWvhJBq54YD8zklheH9nJK1/5diVcePA6pD8bVHPcd9LkJnjivtcv1o6RewOPvo3Cr6yhHmYvNz40+6TmSTFsVsvYdzfIr2oxwoKPFlQcNmAE0ZylUhrPQbU7luqriTd6nW2FERw/tIOF7eZYd7xdRu1OWR9MHYRa4Www51Eaj2ftmTIPlkW7EZ08gG4TG4SqvY8G+ELHaD06qQvPnwYklXUuDAN5usLoxlsGv+ai9B66glUij1QRTAYjmvriYNddxLxk0V154mB9LLWY0Fjwhs1di2';const _IH='510136d58899ae5c15a480f721580408e2d0488f22d0f65ae9e6e28879657910';let _src;

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
