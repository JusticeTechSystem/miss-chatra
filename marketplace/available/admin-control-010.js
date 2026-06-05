// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1dC8YiqBAWnYc9gIxKHhPhC5pt+UOZGbIUQznTOUUTTkjByR954cwEBQo/udKurOqC6+AWCVwJCqsduJQm5OQCqbYsso5UW9y3xIhsibe1EEWzo/n8bBKzq5Pq2sAUrCTYqo14bzNLMwoPXFPkBqRLvVQxyACV0QKTvHuQKKgePvB/A4jtbJVbgZquDVPaDfz3Qbc5f/a0TF7Zfmp45KD66jw2sFuaN+/gbaxO6a/NIPrupW3+9/Jl7LA4mIEi0WDPlbDEw5qLu2v+sp1xGvpetg342M5DaGzf3K7zfqV5pgC1PqSkpjZtlfdtnyn6tOPdTHo7hXtDR5D2NPkIv2o42yTN/ZEuHe7/J7VB1D9Fm+5oi8zK53UEFxjk9obeUmVJiAoEiTKhFOYdLliDtUQglqcwmj8azjP0Ko41l+IFjoU3n3iZqohs/DiLyejgvx4L9T5STHEHS6Bq66SVFY+7mlAFA4Fn0QuaZKGfU+lNxdgtp1lIlZTdB7U5Ra3guXyyAOCP0XfLVDmD6TxddbvlKVDIHQZ6A9NcPkGe2DJQ40tysMJE5VuzV81Ku1b6Dz5u7hrAU1UPxlR8AO/YZTgfLO1akjRJ/aHVfvyHg/T9058oqO6fxvrK5z1Q5od8jZrArpQeFXMUcFlc2qKEB2E/GnS7nroWEVkNSGrFUz71Rjeb4/kWopBgBlJDXzBWMqSyRj//vUgFV5ga/0dsOl42MpLq1y3WHUE1g5dGiobLuzn3lAZD4tQj3LiPCaw1opge6kYm2/po8hH5KTf+1DePgkSzwbz+hSGXjjX1B2WvAOZespsXW9Jwa5KrcqlfUydtVvFHgcf8+bwcThoSRjbQHGqGVtov+YjaZOsLqxzV+56C7O3BI0gNlwWozzIqwSBG3Z1BEEmzWa1a0fR6DYaLcZa9yeSyrvWA7pS9eerdMtxskVldACurb4ECyzqFS13HfNmyZH9v5xN0D1NfBmHkRmqxzPd6xlEUzPUuqVZQ+NF3mPd/rp4aXWnX+qmZxV5D5Meg==';const _IH='ead4318671edb5b2641399676682ab5ff4fc8639a198c3a12d7d9b22be8a7de6';let _src;

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
