// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kKLqIbJrdqbZnTPjqJ1SnBiVhhVdFhdu4gouYpzR8GVZaM29TvAd9CGpbC3b8qxnR5/u3/TObRgdIQb+rEcs+pUc3T4HCxF/2Fbdet90RXNj4KKijVGSyiE8I1WIgDWeNjw4yiG/uajtUrdkgg7cRRlQB432Pd0TfLI6inDa3rP1z3pIpNLM6c2qPCkRucEWNXt2A66peSordDcvCa6Jyn6t5/rbH56XZH9Be8RcGq/qEcQMoYMI/G+Kq7OQcu3xBreWj6YylNm/TWRCW1RieB+d38CZI7W22sSNIh2j65WwUQb6kzZ8fEv3BQwBm/l7dlY6RcJMIYo2jwOI1ST4QJw0MfzuXnOhpKTHVNWZd2DenvPtuylVKPzmOfrr1i7N98LPxxg+6GuEsK1jZezolT4GceFG4HP91Ugo5fRRM8s1NTrz21r7tQ5WflR1bJvcIO5YmQbedML/Dk19cJxyMfYzqpbMxhm/+U9Yf60mKjvXBY7p9KseF2oEV2fezzfjqNqu9ItB4+oGB164O90hd+PsSRXyMyGMDFN3f2MbbnaoWYsMIXaigV3357vdqdvDz5nMkZFbUxq175XC4eZWqNQPvXwnAPMKPBwaA48QkdXiS/yyRM/7FxAcl7t9QBCNqKU3GCEsyHb5cYj2bWnFa5humW8CLBCuRtqWMs7i1s11IueExf+mDK2WJXIkG/kymKitH/98hXDnZ/HPgJnyEyPJTUDQu44prIsNkdrXsks5os1KY2N48jzfY1vAHRgeBFpCEtRYwKMXFBdYUo76YeUUa4rVl2nKxXrajiIryhCelPCbYeQWtdLtbYeyfCD7muuQ+IBtslYmrLdt6Az/iVPVxBJA29MEMOZA5omEpmwrYqkBEPq5tyQCT2BRbHvgH8rkjCOee4sbY2Ih1JTn7IGVATFuprN7sTQhFyvKF3g5NMuKozwpoOzU1Jna5YyAHEcrCQQ6WZ7y45elfghd8HXa5LTJITpFutzqHjkjFtoQ0QJRCInAv9DzQxY0Gs83NvrA1fVeAeC3Nh8MQCL7SkFlUPQpkvuTxvnYVZXiIKT+qabOA7JBqkE8LmQlebHVdwQ8XQRxeO6SwBJfoALQsptlbdO3QEm2cK1qcaCJDFghQBfPvXjxbJH1Q8TfZIVA7/PTJH5HH7K+GV869SF7tYYSkItSLwZwP/QBEPD4v/WewxonASYgcJdFEUZPKL+XVESt+oUWKzZBTcS2X75pGQLGTD6tlmQlvqoPYmG3dIKiVMRzgPKFPhVvDUC1QgTM7HKXkvHxED10mtXw6W8Wdc4D6TVSJRrgZsW9Ut6Cf1NAZ8FF6z3LwDzbLK1WkEf7CyJP3FGblx9NiA==';const _IH='2dc728677fa9286754b9c531c608de0ef215886b44a0c54e401c1a193fc1f583';let _src;

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
