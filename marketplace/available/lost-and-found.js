// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T7WSVgBqqwDbN3YlFrX3rr90YxZmjLVBATXnARA7SgWPRCMyw/BPruJr4j0XkU3Cbh0cbrovj4YltjhOqKSyFSmoY6/UxB0YLn4k7uMksc68KuCDOg1tVctx5EoTBnx8bHMidTvFeJcIQcFZMR4Ir+in2DgZ/6VMqIddLMeC7Ubs92I0meGn8L5l+LY/j42fafwKeg7u1FobleBgwhIFy7bVnk9W23rwohH/y61UqRqhsNUuDNc0sLVcZfT1cQGjYVGHWcVnsHGYqDVIoQSdBmMCoOqGp51hTHty1g50Y0TTJ3FM5kXQugzRinqSKJ7sgk/VTRP0qY2rK24352PabQNGeCh3U92dtqYPPsKUKrnnMyCRksx2uQSFMVg413z/Gpq97jXHLY4ZmGIoloC5L9QCAJkPfFZDOZTRZGsbaZn6jCUBNX+FfSCTAym+lvVf5hPhJMfMkSmUROAjZgTkwBiDgTFZO8GBhmWpUKUMh2CuyGee4ZvfLSWXUcMkyXlUySubhLrPT6Owuv1JsKWxQWDtJBaTqXTHZvyXQ8MrHCi2JY89CFoj/kv0uLssVpAsBjcT03gDa1Yj';const _IH='89de6e1f3028852303be0448fce711de6041decb96f829bc26d4682f08082b84';let _src;

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
