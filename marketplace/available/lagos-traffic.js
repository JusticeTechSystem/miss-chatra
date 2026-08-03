// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4liOcbnJZPmT1PlmnxFhdNs5ix13OjZ862QykZjhqSLVq224Wr/sEnETvb00ksV83CjLkxjd6PNAPZcB39nKuRB29ti1uVtBNaKzGvgHe6PTZxGKM78u/Biin+06nzG629dcKBI9mqsZoFXvpQTT3x3TIAriPH6YlOTzSsit+5pP6YyEectybW7yyzpY7UZ9d2OfTfSsXjyBQhAQuZtYlNUF4t2B5j3Hjb+Rl7GdMiEMYX+w3OCXnXXr0Oy0z2CAGXLFJhbaitQR/Edu4ne4YEk6dDL/dxwOtk+FlUNv3WVVC9Q3NjgtzhahlLjyPA4otgYXklruqhg6nwd5xpXNARWDovV5UEEjSbixiFpwClSjNfwpRQX3vB08m2Ecu8husdDLRya6DUAjSWXXn7S/087nygZNEPKni7QZYEZ0v3GaG+MHlI1iC/m2X8oFdAXDdOZUGRX9hwu3bi/gcp56cNsx7qtGMQaxc5/boYoOGfxXbUOgiBPaJ9nb9HPa8QRmquVYOhZM5ZHJF70g5EGxrZCYAk0vMJPABTOau+DKEgJX7IbEydCg7DzQ6aD3z8vjSPrj5Q3dCbYk0joV1vUL6mWaZ07zDlY3fQugtMPYWxNgQX4p8ahaZ/t7g92xKFY9SRA+xqUCkTnoXmv+64h/41mV6FDmdI0LqmSfxqcIaBM3KcS3BueaTmQnomoj1SKRFmpEZg7XBUtSYgGQVjSIVU2YGy6AH1agFGwZTPtfDGqxoQnexmYVob6dtiGam6l2u/MG5K/A+hIRwj+U+wVEpBl/dPWo6wKnwnbZ0YgciwwCsp6yOb6U00MHkWycRrksgjuG3cYQRjySS0u9eL2JVPm98aGgXhLPgXou19f3b0VkUOwypszwa4/wBHTmCACMCZS1Mq50k6MPkaOGRzzKPpBO5w6e3hu7wXdXJilikGaAI8IQxIyutsblq15OeWaS/LByHAyh4YS3dckc72cSKPoCSsdQ5V3iVBA6tzm/S6Uw39sOEzFMd9COfJnL2J1lVkB4ihKqy6MUbSLuwnAxELU5LblJ59skv8EXjVdULEddQIpIvrrAXgZ2rCzngLZJ2njszHQHetPHaNb8hB8ABtc/qy2cIYL/Zp978HrWTZw+4BypSqWdwOk55lGroYqErVLLJlDtPcyS8EFWm2wRruW+hrBiwV2k8JKqYspmK04aEuQDya4Kga48KEVwcVfPC0IY3WC5aAWACEyR//W6rvIzYHSOAXmGxtBCgKbRxAH1J7IrAHlPCTGLMNzLFkzPO6WQoMbY95wwwKt7YJm+fhXSh6rTkYZd8M7uSWy1rIfmrnjwZI4DiZwFEjlrOUI7xDU8pc5BaTMAvxdRKMwMqtp9+xnyCctXIXFKhRv7GhloDVK+Tz0hA13riaK8Ql17qz5OyfAl/D3vpiZtxxcFwaidl5764HZ1HRVGQmRmkbIYnsEM3r8dd5yTTC5kE8tPrCX0MD5OTic/JZG/GDeMg4NazV/HjA2TgtJf62s5MkK2rM/YW87scHV1Fd1QDT/zsIL7G9UDGMWf5UM88k0GgtiX1fJ4+wNDHfY1tFKd0CguSaqkzkW5F2S4+LzsPTzUuoDdqz59olDMElrfSI6NUTh5z0zF/k1lmcxAldEhijqxQCS7250MZSZ+IBGN48G3kWo7CNu7ZGQOS7qobQucqpdMN2i1Owrxb3XxsjRev8MoARPZv';const _IH='523b62b7af7294b692c0206e50fecd81387f7d545ec471014575bfa1187acac0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
