// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SyMvbBJ5GR3Jj9ctGvMrCqH9/YRa0Ybd9DyLClTm6VjZmN5ROILkcjhrEDg9uMVt5bhB4pS1yYLHMxzrpo1FPvVc73qOO/JuWn3NSQNVBt/zkyzMK3CirqDMrfpQJy/dEVw/nNU5Yg8ItQnb7IsW5udznt93TGvw2wUu6gc5sR7a/Dxqh1DjfJ14E041fktsJZ8MfUmBjeQly3iIITnhvNbSubAO+cbCoIsog8SURqlGejj+gRWkyhXFKBTBF7g/ZO5b69ZjP5J/a8G7frzs+Wc3SXXGte9AM/LsTVYkerM5YXHKeW+RyCa2jUepLsY3VFY2PlD49beg5oK+TEUK6ZOouAxiVMWYnTyhAJr161LgnsGpLkv8282CyXCW/s26eGhuP3EqFhxj7LFg2ETBzm8ERg/AmrTO6kc+f6xywQ2ypCS9wSemWH3phQ20N+JHOMKrViwrZL5SI27gMnkb7MBwXEaat346ocU6sJNGzLp0mQ6e0yj5VFHn72gE27sVATXKoe4mofHu5eK8QrfYhuarYLuwd25WI0SxlUoiMz9mndwfcXKXBFK6yKikISSk50dx0l9DxenonIxiF3FJyT/ef96K9H7jKi0lqOugBiOl3Mx0F1ovCkJT8B9jhgt5inNvxUZizizQfy7sMGmOVVoC3aKGPdeZ07cj3MU8rVMmywy/ur47HyjlEV3btuFasaTRjihIirEZBZCZ4gKCmSAaQD1WGsrke2Qg4qNfJrXcS2jh6gqpdSKrbA09WfGlVxoaLsRKWAKNAaXewaEavllWQUdWWrl+rYDZTIM9xbU0Qe6yZhdhGdguP8Ul57j8XovufCzWh/uWWK5n/36ma1mp6S9WJmY/5FonlsaZsWuDuxV+vDCmVTiXq1QkwpRu6EpJhIS6v79Dv1kXNDmE45+51Ggkqtdx715Uhd6V5ZrHUgHg4FJTW2L58nURWLAHpiOvSh8s07oTKY3OJkIbA5deyhcq236l';const _IH='e397d55550a0a76374b2ce844922c7412e3b4ccf50f5d81d10270e575e183e31';let _src;

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
