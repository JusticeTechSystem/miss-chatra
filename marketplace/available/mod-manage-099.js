// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3nYPed9CoI4xeTiWF2MsJhDUI8B3w69hR/Q9oFshUgK7pXJGOfPuEcmGjaq+fLTTp03wPHdZP/Au6V3L2bDgrFpv9By8jlBGoJzutJv192SqlG5Mbt6wHzIDQPUtNcIIZ0OauYAQ2deKPUIHnP8OcCklK8P4izcOIG4AqHfV2OnNvxkENQSO/YGCqIjnVZWfUUaiUWAHMHfeXC6krKtxdxUpyOyV5VdFbpnvrg+mF+ktt4+riRx+H8SMQt6d5l7ser9fCAUU6+V3lavLnVb6HHSI5OEYLc4Ii/PsR6imkzuIX7nmyDdKx7q3cr2y6rYoUmZWyMcKutZQ1af6hAEdwtGKt36iBIsi1Ea8AW/PFCOa8AKAPlRtMdNjBMrBI70rztP572NvibfmxmOeHFqfVID3laJpDMS9RTVW75GBLqtWssYrVmpXwDozxsc0O6f3huxAlIgKVtrmoJe08IVmUU6j8Oo4bljxuQjzEInjVm/vyZhYsPoqemi2yI/hwnFXcTW5mgHkb4/tD6CayK82FpSt/MKMqMrMGTIePidL1Ac0O5FCJWnW8CbWhkgTV9g/r2Rj8D0b4hNuHtrQESoFSP6bOz/SYVPn7FR1Mw1fZ40DJylrk46OvoN6pS2S9qOiKA2na0HbvnoeXPgwF/yfGKuNmdPf32BBblEfyBZl3g15GUsxXMSgekU8Xn3MTBnb4TbJKxb2SjEi2ciE619iUrkqZKV1ptdnOMgJBsnpFRvOBXm9sINQ9LBIA/PmC6DxZyiFLQvaXegGl4yf14ooXhwfLBkuCsYlx74io9Iew+/AADe+mPxV87qqlvjAuaqUtQg/9B8tyupEN5bTrrtwcAI41M3qxhvimniiR2Ez06LKxicZ0nwQBBlfhzY/QxJw/Wkg3p7reAcJ2YvpSue3HDb31Mnm7/ASdnx0+9OTj525/G1RbaQQ0wlfneq9tR91JzMbi30qKRv0al+tohN9ylouKqVcs0ulbSpmx65lRM9XFQAGCRXlItSWvcYtsQpoDV/0DzVTXaaRFE7hrfNZfQQCOjwvxz2ACRBvI1DNRBv3UmIqz3D0E/FqPqEU+tzmHAc6v+7Dvewp1IMAeT3khZe3UuFhlDR7JnpTp81+tb99TlJ0yzRrBUlFxvnh+mM1qw8EUum48IZ/StKMLCRUsyTNYVS7N2lVxriALLlmXeGuw9ffpLpcmPjtqOX73HpFTA6BqMYhRIJ0SHtvjKcogWvlJn9O4D80aH53hDZlXbV0ahe+y8ankyRCTmGCBNsAy2gfjCdVsuau5ojTkdOJyAz5MytiftM8NDuOff8+z//FZENnfULqsf3pAz/jfzXE0Wap988yScYkvNmnmBtboHdhlEHHYBIcds47k9/LcgYS7Fc=';const _IH='c80b523180a345df69d2ab901bf8516add02f0ce4830d072eac12afe21648b43';let _src;

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
