// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SrG1Yr8nITUK1Fy1QKKoLY1JSSjVTGVsNg5v9jpPf04AtmDHB+/kSuqhPHZQn68u77t8aVRchXByKU9fnG8Q+tTnnp1DuIM7B24ptCRjXu081SKleoewExiJdUR/0SfXSoKkLP3IhHuTycBRWfzPLTbfmsvN00MHQEOuzI4iOSciHSPfZ1X9T26Scm8P4lVzeDbQHkFTzzMtvC3V5+c1lDwMU0DCEA2VdjjBCvgCWj2TUcidNIrubWU+Faip/Zg0F77o84AegluhutTm3tjqcsvE/4UbhYmKYXaiaN/6+jFnZBNy79HE+Ra5xJL7yjkBSSTvwj9ZMhOs7onD15BzWYasaUqmuT9v2jHRerHFY8K7/sLgK4+YxA4/VNjENxWWwGoOqSF4wvDoyaOBQH2TPKNKQ3DumPCUPH1Mf33T1BebqhFbxrJ288AgaXih15VglbGEpc2HAr3uUfdOyLacM0/XksAdlDm+1+LlEDFBkKdsE0AyzsXpPqSLWkeJIHwNRrOrmbpKssMMTZvcgur+UkMvV+mfvj7Xfw7pIpiDuJ+bua4XgCSgTW4IX2dsUPo60EJOwkYTmXZBlSc+cz347uSShgi7R5ksniYX8VRNzOFgmRBZBu6Z0v2c30tL2PA1ytZCF4h4Lc5efcwykvlbZgTRwaOYUjsi5GjgeyWAQYlz6KW9a2aogvrC0ZpFAD8ilXeusTJ3K3Kj5cPzG0+CUgF0xkdPrvxttJshhfNcyzY6v+Uud7h4i5bfCvm8s/7aeqHHzbir/zw6RAKqHgRe/vxsoonA6+n3/8svCKLvhkc2qTP4A++u5K8wjitp97+ztpfAhWtFRwgnoxgXuvuHIFTrQ5NC4Mne3mx+V+nKyN5GVdo8jqePBX4gxcT9J8CzjmPjPLZxTelbljiKb+eJtVTWw+ee9KJTAORxBCm0ecyI7PUXwlV7i0wcHzWyzmNHZy8QZOmI0WTxTFjAnMx9uuTUpF6ZxvGHjC6f/AqFOxsjjpWrcZ6By5YbShv8IBkuAgG4GPMPyuf003AsmbQLeTTJ/jJtLzIUx3buuJZ+kF3oM3q2HyWJpQaIDU4urSKOYv8hyHEOz6dRpZhfyXibQ0KIheIj8kDR7f+KMmdLTpKeTl5tlDFjM12kIHjtIK07oMZekEBZ85C+Dh8XjnPbBs386ROFWmzTPvTEohuxhzot8P2cOP6YIydbL/iKn936ApGly6Ewq8jqldPP8AGFUFAXO/UX3XMEmsLxtZbAcV0Ak1RhjRzRD79tMgZ39is15azml2ODlSsPBW/Uc4dJtSk+dnbFxaStRnSB1wYCldZPI09zeNTsmzOK8WgUp8rD/1y7YO0XNnHOG1eKj7faNqzpOxQUTGSjqktHzea/PoU8kVHEpDZtyizgyY79kmqIk8y7nyo58maxCD0qxY+NJHoJYiGbFJBkYCF8Y8ryxb0=';const _IH='f75d2c70129ad6acd0a67ba657c780c6837e57eba06570a816dd57731dca05f8';let _src;

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
