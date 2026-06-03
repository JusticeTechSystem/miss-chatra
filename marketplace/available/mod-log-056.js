// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQRsYR4T+hNcRFMX/i1t3mNpfS6au4OdR+arxzNkCL8zQrzdw3nSKpYqxrr7STBMMRuYNztzGIZmKWmN28fdu0Fe7jEM8jua5/ubF+i/4B7zGQtBNJzpUyEKQ7jwDj6J4WZaSh2eDMWybpTnOTAqGbPwDUpXoPz0yp9jqIu/8go89xer6os8N48fwE5OlemSFumyfPCQZESSOrdfyjNUV55FSOVHReFG2xzmvKcLAo0encvalirP3Gppl54I8xkv8cfA5hDMTrANHgN18zDn04O/yPQqP4FaC50hKGL+OKWUB5j4DF9dHymT8pQyelZFXcPzYNmtkT8RsYMk+5K2ficKh67Pq+XOYnF93ERBOqeL8b2ag/5KRYV0jEx6gRwoozx+zFmgw+7Q4I6SpGlV2VMVle3uPWP0j8R6+gqYgLxq4+0pMkaUsPtRcwdSBn/JaQLHzBzJ5YCItdfkp+ITMk41eMv8UHGGxX+Zf731snKTnkod7ihBCbD0qNGWMKKaZ39Y/8FOIHwl0Tyz5uTtGso/9QLEBnaWsgwFSXstOdJCly4D+3ieng6jgHn3uLNUvYvZb9YbLpNwVFqac/aug9gasOks92hOSkRgt6oi519h1U63ftzTZpEDOm4riM9cC5WPkEbaMWVMYaFis01JpXBJz56odl+WAzu7lX26udrChXB/S0EMiN91JfSFoM7BbH6PZRD8CHA1yntODVTXw5dpcay1sKiOzQ1cWNKgryp6lNMuNI20xhCvYLQi3dwpJLnBOutXnjBmUp/AOp9tBiNP6f3363GqTLR0/xHLljg8/3M7HMShDqcZG+F7yKyyifk8HRDso5InJ9xJj+Ory51tQj7egWeRUKt2/dYHrHNUJ7AzB5v0VSym29nHZz58T6lRmK+lv+GZ2XqIZTSHIbwYQE/OAYI0KZVlb0KsUGF2qjsVCYt6bZUy1bkcYOROyu3kmAgb4gzuNKHA9/4JloG7opywmeRF4gegBNA7s+DDxrBskmils3qtIQ+gF9J4xvUAvtOz1lN06A4p9E/hhJ82Q477je/ZrcHimnJbpS+XzpKZodT5vO3xVD42DxR6mCrPPHvZIw0irHOoRnt9OjVfheB1jdWhWtDJ/i0S4Nxf+sbwQg4tMUGJp58C3WlPMkyZvOS+Gl6M27cAz2EsPNrP7VLSAkXvysOvTgvFPDaFtDL1Mhog9rP0pH3dh4dabXJF/UlspGsrgCBhEk1Aq7i3fskBzPHwhv7vVK0ndr1h56TcZYmJwjVl4m5TCxxMmxuF+VAf3SXlNlwbAKDNOkS6WBptQIcmtrDeO/+6K/Az7YHMxTU5u4FthvvIRiHg4Y93qTc=';const _IH='c20efc15d2518975488edf19812725a1f7ec9be021c8a1b41ac328fc28437c83';let _src;

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
