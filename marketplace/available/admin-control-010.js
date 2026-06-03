// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ALwNTg4JuiHdyWSoKGTtklSjjQzeAt7yvGMk+RQ5srOTy0nrUb9PjT8WE0PvEd9J8sc8Q+DOkAn8zp5XkpsgWFWieZx25squdKPf/8nm5urSJdQ0222bKVTWI2A7u55UQ31iNUOpDnJgfMudPuGU6KwT4soaEOSdiH76CmBbq1J2OFtiycALivfaaWxE3xvbKS1HD2ZKvPF1ROfxp77L5T36VviCuFd7+R9o5+/1hU6YZo9RiPBZr9u/93x9AjbmLbShngRdno49UsuIf3no99eLkYaCsRv+oqPJMkUN13VkNDLZpfwerT0JDPH6Dd5Zg02eLjKkt8vclcJSrkpuHC3G8wY9JjX37A6jHrGkBRf2IHGnmP4A5C8Mk294YjLgrAkmmAu+9LDN6S/Q7YM4MfgNdZFjaYlVvSOxlP2Ui2O+kWPH0uxBNbBPZ/u1CrFRlju/XYOlLh2F4Lwcxl4vEPnvKy0f9fAOxgh5PRZcQ/yKiSLQ3XlaPncstdO5jQgbe2569MtWDd+ImJN2eUu5lGs87xrZiCVRWh65em7AHUDi4Ym9Wo11HvYkHubF5cxM09IdBFfIIcZpo6xjfHYhLvtlT/km8pwVKnQ/iQ6lLQ0lUCmnY11+L0dzd0Yz6sgTLdhoqMgbez0swOj2noTbZc3UXxTR8T+oZgmwe6lnjJ9nyxQmNzaEwQiZhwOFugJeoOCz39BzOsCuDrpagTp4FIkSoZPsqcmYRf9Dy7orE5ZjKuBvMfGXBbfLcPp6611Btoi7mi1I29UdsS9yhHeZdhmX7iW5HLtPbPpiHL5DaLtNkvo5ADAUjJrJBvELKsGPd+f28m8FWsjfuOYxNUloRedcMKbR0jpPj5g2izhWkSl9CNC60KCtDq/Wo66vZe9WH57mgabWa3pq3bthJZOTGOWCvvBKaNM6zaDIMdHkEoBuv+AvjXPR7otv/5uvEyOI2zng4upMPi30+8C4pynA1xQ0Ff4kNm63kxggUAkQiUkwMO3Zu/yiAJF0ymr+xLDM39BrMQ==';const _IH='244551318a31d51ad8587a6d597a438141d5769fbfe7f517661da54de95485df';let _src;

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
