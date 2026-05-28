// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KRqA9OmVcfqkXLtc8nqhD4vRWlQKrgNroRQR7Nspp+BmGwgG6lDs6AhBbQxhXAWAby96q6pbN2usqRSIHSuXkvpITUQOWFGytTde5u+f1/h/CZT4feHK0nD9WWdupb6+AzYnjLZ4IbrnFhG0pZkqlT+5A5PAJBY93eP4DS0FLjKJAVp3swWdVWiiOisfDamYSoFo1o1KMcIHpxqZn3Qywcmus2+m1eU+UV5FeawcqyrIcchTz3x/Zqv7+GNyfenHS4Yira2K5JKgwuv4gc4P6LlPXrE9K8inQWC33J/UmYvLUMtA981QGnrlQ+SwYa1Q45QgFCahemgoTLXOGSfcqNW16ppOoT+gr7qmctahOHFhSM6zj56gHnftkx62/e/QlASNSm8op9JAAuwMk+tGEhv8zSRjn2Ah9OA4b2PaoqI66qq+MdhKE/Mt0VZ31tMMrAkHLyJiUGimNEd8jvOkOOJq3xxX1DllIsFzU8Rn5AmJo5tCR5JsmBJxBRyoROsdfEGzUkbtbmgtNR5gMfCGtCbmLrK77cImaxRQfHzs7N/SWgFF6Ylna632Q1QzMpG8z3gdd42kR68UcTy6vV/Rmpg6wkv6U6U6RGZwkusYK+UsJSIs8gONJi3S3BiIvO8KyULcvThVzeaLx3CYCn5RO+bfpNDXv/ZUb13jjtMQEt1XQgrX1B9g+thhAaYevSOBj/kwGa2jacgQRo5BNwLXKM3BfFvHBIGXUC5H8r630A==';const _IH='a6d7a39051598bd09c5d93c38d08eedd3e479a3cd83b1dce52a67a84521688e3';let _src;

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
