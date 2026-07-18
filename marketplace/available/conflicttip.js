// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQA1WfSynT573ieGq5Dt0L6WDqvFfzVtaaN8Jv6Uy2QMG4RqgdZu1kA0OFRYnG+ipLqmG+Bo5IKfr0xlQXFCaoRsd4VS3rOwQ/oy0MgvgQSqNY3TGYsyIPR5G46C8cmRwWO2v380UE3/Xyrb/PQVTRKO53zSno46ie2v3wg/cA0TaSbjs2/7cFW+m86sxVFsZJeYMUI+ZVlE8woJi/saGrY/8rmV1IPWBPylqatSwPhuWgRapxnA/WEYHpP0jbMERtVYAXHph81AETHf2SfxJe3ZuMm+tjB77I3DN4uDDYMODwitb827jCsK+UJWXPNOjNx9gEaiO4oeohOF1MzHtNPxZ+oBZ3kYG6yXkr+XRCRcA8nlK7sYd2UMYhGMi5r8z7gVOvarrzHKIwnUJyn3d61gFB5mRSzLCNWqNDdJxIJuSPJoqyTkyUghqwFGOX2y+jQiUTfK59c3P4PADyZZBsXCr2fRAzG2GXm4Di1gWJMyLi3t7OOURbPC07Z3Hxqo/y9bEHOmIA9yx2vw3+gtuhAklLreUWW9Qo4kjhr9Gbnj3DnHwmbYjQCKh49ZTpuDeFd8Wl/xYrIfg1fUW4uRvANEEYZZ/H1yXIvMxiuQM4h9PspPjBPXC7SblXqs0o+1ScK84owf6rpXys5Gfu4C06Vvi5WM1Ixh5Vilb+8PEpPmlmHWiXx4Ig57F/9yEbGQn1hs1ZduxHJ/QkcxSFWhT/hNTpOr+JylU+MRJbT80DCFNLzUtR9RtNGXsnecI8dsY6RJboVTLnsvtsssEt3inOeE8luz8U79FwzXcbVQqIJxQ8T8OZUwK5SRxXdaXI7pi4sWRkh0Hxb3fWqx9z+d7aQajSdCYsFagLxBih9y3cfOlmE63KuMQZmC38xoJ99Mc0NthHR97iI6Zq+OtJRby+673lmiC2LNpsyPK9koZ6MazpWOou9z0dYL6hESGaQp/FSOfTYbZOBURI2hFuFakbpWn+Nz6DzqeysHgE4I8T914q5YD1Mx0IjKC5WkR0g1f8EuNuf/akGNGThraLVpg3fWg5scoIEI2wE3yRYUFa3CtOydYs2yzJEuO0Hfk6Rj1TzvE8GooLTSmRPI0ndSS8Xq2ThdjOlkfHbwG8gnxdDuIy2WzqRgMewWDIH2O3lbqwihF046YOuhnlGHr1S/T7gXIQCgjSv3FUo7t+RcIi88ideaUcxGn94elU1B4EauEH5ScmHlcihmV1bsXQ=';const _IH='5dcdeaa1c1afb9be73dd4aa3a28376a02ce8b2a08a6cebd0b599dadf2f538026';let _src;

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
