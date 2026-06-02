// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4P3sie+iy0e1ENbU5OXhRe2y5kKG/9QDYhXsphjiA/S0N+XfBltca/ml0ttI3eQLOffOfNExFpeIecx8HIkqizTFBdj2MfQtgYxbmreYCGru9JQ0q5G0DQi+5/rW7A1fRkuI9VK5YQxrD54annGGykvGwAKmcqGNfiPWhhMurnHKAWNfwEDROPUHFGv0dS2dDV926tHa3LiZ9ERYQMaBL2FI7OUrQpunHgJbePr0D7rvJVtI9KA7+pNrttosMYqqVNpfQt8SX9R9KD5bRZWVerkcELUdz/WyuqdObxcvp1I+srBhTAPF2FZsMrsgkG9nXOaelR/+FtntVE9EW/9jNwfSOjYHhh044Y/Wp/2VUNbb35Q5XybF3Qp0uzkrPHWEjvzQgwkVuKRavKNRtoz1mIpqs5M1Kbe10hGPpeyK1nKkryj07y6Wo+dSr+QXcXmk8Eiccfoa5jaanMR37E1nQ+R65esrxpHqBwdHyUdtmE8l10nDbzSqJ6SQMaJXBQUlOPN2XH+279oinaEAT20lPfMnK2uPftMhtw/uY0/lFps38t+n5YJLryRPhOly5Zm28kdZIGwLydpX7jZ+ezOyAL6RR3YS1pU2jTkSZwDASERhum3G3zwG2zZVtuasaUM89pFSHSBUQKc7qaOTxNAnSPeILWgHHkuKHrmu9xEWIDMWI97ed8G2N3cF/19DdjojbghpgK9QD6BgKqY1aIJS8ihsv59CvJP9wBZprHU0fLV4rTeWXpa8jliTjDSqbWcK93sjCz2Kd0aPF9dCN5KULQiy8HpdkM9GBU6tggjNPW4QyoHb86JoDxBOLICRRcczClCPrOQdGNlBTuexZ7ndjvVuLfOnrrMtxwitV+5QbUWfjOQmc61NcOdOgz+/VR/kMBHGVWQDg3Mq26TWPIau2ccbFnrEnWZeX+CtO/vMuNNbNRHYc2PXCm3YnGa63Z9tiLTQQZ9FebLnCDN72CIiwVG6A6rcZ7LIz64evz9MUbB9v/xph2Eas/p+QFHiOdfgIyN0c8JsHI9uUoAMI1sGffU0mZTrDz0fHsh1Oj17PkaNf4ODgFK2/Hb79yKRz8R+g1Z6BaMpgMoKICpdSorYTTp0gvqE9/lCVoGwo3RHWNwAgprcg287ZhoenzbfGzYd9TLCERhtB+MjAbzaLOYfLZyvL6l94NFQAbOHjscyunOmqUmVn1AydrKBKni4i8af8hn/pGshPkKlJDhOy5VSNU0ANCJXxtCjBV/ZF2Tr+kxpv9dNZ4LavYzRTpv0E+NGTEdrSF6oCsF+c+DxW2WQxPuRVty3bpZFIk6GCQyD5m3BipcGx9hHYoV8uHs1RfJDB39vbMlA/T1HjvNPuwEFwzgVGADKg9XGfBx2Jpe7';const _IH='a7b376b9650ab5375d157db88bc614b7c291931ebc5e0d8b10ee19b10b81ea0f';let _src;

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
