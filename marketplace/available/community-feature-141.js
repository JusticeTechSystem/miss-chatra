// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2632uQlwmj7z0XcmY8I2KOoBAp0Q7YUvZIt/FyqtFRTGYz8Lv0AvDkAPvjC54A9qZus7pYjd75dwkf2pABveYP7d00Hr758bjxgqZXL4y5NRJQnezYcSgDKUsWVpZttEartIQAk9vQ8rj/1IM5gFQjEhZo2vFoQ6om1Y9TtGod//5mWL2xoxZapRmIx3b7cZ2aYy89tjjKUjQVBA51kPHu7UfVCxzQjALLUSynJEDkw0tA9LZtRjYu4PXQKFTt/gxeFO9zyRiW2x9WyFBcFIxWUdyyg1nM/GoemTs6P7iNwrx24+W26GmGYD9bsX6rF31oevMY45XQBul/KYZDnY9qB9nOc3iRV8ciUCHgz915g4KzokFjUJ72rXjgjJaA94L6eQdzRDHq1v04hoRnkd9iunlQcCh8Oq3smS7a5ayEP+j8+bwc7F8JadLl/4IGKxZWsAb1Tenviuzqp/orB0RmeFPrg7OGUCfDwIsH2bZKLgUAgXymXSYTx/aWPjrkKQoSmTdTih8umJsoLSQUYpLmRpBuiWmBvQyVKzTHFF6nBByR20m56ApBZU3wCmQT1JfOWFEAYadv1V7f2p/kwiPxgrXunveZxiDACcDbrCqHDUEQUAyo+woLoKghn8ZPG69Z+c16N9yG0Fb7EAU6dROWXOfrF9QYj0N86QzMDlBMrPn4q2WUCXbC3y+MqhofkHN5dT1tN0pM0AQUwPWQdU5YtEdUIsMuV';const _IH='86e44c9235a685462e7c6f4ee41a0657b89fe9ab019e68d2b536e8739e059fab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
