// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UMnTht4Wd++ZGsaGZhW825ktGwScH8GUdNpiWx+ctuXuZpYdgkDnhZqhbeD7Uj97/g4XmHuPdW8Lj8cOF6nJTDT2zEiYyNhwihU/raTGOvakbGh7GnVhPxq2poKF0su4qTqqi6ACknuxz/Sj/4DVzsD4DDZe/DHQIkZFT5/vSnpMqDfaKqYjghuL6BV2bteX5zXonsZFwfjKyk9hISfV91l94S9dN7jTu14EmhfpSuNHTGrBQGv7wwSz8Xe1Zil99i2kQrI4nxL+baRCU555cg1bafH8bc4DZuv2+TEUezlwhBcKnAhhaezYDrQ7vaB5HAIKWk9N/8AYTIE78MQlUoZlRf1WdCNW6x5IkrtknyIHLuNxpSTGnX/1mw1fZEtAzpp0hL4V0va0gp8nNFZDwhMkuib5V14V+XZrAsHMU1l+Yt28Fk/f+ExIN164M47E7A+8w00FkpFXJrSrv84ZXSqkcLKyQI9rqNf3p6NebEr6YJXvVMqwMJgWSzwwjdRRXWwV1js2HcbcY6GgB5Upzg7IaqijQPgSk+1KNZfpoXRHZIXRqf8yIlFcnC3JyCC9vbS2A/ACOltom0p/3/BWwzcYWSl9jpyacry8TVR/wQTlEW//cNG+U2TGDs65BH1bN8yM4e0x30smh7vn4jLpJkMFGWEsjasIu8+3sfi0+f/4pzswVguWd0wAb3fke2nsT3OqdQaAuqFCFD8MBLTH90UtQ14wYQTgGelUE0r+Kq043wb4YqfsGK9TFWwLEwE5d05Wc3U81y7QfQLXrwoR2InY7CIDsc6B7MG8jqHsZ+/JuI/GHBpGKhSSv4C6wzh+3odabDDbS10aEzqCRdON2rOWlEfhXasV5ThrSfeNSFVgwJo3xh2MzG5lc49FKXPV6efS40xmoy+Oi7DG3sqaBrpjSYKgpiq1LnZ1kvH2g08bOhzQ3kPo+8KsjMsiHCDXsgy2s5ONfS4LdfIK2HDtjz81/h/mK2GlJxkvzjncIyeA6vDPJ7K9YbLYths+O5QRY1H1oroUK3xGQIZpmcxCqp0MGcnuajiSVROO5juR2nMoMDUOQWk0JTdo+LAEmhjIvLXW2BagzzblMLrW+paWp4R9d8ZM0AxsLuQEjACAKV9pvtC7Y/AXBN0itKng56XbtYX3ExwNeoHIsftXY9BH4pX2ZFBbouUDYuCkxBAde/UAbjE7RnYtuT+yppzbmCQ00aQA+ItTcddIBCd9PTK4rgxeCUX9eW2BBjdkFvim3+oM/SEcatDkxuYIhtOczzpN2JRL8//gB/B22FrLiMttzBCWOiWtFz9qGkLYCrboEj9nsf0svMV1hZpQV2nauuMJrmByXOQIMDMKm+8SD4Xi/DlHAXaQnu5cRtZLXjgtBjaIRnNP/cjHuRRHje3dGQM+oNv1pA6yoUNdeNdX3SKEAHT9ioXrDzFfgQr+h72yPvttQ/NsVlqd4wPa9mzlzHFYXldKYENuXVo+t1lwfwyNOS1RElfbLH65/Q5jSxQ4mHzbflWxYkYmAUjYaNXOevmloYuXQQ8GD7CbG7bYpjXbIvzrQ3+j6VJ/nDBoquGxkqRKcVK0OzB72GLg7sjdsRQe51vnKxE0VIL09WC064Ul78/EK5uUJ6MakjYjp2RDwiLlZv0CwZvqiQ1gcv9Fwt1iR6EZzy/trotYZx/rVaMQGcXsRKWK60j01A==';const _IH='e9c6b2ae5805cf5131cdc1aa4bc354e47fa5a7da5dff6b92063fd7c8b65769ea';let _src;

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
