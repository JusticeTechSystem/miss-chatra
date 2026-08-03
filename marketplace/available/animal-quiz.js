// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTA9NNaJsTh5zjxeWGk0gvx/uy/ZwqoCYSklfYnvApqg9jN30+SCGjdu5gqpFiZW3m5DKZ2G31UF7mMEWcAR/9y+JZKGQCCJJa6Pw4xO2tAbDlfyBwNJPmgoyGmyZq+dWhO/1QK1AKcMpaeJNf+b0gcelYv56LLHIx2AZR5MXcTUvTBWlRrfsFbr80FYwml81EcTP/siDAnJOOLbLj+MKClbrTvvc3Jp/pPQC1YJ9VgBf8CQXGlqeD3b+4Iq5MK27wukBgjh0b/j2J0CDuMgb/uIO3j+NH4gMczjO+nK1YWQwJUuLI9r0oM9ZHADKau9KhuuPuNA8buNXWAuThR92H7qfmgLYmhieSe4nFpuZyzgFqe7+cNDvVFRrCqQXXcmumjPE/3vxxWa2f60yPQpQ7ubX1CifblsNfCZMIEEeRuEZH6yCqRTOGWAby0jhH+uGA+PJPfmuRchY+9P1aw38sRhXScDTPl4lHDO8pVflLDpoFEjN1WnglbeFI3gU0XxI+ykaK3X/6LKzlis+7LJbZS+MHsgK6Slhd3ye9tGW2Pw/2iGltnhlXT462vihRdJQ5lGNvhVd327ceiOy2SYogrNf2XXRPH7JAOe0K893SXj9iiAKUr/17RwApRIeoltIF1XKIoCWbI5I5qN5S3jrlf1RXML/aNOXCWc+CU0ofh8ezfrT9GlKK9n4SmgprP/zLVqtcF6tHRK97KwnNDCU4wqUpTVfFx8jlt8seQwb0gogEZtsq+mjUy7PT92sgdZubu0fwJbloKGPg5yD/4mHe0IQSdGTQjNrYr9Z8XxA0Q3Bjev4y1cS1NAfb6bwwX4fCz34IyTgqXsUPgpfWcwSWZ9NP2QldPUe3MKLhaIT3rYqIKzyHsCCapGsW/qFJJUMa1odv85tak+zAXPxh66vTWQC5Uf4rZtT83zVjL/WxuYZW8iNsIdgu0Gkiu9Tyk7Fmf/ctJerOpsmLuHiNC01s8qNg5McDXaECTaVBK43m6GcqVIH+XJngal0CFLxE/mQCc+EpN3ryWAjGEdXCbaQRPsylFynBvtU13KNgOVRuRZ8CS8sGJCDDTG79pP4znP1W2SjxefFztzAD9TBZdPrZcexddiYHz1eaMUYulK28G4M8mejNn91ZDeKxY80QkMzRdmMLj4rfacULXpVpxjQPv0gWscMGJyajLu35wLvChZa5rrLxfVfhRa70RgENVr3qQZcENNJHt9Cwac/Wq0DJOgk4AOaSm4HdIZoRja8Do0Gdc+Qkn8U6eAivBz/ov9ARLyUfK8olFA6SduSMpcOLjHw9owxdFEMCStho1WYVohTPuimshXZme3hLOixnWY2Dj1dqPHsznEN2KnTIevLWuJR08SGOv9vvOV/r28Ahnxzy+VQJVJznbWIuT4AXc28kqes8LsZwx/MjOOkxeSOmlhmC9uNDkJRzAoKsHovK+JshA3PGCRaangiJdi+5Qezj8jJ1B12VKR7+e/F18hX0xna8M6URVSlNU0vf7ApeP';const _IH='8bad76eb106e3094dbe97f01c3005a6a9f068fa0bd8b92a09acb43b57a744ba8';let _src;

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
