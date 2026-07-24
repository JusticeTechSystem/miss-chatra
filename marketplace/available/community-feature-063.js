// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+NBB3bLfYQv/w0YaStfwhw35gkD82OF2NpZR9t2xU2hCxawVEGJu1SIzsvm6//l+8XPe10kYefUk1TyfoLllLDjsrfCnuo7UnG2tp2IEdGbPAdqnnqA6Grj2e61Z7Uj31MCSsAEEBh8zrOAGtFAlAjAIUY9ukKQ7aQ6VG2aWsFMV023VvM8/HYIZ8f+I6eYn3YedQ/o/YJVDCYztQ/RMkEUvgLBvroDpTTTN7148/cAWczsEI292oB94E74dKNRk5JoQdvAyJiE9+cU4e4dIPtjbc1dHQP6cARCf/Ij4/2zDbnBOKeThNSMpX8rBMmGkSXj+06fkvD1RYVbqai/MeZK0uwQyBJhsE0auTO45+6OGZSq79sUJzxQj4+5P+hhoRuzLe/mtRyXcnG2OhnjQRhSfHsiiangevugJCxizrdbCqXnawdnfbbHDQ2ZvRSyLsuOKsh4lV0q34jMCeo0bC3IdhlyiyjUe8uqYbxxyeJlBsREqHkpDQozcAEry/IV8VbrLkFt7+NRg3x2/CmSyyWOuFGJJnlWB3AaOi793sGPhIRonP59Kl1V4dD3jjwrClNJ2zdPIF77fZ3VJyseG++ZEvvVrhkwziBbPIOwm5u9pPQCYtF7jmgJ0l8BV9rWIH9NwQCpG8ks647cOPgTENZpZOoAaZoVQ8U+NAggv4tUCHamAOtOMA5I6FI3oitluemyVxN+f9gbbD+tsdJEMRqshORt0E4Enb';const _IH='199ddf34a15af2d2bf96ae15b8bb1af354b8d2dc175a9514b0172db308130b9c';let _src;

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
