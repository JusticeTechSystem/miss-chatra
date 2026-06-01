// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ71kduGfXA5c83EQ9sbvapC5A+tSz3p4MtxffTO3EbtmudMQ8lxBuPaHJD9xcIqfY3IUrFCvxMhnwZjRtIJhbu1xf+fIyPT1oFU15AlHMvKawpnXVtJKm6hh7mfiJbTgzIq+HPAzxHy0zif3IyH/RksOsUVLrcTnGV/sqIag+xw0IFsSPgE7jIa2d2Xlf5cHI0UNJGlWUFdC4Rx86nkV78B9LcrjvZMjs2+rIhE0fDMRD10kA8PGJ8ujFckAbgKeNXpkoBe5bQrIHomsAcKk+FxzruRoo0fC/3s0qSN9YDc+vbpn9WYtCoMj3A/JtMHbBmyDySOaob16mpk0JlxyPcXIRvu3Ku7GZUJgn15MzvIVhnERvxk5+VUVP5LE3ODZ/wf2sMwIXdO+bjrc73JpITIfXi7r+1kP3Lij4PGPQ+UEADpKHbmPwleeps5gClIbK/0xSEkdXxdsEVItUb/hrewaUhWZu6YHXEZHrFS4eMzHT5G2H1TKH9QVdCNI+4RaKhx237ykkAjmM8FJP/Fn5ap6iBYnBhOf0QIcBtqvCfNb6GaGjj51qZX/vqAW6Cr3xV71D42Rxp+wyet6i/rAKOMD3EJaI+UpIz2SbmmHVfUaBqhz+wB70HuDWh5ftyXMZza774lk8aVxeNz9ElR6IQeKpqZYqKyzy8HRmFIi80CzpdcrVDMGCD6OWHgTFM2DnRszXRieMu8WK4eMhd6/NkDCswZMCCn/GV7W3P+XOsouZ0amU2UxFg6TH2emFysJFwsw8RRbeIwIRsio1rbLyXHN5aoEkBOplzx9OZ1Fzi3lWwWBGSDteh6+cOv5BboyLf1IEqkcasex4vlmRZ6GXK1Pg4iv9IsxLUUqndGoeqJSxciirPIjAbKQoUz9YvIQqLL7tQPLCWMg4yJ0gGOLcQexHsZGHyQ5QKm1ocVgUAL1UvFiblglevBI6DwzKQB4NvwEUq4FjKJywFVFa1ChL4acjatm3d7fkL3WlyjE0VXpkyNX9cLLTkkuAJ965lZKBEU=';const _IH='17f3b8b7bf0b1dc1dbbebf7be65ed44d553330ff62a46e958609b2ce412cb94a';let _src;

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
