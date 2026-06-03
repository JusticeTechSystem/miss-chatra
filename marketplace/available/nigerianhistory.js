// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ZslA/4EVQOp8waEnCTD/eASa2mCFiwdpN06rxWwyTdq8zKa5C9IBgiC0i2pCJkP4ZGUTqvaL4sZf6wWDAvA5/WbVf0ZgndZ9K4u/4tvr9fAgrIL0nZVPGoEVsMvrvqQb4378dxLj8O2ksCuUEdRzgCH5PT6tEbnf3q2vFkD2Mbx11w6MbqmKyXaOWoNWC0mQilhQ8GUHzWIv0Fxs3g0Kkeo2P1MWzeunCNPSAsi0H6/wkQIPwMXv70iaqzm1iB+vvROZCBA2HXY9m7y1qKbIiFXnBDbGxNmtYpinrLfrxSsuSrKsJ0EIp3vhlInXuNvub0XIWj8B68jBF/++7Oc12p1W2ssx3wqctsQsZQMvBggXIy/sDI4NyPX6VRmYHgVOSJE/Y41loNwGxQ4VoEMSlz9+bSRiTAsnc2KHnIuWdDRXWrOwxX973MarNIFO39LfKExXv+E2cCS/TQWAFxB34oYqcmOmOLib0Y/jUx7jLNm1cWO7gRNpYA287mTPtjxBQar+xn2rhTyf94W9M6CAeJccYAyV/Gkz2c/EVK1Qj66/bzOv5CUj9kcTNvBVLpuU7Cy7LCRSAOLAkaTDYQ5RhSJ5L/FAbHzIlX3oNpmsh64CKAH3wgBC5UDSUE8rEiA2CdHSQdOJ7h2o1FXuOHaF7rAC7ZAPG8XaBD96ak1O8yZ+yevAfCmszvs+6Pq8ipQAnr4UVJIIjZxlRoYIPRcRwmadjpepaaAgtnFJLdfUsVpx0bU3gxoQtJFXH/MLoOSFzfVmvN5Tg3hW1sJiTfz4UjXtFWH1SweSvDEG2ruRi2bMQWTO9pKXv8214thD3IeHm8PlgTecAaeoV/h1G/EhSRD+6Xca62WLkUdFadSQvJGb70K3TNajLqUjOy5pYcEejyerBlkdeot1C45I4xOqp5rDOr7ym2XN0CoMqj/oJHUbdQ2O1eEUGHNhTFb103DtBRCRC7dpxHaXSA+mK4+GC8KkBvB3CuqIIjvjx2vyC/J/atDxlTFOAV0Cq/Fkne/LwPNLqOsT27fAtwZieEzqt9UZ9zI4SEuhlEt1ZR14lQR73ssLNjayioyYmvp7VCYrBXcXTHA0ZSMvRNZEhQT+5Cock8c4AnJ8P63Z6U3GGLv4XnX6k/sn/pHnQjg/sJ/KjfLMQbl2KmLbzkOH5s3AAi15YMSDtYqcC6HmwmN4sR9p3jIuKuXN/7iTTc10HotmravM3UsEYHmxO2FMunecw==';const _IH='b695a0231774b033b5910659ccd34e75f949c2f4dc4ee54584850adc25677810';let _src;

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
