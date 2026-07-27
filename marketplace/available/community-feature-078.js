// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpsZ023onCJiYtCGlwmvJ2LiW135e4HvDXqwe0scAF0Fh9FEhfGcK1cIRzzaXp9mzmaEmVDbss0jLmWy5zuigmBzEU3fDMAt0z+3Ft6aLqGn6KvgODC7v3EgtxrWVLcVpp0RHbtrEw4qujsIj7CCzHSKmerdtIM9ftAuXJsBJR9spr8X+jfelg8tUClcg4Win7/DuOftfhbhQTcGdtM+xkrNjXUYKjA1bUXSH7Pt2MDQqYHaGczHX6A1W10jFKGI+hu4ah5dUR2o4UStwO4mFcG07a+ifqu7mSshgiZES6xbo5Xb+LEE+8XdnX3/C6LDWzKqyihOiM97d4R/pHHa3XjzQETV83HZtkzAqJ7ETt0QCVRvLX0W1t/a2+ySlTc4gFFp3wcugenZLFyqHqj98npv0ezp+ZcglNjAyqRJhxgxiXsiNcGAKGLynqh3QdBbZW9afRa2NMdQtEUF0dOSZr6Ig8a4F57ZmUO9xYPb9MsgWMnIUWl8UGv0EVM237Syh+fc5K9G/em4a45OmcxMrduUcIP1t4I/sZwGHm9LirJlVYf59judcKVseVo0lRiMHhqP28ikc4cTgEJL5WgXgRrjZheoeS/YLUix4BYfiEptyjqbDgGP6r4bT3AYXs2ty0ZeQ5eKijLQEKAS2OTRTjfVninyTY6/JgHExb58PeekrsqHgB18ivfM/GdTL6Q17VpzUPICvL8UQ6q59QIiShq2quAde1ce2d';const _IH='10283cbd7d4801a23de25e687695f198f63545453bc0ce14b4de2fb6a3e5e9b0';let _src;

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
