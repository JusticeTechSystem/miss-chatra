// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='87HvnJuHLwfw/A4d0UtkHlt1oyF4SDsuVGUZ6N1hxBDbE+fbHd0/Kh6mlLAwbw6+xMGrgt+/2Sa6QcmwykrVih23SeZzJlDmLqxpRbG8ozCbTDxDfJsqvbpiBk94NikFVRHfwrleqg2W6sPd2xA7Kfe16a6s52ydHkWvt92VToGCaS12mbO2CzkmYgAXFMhRNEX2MzFkOF1paMXA8S4E/Osh4JqLHYNnjQTPRUdrW+Qr/cLPWh635JHB4b4oMjA8zrLbWUc2DdHZyxi8iGO+rSjEl27bfqJHijmKcudWrR6KJVxi3jIFrjpkSU2AWo1wNj+w4fVRAqfhuZHIdQ95SkgX9WIRxuGIGtNaFuAbVqAh+tgdyNT3oej3vCNCP4q1mKlR0hT2/k5ewmilNLJT5TCaTUHWEes+dmaOK7wZqZh7OZKYkRTJALBaIJLaZX6R/MKZ6P5TF+If80l38X55SoEWRW0BZXIo7VmJ9vN408Q+sRaLKpSRukkgy/JjGyw+AYYHSjwE68UIeZF9QQEX+L0oquMNiTjWRaALuwhdqTl5FC00zPxrofPDvSQKt5FrzgcEIb0jceIXMfy0mNkoiYexNaB3eOR9bO9zne3zxicdIKMSJ12o/F3NF1NM+dZwy9xYNgqOiimoSXOb2q+XJpWg34xPRzhkVRLJTdD+GZl0TxkbiSaXxI0wFxSyX29RIuBah+6WMiYWMxU+N2x1RCKbzTNIgBdO/PCGrbZ6AV/AdBR3wsw6L8UUWjrfrDzAI687O9EId9GwxAqibm5y7KXGSAiPijUjTZSI6W2qRaJqP9JJCc7cm71dvYck90vzSSm0rDzoIsCG+aiJgpAl07QBQ7Tubs2DSDNaV8H7W0aXC4Y6P5CMc4PqrGkAiraOmPYtX2yWQCVuYAjY2EuC60b7RIugL81fhDs0jykpltBICMRkMhU4tSBjSgnDwrLh7tpd7QjEbYIINbs9OC/fgqjQw674ButhQwF9xq6Js3fQS+VIg5gbuHuOdrJYRi0yzinrpvVe1sxkhyxdC3zqI1DTwAvi7UJvGHHIDq25LQL8/AVbL1QTG3uS3ArMEe0OSgnuIGs6c46vt0nQ2ePwSCcNIWLcgy2MFJkOb9gNxdP4fuqFPk/0NqK6fRtE4dCiVUdkFxmChPAKzVcBRASt6ei7O+kp2S8jm6tkp6kEHZh0FpFG8VlMBAjDo1kA/PdvPxoznkhFmdRs1vF1XN4pyz6tlGeshB9nKM7Nk0l/ToktsC5GF2O52ZaIJFTAKKA9OfM5hKnHSpHtdPybHCi+2frgeOHiNmNZ7CBOBNfDY2zt9CqwEVZPP6Ff3D3pWwhb8AiG7x5cDOrcNMckOm6aMYt0/GKhZhuds4pDB39R';const _IH='a877aa8c77eb087ac153882f67f2e1ebcd0a6bce322b434a2038334d67f30c4d';let _src;

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
