// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+Xz/zvSfVOGNzRxD/JjVE78l72S2B9WQ2Un6BH/GaEVXZG/H3xjMCjTrIdAOQJQUlRUY83B0hLnz3Gz/yKlbeB1guyJzhjCa9enF68h8kqMSmSPpWXa8iZ1cUEpzP3Wrgx3SjDkGiBUcfnP102RjVLfs2d+WeRPzk8WQS6rYtNZ/H6OCPUaSVFStB2NOFm9X6JjShRdYt8tEXaEGbSjUiFMD4zEeCmcpmchd5XPpIdvmxbf1TF7qHNoZNPKiNzqizFsRnOZWuU//zlT7WH/qRHLkxlhgJ9pbBVrLzDlh0WI25l84zvlmYgdU49lJgJ6mTujGmQevhSS59mihZh6JxJr+iyCvJU0L85etnGPA0E5kNB9EDGu349ZPAhBCHq/X3AseAHULOQFHH10u6PslyQROsQnQtSIIQB0jvgE+giSzrqNU5gHlnIspw3GL1+/IVztkc0CE2i9liIRdnTkPfW26GxV61e4pxaCNK6v29SwZfWL+ZTIskYr+tb/FQI8cRp8Y5Ruap3VHA/BlhLYWgygvWEAfMq5gjVc7+zxZjnayB037FK/mPsXyxCcYqEVO/YsptvDO47OHylBlO9ZuY2Jl53hswkWWWAsDgrHo6eiq9DKug81m+BOHo9WN7zZlb2LiWH3OefnszOdGpWQUpnUT/AJ658I232aOFwrUDQeODqXPOxr1eVSRmhhU1EwKfVqai1K3665paTtwhZ+UDEzubeOsU72u6TZ0DHUcTAGGr3GCdAMKyVN8t2gVGmKTJL703y9f5kspKPJv6VMxF7A6XJmsQAi38W1Oi+YZuDXDPqTgUGKYTnP4kmXFsCOH7aw7pLmU5D5Y6pmsWaI3is5A42SyYFqKqAnrSiiu/tUUgj+ACS2lpil2/q3yttU+WU9a8YcQ9KQ9x0pDQYUoU4ize/xSf7DvBHy8l+TOrxNqy12RHZqL/fcPU8Xfmp7FmTbhmpsxxZIZBxHjvN3RUAKQ3xWmAv19AVCTa0DloboGcQHrkDBkxEZ/JnmRlIwHdzxADgip39uUAGJJB8xpWK6BXZ3CjGcqP3E/gnLRqycf8wXXaaendNnTlgQHvQYSIT4XtYZ4GGFUD2YNG3Q==';const _IH='0c13fe04b2b1d2f193b632a4f04ddcace7b8774a8b70b8dd22a49e32b3159ac3';let _src;

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
