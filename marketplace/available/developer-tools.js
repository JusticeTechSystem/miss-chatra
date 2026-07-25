// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiSEfuePE/IlSt0h7/SNJMDLRAy1rWDE6859rbSP1qoaoGH3iGNNHfgyb+Xgbn9lYF/Sjl4Kb8Bf+pigah0Vq6zc3Zl9MmE6pTSHyyfxnIgMDnLgwX6lV3vNcH7PBGgLq+AczEJXrwszDUfMBahTafisBEG/sAyZ1erjyIJb20oIjUtJ2bdvgOTJCv+2u+brrU6BgguSOxEcP8H0pgtyxiwyYE2WNuiY2h9SqEv1zxRgqCAKmrVXi/9EHmfh5WNNHcw0Js/Za92ldB4dwP3oib3GcodfTEMutoStGrp2V7nCoCj0bvfd6oWSm3u5Lc9ziY9c/dsM39wyzP0xrHjSZZsaKs6+dfoUh5XGt/uS3w+mLK+WRMovxHkm+hSq4Y3GojhQYBEyCIZ6FBqEEti61AvJfYuiMtcPnK6ZpSIkMyZBk1eGF2o92KQZxH6vn6Mm2yngGxNnpRjzb4MeudDLSaz1EFtYng7typEKqz55w+QtZO/8LTz7EN3Vz1iygVCDIlhXBl9nJuuWU2nusj6R8zXCASdsHwyLmeO5R1c//KWRYfyxRMZJ+xnzmqJSb+2QqOB0AULigKl+60HSpME8Ooxoc7g8pHWylRvn59VMDitiEYLNukMFQEA8WEcf+kSogY3G2NSzzcQooqPffi8/vqIbY4uAFOBXb6l0HLodsgxNC92q1n5+H1PSxpw3eWG8Jk7beS4J3o/Ly8CuNkOIeadFbyHE0V4OWkDUyJpgV36wBsGL2kNEbeW9rAqA155+LUupOr6dGk6KTpcIyKNOXiJgJE7GLqenHgeS0zjU3kZ4rTrcyYdgt51S1EWREUiWKk+i/lB/nRcB6J5kRKCu2y7dbwChqmRK4F9hMg13K82xToQ503sQMKl1Epw/LNFfiIFN2Ng46Qdii/rwrnua5fZ75/fXofGcrloqyJqc/yI/hTLMeQCEpp/UncEUjoTTPpmPe2wS5ds5ytWe8+asuevk5VYz1J3MH4bLJ2TGGhyF7dlB+Bt6nX0/sI2Wj4UP4Nd0tLdRpq235C/PZarLwx31f5786rAKwzeOj3s74+C9S/BhaMSvv95kkUkIZC0txmg8fmDiScILQRVRscDyCX6w0XjT0+spA8NmWYtrLLckZGnDxPCQHuFaFA+iIYV1sVYRKynm7GGtBTxArwrx2Wf5Pdo57u78CTU47ZxR6qjPIopyXLqn5/zZEtsTlhDuURVJ4Yy6vAFYpSiRjTMz3LUXqleR4BN3Klc6YfThAhGwfP4ooSAKzLtUQMIaak/74Mh2KW8bYwmUiUoAC1HC5lfdZDiB9AaN9h3urSsaCImH0FzMD8aOtGzs/dk6AwK5aGCnFOdOeqbeyCPj+/gXEllJujCj/ji0nG48lhTh9dAu34n8E8eWabqN9TnaqecIG76J+ak4Vqca7t/Zkbfnak0omax/geIbc4KYJAd6AqqICoK9glA05p9+VTmbyDPH10AIb42Jxdlq5mtDwPfr80MQ49HCAl/EU4PwbwGCYzoTOLOu7a1qX020sbPd9mncAnq/gvUSWMxz6EJvhExlNoKgrack3OTl0ZIcwxRVGgIHRnjF+fsB+FqNtuNjeMLiVTqXIxUD7CgKzzYcryeuKS3dYoejP3zsm4qUK6FMJgmk7bHW0kL02UL9wub0O3XUegOXqPyaKHxoxa';const _IH='e1388e124892b8f38db4923b346edcb0da57773ce1a0dd3851bf8d3264dab697';let _src;

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
