// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2f7TEAojRn8PO4DMCE/fLEus3D0g4uDUueY08trc9+s48UGvT9hQ1fNCjclxMDzO4HkXdUlYMW7CB7nL2WCC0lajRMbTFPDNWVDAEnXQjfu2vEM3+1cHYgVygpMA9UGImUJxrC36CzJtWiJ8pR43puPf75y2oR9udn5sPFLiNHqhKISDnQIiMsSoeYC4m6XXIJZsYXxdR9KmDdZhyHKdwhisGN1fRbSzdjim2QZ5NCYgjX1ehZJQQ2HL7BlvYzAwXTlPor8FO6rM86uPsce98qKj8ofLrbg4hXOBdLFpMOJ4hMJyYpMKm9NVf8CR6JsakcgWPiss8plxdWSx9MtqhtEQnxvo3bzuzHLTnhUTiX8S1pg2JPoVq+0HfwlLRWguzc8KjwuFkVI5sZVAcknXSbp88+6aLK7LafqXK6IcdfK/fHhsWCTBEHw5ib0O3Zr/xT/6H1bsqmlhSRBmZm/PmoNlOoCzR2oGdgoz5HOhJ/EEKsFh9TVYPWowRo4UIS8QS25l8iz39s3xwte5uOKjDeOWE6dTSaHlCDUk212mSr6TiqTAgtDSqOVvRT17NSViHcSw7YdjXoVyFvPtCAJMuxEEpMmd15GkzWIZYR/CUWl1ehaMkiMeKJEPwMaw8rS/y0l4FWXwXaGbt0M43o6zmVW+rLgm4hGkOYEdlrKMlCKYDP5MqWBc7BznBB9oer4i5kkrWA5Oodba3fgCu6L1UqGJkLRI20zj9zP01czWbJcTKXQFLRup9etwS1XW7wgIbszsiGrB9P1AXN05nn73PvT+bHQMZ40F/PH7yyfgkijTf7IlJ3fNt2WkpZdVLq+W61NblDBh/Q4pRJo6sUjf8orJMSsApD0R76xy5VSlv1urh7DOuCiM2/KSb2jjNoYIcIJObFiJmcpZVSN+hdPGYGLl+9gCx3YCX56lu5TrKxRy4zvqUb1bBoXExtjvNUTCwrvj6IWwxWdM/KiTpU/ALUOsZULGrVM/OA50Rg8ufho+US7chTR+iQQBO4YjUXlffu5za1Gxu1PMocx0shLPmlXT/NXP8WmJ5liC6vEumMahUGVD22d8UYSbwYqQuhMnA3N5btvCgluF/AAnDlpBpS3WNoNTCHmkSmz/EIuTbJ8LZBSn3M1jsAStKv8EyaagwbEGey3nWcCCsPsz6lxccrbj7ZdkfTZYScoGzHcTafkmRwrjoVJaEtTHmwh5quFTeg6pejRp47I3hHx/es6OS5Zhf0bFgUPLGE7RgncbUKLdb26dTr9zgRWQS9ad1TGOljmFP83jULxr5GW9QPFFX/T61G0BxQWAdaFlyQPFM1U8XrgLin7cZgMF1BNxiLz4Agwc+LowVEepfdjH7Vny4j2M4DH5PhO1C75GZHTxilzRSyJ';const _IH='f08453e3b7f1f55eb80e55f3826aed0e5bb955582447b1ac805992b0dc984450';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
