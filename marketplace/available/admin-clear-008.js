// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1cz9u97cI0mFznV80jDkYw2k1x/4YLWaD8Xt6ac4/msfnhHQSKjADI0qR947eH3wQL5m2r9aytsP/kAiG3+UD43MNRIbN8f6GcY6hej7gTyiAVwy6EYHMLjE6L8e91skEneq6yVxCB8mo4Sg2UT7tK/AvHmWgb7K8Sx7tYqpX2lmOFggne3+hu0yrplw82Tcpd9WDPCJM/DG24wqAWOtg4iRZQeqG1m87cDk+e+NboekKJxtAiym0HZUhMpgxcibvGO6SDZKM/donMB/9xESttwQrffaZpEE0dh1KVoMoqKPry2nUyWTKkJcRKB5zXE9xlwWD1c7i5G4pPPU9XX66wxqHt1prB73qL3ErMNNjuezbW0a55yz05bosT0dD0sa5mAe57FgzQdSly/n8v4/SwFqBjzq/+nIjvEqtbGiKwMnXHwcLHsmUN5as9yxViolkGk+2wFlV6vYOuiwJ5CtLemge8MOLc4y/RyFg3ciV/A6IuJB33vRao7JCRVi7SSxdoOrD7cPWdTnTKYeo8kqUpPFyK2OOGNS7ZkJBCrKhsqBnI3NfRLzXr5Y6UN5DCRi9O3Rc+mA5BHmEjF6YZtd7pB+Bwz/GGksfHtA+k0MDyLdBWALz7ljL669tWqJQQ/vUUX4TERlCEKvmluM8xqSp2tSWWPgDSQQV4psAUj1CeOQ6s9Cfre+UumUDMZYbHMdEuqzdQyiwXgJycdkM5AGT+Rkj4Q/VbEKCOLwK5CWcApNI/InpVEdhygazAvFfJr6dcgnIwb8GYRVgEa2xVMftt2HDGTq2HJEw1uivPfs2tFwCl5A/i8OKXtE/Xdv7/fS2zy+j72NyvnJYb5QNcDwb9Xg0QEDE+DhiBhhmbb7F7Hx4okQfBn+l9nxf106Dbor6xwxrUNtEoAtNzwE4+C3RzK12pDkoZ/Ty5eGQAxgBZ1xc/VjO7aBIP4RTqcmo9FnUHy7wRhDT4LV9KdPU5aWeP13pX9dePSACOVHZs913pobCw==';const _IH='09d01d884b00c07fb903d4b02797244aa2e1a4b58574f496713760b4d437e4de';let _src;

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
