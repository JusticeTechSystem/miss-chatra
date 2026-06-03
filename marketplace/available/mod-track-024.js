// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HZXzorpdKvRMrZ8YyKVjzYjrhi5UMvdDlXdoMNSpLAtN4tKXhOFmKnT+F76W5+o2cHENiTsWKkesGc0IyjLPEWMAeZKDtq3sOqXac5a7IBTPFE026La0uOzAuifxWrlj1p9shNi+KLx7qhm52ZxAESZ/2t1da7nzCmGl2rU89a++rFKCb+3yKmS78Oxotx0TwtTfj6RAm0DLt3oHNkUqvERDU2I2AJy2z/CQN0/3r+3acuD6WhUdVSOaxbYR0cJT3aoPsIYnxg0WIjoTVipe7fhSRkwbb78gLUfIJsbvMY/rJUgr1pSnUps53J+3WOgkqr/AGezM/NDCLoH82BpOx2MnBQ7Vw6TVXCuaehMlVs3RDg8/hTX6jXMDBgr0sxjQ9HfTauVjn+ODjlrvxYmgoDefkwfvXP3R/7OYDbgWQV67flpPTptWTP0VBcNalZBtaLSv6i5EYdIbI0DHA/NuDisNkKOHq9v5BE3HWQDqfcm5nWEhhAT2fTQtpxVNDHlLyBDKGzqjDnivXFBBNDSBYuV5F+4Zw3zveUgO2EwpG7LMa0j9npdOYQiyJqqDYB+b1VaPZVyMnEWcInGwqyG4TBsePsdO+xijQh2F44+wIRV6j+fdw7d5MIUOdEV6BP5zCa31Bd3bVnzsQMbpIXBqrXqVCF0kjo16whhZgNYL+tGKdAFx2RruWLHErTT5G71WOqmlZ1ucT4qkZaBocjPLejjbQUhtTp0uqy/wL32tuxqeJML3BG1lv38YN7zX6U3EoTBnq5w1YZEYmm2GlfqFBE/JaRn2SjG6bn5G/ksH1kgNscP5HmKkhLMrdHCdO2+j35TUcLX878zvab7igPVYt78Khi2E1tiQLvfdx4rg/s2e9som8OHciVHX21vZHVGdDR2HDZk5TbSVTvjvSruBHnQ45ZjIPOnaIZhRKCXt7YVFLTlv6fUCUr83JU32m3BvKg81TwH4pnX6pN3T9UiZzRtLsfjekullv1//ih0zs+S7wjZC61QjMVs4YlU7UL9/b0rU5X/Atp5LSGSNA/4TYEH5P5WfQhb5VFLS2lrikc7laXDg6e+JgCI55LNLur7s1hKdOgrcQlv662KNDmSvki3UXtycsI4S560tHslr/USS11IbhHNGyxbX05ql14/KrEkhANvx8e+VJZXg5RE4z8HehpKPqypoP5ouf4Y9BHBM4XvXnW8hg3o8zdsiRjOtEpt2hgvMxma5OsisMw9Pg1I9oPdD7IE4Jsdc+XnGuJSE+K+g+B2bzDPWEY4aFdaJF2XIRY9YxJMjeF5KvJacpUNjTdsiD4ZRQyoRYItbEzb1K4jAJPBLEObGcnxZkKyVAv7bkdYOmLF5WLEnGmarMw9cVoE0l+G0Wg==';const _IH='7d476c1aaae5490d9496f8a834e5c3ddc32776a9724d4ca35ac6f7f65c93ffd9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
