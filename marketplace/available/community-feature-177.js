// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIbfb/zKOUWF/b+RQT+t7D3QxNaVli+x532V9XtvcE8eCeyVemarKbbL5r+HJPOrtn1aSxImHvLV8TxC6rIDlq/PEH80NM4CVsUDqYso4X/KPcwchJ0QgAQYojvKn1J7SCtJVbmD1o/LXgDQcO72RDbUtF69ldJ/0pxFMTkrSLm584FyIktDoOBohRgMu+KddwkeX4A0Z8SmQwbvzAQkQtGfjkpxOQC6UcNRvP7FFWex9w6BTaV0Rv62X3+0QBMg3sf4EqivUwF6vlvoooig+ZBX6eKxt0CHqspVNgqQtHU+p4nmjlwUDYsuxB23005OncCUmoNKpW9mw/SDuLq6rGzfJQup8+NvETRNfA3kiLIK+mN8HEwj9YRejyGb0crCgGGgOg2CS4xZy+c+X8R2N859/kTJa8pb7Yk34oyhnlUtzMxN42aigVdJEk4ZJjnXck2P8owy0DYJjBd+qnnbWaWD2OCCO2MecGdzLrUX0m5mJS6QPExUcAZ/gGVbVaYJ5ohw5BczX5hHiiM80BScnF/qL4/YtZScnAlfKrzdRlSNeGHItwE9AWn1oO5KFq7Ynf2pAQEa+uUt2i7B20s4Jks87tA4i90i6F8BZ3VqiKYSAYSuXawY3WZrKDF5tlpslCe56DGi4xxWtXm396HD/6AH53a01r86aETFGRojDjUJ1pUBfSkNxxJNQSe+sU1yg/lpk3AfWYEoidQKYHQB6v8FXAvPtXEyhJcZSDFPq7bHnxlQ==';const _IH='e4c31336621d45a8a47252475b1ffdb55788849a422d6e5aa44b6be967664574';let _src;

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
