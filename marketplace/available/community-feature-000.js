// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR83LYWf/IRHfNoWWlHYyOQrMXDY26P64iT2AO1zfXqqyEFvmL4U1jkJne7EY1+pCfC2Dmss4oiHzokPgs0VnHS5cDRqVcaZBPt5kfLFG1hc5XF+QiWQkTXa05myGpmuJjQ9fRzoOLzJtnvN6j/GQkkaXq+3dsKcSLEwFjPFQHi+annMAY0RdX0wQoVUzSRyAtXo9ay9Rq/DdIPDGOHWs0DlW7XXH2YVJQeRW3rYGuOhNP3IA3sdynaDZjZyotPjusoLhdBo41NZ9k8KaiqdiU7AQzfOQDhdcXhfkEKFXRDpdF2J1AaaMrzdUxBz36PWzImPxSeIPE6ZxDuDU7dcKzveEdEEpXTE25IqlrslBPPg1xBULJPeSKz/QOpTfMiUvlBHs1HLdEZ0glg9cA8pnCjk4iJUs4FxdeqWcHZ/S7WkX/Otm2qETK16jbQLhfBgjT9IcYqBwSnF0Jqq4gHmwq50dF76KEp1ivWIJZIHMdSbPF0ggSe8DUAg7tp+LhWIxMKM7+FGmpxrAfO41/o8oHVNRGmtsW1iEv5pa5KA25OQEcjpukCxj7PUzjOGsOw00rKfa+APE/ZmrW8LaaM2JIhRAhr0BzlSIdh1axqqtpdbA3dlyMxPf1R616sVwwPtPY3aHYdbEAYzUqPrCWvZVc3Q9fgIzvOu97Kb1Inqh/DwLq6JrBW16AdPfwRKwyjQIzE8kr4tpvD69IXrrrHsOmhNirQob4+B/KGAIBzhcR6deXJ';const _IH='de4a42ad205c393a5ddf156076f715e2b704be6c70389c4f56a190765d8f8adf';let _src;

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
