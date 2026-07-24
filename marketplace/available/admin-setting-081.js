// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTAz0Y03vnYK7BFY6OCziEsgCqdAVK2JgY35s3UyRe/G6QNrWTsCqsqh935r24ZdAs0uFxaX7fHo9EBVsZF1W+d3ilTX/c8VS7tRZ+wi/mYIaw0HEKv9BW3tmH/N1/yk/Zj+bBHCMf5iYTE5/y+OJSKHiPJAs5WlU5wjAO60YAd895iFigDFxzbSskR3XWYBz6v2HbtRQRtPHJGXNfnPbJ4fJr22Zz5ef/NrC/edbsh2BhnPslvZm/09T7cNjMldBNAaJd9eEnUzL0A9C1JXEJFSGlBYw4Tgz01Q5GyhygnKoQBFgwp65wkDKBoA3C1daoApaZWO6bXuc0ox++PN2sEM4ks2HpAOBHeXY45vVokPdoFKvmsgKiL0liCl42IpZTO0hbU3fb022jUn1N1YbcXUDE5Cqj1efClRXLKd962k7NBCxj33eJpse8z/Ew5Y9m0urKm1cjpDP+WY2Ju+c2m6qyDamNxZbEqqTVBRkU4g8znEMAkYr4/HiSQ4BlATf/sS/oOzOlSJXs68fN6D7hhCIzWIdGILxu0Brn5V6/bFhRvJgTXYanVDtwfLhrzjGnKaQxu0hYk0LsQNc3shx5pR4qsstiUQfcQO7saVFq1iWU9xerngufOVoEBpu4Ru40Md4F2hQNNXjISVCa7W2iBZ3mkHqk+fxxIZ169o2Zoj1Ws+q0dpQWDu0472mL5g5ai12CU099noUYObnDnf80sZ5lNLmpTPZAaL9VmlmBJb43IRdhmx8bJNb9uf4sG5muYS/xvpk8/nArcCvmJaCrRwBHWbY+sbxjsz/J5JQlqBvTDYr8RUHl6nnuSXRvJnINXZhGIGYFjt6g9ql45hocvrQeQe5IXVG14MyP7W8XMAJlZva6qiNe4V+yQsBUPvY1iK8eJ6IRnbYsdbpQZzgqZ5UD1YFZ4ERhm3v2phetym+TXSoVGAET3adAEFHXpcbOIKBoCJANyqDWL/0JCRqynEy9V1L4giG/kvBYXuculruS9KFGyqyy7WTk/H7FtnZYOs0I';const _IH='99e0e10bcfb35e773bdf94b09492ca47dc95da3f5f6ab630050a73663aaa2cc7';let _src;

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
