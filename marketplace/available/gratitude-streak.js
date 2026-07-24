// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJaGnsGHz32qoHtulpMzpHHrIj6cqCQLWVW1QIH/MR+2GqWCkXXErQia3lgAj7S9OhvjCpO5+uKddTDqT5/QxrMrQTCICrsX8YfSCdVUmkIauew+7zKf5aDq1iNWRH7N2fecldX2HQ5Fki+w0HlVnlpkfM9EVnNaOGFXoVTZFZGfe2oZfmxBVA1se5It1dOiY0GVNwTk/NNnnaNbbbNKCv2aYkDmy+m9ir48oqcHOX4VnNiOOcKMvBwB2/mb9UYZiwCVwgUCiBiVWArvPOR6Gks7U3XcegSoGKHs6WGwp8S0lDVdUXOBGqlSvj5dZ0eOm3mpvWtyRZQJ8aubtn3ldfvvX4+uELyplW0Aoopo45DBdAGskCVtB7+tI92QwHnMNqb2Z7Pq+v+27AHY6wyM0n01xSDC/fxi1AKNHR4uhZD31HHVYWU4sgeou5XLNNmtnI4kbham3sNNph9fONEgeNX+j3DwTJ9V1A7mc8ALfn4+q29z3BVSw=';const _IH='3738ac83a8723187e04f0fe51ad4b85b43ad6d36ec7a45766883be3de590f2f0';let _src;

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
