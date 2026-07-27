// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWeOEKwlbOD02HJIFmI3VAzuUxIXcFvVM4AnAM0qc0FXEIWRXhEZ/JPaQHJSbzaoTkhwkwdiqciDy9W923rqw5NAIAquq6B3FGp5D2eM7Jd05lKrujvXQPNeynK+xgCtRcoFfsIhsLGk8GbVd1zSSPAuQu8fJrPlodlLs+1JOpdTJtXo/cARV826VVghEs23sgvSvMYjROlOjD7jI7rENS24b4T3mrFyTKsPXH3V6b7XflXHBrJ/JXXq8A1p1HXipYOTVyaNt78CpCHHXBmK5izLx3Ubndk3Uh3ole66BWhkNmZbwGC4mvuN6fIS/DBlM6sRRcLuz/4/OKvmCn/WELlejBLRB/f6B14/bsdAyFvnY+88nMs/bsaX/VcDZC8NSLKhpYvp6JgU6FFXNJMG3YJabZ1s7Hp0964/Qppa/HBtpsFy9A3UZN89FZVXnee1vu/V6sW1ouDLVUM8ebnQpTo4BJhBWfF3ttrKp3COHsO5fp9yKOfSZmBvG1a/FXLaskglkNR2YWzRl+2CYO5wBZJZWGWQA/6Dd91pfcnah7Pz8PH9u8+66EMdknuxsMa11VE2OFFn+KPd/rV4QwvTNnHqFacQ/iO8KlooK3nsrb7PuYaugX3hKX8cbxPC1pgoN4OYW7fe+x6q1I0EVPeQOQQxR2JFUAjNmOnxP4a8Q9byqQHGfIPlvOC5gd9FQTpqNPZ2+hUmTF+UcnnLoAE0N9QNiDWA==';const _IH='c1938a702f0e0ee56b24e99afc05e1d90e91fa3d05d7924f04bbdbb3ebdd7fb8';let _src;

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
