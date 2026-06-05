// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jIXS+DoW5WAx9uiOlXEpU+ZeIVJhDVCpzFT2deQEGq5aI/NnNq5C+hBoArqTdR/+rFi0cjDEJaGGDJKm1BQKMrawFYTDe8ORLF6UzzJ6QviFpT/gLUyYIc6DPLktpLQ6q+kkFSxZmmG474s/GtvuH7r8tip6GBAONHtlLNyfBWondpLP1Pa6RZBGPIQQfJ76sQjpIbS0Fms7e5aBLnN9TFeH36LQQkRryA1z9jSaoxU8miXEcuYS/mIr9hLGnYYKiurWOU8ssrwrMm5NTDbxaST+FeoZSPkmKF2b7KDRdrHi6vF36tNQuWUsnky8DfMrxvYlQ4MeoH+ZWfkULLieeoMNWNeLmOLcaB4l9YJuqeWGFTkrDKQXhf36Uy5RDLrSWu5dCxPhyyYT43q5phQgVfy6YGymjQrm2VX6qWUBCl86+V1BPpAg57XWsHzvEEwu9U1qEJ9lSdGwFczQJgk8+anGm4pMv9wQvka06M38HxFz7X9ZPv4iCZhjBsIXhMSDF8xhWcg7FV8Imu+9jD7YMwqgD4IHYfPkioeRpaLZn30dV+noxCVSNNHSwDTwakqALEHTVavYO5GwS63su1R1qIFq1q3v48YfsVB76aVeLO20S6yn/fAFe93ZWwIpRk0sUPPMMAL0K9KV0nYjU6EPBlMjSMfZSJs13yycAkFE97NkbP4Yne82kNpPpWxYZUd4mPiGNPu3sEkVQ0kTiK/E3t4WEg1l4c0KioK0J0NqAPYC+0W1EeTRggXx0zi1Tn0VqSyQd7yYCiKxp5owc+6vD7wYYkWkBkP4TU6jgaL4TVVViheNtSrEOZaTsB46AB3+dVT9RFsg3yMHiwdK5Oxq8ppTs7VOpaeIckigLWLnmRMIaOfJAVVLMt1maikmHV5gjbxtfzir2LaoJ2yJZmMcqs4q5yrYnsof5LfnvxvUr407NmycECOwQoXqvscSGo8VtghdrvqIU3BbtaVzDpq+1QlA53wrrTeV9Hg4kb91UOqRf9CHn1Rx489M8bHigINbksu3/CXPUJdzYFsgyCq8V587Xi6g+sWJK9Tvn01S+yGyiN2s23Fnojf5GPet9vfp78DX6MvuCqP6UH5VxZCvKN0uZEU1qqWLv0rpmCj+Q9C9emqcrpsNXZ6RERI0uztCuzF6g3ts57uMvz/KhB4Y7Cqs7tg8UGDSC+bvjKNPnpQioxA6uPiynKsUChaysJXLEV7AXYCb9S5pIAg2M/EeYyNnFdTztk9wJ+IegPunCKA6dFUO3d1vn+BCC8z1+hK84wCTPmY/0QFeP2zoxxnLchHdDbHYmLqwiviPTBHjRRVt5OWl4MCaUsK+UcwVCKvI6ZRJ88sbFVTMlQWDq5BRl9oJhwbgXaiTyA6NOlkw';const _IH='e34220546490457d1eb0685ebb6675034ff83c8f02dca21e91c5c749de3f40b4';let _src;

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
