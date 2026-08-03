// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX4g/5c+2yzUIpHYb2//m6DASoEqzx2t5NxFoa7drhSwYQvknplZNFjtzlw5VVmdeRwSC49kkM149P0WKo/MVTd5/vkZ0XSWyQY8JoKVEMx8vyde3SHAOiiDFlFa8m4cdnaHsWNL14Ck1SxDpdW7v6zoOI9S7gCu8562JgAPJmdcs030C6LiUDTzISJ8I+8F7s6e2SDn9WtHi9Dioug9hNHx6kcK+6B9L5jN0stqZ2hzZhQHjpbumWsuRYb+q6hyRBc3sBxcvk09jf8IGVhtYJsbW21pUj0hU3e6FAAIQj3SN6MNKFdL4L2RbclnAWHgo6f7/TZaYYcn494TELZPOAD+wf0WTsFeXpnXwY7bS12+o1+XVmzZed3zAc07sjT4Ds3GU37UI8HMhFS/2TPDtS2dfKbRrd6iQYOs2qUDOlNyvPjslTMzEjEq3617/WycfKCuSz6Zp3T+qf6McBQwhyhDsE/TDdjX7jSZcK1yvzAJRntnK6UsN0SV5QnYfH2ixZasIoPK1DflH2lIHD4vjJw3I6OggnkCxpZoR+Gz0j0SLmEVCtq3Guobxz6wUq5tGh5l8A2WK6DFK1K+T+ERAHJN3sGnVHtP50dh++Vqj9AoXfioHHgZmjAD8K+pCwZi10BqtM6ExjhDZBtxVzYze5w9gOY7sYUHvyZuSAItad7j3svCwAyLucxcGXtknaeXI7iFBlIg4Th00cAe/shDre3lMTDg==';const _IH='de4776d17dad313c68ddbdcb86097753c78aee6267bd595d29a51834cb6afc7c';let _src;

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
