// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SWoQUmfh/Pf1whNgetx6ysrVN/CeP9yIlYGRfGW6v3r7CeyWb7fyDjod0iUrKER+nB9cX1fqUpvPAExaAzW8Dwd/djrHBV6Bjvrb0HzQ7h1HigGMr/IpKWJ0wyEEXs68X7jfGpyAfvdIocO43ZiJ8ITBMqq7/4ir7uwm0rb+2sirUYx/y3zTq2UP93kfVzJOumBuVTRUo43ltuX1v1LR9FV2jXemc67+4An9yXmpxIA94uvrSaM1pP/DR12T86xhXkexaZqk9gG+AfYzXNrpbqhDJKBdNi3eGVcbWP3Vx9eJ3mAgu44Pro0YT7Scn2o8jKtTNQgfYjMLsE1dJ4N0S/xOs+XrS0I+rY93ajLDq2czQYPhf9NCo3Df03Pqdwt+TicrCT7qDaBYs9jGLJ09BKWuGGbZ9IzirC4NWpgK0IwUTBvYTE2+ZGKcRrJXCiIX+rsSErj9zjzlAoVPzd4kzAlWmIOzr7PXzdtvEPCHBfgBnkHKRO787igZsjBKeEs5UO5mcrMB3++H84WaS8LUUW9jMSqsMKFEDL0JnzW5f+izzZq2cH9wcu0PfbortqFi3ZrIe9DLo9CW7Qy+5grRlM+ZFQCi7ffdW/iCvDNw77xzw6DDliu0';const _IH='5f74300ddd6f42bbcde9ace16fc76db9d3edaf6848b57c20596cb83413f5050e';let _src;

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
