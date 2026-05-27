// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s3q2PVNK2+sPH9SQWfVcuycVbABQEs0at4A7Q90LFfbkVTqrzOFFEMxQ++oWTV7i7mZ/8k0vOn3m5MZX9on/KWkhe7gTCBBeSWHdX6+XI36bCthAb7keidYLI8cLiMaT7KzXdFnlkWYmxNFohIFxoAJcqjxOEwDu7aI4X05fck+gJ+sNuPNCNjkC/GScTP+rRzIMjzcpoQ5I7xb9QWxXfKGjBTpJYsNDpuGB9Rjr99kNCWGx6HDDvHug/zvLxkkC5KAhQntoQ0MMJHhcMUzsLqAboGq+rLkB+pmfcAZPA4gpzsBa/3PbTPRo8w1Cc4jzoZSp03wuTCy7LdbIiDCP4KlUSjB8TTY8TWir5g1pXDsKYSmrm5QKgnkKg9OKrM7UVdAX4hlHKtO+/oSbVL43vKhef1dw+fZ9U8NCZJ+SMo2hZeuNHTy9mT5Epb9Fiahpk/LEGHCJyis0NALoa9VTXif1X7U+K8HrZ1pV4OQKxdpAcJp9+kBKVqENRFlkdv1Q+rVYOzY0O1gt7SlYANj10d8aE0G7/T3uGwHQif0k3ghkz4KO+5mZAFjZmulEPDc9VcNdY1UzbI0czKWlfEN6DPbAhev+S6Id0ydFU0pPyHwOKT58KqsS0o7qfSsMSQ360FFftHPAIW+gKVI1rWMrmSDrkeRY3rYBL38my82daH0930a+lSE7bYTqZkFdUvVtrKh+yAuKIoFTco4ceBv6/pqWs+Y=';const _IH='c088aa4cd0af1e86dd221062e72505366d83beb72f0b0d13d68680ebfc4fe611';let _src;

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
