// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='98maXs5Bu9Y6VOxDs7H9rwyNhymgKV9XpPZoONfzF99gfncbEVWTeuIwvip51bJ9jq/DLAE6jQnsFaEI14V6OnAaEJT6f6B2W8cJmZwvfE/PAi2moeH9U/s4j5oB4IZM3j71/G4u6cPE8o1B5ofvltrn3/IGcoZWBCLVk7iiMF1DOudN/Tp2dcVbRsKgMM+Zpc0rJp4DEmyseNMKHlNLNA3pIsit0ZcUvPXs7e1B/2a1ZEBVWKMvMJU5wHXAT+TyiaO6I83bPgTSqluL0nYKlmQWATwuPa9he3zDEj7UwIO7Aa6gZ/n3xg3wShYzQmiLXY3ArQQJ7KfM5V0lQhZb+1ygjhSFm3qUspG2xuDPKuxs7TciPAaggMsuqAC6Wc3dBLh3CNY2XkomqcrpB+m/b1SA2t3fiEcPleN+re+82vn7fulyh667mIHWJKGpZs7Vqk4cn/tqcGTRf//wObz3NH8QziI/c3dGkaLAx0zq6YthLIhm3x0pv1yWcy3mNHKoC46G8K+SdRLhjUFKO8FKzAMF7KVtia6nimNs/AHKUQ5hvzh0Hhr5NkRvb3K859SlVaV/m32Vk1/mukYQfQ4Y8AFeeHkoe6wzyXpnZeYLrzGrpFLJSXH1StYIXlBkN9fidx/Ug6ztEcZOHWlFmukxXtHeHIUPOCRrNZfqcgLlilimZTV12ewcK09JgCunM1PTrQdtWIj1GTHh+9RVzVKN9T8YmjyE5RuVS/BkcvwlBacszdSkYWdykonfTN3heoYU9HZ+SFLR+UrqSxtctDqiSaiPm51deIi/6yA2brn3KaUaE+wQYta4QigH7uq0l8EJLQNTgh2SNRe0J8XOExqlL6uw/0TjT8JFMxNyRFnBzEU4/tykAoehn2r9tB29wyU80ez+8ny9+bGkxWyOp7lJvMq6u8d8hB18Vt7CNbz5hJX/shCuqw1HiokoPwzlyXQ5wMaJTjM4Q+3fnS2/7dxe/8DzeIlGNC/5CaBnZnxv7KA52jQGvl5cuV6XFcKYkPVbmNu+zNB+lm8bwcip5Zn+vM54S+PpudOHxiwr57QsIyF8OW+iDSUVuB/qO8ybIdGJRKmiTz75EmBMExv9giuTrWTJfJHbOnkChpPuRm1X3dzU5IL0/tRCYY7hmtIiv3BJ9o8Kx/EhKe0yxM68c4MNfRxARGSlw1CbHuYQbeZ3QwA1mSD+W/QVaeEh8PyT7X9XCHOeoyVpqM8VOgVxisJRuQU0w3OGXOpDm/xOpfJKjiiRyVL+GykWmJtxktS3n8BUHxi++BQmd5k8uHAq+8blr1KUWfa1vH5K36RKHGPpQfiKy1CcVqK90d40zk1JcKlCmt+jWgHT4yrYGYwyhndSH//tg734z96Z1U421ONXv4KHzAbShdIH2A==';const _IH='03539ff220483d0d71abc7e9763e8a849014f1e66afaeac47aecaed73bcb6f72';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
