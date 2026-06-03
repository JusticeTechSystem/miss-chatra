// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c0BCDpa0qT46AnmQ4kiu/R+qQdZV+vTLun279QvX3NTU9lYECnupOPKQdaGW6so+SJ6Hej+YxtzvniMew0J48y2AOF/L5L+MaedpEQ+wn4oILq758gOzKNUqdPnJZ9+6iBLHVZwzyjqW1xH4PLCMVueW39B3VvQaFeyIFB7ZecvOfQCXgUW55lOdsX53vpbIA6vD332IplzNx/pCYIsajBT6opP+QisIYqMQKHFPQ9DXzJfiQ98lNiaX+u+mYOopGZRTixyd6vEnaK7lkfOKBz6MsARUSpIp73sy5UI20kmSXCEPlpydw9WrT0GtgJZPvPnMD1b8ttfXPhqVI0bDz23eDRArWuDeHk4hzV2Ve2qwSdZR5bhEFJbFCXxDqmNsRbo1sPwxqBHZsNEF2F53qARWodUQmjRy/814N7wB3refFX42nFmALS7kmu5sbojk4HPXWgzN6piafw0S3pPMWlfxmLAa1lTVKXTcW+w7Q/uZnzp8iKhFRwPVaPwHcOvR++6bTYZLU52o/OsSFRKopH+quVK7ov4+SH78pkLg/dmfirvQVKxkLoMW27GVD8V2OP2pzPmYmw5FKHMAnCE36hCIxI/m0Mz6XxBaaF3Kudyst9NjXcHsKsGLMCPhyoBrXE6TbtPoFmO2fwx48H69M5ZRWFWBgpLQ71hPqydFwJFpnStfUaVMZjAm+Xs4zgSmvbgH9HdhSrWVsJhZPd+g81qi3bW1rf6ebPuZRwQoou5kza8=';const _IH='fd3b6abb6eb556907f6f2e39f2519f00c981b501154f755aac62804ecbd225c4';let _src;

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
