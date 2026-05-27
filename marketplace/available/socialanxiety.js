// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n9f+nSQxJnopduPcj484MgEWyVjpaOSpkupqcO26KYje+39tprbbI4qL9nADg2O+frSz8ebP3OeidEC7//x2cRRe/v59VOqqsc0X8PRfi+RethARrK4OucwIXgcAC0pME6jkQNxXKCwgveOZ8txaBNXQ5YvfQZKl1ixA0CUueCR4yM8+dZsBThAgSsQlZ2ar0KFbZGLGdfXOCMesUP7FtBuY4P7FuN92TPI8dJucLq6+EBzmsktw/Wl5LoGnAvvgGZXMVRyA1J5kKEaObM19VxsGI4Ef0YhZmLQwWSbeREtFFL8XUYBwayqWOfAJMbGCNI3aSrTzsUa4ylaaWGosPx4DquDgyA3P5+mynrGT2Wo/d/+0l8vxaDT1e6KXa44xHGImm71iarXL9Kul3kMxE8SQAcoIy6zjzOMBwFJta10jTOKjHmyGCSXBg3RTmOSfSf+XNOn5dq9MsLgWRkz2YsCNf3XLNmDhkhqVrCGHpYn0RBR8FblTLqFEH8gv9T1Ii+IxtUyjkWi6bt6h1MCbHJLK37U5IAToZGEidRTGbOGBqjVTw5NTh9ZK2I9aCAO3l49yccf+BAX1xHRLegiUinRgiKk0mJaMVP9W6k0k6FtSG+kR0ny6C5Xc4a/bYNCnPZ2c5mREBhHIOxSXPWten0gySmI0j4D7N7NYhnBTuK5gTnPUb+9fjRIyjtQVAT+zrCR89/eW/J2cYardqwh9EhxSWSxf+RdzwNbxQSH3VfQTR84wuhMcI+OM33rwMEuzlmO7gr5UHkEClHaylAiY2+svQx3hSRb+Nx3aW9hihDtcbQiA1A8dakTupT3tW//GQZP6tX1Q4+EDnf3Y60jtFNXsBmzd3MB3X8jRIyTNEDfWRw5mCI+Y4Zmra3etjOMSl1P0Uq5Weh8rokAOacwSQmefXUfUaSJoWPmBEB6Vcoeu4KLgy13u0wwxCbMkaTDRE/7jy3ZEudic6rcyhfak/uGNDIHntwWJrfTVLm/fVr8l5d5wKbBCnWs+VQoRyKa3xlTLlVGdbAuq3OYGHbnC+lHWv92fSEMiXWvd/i8eZdCvyPvPCMbCksRs3s5kaInqMrb8okvTTHqZPdCUV0Lwr8YABHSx515wWs3KgqjuFzQC6d+5/h+twPjjWznNfWgbAoKJb0XXVUiuixSvqhET1yb8UQtju1k73CjGwJI/KM5aoBRJiTbPwTeAs/KuL1YyOMbCm2acug==';const _IH='7e4dc4abb19f1311d88e18ff214376868fcc59f10dd16bb5870660550e43be4f';let _src;

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
