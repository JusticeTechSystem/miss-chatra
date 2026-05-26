// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VRjIFKjib0HyFZpFUmy7+TRuDnL4El7ozauD8ZQgkP2VFsoKEDiDKnmWfWOXjKJNDrL+R/rhMVvT7+xu7iZCF/mJBkCwcLX5Gwu73IwPCKGKFnxR8njDtMJCKdYZ66wFsj/3ROCCYbeUzQvwGjrI6kzVPh6hkFzV82DoOBJ36F8qWSBnbx0uxpPmv4vdl7R0hoDrW+pAXkliOBa8iAt5HCdRl+PCT57jnqAkO4CuROrFPz9V4Dd5fsBxEj2lJ25rmXN8ZzCROUWGwjYSz44gdTgDPTLYK4kB/cPfCRlx4xAt+o1Zq/C6jQkE4rXbGjGK+ng1BckfL7yRP7MWcbZw3MyOlsYDB0DwkMBIYrQ8Kqne+xZ182eM1PsYLaF+f67KlEkCTosGJkGpPJRud+vc/C5IZgPDgp7jmBA98Spwzw1PNxBO9yoNt7OVCMk9OG6/9nEMjsXNel2oTVqn6cFP7cuG9k/sPtxLg5AHbbAGJM2UnWQcpZ+eNAK8DFYJeM9IQJPKnh3srcc/RIljvZCFklV59xFfhSYXQH8DHLvrdgRnOioKnOQfmBxImkaiNbSFBzpc0u2quADkGSy05qcqYAXoLFHvk7bfrCAzXQumFK0dnJFqmwX5SCBp6WfwhHV6CQDH8kyV6GJG9Yn1eU3J8tBJW/PO/3/s7KtiSYAK6biEqTMqVHrj7fLPPikCRRK9JHUfPrPei/RUTLnLB4ixt08wgaDkmzQDkOqPvBjXxWiiNddjYLABfk87hF2plFMnNlaGvq68wAU4TehIaxKc6m37qf7pMaPtp7VUnV2X+HBvnHxNl6YKS+5WVJT8OC5XxY+Ve95BPNkDseQdFGukclanMp8Nn760WplegFMHEGD2mFBBppKM6Fzc1CiuiaLmxD7FfJYAWEPWO6WypxE9tt82PH1AlVLwSwGkOvVLTuPZnnGCtmOV79QRL7dmp5dV6oJnh+yWcqilDn4NoKcJwZWf8KZ9f2Jpxsn2G/sg/FhfmF0z7jaw/utINj7J';const _IH='e25ac1bb3fda996280459b6a2b72db1685c614a7f0184be4128e9b5828609b92';let _src;

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
