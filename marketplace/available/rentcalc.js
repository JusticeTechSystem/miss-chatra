// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jR7S3W5Zq6AO5SNgLirMLfnisO4ahTmbNZWMnQXPH7JTMTNFVFZLt/PZVLQ9AX/xTbOeOwIAmd2T3tK+eUVnIZyBoAvW/6F/Ajn1ZOPMHibjAShF0oS72LM6fpdA/ymtwi2tDYMa9AK6NQv+0L+0wH7ulIHzTEHYHcuiNvAymC7RB4Ws7d/26YFUvRRyU4KzxGCf/6lPJKiE4BEh5TV7n8QJpk2MoHHvJwhJnAlgJ38Qkyjg/X68/c3xTG4UzN34iVAkNOa4bMZyfJWYgFi+H47FfOHp8QQ95DreSnMGIPNgWNKa1hDHkPPZ+P3M316dKEYh1KthxhlGLBC4CKl6441B6i/tJqZ62hZGNm/rfDB0n0YLTfaq3XugKI5AG6xkM/O3Q7XyPMkmEVkD3eMA2nD5LHoECmPZ8nsoIuy8BR19WK1yhJCMtfXkT3kfsP1ov/y3NxPJTYSGmLr2/ziG61lTTbLeNXNOPQvfydGmv6Ype3wbI5ovco8M4jqLpDXMPoGQ20FNrKpGBAbHdJahOZ6h8jzOnb5i12eCfLroN8UIsYyX1k3QpypUYR0K0/nLFmZwnr0shTshfBc7mIKahHwbMX0kALfDdZrxMMY4ORiCGojqpyNaz9rRl75Z2cSIaVbxR660IGGK02zqYaTvjtGpsMEQqzjM582aPUHlalSCiz1yEpbbCTOhdJu8/J1g3PRncXTowIw0ys3/3cSbzoBS5hOH5ueRdmY8swNICCnCgbjsPVF0pzn3wcL6MdJIoBuXvXo1DTE9P+ImMFmGnQKEYPopOcTgnIUT2E7Q24XrsqwiqXbiSYWxxeo7nwb+n5LoUBWQfx0nygV2CEC4A9g9rOT3UeoLuoghTzuzE7A37sbD0+5X1VoFhQOgBadd4smA8B4co3+0DK2bC1nfgoedk+FAvjcoq4dUwJUmW4OjWStUlqRW8CAo++dAKLmBynqeJuYfRnMyjm+rGkl5DaPdKSoBU5tiVlRLYvQ5Y9BCzafW4tLktlVrhLYgt/I7QbmhPnhRuRlZEHLeXEPXdYAR2TVEwH8siWUpJUcggaSt3T20oTjojwzBEq9f54dubgqCx7aGg5nBxITXkpyERR5zZ1b5uhL5DjkSFt4Yc6iOvnyqDq4geDgVT8vwBiuoMDB5FaycsNcYs9cwiVMDUZrTBw2C5oOeTlCrIz3gz11Xeq/Qj4EKCsJ5SiO5Gnqm';const _IH='58fa931596c7486b545cf9bb543063dda42d5f169b2336162e354400ee65c504';let _src;

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
