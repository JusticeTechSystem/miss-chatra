// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nD4J6J9SHiBTUHzV5R3i7Ti+LNiXDGFy6AB9oH+hz4Dv0bgbWQUYhcwtmWjzuyNxEIiFontiucTwZFgGudt+n+I6nIioJUuFmLPGFhbickFZM2jjfQhmb2HVVJj7Fn6H/mhSIefVBXdiWz9mVGtXJiZvvDzeBZYz6NTXPbUH7lvDtFXa0pPq+uqFhWdozfhXn3zaZGVHItlZEevf3pAvFCZdzO1+dsmD20+4dMQr8pxbguRyHIQe9mhDK4gnCoXOAsLbayWkgvR6rxcl6cW6djCfzFHjEqJ/vexw7G6L6SrgwAJDMMImTUtPD7GCxtojYhejCWdV2pqlH+RcQ0cpTJCi72iABJ+MitodSpNXTBmgMGD6UVJMUFvmaBvDipR6z6qD1mKPc8XoDrprYV6ELTrFJdEUMoPwRlKf6Ypya5NwjYIY+6YAK5m5BZeIkZOWJO+XmAsfAlxWKce8XPGBJdI0LDT3OXA8SlZ0vLam73FFdexIv+fuH5fW6uFQHMp4vzMskNLjZjFben0LQ94vGVaSJyBcVqyWJ/DGurUS4qLBQcGq/OhkqIOr1k18Mb4vMV0NsJULYf18cNwLkK/7OJAEPICeZsp9Xd3DM4L8nV73oNp001S5k3cgxiDFixwek9Ia4lVOwTZ74oQf/aY+2etTuCEqvX5Q2aab6z8JCmEYNDRqmweuSeYxLUAcEZ8u+QfnGPYb4GkHxE1sV5+BLuO5+Gj9HbiUKXed4iYUQFEoCVd7izgLrj1znoKdq4r8gkLDqGNaVp+yAU2okUfYdhxl6fdKR1ZgR3tXJhJxlGbWPqhmr4aNeQMTiwZZTu9HWZuvh0mXjnYrb7ZcfZB0W96eE73x6FyradfJk5HJybrHpqo1mkgre+R5dlwdAK1LzyrG9443paopl3XIfHdBQSxeT1RnXumsi2a8ak5CDb259frz9Ae9XJ+V6bFZziDRoiwrGMboJuFLNmCknReJKxNMJJK4PCinxZ3PL17hAWeR6gvBBCxacZExRnhoZbI3AQcedcQvLBzHj+sWb8dVe/SWCvYrB7qW5nQUiWolThaVSEQfoUgMZT6obPLgq/AAjquPrbqVkVogIAgPeNe6g1D9NOdPr5TwT+ljF0IT3ELCurEwyOTs58y5iGxFz4f9Txswz8xYHiE5UOhU8H/sy0go778QZuPxI2y880WOmjUlqcGv9vN8+upQ2rnJOdV9okDrWGuDKYVTKKs/9ooE23CqFFwasK85w1UW25a+qTn928W5DQsbNaK+8HBOZq9EFyGmc/rMEL2uPaGzX44be/YzJ+CPN70d1AaeuMgPEYC5rqEQzUdvCI2vXV+UDAUvPNaFA/ozhoXzujxzST3xIzLeGPSsgoyMObDVV/fkZR5Yuh9GTMQQJjRP7hXQWQMA7k+tVKybK/Vs2VDxJHhd0C/eJLvvo3NKkt5JTo04dASIWqkLyc1BV8P9gF3lRTOVvtpRADGA9VoHb7msrfcGZXZXc1OAlOZY7rp5jZD43AhGY45+Rv9WExSgBvYn7RCAlokO3BL8BKxUVzqndUh+w06F9+ch2TTphCc/p+Z4OzfCcdkkX0gqdKWMfQK4MXbknPy+u0JJWgtgfIvnhWl30Cmcsm2K1MKHxavHVOtfn6HMYkK3F/IDhiHXPPSki0tXG2tWn7Zb1a24WSjGo6yHkvThd3XQi8Iu/Gomlg==';const _IH='97092b23276d6b45164d9f04ca7cd8c81e881d465884066f7230749c5c668d25';let _src;

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
