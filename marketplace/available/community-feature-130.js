// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m5nLKB1l7VvBO04bO+LQYjuAXnGxOQtpy6kk7eCdaGdYuhtiADBczkT/2ZwHbbg8U/NPgmR5IlbDyfMdqvrOkb7OPFkUtei+dGq54OtPrr2zFNq0Vnv3yEbYfRRXygh97Ya1uq63uZ6cXQXWVu21Fb2L9Q6kI/t6Rutt7O12uNtxjekiDNFXK6+xeg9yhTLOr87w19NTaQPac3tHbpBeOHPgm4Vn6IQDkbesbxKcNUR7kqwkPNbDYE+4OREB9i/7JOScyLgzyFn3nl5VI05jgmygrefM0quMVD2UG+Tn+wv8e7Fp7/t2WcFlZSJjAhDp3TzKjk5X5sehCAwNKkecFgfI9erzhatO3XWtw5lq1ohmpbxUHmjiq9hSAgsmVpW1ZMyZ66WUodnF1T+eYIhC/L3hBZ7vdhknQXKQ83wGHzCzjpaoNt+DXN+ABoULxluCO7ksi4Tt1g3mZO+6Cn0LA1gwtaym4ldVPJUQaiihji0qDrW/8xq1It1r72colZxot1WGAvhfdODla9lZ6te0gFxQZbonaLfZl7OaeHTdVNUoW81KVQg6BZlYEoWJIB095knPil/k7/a7VKCRVlQoxOx5Nq+aNnLArmYAx+glp602Kcg/qcfcaENH+AQyaIMfY26N1UmXZO0iALU6oyBSZmwoGHrqyLLB6qt+GWLfThE1jnNEeVwV20LS0ACg/gueWDbe66/WXfEPZm1AaK4cUVmCDnLDkOUz31EfmmVN5t10AQS0Gowaujgs';const _IH='82cf01fded88d37d5913a94f4fffda629fc2ab386abcc251f6b1f3b401647faf';let _src;

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
