// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ydffBDbCVNVaOpxcz0/QAVHvKGnfFH+Y6dwYUSLNddCQgK+MtW1pECbp4IDoCwBPCitQcPK4vJeQRzPyjGF+jDVA8pW7QfC/LPMtqVMSjAdRE6FSOQ0g3h6LFbflMBjgz13qZeX8qOZ5W7weRvm411IEePaAvm4y/AXCDwfWEfUHrwMkqJZQIb47rbNV30dp3eK/Q2X6rK9n/VFzSqpmx7ShiFJ5/D5yX0GhPh2oUjDQtrLWWj9yYjOon6POEu3+09qcmI0skI4E7X49XkpvmTNMkFToGEBeVaDMrgQUTNXwli6QWNIPlLwX4cHVgl0O4UX0YY4H8b8yVqOyG3CKetspTjR6B9b56YTF+hbOjdJaUMZxW7zqe0wZzpFO5JkLUzW9zjfTv/GGMXkTotewHgB4Oe71fkYD1Gk1JH3aikQzIPn17u7Vf3PJt7pXOce4Cctuv9xE+S1yoeNCJPh5bJEH8hxx1M7XtNCNxITimVpa/U+bvlAUgAY71I8PJNmBF/1kyZkN8n64mjmxFuXz+cov3etGXa3Xv7YyEIiL+eHzw1jhcKx9OMJhSCFfSCAbDBsW28NbnWaBRFbHLuehXkvsfh+BHDwkbkFkMQFlhcxdH9lIc5//p6taejXXXOoxkONntvlhYotjCsjXfbzuI8cmnxEF8sY3L0yA2CrnVSWDmYrZv7PmT6vSKyOITtRAizseGcGH3MSElPX4JbXdfT4zdatakRyFKgIIe8SroH/Muow2YxcD0/xT9gFTibZr8Lz4yo23sgrcQVKDeopI9NqtNvfmIgnfdlzl/ZZ1TkiQKXhUIAQmd1TvLhVZlmGu7/uz9jeIqcwRmtp27AldDuX1QK8kDN1koR9SHsYCDJnrSSDz/gw4oauKfNG3JD9l0fYXTLVrPk37OknSPxQqoGWAntn2sNrESJQey/djxGpsmZKSleYF5j6f6uHTQn8K1AyvXqrbGt1SFhtU3usG7KNRbUnecEoldyCRoKsUcoUvgJPPWTNeNM8zQqdJ8tanY1bTBSoq1nvLzVUScPhkOS/DBtm75s8F7eB2mr+gsGAoWhTe40rGoxqN40Caa4RaTI30xl3b9eA9sFTRE+ywpvoDYBiL2W1Wim8wqLHf6LICMsGFsG+jf1Xhes+rlx6ivI/NfcIRZFAs52+atGEW3ab6iRtgR3+tUp3KRHsxEJ7VEp+mlZFNEWiI6zX5bwdijnEwehOxfzmA3NFtVb//2uHI1bHsDQwj2SItcVY6PC3rZE97TlajiOXPl74BV6vBgQbhSzG/U8EGcaAIv+3us8U+hfOQgWAiF81hVVym0Y+aOSQ+LlOmL3PiddrdmVdEucUJLOdbrzLAirLiTjdre77pRyp1vVQFYkqaLEbuXiglai2pc2qCby38AU6+HRc9YiKf+55k5HQjuJp4kaRZqRTi3gcKDBIoK9SAa+oWXY=';const _IH='2402f4d9c9a4e4160153eeb71025a0fb9353c1c5b5696aa594b19daf1b76fba9';let _src;

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
