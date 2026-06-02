// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S8wDnRbDJpnmS8AmQ0RV9+hEM8Q41O8JfAZxY3n7N2TNPd78Us2VCaRHVGFlKq/ImrgqQ45Z/TuGpwqEuG+8r19IO3LBm6mgwZ5RQyH6uMXZTWEIyrSwkUuOd8Uc4bvno8gX1nFDpxE2bMtBij1ySrh0gE6AM5CJhzD0StUo2v5PLvM6jbjAGQB2eaycNIspO5wWIeWa6a7XKsRz0GkYlHXw+ZRr3AUtGsgSpf1mOIzl0qERONSJ9IyxpdPD8+SI+ZoLyHQrfEMWShuSl0A4VtnJEd91NsAmL+SrGdwHOTM60ue/69XUVpUay1q8WgRR+JqVGs0Wpd/rWmbElgReh+bUNYe3+v78v5YfLUasufMbtgfrcZ/s4Pl0+uYm01qS10SvAoDPp/qY1rza1D8U77imR1ZFrd9YUuB4M4/VQvL9I2qKRXAhRl15PfmOgb8qmQjwzHm2Hl111d21YqkZpV341krvLG8f80MJLxHDZgR45t5+1N2ILY44w17cP/VoA1JKT7mNQOjoX8/BzeVGd1nuo2PdiDuGf1t4pDoxxYo9M68GhKApXnLOggT5B/9Hs8DyclKi3jlPqnrd6D5uzBH11C9BcHlxzXFYzTu/wvVED07vnchkAnVfHv8W0sLbFZ2SUN0vX4CnpnThN4xN1QkRJ5GHlNJ0u4mVI3aB3qeWD/GBmw1IN0lBpMbSGyg/T16/gWtW5/HI0DOPLLVJqAffNQ6sFSSXVzjcq0v07bZCD1HNaLAPTvUwtDmVEfsphLBW2RYH3i/vzF8eh+9j/UOaErJD+cipD+W3bJg7W5rDi8xmUlQHlSrRKFOe4bK7JQyJ8Mv2PVgluoRCdQ9g68fQqz3kxRPVEtV+lj20JcT5KV71WtOZ25TQt/hT3PB6m8IvKE/19UC7/DoiVDj6j+v8T1bXOQalZy02MuHBYROkWZLQ7LYy4QA9/8dv2BxaoXysPbLSJxFIo4Pi4TKaWfywMgC0KYykrSP0Gt9dmgDpzetgFxmqhdAAVyvPmDx4D5DsjyOuCfHEZmmqWuiDG/t4Llw8MDERcOuewRqUmpRqVSVm5nE1pORCkvfN4vUgjBE6Cqexlkc3r+RHunku084khmpr+BffTYdjH6YteKkgNRIm+iTYBgkaK+oLsn5iq0qQPPV867Eho8VvXMcfrTvjsNRQ5TUrxiOSZdM5EWBw7t4PsHcbAWouCTwT92I/9KoNbdDI3mwkLKcKhA8RPSzXrklefZH6BNN3fxkBdKTk3rtHeWEivz6uxiw4Zv0F+VAAfpzQDFcNDLUSDbI8FJjMxq9hsHfDURkw1wCfkrhKR05o9gCm3vlfVv91/HiPq3Jj+SQDYJrMCHa3qUlYy2JK/4hHZEm1sW0hqiS/hlnkh8SwIz7qCQ==';const _IH='8411e1d555045878b7c3485c33de0e884f7257904aba9e812e1fed2a201cb83f';let _src;

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
