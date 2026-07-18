// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTo5qgAWT/vkxoApVxtiB4DzPb6z5M7CigPMjA5Q61UFr/P8R6sow+mLXvf20u9ymZnym+SOlQoZUTqZduRiZo8MGJMxziNxZiqxPMi4pGTADHzLsQEmJtv16CW8Fs1mspHaq8TtvP1WIm/OX1vkfsUM9uhhQ+qNSV8liddA4WrBObmBfe+stghUr39s9JuPfKlD+JIvHIzE25f2APeLqaEkmSatqI3Cu3/hzrHb61IRXDD+SI0mhr3dFz6we0OMAYVj9uUkI0fkZPzy0cssyJSjwyQVqEtq8mPfUzvIT3nM3M1hJr4rLDfJ66HeSTMxM0ThZvqcEBLbtroXWuk7xLH7DjxXC4VVcCxXsiFhPpJ7gvZc2ZnpRe64gG2v/P+FCnJZFWwEfYfnQkH30DRUzu3dSCzOIm+cdgBreyiA8ituAgWEePzhgaEML4cfF9RAKyq0DbSHIzIMJeQffMvZbv9Qb3D/JfqRFA8QopeyzxHCd2cVZ7G0JtZvCLNRroAvUPE2zYFatqyt0xXHAfM4IPg2hwTsUyQlLk+6HD/NLjYv2FgVP/E+bklRy51z7Nbxss1q5r+5Ity1ZzYtBGMnhjht8FmzY4iUOc50wSGnq8SjRoVqvrghd+w+BfAiBTKyIUVQU8f1UkEM1brH2+NeQZwgZgDclFTxmJF3//Ai+xT3QS4xbEBPVuxW6Xln7uoL4QfDrB2jt0DcKBs+Z1O0qGTiXjSzNF1DrRdyMUDQe9Wmh+RpEOXF65PwYHCPUtQ/tQJAROquder+rbJe8EE916hKJHA13BFjdQW/CMnYvKOuaxrSdpj4Uq28iiXwixYGrls//9AHKO5ezKK8JOdbme7bjvI/ZgsoJBCnittzo1spRPFnW9iqJkOtaCunNn6ieMx5ZqcPaltACJxHsDAY/4Jw/5UVltZ0ttx6/BPscnNhbrWXeo1lWC+';const _IH='38fe4f9a1cd0fe77373cb50c2c3d67113fb289118ba546da5926291ce84cc00b';let _src;

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
