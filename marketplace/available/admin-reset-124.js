// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXtDgS09y38lfqAhV5Rnu6WxG4y5oybQmNqxGm5AkOiFT2zNgxy8PCJhoa9JZqPNb5xjDPS+7ukgHMFHuIgfGtsldv9R2Mc42+6tVPxAxjK093grs1xUovymDcJbK0Rki/dz74kJyELfA/haRv2gOCQ8llFbiRXWMItKIHtrysHOwqixF3ofEg0iKd9Cj72z6LqrJEoUwR0R71b8XRAji+zYJTgJXE/DvkaM9fylroqxRvvyrDETJ5q2dN4UDtid++8GFdUdJYFGug9bC04moZky4e1+7XRaV9fFpZPaahV0CzIlN3WHAYiqqiOHHiIIx1PywHoaMF797SRZ/MfwgO/OdliUf6cM2LxHHwCtQBv8H0xGL+skrERcl0Fri21CXYo6kOF7/GG/i3xt9QurP2thxgvfO20ccGlQFn6x6RGwQg0AXYifElG5FveLchuxphOOnLTxvApWX7zjcx4DDzbK4hWRC0q/aUwtxVLrN/zcLquJcJ8jHEUbPkcqTi7bqyGM8dyq0F0v8NLvQamAinDh/YyHaezOLGcL7b4qRdlMCCdbpXI4akd6o/F39FoKIm78rIFG9c/awrVj1ZzXiCuHkklF3qpBAV6xSIeesPblLEHHvrzMIyk/5ZXj3vlOqhMgZnKdGoNjWzqs043gaHKGwO+Cse0ZzxmLc+Hth6+LYuFvhbT8xVqAKHwtkndu36SYf78X7IHPktF5aCuLyy8GeIPZ1ttndbtE5JN3c5oO/u3XJeqFeRz5SDaA98Er4e3dqIhl/WkTePhKcioT2eMqiPRhcPDCOTZLF3JO+D4ihjQoTujEjo2arE6THJMydVDxse6OMXcSNHza0xYboDQZ3p3ZO891rUrmGDp8blgiKGbzVcAFqjMwZpvCnZ0OOogyYkkyruZZvwLx0hVbu++zD/Qh0C6/yy4ptio1RQQHKgBP7dfvZJ6kEAy3/tH/w4tGskdAQNsTbMmYltQQeQ+ND5zE/5COIAqvcYkyg4avWbckjpx7gViq';const _IH='cb0690f19e315b234c312ee5829a2b085e81a3cf41ab8fdaf434800a2d32d252';let _src;

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
