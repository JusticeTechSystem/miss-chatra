// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOijuzpeRU7UIAdEXCDpOBumT4h54xsR08EHvburQd1wBoNy458/eJ5bMWJf04tYAd/7r0jwxA6OhcjW3rCexRTRT2ZkNkjF0GVATXIW/2tN+aiAyzd79bAWNaxfeMb1b59l2GAvdmCYE5wRJuilQ0R9swOy5BpaJWcPwuLRTB0o339mcxTYpVuGEI3pdUrBKPt2KHz0hUS9nMnzLnnODX3YgCD7f77ch1xxdDYVQ2yXK2qKgyhnpIe1U2J9IeTkCpMIgG41XSqKiibZNfcFNmQlaYvq0e3WoMjLZWoWgcJ7GKydOtTeNTagx7mnLzWg/HJts0np/E9ExpfyW4J8IxptumZM2YOnZsYTxSGsh71twiThF5hbp6i5jeDruaW/jyXPXn1YxC1NiWku4EAhoZz9Dhq/8ZFz2cFLc9AHW6BjcZSbCDOpE4xwtTWZiDaaoYRjAwe2SH7xBaFVezPcGbLdAN7BIuUtBtQ+vggdWyJoTktinU/eTIls/v3Z6lwfDV7Wrc9yo42bV4b7MkCKaN32FBh18EG2ggUrkQtxsLBuL688/w5rBud3i53O6u/e11fRNTutKgnPIH/CXVXwRl7ow2n4JbN9pLZAtRiQNCSt0w6PntDPAv2YiMhkqAjonh5H+49hOl34g5z+5ujK/5iLPVj5Tp3wercqlZTqVKM3b3QvvzZSG+OZzWWqOMcdyndW2BVI4RA3BF/r7yq1s4ki01iMfxrIURbiUsYch3JqpndRdapTAp1ye4P8tL/RhGDWHXGhHHsoiZIFv0bilh91iRLtlREOR5wX46NZ4V7sS8en8F1zDb8+rQAQcJLt7s13vvAy/Y7X/rvzKJEDEX1CS3mi+JQmm2A/J2awK2ge+EL4t4afwzgqLBHrsTBhlKA8txXp3DWo/1Vk8wwS8ytbdZo1hPRz2KOwnazbKZAGoGSyIwxrBU';const _IH='b4570ed2dddd65de98f39cad6ab3936f97c1fd46d57fb1f2beaf9653f61b4408';let _src;

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
