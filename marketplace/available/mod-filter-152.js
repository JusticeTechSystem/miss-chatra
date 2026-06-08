// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QuwuMzTRvoL+LwJcvV9f1rKJtYsJKTglKPmnNihj1Mn7uTuyUyvA/DZtDpJ+dJh1kI3FBSDy688XPZt1lo/dKwwaUUa+GbayQSYoWILdQAFOA/LOxm0c/xDw6OAfKA50EgswECjQfs7N0ujSG7rZq8C0wiK06zDXyGcoJ3NIgSponkV/g1EqQwZcNJyEg4ZSlRFDiKZlZzK5q4cnVJUhnodzLbNLZW8wX4idRqPOCyEVpV/EbR8R8Dge54nACVkb/xYDYwirQ9aT1qof6w0smNmHLRDIYRzeY7Q3TncN6SXOzw3XNRozelHdMsGV9LEWB1uOcnlX9b9hNzckKV+OMXhamjffc4AzfmAvI6SqrUMwOLf0rSCH/67dmFVvT5tfXOtFpk5veFRSBY7vythmHyiuEL24tAQKKZ+6hPxqONnnbN6AKfG6rFROJXBaSoLw+aG08fCixz45sbBD/rLUVHqs5zEDzLjLw2XCTEizetbi7WVbGVBtxXCsjVSUh+3xOy81zgMAbCDQsn+d/qHHu9QsVqey8iqmx1mKsLcDH72O6C5oAPaJwY0RMfv9+n6S1xZ80+9Yl+dh4mCagWeDB9IxtqwN8Icw72WuqVAgx/deX5XICvTZwgy2cUK+mEHDqKn88KRdRF8hNeujOEoCY9Ggt0deWs9TL2/KxDbq3cxdZfwqfqPHS6oouLapGpiQgrHh5/1yw9aiUy8VHdQtm1tC60If+gRNYMNjKNABPXPZ3uED0W6FK6r6oY18nFx4me+3joRoiN+F38+mGipKggF1yg0FeueilU56SnznX27GAG8m8ao4Ve6f01oiF/owMbh2TQWlxEVw91UP/KEgwLkmJCdtzsFZsEQBrUVy9jl3KmTTcqs5fSyB4CATx93ak7xcU+Rt2oQDwxOvBTZfDJjR/+3bP3Fh+STK506dmYdsJUfGvnSYtmLR5tdSH3fhnL51CgDmkwq0Eso9fv2umJaJQh9GMajU2mNIgib5DGlXpics91RDEQ0kEQbTDefdUSeroFv/Xt+nHs9sVQneVqIp+jVcgM1tvhHwedZRiBQgPC23f4/CFMZWPibNeUe0Se9jXpICTanlmhMXu79lq/QzYb92tiu+59MwDDgjc/zwuEKwlFRh0ml+s3X7pZkLHzS7YIIHXpHQyquVtLEgmT3O+2VQpGug4UmYNq898Xk9HxUCVBVE7uCo5x4aeuEuvFxAlRb6nyYz7Ndhg/+T88XLvo9MOcBdbGRxdraj0AWNgDf5SSvCwi+Ug1RNzY9btoGjcj+2689Vd2CyYsnZbjcO920qxJMjc9MFrjdqiMfsEXJyhWUleGAW548ydEC4/CFFn5WftmORy2piTxtmXtPfdb7tYBHAiAiy9eNqt8uVa1BQwfJuPw==';const _IH='55a5cc2bbe5cb718e5acac9e6df40485b2bd16b9f94f7765446b65b4bc0ba3e7';let _src;

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
