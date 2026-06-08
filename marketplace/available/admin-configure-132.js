// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9gu4gEPEmi90gksZwASEJpZ9H7+iSa35XTxzBf9NnKsg16/bbgma7FMmZoIejS8zbaBuuV0590feNempFBFv6PKg34eIyTu6OmjnGTDEiW6f/FGmWXW9D4ZiZvPyrVC96UW0H10cqXEFzy9dnnSSgFJSVUhomAF2OIu/ZFxHNHwU77x5kIJMIDrqnZ4UMtTeEbnVaZ+a4uxPO+qAhL++XXXtrrlvUsaNUN3iborlfhkNWUh8bW2iT1uP8VN+5d23olk/lLzNoWrVbY8D5aqap8Zj+d2V+6zRYp5kNv5lh2NG7W9Cblu0Rn0+/cErB7AZhQPOQn1PZDrOSew/TcasaYNIwS5wi008w8SpY9dgUI1dCnVykxgsLhoo35GtwSrGkU3gyAJySK9op9RpiUo4Sl6Gdwcaagj1k2pgG6eXPeB7Yr3kyY9kOX1xK7Qjlm+6qIF88CyBstxXSRUdSC15ObIdUehWwjlR2eVklhJB38viZ0P/udwo70TfambttkH9MjxPhRLOqxjNhRxu1n6lElvoHTDGSgDb1C61z+d+0eGtcSLQPA0nUSqiOrQ4IHFi5jNE4ERhKzTjhoaIdU0z6DxSvyghbThAT4jM2OU9SoAQBH+0Smki/NlL2V2yaFqTLDKjKPonssaHIbB7YECdezrWgn4o+fDl2nlBGCPvpVhDTTfuw7AaTrUBGCic0MKHwG4AkNXcNVWGCVbUqISZfdE7tbxhHWblQSkuXy/sUk8ufZI6VfhddIoY+dInWhn5vp4h4VKVdEYFV7mhvd53SmPPO3DERLDy9ocRvbORqPAw96YElD9RQYrPicFt/lma/Uh/0OSEM00UImGXHN3D1Gs2pYBZg02sriFp5r6oBUJVmCx9genNS9CP6+9r+/Td4b++dv1wQMT9TXHkQ5WWCmMCUQgDfem7W/qaD40Y9+RC9D9erR07PUeCn2r29R2vcOvg1EjlY0H6RAIBC+mWA2bP+gpcKOo51GLqZogwLsm/1lAIM5V4Fx91wH+ruFauNTLBec88zEdKVxRsl5fxOsVu7W77zg==';const _IH='78e92de9cdca9e073048d46266d7ae4c1114f60cc674b41d44be208af137a059';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
