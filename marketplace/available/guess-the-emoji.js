// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9BTA0S0G78cU9IWz1qSmgsmQAi9ehbl/VZIMv1o4D3axq5x7BmH72jDCCi9dRGv85Zc6tg0GmLhPs/QYy7ICeHtzp9+umSANeMl4/+hPhoH6QHo7Fp7d9C5P0MTzbzIkqspP0Gxip+4uuh3tMjmPdNxPxRp5nFIJlvKxAF22+3IBSSDF49YQqUJXDEFmJBCi8g0NsVSCPG/Ep8rtrhaaPXiLaf46JT9OMdbjJrEv6z59YPdLG2MsWPWweOhJe3F0SvrBCUxR3yB8juf6lVsHcVjZqY4z5iVjNy+cr2rSqG9pTdfAQYDM2nupp1hoDl1wUnoID3Ofb5XY9CCb6viNeFWIH+cwxViHCz9ceqtmuVrcmyIy2nUtzlN9W3ss1TM7lJ8CGGRwP3aiuiJkwJpOqIT8MrZ/GMck8oD9qkk0VGemsrY/r/wLIAQguFY8fDlAcAa6cZL+0Ds7xsY1G95d996/jVyg9qm/YCqGlxBfTMg+9OCcUDokeyW8G7M439P59OLR3kcBBCp3k63SlkqNGSpWyI37y1L1HyYXYOucFynqWJXGJnMhV2zgWGsP3AQ2Ut1Rf9NHwz8KTRwFSkhzvb3o6b9soyZdT8AyyLxBRdGOiSaGnKR8Yn3kdi8EFnHscUZwZ0dB6GMSH0+gDCEc/dNGLn/PJyjspUMSiPdB1f3FsF/aJ9YamgXF89qjN6NoNXH2lsIfHbI0R2mS6Kb718oPj/cGZMsnWtHFJe9zmGILtryo3Kafc/IXjFMtykC6ZeluklHU1f5y2iHO8PF7lgBTAMU2C58KSUt4WS5Wgs8Xv+klzmJ+Hz5K6DHG9+xN5w11awBJDyntBljqr8ln39++6UfnU+l79t+qUDLmI13kgr4k5YIKjU7cZcFjZ5a5FmrXBeba0vcbLAVC6eCpPr1/nFOSD5hEM2m/KDL3zGXB4C3umaDt6V2T+rlR+S6YK1+yLyc+Rv43Tv8KGkB2ioEUIpzYBf1Lgbq8ucZ4PCGjpMKUBR01xwnZFcgnWi/HupKzXKvZg1ANi38z7LfXo8d5tKTLx+DI1nE3UI2E2Zu91jbHhDVECojIIGfUj+BNTnslz+wAlkF2kd4YqMf9yTaMwmTOYRoqxAZW6MSTPaX2QFY9m7s+xNdJ6so3WVZpb5kyWM1zcjRMDXtwHW4mtTDOgNsx17mDXk3lV8QjwvsZ4+Sz3dP08EcP4ncKqwjMAvx8RnkuYvd6WLlKr372B5+gRfVEnlfs30npHHo5CGm0hPwFwrAgn3toXJV+WOm8D2sy5qNhPj87+jCes4hGH4VVP/lbxm7fqjHcKJKHpLcpR+THVqmNes32fdnaQ1AJIMntrxavS/0mG145/59UAoc5EbllrApPbQ553ndnCuxQS8+4upNuu3xgA+67uJodYQl71cZEOAvAHnfRjYC1pEcyzdDyTJqNC8zkE4hX056pW9jN6ok6ePbI/0gRF1O67zrK7V7rr8+WSUZQUq5B9FsDBijFHCVyGOuz1TdHHpH50rVxDQr6Kq4+JJ0JtvY0Bhg/I3UoXuQJ4x1d80OQzTwmoS/N3KxqPu3Gw9Oj7Sq6lPR7CYlzEiYkHoIYkDYAO2aojJai';const _IH='a7e5c9ccdf56ebb90693f65358733aad51d7540a784fe6478693c14f7c5639f8';let _src;

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
