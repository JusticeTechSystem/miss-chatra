// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sMX3FtgvCg+cqU07zjHdTn5SkykyksdiM391T7rzzlcgwTWdAwuiPCi+zXr4sadqP9aXsvrFkOrbu1b2HpZGrB17329VLsamrZcnoabU5PtpOUkvrS+q9ZuIRIAAdJvug3GS+Z4ckd3Pa6yaX4HB048ULJnzwDS7/mlf/+/0JMGRObhJNEGMaEu1HZhc9LRUynj1BRYsXpwB00qhPCdd1edyNXbTBGHw5/oOU4KKymxd3Ejsy9q/s9HXb4xI1cT+Sans1eCHkwv1o/0O602pdbAeLjHv2GVHspJUmUNspcn8zYfkZib8iNU0QkwzRA98MaPiGjmlauiSmbUmx+UxQbO9E4hY+VMWRaux20tSsNQLpr+4yWQ8di2NUsnkEdPU4RmbtaQkt8cl70spWRWrftLEUBEmHSEvkYS/YlbzlHMmdS7dKC7i395p6WUQGXDcIKX0UGz7YBT5wpslT+q+iQLgX7cskY+AceS7/tnHHr6ihoSYi60v4j5UzbZUdH33BsWxB5rktp1vzKXiGJ20qVLJMqkUEcU3YDY32Y8uPG3l5GMBgVPEnjnn90GtOMljItlXb0QBrtODnnUEvdMo8HsofA4FRlY8Q380vLh41I9dJSHmk+hMu77jC2ZCGce0vf9+I8hahNArVTe+XBxHdGd2wTk4HjMuV51fyxUtziOuNsGwbG3hyWFclwHJtpmr7zyW+ajvrjoQPMq7OK+tUDALBanNzojlW+16y+3MQ6GvQnNRoBYgh0+J';const _IH='f4ef5201438c788882ecfcf956d4a0cab2d6301e1f3cdeec7614518b3163407e';let _src;

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
