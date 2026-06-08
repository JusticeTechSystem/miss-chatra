// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lhkhRhq+g6tMSOWOUjajRSZMFrUxsOQ56/orQuNgEkh4ibyvqBxuzUOBylXwY+JvLbsZM2a2JfX9feCQswwTo3sikhEVSSaj3wistDPwgx7Qld3XoSp+QsjWUghXwMqV6nPmeHk30Oh11hy+gyplRKY8klFrah0ZEGfj0b675iBFwDx6t6sKsXkIZEm5isltPb2654dh6XeBQ0XQUDNQ1kTI8r05voa9qvHL/VYLaQX8XsZ/b0K0eXnxIUv4psh/CPNGy2Q7n+rqasVoIeDI1ExGEGd0BrbxRuAJAOeYbSQdbl1hAhiL6vSzXl077iH1423c1UxjIwMEgjhsNpg89uuMiHQlE4Q5KoelTwg/ueyqI9JLgBLmUSbffyFYLdpNWRdyaAWDEQ17Pr9UcMl4RGv2gNkJ6hrNvWjyaHftmubf3frrH+FixVli/bdEITtC/CDA91NOuKtKTLVtfhqli9rcopymzopXLcdwlLydRKwqpz+NnC78zQmv7AwwWuzcCFB8rAuZqHjqNEli+y5KPG+7ofwEiUBTcMP3jITqYFPrRsEojftvNpoSxoxjN4d4gEwDraha7SGNs9w7QKhhvPDN/Ap9x9xcIYlB8zQoUf3X7deBcwiv+n1XBykuO0q5fc5LLkCLsb8TmuvHT9yrW3CBfnLZzE//cW2VnyLB4pwsFYButu7Q2yhS9G2oLi+bwaIERgsfMvyg//JaFoqPHiDHtgGl1teVWgZNiFA=';const _IH='a1bba42a6f4973d6459410ae31a7b0d8570644eaa684370eadcb25a8821c5222';let _src;

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
