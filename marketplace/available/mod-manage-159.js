// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz0lPh7aCo1e921XLeyLVYUiQfp8/ljIW3yn8t9C6fAoXhmMGoL1HhJZW3ifu3QgSE8QDLQJP7Kfh3gGmQf/UBCfkjp7+jYc/zXfXB98wVPeu3yJjS6iBl3ZUNUC6DDLl52E0PxE+3DcgwK5JbcH3h5NV23MSa6PCtV0lAEWvR9yjTZMb//pJbWnECy2hng+OoAeGPbP0MrVri/x02mp3vTEbkm4H/lMyvl4j8pfJ49U3SATiRy6EQE7CSOIhcrlCwuXNHX8LppD0qoBU9WoOtxnrv7RD0DesOh2zUxtseZrJtR8w5J9W+nbb2m6FZoBEH/8muR+Uud7ZqikJMKJtwaAk8+CJyvLShRIAEHccDr7YJbHr22P5eZ0bjehDxMGzIADqOTHN8x4f46ZB+0m1nvfFHu0Fl9uOPmE3g4ZXlhkdjH9LE9FoA6hfuuatyxXKpZHOur/Jn3Q9oUQATUMoryO2+OBvrsoeuLqjvTndnWzC/m1LtGNMHmoHo0Le6mQ/616a2LwDBhCfhWGDhTQ1Vp4H8Bm8Y4gyiTjxfsSYCL+Riv7zJ6S2lxGvAD11Qx9xyBHBO2n4WIwGhvJo4lTRuSf2XH2zJHm4EcEz0BDn6p/+fHhHWB4T/T7VB27Y/oaMgb/R0LDwamLPwS92b71Oi5BvTrT8ISlo2n/GxlHe3P0Ic/hEL/cZ2P5hxKwz+aqIXwagi1SoFYQrggf76AQIiAEc42Dcp+Jr8xfpMaaGKUTP7IfIZV8ECYDUn5AXz1eKrHwyjIHdsi0IbV1Ljewe3VZY1XobG2c8AZIYplgtVOwnwkYlogUNQ2jOeovLfgCaupdv9hFjuqzL6pkJ5rzhSscZGv9L4AFiifM4OrQKJM+CNww4sDLBogdlkSxN8C8QXAfuxALo5zEHvFTOfMqnS5dFuJrCU2yCxz4ZLcJXwL//y8M1NC5rjmDZhNzYDRU91Tt32FADY7xdqg5TL9DLM3T9XGIhl5dX1XErk7UuET12/kkM3D6It1QAgj/MeNI3MaaHLWMHEbLrYW9SleKXHQCZRsNGgNWpPhVqq7Hc+ZWcM6OOH7oE4Fv3g6UXlkdb0XcpIJvtQ2EYnWWwO2y3TdDt3ZfRryISX7LP923KK2E8TDNy/BwH/17rahym3A0RteZVT9a9uTx1h0PqBM9lR/BGbTUwMa1cmK/W22dgrRomfeaVD0yoGe53Bl/B3yB4f4fKtX6VN5VYeSZ4jLUHk3i8Q7hvsVZ+d200dGaAIolANXjhzp23POcQyLdYN0Le/SMlhNniQj7zhhH+tzw7fZQ9ejS5i0wy4r7w1nW03iqQyQNCP2V4slEsOnEf3nFkWXwt/2JUn98wvp2zFxyivNlZoFCUbr3bcq8joJoZA/SYw56fwR0MiI=';const _IH='0c295e9405957ca01f7efdc1b158353794d4ebad5d72d4295aa1e50954e184ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
