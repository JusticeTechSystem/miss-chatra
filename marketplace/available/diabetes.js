// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3hqTQpi9wGZlNP3ucQgTCF3skuwzea+/jSAZVpY+XVDlPDt/1KD3AVRiTU8Hw7S/AGsnnL9aI/9F6gOtEAGJzBnpimoAmA7lL7ytUyP2UPNTABgqwiS5nXfk5abkjsNaKpa/CsCdJ2HeeX1E6XiuCs4oNN2Qp+zPdZPy2i5dasu9tXmTrV1aYpSKliLfe5y+iWKAQ10iyhsGZ9iJllG0UafPDDhiBf3sdciw91v31RU6X8skkpgMqML47vaCYUfyw1ys7sbNRJNVO+RMrR4/BIlhJ3yMbkbmS1uY6owqXd7HrGh0lWjfhSfPkv4a8xuA5227CbzAjmN85leVQR5m9RAraf3xXzsPxeZ9DE0WglUAtWwu9xVKoQbv/jDe2od3w+EIFgWtAuATp/rn82ZKVwyZ8yozGWX7nO3OtblbfglJasUCf17jgs2VStMcrd7yzle3VTbhgiPmSz6o97J7wxjaicEYXi/8/VAW7IxB6EcoKeeTy51ZYIv5NCX6z7XZEn6SeET9oDWB8ZB1xSLYRC0BAHlCZdlbOzQx/Kbtucwusaz8gYgi+CEKSILRhX2QAlinsNcAzKNCk7bxFE03kqzZtV6gu/UQ4Z3WqvFa0xI208CWwBrIbmrvO80uyzvlO8+BS2bEB7tUy+QrEkihlYQxnT8qPSbR6d8yhl4f2chu3zLPe7dS9d7Q7CQ46eATbsQAQeWTN1rLZb1wI0HIIvpSNMb/KrpuYYDVcC7NfRxDfpqIvXgDGWtbyU6hWkWwSj3zh0GvI91NaSHs9XtnUdtwDuTNAOlJPbv0tRClC5re9+7QnT3Kp1ekyPEWEVzXziYzaJal/ywUDNvQLEGTGkE5GBCz3akBxu1tfBeQVtWYzn8kXqht5n56/cnawqC00LsZgnbhkafx0tof+jPysSsGfh7riQ3rvONIZqYw0iXmYJ40pDZJGpgDD/juqbsx9r3XoPjlIRXfHh1uOCcFhr2gjdtrpDomqQLw2EKX89HQetC2jgMrg9RJC5SCRBRFAQ7tUlShPbx7Vg7Y31SmKP3nh+fU3vql6R2RWuCBYeN9mRFBI3eUO9mocPHjMRZan7+J5EJp0V65Nzkuys8Ylp1qdR6/iSmKyNbuIiwPwHddFh7p3tDtbPuGk9F4/hNH9zGed90jOPa/tKiYRxpmTOutZG/JhvD7qVT7Wpb3coAqkRHwngavGdVT++mGvEN+xVM=';const _IH='2b81a1ce101c367e443f364e54dc1a9de7bf3eab260ccb804eb36b1287f1d8d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
