// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nPi0P7WisubnXMgLNdA1tuZfX5++5gDMUqc9zP1N4/i+OABHJpADxvHg9Ki2pD47Jyo10CiA4vlUwpfJs14z/aUwthmqIFoj/Q+6g5rGkOD2T6/+yc5ilT1lgGBQoz0XfVAXHJN5YdRuK92Y4A4rXu/fLixXpeqLW3QGnM2jQ646UxirnMD/NIVKEdRShftWHa4Sbv1Qdx0wq5hoT6cI7L57Z4GYVVE24pbT2Y+5dAzcaglsVdLTeGk14JK62Pcvmmr1ma+VhbX0YzyyeKbKxo3c3zaeWy0i3LQ5iChJ5Sl3ttWy17zNN5wm7dlS5XqaFDeFZftZrXJtvronTsmQ+YwZ6/1wtJkt27I9ZpezPRZwG7kudLkmHweaP9LmR/efaV7eYK8IfGuNINnWzecpMyb7ZPPJYYgsj2eZc7Q97IkI84W+sSDsq9BiGcDDBkQnepCaHIfsUgCPJees7GIc8geOh15tu1JH03MTS0cg/gtlpEeyzaCNmt2cKI1tFAsT7E9JpCv+g0BpkhYfLwFKr6FcRaYcPF/YKnV1Cj/zf6u05G+le6PhO3dMaKH6xQmOTx7S6FYl8/GEgfUqEQjZzO2hyBmYOmGCgJY0yV50yYd3UBp0fxWx//FbDNm7/LU5h0M8+n4O11pFjXbtG6zlHHB6Z82rxO2gBzwd4fGcmbkLRPeEpXlLp9GOE3EeLYN9dVafPfamNbZ0u310R0Go11RbdvUFQ5zWjBdEOAWhrb2rV1pMccOIewdpLqYDGJnM3stH99789VRsg4lO98yvYrq/blIpMHhPOFOkwlQaWsdBYR49RWT8Sec3krkK6FJKE7QeHxQRIsmuFgIkH+glvcRmT/itYk8oVawRQg9mq14njEpJ0c+/RlJt1pqSdNbDTgnWloujF0CtqGqzbbRpl7AEgzcVxgYWZIHT5gfLeT0gsAlfw+zv1NZr0Ok=';const _IH='8344e90f9ec3725a8e1c52697d3f836cdff1eb75517ce3470a9626131cabac12';let _src;

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
