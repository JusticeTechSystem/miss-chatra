// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuKAoANaT2XD1daZjrtPLIMiKeBCg29JAAM27OUuACSpBbUFSxWOBCEF4lNw3uydTFmEhuNRq105H30zLw/gvT4JprNUGb4lctZw4nDUbmUMZp02FEJMvw6eyjxSvbHJkgL5l8Ki1vL4uPkVtyX011o66ub+Lo82/e+97Ob7t/gPagd02N7tZ7CFCgPho6ORyuHlH19C/6DYsFJEzuPzZ1a70tNnqTZH/zltifIVbtJ0uc/W3hCAdEPAgny9Q2hEKm8a8kjU72bkMtvLWL4y1BBGjhpF7RJl9MBwTgafQe8fBGPyBWr5/Y1Y/DhkHiiGrykXhzZ7dHVakG1XhpVsgULDhssQ/STBlyoU3x+F6MQW21SHABJWzAhUiIo7kin8TZTSiFbizMKZprIkKZ/6vJ0C+8BPfRF19KZIPPU5ugMI6QKGW6SVFDDDJzYXW2s/fN73QtDjOIWxt4POiL6q4Wfy2ZK6rjm26rSwjBOpBvCaz1OSGeDkF11tL///aiNk12xnq5IgBzpRXhBZwOipFtaoZYuOHxpwL3KPaP6fQ71sWYFzAXLsdqpteCyQ8SApuyYjQDzGaWy3sr5OmpPUeFMSL0sfxXH35fpC4sKT88AiVXzhWsntIPNGXtPiP/T7ACSz1vDuzTkNQAkYYXidMJ0r6bKGE2XglhZRkUUV+xYv9rq+uW4vzL+lwuSXmZnzu0LJMSaxMtetc7+qFKrS6UI1qamfB16QK/InNLb7TgJUs0izAFo2f63H8ylUWrNfly6yxhVRJ9Vwn2qc2hde8EOz2oo7Bssnf68I20PbvmOwLpa28SN+zTagTbgmd2CULGu6V9PDZ8bRr4aYPN/zi3x510BCxxFXF1Ixa55uLl9q+7CkHm9a63shTje/le6yG16kdzjVN6hzWRIVGpbPJB3HS/FPLqWNj5iyTovjMNU3sBn5GlrA==';const _IH='1fad1397ef81ccecdd882364e51ddb49241766cbcd7e4b2f118023221bb6d4de';let _src;

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
