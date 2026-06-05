// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MjJIB72M/3fuVcslnlZkfO2ZW640dflrDqYcHa+AkHCB4JEcWWEFj0SmFQ0DWfM+zeU33G1Ke2r5f7qlbrUmpAfXCIdf3JvagKY2ZB+oHK/wWZzXdohsUB/tb7YKjL07RgCQ3l9u5FoWu1iEwhLectnfg+XdAkNEjW/oXqMtE9bgGeunn/tKYHEa3iSSDmRB/GBgAT103pNKPVOvuAU8o7wqOGhXJ8MiL3nczG1rCMRzfVXO24eXxtYoy26dMCLAUftAqv0UGzwujrJ12IPfqH2F55MTBpPaBjSx47JlgRj8KBLwLoIAuNFCLhxUlOmLnjDF2Bu+vePXWN+WjBJFrIf/6xKJGYfzmsuX46QFD/cgLT/u17JPaoMPXLTF5w/y7VCeBbEdRn78jcfJ41xY0dysIF7U9osm6bAEu3Afb4aOAnLTD9ByyKHWtbXMsIlz4mxFiGU0RfI9+PyGgIdjlfvpWYF/vQjZS7ZFr7SS7a/eWJoRZuhK3GasgxgAdburdt5xUGwnVCVmcYTJAZ+7BJUa0Iq9aL6s2SaDZ3nQn0KolfzgL0mz+76XYJ8qIH88paWROqFVrJwHyKq48u+PNnb03LsVre8D0VGArsOeFKBjPsQLHlzMMdBQnaxLxhcZdralGvgf+Qw78rUPTldJOrPI682SM4ux7cj+Q63ZwjL81GGzPqQuEF2e+Cj+vwL5OOf7QjQ0JvWzEDar6FBCRxPWBTLgIhuZb7n55qku1HeUYFM=';const _IH='0feb62949420040327d08877f6b9bc979fed890bde9a77b524273dc0faba1754';let _src;

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
