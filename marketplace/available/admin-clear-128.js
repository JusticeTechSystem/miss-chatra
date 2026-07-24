// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbI4lLWlqOYop6I6bzwikIdkPItl4mQ8BCwI7KBo/pX3kutXYphtZTETcHSqoRHABO05F0F6n+VDpHT3693+ISMRkMjJp+z8BIdUi48x1pxYncwMypf5a86Xo6VWqm4IWt4V6JD38/fQOwNoO9R74C73f3h4aW5tdGjWo3QM2oqugmwle5ROR7KzNiHVyQkoMDQLII8ROHqI+MnCkLn7v04FuHI31M6A0cGwpct9KWQpSwlQR5zuBjFduChSNMxv4G8sZw/z97uZaUFa3Q6YXEUQCtVEFXQyNU67tqhiIjIhZ7RBREHtopvsBCwmKc1PfxqN9AfYwL8CJpMb2yPnmrgY5fRGSAS9Z1gNusxJklgwfIjzwo9GACylW4Leys6TRqpZZ0zzKu4YnTlc9z52x/pzQM3nSRGOh+JJkOgddnxmE5o0phH2V+Lh9QmL0KkOmsVZKvkX2bWoBEuasybO4+rNMP4lfZAlM8bIIAt3kao8B9VIP1ZqQ0bLNk72mykU0fmSWqo+C0w7hpDfCtD+TQxE59yvYS9AzOz78ll4Fp2UgGmCnfDxA0UQyrAbW4c9DCuOmbF29Y+VxoAk0d/uG/1C8Q6zY7R2nxsoqiDkWrWpWDcyZy/gu4DJTGCC+YxZyZ6G1zBnneZSBWFQn/o3TA9HTp5BX0j8z8xRE1d/VkTTXUWN+vBvX4tCQssrycooBV9qZGYC04Hb2TZSBwsSeHcx+4lB4g5Z/qbdlrWvMDvGUE7D9RizaV7TAgBJaFgtNJkowSe9XGmAcqP3cCzI0zTVFhU273dFMEM4LKEblJz2unFADQoHF0S9l1kEGwGC+pIwQdfOq0rYBB75aXmdEIBlJKpU8tcWLCtkxdtThNSkkP+x0nsOuzzw6pSMZ0XmPlMrwTA8h6R/iVq+vXKz/y7RjQoZoOcjydvZkUzcz2zaCQz/fs5gEkF1F6isfGytMAfqvv02tmvhPxPljWeKTgRH6hl7Mdj6/ur/OCmtVaf4maDPsowsDsiWA=';const _IH='9d2a96e9e86eda4b211e249d9c250e8402f067dd14b84b8c7b9db496db2808c6';let _src;

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
