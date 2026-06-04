// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9bIbV6R+vYK2u69LpbggNRFlB16R3gA6Uyad1XqkYR7lFND85IL/ewV54y+xzNkX9XFyVKf13rof1FC6or0cf7uJnzoDCBigAEt9WuJ4OQlv63Z+lEfEktccoumcaPLhxxr9PQapcZDVHvJ470WJjG1JkW2c+B0xKiL0PwNOKsj2zYy5tQSCe4y3NqN+bNO2zFi8mlHEuTYaPeydSj9oCuGE0Ui5qTDmH/F+OUT4R9rVTVTppbXwk5blaUS3PGm+FE1GlwEMlVaIGb2GaCySkKEdenHeuqhwsZzhfy/TcNJrYivYGShzobZKjFXsDBNI+kUv1Gk7f2avt69HU24TrZlz4VDC7NL/UQ3yPMNJQUHTeo/juEsemfIJxtPC6mAaXuYNIZsa9eGdO7txvJzgA+ciW3N7ZJdARFJcDP858LxD+78xe3UGdXYZe/hr7ShYV/jQtyHYcYoiY1BpPL7MdHAA44c7WwiQqpP9V5iV3tQnRfUJFV4SAaGVPsfhPZWYyEj8JTb3iNdrC9x4NdmN40L1QUWebfKiV3yMYbBaGpj+jpZEGwVThVf17q7+KG2MC+fwcdWFSbN7MopbZaM1ZXsoqjIr5WM/u6pjOzhuR8Ai7edUoRnUUmGBgq7KYERANQ3hFp92OPINeZSkPKeufQCbeaZFydLjJw2wXMAWcLxWlVPAmS3d9Y/ZXxbW+lgeJOX0vuRZ5y39/9G29YK99lgDMNv/P94/7gX4jk0iFd1GNvAdWJ0oXZ1bZp7M61wdX1hPpQ1jqXgyLn1nOAemnJRhvsEmbFmLnjzVIG6eJzGsRVVTR9qMEZsgrh3c7GbyBI6uV3HfiYsY4FYZoYIGCtZ7njDYQP2re7iDArxIHHYzaT22T5W99xTdkjx/DOLACW6Kq6h1rODLoj6JEivEJd2gY1TrGjMQBsARlqU19BsWujsGZ5gbqckiQGLFzI4pb8ZumVL5rca47JHP2ZdRH+bGbO3R1+UGvSu2k7iv1ofwJNtsz5gEfzhbmTraeXId2pyj04tQe618HEJ7UMWwE6Gicly6ITsiuzN8zqLv88oZqazgVHORi4H/2fl3fnmWH+Pdcy+a0a0s1y9BVu7ehIdzcEYKAr/CRUwdFqHfGQ/Yzn5x0KxuTSb/TEzedg2UrGUdnNxu5J1Rxp+g1Rg6SBYTuEzsEd+hpHJY3r7UOUrgsJqvNi+Sq4YnYJEyukz56q+sugMOy/Hcw+NotiEBbG3/wmGYdJuXf7XCWMuLInh4htXFf90aw6w1QRHEZSN7s3dnqlEG4ULXv+pDo7RF2c9EeVblFygwBNAA23UsNxH3kiGWpwoELt+zzRikcp3VcgLIzyOlyxhf7A==';const _IH='608da2a121333aa1c8fc213429ab53c04ebd54a596af79397bab3c701a7a0712';let _src;

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
