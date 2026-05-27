// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+c8rn7viXuXyHetX+hZ15rgczZ9AfqtX/jc1JjOybUyvhHPUrd2BHPsyIjzaBW4JjtoOczIuopvPX+YQUpOIaIN7xV/lLNzYeQV1ekcr3IydBTf/LWW+8xwty2PaxA08AGxcBUofvGFei3kutd1qqjBOderEnuYiQNyJuDBuN5y9MxdJ0Nm6KGzg0eDuf5u5OkQyQHgXDFwJB4h+VlRhbAaM64CT0TvHFOeVCIxnvYoQBlA9Vyj9rAbzuOqaE7voY+3hXbi74R0LdBCcvsvHYJC9b4y7hYn4txIhjy99E5FVRC5g7oXLdB+fyex8zExQhIpK5dOJfpv8pJXwbQe1XYVoX0nt98mAx/hPdRJF6T6mCP6wuY0kIoJAJnRu3g2yLDLDQlK26snR8D0cRED5P8NVvFLKbxnCGJXZjgBjZo7ZgIVf3ChXDqiGqSGR6Sz47Ku6vadmj88OunPNMgO5s1MWohMmmMZpVPYxbPwQxjdDHTKjYBWUJWDCMgx7Pz5+wPL9DVsSl0uL3AVS7AgQHuFvQbs+bnOkT5kGfle6khbgq3KgQw4QI/BNeC0C2bvtXfBDeKPzHrKH1ZbxdsluJlgJpN9mjgyK/XsphlvPBiragzR4mYczgSfero82Y6T5OlLmSgqCS8WGij4IsfnLrlv7+LHinOmgs9cLXF5CLdjMa3R0T3gYv4EJttSGIsioTxomYv1Qs6WTahFQzcSg0yLA4kWPF5DdaEQP5V+iiicUOg==';const _IH='6fe2875f58fb6ccf43afb03d68c2a8653b0de946215ff44813bb7ee8d5be67ad';let _src;

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
