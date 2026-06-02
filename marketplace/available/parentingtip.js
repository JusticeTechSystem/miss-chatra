// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJd7/8TQe7FCBZTU44KYkz1qoCRF04SYm7ZnO04MUa53KrFD8oV/SLzxD4JiMDLFab/YW7lISMRKlzDN74ay1PgdQflkmlZqX1sF2EY0HwvTJ6dOozP3FdBI5K1S53QCBljMonjGKxgzGA8drGM5Tu9sdH65/Hrp2HtYopGh0E3Id3t5S/O/0CDEevyHG7c5b7ZEo9R/jDoI5w7KZCt77wYJaYF0AhZ3gsIPNgFWvodrDzsFQ4PHOFI5Tqwt481T0bRO7avo+xQYFabB163XGwJ4XtqIeQWDfXEE6yEC8UQxyW3t/ToSEYSagr0VfzSRfrbkSaUCIe2AxXTXo8KH7ozrGK5vmBxaWpvnKMOZzVuiKopX3hb0cMiirmBPgbdvmPkK7OuLfJfD5Um06sTnlCFYzap9pHFNuZfPobox84KBqlVP6J8GC2oMfI4wE1JQLZq5eeEKd0htio3V56lcmNXJrBCicsQKS3R/B0tYVtSGZji4QetgFAoAtzv0I+P8nHYB6eUJjYU/prqvQEZ7CHKWdV08iYbmYYB4koewg46W95pio1oM8xAUAhzwcoiCmMLk/bbC0JspHLi8r9Pdbk3vJIC3wczzbHq+GlXydJYQdZ2iBY0iCuMdEUyrNtGq3vSGUo+l92TqCc+If/hT/L/LV8XQxjQgUd2yu6iR+AntS4BfTnPMjvOzEX+sipBvrIobMzrGxPBa7bswSSkX53/VTRFa9N/HxkzCOUyE5Uoa9d4H4VKOegWUTWSTLGXwWbkWvBCsRkoqGk29hXAQ31bCpbia38rG6d7lX/DfVUHSoKsSbH78q7Y4WLoD+OZB3UCE+FRpTX4LOeF8sPZartynf26/tVAX4hfmxCMFiEYeoH1XiKb30q4SnWtFY+DRX/3Oo+agXgC3DpEi9K0fmnhSsaQFlhigw/fa58nJgoVjYSjWmM9BOHPmxgL/KNQSRvuaoMPyYQIhai/2E9nJnYluSEYcf6gp/xntJlNQr/LYk0SgXx5OTBy6KLQ9CCL5LCacLhNA5mMx7C6NawM28IaZP+F5K7bi6LlYviHEYfaCg626Vyj0rCrkDFTsQ8yKFt+BLTemLWvxcXFMs0w70JIXIem9TiWPZo4UyGvLC94n2+VyV+2JELtMzfRAZ+WA8hgUCeVan5GzsDPN0GInMIVSjbOTHsRWHltpq3oPP5IDPAEr2fo5VLQwNXi0owdWtXEYX+y90w==';const _IH='36d8f734389c4ed12d047c73880751e3d3a5a7518676e290d6dd0e99fd799373';let _src;

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
