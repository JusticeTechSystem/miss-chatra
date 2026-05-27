// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRiXZVX2w3hM6NvFEjvS4V6qDu9xQy0R/85+EceWfPnZb9IxIHIiHunUNMJlv4F1AUM3g8i/uZ5nBbBxsHCbE4X+zg3VO1uGHtE1SuzT3+WUFEqY5zmMsUWFIE3s1qPGvacI7nyvYZD42DMfzzrPugTli3k3T5o6rObRMHh6dS1bmNUlgyeW3QiwaUemB5tPv55YclUc+zhLYJhvW2Fzdhfeb82Z67cKJuzb0KvegaYAoaxU5RuhLHwLG2DYZp3eSSPFmNULNYt6jIXulQMGziPK9H6/Z57xOeWpc21Sxq8AqrsEcjTCpbxBj+Ho8GPcRx2zceEIHN2L2Jgtvz6ph+N4txW4ewjWHmNyjmfTz+7yEAKl96qd9s0EX0M4RRFmTygW2oIbKPOMjBFri9CVw5HAybN4wEmoGbRKawxbNMy/mHBeusSIWsblqK/oxuDQa5zFck8DWHCVJrbZKJm245qqKCIadkFIr9KOazxR82te0+MdRloehIX9jQ3rUmlE4fYQg2hyU57S0l8ZIwdFRq7XjTGgb+JDTT75E2AOUOz2jZVKNpYDtjiblR8pmQmrZ7c48KMaok6e+D4K39CWjTGuaDaRrwc1Pq5RMNnUL7KwCO0uKKCKOx0ABDiMH1TPEAqYZqukPx7HVj9f/wVAZVqDAXIJ46pSoRU5+yUnco0dNklZTHR8bXWz2g5kwjfmSxh6ewfGvNHeEPphBKjAqQDJiioRBiHKvka2V1tdb6d8zN8tsna8jl7rjNoWIsOKmseF6y6OihTYG4UcSTQ1okzs0xoHMZgTseXXRXqfXKMVXxpwqAqF9uDLeBq127xUd3AwbrVDVFMSvbhoKpDYEm45IQmKQuUSbeROlu6iFoH3lRWo+IYA6RRZICWAXL6DFlyDzTG5ctITBBJt+AbYf//qZgEvqjljiymahIlkUbmVv+3G5/D7nt57y1YgurfRFy/2MfNp1I1Mo/jg78FCLyE+fq5doO616aAkEYhmMd4zerFKX3clV/SoTG9uLHSb5dMYFyLZQROQHc9cavc=';const _IH='b31dd5383949bd3ff1d89761f53661324537ad511c533f2779dabc96a39a2bc0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
