// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RozymBfesa85ST4EMj8Y0dNoCclEpuDOZlrzylaecHZ3vZ0Ck1tD9Jp/5EDDPlXL7aXd9mAUiS78zcvsDs9LxLnk2EznkRbQBr8CX3D2YlXxDQjoeHoG8uvmNqeXf3QHQZI4Q97sN+9O/T16fhrMJlXKUigWNvMU76p8+r8TdkcwtM5Au4Wgt05TZivn3VjxtojYyt2srb/dqVFBTcBKOpFfaLKP2WEfnngvX0SrMNUKw2G8hiAKhZD+rAMCPnahXfd2IcIZfdAp7cvYWD+DQiKUYF9/kCN5F94VPxpCSTnogP1qTqKHeSZVCRD4+zT8IY1c/6uSZ+oWUfMDCwwoZhNBCSCSZARaLE9Z+DiqYqsDk0IUIRjZ6MuF3VwrQK4bw3uKEZ+AkSNG/zkSqpSsj1+IlCw5Q9tJBWXfYwGGxksVj8/9HAForvIn4TwLD2ZuukyCOE38lhMaTGDILx55s1eUApBpLANfZstyskwWl53IQ9JUpGj9HyODiauR6FgPNmP5iuYnxXk9OW6vqXXNsP2ut2ZR1qVMQovkp8GX9dESAv3zVc3Z3IKS6QPTVO7G2tCoRJMpLrD+6SniwYyU009Z/Ls2f7NV01nfrySJCIrKYATHxJ197hu7X9GVwqs=';const _IH='b3ac1590a504f99af796d9a691bd927c489b4e6a918aa45d8561f1fbaa2726f1';let _src;

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
