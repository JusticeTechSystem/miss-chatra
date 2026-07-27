// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdRqH5Ri59EvHpRfXbeP3tQ8SaJI5YXVkOen/zD2lrsQfakWm0jGEM3u5AR6ixA/ttdVtJQTODWeg7pjc+L8cfwd+MOlHzilUXeB6TzXwbBQWppfELuxI84kYXnMvp2qhxodKTRf3lCWQ20zV9ERH2fSlmeo9CzA94lPSyBgyvFT0ymNGj/wdfJhk2BsWwzMGAGIB5RJadp4j2o7ZB2Hpdn0SX0OZSjRwtCif9mmwWdwD6MDHQ49b+KaBzvDQYoz01GiuCSSNqeiyi9IgZLJdAsMXETYSHXUXZMQGSxhWMwZZKiBxs5DuGbik27peAp2vlZ7H9lxe4XiZE6cczdzOnGJPj0KyoUPGeYuEdIliUoxcet5O9yjhdtrZ/1EkM9UgreX0w6Zher9mfXio+Bff87QH/O8EF0tiR7F+QFnAFGiYlCmDGbfsDKK/T77HLH09oKXA81f2noqvTAvLUpt5R7ZSZOk8w5m92pfdSf/iV7lQbFBaeRBPn8uKaAJA4VwWT3ILbWr8adzt8i5EaEOw2RQ/5z1vD1YuEbcsrTGDrhG9wlKsNlmfgmNiY165n1d6W2fOuGG03ZRFxvmI9+pispdIJcwLNj5SYqVhCejmSzxihcaiaH8IH7BECQ/aa6XUfTo9Phg+yn4TxmpavyVKZmC7YnYDWOdi4AG90fsTqFmTAhLntflpIj3ms2KUCyyfd8WvsLMSmnWevv9h0irMxEXdcFO/epR4=';const _IH='97c1209a71ba733b7e63145dd41dc6aed00f74fb02e37a1182c12b96ca8f1ff8';let _src;

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
