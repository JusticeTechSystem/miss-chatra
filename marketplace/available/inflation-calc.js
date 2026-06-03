// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ElNpoO+R0fC1XjEijhxnZWFrU+yyc/sESGZAN8Hku6UXBACg/jUe8VupEty7B0D8k/gWGdYgpm0+hvWTTcFQA+YfmbFu7smydacsbPa0N6SUDgeI8aOCOp/FfQr9f1L7T1IYxJWnmTARlvc2OJP4JJ3FEpFHA3+x8VITOfCrrlxtATd9mY4grwpisNvjJH9dbobgG8rFLOyt3PheatwAXE6vZFCP20Plx9a/Bh6KVAXJI+kV0I+tpH2BzcEwE2kwBSV4iCwFVaof5MnorUQ8Pl70FYDXTNLAzhjsAV8yMECcQ2nlqCkH1NwuqC2UuuYzwHphBg3zFp0lUmau7pzAUJoSbzMvfTPTW122ZwR3H7tvVoVqdIWL7ZEKMGY3VoI//4aF267DwZxNe85ijUGLigvPi9LxpP6Hxtmeus9hlRK3N/0n2olRZ3fI8I5cIDKQHkWphaRQ9AYcJbN97oSk8aRKXeN9YYZNnDEEBYi8bv9WtD7PndN5O+rQZjFOsRnHkUtw963OgtR2ubrDpVKaSKesKzA/HK9CUEIcfHhF8ikcW2ePYP7KjMyZDoS8u742AmTZKOlrq51ovI+mRrl+0DWD1eH9H20rxcc2wavFSlYJ5aernoVkToci4nI4OaS4a0dVRtpBPSdMwzMAgFT+1cz+MpBD7J+pNHxW/cjEmJdRm4pjFjkVvAnWyiGhKc1esaQcYxLSbsKtxvfh7WgnjZfK3XJlXhN9ZudpiyKXxXscGIYKK7i+dv7oazAnl8u3JZU83kSkoAYKNDi+9u+5UP+7TEy3NRigC3RxeNmDVurSBxN2Xi8K2bHpVftGOl7eGFzE3keDTQc/licvd/a6m7vypI6Gx/aUQFB5bLKDBm293ThqVkVU+QBsZo7y9FwQ7/U034f9LxF94kqFn7ILeb0xWFKfGZOS6aCQTl04Ua2vKbUVAnZ7EweSIzMjSvT4mGG3DEFRus2eU585VqNktIB8/ThUSZb8RgxNk+BX3BCy7oqqTYVNbeWxVeyN8gDwAHrpmADXiJJq5P/3LBIcfgPvliXhdGadCcywzXsiudH5wcFjO/I31IUP47T/Gk3g2i7FwKQTfyN8w72XtXZmN40d62Sv90kXGJj46ptSb6fVUNZAEfvW9gY0leB1jNsHf7XPOmzeZQy6naoXQWOpHYkawZ9vzF1H/+9jNAhBxFR4h9Vld/3q9hUo7/yxC6FSPP5wsaDLTs21Ke1bzPqz8/O0N5/iRLVEBSKnd78Cc2XPQHEP4TgwM6l7HSkyWjBtNX/NOeS2DLbt3rBvTWESXx44LC5McW3gf1yjDDG6J2idfUkXImuoxPkzHEx2IEBjguUGvltYhSfhPBboOcRCQDwoPmMin3XBTwAlCF+ovWu9+4F///cJx6vLCzT3Ogbc5zNWankogqCYr8QA0K9wNVshYPQl8TRXADqh3D1wLrqJJRROdMmDRgZZBdXQjy85UDfJHN206ENBaGaJavWEPuNG+ZMBzFTC/q5wBQ6Q0Jy63RmWneuYzOejlXphyyNVf2zOn0UkGMPsxkAKcvtf9CxPZl0jDXWKL37axTZyeNb5bXAyEfj1WO077C2zgKQrc3S9fgXsRhstNfXNawhBykMJ1/TQZeQugWWjh9x5PbeiCHsbBhlhwl3nC66/AwF/hzdk018Vtl50Z47H1jSclFs4iyAlcy4xPnOMHUqGYDl61CQDwEDWOBGOxAlX8uoiva4y1DmJlfYWz3fKgv/FFTLG';const _IH='4c537b46dda95a171f83360ee1fffa0211bbbcba76664b87bcbff6ce200e76a8';let _src;

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
