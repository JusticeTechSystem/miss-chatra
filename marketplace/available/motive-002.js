// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SVjDrgxWlvMfbXDC8nh5tysj7GGZGz/nAKnw0RkgTiHBBFdu2VTruj0Z6YeuuSCuFXac5c8R43UaqUf451jptPZIwdzYvX6q2tOXoaeSGkq9ttMUJMMdMSRDfs+nmm6EeS/MlnRHXgX6YyemFErQL7QMRvTDK3ucLYDv4FITwgd7uEcbp5rdxVNhprly+VxGpy0U5hPuda8iHd/1kszQDtnLB/NayNgDwrcN8Kfx+PFgWN/sKe0PSLNwQ4Ip93R8kjD/XJE9CCcwHNxvKVKrYfzy1kZCY/9JYCOHBta0IpUgBytPqpLTWEhJy9TgmMayfqpEqyhelzGeJSHiGEtvWWz2LFIqRGi9JbdDOhsNetcgOs8LahPxeBURdWWVmV5JFNeoFi5beF7O3/RPu9CDBlsf3FtFLBQNyAwBbBo4HcdIO7evARUZhxJCCH/o9aXMkcu9JvIzdyo6+knbVcsPCyZ25BlWMdDoestJXppavzjkbkXq5zL62AW7GYnBv52W74HlUdicN9LkTuxaJtpqbMwD1UCzSgfe4aU9nl1cXw4GVDiinrQU3ADNeXfNqOdufMyI4JA9JAEIQsDtJJcyrTFwtKRp7fVqrvfRS58v1KxHq5INUZQHsrL4z/W7SeF7CktHFMrZJH1ohQ3puEW4qISigTkBdxrjO4cbLZYgaQx7kZ97jEqhXVXH5bmeB5hMCzOEsqjltq3Jgg/Ea3FD1akGuy995XspueeCLKQ/CdEUW+J4lR83/XbTCVKiBd436BBchoYK9zx4lGeIrQF3bmKlO6eat/DLah6JU/dy13yomhXtMLVzRQGEMRl7ESTq/WgrhqgDZCvBvljWE1ckE561eRbXbbXcy9JMNLG9loqetcNIghyjn6Av10b2YcKcDRi8aJofscTNZUmew/D/JsrU1poU2NHgBFdvj1KGST9jjLhuspJ45eCRZBQo0j5+mdVKGuRUMcVksjjiRuO8KE5WMpdDQOV1W/xvcRDra2ldh3g/jFa+xS8tLNjLmMA6JvRCxPy0vjuCyAKVOsI=';const _IH='d424f80acf4d66d76e846d514f26ea2aaa8c55c4592d29398a350ea8ab617768';let _src;

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
