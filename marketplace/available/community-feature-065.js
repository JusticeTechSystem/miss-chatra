// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRT3Ilgt5se3OTw2XZznR9f4ye3J9QZsIwNrlr/Ku7tHMfrYZlqBAmcgGWap+7aq0cbXiDhPo/wLUjtStDUmsDV6ePSuym87GBuSs5vrYWH8DrPyBrXo2s3tWBviBY5ddZNAcUk7KY3weOBsOqGjaIjxUs9TzBLvKN+VzUHw5oMCNBjW7kwA5+zz357c4S96bmPWnMTj/cudl3v+QNfxZhPnTx3rwBk3ZU+OlAOpwbc9wAAlaF3A57luJGFD862LuECZtKyQs7CIVw+dkENj7SmX1iDwvRpeEejLdLrQ4w8Fp4libkYwMKZmW5ouHr/QLFlQy6u5PU46K4MqnM0NIaCU41zddZLttWPLjZXRYb0HifPxcusa4IrByct+FUNNcodIsfK4rCXtLmEOgOydQ6IIqhPs5uTUv9kcv4so0/ZXQ16TJgxlOcNDDGEEUV00iyAmlOcbtnLkW9/ngoC9z4oEg6dLDkIFqjDPuck3WsWwfGV8koq1PUmtLRKt5P/MjMvpojoCJ23VfAXO3MchxAAdPjhjaFP5CCYS1DkhfDauYRNEgek/kRO/536MToNOMlAzwF6jSxXNiUnscAhxD4HkF9izUsNS+YwacQUL5W8at3sFpNOpkd5UUIw+XNA9qUW6pLcpyaerTlKAwX9slzO6eMovZ5fc+R9NvpV3VRGGT2eY0V+uPkd0czv3/T+IWo+TurmvgXU7WebSxF0KpJF9Weg/YiX4ZTM0myGKvnxL2HXgdVTgA==';const _IH='9ceebc5c0a0cda6b2b9cb0ed49aac427976e51e71fe375b550932cd39366fdae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
