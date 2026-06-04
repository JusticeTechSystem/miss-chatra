// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aP0GoBaxG4uSEysVPx6PiVns1rd9SWz5wm224NXceXUAehgWzVNCbUqccoYNNPk8Lj8fdmMjjlBrz05vWfa/YjzyX9lGEmuOLZhT7h0xzAAC/b5KAmQp5HZD4qXxNeTvxOeJ4oON75y9qfpPhB+gOo83Z6S4lRoFs+YliGPYyEwCs/u233q+aZWUhOdRfbMnhaUWVfN3WRCTbVTByQm6lqFxIdyfXxuCEAQiiCBQ3SNrC3XcJ64q+huIqJKy8/ED8kM7eTnEpI4VElv62fwnPUTWvxZABsaeVt9mGhLAioor3II9xlf/OYCNLnsuQsTCnNBYbxrPfUVxrKRUWfaTy4DXD4esIaHV0QIKFOuomdY4Mf/zN7bJ9K3tgBEjPo6ax2/U6ZnnS6jQobx1+fxTZbsCUYV6w6LiWTazcx1EJKQd8U6mQeAzw9y/LClFv4DPY6tFDHMC4nnEYJtxLLAO09KSY4ZUcZrlq01mwgQ+2r5YpkyaS7VLITG7fbqIW/DJQ3dA9mtHKott0OMd5vDDvx5PSk6vq1cVK1UQHRqz3gfP7fn4MsbUAqxx1a4r/SruO6EICwSVnogQcAmeKUec/3Umm4lFDsGVE/4kilYPKMH0z5lcc3MAMGoi4W+OL6UugnnJYKWG2KorfBNpq5qGMs5F9poJvfa+gzCZFjVSWLcXugHdOx7NrRMbJFzzfetbjaWeHi7qcqpLUDthmHxpdoXmOTaVPpb/R/na9381pXs/m6zGyVFxO/ryHcn2T7m5bVcpYaPkYrPLudVTkkPGmK8J3l5HETyKmAnQTjyOQ8h7ZnyZZGma2ZsF9wth74DigNcciDiVk+1F3AOtymOORz1BjCj22y7+RCz9EolGkyl99b/WS/fvz9yO8qw8llRG9b41n8knHgH646fXZL64ZGfMgk7yinE6o5Tia5vdqc7x3eK5PBTGLKBnnVNaJUZ/5euvR2D1U4OJRsREUjfS+1lfIG3j4AvziiUycko17PfI3odcqoDjspyJLq8iVOQdWPgoxtMseAy56MHSHL9MeGxTpt50hpF3fUPysXBLh7cAyROTUH+z0//KEwzGpt//T6ayeV+dR7lh1h6PrrGPsYWGFCtoAotVrqxFIg/g3WV5RWJlF4l+7SXzH3JPWJsCI3bPPSsdhMtdBN63VNpk58VrMatPN3vdrTTkefKT6hDlQWXwnjQYAYh/MSX7E8e+EVIyVtp3OTX8UUaZjpqtSmTAZX+lSAU9AoThHFP9ui341W9mjGYa/SmLkDjdvQTJPrAX6TXOvDg79aIEKheR5v/F3GaC0ENEC1Sjn7I6mf/i6ZuqXYpLA==';const _IH='75887a91942bacafaaa0874c7ce8f017c594d204802414ca99b20b7d6182546b';let _src;

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
