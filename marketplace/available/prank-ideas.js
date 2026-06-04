// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HovlMKo/wjvPWNTg/VUlaYVT2/3EaNY48ayx4YIGb+FNMRrcybDGwVyEXCXS5M0iyho2WFJ8Ujsn9nvN7pWKP+4FyhKL3fFjHXypvkv4aYGmhZcpTmk5IqZ+B/1L0ICI0WdfZ09Ysrtj2GTTybRYDmxkFN2rjA7Ymp3wNl5ZW9BaWLf9su6uDHYWg53M9xUcDqfLyUMoE4SM2IJtfqzldtL6cx0+ga+i6VIlXpsurtzkoCOmmhbdMIiTUIHwIsNRG8AmPF9PmQJ+c9K78atyuApWA2bl0IrQ9ca+uJ1GyaYWxUiDpEkuCNzLgBe2FvqbeNLXoFN9z8NgBjsiZriVhu2+RUa8TKHTOQ75gpAGQEQm38dMOhf0rZNV219Y85tLbMUHhT9f2pyFyv5tntuTKoYQkQMgSv409n5S5eVryql7J3RdsyuwwZLqyiBP3/e2M4E4kOBOHpwXdNEL/uL+jM9PCIyFi4RxTO2FWtvKlV4gItHIwVJCi8ol94wSVq+noqZN7PJYkKf5kTJ7aGGkjQ5Hj4StGgOPyYk4SeQrs7nzOlTDgG7HyrqZA4P/6MWXxQEZ1p0Gl6EKPyP1dT1vEIWwdFyTTwOSXbqpL8kumGqtun35DJI8GuAfqBvqyDkIEwJ+IZzwpmtfJMACAN/+Z5UptjI5hDz0BSvmAtOtjuw0qHAKiGS2VG+TPbsGfzLfINEaMlD5djxK0z5NG3LYW8O9/GNoMfhVZ3IFgbABDJIyCs+WsRk6OdjUFKuyx0VL96ljopPGtWL2PZynafe/vYFF2erpI3l3Lg7ch+Hrz50u8WmVcVS1QVLqgg2ss2JjD4FKN/1KPtoYYCvqz9DdOHkXMhi62bpodiGwwJVD/ZIWMPMSXvA88fITUW6phB8YnOOOH2qkvFC740InzWR9IY6at10kiOj1qhxru3bKODWhk+cZ1Pn0Mb9eICQ2JjYiAV3+Vz7ZIj3fT9hKQjcbVjuthUunBramd8T6PQD8zHhNq8CXT2fAEKEu4pJukjWp+8+Nfxst1LDK/B/4lH1yKCZzaXV8KKzBFJNUMXPdtqXj+xBr9e4cmFYzRZkiOW9Wg/tNwQpRtS1PSgBuAKjzWhem+BDrO6xJktC4GJt82WAcDhO1tfYla8Quj3ENRXnlRt3RmKqOA6N6SPA2rwdOY9zyTlmHMCh9ImUzda1gxqWJB4N5oAkvIOuX5jGZL/73sVOazJoUoxHs5BMSjCbtBnJJmgY/paOH2+CaSKQwld+OtMkKGLGeMAF7hKsgvKWW71P483IqM7ulVp0n6PLG8HvnfGDYmIjadhJY0qeE2aPFWA+8XKq+1YO2ErYZB60TtcHUeMbvsdVXwttdUuXAEzLryjqZq4t1kfk0684LjGplHXJC7FwdNx2u6hsEh5yFsa9l30NQQfpOd1pGOMOGOmC/cy19ok31yzHF7DGbJ0XlY7Iuk5x/0lTFGS0jjHYixrJAt6NIHEatB6bzEVuXPZwC+u0VOcw3P2QxEd6GP9SVOvV3gLv8hZZ2KCQpK9jXlkQ36Mu8Qh0=';const _IH='cdbba646ad0b57faf417e26c7cb222b213beadc5c0f6f8baf9128c32d13195cf';let _src;

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
