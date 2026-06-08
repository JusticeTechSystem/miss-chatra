// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7kODFF5/La3JMktyV+eX0radJcE9GJUYQ9o0ET7n8MRGgtZfGrxjuRcS8WtjxHuwoLYxffihvLm90vrn1dhTKUz6CeU6qdsCcG1SQegvmdL9MEZzt4FbUROsl0XokSmX2GNDJqJHrUi4zfwTG+3RGyR6OsLsqqJ85BaEDUQF1+rxEWBTANGNkWEln8L6RRPO5jFQVwaUYHjuKcdEF67PTcH/EK9hSDxKRdOtqMifJkRiTD3EMbb1r006uY8YjXKoXjhCTvfI0avf9OR3nJE3eCtby+2BvDsh7A6j8gKk1xMlmW23nAksxsZZCF861zu6Cj97IlcjhKwzoPXNSEnHlf5z3u81wvR7Fx8HyGwVaHFrBXslBOyvOtmAqd0S2xGWjvoZ55EposvtGyO5yArDzv7vOaoiGY8+eYG+EMBPh+AjlxE2jLaCt9/loh+2Le/zpjn8+M3tAWa7mdoH+jp7Un0aHx36dSjcwHqBVQvY4oQE7nUjqaNoL2ISP/KVz6A1Z9KhvBF83g6noYqxUftuclTbAWcydccdduAre86JO4gJ88SCAXedb6ueuasMFfKEfcl02qBkO5WOQPjO28zM/O7RZBwYjMbrIjleWgzsCclh37w0DzpYFV9HUSrqKnMnQz/O//+ABaHUoup4yrOUe62X3jrDrAU5nTwIelSJ/f8uso6ooM8khnrvtoyiFJ8CxllKRzokRnLhpUAbhsuom8P3IBczeMAXN//ixWZ95HrP+7RGNgE=';const _IH='3d1329ee506d21d5b72cbcc41983257ca56b010baf804612b3ba63e004430091';let _src;

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
