// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UOkkn7b0wINdwOsc6F3kJq2HmQ3bna+2caej5C5PAMYmBBH9FLHdQXnzHq4YscekdlSczftjhZ1FeiyJV6+X/49OGzn+KTRc63wgU+agSve0vumpG016cXIlkDyZUxG+t/X7OsiXrW0IJHaYl9qeDaiIyRFuGtWq5sHZE8KCuHeLoKgY4rjQehxxUiebt8bJR2+g92S/bJwwWKNWAUOhRVDkYxFmjixyogYMY2eZgUXfXqSSslldANf/iXu0LDDA+q+NW6dXZdx//zp+P7K6ZPqOSOEIy511VwEI3a3IGW6BLsJCklebg5dIypvtPPgd3T8F9VTS8EUdRAmolxphcbmmJVL84kNGHqnc41YoHSSqFcjSZAfODzeIe96fi1oKmow1+hVQfZ/dociWe1G8vg1TRGF3XzPfNGX9czvD215T5+4FSx6sGIq/e6eIbgzENXTWuAWTlwC7DnPPVtuapBUyad+YdsI6H4h0rpupDjvmLmzeTSi7nC0PnInDkyVOUcEo+3jI4ZC1/0BtVV4L5Vhnn35eMUE8JZmrzMAvOSVjaEq4qNlItHOIkSOW7eMFYOLTSFVfX0uD8kUveIxdnJ5tJwUJVNbkzF6DNKCLD+yo/7KgiFiEisC3lqV93kPw4zeZOaS5ic14MxWLG7ehn0aM8uUvlsmm7q+yCWKKOdgxTz1RpsMC32lTLfdG7dSS/wptrF4WzJJ/oRkuXWqGyHqpIqoSDeVpJlZGQ6GfxEWc/izw/POjzLDhFYAnebURp6ad4zEcXkdvPCwsnZj2X+1xp6JYGYZoDhLLQOvsfdOM2k/YFiwcbANaWZzaaQnhrRatZjwbCdvTfHon6Ll4Maoq6DU8ax7DHFJZGCsIqMn0EUw99IaT1zC0HZ6ieo1zec1NqCpacZS9B8BIYtveyk8YHSTkuMCR8OohCBohSMDu7rTOx/4cacN8bu11kyALmivwuVTGe1JE4mh8+6RH3vn//lrSUFcrXFoHIjiAtTW2RgbmBAeTB8Dnz+3m7PS9ZxC+HwWt8GyVvnD6xx4=';const _IH='b41700bd26ec725ae2821ef7c061d9784b579e7e50ae2122a3d70e54a5b7a3c5';let _src;

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
