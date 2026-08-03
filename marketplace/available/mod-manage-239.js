// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9HrmVD9UyFCMMfKXhMfrbGAShkCOS1e0E1iytwmpF1xx4ZRAz55NWIspTLuBogN3fO3Dfo84q6niiMeAB04Rn3YHieDTSEL9B6KHnx7kANU0SdQnKLHH5iqz7azGLw2fTyVqL8fvJdyJnfHbTnn0tfttRrd+Kkne2uwI9Bo+RT5sl/wXAeKjVkN/jaUebiSE7xRCW7Zf7X+3ZjMWyYyzic8tzcJ0knj8CS4jCE087/vNJFuUul+xyoWx0IDxS7Ru890tGbK26KWhMaNGcd+67+dzSzmTJ5VygnWCFRq/mdxMcu0JZkUge0nRQp+MWs2zDQ4IG0mvgxtC4Jv6rsapsrL2PFzMvckZaFadcLsz7suVV1S4ml/sb9uP5dxSeA8Kc3RbQi9uYm2LKo6HtMkXNnhxcCPn5Hk4K/nvh0Qg4RJyYzGjo5kaX4ke+1o8jDAtj5JkqGUxN8hWV1Sah5bx+eA/yU+prujFjO7T3LlSuOsygINBdWAN26MzYxJ1daSG/arFbD5LaYR292NII9KRiu3ifXDav/7U0muE89IeCWhKGViNXmVHhlm36Lkb1C8U1HUeafxe4v8RO0Rd4/sEP0bTa61h4HK8UApj9XSMRDa5Gebs+Bc2ZSHQnUfndIGFqrYxB1hcsITlrDGNhGN2FixGwVIvNxltZhBInlyAQ/2K+njAtWgRidDXUkDd+RpHjxvYocC+CMkmxJAJXpk2qEFAHw5kK4ErTBMkGAclHrkKAyi1k1xKxJSLzCdjAXsq2YxaZ3VyfHz3NnGafELBj0r4Gz4MgQaa5lTtWqmPNN46Wtn2jDghUNzcuIe0qgG8YBCLCXfDgk0iCbf9KobdtW7IS3EuMrOkZh2eu5YdN1/YjvH9B0ZvaE3rK8iAkaXS24v8bkF2VWHlxGlHzSZt5T7FNCJrKahD6CfL+q81duiJ16dwTorwy8usdRoRHS8AylOu9cql3PlMKdYQgbfR/jnSFHCyJaNNWuoFYTYmjKuNTQFbeUAYOuGtICZMMwBoM+0R/2Wv2wclV1LOo26v8M3at09vVOSHPuyocmzkguUPuprmhMScBTD/YaSbdrpXZaC247key7V26CDI1Eh+/52Yt7weqsdyJVI9AEdEjUX/LX7vFIuqzTFp5/Xi665xD+WbRbyvf6O2TDYthI4SmP2AYFJ/YRGWyQq21Yk3qIOwemd6Ulwc7s+AO3q/vj+xjoJyTgP0D3qEqjxQuP69j/A117xJoXilxD6SehTnBpvbHKzRljCJgNLQSgmxLjLPwvGSfOmaaXK148uHcCkIaHl9xplaPwGSg4cZBm1XNeBSra+r9WxPQAxVNY6asuqaweUBo8laJ5tH9+WN3nmBq3mshHP5GWJkfxnJfuu//gI+0uB+4';const _IH='c14f1c6035fcdc1ce066ac4473adc0e3a0173f805d61dad358d9f03683abdba7';let _src;

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
