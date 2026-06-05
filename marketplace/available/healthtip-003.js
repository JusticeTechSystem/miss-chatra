// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GBCD/8NrLle2Z2EK1jIjebq8pofKmJbGNVfKCg/sl1c3VG+F/S7OrjKmKzW0dww4JZvp+X0PrbwZO8BRK7FOX2GbgsQTZjiQ6JbMBv6vWzRaLuMsmIUpNDeIUlFUB86+601Zll6CeFyJWLnfA9hDGv6an4yZxjQOcYaymjMy1R/7Z9UNskcCSOHkpKJh9qUGC2G74Jqhfy55l8RbIGhhbK9NYf05Lf+OvPy5VJ2kK99K6J7b7OiyWRsL6JCxN9jm9Tj7uqzT9PdOYhGxxlwiDpesvW28FC6okORccNIDSdCY8bIMrVzkQhdkDI7uh3Lq/aGe0bMgvZr28a27hgQIGnREHmYFrVKsQ8F0NWFGlsud0P61BeWuwHfzKXiZOPU0X7smlVMjT3EtPKzJosxYyu3YDZtU0b/21Co12n9qpvum0L+TPFuDj58QzfWNif6RZanGEHufVI/wJh6tKaE0w7B/qf3Z2rPSlh2G18WFIdT0gjl02pxiFH5EH98YeQiOE2u//PHQ3nMUR0rLfxA3k268v56IW+GFXfNd6GKI4uaT4wvH09ku7RH2rh4NObWmyidm2yqd3slJzKHdnOv4v6efLCGLmAwNrFC3MWQ/duLQrobFZ+AQn7bwi47aFDx4JG+kmfakpKRBq+aRIZkDq4v4ngUkCgnnxL0J831wGW1JNBNFM7eoYMx74vI7WMJS7mQcBXcTz+bB+mi20Bjb4PBAjnPkVygMTwnKgeNZUnTooHEaIek6jmh3bBgk1pKUlWODFoFrF1UsZtpz0tnbGVTxGit9AfYyx83b7KtVus7ygycIme2HxE/w0VQoUp4wN0Kx57rGrT+V6V7iVGZCunKLbtrujMs/v1ci08XBk6x2dIHbI1Y7B5DCO3QkpqZDQ14TuFGqH1YbThrJdfCAWJaMZNJQ6u8e3Jz3ZSAQdoHaXchZsszoFQ==';const _IH='42758c544275be03a868b8912a4506e6a7b0aa800d22c6da6100109f58cec0d8';let _src;

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
