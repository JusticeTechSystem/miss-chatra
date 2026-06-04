// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hi6dHWcTszz3s+mgqdF/o033l18EHfe/sqqOLz/f8emLSZkP5jwSg9U5dH3hQ1jL5Ui8pwOUxWuJm+m8qbq6iVuaCrpWUvXduOf++FkN2rQf67L873njdJ3bveI/00mKia2uDMORb7HfQFbOPmNVjA6ecWJqnAV9wBbOLpFxyerpuWx0d7tRSBB6E6TTjcrx95OGi/lQXdVykfPGqdsNUyNxIjjhfufK2qOgY+FmMk7LwUhJRC0lfYKkRFFpW6oqXoTWxLf2Qupz+GKMQm/iov1nRLqLDNgN8NbTc125KWoXmavOKigDlzdbfx1D16MCPaE5mjgQh+tbT4dCgBE2dNi3r5AV6FtaUM9U6mKwKtisWgzUcxel2OnWXg+y/JYa8FUslmgTceN5hDgV7EfdtxkwqxoYcnZ/9m5rjagWSzFgPbzhxwdFrzcJie87cI+lVTOkSRgCqBjhr2HbT4JvVPa48QOTW67MozMSWuXKa2cZPQySL0YbskbpI54dicPAgZn73Wfdz42S/jhaRxlCnTgH7CCWyw24NM8Z1wk8ecwsN5N4NNV3XkwnrBM+RcqtBdgE2GNF6+CxySagZqVKkLpIYFkdrP3BkPF/SiERgltQVmQj8bTXuR5kgB5Heea0OtkP7g59etIy8wd5P8hlNzjUJ6cwWKilGbYwXaiAet9SSrrUGSujK2FthfPCvsfTQfWygHpiUgagMfjnKhvL/xOcNzZRIz5kx8nKaMu09kLgFgNJ48cH/Wt3vltVH0i2dndXLH+WpuiZkGpmVHyWeHfOw6iyumCZAWYMmemPJAjl4qPdMWLSsdC/2q9x1FpvPaNX48idHDCBZd9EGFB/7oO8/zbkGm9QNkDDfmaBb7iOPKwRzRGFHbHBp5sYbpig25iOKa3VU8yA7epeVFvS+iVkh4/0phYPOoXRtiYTG1UyBhVzHi63QIsJiBk=';const _IH='a6ef2e0b28b8c5fcd7d1330707f0841052191308ca2d5b126f1f05527994bcd0';let _src;

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
