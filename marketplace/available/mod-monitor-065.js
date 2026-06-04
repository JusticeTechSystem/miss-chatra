// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Snyako3TWu0fXR/RhWy5LN7NKCaU20xQmIx8VVkKizsVuB5E2ZJ4DgbhJzaHmkzHAFaJjiqClueFjxz14ZezBRf0RGiGT/Rd5Q3fuASnzWgyKICoYh8IjLdvhL5/IoozWON9uo6IwLpV+mza7/XLPdvr1z7YJJ/bfMirgsp+cXzk4ykQJS8/H6SzKPMZNpbqxZIcufOZ+Enu5W/MxcBYqucuk+rDFdJi9PJ9++1zlHjH4H4QsOTdbyUhY1mpVpQORmQe/5vgMK2ziW8cFL6mueAHtRprEY8frIh+YxT0gArHY+LtkD75i4Fr2AusIv/TDkR8h1gaQZgCg1iLSmtoHsRUwxIgPXmbMZGWDGT/GzTN9RInlRZyHE+g3Au0tyVxXy1iAI6yry9a4g9JLLfzFZD64C5Q0YNbd5FUiU8c58w6UpXFnmq89jD2kfsWhbtFm+JJUa2t9jjo9trYy02NOzAXv9fi0XXa0ky/rnFd7wvSVuVC3VrwcHS/nI0V1Oal5LmTkn6kTu9DPf3QsymvJTB/lQ/D2DmvdJuWIjX0tvOhcWBFhjLfSUftlM57RXm2MjgP0trJN7Z4cv3ue5CwqHNEAq36NiPfTH8dKauitreodYBS/SsM4doEAjPfiVqEciaAhmh6DaX73YcfidKKvybO9sNH3+AuDfSzrZ0f3DDTUMA1LZemkiZgCYweX6tQ13yO2hkMTuF31V5V1kGeiFwRj+cgCT0YFjefhNGTfTxagHPvW4mATOsdJOLSRV/PjBCSSsT6xOXQdQJditsAQC1Ds0Jt1GvTINSGkPSA2o1/6fHGzqNy+TT70mef9/bi/YgfO3ZqHKPnIsUicXAiqwRUS2aWc4Rc0pU/AEdF8hvngomrP2LRWJqA9F1NZMyy1Hm4SwPGW6xTMDRVBeiVfJJDxY+palW+dv5DDra75KTdA6lak6aI1AnnkIbtysU8N5KKdRdQC3eN1akbL6Gk115jq22X06Mbx8Tp3g4hM37bYSdiCZKjE3uOeJCigGhEuKF0Qg7eivGSZRqgYtenW7lWURlG2A88+ITxboVXbviCd2/3PT2qjZ97jkyBtnvEQqJLvlZJuax5vCh/UjbHTZeVXvKJjE4pyib1M5Z0QijLTDV4FpM3Ctd9AUDTLWrblaJTrMZ0oZjKBqHpyp5ppUcdKWHd/k8xi7cy3Fq8IAqKQgCVMI1jou3Yy3LJ8DBDxMs+QmC2QrbMJoj5SoFij/dtCoDjJ4ZmSySOYmFrdCHO4gOKsfSakY9w69cAnYzc/arsk7SE9SNnrhiB1Jvug7M5mqA6+gQ7e1qYrqsmskueoXZoSQi9+X09973Hx2L2vot3kD4au5GoSWt5DakGFamC9ncSgZj+vbLXezIhtv69A7vtFJRATjnfqV2';const _IH='e221caa79c7dca732642cd10066e5b39e1b762053f28bd951703c575fcafec73';let _src;

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
