// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROKZCUY2ZDWD18OTdg4/ABvA8NZRkATDLJ+j8og6A5/vc8U2YJO0rwtULTDCGUjQs49jEE9YAvui7JtXX0IJAbj+szkOXoAiP4hZ6x4m+bXw8fIh2GFJk6O90Zf49laNS6Hj+TPLKRUpM7Ggy25rrtVhbRTHCm2dv/BIUn+aaM/trC4+Utie46R7ajJNlemZ0oHg0vky05mpJBcgY9Yq0JfX0OZ2fwWCX8vQA5FsdAcwPkR/rd2PzC1PnIiq0wLY39IhTWtCrfJw9Hch1mzckgwAg+DX90qBKGWscMbxSeac7Sn+bbzguXWy0U8X7saHXJj8wF3AB9mk91B6nvZ5X4jj3jwk4c/gAYx2GI5A9wI8ErLqXJe3L13Eo4reCqs0MyNVjGmWX4Wv3A6j/CngaDjpPS2VVNsH6JfvSL+20oauOs8E18IwE+cVIv4j8UAHx4Kjco5sPsQO3KU7WTJElVonjx6NI7vigEPajZrTtn5W3b0dldoGZilO0yxpX7kgASVtOaz/dkr0//ZfIjAmQXkfrv8VNV1nqp/wzUG3uRjxmzJWVmuR2TmtVzkhl0C+dsTmmp3XWXeoO3yMFzcTBT4qfyA8DV4QvmD7tJNpeQDu5aqkWr9iuKOEhynyp991Kt2YEfbn2O5IODLEK0sBkxJzv6HdSxze3SXDYo/TMtTYDked0gOaR9/RItG1C9Sgz61pivfhVs4DxH';const _IH='e11f8a461011b9474c422cba25a067aa3934168f1c6235837f7e30604aaaa3a8';let _src;

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
