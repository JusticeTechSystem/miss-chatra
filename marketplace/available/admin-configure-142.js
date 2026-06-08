// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C/4g54HmVepjyqIq39IX8wumkU8zuwXNOVwFHgLDJt860tohyp9MdWL7stihI3rd1qWazjmVzTVcKMV6B7OVkgZuE1tA/jmez3Q7tuZo9TqtMJ5Mkf3B2ZAsQrMR2b2fOUV++ywPRHSwWEPUmsm+QlWkjO7iswvu3dV6h9JukcFZxE+N1k64W9SeijhJceIsvTYoDpbsSOjGTHF17dSXYBFI8NuXc8ZMO12jCTdSVLjijI9seXjM+7c8477Y9QQJ3UoxEEN2xF5cOZFbLvd4fPVNOXvCluLhbyIJYWsShrJD2ayskzmd7sagH5yhBAGUJa28V7c3zmLfE0jA6R4PCqhWwnpqRdoGsXYyUDOOHT5vBpd2EMhqmEYPbMRLSs3PbXGZ2TtuEDXK7jW0wYUBCGp39L3VY/U7wPSAcaEum0Uc3KFlNJ0VNW6WWPkdV4VxGOmBaKuf+EfZpX5M5AVB3bu3S6nXs0uWpXaBQG5Pxmd6RHDCALrCXPpiEZiekKnj7D6HEMyafofcddn4ogUDxEBSc4JdIwLPLvK0yvlvBaQPOAm7XM3HI+vuQvlaU7KghOREAu26a9vF2Tef8Am5H6m7fEdkVdlKF2uxZf7VOFpf85TcU5DnD+1ejS8pIvuztnxIEDVhBsnJ5OVklM45oTLxCibdUU/8HHdPNQVdQ1UGz3scg/wWEBko6Ce69btju9ZhpALN/IaDlj/GZAVmNH6LtUd6TGORLocKSagboYLguZaFx3oZQft8t0O/JPedYqkIC9IAxDA0r+uYUhPPo3ydiAYlqjjMZH3H6188OWWATNBjzqpWeSsWZj8/26NrVJPdhUMpIAW7UUuOYCAxybk8LnM9Mp5z+9I2QEyFBSwvgN/QASW1dSI4wqYy5YJF5Zb44pSNIqma4aDyA0PJmXGIzgYODe2j988SgwLTVjoRzMMklCaHXWpFAlqYaOR5BYSxwHiQvhak46zyTznkrHspfobaHDLAa+NHQxIPJtidWDxKr4eRG/XX5iSfTdL7HNvM1MvQqrMP7x53nNlNdzqZ95ca/A==';const _IH='c250bd3e76cada518f70b5f653dc9a8b1d61b00e09800290f3c91436597b6abb';let _src;

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
