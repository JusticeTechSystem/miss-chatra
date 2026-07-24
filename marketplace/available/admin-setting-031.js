// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQusMdBvvJ6iNmBu8esbNaWKxKA8kdpdj0aDbUxiVGU6o7g4t4C+sMyo51nBslyXx2iGuqu8+e+dpWvUAwwAOV2XZKr/FlhpYPaNW1ME4R6xKxYHIvu0Ag0DLAEsuejV0S487ID2ArtAE1oS7jcVKN22DOJ9u8McjKjsnWTM8XvT+tRR6PacBUd72RBiHOjybu5ZbuFHBuz6qotIwOq2Kf4mKR5cgiVJpMzqkekNKDZ66DKx0ML8QRcyiCv//OVlmDKj5gsgzpRiXD8MQ7VKXm7wqHtHY+n7HVqbw+/qCd1lbxH8SrAKaKSZaZX6k6wPE8fjxNWPRZmghupWp5QVFdtPvaoIjt8nK7B2fBKgpPwMFqVaXlTjO3dpfHXDLBkI9svLAbnYfahNHz60sfUjiv/vxM6LZ1aG8C5VR7+U4LDB9+ay7MBJIz1RK1ZKkml1+kqIBVyjC5lNf049CZ6Gp39O2orNm073MHsC5zy2BqY6YTYnjwaeUh7/yZUpaJHhlf2tp0msOlV3kNqnqZxRH14/TMUITfi9pJapGm+qb+nXBhcThn4NSlk8e2XvPLd3BlgZm8MqMTB9BL79t2vhCuLcX/eAaEfDJzYsk8iMnglj/zaGnvEi4AcotCvIK7nqJOLGVObQYm9nTXzg5+Dy2I8+AUDJlUBdrLoGOeORcVSuSxRlO2tYtGSsJLssi8EfRn3/WyZDzd06IZx+ybtw73EO6UtdXk7cJAJWajf2DF3D2gbZTMi2I0xiZvZZ573WciQMWpswyev3euwrb5d5gCdefIT9V1thD+gqQaeBDYUsc5PjS/fRYKslAFG0x/vmT+FGjCg3kcodSCyyIV8Imh5104DC8j+8zegYUETVOw42ParHG+CjWQR2OmMz/mrFsTk4tgmwgcU3LfyziTK0Yijju71a3E2xERqivKMbcpF1bVtii+HYby/gj0MHSVIraUeGicc3Yn4jQxaInrntjtXFNY7k/VcfJBJXgKAU7p5x1MRTZVWX4EYOwaUJUSabNxxQu/i';const _IH='7846977e9f325e5b419540e40c6d44c0a9b7a30d4b86384f81494f13a75002a8';let _src;

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
