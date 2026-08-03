// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRR4pFZTTtHpa1nA+anNc1sn5wWHMu9h+/GF158rtzwyDNtFSm3cYdaM8XIE32NJSULTJjy49M4pmUKWynQZb+SE0f6rOU1k7f+wvwOUBM+zg+uSXOXvC95oi2kUwakLaMSiNqD3JK9qBQzhQQqzDX17t5/BkZWdFPvQweZgItyVb8FOIrKyop8VJqQ6VaeK8ZaQNzd8DL7bGQugwHsNtzHxyA6ppQ5gu3zNliBz/+gmOKZ6pD0A3IUrZJrb6W9GM8XKQBBFoGhIzC562ixfGHS/jREElPWQikTJ2LcFYhV6FIbntOBFOJWhsowmk95tH9BIIVIJOw1twaf1SFfRUNdcXWOy2KSLCPY5QmMKMm+PS4FYuT82xpQjHfbSCy+FM0t++wZTtWHNSYzGHPJMA6oTkOOi+aA1W4t5U9vfq3Ph5d7Chl3vEHItSeT4WhMbilVgsbIOP02fMo7V1M4Vy64U9v/wfCFLFsGN8/CrkUTdD9Su9ItLH4lrdn6I6eqnD2nDsZJifC2DMCVMRLRtxPdrgE+kBjfJSFnQGLSnxXzODl4cN6ac1B3UhJKzZOvYVXFDFOL2CdSnDUas/9PlexaPaLVOBVvIsr8KuLKw/Zr5EupkA/hBEDa31KhmJAbGf5LHiVqZQpE';const _IH='38f87c4c24ca663e0055dcdeeac5101e3a8f03b9900f7e735df5fc6a1b3aa5fd';let _src;

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
