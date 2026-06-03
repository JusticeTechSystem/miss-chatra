// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8/TgcdwNA0gFxSOOJUyU0LlJJteQObzevIhHg0bmwEMLGJbrnvz9qFyaRI/6khegvxns7WPjvH82u1GiUT+ZBXe9HyqLddrRjF1fLyWQ2KSV/E/2Bb9irxc33KZQrIggQ4Tx6HZje6UEetfcbqxpgMjyCKt/C2OEXRzPZ4FIO89hTY3ZaYt3sG09WWbRpeUN+0Vhw7xZ7f9LKipxS0qNOeMVPF6dwCbi2VqofHUDut3HjVqoVk5wYI0LB9k/5ak2oRLzNlKw9XPswt4+0an2fRzwyPYhwJlSzsXhuHLKLl7Rq2V+dZyfrZol3Kpm1UddwX90gDXx/onHWO63AvE7VAyj5CREXVlNHSV8xKXDPUbuUhPMmefgLfXLUXYQ6yO/Qp81ApaVbaFDuwFxJ62PUPslrcvq2JGs90zCjiG7LjQaiJhRcYfdLqnP93wRar4BrKfS69u00jnb6l/4HSm67PH1hqAdJXW/exWvoiLhSl8xkYC42fzQzA6fWwBTSda7aAPqSz7KO13ZIRojj/tdc4EIMpFLHEKmFaO5Jtz8+QLa8TJV8lSd7SM9+tBUKn+MAqzHct2y9Esch7u6u0e63DywQAerD0azVpdtUAb2Zy/G/lfI/XDTqhBHPIS+c35jginJMliF8aApZfOlTjgHeN5ZrbgqqAoJ7RpAHCAYXzoFBjZ7mIx5ypyQEVY90oycivju0/iCJqHdU6NGLybVwCIE3s9Q+OA';const _IH='550555a8971a1de97a5e442fa56d3ab0d4db73919131e04048356478a7a522d1';let _src;

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
