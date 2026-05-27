// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H1lep6YzFHpbaMkpBeywj27HkQv5cjrwpxR2uxyi1+C0SGlXqe7inavbvlz9co4EdwRV6U3NehLU3En8AwHWHgpevhzEBKLmMpbAV6lLHRpi8JTtA209u8u4CpVs4duDsQrRtdTdrZRCYbPJZYqjYB/RVJuGCJrTz6E7RXDd8t31nQOWlXF01J4e4OtAD4Pjz0UYFnEVuoigXXgHYNYZkCojKyCTro8TbitM9E1l6BSDW7KbOpRi1H2uX4nMxKaeakZxRvwkaAGJ0vPV4+t6HuFIHz4jy8qHLK0GmXeSgpcuA6NjzKyS8XPvEDVKZJcd1SYzTUgd5S387siZFfcU3MaoB1AltZdSv4F3naAppI4Qu+0/keKG14k7XGdwQZDdpkSGhlz5LfV5EHmMoXwFdiWm4ZBrfaclH8PYN8/L4GCbAJn4twPbFCyfb6ujuWL4DWMLor4n0Qorfb+PyVdJsLfA5WCjiB0M+OGzyFJbf8qlQkAvYB1V6W/E3UuQKBXc1B04R/aBi/17F185GYUx4tYATvU/waH2jHFiit9BjRTgUuYpDwi+UEnpQ7nuqkPakmU80KZsTii0JowqwPlab9TXmdoyTz3Fk4b6pPtYGGeg8Ce+Rb8FYYJZ1Pj095Tchk7B/0Sd+3XG5Wm87Is6LeSQiunGMH13TPW6N5PpGcOPwlSLYcK66YcRqSSpIcgOM5wzSi2WaO3Z5H+TFd1dB0D9XuHKCDBzAIxga0QIsGyxLsoroL6iLNaLzr+frNBs7TAEJlC2pvnoDuXsELPcEMDx2UyM407DRTc6bwIhy3cWaemwhzvz0zA/er9b90iniOTsLcPE2OTJ5W/U44kJvpnjpiqnmEbMZ3Hdr2W29VRozubDs9sCozPQ0qbWL4ClcD2pwfJW8zTCsslkT2uRZIb6dRnOMab2UEpxuLLXS47GpW2VKLyAzxXXpm7+Q3nEsacGCCRjsriSyAffuazkITckOc5tQd5TIT66ZK79OgysppuNtEch8Yec2tmMekJtEjOPvWC+F1XRgwB7U4azX6QcRJv/yw==';const _IH='38575f52cec954a9c02e62a0b1e5074c35c0a5aa985b8a81733a799a648fb602';let _src;

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
