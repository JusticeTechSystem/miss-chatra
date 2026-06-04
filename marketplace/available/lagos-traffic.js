// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+tj1w6j7M1jUrh6j3V1MK7siL3gRc98l+fvevueEdVkOpO+LnF7GiZm4GdAjH3T7/Fntf0eIH1PPzFF5pc582joInxTBsppJCqP74nyWUW6ucc5yg0l4KOOwFJwzRruBZQlyjMIRuqVTpSg7NuO1prpMp/TWwJpoPf7+LKhYQ2Aya6C67xfQarwoO0PYT3C7PCA/x9s6D5EWifcgRSk92ONE4csX/E2OAuSnCDZFAoZLa+7AI7xFGDGij0nYc6F96EVx1F8f7jqqc63MzQmqsXV91B3lcgUM1wr1H+PI35jL66UUa1sDypChO6kkBm6lg0KiEgsz1hH7iBECYIxkCq9q3CKkeQXtUEIIoOfQmJGrL9T5lc2zWPLmXySu9vhGHviZkufXoJ+F8zdEIhdrR3LLTsYUDiJtnObdV3mUwS673i5PgwwZ66PVUSnNn3KmNYDzEFXu1a8eI5FXkexPmr1NcCGn2MkR4UQIsJcAh494SAlUAL1R6KMCFccybxgJLZyDQbTaDHshTrAVlrNgFP1hJHpJ59Ai4H9E5Atb9SMC7Gtmyzbf4PEKjmVwu28gcTCJoaNXuLDsKY7ZEYDzA00u2GZLChQvw5xaabeYDv1mGrq2PvhCHy4mU6kSXLUXhXg2onKOIi8prM3oYGzhYC7KtpFIJgLRtO9YCfDAgsRmSa+j7G3fEOFGVYbKD2t82YliokaVaXTgejXkNUEZIGcBpUvRKSuRMgTfNevw7Fkfy9H0kAApy1X8dg2IgNI3DeZV+gdOsoVmiMocZIx0KaPT6n6LAsVNsYx60f5Ub5eiQdvlv7B3gHaSoWh9n41YUdIqj3RL9oOJ8do0NOoSVJ0O/5loFLXSCJ9VhBT4PqTN80KDHfrEVwFVaHqF4+P3hXUgEAX96pnoil+tAbVt4NiRr6y6D446d6CXnpZwUzKvPqO8GvTLOzIbcoPdd//ENCc011TD2/aZVPzHtMniCvxLiLuNJ2fHcVci4usf/0ilq19ca9SyQpn/Qz7qpcwz2e9zX3C7CsT6bkjE5kTemAXQH+OcKcTlbYcVqthRdfk/LFNNsMbaox7o38Spi561+sq5CMWeRbo+MzgVQaLQgtKfPdjCbWwIszRpXQY3ag4XefdiMr8xvOOjHC7z77M1y4dYJta/FKKKugqNGO5I5fSGvi32+o9WxIvSxFymujR6zT0yVQ7CaDJMPXY4sDPxo9xVhiJBXu+bCHoPp1VmxHpLu3II0A5PhbIhJ0d0thOGbkUlp4YMyrqF5FltJtUrOJ/6uKBpCckU4oel5xR8IThXbqRcTL1k0xHL1grQpB5m1rtY+NnHCsWUwIwZqn1RmW4zMKm9UcEIpsKLroTOQdqWXRr1c+HZ49W8PuHqjzGOXzRh5h6yZ++pHpLTeJE/0v/GlzSpcR2FoggHQ2BMu/rvrhKXHobygbH79Vk2YhB3BuCbI+s++29d8KxqJcKZVMKBYSoCYfEUYyn82Hm2LrIV09d9xHoYwAe2igXVMszKaxcJfuC36vOdDADL8ZfB93esxwzzM9WU9sfJmtyvPslXqeMFrsf2wubjZKezMXLAb6Y587MaEINBNmFupFeWbAotxjYOvPlYsZGG/2lR9zjpL2ZJpUGmhfpKxWe2gD08fskOBC6Yo/inhSjATa7DozeQRNeH8KLbtxUzv90P0/DJSdJlPQXDwKQCSedlGQrufuDXpg==';const _IH='20c6a7ee526aa98a0e493b3b7b74a7071f8e36358596bdcc5820f2e75e086174';let _src;

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
