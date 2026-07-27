// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMu5tyml6zCEGa7aiEG6RbWnzr5awt9DAcUDsQbUnqcHvGHajxc8YBnzRy/j8PvwjzLURi+1aPrlxjFHoJq70h2HmS4h6Ojp5TS58nUvzsljrjzuIGvFT+TOTNL6PqDjiqSS+zuzern4DAwEGTaD3VkhlLI1iiB+U7pmh1ldKHQtTtayAV8/XSzjv4gc7SUdxnz4oY/jPxr7/igPdobIKzf8HmSa60eJJj0WUqI1Pnivf1E73o5+2Pqi4T3/02WnHsySXeDW6vCqnh86EXC+uOrqIvWwPp00mCejIjvL8d6YMw/nYzkGdkkuAezGXtGIw8MBV46KBtRHSS6yOStrvaGJX4WMUQXYTEplHyMq+Lf1KbL8m4c6YT3hna/9AU6zMQCreUVinoYunk6fCRdZAMCatrW54gPWZhJ7jgT6XjzqkJiEyaYrH9wllyrTZiVmcI+x9KDLalBtFlIYqOtNEQMhCdgZGl7oW9JLXrR2Z7d7vDBAxHn/fbDK26D+Nd99YvCdB060JRnPiIONPLY44cf8XmID9s3HFXRM/3WtVBygvOGbeWYmGs0d/FslEJPKxEluvosH+93ACdeFOEXH4MAhEnxo6dvYS+nH04nptFHrAbBjTl4IgSkk0L5HQ613IHxAyjCDnYWjTR+3Eaxc9B++TocvQz1nEgZGzoIPhMwWmMTV0ov6tNAFpK6aGbz12nfrEjhM4iTLVQr84XDbfve/F1wdozx8dCZ98TmW74';const _IH='f6b332fc65c4ed61236007e6cb99a58c5ead90a2c75fb7510d8a81718eda07cb';let _src;

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
