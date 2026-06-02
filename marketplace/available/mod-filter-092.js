// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l17kSktV2FWRifcp/1+xjkL64H6T6FKhqtDtwVgKRGeA/vEyXEryEM+AG+mmF0J9yKTDLxQsPH+MqELPNlG1tMoFFQKIGcS9ndozivOJpRJbsxhZ2dxOYPLTw88iYfHAIGB7zlXlKd9/Ry1m5HBwREDX5jyW/M6YRBY0PZu2x5pdu7E1obUt80RIXoIoBnhbClCio84Q8sA858vJSL3DYfvsxdkmB6mEcf2OxGTEjgFPYFpmvJWr0H3Xk4T9GN7BKnL8mePX2Mb9+NGo4ahJ50nVOQskmjZTZ/DkZ9tbwP4tb+CZAXQmG/xRtnI4MIdzzexZ3gqqWBuMArjkcWtZvpYBecDuqGdkRjfx8jkoE9aJzxJtZ6Z/P6HHY6ST20c5pFlBVERbXNP0/2BwRpu1oS7Z3ISBQoQHUAnhEG8bNmVNAIxWLhaQQ+AD5nNJ5w/80G0wbRN9SVBtqYgJW6DDeQW4F5b45ReT0op/pKCI1MFlucM0C1y5T5qMBAV59r7SjK5HkI5us8yRTqCybdkZkLAqpJHsc0PBw1Uif2i0Obhcu/M0fxXBgotJCUF7pdYrYmRAkN/Bal1CoJf+TGdzYkyGg1vXxrADijhoETArOQR6KyrA+pQ0JPwO+Rz6zLu5EMO26XiU3b3NaE71aG/IIBV9TNjFtG30FJSLXp+1D2TqD+9NAis2egzFjXd51RdTMgGVwHg0P5CdOWWFWG7vkrOPWrDsx5NOeKYKn9QebfbqcpUvhYVGMax+KDAU95sHU/3VExRpTooANKGqjZUifdhcw+0TWqZSAeJB8G0ZjB3kE1Rv5qR2Uo5gZkVHtG1ExGdoyKe8jVpMzg4cDMVTFqahFVgs80DUrUJ7v6BDf3nCa6tqHjR/LRkvG4+PDUtkNc82Uhi8HvdNRvC3XJ28BzbQZ1IlhfExSeR4Xn1Ys7AjJ4vh7kpQ8wrg3gULlNifrXrs56pHK7qY8SqiHnKribKxRegyQpQFEt1Z/XqxYVBg6HDTLE/TjDeu43AGOxSAgrUO06yOqkM4PVnOA0lNjlYa5A9uz7UqY+1V9j4a3riJI8s4sjX21ei4HK3o13Q1HKQvoaYmLH12qL3k+Dtz5pQU+ecQDQkZes0Fhe1Xju/ZXhwpWI24aU/nrl1cwSAHv6Zfkz5SylWIRtnLlW6rex5v1cH/Bvuv294wTVB3eR9SzvP+8cNaxpxCb6L6N/2xuR3r0czNB+tVR1csTe+g4++E/iMzbowT9zyYqFnEBhFoDA/iPUFWmydXc47Hj4ex8XGLdrFLBQnxsmNyj9GVuHPQp7Lps53E6qkEr493MQn7/ab2up8V9rwuVv8Q/KmpTHtwgDubZhjBLxejvYWZPk1RX3EiP3NOtMqNYsL2WAQtKxs=';const _IH='ae1d997a5338b4df216ec9fc978a543e99eec6c69e06227bc58456d7aafd81be';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
