// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='efHrfNsi3clDdg0bMsUgiBNLG25Rg4q8R6fp7JQjFhuDc/2AAwiPVWnvASC3gT/EPsNwWnP3Ot8fu1kMie5JHAUZO7IaDGiXC+7jOmK7wW3t/+CsgQlXrozxGdL73ZipFHgENb4R3EQ9Q6oVit1P7icEBMKVp0gLuEJIjbpUSxwsIow2/uXKifHTf4qu5iRWQlQqVgUA6SFTelkhScyFSmI2IK/j+LKQ9tOg9lYnegspakAVUKgBoj1hOsX50KVoHDIvtXE6EoFFTNX9TEpFcZaPx07xHJDtPlwpJrVCZg1AAA1SbqNbJccRKE2KqwcJNLYY1U4cMz7+3P0QFWmkmkyPtXrmGgvdEFZRYs6OZwM4LEC5T5aCCPtbTEdPnfXqOMIquwjTcCd48ToWnf4TcZDHnxAN2/jqC3wkb1HotGQbpdhMB1yTaqvdmRlk2q0loxvwgAJYeaeOc8kY8vwTAHDMMyApvpfEZtKe+ILEaqtKXr/7/Me0GcJ/cddnPsAIEt+GpbFeQshpgcScr3suocZxiUqOlP5xmiXmugUMxY66ltDyfGAwpP24syQMhhjFVzFPSk4Tmo1Inoe35w1NBeCKvwelvodAtlyDDpAj0g3ZzxRm8N37v5d9a2Hmcv5J2epShtbSEqd7yVowQGJ7Ic2qC18wC376VgHIKQBGcLRl8Psu1O40kHLC03r3Gw4h/mSuZ7gMyz996205QJ5YbS5pjZ1HjOqtALucF+lrIw9kXPlmPmg0Nly5Kv1A8ewBetljBKwohjfI8ZzJ37Kw/7JS5YJeMqpOlBsRUMs2kzQ4jFM/++K6exoK/dc1e+1uC9n2UVwIZbD/owYD/NyaaIKz60BwhqXb0T1+A/PBPvRMNKzfdtiUGsMCi0p2nNUeMXqOBA1YPuDGcLpHTzmci7gTjLBkdTnBwByxWngW59QdcLzHaRDjzKpzjBIDf7KjG18Vcbn2tx6ETT1vjGtO8MW1tmONRa4+sRprzdMkufP9endPDOwzyXaDbYG4agAXZclry0VZoY3FcIMJT6HXH+4w2d3S1ypzQCBy7iPVdlsf8l7MuRBv4Q1nY3rBqvCW+Ov0Gej0uwqnQ1oAGEICMUP75V/YLtBTD5/6Xuwn8VRvZ/7nwstq5pDWIS3pjR1t/ULhPbhCFsbOqlw2rBQ16cmXFeBTwlCdEoe8YKcJo6UJQhuFBokX2upO3Oqmzu+clETrevc7D/wspfa2D4dhoLWbsBg1UtTq9UM11ScdWzqTv7hLdY5nxchyl7tToPD1u9UAQ/RfiDi0nsmdHNRMgwjx11qFPG5qwHz4iYY92SgNaTZrBCOu26hZ8sTOSExQiIDLKY+QPKIB1PYe0pZf9s6sc4DAKDldC7Wya8U4FilJ9kKA6oKcFJyoA7hrEw9cA6b8Aq/R9+7TvQD4b13H/tTnsK4c/0/F7BmgCJ5A3A2FCeOAbo/9EXzq/bcp6MyVmMJTwFa/gXyPY7NwpCeZjH0cFqiOeO7s6PEpnDBvlMS9Zfl510EAnIPi/h6uE2XOWTodv2PTlGg41k/eifco1LLtSMXJ1IYQS4vTiKiYF0u+2ae/Qwq6quTu0FeNHT4CCQtVtF90';const _IH='04f279ad7b938aa649b8011cb77ee1cee259cfd3b9f21856037dd0a06f3c4b07';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
