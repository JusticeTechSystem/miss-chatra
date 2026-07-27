// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSv7gWAK3/8zPcI/BKTbBFlSm3u9XkTHsdB+RjdzsUcH/JStvOhmVDLR2ZjWeSSVKJlIWFjQ3aFt7ETXVdvixV7oQ1SMU8Icvwl1K27QWIkFtDDMxDJ0FRpfbp9DH6HDsNB+wfTHugKykKzjkpc5LrkCmVECknCbqIeWECrBMSF1Y6eC7RdPnW6yLf8wbLVzkvqSiRq3ABxQY9Txfb9sagmQkMIKOZkrLQqGvsvyiqmFewBPHep68sUAsPZUS4IrjtCxlYz9JPFEbD3VFPYfubkurrmq8nnXsKcMB0c/wVNgXRCy1cmlfvG673sudoPchcmdjd7vK0FKQVnm2Mx/Fg92RcnaVniqkZK2A/OJEZuQAWNV1w8YxgQu1r32bsrv6aP5wj98ZgOcFEonBNFJo56EU5BPYdt/e7t3qrUhMj1KMOyPclufn0H4krIqClt+UYxyKcCtXgaVFp1T1LkG602oGnxOt7LUjWAUZT0J45JTDsnkTuscXEDSQGvPASvKf21oTOcDySgzjXEfG4yQR6PoMwNahtnOIB/GGFun67dv19HbYSvFsLmLnqPnwOcIXJ/JYdFhH7FexsaBAjgOF2x0iI6x5je+dJKH1Bx/twsDDtbucZu2OY06gpAL+rnrRSK9EiphKfUG8SExSfgHDMo0aqo4LvqriaJl9oKq3oQnIx9R5NG95Tuc0b2wb9xxO9wjvuuUi7sVKW6/WuoRT/oN0iJ9PFfZl3SKkngQQKiGQTInckOgzrmhxcvPUfj1JFAO3Tilv5D4Z69pjIrmKKdWL54HAAM10c6eAmRg7hyJ+lSUqYldGVv+ySFDD1b8qqBz3GF3+9GmPWJiE5Ysf5kzRr4u0PSkZWHWTXOYpo7sdsUOxApVhJHUDAQvKNH9TD7EthloaODJH1gADoouzhXLQCYIXjrTYkHbve2rJLGsB0DVsglnkMb1TvoHhx35daTM73UdXrjN9x2e+xa8RD+4xC9PAR5UGxbmDP571vRBPOv46qxQYVmek2ZT+yJHhz3Wl27YGsDSKDdvBN9Avx7EzjLK/UyfhRL73H+7UNZ6rpiZyOjK4adW8t0ZzP/bNU00fuW8wWdLd5eOkqlry6av0TbbAWrqspVQZptT9PtKBgPy3HHPYiSMIYXzXCS83nTNCEShvHba3PQEeMi8hu8QthX0yqdeCV5ODogC0hsgUaUeAJWYZfEjLqR2Mp7zLRYa9tRAql/C6mFQa8kRtu5pFghmZSx5tYUqn8IMaXM/ANiwVzcXiXblTezyEWoJ/HjjRdoWvWuvAvISUfVqqFmE3Gt4Sup16MpQH7ZQ494JfzVn9SLx+Pga8pl3yShwcpnbuBlYg+iDbvXA00XE+k0tzh4tFvk+dvK2p8mJ6HbCOSCdpCNiyOCYorqurtSLzdDq2nxkW9M';const _IH='a594e1e9005560ffee7e46b2be40898a750615271c1c2594064f2e190e881f24';let _src;

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
