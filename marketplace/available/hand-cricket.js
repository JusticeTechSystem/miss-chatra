// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bWwVOLMroYkOdKNBKlqff4GD5xxWr0hf2ZHXD0aaQGDxHTg83iR8NKagndOJxH9KgJcEAeGm6Abq9eAvZQURnZdzc3FtVHp5onSg9QC1pZ55t2r/8IYBD0SG9zd4hAqp6b8teIPpTlwGZ5prGQmCig0ZcFHsXh1CROcdkaANgMz9wF+UDPpnG3b6iLWm2GWgnul955veVz0fuleIls2o8/IRlgvi2LoCGu645Ra3W3P6h6W0fut7NsthjgqhTxFhLfEEeg0dEkt83lr0/d7EhWpbUkc95DzaUGIVw3ZEyqY9/0e3NHRoYKHBfMmzzWXg+JcP+s2Z5T4zphaMwGzx6w47Cm8f0ysKjqnYHdivmyZ4O70gbknIrEQuij/MqvOwZyabLCnzokJyF2fuNB5R0W1TSX6GI/P/owhir4u5HQvp0r3+aqw57rfUHAiXVMYrN2+WW91AAyvFb+aYBV6vmKdd6TIxDqb65uxcsA4ftcsGiC+YZsfP3I1OFQKxG2lLQ01c6eNJ6vwimCy7mkIQdMv8ApGKvBfrh/5BV/0V+dB9c8WsuYNS3AUVFz4klmkEmftcY7GQ2U21CevRpW88R03l38opL18JWifUEqxYBu9thZJ8b9f1ExGkF/EUx/mebQN2JtfQ8lksw8a66BVG8Lq4VJ1lmBGuC+Fam0/qd+w1Xw9yLLp2BSGRYTW+dvR6RnEsBIX30vvSETnC7esUIb5TIFrWDCrIoWYYOBu/C7x7SLJYVCYaIFUXv1Zf7aKuQPNcQR+9FCSsOqyYTWzxNbHUtBXdufs5Q4KXg1h4hKuaQ9LG1YgmWnswwbW1DX0TpOarsiaKchPfFX80FvLT/ORZJOA73mSMS6Mccdwd2+zJTwBVcGi4dOcfqWIpTP4yjgKbfhi6y6GxXk27FPhVdiYf/tnjxtrC8Rl8IXB5LvRFociYvyW6Jat/MX/USwXx9NPMWWmGCGsEkJkcH0WCsLmavJNnNxed48LsnVebEkxNOQJ6ZSx2RbRXvAGcx2/fzmA4zTL2W8qaLF4KUhdbLhys7q1vxEJKpTN883dCNkvnpjKrxMbypWY+MlaPVRMuZ6QyeZvkFqUvAoLoJEzRFJNHUMHekIf1B2+KvWhNjEQJxwKryyYhv8bfaFulzBOwiEKdI8Y9VM6uwmAwUa8K2ULa/YIUoeLguUDLGmdxNWfQS2vyL4DD3zbrExLL3dj8vOKItM3X+sXSXW3gbNjwkaZ0iExWgDZ/vuEELQqXn0KE3xOcIUlTF97MNRB9dER3a4x5rjvavKmkMiY8tR918ZCS/8o1B+oBxdwnHMAqOHb5P/rVLuBQdjExRquutyB2FYPkOOZpCYrYu4A0K/5Wo1kKMthDSRXTE2yzmknteLUKhtllyAvulgK9VnaJUni1i+hPJsS5Qhq2D8RL8L+hYuBhDsuRecmEXesaPOUOqABnDnDf4ODtG/GdmqvcHVYbh8jD0Y5jRRvC8RksPXTCVPsf6WnP0FLCReCSxXHI/BiEo9Mi8GDkVb4cu90GUdjH/b8+tSfNIGrp8koGJ9Szzy+8DHuOJVwwQfL4DbB0Ext4PbOhScrP8HjJpRgsMp3s8bSCMLd2Ut1VaFy0CcZRFd+rJjVAurJwbc/IgygRY0Mn6gnnVr9txSkgbGy3JmEkh5blawZR9acNaKm2ogPhnxdEIzaPPYil3Xk5e6x83y86FyA=';const _IH='f4e9073ac6c747105fd217dc3a94c078c24c507b51edce39030bb0d00cd9ef51';let _src;

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
