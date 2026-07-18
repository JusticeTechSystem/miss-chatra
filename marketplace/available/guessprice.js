// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC9KMgwmELmFfpzty27oElUPlD7gc3Q2rkE8GpVuaspY5LdnzjtYUpHPUanU5l2nQcabCIluDegPp0XqAcXwl+xY1l45KTBM5mMV2h+FkX2SmlHKvsz0W24TCIokP3d55rU/D2y0hXHvjAH5dd3QsORh/MQWqJTWM/bqT5cy81565wnSvrLfRW3qP7qPmQM/MGC2XJGxcLNerW9q0ZdLu9elHa9JuLEb2D+OlT0XeolmdRYHCvkxpOQ267XTCOUXSgYxbkV36n55nkNA6E+MF7ifjFaXgP1QWkCOMpDz97L9o1ct0SaFNdVS9gSkaI6a78rei2iPhJh3Tms8m/VvkeO5bVYKKVhlgvLAoZi+cH0Jv3PYDb9kgjSm3iRbikxFj1SadBpjciskkOL06oWyvNvtWwOgw0FUYj+Tay3YXYSjoqIa0aMZjNIGf4XXYAxSp+P9Cf+VX9/UpRtd4Y/pUkpFv2XAPSB6JABu1T6oTmhOBTYiFAf5/OZykvWamz+EiKyg3FE1IDrcj2fCK4t3DoPlUOdeMtl+4/h523EJHjdSu+96IhyRtUo+atNoTGaR9WEqx3X1hAklfbUJRQ9Zgq1XwrlMwE20aX5v6TLxP6kAhM4aJCWcefAcf4Tpzq3HHU68LcaVrxJMcwmqW32M1Fd6wOCxjiOg7AxAIVpinslXQw9b8DQULJDYO2l3t4AaIE2l5b8NxCstw9lgw78MLFnEoWHvybEL6qqOMkeI5qvD2zxiUAlIyRJ2tRX9PYyHtoewuOqQi+o1hA0SsL5gHF4MZTykesRLSSLealdXWqVrUalguiubXMCTP2X8DgJhbLcNqEsRNoCR9YCTELMG+B/alb0BFnQio1ieO6pb30vB66BvM8xMuRAI/zpIWCDfU+7U+B76/E6YC8MFGj//NKtBGrdwc7D3Iu1waskZXaVRk8STQ+SiA9+ZuvUcLsuWoISg12o2ty7BoBt3IoxPOvkqUzQkUoaeZMgDSbNJQxKSx5/1pOHkCNs84CtJZ8Q3kCjmzyXtz0LyZBej7M4YTTtUXDB8lPUbIp3Ln+zuAB5aEub2k1YkPpq+y7Snm3eii/NQkHkwybsVbZY8R10cmnqf7AjGdXxdZYiFdo+R1ney8IRRu8Qbixkoq+UPF8uw5cS6tcz6oRJAtpHoAJMZHf4lrm31tBdqym/J8rxTRmMPJSHGLrCIM/Z8Nbe7IZbmR/GU0X1c0=';const _IH='38127e33a5123e2438992b0fc2857ef616947e12e0f82df8599009b7293a06ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
