// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGJ6aHvCIek7XHUm1aQVDwKun3AVlxUTEtKF3xJWdTOIY8bFn658PFVnJtuAWd6xLeyKZIq/iEBtP5TxevoqeNXtXyoUA6R0HzgmWH2T8iMShEIxNiRUgz8b30u5YPq7fhRuRV5lQWGk+fsp0dSyVJSdFt64omE0vF+B0noQPN9dFBmNTcDH8m70Tgb95w0oVjHrofT7os+pe5RgxdHTc7NHY++Kk+TNmKot2IKllH+V3KYexcmBsgkNi3sg8jj9z1PV7XW7GxSy8fyi7s5AcKBixjyaWlpSh/KOR/0ON37alYTRYZERbK1o3qLtAxxvaNOKKzY1XOXEHCtsWHbOF6uinefH1n79/sgflAo25vAwEClAs6D9h8lVO92bY7FDK0Cyuxa2V+0u3lCu1AZlzHONzPNibFGdHYs6phLrUbhNkF4VwTGDPTVWhwapxlek50laiOHJeW7w99gcwgewhTaEZ/K1KniNhHxmACQrVwc+2KShudTOAoS9Tmeq7GGzHjCOITHkGh9l/64eaz51sDiaSxQoYbxtoyIathGtktpMdpqUjkSxac7y4oAb7sgijX8UCVXjZLMMmHK6W754qnjdPbUXR5TmBs8LcG64Eh4BMOXEIg8G3K7jf5SDrDCtmGTcnxY9C2WK+Sx2zEhIXCeS9uc1xmaRION7kylQY/9QCFC1xNMKq44voH2Zgs7qAuvOCNRbEy/uMxMv6542bbUNXhDxBe22Q1RQ4gC6I2XPISPzhWX2joCZ+sZFmGYbgK0mzTrjnxRhEDOoSnLpD/k0wII88k8LxVJLMDq4LduFKFm2n3dfu0bYZC7kwAzi0pNaNol+uWq+GkWecOZRRzVuCdppdGZIM7xX3YG9iygkCLX2iT7jA8Mdw9MjuU6p5fDyB2okcggeZEa0/HypYUwLuK5NlTIGQMsvtg12CcLE+RLbQ7WOuznd8BJk6fZdh26csEc0LlU5DU1BjoYi7TqOpIL9FDmVAlQtB1AdwF7bMFcEOXkpW0gAQ=';const _IH='f64543e3d5bc0eea200c5a01a446705de4c57a1b8f65dc8b1dafdb8e3b0d6954';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
