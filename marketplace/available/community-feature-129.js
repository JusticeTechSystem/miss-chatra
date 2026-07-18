// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEDOv4eDptPaPPTYYomJOwpJ4POhGck8dJ1+C7aTBIJLo1KiU0k0Hg+leZtTUF4OXwbx3WGBGgORu3c5b1fQlRNJcna8iSBbcJZbwS1iQ2LAALv9EJbS7HioFXLUi+OpcLhe9W/UQxl5HWgZhoi7vMYmnZcER/Ga6gEXIVaxLNT0lf7mzEmbYyLhSH3tDMv8LyfY4tO/VmegQD6TDdmxXKDid33Cu15gnDSE2InJWX00fElqk1YP/hJt3KCOFWsYapuoNLlC7QOnVxTIh26N+3+eNyx4Bh7kIg66K60groZ6rqM7Z+ECIO3HthIbEaY+D0uX51iHsTpKg2D7eZ1v/sSumdEbaBkQeuvwMV6rbfyHrzVvmi94nUP7dLqyG6CgP3Io3jMYbApLMeErvbvYs1lp7niPQWY/2YWtxg3HnUGk2e6YtJUwkgJTpWSubsMZCgvtJuh5XHFWXwUu7bmxKivGGpouUACyrJc3p746VPbDpIeGSpClMzpINMAdj4GUEhsQCsdeMCNYAfMl8ApnlUhFOZXgNnF96nh8vj1RvROEPrs2F5pf+08e/zWLLgNHKikQqDeLjQUFaRMqoDlhTvgebF7JIy+BCwZ/91TX40NZsj6yq7zu+YJruTklJU43j3/TQNTYfwlAAhBSnMcVr5UbLAZTOMNEVfT/pkg1ha/EMkJl8cTVDVWLeQ6XszKHN2RqVgzF9PNWxAMtCLWVL0oH/nl9YE7kvCipHRGTdx7/0LoDNpwA==';const _IH='6062c4870e08cac01b22cb61d98ca132505081bed89bee81212b8a76c07f94ca';let _src;

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
