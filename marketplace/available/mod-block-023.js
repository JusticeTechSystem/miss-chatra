// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aBwzdl9Gsk6ecZnjSZss+tFSExdqJTPb8yYr/PV/WtSWxn5qPRw7yVJCdq/sSjOAB7KDd6x+pKXnRWrtO9CfAvnZnZQZZrmv86AtArt4cAQ1S5iStAH/KhfB04UblBR8nVfC4dEVDHwiRGLb+wfxd+rSfzT+CuANVC4IGh4cWB4RJFWqBRnjE+/lDBGZWDFrHklpbnLMzmtzDP24ADxRsZYKSjNrJBwQKDTgoSyzz41u52QhGtr4/199Y0PNNRUx4viGDOGf7BRF2e0f2szTGYlpEbCav23oZebcThEJE2NoSnYFCm/gQbNROLy5ggTYRgI2ju7LJBfl9V3mSl80uPCKQ17xjL+I0GSVQMHDADLImWGfFrvh702cRrElPunKYNdSjXu6e10ZMEByaA+1hf/spzHXj5IbbrfbTNmp9sSwVPostNKVtScXrfN1EydNeHYEWgbbNsZv+Cj6Yjyh9VRjxhcv8ZoitlavU+5dQDkRspzE4Kj5h/ErP9UJQKB71Z4YnIl8e8ld76pyhH9aeedUbdDuGLm2xb/QPkLTyo8Z986gaia4mgEVbNrSYzp50DxhW2BC3HIbKzXzSVRPZWI9LA90lFZqga0J+1Q1EoexU/EDmh2ry58eeo3wuHQuMqyV0a25v6ive3bNFVU9Xlq12cyMiwMurn+Ds/i8liBlCwhcw7vbe6ZC1sHA8lalIRAZk4cA1Izu8lK1wRAb9SwNmwF07zLztYR0/PdPJl4tVSCxmKlyb9wWrqPd4OTAbhAe8ulyJdL0uoHV1Zy6hMNgd9jR+vKkVSNJkGQcNfsIyry0OyTJZsuKPRnABF4gmu0Iz/YezlKYzxNC5Xj6grSE9xO90itXpILytkTsxyPQzYdFhs/z3ltShd25nOQjPgIFCcenCrlhQnolgLyMW2A8TKMJij4YduzQubVmcYUv9oywPwRdQKLhZt67LQj/PswlRauwe5d67JzPwPzguhk7SGEGrftgqT3TAk+CE2hQNwjZMZDtDjjQf4xM030HFeplyoZLxsqPjetra+/DQ0KMSJ5YfBdOnUmthhS8RboNx12xWF0bEwV0aow6SYPsr53Ul2Jbx7e3z2y9r8NCI+8t0KDN5lvLZ/xFBut0gPTQ8cbr3I6E/sX6oqv+L1VefzFf4wKERK8u4N41J5fDC2syPnQT7WBKUI22cyEqHHzitD2+XOI+bEhslEiHQhnSsiF7UKkD6YGLR7nH/Y8m31VcKpQA9mAvAD67eoSN8QOkzmLydYql0ear2c158zlU7ost1Jydw9QJtDZBvlw1KWVDHOs8RJ45InciY1EdWGsVDXezKxAnOQejSPszc+D4Pnvsji5oHM5z/5ArdIDBiplLopQC5S2NqQ==';const _IH='3963853310fa626fd1fd658d8191eca89783c5cd492c3f18296dd5832fe3625a';let _src;

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
