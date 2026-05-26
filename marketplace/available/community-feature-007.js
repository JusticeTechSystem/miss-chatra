// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+51PbuelnUPmA/uMjE1WqQVOexKhRwofUk5vVY6WzqbB6DEfbqJj/AYMsKUTC0/JTl5t2e+JXFCeLQgsYGvtfimYaN9SPFEV8WUOyquLdf0noLCVu3x2mFEUvOLEcHO5BG6PBMK0veQGtqNfTkcF4/YtJNcpQUFW4mO9+ZbmLPTs7dPGVVzgsZeIJRLe6Y2nmcIdGuvOwR7JnuSB2NY+qXmytMKS4fNomgF++xbhxH0CRvYtUw1arkAFnAw39iJS23UP/XTkLa8RhOtErvxBcwgrZl1CSUX0vLoCSxCSoOoMStmSHP4VPrYmXq9IK3MQF47me7sFRIrdK3cgEsrLRIFlSJWjWiKNqg57umZqurmXNdSGL8v4JPBYK09hZOKt4YbSEy1PKZvYAt5AorxYxUlHUhs9Fji56FYCo5rQ2tLpZ8WfAEmzmygRBZUwd0IiXKEHLrd6T3LjX7rqYJBRzlP/yE1W5xlvnwMkOecEOcmvbms6LTtuV3yWwVRPJwbOidOEYgr2Dz+I+IHuFONCY6Vm6r6sElsqaNrNldagpoa3Q/XZLlSLYw5wXgcicdfS43F8o7VwqFs3+XqBkexmym24ikvNgnUhE/o8AIiLcJA9bdRDrKooLh2+KDUsM2StiAH6a4OG+NK7jBT1pSNP87ap8Vpxth5T9YStQQR2B0dYpu8ZC4AWR3//WKFeT5ll0FgNxycYrkHHkkNHHjF+iTpsA37CaI9kvXey';const _IH='f9d10d3c60db62f6d56d2928f33539597adb9149de8457d0219be8e49fbe45c6';let _src;

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
