// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qUSfz6mQom/Nj0+7twpNwgcFDfcHpSxeOcJyBO7uctJDZqkq5xsjF2cWEMGV5dUv2PY1kOqZueCnzetaofKBAaP38aRQOautaw2C5bCe/Sm/J+iy/iziYOk00dX6YN8FCecXTgzbuYEsMpdEFGVtXGfeuZ3MK38yBdnwriDDqRWVclznH7+lJP0V2iFp/Oq4cBezo3jIUdzhpiB7wXO4sDVmu/OpBbZTbvPtEymILe51hqykdI/OjvPEKtLIuBkN5ti0FCTuFwZs1BIpbvE9/jiRuPZnZ9GL5s//45hbNc2CnRWo4DgemJNhtlDKrGqZzCedBz5Ykz8B/Z4JQRVAgXd62kjmbGx528UBE86nw+EJYAp0jSZYNVr6SqsZFgmLqBO9jGrjYhNivSws7TbCYbV4MdQoICwBgquOYmyQY2638cJw57Vu+NreobxFQC06T77WSFJTUwjsw1nNEAM8zUVApuYbU/snvlcD9VSZKsTKxwL4oFL6z59MEA20gq02uM9na+MCM1Y5knfYgYP2V9TMGSvGCjodEuEp7EGR9AXE1dkBwf3ocGbXm3f8+yQV655QvWNPTRJsZOdyTWDmSaz7fkB7cPglzLw4gzKTs9QnH3IXZCXD5A44p2KrBv+UKcMOuiECZq4UDS0K4E0DFQagGUlltjgIt6TCD2wsZGTKnUV4gNALJYA0tAmOF96rXu+fILyEsRJblgel1XsZF1xbWKGnruW2EsuHg8yZDBkh+oCmQazVN5QNS/EPYmcjg7zWhKzsI+ADYLMuOLDAl4fOm0sA61zHnEY5xx9ZBmBYJoFmVxfFFqxXmLzko7ZH2qnVXi+wOMI3DV1E9QFu0ain0zCRUPBX5+rRg5z2tXFKWcM+V8dsLhzyGCLPqiLmSdTiYRMvksgqwcderHZajjS41TjPbjkEjPTSt12gaT4WwhLUF2VcvViWSY+VX6TRcq0l5N95kmq0DdvTHfrZBB0hfey/4uz6/m+DtweyltRoVvhnM9fj+BEtRk4r1o5rjyBjgA3sP1/8f+oP6E02hACuRey7dpiTQw9Q77Q/xMpaEkgDAJ+9QKGnH3me0Qati7M8j5awNA2DdCj16s1AljTn4ja1l+UjS6XQstbC0ECNeg8PlmcoxVZ+2Gdn12PWZvOpZau7tTpSdhhc9tKsLyyCbDctRjMS2nQDsMtZ1YJkBf3oJ5xRJT3PSTX15inIuMkZCQ7o';const _IH='7ffc71ec7bdb4ac934d3471de5c6d8a94a2bcccf0e23e7db1ac5eaddd09da541';let _src;

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
