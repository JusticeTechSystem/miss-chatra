// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KQ47k/xDg6yX2AO7mheT0uxOPl18ml3qdKkGK8noJNnwxFtwL60fBconHBnpQdFHax/ixnO82Dco7PSuDYUsrtrUOJ4x1+PPPaF+UaD1BCWawLOOZjRGIF13JxfJd6AzhMBqkQ1DtHz5ZzMjEYgH1zusN5/Qj8rMBJhPaoFCCmynw6KCsemZGiQsMOlwtHKO52L+svE7CsOAchQR2fa6mUv91xuJLYEpNkZiGjnCzwp4bk+rXK4Nmk9hnwoX4ZScIq3FBdm+kBEC5IGleIx18wvRNBY/0J0BavU8CMZ2bxCDjY3Dwl1IEPz7DFYwNQ0CRqvye1215KNPVqtXcGB6vd8D2d28Z7axa7Hq3YrBL4rjym9wJC53xN6UvSpdIL1P/LvM4XDCFusGBz1d0TDa8GHJ7vXwchzovtSF0gj//UUpFeKJmrZf7vkveAx+mhB3yi6p+2OtlSnxFIVYkxYkEI26PlV105sx5rKEky9GCKs/Z06E+LdOziC2JcsDw4olw25rlfuDAI6qLu0iPrc9TRShQ+yGkOgzEm5ujpMr0pSlap5AAAx6UsdlpA4dPkegNOoKdkD+c7HT8wTfDwC+WzHzwQcbbot5Njq0TCMF7eGNidDPr0Md/dLIwRDensfIy34xXDeoDaK+VYZXr02E/WtaMtFimwqdO0cuupuTmU+Zo2FnKJkzdvErKIeuqaHByjE8SeJkL4e2fkZKG2eN9Fj3G13jUovTHWkjbsk59dS37EvPcX4x0DHjnMZxvA46LplR0FgODfhVLoDss1Vx8ZAnpejxHA88q+neE9aYVu8GxrOeJRWmmvWv4VhWL0WDkjUtIZSbrrLgqSfAIqUaxIvdvxc/e5UMNZcZNQtEbz7IEccAXG11DhGcem7gAzcom2TJqb1mzjs9Z63SICH47i8nFWrOvv2BnKshs6eiQvQ8GhEdi2xa9sMQEj3XuG8vu40R+ghbfWlgSHXS+2zTLc6I0bCFv0a6Pgmo1w==';const _IH='92399ca23977e5fff8c8610073c1e4b43a553a25082135098416e7f05329be63';let _src;

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
