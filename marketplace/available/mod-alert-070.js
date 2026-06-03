// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nidFoCtEC3YycKgf8aL0Gu43uY88DruQm28QOCAKIHOH0/ipzHAU7x/Ewbc49+mJpjdHd1jDiHDBrWKZgXdeoVD1Xrfqq9hpqOy/2fen2W0ob3w5n7I5aEi3uC87T6JPKS7trL5oOLzWdX9+vq8CGMpe56OulGMjTRnZLcYbHKMwVnQYxcgemmQZkfFY/nusnDWmRtJt2pv6J3WE4XRzvidKc1y4TmGW+T7uRHNRv6qqucEB/dhV4px+MQ4ElDino1+BSJcJ3JowtnpJuJQHgdOGUU8KiuD9hUUii0bI0huXu8VuYamGtLYchHvIK/96Oej/MhUvivcNc8Gf9SAlVCqDGot/47fT60CuhgVgk0JrUQjunDETtmy7ND7zOuiaJ3ixYTb1iVm01pG/dUlgWifqj2YhSGlcVMf8XjTOuqUkCk6dn7i/4J2kUxSJTmgIinpAj2LgP2EWw3PRlU0gBdVKBHVS3WJbxDO80N8RPfJbpqNFs4wWRDFS/bAXCrsCcR0fiIe2UXBYXrdFx14kASk9pe7AkcGgZjeuA4KaVLvFMH1X+hHbp9ybyfUADD45pQfBYwWEIEduqdrKGdLQTgxMSWABqHLdmJ6Y2fXrtzQJ17wt5N8nxSHCkOuRjEBavEj6n7JcVafQBj7vgetaAOPjL6ybaWFo2gzi/wMrpV9sTQuswZvsKer1/UFp1Dytx7DyT/vjHciAl7HT2QxZpXaDyWhXYBCRq1KdktsiByHzc+c+Zp21+JoYpxLEwTAko/thneHlC7YIO1XpuHWC2yLF+X9CirPyP15+f0FW6VThUGZhhrYq5aRU99J+W/e6VaYTJwL5uh8NXpdyIKmUTsYE3JXCZyeZ+l8AeF8ZPx7BOCE7Uhoa8tXkr/IezGzh5Ija1Ve4gCGYYxj3t9lxcjWS85hC4mJGWmJ4srsXxeBrG68u2cRJipnFhzsPYF6K4PAwXm9+Rtya0ShX7xSehW4cBGJ81GO9iYfbNBVi3CvmK2jbUEwKG7X9WdL0KZhjOlhC7JDVD4nLn03FCgSaAQoSDQwszailM70iBFHOFoyHpPNLAhUFWgdIlqTT52OTGSVolupN0Sq67ybBMYJBKm2oKnYdQwbbhyKbTMGMCLjuUhPkKJHBqtXyspuD/xEQ3O/sw9S+pKjIHNlWm0ON6WGMnGVNQ1PGRxiymdhB30cuBt/duZbssOkMeg8cZmSGz6r94KTSQ0LUbZbm3cUZaH2NzfiVW53xuA3vamUeVLic+eL9bJhQXJfBJWN19oFG2rTTIsxMNwQTQoFhoGbkCB6Ww5pDa6N4wH0Edsi3/Px/OkQxRewCxva+bJzDSDXEwKkHYPeYma0Mnov3B75KRlpU3Fpvruo9ZA==';const _IH='d1b2c0e0bee3ab5d014d04ce623443fdced78bf244b2f91c2e0dc0f281ff1c86';let _src;

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
