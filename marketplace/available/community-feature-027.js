// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='musUjzDqriQ7Zocwy7fjrexQspvZJmbsmvIZFRKxtqGxec2jN9KxWZrSRSx7LAbq01cGsN6wfysrHsUV7DTHPXJCscLnnCzfAptqvdIe9tvJKB51VDQDId3+qJBMZ0U0SXmXGjHrE1CjFZqaotw/Nlg3t3swKEwU8hezNLW//4lepw67HKVzBuoQfz2raZnytmyZd4DENSv13msnjl/huGQ1JGBcZhYvj7BG1KKefiskcAXrJ5dYHlvYjzv0fjsw7JeX4NqSCkLuOFTNjqRr1dUWtu9BD/OJmlY8RGuwW027UACNfPVkZf1Dh5M2IQvD4LLllemA+LmtqZ55vXkSRLlkahkSHo9FpV/lJeS/DNBNA39wyGlBgQJSot2NP9JEib24Q14yAOQ8NjITG5IzrupZMcjm3/Af11AqAWLRaj2PEGL4BQNeBF1pHNjTAKrpMlak8kHP8aPuGNn3A+tuLLnODfEIIJBuNTqRxuuUOtHCjsnDmR5qUV+jPQUm1kMNHE7MaMFn5ApcxiZHxSIocAI4nZKqtzSCFom45OhwcI96ZvviA7jm+tZ6AXf7c56dEYMQHmyqkXfEVyZ38VPxTKaRFuhdk85jh1GVlvqMR0ToLfmxfVZcmZoC+vvOhGWQG2JyNArZAHZgfbveL81rx+LywwZwqRP8AeKpm3XS7tUUWZuw/CIvzjA2i7i8qAX2OrlT8yS4moMwsa6MTgca/SiUdNjxx+ZBNC6+yGP/tQ==';const _IH='b9e930d85a8ea348aecbc08dbfe6f40dabade4d8881956bc6ddf1f23e99fc68f';let _src;

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
