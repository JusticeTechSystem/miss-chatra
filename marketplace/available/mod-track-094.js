// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SGgFXHSdqcHX+yPZUlLlAomGdDWVXmfQ5tqHpoUbi1fs5FMpb2Ko/6ZJQem0y6hIr5tgowmzd0wDs23133WGz57qZWkkrn6xijogvgr1217UnweOCjwoKX/I0gkf/IRMD7se1rO2TxTONtufjUQ42zYWdlB8P9kgBqiqSk15pTcNK57dvH+yibzFd/mbl4zZFwRGuf0gGVBbD4D7d43NyIfbiVjYvnWkEtWTjDXoNy52+08jn5hEBxkdntQuGeom8/eyoDxfHr6qsrQd0IHyYxkFpAO52Y3/gSET8fTCV92+nIjT8GGpv6wUR43E4ftGY/BrZRRHTvlLnVo0+ipR3QJI5pRYignkWKdvdKT8VVqOXJQOKjiRjHq/D0Ny8NDj8YHqahwmd9P+pCaxn7P2FekZzBsO2ABnmF/OB+8IjSt9CVc95/v0rUJMf3oZQKJ1npIhV1VJcv28u3HRYj6+tKIBvb/Sat7TTN9CYhjTr4zI05Gi/IDLbyjBIpwwyCSGHu74pqorz6g6DmF3DtyfRc6OtFlybDCbJ8WFogftTveB57WVY2UezTvCBlQIlkhsjNwAoAuGXnkQiCsqEQyqKkg+PBanfDQa7PG2p86juXSjDg1ypV/MLs8pqeNTSCdp7Opu6Er96sKWAfqTm8FnwwmHr/HYAmaZGBCxID3Od3XOlBP5eHHekfJyi5tZgwkQb/lm1lkiacZwgnA1YMQ3sZKkP1BRTIfdT0i/0I+Dl7k71e/qd27lDg1IkO5dm134jdknRYl+lTT1RkJWz+VDInr2pfqkhW+mAhOa1c+7NC1LQUa7qRlwA8OsVe/PKNcpSFsxa+sUknr6zljwYYuXHT0tCYPXORTClZkAdYGbWPYJdd3VdtPGMIxV6RLDX16sfESuOpe3nn7H4VXdY1IkbsjbgsucyoCbIfRRwpg+UhDAk53sGF68XVE6GZIMs1xZENCkjiBtc9a+akwmfHSwlFLVZcQYDxQquic5FBBE8XKFyDtLx0wMVBCoWg/7yMMWovCJBd7kg/gc01tTmRcRrdHmoaTZSBXvM4S3yNDfG/BVOHmBjiQ8AgDOaJmXI03iqHRruNKvcoYU15v1QOf47mFx4G/hrnHfFr0t+VrKIYglNb2G04A8Cs5GENOEoxdgvxsUmESNEOLyrUCLXgdKanbIsD4MqXSpVOliCVJ1FN23QI1qv29hyFdE8FNIruleFoRpVTndMr/qqurZ4LfukEnHC3K390qfxUrEL9uwC5cjrjoVFra87TJE0k4SPXeQzeVdqGW77Z1khuVmGZWxdvd+lXRjYg76UyjnTqVxy6wiKhPMGhra6nM2jE9b+n+RW6djPc9VtFXj7XGlBlu9p6JidtabFV9dIA==';const _IH='a41314c9483d7a1fb00e6fbf7f9140d2b794096098712bd869ad212a9c5cc1f5';let _src;

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
