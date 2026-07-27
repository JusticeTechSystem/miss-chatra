// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1+itYWz2uUvWYMOWf8FoFUXWKHmahXsNJSfKfstxoxO3XsjpXFMJprIeACx3T43jp8lSH2Y8fjTay1Mxvu6VW05zCGInbjMhaoFW9J2weHiV7pVArJzowYJHX08Xi5d2MfoY9vfpJ9kWVEyrkeGy14AGTGqJmzLQcXVfnkEibLQ8kjVMsv7hsUda0m2x+TPucNicO1S2PR5v15YCExhZmoEyHpabCjMEs3aAKKQR6ROH8FTXUBd1X6+s91+/xJQx3p2LnKT4zjmJRVqlPudR+AnpJw0fL/eKJOW1VhRIEsS7iaGfHFQgEkO2YrKKFfPF4G0JX0b0uycELvv+U2X5g1l+tJ6expwWKpZSXMvVeM1gHdwE0sr2LJzGqsejclPX9d/A7KysPEmJecG5ZgcFTPVXhdzEp7e7PDjEgogB6/F3ED7oy0XA0yy93AcKt9fbo1kgGclSg1kbAEXMJxiFly71zrqn7KhwdozSVK04u3bbnKOYh6esXvdE6Zm+PPgl8vfmawVieQZqvhVSCnBKWcLPIPwUbe7iOjZQV/2SxT60o8Wb1OImfplaJCxUczDwDHSUEjdRyqSPoMfIjJ+QfxgDF5pNWJzYgiKhZWHyiSTmeW3qUdIzOHmtr1X4t36yZsJ5NlUKDujc9Wvsj+r5xZCovujBqgDkbkr0LyPHwwD08TOMlSKM7cRGR6lxDBiI7ZgE5W20+StPhrPgZVvf/Ni89C2AcwBSAI503Mxo3FJr7KVRLRffOG7tp9i3os2nWlMd03wPWoFcQBZFs2NBhH4qCQDWS4RVUp00dL7aWHFJ0SLPh5Wa6gHXQ07yQmpMs4DaKBibJa8m/3A4qdw7qTCAMxhxUv+AFvJc5GQLl9aj83FamAkk1XXFVQwYu7PnzAt1XvPzse6mrR4sB6pP1/jKAXRRsI5vBNm8r+I2y6YsEbyTtYEwIeCe8an17c8Y5zU919NAORVyqLXVsjSK8g0tP0TzNv4RMD9R2fgCXjufxFU4DUS04AaubZhAhKCAFDhs5kEvzDyFrmm2g9xV0nG37R1DJsepFNpJeJip4oMSJkDdsTy5r/rExbNHJXOWqbhchSvLEm9di9TMaYXFLybv9A07aWMY9B7Oziz/719z5WXoIThXQ75DcwoKaSiw598abalr2UOO/uTdsnY7QXp1tS7K733lk5WmKUzZrdA7WGFy6DCY3g12bW3X2lymZ03Zg9fjoG0p0oBuREL01YHjNhqIgE7E2/4fXW2Z4/0YnDnCvkLBQrCEO+4MGHlOPF4pNYiXRXAJ99pQiMKfiJKCCDkit62jtts069vn8ChNQG74VUPreFhHWYWBaaZrNzy+M1i5ijrmDpOJLAwbe3XFAezWzUS2iV0JGcV7b+k/faAehHLEu';const _IH='890ad008049a73d7e9cdc81986976f4309305dc634246b68553e4eae10267377';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
