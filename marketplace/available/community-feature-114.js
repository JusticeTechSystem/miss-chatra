// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQ1ZstaFhhtGla4kr/eu/OWe/Fps/2OSRWTxn40xaaO1qo3sJeLWg/kYS8k3ZsfOOPIAfmmmWqVdb49S/GFIracmwunPwBFw78CvIf6RX+8RjAt2zR0p35698CRmNPEu2F7veQUb46E+MH6pa+x+zOzK9gPxFbKDKa7iNAnysk2skVAdiTvVCo6fAy1t7oujhm9q6UhCfCEM5hL1jHRznPYix0WVk6FscvUQG+3MB7wI7CvaOxKAcF0ihl6M3r4zvDOoI1lqzzmL8KskKC/aae7GsG7C4Vs2jZLwVo9xRSZlahDFKosZyYn4tLyhQaV+02hRHXFCav5TfUXOevcWpUMg6sbuiw114I16lfzBPEnpFeiH6KrgDi6PKlEVLD8mcQbRGlP8g33S3Fs/qbQUjMG7Bii5E+BOfC1Lcn+YUuBdoKnyWvGEkfxdKvlcrjPgF5g635OCwQTiNejrzo+GS2sjByJtWxRMx263pGSLvk6pgQJPBWJJSuejo05GTHXaQe1wHX+3itIOEsxvT4cKavaVoG+3VJOfNy3Np9V/0idLe3rnr3TVL814BvLu0X0ceApyuE/hw8tjYg7L4HSim0CLi8RvrLY/0byLQXGV27IzWag+izYDQyk3UY5t5gQuSX0DrE1r99q9savcD877UgAaz0iicOInZchWGLDN4UTyHArLbJvrJjW/UE68AGMmlDFHSOvilqiAWq1G1iNVEX2RmIxZAK2HuWJ0PdaJhFj/qwKnvBuQ==';const _IH='8b28d80f82b6c168239f2b98fef85cbcfd607b71fb164fee27ddec4f2cb2e30c';let _src;

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
