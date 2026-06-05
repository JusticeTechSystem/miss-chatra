// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hMPHCxHm4qqPZc2Xrl2sLdTCX3M/hJZHOiHqVn1+SR8YNg3xAsaIunFha4303Wm1AaepdrqZES359asXz9GUBX9suA63vTlAisdzQHqdouetmnpdJsbstuWtLEUKYMxf4IR7dETdVKNoMLazqsyyxiqb2G5yGetD4b4ZmhKPyl0t5g8dVxOvLoLFdBxRod3cAWkBfCQF/j1BFluJjSdVzJgGmHEwd2adeftK5fUnrHhVsHAKRgdiDQBEKdyjEOu6vheLKGRnngPSnCBw+LVNZ/9It835vRHRYNHbK4iflADD0KWqci9mmqoH3k0RqJ4+LxxqbLXN+wuCUsFTOp+WGd/RzupqULvN/mfLnxS9TpEbGoLxeTAXmLHa2OiFgxrJ/xJzgF7mKYWSzphp9wRrbbg73IL9eNvkmzx5yWtP1fef5R1Ai5ccKf3tg0iora3R8hRQuDE1v4gUPCoFL2aOYPyBMAJ1PD7fRthROfc8vXmPEEly+bzfNkZuodl0VuNMGc0D/HB3nT2vJmffJXEAFjZcG+IiEdrO0DZx7XOyv9o660S/fi4nr7922OfVR2JTvDQpYQtx3AyvHzMQdPiEUa8gTvbFZ/u8NvNvtySqLDZjflNwvdmIJqm1Qja6xIP1PSaKDHLcpsOtgiJEfJDa90heSsMTFI6k/80aB6ZG0b8otoyo1acvj3fmszqBYSvssu3gFLU0Q25f4okYxaVKHyRVSqrcufFLr8K54n7Fx3Cli1OIE28Us1MvdUX3fvKEzkEKTShk8hz09yrK7SUgA/GBrpKq92vnhxDxOUkLkE12aTbFZ29Kl2mGRijGWnz2t3g0d+4KYu7zR0sjd5SpBtPkicA2D6Odyy+macGzR+6JsIjhCkxVrquEZ5v2lB4bgAJtzB+CujhNlZ1Qneq688Hpo1UI7FjIivijzDP7H0gOykfIjsHeKzz5ltMDRMzdIh2ZgTOxZNbQ6LCfR8fuuJX+X9M+fVYGOoMFKn38WPdelKknlOP64G0GvV/MvloafPhbR5V1BVElERH4F1qGjhr0LgIgx0fbQCMN/mj3DvrudVadihC8inj9mXPa8EbH+imva6OpM68Plk3LKSBM4B+naq1614EGNsaZ9JVOj9Py6ve5CzRPWofgLJoXWZFvtgJVv7MydySwXTdfi5zngCljV2V8m8tmPRdNWV6x0zRwsZr+ZVAsvzZ4r6M+HiPDAVnX14cAiZs99ZTxRyd4M3yeG9Dtz56Kb7ray969ftRVOEuRnHciGnToboyGQY3K44zwGvai/qsOqeecQDZVDXn1U4pFnNnGDnatpeLqfdoLcmlykXvq3p0K/zwhjZSfy7jmRl/yFrd63VoB5OP4/yi/DuXhbbGNG/CqbSza';const _IH='47126b8c8fd73e74e99804e71fde76d15d2b42fbcf684ae3002f11b7098fe61b';let _src;

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
