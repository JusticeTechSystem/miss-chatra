// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acqPbMaR0pVLPGb5b4YVgnXKaQESBw7Zm8lUyFCcNiCuNsDv3lY0pd25bS+2TDOW8QLKh6bn3GNOIXIcd2m6oEjhOUVs3CFHX78+aebIoAcmoo7KHJbilHebhF7r/ISN13/yYFPOllrSm2pB14ihdcI/38BvsPna6lTTbmRf8hXVPUVDjeU3g2wFweYAmHoD5mhvQ7HlZh8vQLZrGBfFhybjE5LDAJrScBJGMrzg75L3fGTKqq/MncloCsvevkoLQ3CwYlQ546jk7gPOn25X9NW5ffh4EA249N+bBH4SM2Lfyw0zrxfUwnqyMM3R/2m72WFVmd4DogPrYcVYGZKJKxOXlpPrjQWTPAkqEyCZqq3XNGK+C/ykysaiiESAHgSy4kjXjo/dpIq5Gn/PWzj+d+HnjgD/eHdrP8wLAVpEoVKjIFMflPX9DnO1m7NpB10bi+6tDEmojUhp22aBuTLjt6BEPUd7YwjfKcVJ+ytT7tbODoIbHrRVjNSzr4tPWEnDbIV0UwowGhafwAl384XWeQyH2eO1oQwKsrBm+IuYj9yW+iLuwQtCXAhz5S6aOeDnk6sTpxKQQch4bGJ+/pLQRBzqMd269ROpDKX19Xm8UCyK1SKAnOMPHRUnkpKpf8CvmiRjofhOTamxD+hTXDOl0+PTfmjHI2woShUzmPWmaU0OsvHMApVSMyirJA3NWsRjHTPu0+efO4QcGSbqcYbvKL68xOqxaiiZcR97E3oOAc9E02klKgSC5DwdNB054hMer3fgCtk3GFmLisqOko+hV7LWpFAabM9YZzc9Nr+uvFlbSrJj3M1Pon+mETs6SJD8kg+PRWxIYNQZj0+bX/mHs6TpB5GssZy12kzsiEGbenf3hJR4p5hHRadNjqUWUwPzqmT6P17f4vILBIpATKM/PTwWXJoT4k9DLd4cxX2tvJwVwW+vwo/WS5W2H2MQtsD2QudMDkb2XyGMfCPuULj4TSwWbryefeAsBRW0MWSwZwx0ZhwKMYjopd6C5lckc48vvpzXDgeGwu1ZM2Qtiakkdk4lZasKl57FLWS3+zCut4JIBucRuzEZqCfv+B1vWnnuBdAXN0l1tDNs4FLa/lrPxmcp69Va1XAguiUIriLiULE5mUg3zMNl+N4WPUl6ByCP1Jq3gWdEu2iaYtOWTVPE3nCSJQPkEaZWVQ0uIE6J5wA94+tzPOnQfRLZ4Xe45ZLNaQXW+I083P81ule6dieUsXn9VYBR7DCxcp1zPbv8r+js/oTt4qhrjPBESLnQcGcqLhkNhjQPmORecaT6K8cXGKPs9tf8PdBkQ+PNkq3AtQ0VcqQ0kPbNTE6/y0u9ZECVKqUxn6r+rd/BkPQRIWBAqrPaK3QrFKfyLPyolc7chSy/rcCcDhCyww==';const _IH='0dea9bba1f8144d7081eda0b1d7b709e6e9234c29782d693e5417b3101ed5141';let _src;

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
