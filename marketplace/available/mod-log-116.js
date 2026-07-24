// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3wd8n78NCWE16ix4Y1POVdvFYb4JiXGYTC4/LAGXVy7Z2IVvEZwlWehhYooHwOceKxvPu8OED9ICWJ07pjiQSMAXNuRxu+EHuC5jVjRdK/tUPlFnR6aRcvGUX83Yqy5KlO2ZnCADeL34CPMkJuFoSvMwBWjH3S/m9Ru952SOzM59t5gLkGuQ3vRpBr8FP71mjrlHX/x1qKAFUcQmts2k/H3kFJxnGZg6twpgX9FVtZpSECEE3i1XRUJDFlbHV9+Kt8ChVk21Mv87ZkXmh1moE1kySSlRhKJRo/wr1fqpoyEcSktoAunvLONj7Gn/TgrodzWLM3C8cLscoPMPqRKH9uV5jlU62wKIOm5Px5KBQ66q8h7x1jp0B1oNtf3HKqE0w42loYtuT1p5VIBCiZnYWv129n90DTknX6SFxbGnKelV/ue2O5jeeD0uen66a6fZaiq7vQ3VKY5M95ndYQhTG3o0ETmPCZWi/nPVHQu8G+Qn17MnSGIZnutyX3PbeqIZqZFcvTW2e2Cb2UlUE0QFl6wU6XDZ82aj2NyOHMRAMaTOW3JFwbN3GFU/WLU180eKn+c9OpZDD2wS9fG3WfGMlPbDTTRZrjeVbmEkyYW9DXnh8SLVgNbMOArFZRjLowuRGQTPA1YZKm312BIrhiipmiuTYyNoGHcc0iI/PPqdH4gRtQFYVD0URaMQ0j84OczS21a5dtMBK19qhKxrSUKJOkaMCMZXROzJeqZUfwjNwhAwQbboEPHoJTrzqHVAcJNEZ1TC8P8pAImwEz/dK4CpWJ+tDhDKrZiN5x/xB5dHcbJ7Nkmesi5XURYF/CQY//tNbxcQhcBy/yLHIaUfn4WZ9MoknrJHknZdQRVNyijbbzE7HV2gO4kibeKemFSgp7+GL8wE6h22V+n1RBr5+NVqp8hk37KEC88SEt/V6RUfZWzLbMNWPr5jW239IU5v5S7Z35mNFZ7cdGM4hsj9QwAwdCwtjDiqAVPyeIScUW41XoijAedlMbrPjr2L/Leo9TyRimybMnIQof82I578HqM6JWbgHADzYybcYz7/YiTDwx3TX4tH/pfKYfhpqG3R3zB0jGc1dcCQMK/4xPyH7FjV8vCS8yYESUBlXvvEjURUHwjrCwOplzCbYJV+gaQg/jEcNsVP4c0smm1qfd7q8+4SlAafz/cQwwl4fFCwSmoGRtRNVmikuRMquRMMScT7YrlRfi6uB5FaEewj9eCxlTS5K6Ofe9VCZYEPnrR5ZE1ICMO6TZzHIowhWl7NlI54AeQdIm9/jJY20C5enLlPWYg4airW2A6YXUp+P8KQPzAlpp5BTDyLF6jEt6A8PdQChE0yreETmOzSdn1Pv';const _IH='66f5d2793ef13584a2d3496e315aa171753857bcef669101099beb8c1e21d278';let _src;

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
