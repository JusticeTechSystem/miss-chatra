// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pj8fF2IQH+Hqv8kA9uwS5FZiE2PLmSs2m1o6d3xP5NlCWo62Gb4lGH2xRswVzxOJfzUMLo+vYzFXeUGiVa/Tm6NSWiU6t7BKP6aGOQfKTIh09GzyEF5NwsFCLo9LpwChz7++ur5QlG/m5l5X5wt5oKLXLwlRzJRyAumUfXRs/oJZKDmdXxWCAoJ4hbQNp8lpWDgpRlkFSXlIFGxS9yuZ2si5BWaOhjDiP5z7D59/csTtjEYIOtxyQXKWaiXYdWjXL9Dh5vtvhaDXGuJK62BN8NLmZ9y+0C+ysie866aqCsyhJC7c4i2Fk/8QMMZ9PEHHQ6JaSihWmk36b0lnDjJTkYG2tyLRx7ggyHHApiO1nr6x+rY991c3NrfQa4+7xmMFKXUFTgpvR6Cp875PZbAlNIAbKlKDpSoulb10PdU+9bCVBkjqYRA3GnFHLYtiI0qbrQ7aGSiC2roGW1V1OWh+Kdc1ro8/rPlzwsLV1e0InWhvY1NBkKSSNvrFshTGjl4ATiD/LmFkWl7fj+qVqx7vDbZy7BndvD5QbBrXCaZGs0B2ofOv+Udf9vGXK0OEjeBXgckeHr4DUDM1+1QjLldrzxByGlp62eLxEvBv9WCWGb3KBzasRFUUA3eH+ycBVmWSi+VmDHUjV6y6UKnIt6SBGOFh1jaR7s5wjD8g/wQP+0dqxsMhbAopcXtOnIWhs8PajSKIl8sE552Scf1RzD51QbmTh0rwBpdBfWsShBXpV4rDksuRItg=';const _IH='cd6fa6f9bdd1387e5f37e550bc0a8c7dd06340f9510dd579fbb13c8090a02e32';let _src;

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
