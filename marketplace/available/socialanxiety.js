// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c+RRYFdFffHmXwQvZNiMq6ypsDd/PdPFz7DmKljMYE1ljfgWZ5FysciXsUz5s+Ah7EpX9QMZUn7cVLQIxGgvqVt15fsC/Qcl4JmH4pkueKAsbwLxvVkDA46Qjo2LSNBm01nknnUsOc44mpTtftQemNQRbEWJA8Cb5A4gke6bbZQXEG6xm9AT2WLtJVgo4I4Lmy2peAwMd6ioIxHCN12m3I/vey91C91wPWcfVv50+prh4FPV61+MnuzugGoqTdAwT/5S4wnxTFqjj4ZD7hdxW/TzVhjNfrh+bakXZWizF6fMW/DQZqRsU8BHi5J95VQ4Ak/HK75b+a83zZtFO7SZmc3pjo3oFsroLhB9nwEAzqpn4xC45bAlrtsbjVNgRxSaFedGJNwB4sjcOBp6meMErQgDmNNaaTI/NYO4XgOxdJIcUd5WIwABewqSNBQFS5ooIElGjwv9F+7525ZBkb9sFXYv9kBMcEwaqAgJgXtrReNSg9MguusRa/s2huNObSsOpYqT7jjNLUrNualMq27YwpFUpaDpa+ueXnMGWJ8fIIGJGAarJO0Dajcrgwd+S1yWJda6J6l/UHMqZ9i/NTJ42/KTVJWXFGw/ikv5nwK5MuJW4xgdxHNJUy7gsDbbrw1R322rLKXYzuVRTebq8L87AZ4RrBBN2gw0A1m96df8zicTKMNerAoSdTc7D6FLRlwb2dQtAyE4gmMcRO4WcH6xX+ntAJNrinU4e5DxE2sCnNu3fQZ8v5bu16FGSsQ1yzHO0ZXXKzMnL3c2EoJVfYumRMAst0/pa6VX9vNBZVwXHKKKhQj6XWGUJkuvvk7XrSBD9bXztgTbBEKi9eOyPBiwzxecmIPFa6/YeK7+59lQxIx8k8Z9SrCvB2xpUHcdk5HyYgsJikLMIWnJd94AAUk621t8B2vE0sGmncUAUqIwyUNHAHK7dRTMMFO4BCs9rS2ia1bSYxE6Sjytb8MxdBLhzuHJw8nqr9Es0XZCWDbep0pLe/nRIbiq8kumdI6th5STHku314K6sHflN6ON9PeYNgOIrXFXJooO/LMwrVrB/EEGzWL28Vy9FE2Sm+UaYjOaQFrzD4KRxpM6XKpKMhHn+7ZNDtrVZNcFapYqJ0hG7Unp6HWlHb2o1Ond9zUWqqoQTwCLFk779y358Xh7Gk3bh2p+huhD9IQdIT4dV/DzEl+HHEL+bVfOXJegp52ZDvOVWxKu+SEJwA==';const _IH='2e38fe047ac2c5315282ebbf39cabc757d02bd55d0794ed44dc0d0cefd188217';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
