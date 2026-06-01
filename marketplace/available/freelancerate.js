// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1B2mkTdcHp1AbOQ4IUl16K0ZNBIlHWGE0AfYz/ombNtAYszkiSeH/IqXcdmCE7O9ZI0wk5VqW6HVH8Fl+6BDVR0bbLU8PZ+UoY0jU4Um6tK6hyZbKWg05WAs/24UKNFuuzrB98uNvHcqa6lriyQ6+14JTjDhDtpsRUQ0VTP6nj4nP0fp30mJZky5Dcm+MfRq6rkUaIE12BmzzOHUBnOPjlKOWyLqVEA/uNTVj8z7FJk1opU3nxwbGI7tzfekvJ3s6l30AJoTGjj4BBlva+Irl3xIcom6VsVms4dUTKHZuUzwgDa0IHAMruyZgGZ55kzEoxkX0NNo48ZuofggzlSxUMzSutuwBF7M0rTgGAaYSJhz0+vznYQRxIpqVVOVRYWmRx0FFC5uQdPD7MOJcsNURnxj7LgTw6wL1yqFAvNdI/0QVaKNlM4ghgacit7kh6nKX4qbTA+/dZxwHib0TDQrNnPKensySgDdnJ5HpLtuNkR+5ngFVaUTDuzKu1X4JUeCG9/Kr+Ma1t3qvu29JaNYgvOqSiwAzCcxQIS1Z2LEG+9ZmkHrhyfMY7FEIP4GoZLioOfaFSKjwfhMFADm//MueazMwbdUQga2ElWZPZREEafYPYdUdCJFGcS9TEa6PMcXXUGsGu4o61Co7iJ6++CuK7PTbFbUNko0kcYZ7gz/vvOMkuOe8ovg6uPIbItn0VsMiN+aBHboWHJ8LkD3YVxTcuFJe4UhomQA7i2KAT7z05z4nVNeOQcBIB3WcW2M8qhkTqvMQKN2rhUGzePNGmBMULa1Grf4bhycivOLj6uk3P69hosLWPo2Ud+r8nwQ5v4Zl1POH4ifDFzkEp7qB0VFypMt/EmzexM/FlxwDMdIDJyLPX/aUnj77w1OZxldnnt57AQCcbwHPPxeB/4xSlqJiygwkrwlf8OHccLUPKG3wGlLz1mOnwVHdheD/6R9sZMfotcIaWj6e8ZT1frg3Uwio7XnVupu7XRKg+vYO75r9PbXMKPZVEbZB3Zuc9rxk42TP/ONxyI/fkRukZgdvDob0TC2vMvsFok9hZnYLU+ILoiCfPvgP7rlv8VN14eZHoNXaEQLGOZ+r/UXVh5kbzmSGWoNaaz/Yk9K0eHFnwIRGpErQtN3RLCtvBAwfzzLpRS1WBz1/i+pkgqFc81xcM5QWhL6hA1+gwn4UcuFYkdc2yTUGQb2yGvZejGxXP1E37eyxR2hmTzTNo3';const _IH='1666a5169098115c06d9a4f3270ce10a82672dccf087057555bcfa1eaa367580';let _src;

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
