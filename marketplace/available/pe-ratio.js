// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ZAOQKBZ5QYZfl4ZlZjMBngSLT9KB2f6TvOMGKm3rn/L1d0qm7T5yY96Ykppfr7pNg/ivxfgKaMJeOL475EJJOCuQbjz7+afWoMT7I+QMBMcj+LlCWWKmezJ0uDQVcX6J2wpEWjtwl0ZEJq3k/VKgdZ3zg5zIXoqkvzblufpiLx0ABzYQc6RjSFrVtzF2W462T2abbWffRtjes7eIUhCd8htNXRJ4QALOBWJi+dEfrAhN5la0DHVe+R1qOqQKDsa22ezC4SPtSrtbRIM3JyTZ+9X8sRjHQpV8cO3B1O0/vQ653bTCQBCR/1Xr6+IP7oNCYeKWg+1u5w8Qd60azbI6oxVXrho/P4brjDsiLcZMviUBuK8YmgmiTiKiYxserbxl6rxnn/CNogKszWXlrTVUXgSf4CKJWxsBrWGWRqXSWPDCfv8Lf00RJ/xVDseBIhMgxnb/CcgwTtZfQOdK6XAYrcMLCJUMDNizRca+6lCWlk312TixMP89AcaIwlJblBa4Dkwq/H4wSwvUoY1goHOGMMPaI17FFCvgegWoPI7dWn0wE3APBBn0bTfimhSODIPoTIKQ+BLzvEnTxVlb2yGzs8WaCm12mKhVIuhFHTVI3D04BTDNkRdliGeS280r6+112BsqHY9uALXaZfOWEg1sqSsm86xAj5AbqSApJsbdriDoWob7q+4OQx1jTGntfrASOi+Y3lrMBaxFqe2fYKKXBdw9kqRCbKV80gkOttoNYcADI6B9qvb+cfgtn0xGsw13QsPfAQq2OByd8cOSNnd7Kx01tfU69nZysiRVrlMBseC1+Pi1CnG+jtvN1CSFD/02w4b0Je81/qIufdm6nl0+UKZ50CjB8nxdvEPi27c8xRwo8j8YttjnqXh57c6O5h/m69+ZHKDB5FVJFO5KORBq/NPYXWWHNVMYKNLm0XhlqzVcqdvMEOc+fvkwBuhWi1Y1cwlmQnJns1U2fu7Bg2jg3N86+aI+vRBhdJOhrJHHACWc2AXp1EDHFE42IHb5toEcs/z9zHRnypVzoQpTKgr5udHzV2JLBbGNe/Wl5DbMg5m0iNtf0K6gp4ljsMC9fpeaj+tqd2mdArkqzefOOFaCLi/NKkt2qX3877onpwm374KjPCqgdLOX3Z/pQ=';const _IH='e266314e37462f54aa77ac421857b1deb701a276451a07cdd9b8631a38ea8340';let _src;

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
