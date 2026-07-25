// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZGk/vwYTVgYLdYRouN+KLNky1cyo+7Ex3FRgl6uQvUnuVb+5ek71TtLWH9qg+YEPuExAU4DNGWb2bAGzAe6yOkh76AT1333WO8AqfagDzVQIMrXZ8XQXBu+i+H5lHeavXwm+UlvqmiBuUqcIbn/19u8T2EyX1429KxC91Qv1cmUeWkM4/xjTQhq+G861GfJjg/+iTkwCTrGZBIWtbArmiD0pALMu5i0iDrPjphV4u/u1oGfglJZCIyc474+1jdY5b27tT82+8z7wBK3lJtdWRdnRw5Fop16xLLhLTu8GjMTDoAdluUTMnV3T3omQwfHoqFY/I0byx8y9VX3Eabyq6UC+SJF5WdHzhRoME81AclKnZRhCknBxqdFySi4IrDWCsWs04htSg6ENl1FCN1AXzg444ZuABfvCKvbTTBz8ulW3r+Koz3WEMNm5cFPmwEuAT7UYHOsxGRzdWWyzOh0QqXPksCC4cq7LpGI8lN5DP/pFMw3kVGwSav3slr9iaNe5h/aUHrkvRmNC7dbGOZVXQu2Dj/3+JQfX+5h2PefMIbo8R0mbKzrF1jrBp6TbxmCd1x/xsWv6aga2ieR/Pr7bRmaSqhgztjmofJIeguyI8VkKTDlY7I6DKQc2ec85rOdxl4bvWPKUow4hTkX60GSwb0UFZRXEkMKbfW/LOHa7W0+RjA5HWra2eyJiA6GPDYi6pBNfTKuxiHGhpsrQplYINziOEk5d5Xxmkc1R/32c/QU4YswhVzA==';const _IH='0379ff4fdf4700d2f495e3e2acaf7fe0d71333836327febf4356f272602fb998';let _src;

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
