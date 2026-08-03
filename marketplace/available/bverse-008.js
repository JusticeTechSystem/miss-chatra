// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBuBI9IXoqfU/wNSFltqo6t6/xf5k9HbHZk7OkHMlHxJ73u9N3AOoRsMu7hYq39kzF7C7HumTSF23lvGRsSh1y0zUiWz0ZIAUHHP3cBT3sI1QIQaY4Dkks086NfpcTaELMaPI8egKdim+epnFqlndxjYBTwktht79QbeyFUfC6WISdKnea1YsSe74cziJ4+iw31/AkTfUrLQ+eN3m4EFPiWCw34euLKxfFFHKs6xD9848+JgGsRu8Op/qEHhuNLqcYGPCfsFaZsarYudTmDm3cEkzU8WZ/AzP9dT/z3orw6oLzoXJv3qly7k8l5ZVxaIKpn5huU3DNQTTtNNyk8BB3lCfi9oeVg9aPKPCxzOLYZZ1rC0GTLlumFB4CWOu/u7A0FCFaJ8FCygD3p/UQNMIbh+vqCdnMOTU8VeUao7XLxiXQubQOJ/0NfUqWHd21lH/C7o6epSbKomAEntvzYfb6uZera8P9get0huyWLi9kpHVNlLhSl40AGDHIkljWrKOoyyTU+MqGVxjqCOB4gdHWOBjL9F2MWZcnWm8syQ083r+RDs3ToX19eagKeIIZIj5+G+dQeO7AO6HoT06sZE9edz1WFXSweAaPofIrTv5XvuZPKI8krzdmnHflLOvOHdqiT7wE0oOBBODsVrefKg3dhqF/737G+67pksJ9HkYwRfJ4OrqPDeZAV3tx5es6oiorEluKLs0=';const _IH='544dc3a9dff6270743a6f637251850267279ae29d3c2e597b3fd8544fe54aa71';let _src;

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
