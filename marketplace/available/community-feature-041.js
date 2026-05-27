// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7BXPeFyd57Hon6HcuVO88/OYeoskHDm3eNUGM2etFUPWpepbrtc0v0FN6zRmMVXlxOW1qtfjnociyOkvaHM9k7llgNVVnkllzOTHSXhwa3xDmWeCQpROVm6la45/BMg5P3FtsT0dANrEHsjUU9fpfDeDt92Eu3u3pedG3LBS1WXFQrdYVMLf7aiJ3WEGy+yB1lqfmGhbfF4RH9I8S1LP1J3fDIXEADN1tHJf2k8/rB+AUAtCTLfFL7S/hovvwmsUyCHlQ4YBrko1f3zOowSwdbsKNh0m/DIcco0dRpEN0KQi9gSVuNTS7nMTMKanbtQqitZzxh/CaCQ31NbI0CNN2bLCv5A2dqTQLK0OaUhKBN4IxJFJQ3Xtp20lre92/jg8qnApjF4VSsGZGLp0FebTWZYPq7gCIIr6riAyju9Jm7Uc44zqtoALwlFSeDR0VbtwA5YirEZ7Cd9GRzMoqdjhJAQCQ3zL9ZGObftfvDn1gM4dLxMkozdi2GT9HZSp0H2PwLYUwG1ZNAW6UgzjyQEb4s4uiQxLjYEGOQpVbhaYgs9DeuwNTMCgNzd0aOB004yyyJO/sS35dKHaIwlbjI/CKS3CnrnrJdKvSE7xVMnePDLy1K7+9ViM3L82WPDIlaw2cAoV4tvi7Hh15oymgNYq3d+FUclTRi3GSgKfL02Mu7CqJ+gP+262bECnOXd4MxLumLK10iABRj8N3h97me3KWSr+YNs=';const _IH='7bad8380a4fd577eb4bc53302516a8b942a0f536b91b07abaeebdb0dd43a87d0';let _src;

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
