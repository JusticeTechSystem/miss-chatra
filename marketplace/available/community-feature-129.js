// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqmqSLhou0YJMMqAElwBljGuWBs7nqkyD+cb+MQllIiwWZwGa+p76x7z+4tD37suHYFLj3poG4hrhJsumBRbdH3SOjogQf8gCp9guvcXSSovjDcA6/z7xsDhsQ85VRlhDIyIoNcfn30jGwEHM5D2I6Al24bgAb689nUONTgyDYU6gWzkUATp0GMfIOqaSCO4z203H8//7RRXmgjPis7wmNmMBIkyJ4Xml7lRWe2ywwoIgE+Z8Btq/8AovsHncnwGb6X1idUHvBF8OlHGrKsWBfG3nFSOYNUDb23w42xXvlQg9dPo0eKFqb708m9IpfK+8qequlRxAB0wjYorDj3GA4VgtNHtWhUWu42M+EgwE5fGxh234bP9nbkd9pxnq3b0Us4MAfv1U/kMXLpxdwrJfBdNalQccu1LPxyuSBuLkpimPonAqdQ8gcXxvIKgDLGGVRB6RYi8ppIpwsTr/ibzziUrzV12Uk6HkgBBl1SyWTz5zpZxiTRJImDupTVBVcQJ0PipFIGeWGrTCoSVJZP3AWOT9tWrKamwXB41HleX3VQJl/6M4eDiUsE2sYm5qC/7PI0kEeESnY3JAzlMV7ZHQD38Lg8g0iEIF2dRpGnJ6dsYkVb4alv+9KYrTQmHntZr/Sf7epTrVd0cnUcggHHuGfpNmWBsbuMo7ILX/cN2vDNrnT3z5sReRW79sVYOwafyRLVRpH+XC2z6QtFs0UhV7cdspLjGYjDRMNDjP8ILArfdggQ59bVg==';const _IH='51cec85651919d34f3cf0c124a7412de07306c5c72f5c00a6418c9a63be8ef53';let _src;

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
