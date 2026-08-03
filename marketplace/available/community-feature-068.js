// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm1ewOFGLZnA//Xx5rsM7DsYZx6UoVTGDNX3beKGLV0MPhbVTEkCqswJpYhWTxgK6UjGzgBZFilT9PztWSQiYIB8889Ks30gEPtbJBWoqbJwp8p1igMpq7/oUa977lS6SZp+TyXXbSIzAAcfs9tT+6oB7geQWaxGKVS3bc0l8Uz1V3b+ilsUyzvv0bgCQZEpqhF4Y8Rxc8EI+WX7139Hr3cQP16V/v7yePOVQTyj89cewKszVDygqUPAB8JLZkQc9rkoJrl3WKT6heysqqM0zUe3M+1LTpHlgb605Nry4luTyMaFNgo828E0ivqNLFWauYTminIsRTDNVGD1/l8lJLYLuPDwxf/NANFRk625/uoyiXulmwN6j4KQ10nK2RosDdxs7AqTGqLVcMzhkYHWQNrL6/DhWZR4xMjd1s2Utg8XjeOxH+i17AT+f5Ikal0c0W8D/GwYlnAB1mpysq8+w31F4ASxqFP1zVLFuBeWbSNSkquuUB3XqVwCDp+T3a9kZYtny1yAcB23cYcJUHysnhm3mabzRKAxhP/C+YzYQuhT0To0yUxSTlJJOq+0PeJAuSrt5SB7CavUvhs4TcGkCsG5uh8kbpL9iI0hEgILizFZUsKqPUbPaw4liJsfPAH7KiYMfq68Q9IKw/vf8/Xrd864M3PwTsh7qQcZNvcCNy3GbNm9M5Zg19OfdzNoSb340FAHvnA+tml3gObRQaRwCMCr6bHLo=';const _IH='853cf23dfef733925be8d99dc59e19407f833af0f7dd41a6380d2115f64ece96';let _src;

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
