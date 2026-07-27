// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgSwQ3kha4+ZTNJ/VfndTJL19+DEPSiV7O2Pb7Vi7SM0XLDsoH1EVHxxA0Oonj5SifO5Vjk9tBFXcaiup0/AsmEgFd0wdP7oDlwXGwkYYDDHVCwPB6+cpdJxmpWl3mTpiqkZLwxnFkHPNWJVl2AJiUggVHVYhqvTIuIVOYFiXIYDYJ0WrQLrj2Vn8NxmgiS9TI/EM54uViZICEH4zfH+/KSx6fDPeNLtWbKO++CpAPR+Gkzrr/zD8XtTzaBMcROEjJUgh6WmetJSQLa8muJYdH+moPz6X0uQaAIlu+Rt+p5NpsDgw7hZmG9aClF00ukHvvJHDcLFg26DTE2fjYPl8KlwgFnbzzfIMlCrVxEwKatJUdD2G5juaXEujIpI4EBhdDRa4jcNRZOUCjvVIaTsTJBaMy3E8//Bnn9rA9nNy4I4EImK7N5rBKTulDFhiPwmPCXFawnAKO6Wv8Q1dVY9+LkejeRedcjfhr7pgjfqgKQg1zJl7G5BuvF4xZ514gSw4HtiBf35UhEmGkBQvpYW0y3tepHhNsGpT9d7//yhIYpiI9UXZ3xKwkBQXn/QFvUL8zZs15UkFu+6lF4NZF+k9aYJDBGd6q4t3ZfHuKjZ9qCPfLUWXhByspfMpjIjQ6scPOpD6Yhidg1XLeil1YS6x4zqt4K9g8qQxQ5vK+3zcgBBQR8Og48ENWNf+hG3QDkE5LR2YoIlFJjoRzJFZL8/aE3uoExvHTszhIQ2OKI7rHm3N1xlVfYimjMApXtaTZlrP7diHObGpMOyNaLXAYvRaQc+WpREJoENaxE/gW35d+W+FKls3dJlllZy0AcAJ5hBUgbQjZzRHaG2VefsRLX/PXFjGIH9CAikrbh1WZjltpgquMGntToS8eSxwFShKFJ1uaMRlolqPIIeBYUS8AFg6LgI0rRuKj2ru1oMEdsSSLDk7xDhrqGCAEqEQLmEI57mBnZq7jyImgea8HOFTedSO65wChWbVybLxa3GfMZG/mNYJKPeoQV1+jVQM/t7fNsGpJ8y3+8AohBwKdGbSB7L67G8KPsE1lyPGrDtHi2GLqcSPwlDNMwkqHOvQ+qr4tqC3bUmnpxTC5Bc3P2XXAfCBmmQzAwCQSllNKWY5VSrAm8cnJnRXps0q8+R5KHv1BwLxrcxKJ4uS7OWoHi4HBMhZj3GPXQlv4e4yMJsau9FEWVtVGesgWyJRJQEWH/v3ecCzwTcF+JgnD';const _IH='50118b121cf5c4d5973b5ec8575c43400217cf04463644653db6908201ed4288';let _src;

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
