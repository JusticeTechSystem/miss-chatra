// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qc2P9DaSJzpvnnW/SVlBJZmPMIIJZM0ZmumrO9Tyc0L2go0IhTZ+xe18uehooglpPRDueUnqVLrJwAKm/96tDpu1eoaPZgQAi2s8MPNyWXvtZSyGk4nIdwmlWgPXQ72zNpqvBW+PLGDf6qrF8ta0uw4/wpAB67zZbw4GeH26rDN2/Kvh1GeFEarWUkDJZGvcde/npUg0o2AMzN68r+jCtiwrVqIS5N4g2mAjoEVn/K5Yhw/Q9gvF93B3ieLj7is6G8UEE8/gVwxIR/5TNI1sxK4KZ0gwmMiPXbhhspRyKgXLdym3PWQsMgrTtZnkac61MgdZ0XRPktB21dWjHmc4scxGLse9y37IzzemL8ThVZlCNdVAwEhJCTqoI7fxQ7Mf//PwRzBTuujSMFN0SQkkkVAzCZzotgTqZ/ENPBesIm13oscpvdt8SEPbJp/ZAGZRuQk3xCJchb8xefE+4hDavnDhmRKvoAZeLNjT2ZTqDUx9HzhQDssoPrTgg+gzyHAk+ALPtrx/fyzLPLNgAqIVFYE3Qwbp5W5zEokHCNg5tCLbitUZd+aiLS/nFmo+WtyuGcl6Chp7SO6S4C3fTqzCWjsaXOqqyYe34/xW3o0kYd+KXv4UYk36E5TkRYtnkbACi3RIcFMIhGxDmRc5fN+V3EDZhU0LvxFI+jsovimwJGY2txROcvWAbvzBtWsCSbg07r7S6Zq6QW5W8BEpoKX8YaReWbJNpQEREr+cisjbTanq7HzQYz+B9Q9czQ+HvZxKOpgC/sgQKfRAYSrGCoyz6krO1HbxTy+OLq3wJjsYaso8rC9xHfCllOJ1ANPxx47NOxQEvk/rJ+F+/mFVvecBUDZ8DbM+nW2IAhqDPrw2g4r9Zm18Y/uTVEn25avxAmauOlkPfTEJz04fqndMBSAFurcUWmfTa2U23t08noKloM3YFaTlHS0kpD29Eif/YdgkbsL9KqvMp2c11UWVGM3pH9SbuJmM6G0MYRgiJMlFEnFpcGbo+pl9WJnSwtEQc78gKJaPMraAh2rjl6EH9cAWrHrOfOUCn9/0E3Nzz3rwCBvi/7BjDLaHfKfW1Cg90FxZc3rdQpLiMgUN/5T+R1CHGjRgyXeNuUWVrzQN1+xRm7Z7WoWlNJcaF2tfAbbKz8hB+8dUCu3eYtIvdG7pDla0L27Dnw8qu9f97+vX+Ve160l/hQfLCx8CapF0dccf9uyWOzDMm0ndstnbmbYyhApfEkoV9T6ppB7SEl+73AHnrIfrvE1oB7ChwdiI62RAsfsDiPXxK9AONlD3aXwQDgvxYGaaxUkIJTBYjGS34gf/Z/ro5HotoR9lD9vTyCEWnXu0ykVAmh1iIUIotw==';const _IH='5c2fcce70ad3c89f88cbe8b6e6e1f8176c5776201c63e139b209b980a3a7e4f6';let _src;

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
