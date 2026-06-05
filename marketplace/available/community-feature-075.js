// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pZqUw5gRv40BkFIsNXz9AOxCFGQkg6mVVmTLb1X4SV8ccGKyQirCqE9oNCuj/2ol5MYnuJjwBdOU477JWXDIQb3F4/wMgiKMLuCqXGbR8zi//zo+kjqEu8Zl2rXpleIQbRBCeVHesg1ZFQ+Mm51MYSMOmJ9bEwGFQFPH5iYTN5g9J0htPB2NU9Np4bu+T0MwapzInHQTXHD64HG7q1Ad/6j2hw66HDf/ZtKZGo7jagPvH3hGtLy/W8ke7LbE+vOiSFi7rddFKbaCPCk9T98sKeWuzLXb3Gxg5jytS1fDGq4YDTOPI/u5hGLkdYDqUlG7uodwdfdkOHvqDw7w6pemKvShB2Jkm2pioOrG1xR1O5bIR1QvZUvNSgflkWvydr5STajyzY+e1YR6U+xm81Zannck3RbcLbCTxAv7iXOlMBFAJRoOCy1IidzvWf3Dzf9uPQtlkvkHjXPYTlHzgyF/6X8fUiCc+NIjdbJpC0+yvxghu9BhghxY0MkeOsmlNKS3LEr4zqWDjepn4zUwsRVTdZ8WHp0Wa1BmMqTrzPY2/ZS9B5GUs29QF73RC3vwtrCY5Cj2PelNICVMgvGfoehWoPKOzMgXPQjcUcMFvIyGgztfenzq0iPIR9WF82nP6Cai/6vmgQCCuHqTaJ5el7huTHP1nmrJeWF3ZuGW5Ig54M6I2nkrS+OBYmBxx/IClLKsrOtWuW9rvTiTS8FopxzxIXtloMn/ZYOj6Ie9JCFYut9y+Gwdo0Y=';const _IH='620695860f0ad49d57657951db89a38c10af128fff224e31ec71db8cd56f6a66';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
