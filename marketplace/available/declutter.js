// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+rrwCZ8qmMe/D87V3wUs4NKrD5tNVjIIM7G8xNDO56KYdOMfaD4SLZ05Y8ZY7LT7AZcu4+3pPxYaes/QQ9MfmLWunvEeAR4axCUYNN8COZM9RuolvEjpExT18AgHOqJS9GpGPN/muUzV4vM+JB078L5Zo+uYEv4sHRcKXeXGh8sis8kfw8JMBzp95r8N2ctjWVShIthvT3mNPrc4oWESO6yEf3VSQFgJDHnswDe4ZXcHpMUd/0V5eB7B6qRIRcKefD78Yeyd8vEWkrdsN9KbVgkutS40cTMdWvgD8TvOQV8EqRmm365McpZE4a2JBfyLjsBrUQKJsdGf838SB0LWgxmakjV7wuBCU67HIn477qpF5NdSNQpe26uJzyxFiE5o8ej28wZ59WmLUk5YLJ/RLe1gDCxFymD461mTgetWcPTFF5pCqdezZ/NC2rB6jWjn01HlPHez0W3WS7/i8IhxA8rCYqZVhVdUbja5vqLXxlhARTrGharvilWsLCv15h9NM5f/ShO850LwfHM8s+O651cn8UcYEmB+wFYqhn8CXdvJpkX48z72dJD0wVKZwMvD/Iu4mxe5xDh2Gy8LdMIkBn2bMYG3Erhpal/hRxKQGmawEYGAoMIusxVc2zs9QgR2yCoxXsBWTHB6EbSFycnfc/EufN5iIfu676xWHvbB6cFtxUNJ89+i77BaFbeXHiOMjwbANpLQgCwDP8CaQXzEKxYwvh8IGZL1e3fmDbqZ9ghNWpGvD2FUfr4XgPVAq1eb/ighyzmLZtAVvR+HWv4EVFZ2sMPIsy9n/N8pG6RT0EsWL7ovV5Xb9H8ULhEeeCd3cd8pyPSPRJalJSMiyq5EQJr5gbk3UKwt1670H/wc+ZVQADEiX+6BUUSDPYCEZaCT00DGTE8gLfxpFevlyncBlpsQlA53z1r7uhLhqdEOjLF2F0IUUmEnzRuEHWx3g+0slLk3wOwlEPT+6M5u8crIrSyMNrPv9UZShQXGH9Ljhf7uHDwhSh+mgv+6chCHB6i3ebfJymT4HxUKZ2nxJXqSqn46R+/9mASqKm5CqdtoxlyhVJw36bk15pVHT3tKx2RViBmGc0+ZqEPslMuqhLZeRG3GEqXmV+70gkEze8LRurJanNgeGayPiQdNl2HRfScR39XJF6M5f4uDLXWao0A62eEXzWXpiHR8kHrSGsKyoxS93pFBqpgbyNrDqPH/7kDI0iVxERSy8U=';const _IH='8ffc37f1c03bcaaa601ea2003d148782d96b0d622d449f560e888bb87577589d';let _src;

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
