// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxo6LBWizGsYGnWglU7V4q9GT3alN8mrHt0KCbvKDwG0pktQyLNHhy5aGiOctBoX14mhdgQ9O7JheuYgcSF+OHYr323arVNF7KdnfEyPIDhMG1darSrKNAdW8uFRK3dD6cmOzSqibfJvEs67GdoBAIKgrq7dbNkfHdaaS1KrjP/8u50HG/Ppr7qnc6NMmXvjRGPFj9KvD0q36LdsBp6Ft2pm4F4XLgfELUNASHCZcogGS33IIW4AX04SM9JenHmkjzO4s7iLB4cNJWfcs00bHEFng006898wD1U9zTRya9CbclwOIYxvlinttUcMzyZ4rRaDwDXlW+U8ZGeWHUml4oAqNueqExX9Ih+pceJfbHDyKSYYmlcHK4ZmZa69wMABgbIlqdCXrkIDJqA4LcJhZjkHBO9jUIWaBl5tEtQSGVG94dlP00mLzJghbxO6OgFluo73Gd+QTYfPQo0oxrmHJjYMTlYmaIjWmvktgfpYG6hmR3k99wJWJwcw3PnWZShdgzbZKNsz+X314moc2FjppQtXQ3lbqFZE+rzFdHi3+M3pjrHv+d3xrflV78kn+DHqOtoCRH9g/YBHjZkAJAM94AayHdLeXFsWmWvNyVS4SPWpRoIEzPqTLGZ4etU/sbnUY6jMz/7jWbpuVDJH1BvrioLFoQRwFmr6iwX0aMBaQlGh2nukBw3RKmART5GV0r7b4Dq5yc6sFFEWOrHrmXbVkLvf7GQWVxpQwoKftO6OGgG4R0AusP1CIhwbHqZ9VeJ9710GCAqPHmrgb4YoCKpepJfXZtWew2y/ITuW7mE4OCwnwS+KS3kZzAy5r0XyRR5vOjjNNr9X9VWMHpWBli9hpwwQk6RkR4l/5hmKPdAWu3iUMxy0rOaPeBAP16pWvazYQMAEeeIAE5IJEo595UAhK0IGp2AClDMIr1QLdw5Fdj9hBRr3gOmkn/y+1rs=';const _IH='4d975ed56d72e9a64093e787a1628bc9914c4afaf084c8bc11c68fa87d374d50';let _src;

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
