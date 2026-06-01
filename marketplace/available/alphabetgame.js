// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9K2xHQelm0nbBvIY0Tiq4h2NxZdEssu3+Sv454w1fzfHmHlDbt5WgWaZHxw6bHj3L71wYLCqldyqfnK7L12mEJvcAVNyY3S7IiuWd5Z4d4CS6Id7NkgQCZdciIEfAcjU6ovPznkianJ1vDQK6/llwq5SRspnu/Bsbh0KLZ1chnw11vflaUWTgLOIYQ5oQzE98P3JR0F2lzzU+5j0XVajCLznm0779l3ZqI+yeOqCf9F7Kdob2mznm4Zeft8+9EMwWubFJOfi9JBud/8S/U2PY4BYINvLiIYg3w5hzl6RUxMuDwyr9+RbDYXGjkKXTCdff6GPrp+daD2FvM58KYDA6pW3nQe9CbXoCFPWu52L7MjMeKTWLCEJMslpxBuzyi/zdYW22VCrWf53F+aVf9vH9LAyFPfIO3VHYAqB9IFiRKi5+8Z0RqdM398gpfWxzb8RfNEduEhtJorno69N9yW6fRhGzX8xwvGHvLlDcOCQuMpJ6lMTCZVZqIYmVQmQtb4q90n4iLTnxFQmxSFT9r4dLyXx0LzNilcpLPTFJgvTUWqTlgY7BHTO2IVO0AsyAYa34Q0yO6wHNcOFDBTCjkxN5gfsLARsQw3tlsY7y+6XoIwN3imB7FF2Z1zhMNQ0B0hyStrkxF9iQUjZnZ0B9qDa1iMxEwLX4znQtUbVjNmfU6RC3UCE11aEVolqqAVUtA8xmMppQHLp/dXx2XPz4tCUbGbEI9IL1PATJYQP7CpZpyJrFqzk1WNqdlPNpdEK0PQXV5pgq/qWAXlc50wJUnRS8MwYfg8UbT7PtULmXGtV3m7CtWFpGSxvlT39Qjdnsxrcaq1zvykwpz5TjPq4vWgulzDlkxw9LkLhkP4kVZdoRAH3gnXd2c99qvPPCW39qA8zI8gl5ml9xbl2cV3rRhlSbDY9rZU1BDsZSKIkIdVKyQ//q3tWAjwaW7bejHnEW8dI/suDPe5qmuMwLDPxjghYu6steMPikQS4dGfn2tG0tdePwTSLUo1HUJg8HoqwzgomTu4dAGsGR8oy0Z/bvCXCM7ukxXEmActp2O0kEuZ9RxNfP41ZbaXAorUxqH7NEYbRUeMcX1SUQiTuiDiTBYUdemfyMmmv8ViojbMKR7JKIRKtWSMtgT6X69Uc8Bv6HxIy8BDsSiwmOOswGo2rSXeEIftKpF6/iaNFLkHi54HIM362WpdidR4Oi/25rUjLtK98Ju/tV8=';const _IH='051227b2910f19a42dd47562967f12a04f9974684a38ed52354b64bf710016cf';let _src;

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
