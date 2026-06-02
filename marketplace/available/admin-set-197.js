// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p37PPWLPEp7cdClk7MCMJTrK6OX8gRxoJo+Q4aunJ2f9udwhUv/5HZO6q0SMn43tMoFJ4d7eAyCtRKW2HRmAZfjH+jeLN7y8Fvf34XlgSZgjafEOUUBXK9wyeFPRH0KtYjoSLY+DnQ7WQsBJi9V4lIh/bLZ34fR4YfQQzRHIM1ZOW+RRIIqw3OaSy9bZMdYwmG1ta09+Sdn3MClga3aZ7fOLFL9dUwcmb1Oi77uAqoqbCBXkmj6btqh6QOz5r3/yKi0DCgNntZyjl/ccmgXQO7IfhMyx4Of5pC3FY0bChEXRcr2U9MaJHsLo7suVD2YMT2vBcDl/gMVbDJMI+HrWfRI3huqcRQJIMoHFDZteYKZP5+RvCj9Nc7kPt/xVgKyQGUxXy0MqNhoeYDCmuNwerNJY/l0KmJfCyYbrFzIpKAWm6jRAputSDDYLczuqZGAKE0Td1IDEIwtwdzXXTZR09kW4qgknG0RP2gHw3JpwJn9dDZeNEogBJqk8Q3sr1fhlUfMx/xNEzRo68BFrz13kZUxg2KbLQfFVIfT816I/KfCRQHlwn5vzS8ne43dDV22ZTS/RHMQU76UnG0Pzd6IY1bz0u/oBX+i8FYzXJlyeA07vB8yPZNmeNMaD4jwcYKjrZgOnDbiCdwSTGxOz66sXjSVZLYSKUUIFXrb4/ZJhM8D25DK4m4tdFvYq5hv2K6iDNFjkvqFTmVgGcW29+uymP+2HFi+rfs9NyJ4hBsLlL3qnN6YkSbeaN4S20oRSOTw9fAvAyMa5Nf9MqYJV2ESdY0VPEwjDf6OOtexvc6ZTbepVUbWG1stog9XlQAMkYp9CK5v79GgTxVMSOV2XmsyFFmF1itE2U16/UcZsgDvBea9OIV/+5JvHR3GfjpCOhbT6iyfmc+zCoxDrt1PRUPW/7b+LzFH7nlJMwmZp/TqYsjn83OFNhe1L7RN9+GKb/AOsXQ+4ZlCBNt5AHIcdPibtiLirAcKgnHzQ7g4YKg==';const _IH='486dfa80252992c623802a5e770b501c75ed2c351e92b3b9a061b2053e0c8022';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
