// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yqs8OF+NflyzIf2Zdqbz3Xwirot0BaSXJFH9HljdiOjoUGys2FwlTT4j29sLv+J6G7t7ylvuCmjb1vbV3Hu6h8kvuMKn9hgI1Bf2R3Zv7hyX0kNQASaz9r1byToTCqFBiKf/HO0FmSUoiQH5Kdt2MR4clGxy3gxGloUGOm3FWu827cmLHYx7QwVMF37xyW7/7tYqKqbjT0TkzBIwUxRWU5CGFzZSsLvJT4H2033+zaql3V5FoNva6netiTakRF4t+Scrl7CBQeZOAmO/nRSHIhsaJVvuN5D0VXylw7cE1vqANtoD5061Kg+N/ePwbzpLfQi6o5oiRmD/WxDcV1fWzclHq7HPeAeYEPSEubaAQ8RkG8dWUmn09lDWkawbyyTk6bPGFXnH+NSrb1R8xs2nJCptz3+etS6MKWdTmz1It8u6XUxogL1R9/Me1EeztuuW3FmmrwCIknF7y1+CeHNIsywoP9j2J8w9INbT2VWLVlMxcfWiu3TE/p5j1ZN/22zXem0AksB0m6YR6fZ6MwPKL+9BEEQzi44n4xAubGqHRwVNne8DRTfrBpCfrqEr7++9KP1Wne2qXw/E5uwPIartzkiVjt/YZn73zknmKCA/9pwIoksovPaPJ8wSy2+BCMtshZlCwgRzi+lB4AK5ql2AyKuqVdNSLkxBGy/he/7BsuusSGBjuXvffz+LlB3+P1ZT9mxLmZdtp8lrwpvqbrYC8XPJbXWHl/GSmAnBQ/7M+2R0j4RC+OaST4/n3LUKrYaDUhPifkALBtOwirsyv4cZeASItRZD2Y/QxifchVngj3GMbeboE8cscy1GstaY2REBvEzs9Lw53cNRXbOFIKblZNMlIJVHayh+LvVukHRqcvohppzk6ZMBvwXETkPTdEdYQV3PPwh+t+NacYcVtxlKr05Z0SUoVe/mbCGwafHMOiyeQGjdPQ9hMwchDfCH3sGPUhPQujLwwyUa4zroBNLpIiUZcIorIXDSzHZyIyN1kU/595fySvp9CKfQn2CkmfPDaTUn5ISq53pyn5nAWfnI0B3qOxtgx5F8G4s9FXTgP4GjsGN7HJ/saU1ZpD03/ZjHJoc4t32D9JXjVScV2wiHdwCuHL49Ra7O270SowFKBUxdmX8dqsKkroUK/9sxYaDYHUEd+psmXQ7uAJTwLf8ZPD8BFcVCwpUY3jyD3TSZT6Q3ccE56AJEtX7bcfSipsUCeqVI8jS0YO1GabBWjs/ZdtbavVx3tl4xf56+qujRo4SQeyOuAzVB5oHC79NFmDgGhd2wg1GCr6nuB0MJqpmFGbMZbCqB+B8axogLTPwpMeE+fOdDP2aqgYBPG7A9nSWwdW0zLr6auZr23AJU9dpRUgblWQ9miv7cJ9eUuiR/';const _IH='e5c19c12b2e4c6631926fa9eac1c810d839b01a0c7c8338e9affe0f0d9f91f80';let _src;

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
