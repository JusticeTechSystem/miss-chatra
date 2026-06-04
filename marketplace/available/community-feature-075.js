// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TqZ6VbjUiIE62YBUHLoPQ7QzUKNZydMFp+lO8anSv3ytY43XyTs8+umUuUOSvhFAILE48Z/38BfCe9rIEwkEWIMfq5+p8ElxDAliNZfxg4tKNG90kM78ok/nBmWWZKIyjhkP3V7ZBcutnRg7Btxnm+Av/13hNqKk+jNeA35hNbFYEz4g+8tiJLJATnd4YQGo4d4btsIh8PANB14KMb51ZiAtRUTxP9pHALeKRF4F7Kzq/ZirU3ZVw81w9IvuWXyC8yEjTFzIFmiL/kdbTi4Pc4DF9Gw2Q4soKIFyXdt6+Iw0fT0NPic4PbVPejUZd0Ve+Tbu+3w66+QjSfLtheNa6vUaPQvtj0958Bpn2Lm1ne9G9hrFdr5h02nlLpyaaq2GMvkKo0XIUJ7Mp8vUphGktYoMBF/bBmEmM5AHjVgpRE1qX2jCAT5P7OPNz2dyFCCnPLFda6oTWayVS35b3PwxQVNeE8Lnh2GHBT72w9xFtjo74Mx2gr0vX34eZooCQDWDdyGIIfOzqAYgNeIXUmPZjpMuJIxHWPizm+YrYn93xO86lbYYIB9gWaxb6dk4xOtM5tOcGJ92LIGRBg7Fy5PI/Ts3F1yqHrPeljqK8QoiZYgAz2WsYRRNQSUMfI/i5bOUt0/J/o0tLV7bhsx6wB5xaFMa5sCmnrVj2oV6d7mhk5ACzlHEZR+Dj26TyK6tKHOWhqLWD4Hev3RyyXwpFaeEbJtC1iEt9LwVhW0+6oyi4Hr98iBTVd0=';const _IH='80d5ab976199bd189fc2c2d45c7c54629e097dadb1b090f88e4147cc9d1b2b37';let _src;

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
