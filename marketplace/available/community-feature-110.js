// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vlsXG1G3/QXDJDpRURRzIkFhEef77+y/L24fBv2c1wGrexsdvmmf4DTh/HCndjHjbM0rNEK5JZzlqlhdy9LNwVmfQUncWbCbl+Ygu3A2PDGCk5kNHPmBFLyGywaRzZlV7dIVDlgN+/Gtq4NhnQwN5C80m/HvCUaHjhOnN1ZAPoO5UVVq1iStY9Gwa3a7Xa6L2PEy0qMftbiUEnBkmvlp0x62IRZ23LAF2iVro1c6bIhttMcrrjjTZ76hf9np3HxTkXc1bwJpKmpO5yTQqPr1PVSnzBC85ooXfO3/oOZXR1ssuf2WQI4Kt0kgNaRzTps+YaYLiFBdhF1bLP6HqnyfqJwPDJO8M/EOuW2IKJ8jVPyXtNvbZzMhM8YhswVDs+vaWK5vSCLfPRyDUrrBkrGn0g8x+LqcwDfrM9BYgVzV/WMQCkrNk53oPBelr/nzCSiGI6+qJLwsOVxHdw5WENC3NtC/4nNldk6LPt1nXkFwVQmJkNGIXhFCnVm/C1Xv6+4Ypy9T1cd5mkxhT0J5edqzskq0VOnlU98L9nwHs7I2RrUTPHitr5jK5aMxHxqXyKCvJQx0uwYG7y8JA7p+mNUm7h500r30JQTSAqny89IxcVbI/8HWzacYLa0nJtYwKiIT3LJP/NFjpbf+2TUGL6zP8Gvy8m0QjfhX4BuCqc66DEhFkYOK6Ffj26VCWNos30BGeTnOSmM8U82T8yz7LjSkuulO6XhQ0tijpdCbcUE1b0bJly7rgCB//7WA';const _IH='e170346349df2da86ceef701acd8a92086cc8728d6bce9429a6d017a2841f019';let _src;

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
