// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cx8ZZ5C0LoIT6Ur2UYRa6JI1ApuN3yH/ZS2rOxac2dn562EejHUWf2h3Y69U4zEnaTyLiXUGz6FtqNj+pqsCHtJiz2Wa8KIY5MM+RvR4SZcC2Lu2P5oNwK5W7+PIr4RUEg93H55t8IcQjnpYdSILqJKBYBGlUjWt7EGezPX3jFU2ejRSRqS6fP+ce9XSxS38k4WyuwxR8sFPZntQ3c/LNwKkfdF7a7xGuPDmdWVErA3DqpLwQ/qJ0zK52d+HFelpYK1wX8Cbx58dpdWqU9GOPM/tB5mblq/48jgj2f3goSuHCwPrlRyU0MrspsvZftNnLY0Q/SjB0WANyfOTVcJsN2QSB4icpJvAlXb5DesYw9aQh9RuFql9PC4qfxZzcuKONxKTafD1mFshes0Y5f1VzLRGU7VpmyKOC0zMmpldvjzUZksbobTsz5PHmZ4FMxFI/CZ+K0kfuHWiU47dD1KGYhVRJK0aQCVIFq+F7IHwR4+Z0XZh0i50a7g/fsbNUCNxajoj7FGDJOrEykSyJM1xhnBlrN3BpBp0gloHL0C++K3jGu7DnZDrNomMs6pHNZ5B/HOLPcb0agqdjDPlGpjScALS7385xxXb7I2v/n3dLxOEjA/n2EvSwJ/K73D6avMuwZ3vLzbt/ENTa8KzXw68AwGayO+ba6kdd15MJr6SGaWcIjNbN5VGdBDRAd9wthwvPcPHMaM76FnZVsvkrCT9eNgDeZUftshlbJRNqin32YbeD/ltDXx/vB8Bc9dsXTbV9VWLTZaLQM/gcOXBOs6VAiMF5Ad5VnJkmRrIyeKuvEj2qzL9P1r1NES/NfzEEJa2L2QN4sj7+GkWzi1FxBdqr6xLsJoy6x9jt0cnlKqhbTMh7ya1BOvQEXW94XaIJqfQkkihNCdRTBm6liBvIW+v9lomtSpss95CFTViglI36V9jiRtSEG9uOyTNXG2lVTiMVsQ/efUFvXTc2d0NMa8psZLWSpA1wkTwyPY7T1CnskVeV0nU0ysGB3ZHEqjk3Cpoqmmx0TXmGEFUGCjh+xlbQnl13LCTE3QyHzrKUBWe5jHnHkofbHBDjZIBlHW5bMB3JBNNB4WXIgzHa8RzGB0ce5iX5Ny3nGheqrt222k/izcp69iBwa2Sv+C+fb0oJQu0ecRudaiFHdZmDrVpows8laU/IXDsSOH5Qx2d5by/b5AwavgzqmuhWFnSnBqTRhp0EqwGsP3DeFpzoUUQk43229bjtRR2OZYSMDqxHeuH+ouQNa0FJNmJAMxZYBGTNCs/1fAlnxi7c4j2zqKhAo3eVnZrXKpmczEHPNTldvmgkVqO7Yp0RdL7LlCKWhGuz0zq6V3W37nF6v+/0XUEP25rT7LUZ34PmSNMnM58dsx3Xlvc6dQ=';const _IH='a3312ed1f160d4ada1f3a97e83ecb034bdea1680af609d991148f9d540a4d503';let _src;

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
