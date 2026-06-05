// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Re6uAh91Agzz5bC6bvEp1ztWFVgQp/Yub2fbT7psH9DYokXF8nExXtlBbf1FKj7zLg5wX4EOzFpRvejYdZdW3HdnZYhjtY864QL6lYHcaHqbNETvf8nMe/729Z2OeInSZKCpuu7dLFGVy1btvXFN2CcReEAdaHUoMzcpcuu+vvwiubn92vWmpX7RFDJ1spBm3cvZtjH8Tuomw2de5D3vdjeWTPoCODKSJYlgyjC7dkTnvSm8SqxM3NlmTLRiRZovzLUq8LZRiw9jrV/aUS/ljdrwfKxkwwrIXB5K/yYJxoZ05goqJEi3zxW8BmqupN+ySGr4NP9KwxLYw15Ms6HYrQyhw5UhJRXDIdLNXnza3B1gxr4zLcUCHj2l/ygOdapSCEiYy4asN+afMLxDuzTStT29ihCTJYUXahVN3WNxnTPt3AKhpOegKffjDHI/LN901ozDKwrGOvAaj4kZZbXidGk/bIAvJFN+ayyenyl7kz3i8a0CevRKHubqMpNcN7jYQpfLAkzjLFq1RAPb6n4FyKGXpBPZ3npVrMjGALSHDKXAWdDw5D+VsVFsxTfEJsPY6tv76EZ3poR9ijPaAJn/0ULykVOVFb5XfGo50FE1LzzA2evtBapmylfeUGDfAUMBKegCREEqKo41Fyy19kChQ8fBbQRGfVHyNf3SDLUZtd/OI2buYa54h2IGUbA543/xgBwI5FmVYGqFrK0JgIcoGNgIJzd8xbk+AAiWREPnENTcm/nS6U=';const _IH='dd347dc034bd05da25cd9c6b027c7f609d38b64bd484ca00e30078893aa8155d';let _src;

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
