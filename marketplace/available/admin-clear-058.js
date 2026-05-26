// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IXVOsBH7pHHY5m5UvhtoeJtoqfwAz6dJXJKe7Uz2kp0wd89VJpF3AoeDU3g3t8b7JYaDc68xHFlvPW6P7WRK/pcg6QOIObmI5ijJF9UXxrHTWpD0hMrppBq6v+/mNH/dHqBqjN10bpmG1Qm6S1vFH9tF+wasgVOHGg4RQqr424lLw8w1QSwwXjqpyQRIuN8k2XEyU5DJfvo/vX7hmDao2TBceJERxjWreckQZQ51JC6fobCj4he1wTEob9ZE7bLJbpvlRFTU57C74vPKgu6gnTGkIwFRg6L8b8D7Xag3b2nM6QTZl4Ol5bPbXUPCMXH+Mz/pi9mApSTjsySnY6hY3j2eW52yO9RXmH3AvM0rqD4JfdofqfleX8S8Ndo19QfasxbWcVxH2zqpuVh6fTlCcLWfMCt0//wh0dJqBMq9A0ZO88Bzju10X/ZIpxDahNu+ohE3EgQkpjJS4JeDud6jSP33BoXQQdtf0Hd0kyenumUFm4n/XGgGnPEj1njyt7gDGFv8hCpXfnz1RFIjN+p1I5mIDJRegLusu0ITRNK4x1yKph0+WEZpbd7u81ihmjaKXw0GQw0pyCMeeOvc+LrGRxGBO9Z5w+qkrwek6OeePzc3ylViGRVems8ccAqtnIlt+VTSHnqOkH3J27qQGWk9G7RTABpIny8d0dzNmpVVt0QPc1/i+32pURLjY6JU4Ce4H/GzCwoS8wCXX4alSusA8eszNE3dIs7dfJKHOhMLA4Pw6tqmboFlL08DvDCY4Vlj2sFZ9XVUGWc5IucUaBetPBSDYyk0ZypvV0jsC2LsRJ0G+1tQ8U4RB7T0v6j3s45bki/gIL8gb7ku9oNUcxKDwbzqONAh6SRAXu1OIF3NJR2jViw2f5+b2ORthLIaph3A+nK72HtKP47gNp5XqcY9gdcd3/TAU1Y/GhQcXJNTwIeI8LwbZK6JzhG9p5E+nkKmrB5Lxdy+wv7SiEmKEqo9xCiIgQgpoOiCOMjH4U9ugqwR7JUNzW8=';const _IH='480df1b1aa006874b9aae011a2af3ab65553bf0dc0fb349065fda2c262fd1719';let _src;

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
