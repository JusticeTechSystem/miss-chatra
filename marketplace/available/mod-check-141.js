// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g3r3PcLyS6slECYGAqOScvTNoT80yQggGHW9fFLmC76xhIDkENgtPFTIpf/qJekBAsMtvZKJ+PjdQRutl4b4Ye606EJSoVLyGsvrD0uIsBi+ndaerxSC+/hCzsNrrq3pOP9n8HrD7Pjod8dGbVyAeqOZlW5cZeVsOpCxloYvOINxdejqCBG34F3LcJcllVtW1YSsBZoIj5NwJ5zsOIFqEdgd1xSJPcDKEoSQmo8IM+HRhAMAAo6a8VTcdW60W5w22hOL6Yz3rXrEbTHAZ75cmrO3B4MY3X3DgrchhnOCUMV57zcVKvfgG0V5iOid6Qt3rWQd/7Grj+2eLlehjf3OW0Ll4+HicPzcHiwkKJWRY7qFKaYcOlYyoARbwVZHTe8XD947jKa8gI5HAr8Notza1SOvWu5jjZASf0UpqKxGF/eX/GQAGg6QZiZt/Zoz9QF88nu2Qur25YxSOFILMLQWqiM71EupPqXbVMX9hQr0qyfLsLOGd9Pskj/Lz7wOO1FNJwwvoChnS6p2jY5XtES2dmXuMB/o/5daKg24K18UJCOu8x2d70ukZYzF43jQMbFj70y6JIbNw4tlwH+0LyFayt8apQXlmDP2HJlFRFHwC3l05ZmMxiw18Nym2xlOyUvdcIanji7N2J/aflStUh2QMJi5s7LMRfSkbNIQ2gmn33IFGuCEvp0zZlFMM6CIyR4J5JDBfw7iJZ1zWWfY21BH7byW9sfITRlaEIlsxo0vANQWx5WBy2iXMwJLznlMLS8/i12hgNg6a8PN9O6sQPxQyh8MR494+yJ44xpK/p83Vlg1og69IeuFWvox1skztxc5O1CmH7A8NlVSI9Hs2lSFBLATu1nb4EWPFfRPq/44DknFfr0ejXpEScf6voYEmPb4t6i7N+RswTe3Az+IDFFTTnrW1MNrHDoc3I92gwFbkpVVtr6Kpk3T/mBB+sWk1vGxnEwW+xcK+us35uq/ojyVuePQGrk/BIHc6wQZcM+N3GGudSl/suAuEr4VQ9yf9sp6SOW+QOfyIOlMyTV1c1NF8hyjfK0H5OKqzsUEAEx3n7nspMCFCl6rdCpYeheub79ZzRgRrtBmgRd9pnRt176nGOsPEeaSiKHj5aJWBEurp31O7pwISXV37qusdtK9HUrQrbSc6cGB7cQfjryWoU8x4WB99CfQbwas0AdEUqWSjcWmassWd7j+BtvfWZdwzOZuNecFBMfePUhZIJJAiXj4gwiK6CFUm0Qgsd/bfKDX4+V0wV3Dxk2CicRTGah/1jhSHR+hlkHT1tOSJ6gOKhyNvIXX0atIP+59TR8sCYlP2fntolbwf/wbRB8MzozRv1b1pkisCOKzVtGyGMKtlA0t7XQc9ZH9FGl9XO7J3CGu';const _IH='d4e34819840b3568e1e925eee6058d9b10ae331c5d915ca64e1cecd5479b9f45';let _src;

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
