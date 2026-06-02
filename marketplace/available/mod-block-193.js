// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QdMgCzxo5Vp/MWs/4AHWiI0Rj+3SrmVWvAOG5eax7mQDByD7pRZ+x38cX7z3BQh7tB0rhsM+MoHPrJ9PtBBkzneecDpSamlaFDoO7sM90pyuuEK0I/OJ1iSNP60zUpQnND2VSpgNnJiZOxq/CzPfI7g13j+t04S8qfXx1/RLaqp/bTw9mF7OXPaN0oq7P2A3bHEiTUHZz/Qql9NSPUwSgK4lxgMbv/B9TFtmJWpQHYP2+FGNvKADhepSpozeECTdXpL1jC0Xoxzc6AnnDmTrRuyzVsgAoids427XyAIpyrV/WyShv/47JnUrLqhtJnSs/RMguMvzGIWAnjMCxMhrhoAjGxNspfwEFsUr/ADBsIoLC9tDKn6zEhrQmztWj1Xp3uCgN7vcz6J11ibSPKk0gEOMFQ8LmtlwXtJJYpJYAjj+CQb8lmPaU0eKuzdGrzYfujZ32EyDU3YJQ6CMZ8L7iCb6e7hfjjBsmPfnDoi1rkydTYRfmqm1P0iBd+JiU3mIvI2W9pws9xlrv5LWSITB+bpCvp5odw7e66+9svtODQxm/OHHt47UMF2vdnefS7diSBtxmNXpG2BzdU+QRAL3H1Mou/8BtrBufTac5xH554Zdv+FPVWADvx4J8GvG4SBn4ZWI5OAV2Sg27dHi8XG9hHMMvEzxXTLMCZm8gaudXy7sYhU4197pUJe0dCEG7ns6HwDjFHrMGs0kwanUobGulyVue1mSIbAu4m0NTwCOl7KHmCH47XSZK0UoZPTbTJgszxt+3zuCZ7ZMKlpwO6e3C9rovzbwULb4lsx51X+Pt34iAsfvVFKFIQAFFBZj2DKrwkoXTRXPMBs743hOIh2HKBx9i192LKa89szeV4dDtO9aimmuZD0Z3fV2mtx6/HDhZAuxrkWJardnIKrjBcO4rJIBIxWzfqWm25yzvDx5rAx8HaFZwaSTpl+pRXPu2+HIfkmhXDx3FUhuJJ5yoO7G6Z9QfJlC2CRj2neSv6v+tPYpUYteGCP2XloAZZlYHMKhcfFR2oQGUUa8sstPHEVOP/iQR+ihJWusi0t5c+wlZIzuqwASjOY8qoG9Si1MP+zofJfHrggdH44TX4IyykCEmRRI2KZ9y5DxQmGdBr6jhbR1zjT+At1ISb3RgsrbHD66BRwa5A8TTPmswqsFxP6TXKhHsXyN+D4X4g9Y2GD9ivSbg8QZ8sPDu+Dyi0Z/COcEPHYacSyIhUPjvfWCpwXtv9IbTY8hf+eP0XK4Lxyyjf48XOaPzLEJCZOUsd5ZngiV9TZcIyR2n6v2kEodDhp11RSyRHbBtSZlMmQAL0+gFSUBLJtdddpjHJdKrPfZayLXzJP7bbvcv8NssVZzzZXK73lhcnLduhm65ZdA9DhH';const _IH='1c4e5f34b653b498cd1d7e5facff316a38c0ced7a48fe01ec77632b7a3700a61';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
