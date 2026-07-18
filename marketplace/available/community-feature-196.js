// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCjEsvQCh4ClMVb44YWslnvLIgiR9wjOOk4X3wkVWw5y24W9FzeX/hLL5nWCzvGR1TJq0mHW2yjd8FDL2KbvIEEDJeX6M+YMpIdbuzwjHOmgaqeID/lNhimnd/sgcAg8SeOHecun/430KaTeBRXYiqudB8DawtuxpK8uTeVqZC/cWxr8yTyeS1FSyaVFX8Dj4wxH25VQEXXH+1kadIO7xT2oemQFDd4wrcxZqUtq5/mlVw1ZtSPjqxq2YpPedO2UCFiefBB/FH6OHvyWiRSgHP0jsz2uJn5LONLiHlGiuDbMad0NUeEW+c43rYFT+brkz8Z+Ptzz83/E0jTB5PO0aHy8AClm0w7OsuLtMBqGPiZ5ogasSP+DYhzXuxerNBwqKnM6n56Fn3YurxcR1BMkAlPvqsOkrMChjJBKCl91bnIxJFOJFSUPDbtArQlMn/KweDouikR/PlSOJVzdNvqAu3v+j6OdgCAKkkFi+PPDwRFTVhgXSxqrVu4P11+wQBU6ApdQA790U51ylOB6rz657EDEqNkm9d51ZArM/MKlmUZYh+n7ENUZbPM0W4/Ud49Ourc9SywmUukfj5WY+vMvU4/RDLUngpGAilAxmq7qEkY8jAbarQofh2uw+6ZEjOm0MYZ/bmck6oXw/0Ki6RSppCW3RGb0PxdLBCGxPnBpoLrss8GlDhrRn886J7AQ7g7ZQUqixraFOHUq212q9eptdZh5C18EIZBP8=';const _IH='0366d96d8c1f308a50d15cd16139ae01d6ee3d3201ffb3a9a34cc9571bad31a9';let _src;

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
