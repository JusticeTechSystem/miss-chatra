// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bdhaqy5vrxFoBSDwWdOhXXGn68hEkZLUnMHxVgSw/NQUzx4Qo+9uancdpdtqoB+QvJrUQK+7Qoso1mdDbIxCI0Z32it5ZHVhvrK4UiMHcwqqhPyWMey+c7DuNXzOUWcXW4E+Yjhe/NzcC5m723W6NUEW167cEoAjWqzXp1WvX9Z/qsRy8wv1l6j9emnRZZLNWe70pHv9+hZCwoJubcYcPx3TiTleoXn+c9uFEdIjOS655SDjFaNk3I7LObJaVVZxxv8jzdGY04BEljSToMRm42LE/QlMTy4FKblo7vJvzBFdhvxC8doT8fU9tn4cXo00H2wLLO3YbU+uNEPQjeBzjZumbQwbtCTTFsxVqFuVXe8xwQcMivs2d9U2I5TgxmNETvycv5ZXfx+q6Vk+IWNlHgiFUHkrDF3RKm0GSTOXxD7Jm4X5swc+vRTMTIigbmyVidziGgcCkL9PA8y795pHGwDk3aaU+yTcvAWrqK6nZ0K9Rw4XmeI2szspI4sde/MI6jcP4jLQFNeBASJn9ueHWdlOdiftQk5/f3ta5OAm8MytulNptP/1+ZXImNor7+vmsoQ/zU7KCR4e3fZgB+pgMSFDe/3ap8PEhWwDwCr9RrVfxpEWNAItKol8YFi7HVBB9OD5K0QCHr2Zu/7B0d41lpIomJnfH3xa6iCychVT93mytaA0X0TGm4nsPO7kMzxQgI2YiqZHTN5sYrJj8i+e8l1c0kNspD3/o/Ph4/ZaTUJIkAY7yequxelwQMaV52ctn6KpSOGuRDrBz6PAbQ2E/ignTTVNA2pSKl1QZV/DIKkfLUN3gOcOU7y4qauVGsdS154MmQweBdAaoNaccIchdeBfR2wlR9DRTXZcpPQPzOp90L3xIbYw+Md/HAK7EXtN6Pz6R1pww+0HfbNG7w6cyQAhTcj2IU5ejQB1B1l/Sn+P43AxeFzLQT/x5EV4umUUvTn5FMqGhtjIh3VsvLVYuFQUtDXwiHtKSw76gfTDcPIsxfWGDxYsC5uSCDwaRx84JfDC2WRoTL70fkjAT0iQMUIMWMwVYdGcqQI0bZPGLHmZYXOV3yTTkejDVlW4840TvtBuMK9VO8M9stGtTUB21UrcVH42b5GMOsgLBGjUAk5NalWwdoqRuqaijq3FTvx3olWkq3JZvJyAXpT+03L3HQEzN2JGwR4eyZ9EZuQKAtnEteEj61jCvBoQDAFHTFRnPrdy9vsr3Ca64SEOFhESM2x/LO+Vllth7kdT5v5XIrEk4iPw+Xpbpg33HHa3J/JwXdbrpR8zqhHXMfePVh2QDQVOU2E/dm/ViY456Ava7+7zskQfMXj7TDcHl6RVpNSHWM+kNlEcRqWT/i1PaH2N0ANfW8CqMmeQuMSXh5v/';const _IH='d8fcd0caaf0a8b48def19e22898dd9cd49b913c41c69fd11a9584b35a3f4ac40';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
