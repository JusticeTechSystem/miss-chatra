// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9KDneZPaqO/yEJyXpb2Y3saEst7AMeT6pyeTGQ8s6m/O33s0v9FVPixmXgTN75eoZMG8Ro2Pk7gCs1uh2dgBUfyxppLlZ0xrYU7QVs618MzOEHjDuba4M9Q1hn2ag4r8sQo9UPeyq7uZefHRTgtwdf+hpeskpdk+EpoNCHuFwwgqjKpsjfE5TCeId3mvvTRwDS9LssFUU0KDwN9xmNk+nSPW7ANZ7SZ80uYKcszU9KwCdZTLmx7IitW8zuVEdSeQIuP2WAafS6rnkmFcscaaX5IXSplQfF9idwqDOe76P8I2o2c20LShJAC15yvZGJjXi15DOiSBFXAwg5Sx6hyNbd5DM1/vwQ6wwEUe4mXFILvU1habcPxDQ6bY4bOOzeIZBguvDeGOPwuaMmm70H2RSDGSE9eC05KWlneJnxKcJFYXcpYuL+FayfRoxJxCNB32xtPh4SBTvv+tR6yEU35YGFxp5IZ48XxfixodoXic7f8i4bO34NVWPwm5D+9hVm49FeXYt3x5gs2tbhQ+h3q5Y1ecFk0O7Nn75Bz4XpkwtbKQYcqwR1PK/ldZpJjfCdjmdZ44Jol9gR+rrTf48o4VqQDDJvQ6psdRDaAPWR+TMSrq/AtWtKa4NaeYGxYeh/gsJDgmhUUia4NA4STKiDAZ+5S822xLc98OrPqkuhwXFifij0hGhSz43xrwwmney1xUz6UfHlMlu/6xjFuFi7xjVT0n5xye+67Qrlzo/zE';const _IH='6fb704a81e53f187a9b006491f77b14b14114a771011062f1e1fe79b7be35de9';let _src;

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
