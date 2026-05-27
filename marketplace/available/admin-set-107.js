// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7lVrTpepXLm8/EckgdjEfp/STNjIA1ksYYkBeGv3e1Grn58kv8nAsdWZBEB3/NBDgyETMkWscdnLKYjSPCsBhE+SWFOfYb7gk4g0Bxt5jlSsNwwQ6Cg7iFy4xoKrQ9hWkjOUR+3Ic6kp1gWZAJu10Axeq9LDiGPHKbi8kjemUgdoyrCLhjJdNuD9yjA//aWQAsIPX5HLNwsxwPWKQU7cavqZqTz87ifTsN5SDfUi2ucnzY0i+crzuIXPlFCGu7uso3H8zaXW3CGKqGklksrlKh0Z1IqLqpBg9fXpPg4YbZOTkYdZdMxk0FaQcg+3NG0UpHTAzjjABbMjr/LKIhLj3lzmW0z+/7IKOqIvX0W++3VcKI5JTfiN8Jf62do/Npdds3hGf8i8ZmdofECVEq2jnwuJQeQ4pP79e0M+7tZ1q71dksLa1SAd0/w6RaP+cb7LqMBp3vSsiRFxfxnzLavD8n5shMqYlgMW8YenpDuR2EXYn66PJN2O221/G1TBqKpP3Kf3QjIC3PR7lA5WDrZy1gs3Ni7LDwEJ/zwE97rLIxc89RPuGhFm2wN17xySMGj8u3yGP93BnRSO8dSNoxqOv3bkB8raHUP4d21cWiukpIeyNvU4+Z7wEt8u14wET1UL7bMzdtXBwA/hd9yAWF9cFyH+wQRpNO+k+kZ9FYxXuehfc5fj4qOb6xhut+lGV6gK7ynkiFW3/8PdP5Lpg2AMWA+R125nuQoNCAKQDUrITwmBwogNzt1xMvRIvN7U/AQ17eatCRcfdoX65Sxt2cdf5OqFHzSPsENPC5JwSKm+buC1ps7cEoaqm5Rorpz+qbAy44ccU62Wxb2/JGHE86OneUUAeJmdmVthOnXL8yzKNrxjw+HVZexJrZwRKmbOrtbJsYS1gwBwGMALoi/vLwG/YAmV5tvUKqeXEn2Nb9eQ7TGPkUqimETj0GKHYD/EHCjjLRSO5VR6PL/emonvsm/RdL5YqJVsbY2yh+E40Q==';const _IH='5f20808b5246014755f56fe248cf994d4859105e803c4cadb770848d63f32184';let _src;

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
