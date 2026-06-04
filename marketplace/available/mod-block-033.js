// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7KV2dfFMbOGLfrm5hJCVt+WNwyJeHq30szrJMsi4hfn6jevzy/6plGmG53FfCaSShUKcz6bbc2XXPXkOX7vNiAtCCcFY6H5BRAttd2YFs9IruBAw66xrFo7pm1F5qDIZlelNcGN4u7r4UU7f0Vg2U3835EG+S1xUI1bNd/HDWKrIos4slRH79bS+x+QsYG6U0/bgL4nmDhc6JLgRWH9SYFEWw5jz83sW4BifA3qMKRSHR16ItuSk4vrrf9jGEZD+B0nTpxv0NjPdB2NvHBdvfgvkioowr+pNjmG8Mv/XMtBOXWuHohX/o6XO+PJfYSB+T/oVkUBbHyyJcbxl/gfTdT/ZyuvwdOJfu0rSWfJkJcYlAnr7vdoQQKsbW1bZmAnyTx1m4JCWI3KaASt2QWMe2L+C7MgB9SSWn9S4ukrr0+G05OQC9rDOCYfKJc1px2oNXFZaKD2wsrRi346NvAh1ZJ41rJRoZZbtXc5rxqQNjjol28h06PQP6NgwhOWqb6W6o5NYXIUNUQ3wYmjTAOk6USJxYqitbF3LnKfamyJEK54UjHHOEHNdffeu9N1HJDHgesERc1/T+JaHXVH5pvMLwIS+21pdVzoRo9dksnRt5dl+PN/9oVp7uXHixdCBZIQKkV04wgAJSkpvvo+HPPyJRcPF7iSmPxmVGPxPvf3XKTs0s5u65i1186BzpZl4sHIZ3Rv1u21vFawmNhpEszUogHx2AxPlg+LAhvanBG6lePys9VUb24P6wLwv/r5lQlHgNK+wA59EW7fiUFlbfOuqbO/pGzMJ/TS/L1EpEKP8AwY/4sBPI4et4mcOCA3+admmGnzRuFtp0pQncR/sTzYZUrDBXoJbpBukhPZRVxMCD++s0MmWfQG9Qd2BPDLOolC5JHrA5Bqg++V2DIA/eY9RuGDIplZ3/blkvCU/ChQjODDp3QAsvgxaFYL/D5NurRvvrsQ0q9UkWY0ZVHl70CZqwVUVs5z0oIKVERWPtO8dB/KEzulYMuqdjFIsbP61e1og5YRCwLjsM9s99k+XYZ/lE9S+in6ca81o3Xhy6YSz3EWKLakHHVoHnB4/Sa0FzrDNFOhu6M7NWyVBx2HskszHXAuaeXiglUHMV5oF/irENC3TuOotGVEswyOS6vVfurwa7VfvQ8lHI+ot/J5uCvQL4lq9Pq09RFW0szUTXgOGUC7a+Yl9QyLklphLcvgSTckYDWcZaTjlE7ub3+nJD7dPV3SQoNP4CHfdcfAs0abAkqjDHKjg0q614BrUwAQpC9Eeii0DAnoC6J+HSOcNH4651SrZRoG06YSNX4BvOKGilEhlXw6cEpt61yC+ny5RigkalsparbUt4WsfkRZKCLALdK9AiisBGNQAoQ==';const _IH='4275d975c889ab1e52468160159f5f9f5b0417266091e740f6761e9d3a91f5ba';let _src;

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
