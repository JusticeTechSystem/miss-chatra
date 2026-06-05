// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HNj7uVyh8Q5MRGBwSJMhtAcD7y7m5CBHO5KngzRy4OZu2YUJN7/KrL06SK4Swz/9mRNCY5tUtpvRAt/iHLTAAm80VJzYvpLCPYDnx6gB4Oc1P5P6ExZqAp/NnESWkqjXXxWnxoBp3BB8MKZMP/b9SSb40zEr4GWO/3xbUw9qkeyz51GxNm7Ykt3i3au9iSQjsMZzjcd3NXYtPhH/eyC3FKbyyTI+arFG3RksUIBd59zCu7r3BShZG1PLLjtddkOlE9ZrRCYu6YIX3SELql87ANlk1YuJGWNyps77iKvjV/fBU2isJ6drD37MZeRYvVKWPgvH6EHKbvNViuuqk41LJK7cPok+mxdahNJfhBUoYm19oadwOqYMm/lO+enupaJOxXkoL2/vKDUID1rYO7NGpsgGGRApJ0RcF0f5e+2AmMoffJ2GAEyqRnfjkIjX6KXYrOE758QW/0XUWh0t97Z+Jlypo7gGeBuh5Kyzt35KYZ6RnM9zDroKsfx7a0/WdSQJgvpmkadv9PicTgIM35K0Xxbi762UpuOMfVpUJ1PVzF1FvPwIbr7+kSOnZs3zJR6okA0wsuEr0eHNrMZQC8JFF3DUSatnyXMhYo+Y1AJR9J/7qNCXajH4RNUz/IOQRb0yCJxoKFwLdyFyEnOCQCV9LA5eRiZMMu8u3ji/xUwOZKH4xtHJ/Eq6l95OtzYuk9L/quSxcuPHP7ZAiblFc4jreoR+pUYUcY5Da9S1OwB54cLvT1Hui5RCkM8Tbi7DoZ2fCfDRR493bFXpqXGTwYlVCkMA209oVE7waSGkaE2mhHT/mnPhA6ffo5Tr8UYVasIqcaCQiwA6GkmuXKEA4O4Yse02FhnV7kaoPO/E/Kcf8drzg7IxqXHRd0dLCWOzWTaBKt3rPOs9eczrGqtmlcKebXhXNN/x6shxFKNZE10hmwmYNgm+j6iAvsfcEXagRGEL7KTbdUYB32XapIN2AvSpLlhhc9ang07eNqnwxxS7jO+bmN/2OTrDteCA';const _IH='81052c90c0adae8952b3558f22cb1b8ca241d4bc212a3f3ef56d03888dfa9599';let _src;

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
