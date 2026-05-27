// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G1PBXDyOJyhZ2KRX3hyLQ2hEykKY2vM4JOKrcHSIA8uuNAnQLyNk4WDXZBsMVK9LYF/7JsInGKi9loMiPfXicJ1haV20/mYtB8yPJsZyXtUnH5/L+Nfad89mHObxZ8oQ2NQ3TOd5bPbVO1kapy70ynO9BlR3fMTpf2VYsHPn5isLum/pu84uz+y+oxRelTeD4YASVlr6zz4sB1HB3+VY5YSvJjkkd/o4oudd0V6/wHGH3QZcpsCLQJ1mJsvISTXLT6xxrjDv7XA6QO03njKYyUPT7KfYs1/xWpZ9MXblRamnSLRosghg9hza2DA989vt3zbFwsQbUmbiDaLyib02cbczEY4OS9Gn9YHOUNP++1FtFVM2Wwi5SZn9gtxLQEngdrcXeo32qJkpBZhGSe6bvX8gHy4FzTxrwXtDFuvJ8GAEdq16IV2L9LA+ESW1S+qv+el5CPnheTd2XMDMlorv1aAP8yZ3yloFAhfQY/5EPRY//zKApaXqXTorgYyk4ol2RY8c4v6VLP8V3Dk8UdBOCKbLva6pXRIrWRNUDbPB4ukEHWUnL96NifR4Lj5/i7otZuLgRS5AQKnf2GIZS0IOWh0/E3tvvluWAWwYoid98uXJIKVg6kswt8o2wrdg15u7v1HcTEYPUAq0EaZyvdFEKkZIgOBFGL0/zdS9ZqWYNQFEk36Quu8nwTL0Mm92sIGgRGF2kb6FS/mPgpL401Wz6mJVyGfih3HPQA==';const _IH='eb363a778759480afcc1b22652d9a846288998430f5c18a0f05a5c92b9228450';let _src;

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
