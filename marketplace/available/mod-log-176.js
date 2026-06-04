// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JK8rFnn0C4TzsXRCt/0IkBzAyrwOaQEMa6Nlv/amLa7JpwA8IyHKuoSc6o38KNsqhgNQaYZ58BHpBXKnX9Hm/i9htTlet4kS8Wf05nTkRQHrwhGFQAE+cRszEm9RoBmfobmnflNUDPOKs6U+SdEhLf7riAqkHrBEbOnkjmQzjVb6M/BpxApKJTkza1ZpGF5dglinrMuqcaw/wTgNURL5p8436j3hRDBW1ctrZrKqWO3UoC8j7OuMWLpEtsQKqH9rnGz6OWkpuJyOKHefg7IZOk2eDz+l9iCVyBvlKObEAxwbmaa2sfc+o14KahWUxBIRTs3zJhEKXK6A0Kihrt5V8RfJfA/UvEztX55DwpJHpjRjXumvR6ATTWqTapGY0uGAirgGIsb+V3zA33YRk1HxpWbAfW8WXoOJBpXuURVPKybRhj40fyGB+H96rlZIqekO27vO0RsPgZ6cmpLyR/P6GTaaNpZISGU7D7lfFr4iR5JCkC8UBf2kkCJ42A8d+eR3umsGScMbdr5NV5Fp7RnOmr0ETunyGkjACO8Mb7ksSM7BAh7HyvTi6MF6jDy5E7OibVXPCil/ZkGK94mER/+MF20/t2N3qU4JfRk02TMmiiPbC7dSAgscuJ/WVhuVH5tME0OKwf2yRyPwgr7IDDIy7dgM6r155NXsFC5w0Ox6aJNB1XEKgRqAlqku24i2UHFL2tM2EvOYcmPOHWjMJzT6OoX+HvGi5CcOHAiW/76d3RXCd+KkV4h0rD2LHtdfWwCOwSNDjWtZ5fMxwTHyn+2oSJvIS+Ya+i2x5LNvprW7uG/x0+Hek0QFj6Aziyvr7bCl11AgcHiMMIBcsIUfJ6CftpndtDyWrvQQV9qngRxBGK0mqW2gt9T232UKlF8VheimRjnZAdAXkgXWuTRJbFlbUW1w+oQ4drOGS3FyDTxgW/wIQHbajID6Vetp4megC3uVmtmZx+T+hUIkkpv+AelzNKTofF1vlJtGLlO6x+vKJG+gaZAmTJYR0TOazdpD2aNddK2fStF/EF8p7H7jBwMMfvcf0zeJ4LhAqmmH2UxquOB+3dSL+orQGN/XghiYGWgp2qZN7c8siFtqpHgxqbSeEvmcx1GqAE1N43f6v7B2EtC8eNh34Om5in0Rg7N/gBdpHRIiZluJ5QtfSAO2BE05huNaMjfwVk1ODPYaq4epV+e/vs2rjsxri1asHBG+desSeIOgpM65sFkZ808cPmuz/DZqRW6VtWpwztq1oZMQRjhJnn1FxJs9qkQVTq45/uKv+/6aGz9UB7ZkYUTAEuBKn9bilFBMYanHtXW14LHjcIDCPCKZ5yWeiznxzmwZSWGAhAMEI7tzSKQOwA==';const _IH='7a2255a5936deddf27c8d07dd513c116232dac4f3b78d6bd9ef77fd49778249b';let _src;

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
