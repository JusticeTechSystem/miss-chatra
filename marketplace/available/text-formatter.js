// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxOdZQAznER2xMPNj8pBfGBQFHdypr8z9k2mllFbOJg/4lw3FyoRCns2c/m9W9GockQ48aYDO6xJsCAIMH/zujRmZ1mgcVbUIEymGGkXm1VWf4Q8fxMF9P4mP3WZKAHnvMIWmps7ZJvV8u+LP8q+73htuc/bEUOeGMl9CkJtpgUaneW/cOApkaFixjmT4zdwmH069qMqpTUv9nm0BBukPuytQJKyCLbH30duoJr/w8o97vGDuw8dzNIwq7GT7RWU4BHO0WZIH/Mr6DOe71kXjPdQyr0g4m5cVME5fDddDMh/Vs9fB5k2WtpRliP0LEYCu4YHYPBppGEt9Qcqkm4ocmTtbeE52oZotxuC7DSWlVXKdiBL6bFVIyMM84By9QqVnHhOh9cZJjDYwXwI7fSM5kmI+pA5f+VRNyinmi9rKQAZ8nBAx2NGP5L8KmGzGHk6PeKg0FGCG2bg6+3b6B3c6YtsQtLjk3JsnarxaOOrEy9Xky7vy6lydmRivOkepkfwfTsoTOi3I3ihq8Wi+WJKikNAhc3Qs/zAd5F0O7EY32Hil97457gAjQI/6CLezJRLTGe2W/sbkGqXDH+bez9WAcIG/EGhaA8NiD8csBexK1WWZjSASnXaxS5bbbIQq2k9FpoR5iyfsEOHeACYMV+2c1kLnL7bZozTvHptMF5tLYIE69supHR/D3W3xVSDf/Ub7yjA+Z6xlKJTJbNpuOkiJixmvQvPvi9KElY70QKOuzMc9yun8H2Zb7/pKJbeJg59BHJQNZgfaYUozhefYWKmJOukcZvPZrynWMnGoZ6eoW/Az6V1qXqk1zBwvfrMQx29dKhys8vvTmPqNuIq7RjOpL1t1ijhShJyaHdBQKJ4NJZ15XXPJgDsPOiv54e2mXBfrAzx5WdEtqom017kzUDNTpCLzUDkHshHq//ie+08zmcJylo4/poT3+o6TprYZu9rOWt62E9OjXjy0XHHwNJtD32Qcy/4eXV9dprNmqhyUenlVkVSZDJnfpVUcAz9/S4Y7go+LWQs6G+bTrHq2UK2hL79k/NOvC+CpjGmO/39F1o0SDBZFMsWTSyPom8E3fqGYTaGiw2ADx9NesecEU0o88JIVUD8v9okmmTP5oSEbY3ewSjJ+PSW+DhLtcLvKK2AFCVEo58D+w7vsU5XwEbuHU88Kq2LvHhaJjVHGA426naIMTXyl5Fo1Ov5hLEVS0MNE3/jc+TmXZDxwHTKwLsgojJorX8bPiL5c3ky/WZIXE1EY0/7kNISBJ/mkv/UdDYYwXZeqEOuFM3BI1HzFML6UgBrelKa/Y/rlp6J3c5NeAOJcIAXJ1u/6eUH/t+F+chdj92QOYzOfXX5zk+sYaFm0iy40P3dMidwxRfY+TDpwcS6WdOM3boTqQRAKjmLQ5wojngxG9+V93r7h5tHgyulT9rmY78yMK/umTRWeBiJgrhTGCajzRO/Z/PNumY6Qd7bZkYj1RPB4rpgDSzFRn1T5QBrSmMgEcDaIfQ0jIB2AtLjQYCQrCLC2C1qNm/Vh77Drb58wMPr8l7Al9q1iYhcL03pRRApmRw7b7yVvxiRrFR+28dO+4yq4c5l+3Ttwt6GjviRd3xOe3HebjaATGfhnvlmGMrw9oKptaeYkTbwtHoel5MO2YNmYkeRNkuVhZHzEfD68I/H7A==';const _IH='b5f25b708031fc2b0124cbf9514f03f5102e8ac0a53a5a4f7983bcbafe6340a6';let _src;

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
