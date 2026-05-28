// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXi63R7TqVZ3LOTuZE1WSkBYuNuevFtTVuOphvK4npvv5Y1sWZswiKU29XinqoeteQ6RP2F6LsxLmr8uzAnJ6Ee48AQN1b98xwcvJ8UdgLRTngth0Qp7OHwuUzxLPcMUwR+jQUxu1U2CzUH9S+bMFaTMVsMYdPf/B3i+2Loaa1r+x8lk1TNM8deal2YICwu2XSYsowtb3+6DOzDf50W760W1G+m8v1vxaIM+ptACqAtd3Fsn8lPscgA1MLGVnPF+S/KNU8jxkaaHe0Fj3XIr4QyY46MYLdsGCEftLEza5JlMoungSEi0ZlBwaVA/sxtCwEniq6qNF8SG0FmiJmUFsyPgpLRHgK9iE5XsUekhKFbPYYLy0RUU62T0QoYuBPTqSOg72ouvz+snx2GaIdaSpBZHKYhTj471h8nUiQrBWZByuJPt5s0HCduS60wI2mgHSfo+JLRQn+ywcygNQElsvLkyNSyS7CARibDEvv4Dg/k8Vm6B4OJmQ2uU1KLKV7avyum/tNtCOIjeashjLGzfqua3v9/yq8PoqzTuHWQVZ4qk3cOJaVDm4gv0sOJywEsv9jujNY1LEdz5Qa4iRKeVw7kHZ2sp8v9HkVneMvf1V+UvCXBANnRaMgPTtw8J41+kNwIMcyUWL0Kq6/VS3Iaa0xyVYgSHeqbg8QWHAWq+xqLUToXw+xqAT/E0dDuE4CwtNj4QiMK0xMCZE1qfKj10NcCICeEeQU2ysUUO1j831zVGQ4xEvpBNxLeYJlM4QUFYPVKQnlXR0pE+6QKC3N8izXF6xCUF1OSqIunDOZDYgEpsvPXqh8JC6oCXSrC8M083Ft6ynSB6L5JpFHk420u9nGDDF51RmYIMT73On+Mwm9K6X/472iYNCn+wtKBWmDH8PiDogmJvnl5FC5MfXjBEWceGQMFRCmKZ/Dlevp1H327gwtWhu7rv2bsKETgI7saF2uN1KfGGrYM3nYuBTzgG1pt2kkTvR6Puel9ex6abUL4QqT3P6l27/3NWrvKwOg3eQvjQbOYOc3BrNloQyVKieGSAqwol8/jEV1v9ka4Nj5eLcvU9xLflVsoqxuc5mfJG6tfXnZveKwz9yWP5scO2kP7FQbQIceSgcLSwPXB8KNizF7sdyLZ3yWIiMquq+pcE8OYAfG4x+0+bQKiiAf0VUyK9v34FSpyQhjOJac7RN4i3I+FKOP/4esLAYZbh0av1kfPtpdBwizYh5bb1BbMYtUuCpoXP2ej3VJ2vUcmtHZj13RxWwqDSP1h4Tw3Ao3iYigpz7hQUIEa9WuN3Bp7MXgSDcBz4ULxQ9bYShGgOzf7idgI+ddT6+VbJpl623pQQD2erJcsl1KSq5AWSD2DQFsCnxaaENi7+LVZGimvi';const _IH='7ba8a0ac39c6bd62b86d5a4f687f55daf04db98341d3714669b444addd8886a8';let _src;

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
