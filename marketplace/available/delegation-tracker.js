// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OuhcOBO/O887F0jWUCTeEL9cdToO/vxwJ0qimARGwQQMAQ3qVG6W+7n+tmkxsFBSUm2/P7AFnWgOfN6XI2jSkEa6jquuveBRYNL+d+1v4G6n+A3nqJMnFYX+hltHI2PzkLWObSOqnBHr85cqTtstcNUwT1mBNhjoIp/upl/jAEbEa9oorXxsZR+vVTOWIXOjiSBlMn2xx2427E4qLZdoG15mf8usE62AeBHIfsC/kIKtGmwLR0BBzYgSm07fvH7dkt6EOF+fKISmntmzikyLWEQjZtIDyIr3za17XAYk5mEFvd7psxhuCwTugvvFxV1FX1e7JObnttu2P08J29xdDalX0JGjYwDaxOxfnZLMM+hgpU7YdPxV6Y1CWkre2Z6OZDgdUraSOCeN4nzrenDH6n3ZSn8y5c6yCR6AZ3hXH+SIma1Gu+Vu1bRtgc7VydFkZW6AcVsieNhG+Ci6NgbQsuVhCy2XE0bZ3jGtutmR7dEC9YqQOnPTbn90bAodG9p/f/14cNQBF0fmrwse6kclU2yuk1KfWU+CCa6iwBJ5RaAxYchm1QVjx7Sp52lzDvvwoKxIUHjU+4OaZszlFfAlHdOWkXCkPKGYFxPxMKl2tS24sF5ow5ArfPeczYgpIVG1yoG57/x7O8gs8NYWJGjvY9KV6FC43B6WnPkn9K0onHt2RNPEEG9fkdxdB/n0MGe4vQRlvSrF56aZimEYpVJkwXpA3fq3diQ9KMG5NMkdjO67GWJoU1lx4ateWrg9/DCyI9q9s8mIVC4krOBsDRgkMv3EtJQ6H3jnUjyhhOkXkMJeSSTuUMwU23hLSJGjHF1bxTIjWiGx7c822lq6eh+nHdypv0dR5itcbG9d4sokoP/bpQD+8aZMQVoTOBx9oyDHawkH5hAtElaCJwVfpVzeQG3kY6xzxE5F/z0RK8O82x/6lF608Q2jgY32XIrz+8ypy4JSf5A7yth7hOhZia+KSLoaENv1pITlCuQDxSqLRP5IRrtrmIS7TgN9xlolY2hMpi/Z+V6r3+vaCuDWfxQRrmD3r40HO66fCXU59miXXqepN82289VeLgCL5U9OWYI+0Bked0JU65KcM8esk63G4n8x2hRmpStDWIayZOB3smToiRZpowKG3FhyfFfA/B8x+bcmEZNHGm3VkG1NtsNmV86uv623f6bBtEs0yIM137rMRjFCcGBk7TI2QHV2QnHkLUN9o1iiMI615OauRVY8P5o05TGC0phKTzbBwBWUlVORn6x8ltTAhFj8lOmJLPh5wallHMnCoNHT9uaq8oVXp/IIMz55o33+kHp7U2UJr2eaR0HegM9tc6kvjJtqaUY8pmvmesTbelVVcJCI+YDSGB3XQDa3DXn7PqUx1o+mBViBGwccRJDoF/GCmqGPHJVQsAvFuJaKttosBJVN3lEU1c5jmf7bI/NADQfTKT534f7SESdO9ieKyQ5vP8TkO36aG2pmgWIhQOGIYblLI4/89CjwHR+c4co6fBWrP45KDfVErRGZqu7lpEoBOQf8x5DFEbAFxN73h1Xg2c5HHy8e81XJc84rlM6btwxpbAbzrxnC9ceLD5TX0tpOYDiUz1qkbvb4fYGYxg1YBaVdN8+xrRjxbBnNeIyC/ak0MUZYkf9l+5bruTvG9XwLru517iQwkrmdYtdGPtlWBM1rbgO2+nebFHbQGtdeWBfcrobWMplcuwb+kq1mjIbbNnYATMkuUh4bhkdh4Nh6pode/lirFRgasOIi9mTzMqT2kvksZF53P1dDxm+5YnUsecLFQc/eoQwPBPQxxaNhyDgsCCIZYTQsk1NOtR5V/u5PhzDmB1y6M/TKSCBmE4vckolax85QIdLOh4wFQ+yJMElK73gg';const _IH='18b4fe4c3835f91bfcab8f92a2fcb16f527a2bc47f4952a1ad3afdf1ae526511';let _src;

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
