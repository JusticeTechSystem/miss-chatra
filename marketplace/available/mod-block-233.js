// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3uWaaSGa/jhRPxhhGdkqZoZIQGNSn8JcL9teVaf0ZjUwtVE9fEpzUsQ2j8a368AY/YiR3w9V1Qv97qMpy3YGu8XEJXNh+vAmxKlgBVR3X86HAKHMzzL1w1zoKXrhz9liLGTQLKUL4JdHqNeI+4TfLb+3sOi+z+3bt4Zok7nXJp6EGgfA2LLwBOEHqwUqbvQd1y40hRpW4Mcnij9G17vVijv6MVWTXT+eSRF5q2AgmLSXCh4aMgWIcrZVk+x0AcNxyZByRkPhOdRVlp/V+3slaEqqw7QD3SMCqAEIMev6WUacb6/ZsX6yO6WtCkYN4FPAtVUaupyKbt9JVQzhyWJrlEkADNgDF0hKt05/L3S+WxzCW3qiSjPMRtXxGH0M0L4QcYlT4Gf0fAsLtjcah/N2H6pa8Tm37p5arve98Gz/hdoqGyqQ36abS/OzD/Vrqgec4EttVYNFe+KcgPVKwZlE9VAdcpqaZha50+ba6Hio2nkBU8qfVlwtgTs+NVVvpfEAejvD2ZqTjMzCEiHTEseGqfO3eaDFjjzpmCqcIw4kBpwUy5EO9Kn1X5Nzt5b+CDg9DAMuom584Q/4mNRneZRaMp0hSNANAf+fpZixM8YcS7Jk5xnA6bGvSVN2fuJAFldruSHRiqmu1JuRiJN2vCFoUY+d3tzXeUu8drx0gv33tcytASFQtQsCZ88hMdxzULoBdWHQnx/xNMA+hf+n02trdKdX48AoZYrqcGDkZ8H1DWoJR7JlScr4Y9z+rjcgOUdCnRAi42KUdY35G2/+D3/CpHTsWp71Io9IvD1Q/9d+rP5TKmtnKPQhgU+B2aMzjxKaB7CbrvQpG+6NWfUsV7706l9nLM/YeCpDAfivD82IOa5nwksWwclsEEFFV/hJn3L4f3IYuCtM+NEVkTqGNBiWJAr5A297+EF7OPaFgRczeCnJee6LVBIYWzFoX1/2ZRh4EMfEOsXFDw0E/oH5CM0iJseCxyVl787ImsZivwSXYUz7tkZuEciw6A86qv6iCrmBYyoBZf2HKednMAzRWVB5lAsv7jHraRfN0YI+aPAHQP4CPPE6/+YqPVpcMHj5STMLYptO511A0Z43xqnd1kUH+2YFxu79AlRlBYKVGP/R0sCCYg5qDGn9j+U3J8cil+8z5rEcAqAtKkdO9coue9gK36PyEDr8sQh2d4Q94JfoSk+5Eq/AB///UEFJw+z3qVh0e9EXnAd1s4Gz9f6810ZKivG0jZUpolX3nMWp9QR1UDq9z0oMTqk6d/HinBaQdUQC2b4i3NrC6MtI3sE4VdaN/m27pQBpPsiRxTDYZGoK7hYoAok+UEdV6vwg71oDDLpTwE9wGBUsZy0+ogBVK++kZWD3RCOFg5Jjy3z2WmNO';const _IH='d84211ae7d4119533f829ed976af1f0f02b138ac99a39f5ece977ae65e46e427';let _src;

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
