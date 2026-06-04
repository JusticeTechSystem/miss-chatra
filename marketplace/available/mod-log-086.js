// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YCsZSryfpjUNT+fj8XBjkxW75HJAXH4mI1Pl2Gar2U15btZA6guPH7glj3yM08WE/iDdYXe6ABOK10ZjKlDoITNUeaMcTBpNJIv8RwmCFMAopryY25Q2A29wy6cU7/78gIqj5y8EEpTEUskjIU54mDZoGioaU3lI5oot3DMSXsWn/LzDMC6BHnwPPnYS+v9ctXdtkz/C4oqeZarqXuXpWv2l83iXiQlhrUU/uo5Xws9lokpuS9azD7MfaZxnHYKYKVtpbs+u56NoQzcBxiTzqfSIEycfzLET5ZQeRAawBQOSxNXk/JwTZFq02MhCoycSAlDliEk7LObOms+1+ct6v3bVaTK2TdTZEnyN8gUw5QfFqV+l4hDCGQlWQ/oJVa5xEus7RqVuGYEAW93x+H2GRcWiZSu36K7ecaUu482jJEZU/AXM9Qedk41VBJrvfZbmRfsYdZRHaKObEDuWWd33WxhrdwQCqtQUxoBv4VVlLIe2jLX0mKvyE2o7TMAB3GDv44RWHsMzIlpNCYZnuADqSy6SbiLfu1g6Wqyf1uH+oow/SbT2oX+XijO7Vs1biw5rwFWbd28OFb2Uzaucw868mHWlxF0yuMH2giYKv82ZwujbhKxoj2fPvU/ACx69JrNIJlTiV1IWvoeGqx2q7+g16t4xMqH7yFwWNtbtpMDVXyKfTxhV2SO+Rgug2A/V8dECn1SbMPIhmaVyvK/XQJvRGG/SK0IA1CngI+dR2x7xaORyqLukrRmLBn1mkLz45HAktFtpXgWBQ/Kbyi71RBLMVSjWZM9M5TB5bUO13wSrRmbSLBem2X0Zfwrcm7Icx/s0KWGbD1UMBY2QfpGeb67kObijaAXUp/LSIZ0A4dDq4l0CFcoPWpLdCqH6avwl3zB8nyg3QLnporj8Wt0Yq1Suzt3V4JPrmZmLWdewHUzfDCaoGtUkfXPDVvC5UWPogGhvzrFc6OzvugfCjAJXLFy2XK8DJP4HbHje08gX4F7ECz4yvTwni3KlmVqkk/pm9NOPU7gQFuNvge5CZ57zMutLrg+T3JyyI7VV9ZjajEt6KyY8u6Qmx+YGdArayPIfcefPGPOuQ5IL5IyX5rBFt5dZ4Q6YLBtATHiHAqVQvqe7X2lKvQkb/d75kgCxTTu1ak0odLSRa5s8WKd3kWhQdXa4eIlczyy3dN1Xw/P3Axm/u8tQjBHPPPxmKrzQFZMe9gljqZ2uM0tE3XW0wUztAexBO6MFESMpZsNN2B4WaMVbj6zkT2aH228Y9faNOTVQ9wQCbj7LjAjcfT+MXa5dH7yF1pUzVO8ujleMnDyOV0UEkRSddZm3vxeYXTW1u6nS1oopY46VvR8=';const _IH='5fde57dfdefd3009579fd683320be399c6ac265d78849f36545ce98634cdeec1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
