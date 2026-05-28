// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0dJGzHyi2J13T+WpKLzBG5l/vwO4eVh0OyTXk/0OF3zewxyKYiNxD2CIIUQgyvSaPsGy52KXzlN1dojynU6ewMa/7yZv4oF5o84g6P6YBvbGbzKsamSpz5RXcQPbTaQJjcO7dMnntfFFwLldGa3QR3vDJpCPzZEgmoWDk6EuhfcheUv8KACS7XNp7bMz6fqNWr8EoEs91qxYoOLLYM4SkFogKG0RbyYzLjI2fU1dEefbytKSh39HgRQ6ExW2b/8Mi46Q70YhdE5if8XvLc9/QpLLvvps+BsNVrp496GtnTL7YByLjPLS0CiDbGe6pmJXZRLktbQvJADH1U++TmH485rsVtRDgM2osyaSe0eZEUiUwINQ/bU5mjvVNMJcUFPor5xeHxMbjkllmS6I2uHzEPGWZOVgnyYfriAVnsv9C5nPz9W9cenHYZ2OxtwiLMg6SR7Ph4nIeoXmUIC+AbJXufs/DHxygHA+16aA60zOrdtPcinqUevrhWfqDZD0aAYeylcMGnKUkq6hHZ/Nbji5bvRtrJsEobWzAlQ6hGqjAJXp/xjgfcge8R9ojMRYEq4541f0zYHUWH+WOq9AfWk5nlmL0e/XLS0s/TfddV4u76o56L9IjZ4pgKZqaPwIw89MUm3CKZz5v6rtK8xeg3b6kwq6Ku9Cn/jEbFhL8u6COFSmpb1UKr8hlmo3UO5yxoB2a4G1U7tcNr2RbyOd+5h3GxQoaPKAxQHkdjId4WIhWw==';const _IH='702156e5a579efdd83d42aaa4288d5719ab5c2d06b8e684215284ad4612817ec';let _src;

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
