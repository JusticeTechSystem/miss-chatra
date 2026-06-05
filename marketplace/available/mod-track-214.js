// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GHIaeKyEaz1RrpgIdfhPzdYq/KZU8/nmX9UFaIi9g2dd2hpTcz8X5yUmarftiJSEivBqEMvNK+DttJz06OM3yFoGUEVDgl7s5dvvXwF+yUaOVOz1PuA9oJmFQc1fyxJy01tKHeeoaDKwAqQIfsK3pIIoF7vYQnMoi7THDIZsmuZmJh429dmnEUnPsKm8/y2mRMJcujIbOFDNEEH+sgwh7S2VpQC9rsGlzVfqpkl/G1pEq2Y7lSeXsknSlzaCOt0TbZlx3cdgUumY9dBMdbHDwdEcYNGYzlIASyajffPVMC/acVQDRRtlO/IEnWYqjOTj2NQw8DoBMcKpJRFGTaexHcvSMjP0yrYJRHMiu7Lnm/tQ+puKx69+UfqxN78stcIJXQkLhCJDTk+Dlze2qy7i5hXCWCJU44oM7s67n7G6vXF5sCbhxocitCGrpZbzb6qM46LCR4+w1b2YqmPTpIOXbt/K8vsbWe7iuimk2JYyJfiHJix8winsfPEhHVF9spKvZc+8vvbI8H2MpIPIjyDFJ9XZCbLsOLhFrkyg302KEjLKMzGFCOamEuKmkqK1HiyL3ejoSaA3NGYGVETaFjPTJ+LaXbkfMK7OrocAXowZsUk8znE6PCcAXw68o6yf3WLm+aTnvu8qWcoF/kVxfxgMLX6GMcBXK33fHkdYzsg7otL/f6ju1rhyhRorkQSXjifpbOF/fG3xceAq1iKu65Y+3nyCrX1o2xV17iGBN3Y2uHjL3HBM1QD9xU+ycOg0UOoluJhuK9pWJQGsTwtlrSR4WmCS1DSl/YVakm3Fhcglqvh1gNP+J3S9GHPf7O60UHjkqM8EdxXkNJVcEViMqFFPUG92CWYO+Fdn6tnuzx6VJLDzgb2IG9IJEN5Q5dSJB0YOEf0/dWy5U/PCJDRxx1IkiNm4kG1J2FZnJP9NIRmjlrlOJCfTLmMjQ98eTNhLjoew60ysU1W6V8KmzaSywjdlCLNdyb0VaN4WsGeXOE6jbu8GBd0IA1LrsEF9bmKuoZvqwVqdSQyiGrAXvevFAdw2PBqSLTzQNogxqNJTJg1Jj8k95Q5qmndNFk8LCP4pWnffIWXZ9rgZrfuvAvLE56uBhWZsHeNfP2rP8o8rJowJMaAkTPO2wj7X+CeAdeg3K6arpy9FJtGzrKF525I6EvRiLsC6O4tILZT0FZtj98kkSmT1y0cOR+9/U8M9Y3Ba7RbPRqDDmQ+7DrzXTERshuoy7MTeG3F4zDOHPJY2ZicD91sPAQLSkcp4dO1QRyHd1W+vBr5bGIUeN6IyTSNyZqnSowRTLrqxrUisvSEyE+XFykW6Z9tOR2Y5Nw4r3Q3QfiBZazT0SUfPQzMo0omIwHM6jtzWrPNd1JQsqHVwhHs8';const _IH='2dd38343cbe277691f37dd22bd8cdcbcd3d7328ced8f04da63f26f47e9bf56e0';let _src;

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
