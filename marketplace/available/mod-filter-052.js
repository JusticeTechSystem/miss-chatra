// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6HTZRg4gbh1r62E9gD6MwbjPT155V44dQA9Q+DnFJylXlC0LeS9hiMoK6O6jwjmncdy6iREAYPmXjUam6bcOPaOzN/K3yb9ZMPSgHiRxteroHpEPjVSccBorzA8q9RK5l8IzsBg1ssNeOh3bd+cquD5ganWbzi7ln5RCrvNqcqKAjwPuh7e3WWmy3I5k2WnWILIaraukddylJ87PvyOmYJRMJ4aG/+kcVfmWLFxapPQhy/qBSUjoRnjcgssm+DG7PBdvTc43T4GVuNz3qAP4e1UeOstLNXv7pd1NOhGRzhtVwH7Nd+mfiwQFITUqYlbq0KKqIKFZ72nNqlxpylsvaogugH23QWmMZvcGs1aMkWs8gGwsuCHJLrG4uJN06fv3Q+zlEaNm/Rw5pkFNLvfmOLOeO+n0R9FCsf6PNGGV6yJBZmDpl7fk/MtI24cyl8H9nRTbHIFG74aSgIjrg3Dq8oxd+YES1hxZrLVkrnYUV+J2JclW43g0la1DKR5UCNsCW0PdfsqB07IUb7fOvcVh6WgbIDwR3OiGNJfHx4HJdLTdlu669LUnR4nA1kGiqJODxdc9+5gGAeOy4GJw6GuotHKnIiD6mQmqto4DgAlB3+USLUQ7xgztsebYnTYVak5tsYC/P+ZFuhRjfCCDgkCTzQmf4VGKEpQJkaDmVwpBXK9bkh7vngEWHQVUMAtd3X4D755Hhw4sA1WVhy0alxN/+U4opqu47VnGpTn71CYu2kEuE+r7cSlgnmdPCnfudKdIpJXWRtiePiIDKz7zzG9Joafd+BYIbPP3Vvg8kyERY8mwkV3QgoyAHus60q2P1AhS2zQcB7FANsGaJWnNTuVJYW2ansifDrtZefklYW6KqX4y3Q4+tFILIjAQ4MgrOq2SEFiJzqnEvdaB16jOmD3ctmdK9RkJmATEon1ol0sC/jf3BFCk+wPOQw6oHXnYcPvSnkLishcgdIJU4eN3Q/RJ2HSppjieRK5o7D1TzERar1BeeKwVdJDudkQIpn2zIGRj0j9bX85E+mmv2RjUuogp6RhCU9BvltL0/7X8Bzd0R2eHK8z2HRDpUad5kiqMopkyrsGfZjTu588bTDrPpDBcbfBawfuIufiFS6pKXkNfG9/NwCyyGOcXEWucpl6i5RVGrxHaQjkRhfam+G8ZTiQ1mqr0/EEjuUbaurnNmRxPxqDqD4JThE1qWJF/6OmDL0lRq61HAPovEBslQw4qVBy4l5YiYY53eYzfK85fsfNkzmuC9aTY+uwT9cCgn5fr//uv8GwP/7gzLkQ2hRc5Rs+n0udbBOqu7bU+BM6MC5+cj+4Q5xeA/lhshG8zXa4UD3p2/V7GBB/+UINMLZvuM/CxRHSwTP6kNPTH5XP2/RSMn1fSI3o=';const _IH='8dbbc64f693a96471eb6d5d43907a8e67d67ce6af348d3e8406799d5151c746d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
