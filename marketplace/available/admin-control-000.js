// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VRhq60KB75b/7IVkEo1hsBTC2Mm3NeBDVTZ4U8EoRLLuNyRGs4rQ+XMC/ctmxH1V8gcSRX7L4VVJxUWEgKf+8s7hS+gNXdon7HJnaun/9oMY1k5irNXTm0w2RywBebQc2SIcs2dXEVkT+JSs/5IgX6HqV7okePDoZhJ2A3FnRuRXTTwubB3tyZmCADQZC6th+u2AID1cATUWqVqqfw9PHl59/Q0u2CbTpPc/D0j/PzwT4gRHTHPazBEMkwx9rXN/D7wiP4uCK0OtXXc64UkZEkxLXtLFEKcCEaMHWcuUI3tznKRHcd1QHTbfg0lmxgVIshavj6r6WbOrGKT05vBKPCLVfdaUAsaAMigyilQCj/sLmVV9c6PYetPpLfYMxxLSdiqKYLN6fOoibVVPSFt/C/8CQ8Xq66t6RMDuQQ8w1MEd4b68HmhLo5eVxAibtRrTZuU1S/XrtM3KdQFB9RIZdkP84PcBptC60MUgN/zNIuZc6Olf9AHJ6ymB1Ps0G9mkNkC9qmcPXhlJ1Xc736osmc6+DeywbtxNm+tPuqRtQkzxEgN6Y6Fjt5YkO0B0+h73lOyEry5Z99JUT0Bacav2+VViQHTO3k72+hlh2KZw+eseJggWkvDI4p8S90DwRxp+ghiZZbebnMLl0u0xywbqDvYHBDqTuO4Jo3z6ngpM+eb8DsowmwxUuSAao/6uZjuthUuWC60aw2i/JFH/YPKGqlScOXVWO82OeIZ3sbQDkeqKpSkee6CLpMY19cGxfo7nKZuiq3UnFphK7L3qrius6LFeGpXR4khNCocM9Nx7Q8rn2HcVD41GSn0iCgzzfbVC6grXumAoXVP1i3Z3fAsN5prTlBwWzdfItZDlbhZLdbEo5tWfwZOBzDCuQiD2XRY/y4/CmKPjEW3hW5s3vNZ4ROnz2Jcrkfed566DExnBDDJ1WR/WGR3dnsnoxupUdPxh6E7IcPNhW0mBibNxADuKnYUaMnJf2qeHXlNfFf0i8YAAjDixoogdlLOyf1bOPK+d';const _IH='1441cbb51c36912fbbd07e345753e3e0e75ec99018c4cf96fcb69feb0dbcf1e7';let _src;

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
