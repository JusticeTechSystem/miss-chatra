// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+dr9ZXeivafMnFMua8fwwJmNlHo/HgYigKYlfC4RIOflUFqjH+vcsUye4vVEV5zymNIIE+u6NPM89qICakQb6srnZKUCDuin9VOaMddGv5sdptWzjpxRYMAmYyFx16zmm7pbVwRwChwmb0gCUqFvgwdd2THoJM8ZRCwmMX5EttX0jYObn38RrYiesj+qEoPX6XeNQKe4844nBVQVvZo20y94N3L/hWZTT87A5nnfvIQz1ZxMG7cMpmhXNRCPH4zhb5L92fl/btpFdz+39yl/k6csmgpzG7N7gP/f7e/kQDCYXYWhYVbbZFSqAST4ENU8NllBJRjr4NVpmSfQ8zVmsWp87yzXQ/vOcpUQJri0KX0vx8MF5G1Ufp5/7GHut1sIpLkhjbSUgkwPVN9TarrP4UnfIMzWwTRtt4ewNFvFZLvQkaPNARpu/Da2iTlewoZYLc8QA4BITbRdU9HrFCV6xqSf4DLz7qejzhsJ9d4fa0DJroYpBjd5KBzP7vOgsbMo25WGM7T0O2Bbfa9Mk0yil3TnP2MSk6NaQMIGUSiqrgfRlJpckawcbRL+erKFoozFkdLpN4iXNNGoMKhDzYBu0luGuoKtr7EbcOgi4GITIl8ejBMze3djy4jaXeVzn3w34AZPyGXRKWbCRfD1lnOOUY6/a5nqzS7ftf8Rc3cjsH10l68h4wybazcMYPsGXx1WvUrOtcsCi7e479CZeemoNHonZ6WqG1PPx7POszp6OwKY+sS49EQIwOrjOrMJnC0wgZJ3tPaQ0sMh+p3fZP3Am+53D+rA0sWFQsto4SI92rl3CvrGbLtdMOrFxFgLjJdhseXi21fB0XO9bYon3eUq8K6CmwUhVAypsj80cxGs3OvEoB89RuNd6TaiPGUwf8ikInipg33gIDP7JY3dan+VtZ2F7EJf/mQXgWOkz4VJyunLU16O9yeHdSPSw3PlbtAleRu0oKx/Rg7zsLYyK19u4FVQfAM1nVyc3YxSccgd48BaG0xMib62H90Kn3Np/pMYtDnfnm5SxR0JaycFVBVtqWmHuTBYHpckdrWgtzhHbZVwuYjkCqclm4F4ri3HuJuyc0NYbzFdhILjZ9MPAmTv3ZmxooVFhpRd4T1EsoX3vlGHuQNx/iGBAlOrDP1cakEzN32Nv2VXxSXnX9cfzSjpEh+GMMMXGHHkloCxcxAzm73J4IXv3RmqvYqfglE09SLH+l/OfUm79/+fR/ePyX0jR8PjBh5YzOvJL3jp+fEzDhR1XXceMvZyWnYuGT83FA2oJ1HkBuIoTcb6emHxTc4REM44JLwAEQ0Geesei8t/tsxQoYj8Z0sreXOsbovprKlTgeM3x/vGrSMDk6jRwwkxOxgzKKtXSIqJ3lktsBcB';const _IH='8da8fffe4f394e9f21477f9f49daea5bfabffd59038e9e052d8797e7b2c087f8';let _src;

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
