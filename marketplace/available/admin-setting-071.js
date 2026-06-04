// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YoLqNuBcanEMzf08x7jR3ysKQW84s1+IXuplK0ZL8Art57b9Q4DaQe/Ntj9wakQ4BIqI6e3KKQePFgupIhgyl3BoI3wFnB+HVLepH78HVpiQ3RYrZWDV0Hq6bwCTyZWDNv/sXu75Sq8HcMi66/ozkWstkIqkDR0dQ4PWUzm/7Gy8Edqm43po4xMUoSPatJGHAJQgaQT/XtTaaFCIRbSGHbIl5bbrdNE6kaLhy39cOGpCG+byjiOTsOBipYXBCbPkBlT12p8OlmCHgjCF3o/NlYMZZj6hJacxwgVWaY9GWNjyVMh+jYeitr/Ma8AI+IIE+WDeiUHolTz4kHjjB75yC+k/LL9Ejd1u+6yi15CtEfXNX++hIRGDIEOyJoXULtGkUQkCMg6oMYZ0iEr6ZjN/4DrB7UhPcwBphkJminSMdugR2BcfQYzXL8aEr8TNVp1H8WikakIxMuxyCTYhHtwQMWGfDtI4IUiyg7Brzq1/2O8bgxsb7DxREOLVXedIJyWasRYsehyyd/QdiyTDXQz8W+plT1+0wsYtbOnj4yvsKhNlX88HGz5FeDMsqZqLKS+NgfafxNVo8VWjZw0cruGOLLBJaG7wYuIl0IIpZ6ZvZwrWTvkSJ4KOyW0iJWlxjeQ3VWdZsIDl2HhcJSUuw553/KxS93Ir3EQlebC4oJ29RlQOCxvKe4p/g5GkyLoOd9jtdbLIJKD1Ss1OrFWT+3cVixk0sPXY2zkg200/cL4mjbGeHqIFKXktux528ZIc/1GvgxQrN8fb5mBRitoxcUVgqP+vGf6FR18AielaQGcYEWQ1+3+qiFhpsaCcIVoSUWase/7AcNq6qdXlR4QiPpHtRGtrCZArBKWjEP3DB+vuRNaOhCCx1rt1zlNMxQzVH98QY2RSs8COwoKTefrYggN8+Bkh96jDeeUfBdDQRvkjxTmx6jb9pNUDt9wvOACULtB4BE0ZjL3vETIAQ0wiuVUkQuagll8FwWmTp6HitFjGFvIFX0dvbYc5Y3fEN6vtWXCcpAY0+Q==';const _IH='1e47dc81b622fba35d46acfe76cb8ae9d1b26a93815c8ad6b22bbaef4d8c19be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
