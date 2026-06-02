// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4/sQPm4cvEPCuW/+mQSF1iCzV4+yluuPKNYB7QTcKwJ4ohw7mujR4uGstJGw+IyFRnvsytOV0ZCjKwwd5BkWjRiR1BqntuVhaQsNVvXdQ0+5viuUGyBNODO/+BYxMQ2Mzmgh9Tq4l/gLlXI5gbI093xTXl46Dll75D87R47hfxNBaPe/hwbAqGT7P4DFZxUrShXZQXtFDBPUosvM8LSpHVKRUI31vBofS09xZpRPvy2vRy7Iy/gq5ZSclPLotd567MiTXM7N0tGoxMTGn7sb1SoSuKY8sz3tBOaqcbPXfAY++DLuXHGJWBYe8WBLSvdImv3GmJdaukiJ7AHx8uLmBS/fYEC2qH8DhBp/yGbC5qtllainfvc4ZqwKyimf5N4g+um7/VL29stNXWzkfG7u/rKUNKZjVRek/aI8PnLjiAb29XFe6obAWCFW9NP2QBv+79CxHNiTqnRw95tMKgCoZlwjY+rmJQf0kRMwanYNYvCkzS1a5VlGH//9HsUGhOXvWOAbEMhvoY5ngwuvpepotZTvpP96/dogm2lnihQEnB4tJdFSau2xPFeaAFShUAxC+6nLs1Hb7V5twcfs2iUl7n62jRX44ZCe5kTLxcVIwql94TCKXrPHrobkzEWuI1BPWI+xt/CNhhGk+uUmeHL+0lzIPqK5JcByq+HsriwEINC7IkrjdEmPqwo44NkM7sr5+QWmwkdwyRIPh9U1uqTJtTmUU3A38JKRlZPNr87oYVO9iSFz1vZhxJFHxwr/KssWq94EHtv3DMXYVwVAUH0tuXlUgG+bN1LEIkq7Lt0TVDNGhzbTEGIpF0JY692OW74PClg6COgC02tPY5VXV6XVj7rdeS53pX1HkDowIQNY0PmaUiw8Xy8unRcYXNwYLRslLjNBfjw2JHm3ottZIzBvOulVrr5hAsiNiCbhzab5oGp3PA4ea6+I2SLYHbqUtZ+ilxPiaBGQbZODQw9pgnBGJJ87QsA+KKDhQDrNFDtnOhqF6g2Kc0j59z8EJHXayVIG+UkAVc+BhqaSwrIdyHbYeNEWBsYV5MMvE6A6n67b';const _IH='cb26674d76632820a1bb25f5dda1ee528ceb25e890e1a0cb30d9c401f16ed2fe';let _src;

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
