// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2wxGsp/nHox2t5ujEXKPMVmTWhhOw97T1lC+Rn8DkQnI/k0MNOXwCcNendHObyaHmaTtMzQkTar1TtsnTpmW41cCg7f46F4YXcSBcmIuGaBJ1gFpGTYACNzCkPgRuc0Hbz1vvE2IjC/K2DePcn5bWDkq+M8zITxRcHuJaD90oJIMhYd1a8ckh/D/uKw6i4MLpCAOYauk8iKXSbIZhQm5K368iLdG5IUbSNoZU4d1qWBUk5foyyiG+wH/e8AQzFuukpdjT68sb8q1P84Le3uCF2L2Xn2g0yPUNYrr5UIMY3rvgm81SYhoIwZQ5G+aacuD/I80EXFZZPtu78Ce9hEr1JUQ9DhRFIbVDsvMyignkMZ3EQsvGCRLjqoLABtthyD51tui4eWBzmL5ddKdx3lmZAmadJ0LLyfH2/FCxYaZLoL+kShc9gLnGEufWUxcRXmHb4o+7Dacn6MFHqsEcWNTNuX8g3QmZ8pgqQcXxzYE5KAj3T27cHLwzMHMUDpM+pq9YBaVTeA9cWVJBZUo2FhnDrPgtwY2CVE9an6p4pU738XONkDNIiAxxcWyJjEruZr4NVz0c1PziQ8CR2mojs5xU8vz4Rm1GlyoyvXmYTB6mojW7a/yxisF/GjVrjxi5ObcjYr87fAAkPg2HGOX+FBVNsUQLUymwj0x2g8wlEmGexb6umRWuP4iLalnAEtzDqT5wSsVVmwIjC+ngRWM+Z6CQNvXYXYnG2WgfXPX6IgVk0A19wtSbeeiqnwh+CJ3fse34DRQt/Q0RlMO/b2dKwWa+YD7Ba16t4Y5XnI3N/BYBXmkR7HYNxDuNY2sZIXnEFQwpvMKB6qSpxRhVPKB5cOp0ffFtNItW1Pus4GxNNPehY5hrwVkXBqFwhQTe02nTyRgmZFz3F7tQsZudxPmxAWE7W1mXL2T0cat2n+022fIonylboHxFG52+RpX2uASZtcQRuSJcH5dl7Mnuz4pBhcQ+Q9xxrriY5+TmH0AkVNYDAuMmgDYdN6Vtk/98doaWvUIIJBTx5I+WXuvPpBg9Fg==';const _IH='924ad3d05a8c0fa752b8baf9874b5a4ccd0f003aa8d9503511fec1817529a7dd';let _src;

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
