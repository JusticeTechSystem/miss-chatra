// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRjHs+Uv6tRdCAr/EyInNtpkHXg/7dKqkumdnwU5kxzTfeE0x0epoAWGIc45YLFkDy3LfO+HAG0tF9iU48TsxKHH+jZoV1OW/KXYa00Ro3xXnVPIUUWBvcckY7UTfd/9ZVS7oeUYVNtE8UZzSyr5/pbOxW3U2ZVM6+E0oXgT6xAluPxPntf4bkfA3Phv3SXunpe1pxXHwNNaPPPqCHYAG4VmrVqdcjLWhQUKk73DDWGP+0JATk4utKXYA/jw/nkfbI/ptfU8OrRMQBu5QSsbq4AyJiCwUbcvgxxBII1Xo0Sn7kk0FMVL0tN9fRBw1pGPeDotPmTlQ3N7plegYH+XF+5SpG/s2vU88FbKMrGWhlvde6J8mzW3EPVodjGn+yKZTZHx9f9QB+OKOF4cB5Pe/vrmnaBGh2fGNAJ3pun0WVtInkW7qhiUHTMxpJytxHJ1jIzumFgyaDBlxIL6yaZUL49y6kX3GboyRsMRI19/ekhn1VN1lCO2V6/gYotHEX8GlHIysUP51XVOJnVsLzWrkuHAX9vMT0y1Mi9hpKZTWgZFweHzE2SpaCfrcbCVVsVVKwo0kIXvyeiRZnfRBBEKYkfAm+X7GlNQvbT6aMBVb9KFmTGZYYxq8O9p7gdKqmdRyxN6Wn/mINzFI/flGPXNgI/d77S6iAXC7aIaiaDG8h7qwRDc33FoNv9LUpydbVu8A9J4eJCTdv7LCB0FlYfoIJz/RYspo=';const _IH='544ae505f973da7e41e500c267071722a91af9bf8fc900ea9f5b3e9bba5c2536';let _src;

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
