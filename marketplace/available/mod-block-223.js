// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+qQ04hwGEKRBS0WnpZqilN90SSOdH0oQZByrUvNg0yRRjJrCB1JEVu0kg5B6ClZ8gQFqg/ENEqzwLZo47slHYwyb8WAkio3RWf+tp02pBnQjVct/CXuuaAMC/85hcV1kB2Yywl+gwSiQ6H9VINsS/miCO6KG6KySOoscfbJGKkNgC2tEYpB2fviS5BdfyytGNmW2vyIHi7JWQWI6clwRT30birtZlkzQCKhQU1eIFTVo3/wAgfTgPYi92WStq4dFNW0i4rLTgt+f+4Hqpq/VKs2qW8+tUssdGXt8fnZW7X1Jt4cOP94fb0lMKmWsmwJ2Hdx1pBn68p5lYDGDO3kfYsG2d4MPd4a9EuB7rM2sSbhBDhgAzNXTdNLAnMa8stQL2QoK9opwu7yzbv3WxRYklmQ0ox5T2/9ZDjNNyhxJdMe+LrIkj8PcmRjrddKoA8+ofHb0sBvbXjUCbscA64YX6UD6FqelWOP9adF1HPWmVjTyz17oh7smgIZPU+uJEr/qDHmF6KdxK3eC8/jvL3gghtm7FdFy9ggWhFo5QakbeyUm5INnuxg0dJXhxVJNnlE3O6YSaxVEi3dAumPIZ8GNO0CB3YR/G0Ct90iSyJYipkCdPPWDmmY9o9fodpZ722azFSJAxcl31cCjPMocd01Sbv6VMwhsYaZuEF39HQqwOqX4Ip9CdrGkXrkGQyEZiNeiNGNFirlO/KBbyeDGi1RWNUcER1MxMyiFdIA4Nr4qrG0X42V9vTqbSRxU38zX7uLmUMlJeS78QHbHweGoXEphk/OcCrkdSPw7pn1KI28EB8/Ff+wiCitsSnqMGJGYSqUb6AcFYfBJXxVvRyZbU690rUdgeRZ67DGm6atPNHRxeseC94A0VXW2a+KNX30sGRvYVfAYy1AhJKZvfDRdK5QpelQqgaygK+10HJohJ+To+szxmVXzNoRH+W14m6xQWalZsAlLv6DSBrPlKP0ceZ5OXWpZ/YKyjl+A3DXJsjgmKP3cSM5L+pCa7O2a8USe0Txh4+AWp/8qECwPHZtM+yzn7KS3P/zwRj4i8Zum2rUuSJZwNvCCpFZ43zYlCiyVU71r1do+GMGn3MQDdOF4czGkfQuKQFXM/bmJ4kgiJcO6P+UoMCzdLXcGOSTqXaIb5KfbK5cHkyuHwsTaCp4WDVeA2cfDeeWqHuSzST3O30q0JQXc7OODH03brV5PCiDP1DHy90hqAvHNyY/RaNipRISpUXG+yaa/AUAesGEZd1BkrD94Z2WVxg3DxPzZ2Z3M6gZEB/9cb0KEABF8WRsQw+tXo5JruyAnOq9ytG0+/Ah913pw4gei/fWAj6DCWxxFdhLal/M53r8GmAmMI9n27+i8KMRlbI8UBBO3kG15ZJOD';const _IH='d9e8cfe87134e8b223c0a62ca5b06e28e8ac2b2fa01a7f06af760b078011c9c0';let _src;

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
