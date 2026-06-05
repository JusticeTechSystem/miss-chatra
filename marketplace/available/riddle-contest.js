// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q4sw5szngjG3LpYY/oNOCte6rJhx7Xq7o6ggBfriyFIRK2ZdKTXm7vwPvLijZAw9j9HNRLyKo62IISQLP/3JtG6+4m1eIS7eTAldrS1Ww+c+dVA5I/mvtAv3aaK3VAHiSaYstIH+RPkSF1zaeqPhBdXMpHhPJSk1iWSerT0oHhpMVGJI386PiHWmivO4mrjDy1V9qu2IjVlpPSWhBLgrrmjGxadVm202eMvLzVhZOhWEVg/eNDi7KmIeJWOgY1EpTCpeOjAy+rVC6RF8xBWNfrNknLrzYVYhtqWO98RErKhu0OtsSpIXOZ4+05bq4TpqwvtqQsTJ+xEouS1p5dZ4QyybixS3de7iJ9IEgQ+Ur0Ma88ImPaaTssY/+SWhghRknYwgnMD05CubAUhEC850BLZ2ylZC22OrQ0TVhRlq8XnyIO+HPLJJAA2m5HOgSP2hNqnszqP6tK67PAvWgSvdN+n6M+sXZNONWU2pHCPFVVe2p1m3srR8ht5nMEnaILnRfR6GRT/pv22Pu2c4l3qxwVeG0x/hMxRRhmQhKOUNH2ruIVgQlFQuFyBko+6YSVRvTkFqpQ0kjRHJD9bbkOd7/gNxrutBRQ0SVMA9/8kCMvs1w+nWY35V0iaOzu8yU54TngMKxn7EYGhD12XkS37wmhAdWnLxsJwnrWU7YGza2wW3S4W1A3s7I1CJG2kemnRjK9T8+blRSW6ChfhFhyq3I7jhUHrqAkDjBIu6WmCVDLuNvM9EOcxqNE1ANJ6ATYobBCqRRHfNcndF8nHj4Cldxdbm9sWPCSz4LLPa753xYeDYMtegyuR2VWP9zKNNTY0JCMlBNODPy9eW0CxfqlLiKUgsqmGCrkVG1OvQ902KocjptSUod+cs/Up1oSQwzxrTNxZ7neMMzxI192xLptaeOyQTMvAZzjQOWdDFk7nRMGfc65KoZuu6389Ne6NfHHv8lS/CGHOiWEkui9+TEKl/wddj/WmAWDb6afjk5O1+quJcblVyMgPnGIR8FLAWJohB2TWEJCtuz9pMAareCqGPSNI3QelnuvC0HfyloW3FTYEn2EHgaQ2JsKgu8AZFziuuk+nyVazuNO6N2WZYAoEVKLTNOcRbMH65RHyEPC7B1NGT/jZxGakmr+RHgIjHBOwgS+909kKaMePOjsutyGfRZxnE7dQQu2cQYncgstS3z7DqUvIBP9WvkEOlVsXYo0B0Wc1RLkHG+qm9+Qlmpmscr7Mh/hMQO/oY7abwNxo0IXxFCe5g29meoKwH4VBA2pB8hT7qnfXjIZ+xi6KDtWpRQzJ3inRi1G4v2fUN+PQcI65cLsXCiuxiXttaMUHb9B2VqQCWpqWIdKhebZtL0esLa+OSaAoNSorUjDljcdBNKJLuIJwhslS+V6VrA4+ancxRpPR/FlTDmS5/kSsKVHKqfKeGcbwLERXrGdfdY+rBXjoKPEYLdV78yp6QczZ/iHFHq8A+QvBaGjyWziV+vhpFk8Hb0od0O9epGXmZEX3qKXNT4Inbew2NRSr2wDFkfe+n2NioyXzKommfmVr9/qkAN8iMGVSQWSswVOTzR5oy3C8Wg+3CmPRjUaLkx2UJlJ13ka5DdhtxThSNEnbTlbFAYGHKBeIWtf1pDbG8jyog5kGXG9ojbXlbmPg6Ul1p2Fj248qq9M2/mZ27q84AN2QQpUsQtstcSETY+FjE3F8HRf4RR3y6akH5RG0gns4K8G1e7HGDBPlg4hOuKJ48NEZnF/CPd4ne0YRqbbXq977JCdPoEVF+Lpu/ese0ZedFPPk9nL/j2Z3Ja7czxZmsXnLW+Ub4GZGqYO5gi1lC828n4rppgnb781vPDoCIyn/EHPg3wIxyAxKUdA==';const _IH='6ca7874b98eb35d3cfd4b6fba1a1c88a7d55bedeaa47bb72164e6021b2632d32';let _src;

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
