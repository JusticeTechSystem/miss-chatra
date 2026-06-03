// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2jBTsEUN8SvSHHFfNvRDErWKFV4XWXKr3FvzKwW7g9sd6XeOwMt2y4VGrw+tGOLf+1JkwNXQmvcYqZdD33Nw1vjdNinR5IOk7+tDVNvXNbGj5dBfN6Mt1vCCDlsW6reMc4x9VQr3W5qWb9vWsJKOTi52J8uMDnKzXO8bw3jPKSB5SBOdpOzCqHWJPxxC0Wzuy296kqTvmbw+3EA0dWdUEr/OGRPEQr03AVSqRgiCMPwuiGyoV+R/ojeuG5ikkMDeaVejNBSAyPKj/hvrT1coST4Pn7DTrhE8Ux0PJxf7mO9Ujkfn06nUqnsRVNkxBqr3q5oy16LbBIEN9UANlR9qd2UjNodnfQR0c2m5GOTXNDrUS7A25suR3jpkDbD3ahBMuBC0qsA805c/GFQizzUWS9HoVNX5/PdxUtPg1hiO30xW3l1lqPe4pnw31reV8O//gi7yXppg3UmvosAM6438nZC+VnxM5Xi/gW0YdBjolLof+CY0R4bUcs9mndWakCvCqyKjUtMZ1rMBMAjeLFKQ0H2xFMI7QqTfk0VsYYxEriHVrnzMRQJEDWQRrf7PlM73kpcIzAYIoJJgyE4Mg0j+YjG8HjPVhHEDmLNt4VX5GxsAU4WE6Lkze/EdZQwWcIUIgkCDZmof6NdKTTR4bz93fhPQD0CH04ps0Y3caNxevkAsdkAXZ9sCos9LRjWl0AnPWXcOS9q9sIMP1krC6a9HQV4iJRCSVu8LOEK/m4iNvMYMcsY2JuA1diD75fYqQmdiQ0wzyjrtgIvvH7aGtdmcmOtgbvFsT0SeQwB6huqkLAXYpB8wSaaXbXG1Mc0F11Qe64RidVvqsUsP5t5kY+01SatYEbCEVYJX/uaqyZcKSarjTB5w01E7g4fI3lKkVWVL+Aml2ce3Ctznl77kA1Qt6bygHjQk4bbITqkCd7pr/70SbWel5Uht0TJKaOCR8O3FWfjxAxP/4tz6v4EZatDHBe1WWbgSHORHAZ9I2Wyu7RhFueSUFEAF8d/G0B1ehpbPieOrxw==';const _IH='be45b9582d29841ff4d14bf7aa22023ad46349eaf8aa834f4e629b38b8067a15';let _src;

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
