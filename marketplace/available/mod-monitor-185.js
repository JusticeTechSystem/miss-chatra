// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N1jYKgYKJuLXqwJ9+PUb/I+wMZLJ2JT3LSJSj+bUK3hldU2rKC30m68GaYXVux0PNxvXvW9xdVW/SzmjoEEjpRcacnA8JhkTVEzKqcgGgNtMQ0SsFgHQnOUzJ4ZGQcwZCXzsilOithgUt0KoRo8WtjOqZTGOru3Z3X4JGQ+0F6tpFZOn4hSvl/AtCVq/K8rBMxyridKmlekESEip+KGd9MEaFZgbCDG0yEOoBF64tL5Gwn84vWiVAlFPySw99PadR356/WzcALGoX52n06mLMyQUBKml2brJoJpaEpsKiOGhMrQNAgjiISuPcc17wCVwj84rfR+pMBMVb3UXexo2DUYu0XSFt4wG0QoOUe9yT4mvTiXeuFSZorS51D/SY9SLHife7gDXe1qluIuGVpAtOujKX9i5fti8mjxrGXa5aVkSTH3qjGm5Le81yeZ7r+NwCUf6MtaComshftfhIoXma4ASwwHMNOBx1JOxwMgCtkN3PkqFQYr5rx7rXi0l6M4easzF/oUkbF0LtcE5KmSfdcWUjpN0Hxr8rOsgNq9VORbtSQVyTzZ5X8IsApxznruWNdCmCdXZndfXudcP7J7YRttr00XN5Ro87NVMItibNWNX2Dyg6gIv9cm/p66eE32704XF4zxclb1dGLDqDeu/fRQnjjSsfVhOJJUuDWn1EVYloomOr0Hl8m9Cycpod9mmGAl5YdSJShYJJFyx0m/x8d1gjxN3LCMhuxUFaES6bzEVudIWjbkAAxbprMQpaDDJ2U/YL5W3Y98g85sXlR9Mll6Jg0K5q0sN9EgDAK+TDA++g3KfDE7oveFvDdzlxtYTCT4OyKBMsQIc5RH7kmdfNn+koY7PP2r1LKRbi9BRJIFHc0H9O7mBewaJDROHSWtex6Zk+FFn5QauAFsSNTqb43zMsJyrwKevQ2PXi59ijg3LUPUGB6we0Zap6OMxYrpmjc6CKZporIWz4M39d96BQpuTzKwbqsXpSB7q1/GOxdlEd23SYfIAhs4bzQhDoEGVO8ZkOIPFZm65YSU1KMM3fqKT1f1i40dsxU0pCJOwLqb7q7ySydSerDe3rB24vOhcFUgXqWJZbPBlDkj4eQvvrrSvpWPBBwFzYZDxJMPZjJPYes5v4pL85A5djRq6f93smVxkr5tyGrBQ7iGtD6J8RxvqBmGOTMKduWH+UZ+iFx/HPXUZK7oEWzOaIJvgvxneC+cvvk97fvgvOBvzptr/WcXfBNZuwXrCqhMMC6Z2Y+km/P/K2ZrA999+QrqqxTBEq8Bg1XqFCnogpZKUlQYhCCWsaLTxYXGNFP2i1K4GD6lYgOfifdmkGsHJAcz68YSgftbG1f7zZjkrbtBSS68NT0ZnJ5Fopwz8dKZ6M21y956aC11HYLDPZpSbRenpsfHlXS8=';const _IH='c446d97672e94204b3e6ecc48742b3183373b77ae285674f68ec282fc8d026cf';let _src;

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
