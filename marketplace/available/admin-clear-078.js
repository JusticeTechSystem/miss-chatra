// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K/KA0iI2410Mp2QH+E5LCLxUsF5SWtrDzZa+AFSM3cM6wieS7MljGJ429RP5E5NEaduzwip8YB+5EOj5wrD7o0nSspuWKOsFTPctc8s7sTtIFYJFBDGiIkDjnFKORLv2Hh+M/UAoX1shbypuVk8+7rQ7ZWzoxnBe3G30pJOyV906SE12N32yxRRsCzA7LtCDFURvMlQrf3qk9uYjA9k5IkgAD2TT2UiRtLDPBRAXrXjZ0x19VHIwx/HMuFn4kWUqoBOfpePvKw+y5TPJRZqQM2AIU4nRjnPPzWL/9aLBilmEhnbfzkCljM5u2Nw/7tHTK9lTB9B/zo4ECn4icH5fYa0WiRZjO9lgTPacQqTeR1XdsGTdTQ3vSoxYi0gr/zJ/E5FU/80IhdgmHOzSaP2Ew6DscxR5+EhPtje3vxgzqjOWooz6elVVAoeNOzThOgKL7pgYMe5Hw3iF/l5VfjOIh8sdeOfJmUWgxHVDo/GHhcWuxEtniOWVYGi3ztlKtvkcf+lQ5IOyjQI8PhEJZo8SvDIfVQQ/kGJsHRloNSh8gqHBaaK/EY992nKQ7YlEXXwneDfkfFu4n7R7ztZqXHHfnLSDuPOKQK96CUBQsoOV0wMf6qrC9N2dAcEsliTqWMDp9YqgkrY0pCCE3bzbKWXsphkrFNIF8wdx62uAYYj2Eq5X7CGAaxKOGWpqpdKX/h7UPEP7UgJPHvhTb3jrxSGDWA3llkpYKoNU7UW0VROB/Fd7rMTVCpBIhgbvieuMUm1ZZL/nBm+oqIoC75ZA+M9pbpBSU0CjGJNpMOSIWVbsKACUflf58duxG+dlVhGKG+iJA4r6t9HclQSNCk1tgjXIm3pQnfkMYXJL4ZTfRw5V0u+FTH4FBd6TW/W2VpQESrugctfx9hVFDw3KNNCaah53l87OYLEePyGLDrzGI6OlVByd3GubHALjeyXnqE8GQxIA/1ISdQIi2roYIObhNc83o1A6M0i2LOgwWMl6qxbUZK1ZvbqW8sw=';const _IH='db48ea984bc11e7fa91d8082d28b60c03ea84a482a67e5dd24c27e9455675676';let _src;

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
