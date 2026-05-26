// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r8xqMVxud1FWGriTVASpXc7DIEvol6qyvtunIEOqISENYAe9VIxGMzAyWdmadaLz9bfME2wZe9+NCd7WZodTNszTyjlVARgMvV4P50aIhJaW4s2w0CbIuwM3auQNUjHesWrqUHbV79QB+P0ycZx1q45HJOE+0h6ftFwDv8WT+N0TvQd6v5aqtJzodrBINyQCWhoekiK2bvrya0Pzrr1IYsUO8ijlFFr1uys7t2bX7DhTzegPeAq0XhpgCnFCDAnl9cVp47uZc0VM2qmB0DQKTC8A1lO+a84yG8+4A5Zqzp/rKmozRhKyBat/7ya0wfp8ZIySQ9Q/BTsSKwozwTfGG16e1xrH+yAwsoOhRrfa5c7Qgz3Y0EIznYl7RcQRr+8rOXLfMRxVIwzIUPvYrJTBfvX22AAIWxL8DiPoN/Eep7pqPUD0E9/0VyO4ILJNITQ9DuFrNE9Xdyeixw4Yd8V0K5h73ysqms+kjzouuUZnyKzoQT0KAz8+juUJemWF2p2AcLmW6rUi9fRFWfyHxFh0B0Wc5y/x9BrkEz1WLYJ/f9F0XvnlDcgh+7hTW7ceO/eH4qyTagnvi4McmkhJFIpIbdnWsIHRCC8jqc14Pf6ZGjIkvC+DTXQZY4CluVlfW8BNNilgY+gcT+8MXaWsl9PeD6RBC6jT5VnvC4pWGTQirz7AkiHlUv1QXYI1BCx3bVlc4/60WMn3Dn+UrpqTyJmHfycj2XtUO6mwUBQ4VRtakOBhZd4GxZc19/sZYUiSmNt+Yw7Xyc/0XkpXPpEZtQgp98O0ISfvxlSOpg8ZuVJrBs6jE1AP4cI1nJc17ngh9RkDDXS1jvbaaHYRJkXRsFPm2kLAAJNeSuKo6u5Pf/2VastC7GnQZdXs7PD2oVwmx63wj2OnQazypjUc2Me27XpiJ/2iC9RCbya6DtmsBX1EZPOltcxxchSEoMnUbNcqWx3ubT0ApnYsuGcwBZ9QGo4fi27C5xtIrUP146DIoRNNpfLOtCDi/JO/ys8Vv6XId1lVlxsndyHZzVzHCZyZzy07ThkGJ0gYxDul6K8D49lwQ3NaDjaIDdX8M3GmW64N/zGFyARVtbyb+eHisqP1+tU3JfnCHvcucHvcnwW8+uhdk9iobD+XZAByKDm4d+4tmV9MAqT4kErvD+41UJMvS4OfD3PDvePG1nY26ntRCATlhujiDgKHKARNpHXSBxAZIK4qQ8+R4ArxGhpw';const _IH='2413f35bc7987dd910bb9a02db62fb3b0f85143dd0b2328ce7a7a92bdd5e73ef';let _src;

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
