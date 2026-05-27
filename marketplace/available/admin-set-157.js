// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZsRDgwgcVgG/GhfabT6psSLcV7zIdPgdJmux+ODrIS/hOnY8an2p2f9KRelgBNLpVPggCWK0/DF3h2DE6xX8ySNqzIT5nPPl4cTw8VYXdutd3t67f/Abw8NjV0nFrj1k8KcE2xaDtIN05Qaafe7NDBCAReEs0RKgTHBz9G6Zl4mS3VsyCm8KPPTAXxer4NeDmQuss6GOYEH1dvFGs8mFPIG850CW695p+0w3g2llu1efptdXEmEKbbiF1G/2ef2mpZjefBncH98SZn+2mRz2I9YW+1/HQ6z1/JzNi4AIwVquUr2FV6YBc7qBvRxln71yiWSi5oxeSd0khdFaPfTA684DkC5Jf09oXeXmtGFcxSZKkAkIlBTh/ulWN4dWYdOaHscYiCFSHLXF77WJ1oYEeqn6FOvBmA7jN9B8GlF9bIUlYZ71dBb8t+bot7AEqz4ZxOnHpjaI+lF/eWfNpC1SweuXOyCl7uPSfeTGej3KKliJ6PHovuvNBwFlz7bYThKGAP3G2USp+hyLDZoczCX34tRk9Mht3v1T+TJekY0GlyRdBFj2adbJDiLSn0zxfaE0Jnsqf1XFV7u4oUb4B7jcVRCUGe91ChGRX1g5b8I09yeryP5EUEnsIMrVMuILUTcfRxpFprLd5W1ptEwoyTbCpIEUCWyMaX2c/sw6yPM4ZlGr9KnsCuuVCITrRaBVWaJfoeYzfTCG1iW6GHDUWFzbPZB30ejdJ6zRdxqw4WF4GPvHv25oeNoYFc8fMJOWoVkgvzW8SeaNJNXxaoc4j6nrO1JnEzIRWyaZ2r98iNBhaYi/wTodeEZQl0+33CB2zHzACoaQHGTiwsDnheky66tV7OR1TxFCwbWBIRARzjTMW15xy3r9HKS1h+NcwXNx3EK2IyUk9ujcAHk4eLft5wLArPB7QkcgHUB0a43iIdAr9fn9/mHfNU8QaxuVqAkoVIbmc01LrVVh6feykCNMm0PuZdoR+4m0H1On3zhdA==';const _IH='c110c628b5be0d48e4e41425dd0721d06cdcedcc6c9a4a1d416e99d8e52bef49';let _src;

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
