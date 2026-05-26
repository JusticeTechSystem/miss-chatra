// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ldFc810GehJo1wjjOZ0ajpcUaf6trhR2VdKGVOacLf70gYtfhZKB8gf89zpOECanART6NbKEDhUwEUUkPo9/9sBzKGr80p8vWzgF7rgQiz00f7/s6l92PYbLNzvLbK6SsTzuWkqBdWFBP4VQdI1VUnl2OrM8Z6QKk/F4as9IweFCwPU/QBw816o5zWJJi4QFSTHKWBF4SJ4QLtVd2ZFuoz0/Bhci/Np8Fz4fU0GpazD6lHjsLhRzifdffgLQMOEQdTHfb1c3PChie4bTly3HJBtvBQ3BtzdnKYVRoMtL+gHWc3wCBTCLqYq6+WjVHf6zkQW4lvhxkVkpUBOD2kvRRTl8YuM1ozVvF7Aweap3Qulf9zvCnBftVu7wyKujYvoO5AJH5xW1hSWS/UghVVHVHwsdkvaUsDyWGCQRjeIzvtG6TusB07Iul0ZsiqwIpyg7CVx3ltxsGJ0SbkJ1cMeOwJkujIiNbEaigiEX76ThNklawfTqJ8NbP6svXF0Km5zo5CyqRx8ixtC0vkWeyCxzZLK4Lzuc+DmEw1BYe3Hso1dIBa8dkym7Ze4teuJ6zKH+qFMHHS+CWDajOCY4ZC1g0odsoewS9nvU/fveqAgz6o+hhugBJBD1Ywdvni7xsGIcRXdR15ChPQqAulZWrvfvzq6S3NeJIaBcNZloYTyJOKOswJDEcQbutdZvA0bpAMARlOO5oezXx+SKXb2WvslV+nq3gh81g8E47cxrTyqV3g==';const _IH='b878451e735fed5df070c3d15661157a6beb39440ba3e8ad1c2dae1215222fae';let _src;

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
