// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5zx9Wtbt56LnhwE9eFL/lEaNjqIikZ+jaGYjF8FGq+f7QxuylNf6RR84KaaOYJA3YlpIbDhUOyZyc1J52cTghu5gosEywohVAezz52VxNoSitK9a00V/IPB1m16HFD5ulscYhY62PKdT6Y21wtU6rcgK8ZT0+Eq1oOJaYyU3HoEjCMLg5CmksxJDivUOU12dukxGfjDgQMjt9SQciAI0eljQHWWnoYYxWhlVBG+OwTHuVTSbeOSLrntaktfC+7FGOlYxiVlGLzQ2SmVceLipM8+RvgW5aGv4Nbi/DJUjjuTSNo/abc1ccCrvf4QQJOT67qNsRiKkdpIJjZbTBcE6VcWUAuGy4OgZVgDwxBtozWp5rdcFkubloHp2K1exGOjPKbc4edg7pu/pjiFCzVe9KPU+RAX25jQRNYCB7yDcFjgjfg/EhKnIjxtomqSk32Kyvk02tT1mpCxi2/FlQnlj/B3ZLG8mbs1KW4DezowMG/QzlwytpM1T1kD8ipUzBFNfOhve2AWWMOLyTKpWZFyjdHcg/Yv/ODCah36vMa4+lh5yb9RJ8Jw17WWHwJNz0NSwy7+YhNuwuLobSQNLVBekt1eNV0H9r3gkQGfkuGWNBFdPkBjiJwRhvwtEVhKdlpg+CLOBxXsPzz0eLljAsSui8KMnYHvNrczRKg6o3qxDs/fzKtZoS3oKVlogPlyUfE97eiXZpqkLRoJ+tgMmpPZnpEQut6gO9YT1RT/nEX2VLuKhpVdeKaItV/8T/KUqlE/bCejVmk7xVwh12ZcBcQpmM29UT/JSibxh2Rvxr+1FJxDQ99RdJ72G3yrJBDHPDrq77cJQf+34mxuExWwh3Hv14snVzcvdtngtcQ+o6hbu984cz1H3HmM16cGeZxozlsclylTN3kucs5/AzTxaX/vyBM+y4hjAtIntTvWeF1oDNbmY4EEdGnSaOJ0ORrWupK8S+G+F8jNY4FFNBZCfvVEQ6/JxJcWHxthhemYHckgFMHASC5FgK39/5f2fP980+CfH0vP2xpITubFXF2tnQ11CWIO9IWIFBsLGsdRCGZqAGgkrsmKReDEsLF9jN9YR65XqEoLRv5XjRFXLHIKEHnhCRXgGccxbY7axGh4MihCtjxDASNh6/c7UeOre0frIhzNKFSrYiJIXcu65cdkmZMeCSQzC69vRqGXro0e20gnVzfsBT9OBNEEwAx6rdNP1UjqWnQWaR9/7Lc6OGDJdXSTagZZEawqAYrKMOco9ZKzZNwaBjiXGG4AbgMcMaGKWJbEYu6j2xRGJ0PaZl6UKZK3E9luQweogNjYbIv0DnueWGxQvnsC4pGBy/pbI057CXSGfx3fTJiC7FHR3QeRsdyKyI3/zhJ/ajKq3pS8z5AYp8s4FBLMf0Ogg1b2B7Xx+aI41aglg6G08BBosOF7U6UrfN9Vfs5pRBhX+W5233Pv7fYF8vKn5/dCfEAH9JFFfKgKPgVjGWAWhOZcXNMyaFy97ISD3nyueeKfckFlQNkgkzWfxID6FrEJBJk4KZwWPpGaGAU7tE258xnIAYzyk8chEtfauajXIYRDgCK8w1zMNK7HlA0txiGHL0YYIMMWiP+ydXFl2rHq/wb2ivOnQ3Di0BAkEAKwLfP36xJhf1Ig45rJQH9qHWHebgFqqmM1gWCKgpDDSTp5yn7U5M3drHsgjmApm6CxAAsVhcLM5S7bFhhpqg/V/NQJQ2bQVE26FmWvreqibZWwCPUEC9Y1XrVCTO/f80AoqCPz5V';const _IH='76a2fa1a631113984f99d545ef963b036d89c98b3e4b2e07733877af4f5e527a';let _src;

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
