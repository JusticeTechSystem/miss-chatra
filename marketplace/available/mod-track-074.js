// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HbFm2iYinPLtNW9vVK7PYlj5YkPUaNaDsfobce+EMSx9Ee+LX5W+eGCM7WprFYL6LfLqChDlQrvRf1xZvk1qJGBy98Y7vAc/zc7zbDgn/VMzdoSGUSfMeHvE1FIEcmcMMu4xsy2Hd4P1bge1tuRMnjqcPu5kRv3klUqBFZKuL+8JfmuNTlk3Dz2A6TLC378i6P/EEGdCvl0Ufv2ZHMezsbHxgq3WoQji5JeUD0wdE0dyCdzv1EAK41y2Ah9T8O7NSXnaWPCiygjNgj+WZPhFMfhw0exdF5p2LIhjMgcPsamq9mAGNaq52hjSotPkozG/pFPPTJJHWL/S+YOvuas2/N3vaEe0cRLEFSXb4Y68Iyd+svnz7dWN7Sna9JukToYV9EudAg3bM/kJKm/BrNxSiB96+qAovFVPjsr98Kpy4ydTyntVxMOm7brCOVgtsvqE5RfROaf88Hd8EehM7jkcN3eEJt2mcvCHbmWkV8PVjFGz2vWGxloNynfq7bnp01+eaUX4oj7yMI4/COhj40ubMBI4vxB9yHHNXTc3R+htgsujQLFIc/Y4Wr8wbC9ScSHeqNwWor2+d8W4yYhgUbzZAbBPNhQ+04d0LCAnrgwxQfxkaPrmwa1LzUW9N1hR6Lv38fSvTbeawUgXkBDaGKC8J6qQ28znBgXi2Y3vt3AqGCKLs67DSekI5mj/0XAoOLts5kCNAIKZtfpssqKGMrrhCBzAMSb5mvCyU1mtSH4lSg/iiBkrtoFODYZ5ql/cH80L3PweDuElx4STVTgzf0xVRBnyxT4CJhGtAgwrO4MhEMHo9YYAVYF0b799XI09ChkZ+GNbGSBiYHxG9jrCPuL32vSNAQRKNPGYL1uZXYYd4ooog1gXHgmWh9Od3eFHe80CpRawmKWLHhvpbma4QJma1wOdlEyJE4U7ybW6dYV774EEPWLvOAzW9qAmvjo9PLzlMV4aGhkq6VjKxbK/3reBHO5yUcjQIEFv54Bw/C90sxnA/c7Y8fiRQVAbIkQ7cJ4k4CPEhi9wrHafD6zGjOXkATG9rZ95uX2nurh1orVwwObdKEOePWmLUvtiyKx1FmuWgH0sI+tTag3LfwTOIWXASncEzq5/3UJFeZ6tWCrbHAxq/DvH5BJB6NIdIdIrRrgHB1ENLMxiVp74qZzdObMtnfoprwO9r2n/r9OK4Bqyldhwri/vR5faCI0+rZ8RHpirNFQ8272buh0T2dsjZ3akq7Inycm5w84qpVElZN9JnDBk+NgD9JO7XRcQbrGf1pxZZwj2+THJlhPJMqdRuaaKPvs49M81M/jLDIMHDxwmLZt0tuQujtE1Q9wT2cSurP89SD6KQ+CUaTisUb35uBTaW2pRYJc/I3faWA==';const _IH='3e79512ed08692461b8360266aed5a434eebc027e7b2bc50520c8f9391b2a389';let _src;

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
