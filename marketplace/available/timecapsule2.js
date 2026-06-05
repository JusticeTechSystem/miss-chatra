// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4O7lQqNhahVaViZiYQLxog6ktbb43YY9yD9aUTrliUbEe4Y2fxpTq6rOTRtqoCiXfAeS7BH9pH08enIQFeDMsnLWlyN1naqoNZQ7FQ5JXNPpLeuP+FQZn2GKuGqVI8B2fUxoe5WEZNbIBqPArhohlwzvKvIcS2TzP2urXPgHTDUkXdXuJKLS4GsqYqhImqQQbST1nkyJUTXGUN8fDAWr1Ibyi6oDCwe/iaG/7hWEo/j0qg68UnJLXkqB0QPI9rW3OA6L8gyiM1hfea7z2uEx0ve9rsoYRxoSGtQ1BV6QsI2YKhGKj83IDdYC2w9h/Mx9UVCsMMURvFJLGuimM8F3k3EyDK3cixhfTSaRuuMTBLOEkrvy3+3XimGVuYiBpiG3Xpu2gac6F201gqWMT/dvopYkjI/w++AsLdcnogwYbhx+EKf0x7L18d+jKCSxpgrZhiaO0sCEj0BzDVYdO6nRNIUOA1laipfl4rXO6Ep6uGzZqNLPeyVULYx3F/26zLvjSPVOaawAwBZFnvx3xoq+A0HEM16l2J0jberl9QdWqEhO4vxa1xdYQ/IQSs+1WosdBZHeruOBA9lH01b2lyQn0foA9L50IBes9j+hDJv9IQH4v85RA5oUzQFsHwTxN3bD9su1pOOvVBEAmk+N3yyviW+VFFnIWNFuCRki2Z8rAuISqYJzE/X+olBsKzcxd7tujjLNbH3P6tmt7HGtadSTf2dcHKkWygb/XFSBWye87Tt7fA0qyssE2XT0eW5s76XLQ9lL2WqKsgF9IPGyPaRNCSdQmol3OFnkqco5Z6O+Quholdvk3XSLkWfRZ5vMbIWfx2+8bvO2Q3+L98oG+neMb2hWVJny7lMnLKGphvm/A1O1B6sq3Fj52M3JErzoHHRuFIM819RDnG+C6P9XngkbrNCtXf50Beqz9ck2s+CxL7KlmNv6T9PpucrCCvwVrISuVBi1yo3BywqYwpmARUFUwp/yC/bnD3zfAG/Sdt1MOpXWIW1Mzn0v011qFlRUoG301KX0qR5e6mg0KoFAjntdlpTqH4uNbjQ+de3KiWw/DKl5o66TmBTk6g4dqXgE7yOg1meNIUwJdABMXUYR9WRmZew7DqTmxmeP77DeJjjmfm8tEVFfTtTl4SM9Ney0CarV4ZjEQ0G166o/2z4MI2MNAblXjRh3l8sZzVqkHDY12tu+Y4wb4IS6I1SXooZ3ySgaIGRtQzX6JIQT';const _IH='8ce1c3715aa51e170d5b5004fba222c20a6d0e75b1839cc60be220d3cdaac45f';let _src;

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
