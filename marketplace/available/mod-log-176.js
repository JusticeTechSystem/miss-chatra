// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8yyjGmapJ0EwPjbY0M9HzSylowT2fF+3JBz0ZOhrOlpHwcdLQ8hjHwweWqc7nxfVLAOCAp5h8MNkNvGmJs991tFnK6ozA7CJXN27gnxp0fHCAhMuNIcIPklPpBxF/7YHPWpM3fz0jHfZwfNPzZoxE7Fp8uYEXeGAro0mLNsFXLuZNylVxUu/CwPgj9hajNixUvdSXT4yoQJ2eUMEEvWQROaOo1gHM0gIHp23YWCcJYoouf0YztVmiAJy6iJF5FnHaAdAm+T+UP7AkKIejyBHVTDEP9PPxJNXn6O9k8/G98bjPRnJOG3MQDmKRUGLrvw44SyUw2hn+DV+XK+ELMAdNl6T57+czW1V7bbmyv6kp/IoU3TqkaSm75C6fDPFJt16uPnN3rgksqDvpshEhEjAcyNe6UdkfJtpOf05Dp+5ZKIyKrJTGtkHCIfqEiKQeFOD5WnoncslIvMihFxjVtGSqauHwtkiEpKxPhOMiB+MOT30H1nugF1Aqt0Mc9xSbSn5kPewJ2mtuu6WfEz4J1XvQ23F+iqRIfPu+Ra/t3oNDU9Eoths1QHW5gO0J2fgTihTi0b0DpBw5jxB9AIeaXSEvZ5kzt4SrdYLQHsI9uYHrvRggXnDyMbbGt1n5jFIpsTm7XL3/gSPtkSFdocx3Ce99/d7/Ql7FFBwUS8Mf/6I9byZqUDupnStyKX/lmqGrxs+Ykfk5WC1c9762VQCOKQofD827JiYOO5xnpyWBWdJosnbtAyryLqr9WdPNpsQ+e1d4CujXA5ENx6l5PUVI1Y/hySmZ0f7q4pK3mjN86s9AtRBfGQgUvsaBSSCUx11VmSrnVMU9lPG+IJQcV+P9HSsuEHSIhVRsbYU7jogu6hTmTe6sNehJATH50zHpWLLD3q48Lmp03+Xu6QvvlYyCXXBVLTQryLHXjYizRS73sBu6aQ5lbyKAATLggenWCwzAC+nlV3tu4/kbsPYGbs5R2zAU6oFI+ZkL9uH5XAJRxmK/Bg+Ycv2n9lLhiDhuVN/zRNyMQpldbeTyYJMiPipXEGzKGI42Kox3/Oic9+aav9VE0VaXDwXHNOOcX5rJk/6a4RcbBgc4DOE3wpeuyF+23YZH6fkvFFcN1vKEhEJk7gPH044VtKy8oGt/aYnLEmwCsS1Oqth0cDnTGgSEJIatZeDwm9cdKCiI96qDHsPOYKvejVauyxIxyw7hbyrE3CidHOmenPtGs2vCwdCUa1gss6jzQ/C8wUpJlkjpocaB51+RWdTaaQuDacIDr7y1PKW8+Fivv7N1hLbdu/9D08wOXJoZx+FDlFtIcgS0oa/nXKz5MSto7RhvBEwLY7nCj1mDSm/gccj6W8eQvHZeQ=';const _IH='1503f1ffeaf951864b43bce3c8fb66c50f7536bdaff332f983b933009382a623';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
