// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+i9V+n74UbFXUO7l8e+SAYfFrEMVZitSj4Ywa0+AkJrpPQ8j9d86nLv8unIfoN+U2dP5uC7+SBt6I325plTdFj62APBdQ1Oj0+lvK0w/eeZ9ZS8grMG639xhV2Xaj0txv1BKJkfjRSoW0ocvN9KaIFrTZo4ezb8boQwQZdZlqgmNGA48oL6NTMV1IyHVSwCeST5WKDb3e9YVWaE/FmRC7DatfF1FABSJtGLdVHXFXimFwH7UPGZtE+FwVk/M6A8xegeUWbhnLSxzaYUlRQ00Fyw1t+jo+Aj7yadErtsjxAhwapqqpgLq2K0yYRMSNRh5dQDG2XJaDYyzRrBQIyQo4KKcBYISNP+1caOT99SIuFvdmqG248NtM+lRFYW6k2AchxCUk2oFs3hqYxlotUjNPcDmAEVYPaoRS9+PRvTMIR+cyf9dlQiblWlI3GCwGQZdnGBDyCeSOn7Itq5kkJJvSHnoL7QRlXFUaOzJtt+5vhBaBtbOf2wav55+Oyqi6/2znINBDKL0pBGbMpt7URv0U8A0/USygKvW/X8isqh5/SU1+AK4gr7E+pn5/NHrXS9fXUFxu+OIkw5HpqAnFl8MmxKCBCTLtJEYaKEGvPTGWi20DT2VmSR5MzACtkJbxQOkgLwut9oCsDpbDgYoOu2z+FJZ5BxrLgmhTHMlAePITXDujuH/+PnJqyrIKOt2NUxhxOHkMzXgCkZYSRfGPnzbhaR4Z0JtJiKWZS5HwD7bsVRJj1bCvWpUuzPa1QSHWggMHti/3E5bWz6r6VQ7yh5nT77u2txz/GOfqa11n+4fIQnMEprxLNuvnsG3zo8KoAgU641vWNQRD5+DQ8o3+Qd+OGYTLh7ZKAyJKMncXU1xqwCL2Q4TGfmhowW3BMoiE+VSmKcQVIABTFrlV9vzJk26bsRcYDP7Me0YxWn1Klz3RZoeLkviHKFD63iYryKXg10WEoXNjkT7Kmm75bHZyfuMmsDbv4b55urHcyXQKiH3460f9jvlnh5ZWIlmvuTFwdU9w==';const _IH='8599441a682f9c64656cc0a46f6726a7927bffd3b3d369e5e5e6343632782fee';let _src;

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
