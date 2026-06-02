// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aKpPjLnHqtrBTazc7qk0TQhD2YipZnV1PdT09voaFa1cip1/VmIfendoEaNEL7p59b0fWX515k8fmkUrsqffkWSlG93wwU0bCiTV01YrhYOzS5MR2A4wBq5r99nqpRUekYM+fN0rzMNhbcf+yKWfde6r4jK60RWEJuAjf6tEIzBW5Z4HQIKfuIopPEiAAwDC1am/Z+VnbSf7XwVB/FlFdJdd98A7KYg/HKHGIkuIHsMBFb56JDvUzk0eY1Pyl4S62tvcclC2V/xXkQUkLs4XjFTa6kulyQWqU7LpmldGpNogJHY3g1W7x+c1xLfhCYp3zTTA2eNNCTWtOh1SVTSgixKU5XiHqAX5iUeLMbHKbbZQLH1b6PenmlWPw35RK9NabvEMj/pWtg6fXIy/rDZ8bFgF0UhQRZXDWoVquxRUsfyFCipZtMAjO2EESTrGsCBRbHeKUBR2Lu7KohV3aB6t/St02XKbMWk+sR5UFQh6i+DBJKUoIsifMcvARqv5Qlb5C2WvxN8r3WVKtAOW2GpJkeidvr94OxDA0MZHnRrHOy/qy0rdmz2X69NiO4+oTIoLsnDBIFsEQImHKJBk8cedePgksvOhBRdHgiQIUHub+iiFV0pxJ9hIJVWQKP2VttW9wObIgX/XsO9tm4cvtSqxB/6I622Z3pxN+ugF43t8GfHss4A+uVmGzDdosPEdn27DVojQltlpGUKERKCV0b9dxZ5s5whnzY0';const _IH='795db7ef8e88de3a77edb86fcf686c79cfc7ad123b75989d7c2bb0f406187917';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
