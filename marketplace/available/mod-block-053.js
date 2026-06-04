// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FHcAzWOHl3yhS4jTRn60vfYpUJiOh57U8ne8m8p0HxdVLaUJGi2IcVgSOhw558hN90H5pMyX9KVeA+ZqtwEZszZdffWqJqQAwjBBQj186hRwCkc72jtf5YEgnmecN4TvEUH2kybUoaNCccaC4lb4Vpg8oe2ptza5ZMKS35FBeWtORYOXMBTMS0iTqqh/qvvcdVeD+om0ptQcpiSax25dctWCY5QNQ0ZiJtWfVOKl/y8e6sP7v75hh+fBRgh0v9VEjWrbp7ClCuaPloXx8r2/1oeQI2OxjQtkC2cl8eQvHiKRPdXBaMPbuxQ4l/Bb3YSzbnZzvesOGdJnfr9u/rlFWIsBbXw5VwWz5NAZKP1Mpc8sOAUAFm1A1ZljTGF7Av3xpO/QMfrgeIdnXy4Whq8POV1Uq86Xas3K+1HNwT5I6sWHq2N1FfTuB6/rg9VhWOs+3Vyu82/5KZO4Y9NNmvKqaphUOvYs0e1USOwRDlsTMGJzR+7auewop86ij4B8OXlEHQOcKBMIu2YVxnPI7DqHvvonjxiNu8sNTvebyfcrF1iX7uEcISZkmUNz9D5/iw5Re7x2xKxT1cWSC9x/TSExM8HiAY911JwfQLZnZWfONDY2VppzTjrFNTayt2w9ZXWEFvoHVrMhnab3zY/Fhp8ye9c2z2zF4RW8en45MhxLIzQ1ELBRD6afAhzqk7ark5wAUeFHcUHQMZz8nEmTbkoinDMJqpQkLvS1D5e3kTvbJUalfoDLvTeh/2cXAvzCUU/hs27v8SnlVyOVUDyNRzIy2NPcv3IsDdf1mlfYpjTUJTzG0rN5ehc18dmq3uWhl9Ow3fD/VATvU7yTR7ZX5Op8v1scdm8SvNU5/Eg6bnymmgCHJrxTS89kkSfZApoCNJIiSOX8ovXjgCRa3OHJyecsKl/PvmzVlee+f37+KPVcML0qGb1FBz7UnzLATn7oRI1Fx17aFWf0hm0cV8RETQy+5Ou1vEoikjOkdk5amK9F57lu/Lvj7YGbdIErMp/LxtGaICOfYQrcCHGvlfS1hCJGUQ4ms99tgPEJLWUkJuP8jJIctsP+7A9kFlTNTrQxPPJZJEygYibUJrmnzc4o8NezTJHgubjCdPX8nYttbUrHpK976zlQmyif7O/QxmI3iRViUtUWLyjOrJra2+xLco+KE+x0MmYdUjZyGEEdSeKb4V3Tjw++cxjgQSQ2jnvROKV8BkfDOtxiBbfaz6sX3lD8aRS49lbbLkUy1cI5JgBDN2O98JdY7ZhZ4U6+RAoTnUhs45Rovjb4MCU3m2ODU+ZuycXpW0qhQX3tgaciUn5wAy6QXLuycIlNBvV/iw4FZF82y7InDT600678R5LxXt3bmhzvXbAtsTqivw==';const _IH='eafea5e3f8c16a5f14941527fc7cebfaf939d4678ffa8d942ccec2c9bcfb321f';let _src;

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
