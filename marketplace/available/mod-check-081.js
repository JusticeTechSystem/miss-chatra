// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrhzXBqC5q+uJmHzmuTBGLYaTDu7Qfu3hSaSwJe+nJDFF9ymb5LANC86SA45GRON1PwmEkeDhxwT8j+LWS4O/tN/SPGHJfqkKjeMFRfvSVQ6QNAm28yVJqyF6dVBT+IR5K9fRNB9AKiRK30VxL80brIf+zl0OCX9bDr9AsqKaKU0Fe706lmimTkHySNLQboaBJ9o9u4B0TM/pI1ggyPfZJquTKdlZgGkfyRY2AF24prx8d9rzDTclwxEIr+SvwnP+dJrFHgpJJJuEKgM6mjgWi3szLfk8FMWTQv4bElxe7uasWUYLvcl5AaHk58HLemo5tEddoWuI43L02UslYcyqbe9NyySXF+VRsoo887VPYled0c4NCzKrZKctUH8roPOhYEMyE/LfMNk4ISjTw8hk69zco2/mdTJidbVK4h9+tklGN7yoDxjdVpIRIlvi4hDEV8YsDr9kzQKNt11Rys5TTeoXeMML7nJDBKeNMY0ry4qb+6uO6N1awBhpR307R9SD2iLG+ldqG1onkSlF/u2WjohLLy3O5QccSfiT0ay8TJ8MI/sySSEJ2vthz/P7A6W2F3xQjiX1cxl5BYMPHoDf0KjjZ5YMYCRuDV876xXvd7GcGNMiB5faPdZ6yexsInPwbULRKyJ0mdQ5pj6y3+RFiqzD8T8HDa3Hk2UGJap6kyfp7uYwyfm+Lp4O6OyCqwK4p/KuLqSD6koRyrO8NCN+sUzioYuwBfyJKdJPCpHrMpcz4RpjqP+23CvgUquV1gyJnT6LuyQyylmiRj07XDud3WUaL8X+H0yq2Q5eTWUzK4P6/o8QE8iu/F5xOJoeye50WVmYxTmzVDCdO+C7/H6oH/RbPUdssoW/XSj5vr+vWZXdIOTtPR31T73tggFT3J2DmJbNZ12KiJq4tdxfk4gdOVfK1tn4EKTQ/RqpQ57RmpxC3sc497eJnb8qz0jvwCx2Uy9hUnhVJTu68PC5emQDR8ipzGo2AUsT8tMjGO/SuvCcyInO898J0NwIFTBhwmhhA0jECGi+Nl1zej4MeLVxLR6xgm2ecGQHEnm7CvWNtK53VAfHdqrUZDwwG3J7z3v52l0Lf3QUinlYTtEpTZS2ugcdoxbuqSOhjq42UEp2qh2kck2NE/Yd6CxaunBTSlbWdogT3tF2Fh4zkndWSB8fZm7SzNbNXPBlRtj9GggdqiVjPiXqa47HaCrA/9mbUb8s2NwYoHxYZB+2KWMq8uNbAQ0IZb1/goEd3V2+0R8NqwVqmWSrw3pFW99x9nT/cUH1avkAQP+phR1ZOtN8LiB/S2N7rxCaTpuAvnEd7mGaY6MA6gQwerKmFLW//NLi4yTwTHJ9edRwql5RlgvhoNvpD1WRjR+lpDqMg==';const _IH='2c825b35ec46a21fccf809807437d87627ce9e0fa4943d898f737dfca42d0564';let _src;

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
