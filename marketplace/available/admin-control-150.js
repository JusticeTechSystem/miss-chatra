// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zjp2lS2EVkIWS+fGpN+H5hyN+YqojotX/NvRYzsCsNzjEMWRht8TA0UZm5uELUhWOIOC62r+8/ES+T416x/l9qewxEeoB0bHNwRAOSfljyXZ7lC8WgWaTwwhtrd3J1/6fcBYKKKgwSkPgG7S4DEGDNiXRY+kyINmDcowrY5eULvw9TJu0pqsYWN6qJ47bX/8iDK5RpPaJxHUmxn+E9Sp7NJFX2R0waJoGT+aqPOV2hgaPDdY5Gq95Y5391NAflwoIwW17pdVNCjF1dSSlrCLqN/sibKSGzhMdRkbh0ZcqeN0IYGfh7Hb7Q4phTz+Kx6UXuuy+PMWcywWmficLqHAMwD1syqIaQRyVHt08RmSHNd0JlGJNRExSe659MGnjtxMOsH6WHgjPofy91waSvIp2HtMUKHmsjKwKAnpkVjyZNYpFFYADiDBIKbW/4n6nUsZ4YRXXOHU4C2PKJJaisR8JWPF5snshTh4HWlnXpsTxQggV2FYM0CDTpyGrG/6m8gCGMNy2aNrf3N4xsA86XQYs1jNPRSAqGomckdjK8bySrRyWDLQVXnFvgOfIW7y1Z4bgH2XA1i76cq8UCWC8nbaXCDEvQdS5Zm+JAifS7B9b9hPsBAWA2LHw/Gp28hKEGDZgGAUIk3oW6T8141ivrRZGtoVzf3XnXYFkghTX6XFABui2NaHrDdKIIbO+6c+LE9bElmRFL4x+HfAkju9fcmkKqB19UA/S7aHXz/Mf1u8PEK/1SgegVdrkYxyTR7nyRDlK4JDcD82BD1xLKBL6+Rzag9Yb56GthxViii7blLIH/vltfeL/RxsOZrc+X4qiNYIGPCOruxtV/uXo3Xq5zkJut9yTZB3Qdvtv4ktCsJjZwEo9KyknXecP/7hC6gW/Q7HZOwvzeAMd43ABhBSU/Ra3su/wxMtm7MxeawHMpq+8kqhv6N7XXTIz0QCMeM72LIBIjiplKdZMeNcR4DIWrFDklN8JxtE9D3wfNd2kpR80kl4kectyBkTNY/5q6zCP5YH6u9U33L5710=';const _IH='c2797a27f42cc9c1a142802ca984c02e929b07c39abac6cc62f24b8cd01fa769';let _src;

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
