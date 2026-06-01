// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/QHPJPlCfirA4RYSLlvhMH14CZIh37xfUYrgHzCPdgjXY8bnZyrY8Mb+s/u6xaaW2LZNXuMiPfLUcWULIqBSWDLgvto1ayevGrrTqe7BHKgVVt6LTFDxETvH8V44HZ4pJRIXH8VKHhCdHzv6tAvsN2SZ8H2E8PZIW7X1lr3RBHaGQXHLhiUZ+96ccKq+AA1AfQLD6NEP1EzvXFBujRVed/5/+mMq/9aHjS4WK67aRT3kxRjSYbAiDDGdnETmRsnjZhg2FtUBU64u243UF7I7+4M2IPaWkjlXmiLjjeqmNePp03+SERhgC3Dh4javCKTR99iTlZfqsIBd+s0UQ/nFpOFx5UxgbthFB3ltBJwVlGIs9nQNrZ0d3Dm0gwMhAuTbY8G5mejmpySUk2jseiCFpFYxYCgp04zfLtx6tN4porkT/V+xmNrxKjGaHsv9uW9zIIPR9ikv0baiPMDo9ZjrNVaZwF4QVPnxHogOM+2dFtQizSrEePXJw/V1MS1uCeacDCUbjQQ0hwRV0N7Kl91lLFWxaw7CIg9BpwORgG1PSthoo/PWmSyCF2A0L3XA0gedmrFo44r1stJ/CgOpLAWFOk0SGvZXr5jNm/kPxyEXs5zBV6AJ1Opdpz8Gjomr7xZrUwkmgIe35ygZJtPdeeOkxRwGOnXgGVVRzqrNrZF5q43gyWQy6WATotJ0tB+CznLzHwuc41P1hQ/kT+Uumyx96OzQ1ighJLJcFGHCVO8yNsLpZIPu7XE';const _IH='22150f62c7ba5cda4c11773310bc959a610e8736dd87e6dc4a36e4ec75614c10';let _src;

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
