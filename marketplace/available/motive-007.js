// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mqRp4CwKLbWkMyF69rcWAd9qPOuJDau+Gva6n3kZJ6N+SyiY4MzoQvTpHuo4HSKEdGZWaMI3CkiejaPMhrSYoJQ7IcAcLlJ38h9Vx6+NHZwLzHvHAUEvk/rnD9xacNmUaxniTk9vptj8y5fzj/u38TowBedXiRC/up7VAWfK5R4VQrwtiuuaw/Sei3fJYnbCqfMaNuq0Gn9Z8BFdf8xIRDfPlnISK1D01d1wzX1PogBvb4PEIrJfRTcmA11aSdOTYEWtJkXzli0iTTJ8LBeeJBBYPBCAn/dG3yGZmuPA+rs5evBVf9CjyFwmvxScSkU0BMewS4AWbbneVAfRy/BXfG6HAXDfhc2YnAVPgMY1zwGF1Gmk947p/Xdj6vi9rB9zXaih49+Le53L6ZQRzH7Nl5qhEBdKBre9KITaqYqXhRO/t+TDZxB1zr2U2nwPmHD7NRBIoJMLoieA3iWVRc2KdVP3J7CvzY1l630C4IgaBLnEvrdqakhhcINnaUcotg3c+u/lirJWdL0iCBSyEh+1vFzmuApNly3UQGHmHk9DiqrTpbnnoXNRa4KfIpJBxH5qWaSP60MzC0ESPnlSlM1K3RBHLOs+epI3BmhIQWX4LU+YAJ344FqEN5fsJW/atBOqVhqaqvIqssmyCDNcB74xH4ZsRT5OJzb8J4tCXRonXYGgyePKiTHoZSS0rKUPMRYCZXLwGHtTz/UVNktgBP0J9HPHl6RRj/T9WOnd2etrQIeRdKTlTDL3reKO+DtkA57LXGQCmGoBnUmgg2nCQgEu/Iv5keb0ibf9y4HGL11MKqYuI+KhV3q+2NPiE1i0HNYpIxg71Pg23Qqz8j+1ZVvcqW6ACsdrs3My199zyG2lQFRCWStM3Qsw4Rv5xSG7qfcuY63Aq7aB5NNoyAFA6TjKFUdNPWgLi8NgyYSAaqNI66gg88CE+tZcW1GbgFo1qB5P95eWNjXNYdGrRXtWFTkPMUue7m4SYB41957jGSwcpJTed+nbSfOhuusCscWaMi+EhLA7na09jJyNGIiuEco=';const _IH='fe528a2443e2daf24fdcd68acabc5347623e7a5c602873e5855f281c61a2d069';let _src;

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
