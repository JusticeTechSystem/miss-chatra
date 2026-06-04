// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fq/+L1hlIJ6C2GlXNxKCQ3lcQ8STUzuxWBH6sG0fL5Tc/Gtn8B6D61RstBDP7pjli8jceD4IQqWd0nxWuhIrgKbRgJd23VMeOOU1OiajGawo9ybGZARKRtIir45BUdUzgR8zrlUBnKkq0wChaff2mRT2eypLWkeEoamwq1q1NPolSAINmNKChxhKLmiG31PWkri/zyiP8MqMPrEvTLmihERDzEMkEeJHG2Ivf+Y6ssy7bvHqTEocGucnsOB6bPw9IMbA46KmloK30ABmPey1ig39l4+v3uA7Z6gvvjqf2eBeZGH+lDuTKFBF5bhuCLeQdabMsolx/WH7S7tG26k6JdSedUmN6MrZO1tItsBeoAmegPwq827CCjruoAhdJ5v4FeTCU8Hvzk4QNkIzSsGmtTny0I6s8lmbb+jlbzkqY/56Oysg2rOdmybDJETdZ8mjQdoQE304Y2ldAGknypPUY9Zk7QA1EjcG6aO23nogB/mDa8PshFNEDsjV0uRibgX2Pbw8CNjXYaWycSH3TFrdRA7ikpnJrcc8pn7pRuamLPIj5CFmxAd/EGc7NQHB8sOvi3Rf+EDKURtJkb/C5OjNpsTn2HazOgsDkPCPoUlDSVzOgR3gwcDCG2qGcqwXHLSl5H9PTUjSRRloTodTVPmfCZWRiDS8cVWoUimI7gf7/x6ZkG1GFS/uj8k52K4se/1vrpZ6CmT4gmF/inns0ZFo7lna+oapPaMY/XKDkYqyB/Nu5liDlWTnfKpb+AVK+hbrN96gYQc3OOwlPfx6YMoIGzAuReI83q8MIwCsiHeRUROZIV4qDpgoUCr00TfEYXS6gbYPdWuw4qiaQn//eVJbE15DDn5X9rkelY4dJkFe+JZY26BYM9daqEAf14xWgnVzetLHSawK8KpHg+W+Hff36isZsDsYRPCBIvj0oPe9q+cqDdyrPe0PtvmRHPDIUOz5XxvJgr4rnsiDesEyGV4ZAU9b9iwP09YQQLoswn8o2yUVgCRy+t5yjxFU14QCF2Np/oNzQ6/zKpCQpApfAUYKFskKlpQ4wGr0onHegFyFzBEEQ8MKCVk1lhEXXcXe6DUNuR/0Lq//pSFduKyFVScPzGFX5qcSz6LfN7hAFGBr8OSeM06G8BMzvU90s6kxCkswU9TkiVxvjQ9AN5JuzFJ4JQNJ0j+DGfjLeLwNZRQdJQsAKJQfwPM3bGo1HX3nJXqsMZgRH/c5l6U=';const _IH='338fb1c1c1aa60a277b04e822e5e06571f2af1f2da6093b7f40360ff4c7ddba6';let _src;

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
