// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0Zqt6IKllEsM6OF1wXs7Eq0agnH+RiQ+CwLFyI4ZIX1fCW9ldfkx3FdZp8l1Qo7Qwb/8ai/+VSFXVyneD8knw6dc5xQcU56yPj7KgC0K/wXIr7X58MhGZNWbKvrrB6x5ETgvivJ1+pt+T2zMW9+ZLDkQOxPfrBExfPuC4z98TZiDgr3X9WgkUVj6hVpHSF+AbZllIwGopq+tdYfIIPeV5tVfMo/bHQhwoBLtZ6AhK6FV1rW+ORlpXU0IBmS38yMboFaMrdM4NVYr7w8hvgocqBEHNdGXQ9b8sl6zEJlMPPIc7jb+/uf/rrrdtxwJbb3SEZzi1A+GeifwXg3dezlVFsu8ljGcfY4irP7hY6/ePtC8zLNcx8HY5yw2nt7xnLHUOgfsoJt8acpboyW15cqojwe7/9gXyqUbjbgTtJMCxNReE9uu00VsHdKOmDG7cmiwITAyaiQ6GjuIg6PpQiAUEptbIyHgQ31ngBNZb+hZz9vvCqZjv4F8aJdZ+ohbw7DN0h4dUcQP2yP6Dx2YgTKPlUpKOU0RSsM1rqjm39MF/DjUq7bI9bC1SC/Yg8Pz3sg0PwRQG30rwnSutaJUXjjHk3IZXoU2gF2n+CNFDWOXtbRwl8GBvqnDBp+Cj4u7iSbWo7XhE0aY+LLHVhG85sKbt3aPcPF/SGYzMKGK1ft2soxqyx06WtIECQ3s/aPZKXU6/RCunKY1NACKMc0TEJ0otg7oK/+';const _IH='b3daebb45ca825dc3d7d7fad0a01b93087a94a2e04804131ca619e876cf84613';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
