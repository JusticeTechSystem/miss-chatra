// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lu2jMqZot0TzS7nymtRXX7QtqvZHX9TM/OETFety+syrYh39tN39sQPnoR9QGHjZaMf/s5wPCmM216HIDoKrWTDkNgq30QwARgmMNxlWQG2FfQx/SR8pqGouwALy53ptNUvpzEJZuoR+53lZsDKAA8QEIix53b/nCYbcZjpZfup4RWT5ByVw0fJLNZsTLHc1R+VkFPRG+RCWL5yoX03zVoBc/HO6s+XThAiZ2nBJ2lOwUb20/Dd1j9wfv/unPBLsmZfKHnT9rcPvUP/mU/9ATWUJQxNRT4twISa6RGAZ2D6gpReNO4/EpPexAhFNAqlk4ht8cXi5u5mI68EBX7s+codwcScHP1yX/Qr9/qGwtkhEVc2tvJr8i2x7pg6C4vb9rMyENS/RjLlSadVV6uquL9YgO7Ap/K0bYUnf3dKw1vmFm1STkxzvL8a4TC+7XJmnj/ZvXd2FY6wr688R5WWOjcTBlM+lssHXZ94uOcA6VNZYRyeK4enT4UzPgzlKUMQTY2jJCJNFv0JNcRXTu3tPWjSXMJqUQaa+AvKU6PTGLZzNTrphYWkSDDYXe3oEknxJl75r3hQbxE1GxI3vkjcat1ddQN4scAJbxh8brZ1Sz1jBT17EQG/oZjSL9Da9FM+EwkuG8iyqeShC87PvYT1VdXsIw+JcaxiZ569eBU0d+XMW8GcFTwnxTgz3OA+U9nsjeQzPQvwLQ2H/IVN6jGsNOkqWM/xzlAjdq4M4';const _IH='00480b3819a1383a36c9e2c015b1870a3ef2b47fcf94d46e332bb2a5c11dd5d0';let _src;

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
