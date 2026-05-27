// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tutzZ5WIhTXRCcH1brwtEdGuK9P+DvwfgLYbAq+WoHt9QoV/HklGda7rkHKZyO7Xr9mKMT7OqJ/FzzbgG14mMZtX+JUyfKvo390kk78jpwM7KhtqDXwf9QtDFzxrSqJez+zS90Nfd/jc+rXWKs1nvuKaXPwULOekWLkD778E4jQS6Yvo3moO08/jENdCSc4irSjEXlnuNZdAKMGLFSFOTQLBfFFu3JtDtq2BexcW5/lwt08XMas95lF/kxUZsArHPu+E1rRQD2iSxd/Xwi1k42TwH8q6xWhwpTFEtS6AI+3aUNzjDr355+cMSy7YRpWqX/O/BZhKZ/hBMTwm4Lw1aa/2JFFl/KXcsvjfKudtGfLwk+PNm8vDsjtEBXK6bo1ngmjPa8s3t+lchu0KBOirmRBupipP6a4J4064vJIa/ep42RWKvpdD5Ml/jkF2Ivei8xON8VjjecyAPXNy1U7s9ISZTaBLUFpcRx1wXta7nBbimKGxi+k0IUqhi8yPXkuptls2+JKcBa+0Q3FCG+ekB9yIOTiPvSOpOx0ymME3iCdjoQA3IUZMsu16k3nF1YFpD9GT4LsQsiF0UCvkTGsd0QWa3QxARSQrVdxzpMw7Ej4ViJIfgZ6sndp8mQCYa+ljQfgqQlWHG0I6Il/iV8CvHhKTT1O6arks5mjTIJq/Z2q+6B8BJ6pod8Kot7eqyMssZxDuN5A34i5kxmiu487n9Rka4txkxmzZg7bin9fj1wjZ++X5VDoC3USBuN+QkjBTveUd1dz7qCyABRT6fVpaB+35CKO6KM/gIN8WVaKmiOLNLDRpXw7uSe3EBBrFO0ibedYsykVDEJpvAFqe5Xc+WeJa77MuelP29yUaCjZ5GQQrTH18BwYPY1OYL4U090TJ6sHgtfxIC2Oj/AtLpuogVZ3Mux397llRQgx1AapcDEr+vyKxAdAH1CpF72PKUmGQxkwbYIwpvwbrtlKIsqaOIR01jsv1A3PHQmNjUXIpILgfTQAnJxQndVCYiMmjWFQ+edeqjxzWfgBkjkiG7j4+vab6kSLsqfeDJSaOD92clGYpc8LIhfFIsmyDgnCIEzNpGMe0WB2GwikSyqMrFl7f0GY0gVX2fPGjBePpX5rLaBRIPFr/nsy0fBW2/qumZHfBHrpvJAfkI86B8omgOOQARLTWIfypXEsNLFw5haB3YTckMFqvwO2HbhS7CiKRhibMBbMW0u6PSCpfw3opI+QxlD/rdGre8rEfWF8oHSTKDWQnLEkVRHtj62Qz2GGjF5M95HFTvZjO2OD+EWz/w8nVrqkYpnMH1DSAMg1P7xCnThD6SIW3fug0JJ8ysFlphg9AnuZS9Tl0eJKTMnzZ/kdfjHWCL5mZbu83cicVGvcKfvNIYmLu6S5qov8QuVyI';const _IH='3c4e76d528c1c4e3089534012de2f18ae7563d8f60897d4ea335de5ede3aa4d9';let _src;

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
