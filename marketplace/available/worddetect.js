// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JY0qetMiMfzMeGDPYevINqeXP3hf8tUiHSgC2P1feX+Dy54OiN5WPCQ2dMO5WZreYLhRBdemeA8RYrukTFtl9AAnFjWUMHDDAmjQFn0his6q1ZPioglIjI5Q/QH5B7Y9B3uJ/d/C96YmMES7D3GQbdwPWoxqswy+8Snb2FqHxIOZ70g50tvF2dMJeibV2U0OF7+1gg1QOcGdKNeAH6pYPGd7aeKhc115qlVTGIA/7MvIfRCIhVPAsT9gyhwD4mT573+io2QIed/NhlsPrNR7D3OrvyqbXMv8gNpNUK0p5uwYR7t7FJjMORJ8oYG2neHFW5t66iLIlLp8ZrxZlQFNw4bdV3R+beQlhv+wZWHK1iXkHAUjPsrabaAUJAUWJhbovVv5kpczODmAZrEXenYQ4ZYWgHYIqUJtVNRe59tX9gzgbdYYt+99m86jatywAt6YLOtvZ7JCbuIdVgF6dqIbAkr5it5BPy7sR/uRhrpxS+I0zYIHI5wjj/bqTafznWlbHc8OCzyrFeLHk2/gSNzcxZD+pun6iuhSm9W1OcJwNeayL/pnqhVei3xaBhggnP9H7ZcYHJB+PhdIfim2LREKT3krtP+wMvhSeqqZ9JA7Hl7Fqf8dJB+acqO15wS+cIua7/d0DVnoy94a5zRkRe5AaQu5fH+59MvW3k/y3z6oIYUK4ADFjw+PA8BpL8mqXf5x6IGHtBoZOzEpkDdd+1uq9Y1CNDlrDcCv1/6TE3GPKnFG3yIokCke9eCV+B3e/Cssp1r05zji7TJnGJ66zJd83AYydAMgmmaZ/sjsOv891mhgoujImfuKejcS7xlKGxxnpqOYd65br9TS5Vpmleu6nITOTLarY7b96FJovNOYA6dyv6xHVhmgJ7dSU1BeKxsDeQ5svLPTBA93ReU6FygrfM42+OBinrpKmMUatj2E7cCAyyGkaUzY4C2vUjatb9/+Y6Vt3O6ROCFKP1nKmXLC1zf1WjPXf8qcoG90vUnWvQ/Mcc9u9Is9ff5nRVjcQXyQ914CoEf6kw4lSxR0E0I+d4U7Rfa06NRdOveeeU5q9WNTqi6kRol3t5B7CAiyulx8wK/DzGPLzlmxubCwBCNcId8nM/hkhBuqioMScP/oy4Uffcez/23ZyGqsQlKxn35FArUVInNNEK82W3EcUhCFTTDy6psPAXUaVlVlzhZKHEzUNd89utYXABD15YDt79fv';const _IH='aa096eaa2c2826b4fbdfaae5ddc2fc9f4ef40d21215bae7d1fafdf7734e7d53f';let _src;

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
