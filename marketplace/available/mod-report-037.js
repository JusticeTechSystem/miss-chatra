// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x8V02b2QQPESBpTJIMcFfZscwUc8csX60yoiycQVxsoevpZHmU5GVmGpBHJNUnj1fffPvSMLvqW5IlL9Y4gstJM9atkSfJUxNObQohPiKTSHEhDogHnRVocwFe5dBsYCmkIjGMf62YiD2cKuFaM6lvGfmbWSXloF21uXS+jLQDBXfkyTdIHfEg/AqM+8ieR5wCVp5WCJ/QnIuae5PdaR9hmgFSlxyXgiZFT9FMCsM29/KlnGQM13SPo2tMQRRQA/3q0wg01/AZN54EbseOYi6oBCnZik/DTe6hcG3Eq384rWbid3mVsw5N/o9fC/T3kUQZPD3p29/lEnjTdXCWXDBSCFjPesM0TPRvfURH9jdadwuBQFY2EiwY/OQjbuuSH2uphqXa3lExMlq0h13zn7xR3KO3nmM2Wv3jp94wLdrUW5WXa1Tu2Y+6Q7lQsPTMqLkyNdIyRjx3sTWyDV+ouzQgL8Jqa3fR2v2HOpxgBN+DkaIcEz8HhPikFs/zCP7Y/6dbIvoB79htD5h0V2CCV8AVYGzij9FyT4cir+q3cyf0eBOoqyxyzo6MTon74X9HHM+HfQM7cDXgwTA7ALdKYOKDi/ngKGLVJwv3BrJXan/42+k1md47GM488jZTi7lnm4AoxyygbdSI/tUbswqd46FvuQgxgtTcV5o9V1WQMdaRvuTKDEm+YfTVtbsXIDelXE0DNhlhE2KANZ6rJOh5F14BjGSDwvoWWRis2yTwQB0jyKb+m0UENU+pvrkNCxmoDEN76r1vQw3bfHoCwqB4JmDKLxT24KCCSoi75ViJs56I79ahjeO8uJv5XrzBQrgxkESpLlF9Jpfeg9dw2bx+BG4iPgmRerOrPR5nv/XELMdJfDw9SrP/p/F//dCcrECn+JgbuwjSSn8GM4Tjuwc3UtPw5LGVPd+JJ2H6SuP6SR9VztaB/Khhiyl0K1M1Yw+EXDm417necHlQUbDw6ft2/qdcvaFuxfXCCXS4FY07xYSXAXCD+8BMFoinm5rJOLKF733K2zp7+FMTfaymi0Xd8vLwagaH7AK4k2V+EZ6tExGAiA2CvZztgKnO3CFuux9NDg/GvFaUezNbqINf2n8SXkOd6g2HjWn8eSzToKJzYXKUfP5gXbrG5OvhkOlFvCVZYe38/VV+/GC/MgYHgw6uVjJfM+6vQKGIeos1T7NInyYFozOPi49b6+9GA/S5DN+FPoctug7XQTSwYVvee++sbsMs01wqfN0jgRJiQinRIXMI9GntQDkUR5ESghBCHzTkbLOsulsa9+akukZqryTZyqogyrLQy2Ss8cZmRSB+6tQQPDrTLHPBDCVHEourvuMGXUKEER/+zxiMOQxLj9QUlq89ymITZ/DERlE6H9YgsCbZnsT5g=';const _IH='b774886a513194fc44f49e62715a0c51403eb572d0c8d1159317c471e7c50ac5';let _src;

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
