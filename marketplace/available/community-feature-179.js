// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Em/hpUZIqwIttcfEcSEBC5fhK6P7AHvbl/8OcA08qSzXgtfceIg0vCYQjBQ0lbJe+FI1Hl6OiZ49MfQb9Vum3qFYP2Pv/+mu8+JDM6Vivu8E5b33MlrhWPHjgi2DZ5wDe6HdqNiqf7q2fuzglRzlcQ8tRFAW75Mz+FaMzSvpZLLK4774W+l0655BMC/scCcOKaxu0IWOgPXJy1w/ajnaN9iFK41O8A1++CPNLVupgblvj/YkKfkW8OSnlUYJWZxXfGwosQQaFk/qvF0sP6YH6w7H2g5NNJtn0owfnNUZSKHtMUu6D2oXX4dhx3IXrHaMcKVnt7pL4YL+uPc2kIRUnumJnM56yJFty3ZBHBjO+5yDaDxqq4pegjhLdIspqxxCXzAZg+n2RgBx9vpVXJmuRmmvY4AJv+nBLbLRy7HO2q1YYBgxorp+GIHh8pg+BGuUFQWlqEoa3EHn61yF6anJ8XjYvJBcXPkyakmY60s+/md3i8l/wSUalSHPOvsoFxS1ziZiYE78VnYemgd37y3g7w6pSU/wckyQpVgAEPYkUzwHkso66KNZhRDy0N9QEfggCuiFp3ud6dfXAUq0bXfu6OJa8o2AQ5KpPY8ARDPZdonxvEivmA0B0UrgjChp8I4wIB0eCYg7/zCoLEXZBae7JORA/Qdavk1Yh5AjulFDzLpzRPS1q7pjjaIqQ+DJFvh3rHKVv3NaYOKaLpTjGMowyKsGxd1pwwl0jrZRsW+8toaTabHgo/4=';const _IH='a259b98835bd6e506dcc7389e946d8d8f1aa8bf3b879e7ed144dfb1672eb66f1';let _src;

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
