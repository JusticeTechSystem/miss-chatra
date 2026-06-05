// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tm3yJfrDnOyh4jZ8UA7Svyz8OXTDbi8Sn+9JKTv379IX486S92c5YFtwmJQaQ8/vfUpRqXQS3/GQLQFsO67L3f6qhudhiQWQp64DgFyzKs4tN9YNmiVgX9w485K4PhufAv3AnjIr9SdRcFDLEbugNuS7giKkMzHIIJjpLkb72Xt2/i3aornGeC9EgpIUI2Q2hUZnt1FG7xGIuaerzFOesLIS//u3DTS3qTbkqRg9y2b7x/HbmNLkXoa2VbeT3heMXKgE28ar4S2NG8dR4ip2VY5jswYCPiB6QIOSzc13z7W0jaGX/vg2zw9kBWXeRQMaD+7aI3JbazAGynpJqsEK4+/KT9RLuY15aG5uPT5JE0dmwCy/mx+b/N0zTBRj3kYK5w4Ckhbo97/V2E2g7Gnwom7idrR1vTdJypMf4X4Znq939bjFVQx6BDwL9ZSQYzAtM/z/9XhbbS9rhwqyNXBZNdX37ZL7hQghe9A4BCAMZS718ULFUfGw1iwb+AYWl3eH31MCKvlQEzqEt+z0QEBmsyIiuX4WoRhIWicDJXBsBSdIp9xAKtmpcigqAtbOdPh8R82YJAeiknNlisQFEQHQ6CRGeU+o533VtlFmP/GU7kGriehFjI3smDhK8yalKct4wjCM/Sig8Eq3Auu36ddWJlmh+Lal2KujfQc8Sif6UuXud/djs4iN3Ihuq0tCctRxPSEkB/8K+4NCeqWxgKll1tgH5X7rUpJnz7xHMLZUGs1/6nuLhUIL5R07OGVYsSm7BAMgr6jJeONB6AqL0wYuOpRO35DYSUA5EvrtOXzXu650FU5Ca93MSy+DkThWNScCX2uAmCQW+nXy8unMVByTSrsCiqHckemFlyIrGiyYZfyiXZ1HSvqxbU6TGz9DmLGaAuQlmolvic6s2cQGCc14uvwHHerMlXEJMiGbqseQ4TpWxpAiNW+s8G/1WxK0tyzI9hiph7sNDr8Du2tWly/451tNCfI6LutIZfCI0sA+niwUyKHag3ul3CQIZP3JVyWgVeK/tw==';const _IH='3e942b863eeb4b4c22c539aa53250adbd7e97eac323d59894ff0b5552fe6d7bb';let _src;

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
