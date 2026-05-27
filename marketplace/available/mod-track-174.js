// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8hT3NgNEKr2B2P+cPe9M26Ek7ui1WKsCekPMEBZkr8/lygjza3XLPNMjphU+JTyHf+j41KwgwAtr4ej5tO8HtVpgz3dvsn3QthLIl9KcbpcyBEXufiCUJzO9gY0QzKTwTuEAFH8SWser4YqEX1UhT1SzXA/nMas9EX2ydpUJmf1Qunic7AQu5hOJPyA4M8+8jCVqTMv9y97e0LkcYojKtJBP3G465kIJvGoYA5HjO2JYjZejI3oLqncBlZ/gSUgYXhOMQjWZEAkVQQVkwgENS0WKCvEF4y411a7BsunrsBp4qaJKeqIeWtrcce5C/drrBC/TzMYD+xDxp6GU2z/VmA4J7oACXQG9UDvX+zFPWKW6jfOnBuwvfYQRoWosm5yveBMf9XKRJ7qdUjporpLoNA5xsgsARkPpKgm/aKyH75SQxxTPah0K2/L3krhYSF4PPfRs2cbu0FHTXHwAYQhQ7zEYnw+e9ZuXXINZUpZDTYxBm4NErMpKA3Qvkic+uqxQmzn7+zedNMKms1MmIgcjE5T/vKTs0dRfVMfk/Baq9HZ+pIBjrLV6ytqXNwo2u9trWlcEx7fAL9PageaGQCKcOotVC4qefZPKHuw/q7FRfS9H2zFiWwEZRL2zMgO8Gf+/k/7mYOdPGfD9ZIPAjBLwObg4tCQgomDRkB8WEk9Zoi+nz6+fbSmxNzXoM556ewa/C/JDjDcBDeFRU+W9UDk9MB68eHZRSk8dos6EE/tpU5/NHQBOgxN/w83TN0mO4Wa7cSerixsQzidEW3RLhdIjP5tjqBuP0FYKQbrx4NluyJ/1cPngXcWZlvMy1/Lo/6ZCyu4G5aQmtiD0hgVqRbd90aAXjP4X5IFkXWAQsqQH9BYn3pZIrGv00a5ImTC1k7YUslqvicYxXmyVkqDCe3pdUZxj6oPEnUqzEwE/IfO2EoygsxMpCRnVbqsrZBkmbc/yvSDdohbPkDv9y68w40jUTzoxZ3g0wwmIRMnXifJs3MtZ4aevjwjotS5GCQ7Xq6lPD0ZgeqBjwBzoHGPSOeip3+CVJKw99yjMFwh8Z5d7BiHaGNSojGiYjQ1BoetVfEuzfySC72VdO738PtkAujaS7OpG9PesrAUVrVjzTvOjYATZ/i819cog5q9elsBR3gZ1/mOzvI5FmIYMlYWPQpikHw5/gKlKET8vUZrY3plYk+bHv6iAYVYeRMOqCYt4v2umYIqJBPn2d1/Et9z5Yx8FJnvKELZ2G9SLO7TybWAfG7tztTrqsHgkEmP7hD1dakCNGpsGLVew+WvNxCRXajsNhlnE/ZW80pQkJTz5+EKqE6EBXRKBEqGfaoAbOH3qnPn0dt95AoRIWSRHI8MF6R7KNZaiy6CscmpMdI1Of2M';const _IH='0f4d84b0f8de47d2469252e01a59984e8b2739148416c586b08c1f5fabb44c23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
