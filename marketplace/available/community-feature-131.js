// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6+lbizeqDs9k8/bNqFy411YAa1MHTeNoEhOPMzR1fan5tPc/KKzzvfQGmYXofc5jZAT1W3EereFJNMZSc6K2WKWAx+DKPZGAYlj1WnGuxJME2d7r4KQUq+5BfqzHo0rci6dT55+JXsJO9a6RdasmeWdneThltqMRphdkzfq7Yqn7ON1XTAAQ6sZak3quDqFu0g8cg6WrraffLNeUXHr3KaNMs1yFq2lDwP6JNIp91e7+clS/hMK7xyfT5tsGU3q6oURQmV13AX2LSqOUPbFiSZnVZBoNLPjp86PrKXh/HPZ0jnovfWJzZ4ww9xySN0Rl+ExhKYuJG3HZHqEiFui7us+PDoPcTzQKEOnMkVs6EFQOpC8HNgNZYInes9SGeXLcZgxbOrdyLRem8DxtKKJSbi1R3NNPaY6uvRRwoTP5vX2gCS4Ouuj1EcMrtslqWBxAvPMbHuGDtB4F7X/lVkmSqzKWTSoTiwSp3Z1rbAaYCarjY51TALbUPMoqXpJ6fUsFJrCEvMIsxrZaiUGqydQGvop2uqDycn+jikVAzMazTasATahCHKe1C4Ocb7IUoGX7T0Lq6vcbSPIQRmrs2R+vJMaOzgeZNdqa1WhKrBA2pCsCpvFhDTkHt6trP6zZdT3Q5A7+EubyqDXtT4RqJnc9wNUybXXFw6FxD92UYTUyTWbPetNKNnOIR5p6cDfwFsBn4gV9GeFJkd0wl4VU+OjnIZCoWR7bEVi+';const _IH='b278cf395bd820c51b9879e0aeba721b5fcc8e88bf9cc1ef5c895ca49301d6c5';let _src;

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
