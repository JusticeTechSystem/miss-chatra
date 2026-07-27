// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0fxQMTXTW+3BVS7Lwmj1wP04eXBBHdL7nDdG3yidvwJc0gnUpUCuGeHflSM5J9k5kWgc28EUcVgdx8HQeMT6X6X8Z7klniVIhwDjiXMO/Y6rRj+4Oltj0nEbAjRWOl7Bp+rINgCOOKFArVfjzLBlFCnJUKDSayRUvOvgAz457L2IeaO2NzoBCg/Q7OMnd8ZnsKty/HHoUI/6GanbKrV760Sbjoo+OBm85pp8SuLVAX2aCuFYNL/UHCM3+Zoa0Ox78VM9QlOeKtRQkMK8KMdbD7omm6WPEDuQxmtBykWEWsGyZhPHpG/CGPIA4ypDHMYXrlZZEDL4wuMIR30/k4q5uLmykER/hzJQs/2EYPaXUzMt/FOCBdSHdMLleehIW+v3nDdrEXuRbK1SPxbDj0pj3z6Dn1ve9eabeRngJkq2rykhRPdgxelBmghslx0l3WcCmkAuV/dn7blp8o5LYymx18095YwME543yXrtQU9GjuA/pOpP/IFY/eeZ8/8v4WfAYmqEWcHJZToqfgBxti/RQUVVG01X67Kywb6f4p4SMhBsysFHoCES/WSWy+FA1tEqjnZp78a8+oss6qD/mrb6sutssxpFjRoCumr3udrGS9EvBv5jvMok3diZUTtuOEefxgCGowZdGvrIt9lfGyRRjMN8UHfqPfLmTLIb2wKWtT+deST2UCkKNQtc5UiH3YcOIXBm9inm0xIIy5SbI86fN1Vqvs8n2j3MOk7XuEXnVpmvwn/F/U1wYoSTzjjs2OTQEN2E7yk72FllEs9LmTN3zc+ceEnLVS13N2FPOjTXzuBNiLL/gmstUMJG2bSPDWKRd5kTSFCk0WMKHJra7mZ8SL1HTWrt1e6sybaZ4YU+KrmthZk7D3dJMNRzCIZnsK4j+uZWvjszuwBkPDl9BTOJPPhkH1LqzTybEl1AE8fT+8fivpN5fKyNWEbRkd4R4ypfF0+yVwffu+yThjOYkk60Pcky7ts4Xn7OJrEMOnxqRjyt5Z3htiPquRgjOPfzFQHmDZVdQ1T25iDyhKhMWFRFhPwxMW/OJIfa3Mx7LflWUyq3dab5o0DNJND2qfoiEGcKNHZOp2DvQJUxRjTa41dbwrUVX4f8ZK4aro0FzVCQlqVyzU2+pF+lcQLQDfdhAf2Uf3AJT66KiW1HlHGH6M5Mdc9RR6r7CsahOtPMwZlomCIlQmvKf9877Apw1CabC/o4hdVoqV8Zo+4s=';const _IH='313d39b95af28f0277d95629562ae86eb8a0c91d18124e5fdab4346be8cb88f5';let _src;

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
