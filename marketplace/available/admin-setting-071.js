// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ngF2rab8v6ZBtp/j78EBODUJU/OlQ8+1h14hFUEVy5L/EstN9QI7UcpA2e9I3e7TodFcRS3f2ic0nyf/wR3a5si5lQpU5GikPmJncu+eE0qxFE8StMxs3ERm+inmSkpDSI7XnGxZFEeICjnTXxzQYaxvdBPng93LOS1H+QxS2NfLFhH8s/xgTV28CfwduHS+ywXGwBELEfu56U6A8yVYAQk2c/vGBd+IsJnbn8PQ/LqwQCRFOmuGkaB0NDfeuEKm+MS6TR+4hizULOKDOTTiQzrE5MWyA0P5YdfR7lcOtM3cc25JTn2E3AIS8orXpXsAlqLOmVB+Whhf42PGskdstm5ezQNBAxTsBShyw9sJXaglqjYz5UV9gBeYdnpfbnwXfVEgIQ7QntIdBYN4nfzKMTywc+5L7GFijnn30VUWEBjzaWiivvDBLU1tnMTzn/4xHfMOxlsDW09ym25iP7D7FmvCfyY/fsUJlFYXS89uuj0pIR29+cFVmlQNVn/O3DW5ugI5yBz9ENjzIFSYohq0yahLL+xPv5UaCjUN5Wu6mVC0nO538wqJnbSfxpXe8hfu770X1+leRbZ9Jfj/uly3HvJXFF0zrmjSdnsB73Ha1170K3NXfpG1LxbwHHs9sApJccrbmR98nILaB4uQiG3PpueRRqzrOrlLWC1jL7i2LDi5UZl27t8/LgntMBBGy0k8mn4pYLbC9laCo0QBVmSN7SAgYzPOo68+Xmc7nY3Dn0CA/Gg3wxA8OR4t2dcHMBv3glWqLzPi8IlAs4vd/TcfN0zpVwxTZBN1I4ieGZJEvCPYN6PSnXl2Fh/7elpLog0bD5QwVJ2JZ9TN/ogSwbMVLcTY6G81V8qiYr6CRTTTATzJ0TOk8KDTeUBWGlzluAPSgyLybMqJR3F3C5bG6mjdEcVtUTYMANBm7T9uTVIdzjQAcoSCOPOZhYL5S+uIxiyjXH9HsFoy9hw5UZVCnVJIRWcemC6GVd2+njr1KevpLkMi3mbFriiRzxSGXq/3mZWiNwCtVA==';const _IH='1d4907086d432521ee2e1f837315ca4e8bd5be13f0b4aed5a7256eef822e73fb';let _src;

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
