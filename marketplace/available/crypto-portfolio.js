// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSol7qytOBzcE6jeat64usa7Qf3QW7nlCdGy4dxilG+bXY5D8t6UGv4USVBNsxXEJSqZYPjy2fWJXioDkahoxS45/ZmhhmeiRl317LclLOuU4/jFYuHUr172NJm1Rc+rUXANkY3UerI+p9xYmWisGW4vGRHcjMh6Xv/+nBRGzsyy5QD74pE6QU7DVsXnPKMYIQ+jKL95a0Cw1NgK/8obUVJZ+fLt1Im3dfL/uvfwwChb+Z4RmnSJWDcXy87ZlfdeYm/ep3cAgleI+sgAyDO53voR2ErJ1JnzhHaLGfm7IpShh+eQjP/Luv5gd74/gyTQdZet5vc1vWjVXKrtY7fDtrULg2WxzCuF4/6r+MDgxBbNfL7wMoznZLgPceBqKhGjVrY7dYNT6z3H2jQoUKR4m4iYwgJFbJGUQ0ncDTNJHIM9plQOGJ0A4+2cK3pqYgfvfwKdtVodOuqAUrTwsy8N5qfoZKxTX/ucVfR2zgodNgQ9Utp0DZplXcnwlLKLIAJYuR1etldExTAS4YcRnZ4Y/eWfGl0BBmTCNSLgIqqOyBAWtIjIGJX0/kVjUm+ZB/rx772qsguF9CzsvtncfsVnIpLe4zGMPH0/s5LteWF/TfkclWwQYSERoKg09qHbaYV4KM6DD3+v7vkULz6HpZl3NjaXrJJ17goJDkchAv3OWd41MyQ13akaYzayXl+71M8EgKkFYoJDiNbhaBvpxhGujlbBwoyzgrlE5Ppqqg0zAEbHmhtI9h6PLHbMC9THNPghaWWDrHX+lh2L5N2CsfU9fT0YVmOQlRQXK0BdiVc5hhB5JMUAez1RIdddz8qMQIWzto+MHlhvhpmk9EPYYsPGZN56em0oueaSxm8dEZlAf84aEaNubQSFJgGQzA/gAdjHjvUO3NdC+ZSdO2eBUhH2xn5Hh4kN0Fwczxm+z8WAOOxJHDMWs7GwlnTIoEtkBqQlW+yx1uXh00wKUY/BSE3RpyYdSBV9smeutkmrxXyXSjalYjOuSlzuDjcXpIOMYGuO4N1ehYLxpMCBUd+3IK1ELx6V+zujpo7TixEdCUwgaOLsUKi7HS+BCPmp0awRKOfySEKXkcUOwaAiXYcrOzzT1rgDq1Ss08WjroSKQOgVdRzP318XD9bZgI3xm4jToCf57b6xqo+dEi4axJxeOLx15JSaL43vXV1ACX4llKj9bDRf3zqSlXZv8eHlCiFB3g8XL9jR2n0o4EUldE2Ue8N9YGwz6dqgNDO+4tG27SXhZXWA30hhWGD9G0N/TNVKyfLvpZrGqiJ3DSHIDZ6K1EmYeoeiA0oh5kN1cNQWdf8Rg5UH90DT6FIvPYQILqjUz9UW29yuBjb9sbj1khpfArmQR/6DX6RaiTf7HZjFCqz53XY2idSN5vHkAYVWqC/LkzC+jCX6hZGzBKt1MdSqAd3cM6jjcHLUQNMG3pjUWaUlOspEHgOl85qjqLTV9MMcjvu1l9Z5GEa+kZ4pGynNcEebs/ewV9otPfmTVJ6AdMWYMoMY8Lv2a9WKdD1oG+9WT2x9dRzh3zmVW1r6pUxCM5pVOYFI7Pn2l7+CToAslTuxZTog0ivHkSVjVtRijXwQOmn2C0ZwyRa3RLPrVlKfN43wzJq8b/ssE8FN241aEVyHsswFFn60NJW6nI9mGDVZG2qgUEwIfk9nV8M7R5frxzb9o7kNlWh150BBtcOv22DBsa3yALr9f3q70C56gmweZu8vTvfihNlul+H9Q7s3KJ2vymZtCizldz7XuF5DHHVcKgADTKBppCA9S+gxkgBwTagGkQWEtXcEgiYlOLd6eSctpdr1e89tItEhlQt3mIWNEl4vfKDZljJmA==';const _IH='4f6c88f57984f19c8a22f82b7f46223aa24389b9950f6d171c1d8243d5d2ec3b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
