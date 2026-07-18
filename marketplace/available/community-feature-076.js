// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvBDP61wyOHn3gJXXdrpDwJbdGYxkHu8sgMYczzyD+42bC844nQ/vW0wCMrSn5ISZDD7ser/aybTNOLEcpJ9mnu04fj3c5hBamBODpsu9mbMClsoA4hpFHlrj5UqcmOS0jcRaWAnzKufcY+msvosbe4mHE294yxlQxZBpsF0qZJZ6VeT1YE9bnuGkBRS1DAUmTuoij9oKU0gJiX6OubW0qgWEpP/atjOdDP5+YetZ+4bcEoCPDn/9L3gndLZrojHMTa4On90SqE9tpNzlj+/SnNEf0EVBAZl4ccBPokIGS9wiomxsLSVZWlYxyF54mFslZ7CtGnMm2H17oBWGJzHfZzlJbUtvDf1g29eqN09xyMnNvQN1A/BOkQowWE1hsRCdCo0Ms/UilHoh5plq69WP5XN0M3Z5X4O2fF4rCg7IKYRFpMPYgUtMD5+xZpMnHJNxiaxZi5xBNvmT4nuCbAWd9eZFKxEVL1nTg0V1bsta4cLGHe8CziDXLdiP5dXgPAQAlxCmAtyM5ucI9vJgKydSi1IvNQESxGFH9LF/yP1OiRlQO/UhrpRdgcn3ZOI90mArkMS0T3RxLyJSnpq6UyYaEMdzVJt9LX0iCTlwXusPXnEIkJ8BqVMjurmM5z0HDFInZ3eCMsp4MNZ14DENOWvZMmIJBeNSrYC/D9clM5X0IsEAN+phxVulkn5gcYaKm0nW5nzrNUQAGWh0Pd2HEeQ56lqs1pA==';const _IH='c239b96d169120a1357101447c97d0dea95771de74c0d35b83fe107a7c718bf6';let _src;

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
