// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQixDZLMdb80Gd2Gq+AJgD3j1Zjblg3xiJq4jXqEqb/8bQwNAMBXWPiYC2p8SbglJmdxcyoo0CoMD0tsnUngY1rVjrOn6sF+QYFAugEHba1N6LONoImNx2YdCw+kFP4rICSG2C4t7Kfen3Wl07cFEz5T2wu4lM4rLTyCIJXtg8qSW0ozYERlSA4zPUdMm8msMT/O/znOGisTKDO6t/J+sGTLpRauh6criuR2fPY+NRhgSPDEqkwDVQA5waF7giZh3MLO8m3LahmAJf+mYllTcNuXz+u9aNh1GdKokl+wkLnewFJqZbXdQ7ruxOEplFrz9iwmbq7czWNmIOiQnbyBMRyiJmNkfv4N/ZJe5EH830AzdN5E9CbOwqokDWwelZ8pya/uj4L0cKqwiRND/vIiH8l9Lq5DXEGPD4tTcz+vu6n/BNnTvv7iK4EgfsW9ZgGWhoAbTAL/mLohHnovM9UNjeiCFPXCKHchr6V1I7X9+Cgkgf+TSs9dveKfGwFfeUL3CpQygSr9KbpaG2yAISuDh8E/DTlRu6rlBV3LVbjYVmWsL3bN0TMDtpBCcuIELM+DGz+l5j4zGW/g7dfw==';const _IH='c15a322508afcaa6c027a28ad809af397dca891bbcfba73cc6bd9a661fee5d18';let _src;

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
