// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTy6C6ff2HN1qBJ2ZWQybj4N2thgOVGR0nYkTYgEaPkGQdqvUrdZKS+e1Jy7klL8Osm6ACTmDxVDOzbJHzEIzzJDP8dNljD1zCFlmzTX4xk8hsjIb7U12qj1PSBemrMH8W3RyCzE4xGERIWr1NZOsUdAuwpglCs6PhmexNbCTHLmhlbVZUoZctM7KOPJ6l2UCJ1BNZhTd+vp3Pj5rqyWflSY5BkEdjmEmlYCjRZ7lONmdZOpCujCgGQSU5lZj5T2jGo72BmXORbowwG4+vOy2s5H2YZ1Sw7IefkFpmnWDO1PIB+oekkbE3AkjqdId2aRYM8r5a5ebfkD1aDJ+iV2AyBo+pZX8Y0i3FJJQ2j29M4NdHswElVde1twTFSCLw7w1hV74ntzeTmLxUI4upktWTfimtuvZ693rwXRVEIdd15TZ4HN1xru3yEwOpe3SHaDb1/qD8zfsFdrPRH+Liupb0SZscCp3y5JL501MStBFMlOYq/y68M3VYWXSAWj5WokhBhhWeQgZF+cCrRh8mquk4/hD0LZiNAxwPwXYnGYs1VAafroprGIlcJXx04RrYqm2QrxyjD5BSPpjdnv1NJ0CB5MDB+ZhuOvMfcOLb6nVo/UnwyXHTwZD2hbWjO+pSNqG6wikG7Q8YEkRgD3My/2RaD6i6k2dVJIQsrAXRmWVmuFI5LAwBKtgbYFzBUfffA4gk9Xudc3LzHSDbVkZxLH05NzVJQ3opgN/R8vqGJGPHkYJHbm/T5ND3qksLpp5wQSZdCusxXW+eTuXeMVJnTSiNr6Oc0x+nD+Ju4Gl+V2vhl7NzryUpUAYzO2sNrOk8a1DiAHZhmRXUV4XzrOkORz5j0hyDOC/ypcGxUBm94mpdaMC6dPkkeKWwaO5BRCdw7tyNb2D33XURBfuFjMS+WJAjPTvvuVL6BH24cmoyQSRm2A6OitT3BVN77KiW64hfhkafAMye3UuTb7rxoQMTVCnjJtmMItul7OermeLx3FHBFI4gAcsuPF4P628f5PRLMpmAcfzREtcXh0tGt5KBcaQJVVQYc8qO70tQRJ14hXitQ81zd';const _IH='251ae69a3314dc7073715d41ca1ebe61f2ee9880811e1ab20a8347fe61771fe8';let _src;

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
