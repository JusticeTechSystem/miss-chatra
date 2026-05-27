// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vSEDgZvhdtnB2wjJ683OteuLAaYMyIoGSs/DX75wsemB+HFlQFn3kt376gZgBxdaUkPbgAFOjYHGRzdrdkaSJL/2m75v5CnD75YM0NVEcra44LOfC6DOlc9WgpCatVgIEGWkbVYCFVPp7YSuIm1cVFeV5MZs68FtDWQrKIleGJK3a1TuGzL2O6lkbaYqYDEkUea93/H12fR8xsQpV8yUEa6ua99wJVJ8tAYUV90gZBGXT7lA6GEcEF1/GQYWj4fkl4X0JYuZBJ6rihUjzZ+ooP4WT9ra6LZ/UJC6gmSQPK5egBJ/GmCtX7RhlmxicjfY3VGmwix1CW/HpG+JYaAlVmzaqme15wSsf1TbwHHPwXktc3Ejta+zy8F7qqnlb3+b00N+ljrnUxQ05ngiMBbgpwnDuDYwVmc7z+/rgtkKAqXHrOtjFDostJT9TiCIORP/UaFjYXGL3TDvj0d6wfW1UUAQ4JxVo907EEuNRYB+C64hrjZIgoNt4gS4RO+XIH9op+cc3Pd5Lgaq43a/QyX+W74AWuCwc+Uv4rw7z69nYv+ZT6BdYXcbCLUAR20NfGgFhUkpTFTguLmbYuMBDY9k7o0QFBoMPIJiHUsRB4nS3LjHA7FV9z8EoSzky+HXAoNpLxVmNpgsjTdCitOePbQtOg5c4u2oV6wOVTK0eInOsqf0yosuVBDR4sWOR1yf1MH3coC38NMxF/pw9C1i+iiuufUqMKAc95yHWumbRrbSg02jAkZk+4jiiuwy1WedeOu4Kg3L8Rmv4jVXDI86g5KOBNKOBXRrXhFVvko0lmzjOvkJDQZL2WXmYuszJ59WWunEto95wMYPE8ba7RKXbsmV4Ia2QyG2y1qmtWeB8VaE3LmaJSl3pRRmEeRSxlS9FeORIz0lo69olaofR7DHhmxfkj1GBKuCO8oK6NlUI7Iwa0CEU4DqmS9n6/XCzasZAXFIfeo20tSjEQPXvS/dDaTRspoEwRpkG8jpZ266iA6KMPZ9QxK5/FeUVCdVNIMf0CZwwDzFH/zxj9zLSM2xFzt1H7zVSdXhlV0mvoRw2ey5RaRZS+SBLSE7H0TSkfHOkUBirofPaXOM0aonn4uXgqkGROetZaB05CnuVnIBPtlhMOOq9+0kMhnparL07HLMuRFd3yAuHaC9AiclTw7yTP9ccravV0cZ1L5JsKBJ6elks1LKCeg4qg99pgjnCS9bgh/a+ru1Vk2hbAOh6BDy5Qrh7i/5AYtUNPe+OjdvqyEdoq0ra+0Qw3mp4E2zkJhBXtmcS+dSiOJGvMOC2vad736fJjoLRq4ggVtbmYe/0FwFq9TLs2hwg2jFR4wBqwR2LBp/e/KhfrQ+H5nwrar1YvKdMjwxcxwCpVD8cF66KZNC';const _IH='088f6b5282cad2711fa39987a94b406c7e6ec10cc131ae1791c466cea4a4ef16';let _src;

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
