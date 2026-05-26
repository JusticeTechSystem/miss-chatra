// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7D19d7IkNAPOwhbakQBsrtKv7sEVfPGzMIuZFopd095x7mAfdZj6wgRKmWQoElouEin/pxL3QHhnUZTPyeAZopMy0WMQmWm+SHRShBZgdxeHa2dMF/AIw1cgfI+wpkQY2dLuDSKu4s9DnFXrlV5jluvzY/X8U6AU63am2hpQg09ycHnwCrLv+pmmetD36N4KCIStUGKNXBCnDht0kniKzcpfP2I3WF35FntI9VvS5WXUpwJsXiRBkxdIXTBcgI8CTyEPkWWM2E23sOxDVbfYgm4Su8hZ1P/gfoGaTdnB9hYGLJ73umSapCJXveDb6onDUSJYpda8p264YwvqjMZaP6kiaJnSMLyIKqCk/DvwDEDMyrYo3F1tnD8snbR/SAEoEept5HohOy4sHPeLrz/LtkabkNhXiQmu3zYum98E5Trk2Gx3gQbAIvfMSs+KcjxmjkaRsXTo6CPQ9e7C/xy6eQK2sgPYkrKzTKj9gFZSjS7x9d9CgNTg8S6f2zzDpv92X4Bc3yn6GMS0K6Qsu36Ol8WDZ+Jv2JnywucUO8gDRl9a5i8Zxp1hYMzw1cIP/ztJozjKnW+lT/zl/mJOYM/AURb/iSonlgDcQ/eZDPNaoY+HVskaAC3wFu3Tnkos5TbtPg0XaOeKAanBMWyUx8SsfOj2kc0Ld1GX9HFBnRWfokTtkXYbVrC2l5rtc4dDk4LfGWOwQ+d1bUqYxaxVk6y5xZXMgvbiFCYk8Rtvn/EiY6e/w/GoAmu2RR4Uza3rGN+qoIlx5EsorOSsjucKTZ0d0h3nOrwKmcFkjADj22ucFwEnndqrLrRBB4q3bLYH5O3ar2/uG7vuOcqSQn4QO9xlV1xpkofSodWnEx4HiREV/R9eeEM0cgKdZ0iDTT40udIYRBONNhE3xBcQxK3/7Xh/6ghyTDF8byalIED0YwwjDD+0YCQl7t0gXjTIK9gx+P2whmZeK13wcHnO5SxQFTGx7gOsvVHhIwmdopFFdterDsr391Ckm6x4FEcUPDl08vlvgOAMhb5BZrp4LZ2fTCIwr1ZVSNPuSKETT3XDDf5j4TUL8jIdJTqoi3FDfA8EhBRz/CNf+6xF58LIVYZAABQScMet/DMggf69HJeeLWuJE/hQ96d3WheYuCuG5PcHxMjWb/T0UL+XSfYCxVQ9qiJ/ufz+ocZnS/u37wKXTwjX4q7BKI2JzWVbfFI1K+nUtxcOfccVyFqKu6rTS0ckqAXZbTZww++x5GctSjZehNAvFOmy4KOhf7S4shX98Yz6Q/nuj8zKkFs11IyhUYhNa4ClJWEWlAUV0ZXPVCM9C9AulJzolzYX9eD5SJgqkOhJUKwmiyLbHZTLrqKaSBR66Y3+CdurMYssp269FgidghAIR447PjKOuUKyuA==';const _IH='0c62657395ee712bc5dcd0c62f785167843abb2e1056029a069d9ecdc55c25b2';let _src;

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
