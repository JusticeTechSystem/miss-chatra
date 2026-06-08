// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TU4GC35xs+GTCEPpZHYiRp+S6LyoGeEtXcBBQUY8HaixVj+C/kkG2JsW2GqGNNkCLrfqqv20RlBHIbaFNiuZOwDj0gLHsOgbg04HPM75nn8offqLQEDxV+IbLgZN/+LSVhOLvJ+G2bPG2xIioM4r3nEzOt8CM3KbOuTWNDLQcQT0kqRyy6mOLXtby0eBlDpaJnOusxn9nGq1vdm6ZTG96gxObYEjRCtE/VkGsTMm3/Rx2hGwX4KmgB195jmb+9KjgLGeKyOVRNkbf/fn5ipq0rn1K42/iD/IxFkgh806qRvsXpGu9sihdmvGRzaSGPZugMjVE6njQYod8/aEYk5CVQgo9DBC9AdzhNpyiZABstMyQFnYbc5eVh/yAERXL9/l8J3yzcWObGIdgY1naC37o8tRQm6uvkAjo0mopmUQrIFyyQdyvX6j6KWmG1FGntxBLNgb9TAdVC/ddPpLdKvhvIIyL3I741+ziH5j7pyIk+4vbw+wbxFv0PPzMVEpV2gUYe3hMJ+mApiAnHtZokcoL1jjs27LJr0jpVF4rpjtYK4HHCft2VO4i2F98XcMfvNsKzt2sEQWgfq/qHMvQ0lDYSiTqO5U3kQCE2K6iQ9d7czDi79HeczxXDexpJiwb4KccxKZEPS4U1lxnpzZWEx8DMPttjtmzx3a8BikR5p95bb/wnlf5jTra0f8dG0C3Ffl1Rui8bkRBZt23eqKsIRl4rLFv9K2mf0Q60ysuuTgvR+bBZs/cpZPz2zEWfdtfqxtxKGBbM8ztwP+95bD+6QpDKrI7DwXsaJ0yHDdGtz41pSeSUAL4FmhT5go7ky/K4yrRG3mwyptJEML+r8hCmbRp0x1WRH59Ql6jjSFJfzhkOya6tFJ24+Ixq/KY6+ybEGyGjAYGqJYJMmE8dZwr0m/ypuQZ8xrV2oRvOGv3HhNRqs4AWRrZ1Z35zQufsaZxh0LBAzSU6Mc0GaqkzGcvD02m3IxYC0CFIHCtw9aGqOW5RNnG4FgUXnMkImUuha1KmueTxe83QqzaAK+DTL3pKHE6AtKUbQKQEzbjfE5IVCYvo45THMPwgQ3CFsXUXTG34O6qkWAPH7Y607bSaqAe1S0vf+y3AbIQ5wB4HN8HtubEITkpEHMEt0nx/+RIHstt9ZEYQJj4f18Sij8OI+XiW1VfBg7O8jdChLkNpIjM7EEDzgKJiKTcUBDqHxjCFIbnupZStis3CgDGU0Ch9XtDwml3SDVsrvgAlUYUe6a3SL14gEApAtmQoTafDHN0hIPRcH3geQgcASFNeIvl4goKkU7V7SFHmQPcQT/BU/BWw04IQfMm3YJISUAsvJl0/QqIZidlmWNvF9Ud81oVIGN7lTl8IxcDyaWldSZm1KkophD';const _IH='fcbd89ecae05b16efb3be208436baf4192998cb88fbaa79aa8524df086b9ed9d';let _src;

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
