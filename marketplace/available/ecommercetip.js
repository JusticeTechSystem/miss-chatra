// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vmud0zY5/kizsnEweZBPCHK86AwrKRqR9qyYwrZLvsztsHAPfJnwyTvFzpohQ7GbEqMVJpEvBRCW8ee4MlZnnx+Ks9gx2l5Cor8Zduh1Was9n8lxZmHy2bVs7Q1689bJddCul1QRa021g7PS9mWaKvqfiA7WaDWY59huGNVYl5cshd5Rx783anjLNhTKlp1LtgNpnNOqObPBnV4lbn5+otz1YcWNLvnmKd0Q4b5oaHptTX7tygLQW2r9Gp4HKrGBgz/k+2lVfFOvkdoMwx0XXO6QVTGuvG4GzaFTEmWQHkrIh52PMr7tau3eaVyfu+TzbB+zUSWzELEAHRVb5opUq72sWVQOHibnWj3b/uSVEW0ZHvjUyI3SbfXgLZgw456QSJX6ugHEyMkHJRB+zjjaqGpfuTqCqCjIZnDguSgAX/+roo6lIsAJoXtTckoUDc94J76NSGtRg3byym3DFWKrOuPVKXvJkevlv/QKWuQD/TTnX+rQOtxPqE+8UH09Sysh4pKBs/IH5fCEdBu7Kem0AWTE8jYPCA58oBeuZzw6U41AHPcHpMyX6G4W6LXdexCpevHjsoZed5IMzXBOvJ9zlITnkCkUaNCtONS7We6doW2MvLuEoorhbcclzOIqDvcXwycAZ/rBAhrrYpg0TDzb78ngCaSm0AJMXvfB1jFLL6ZWWv6VKrbXtQOYrqc6INAQ9BM92uvWl2rOpmjkA32JOqDQs6bAy4iLfQwH/yssDvLW2sxqLbDG6TLY4fteEuEHH7DS3AZ+pA1GscPAVvuCG+S9k/aVvpyM7CzScrh6he6DjPwBOOf3P4O2gHdsKDo16IIXY1dhKq6oEhJeT/QWyOyvhfmOdtC2tDcMG3Bi2hS+aZMpr4MqVSZcRw3UM75U1eJjTg9oJY90MFiLsMDCtnmwc319bgC+gQ92jxhCgsqTQ/Wo4VyQj/TYq3K2p48HqqTv6vWKZXfs9yiFImwM7O2yFF5aGDTaBHuI4cyd7dC0PGb//wc8A9krLxnx/F7KnQMGQfEQn4yHJLbk4RY0WpbmZWMD7anYR3zHObymG8CgmZUAO7cNezk3xHzA59jjwRH4GNq3zD6JgshlympWdxSU3LVxqpXxygHcpf0NCvAn3n6ZsBKZCPRR3iNy7zYsMCKCJrDMcA990Lwhno34uZaR2juuAC7aqKCUI1p5qhBK3VjURLQeI98s9ek2plI8xK3M9iOU2BQ=';const _IH='230f911d9396c6c3e2edbb4c267e7270bf49fc95930db71a585cba83f7169545';let _src;

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
