// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyXBkfmJWkUiCznJdi+Vd//ORwF0ZotVCZuL42DBfUn3+iQl4XMNXdKEon4crDpk4AF/1Pbea1ujudDV8wOkGab7Do/Tglk0Q/fDBEO+X26wJEVTmpvviueWh/EZf0BI1xW7Qcp3me68SKruJaBXVhBzbna332SmGxDUi84hagPdAGaudtL40ort77FcK+QVqVdCTqB8hpnObOuhIH9FYJr61nj1Mbf5WgSOdrj0nT9aNApIdBVM3FGicUIqw+nze5FHg9wMQTFEuxYTSoK13gf5o0Rul0LCzm7+eaEOn5W/nfqVnOCcL9yMlVpHF6Grj1IVfmv8LpIBuayZMIykE0aMdJXB5bJGBy8DxFFVnx97FdwptvUfNB1Ll2zUGXC5qxGDpKTWFTWONWoos3gD6/HSlrTfm0prQOXQiMANJQ0hLehuosx1o+vfWP8J+lyMi4dDAODmwxipswDRr5iiBEr1wbb7iiuQrqTm3uLtZ1iDRTK+/NAK/y3AqyEZtOnQigR8OnEetJUAw59KVS38RI/X8ri+QLA+3uR53FyqrYGqQ1pCqgYkdCFZevMX33GlokcahNlzBN/0+Mn0P3iy5AB3EEQ4VvWrHkNEyGALq5GbVHFl7mOaq3rooCcxC+HPuNMVInq+VcmsVNUZxZ2SF47icR5bo8xoR6/s0fqxeRjcBCYk4fYwIBwV9fxSMnlZveXSPBamlC5GbMznBCxuwR9kuCjyag8/YPWRltKLTuT+bkzAChZ34pHSkWr9h+K8yfdSzD7LwqZuktUK/oBJdjy9I/LGZtbZZe2IowwRWiHIUu2xhQoM7Ff4rL1FwOPPAqnaqPAT2Fc0DXftE0JKzbG3gtN3IUHK6rXyieZ3PT8qgU33xp3w0Ihr/zXk7ugG75FMmaTuCZXwcpm1wkoN3pPSjsmcMJ86Recxg2QplDXoZiE9RSnTCSaoD/LYAtI7ifeIhgI0Yqco2B/TuZZ4r+BNfoGVSRIY/PzItloKZXbM5PuhTMlSgDrr0u9G6EmXpe8lzrM54f+VDmivofhLzzGlhH8IccvzynLoOmkIG5TvC1jGL3LXSdl1U0V5aWpPmHeqD3IoP733eGNz3NGkDcpGvps6FCZ0NYHPe9cHX06as9uAhPfTx/7avq6ZORScsyNMw2kssAUXLbzjYOxIJYr0yWS3/VaWoOhZIbZm7N9CPnrcQ4LVsOX68OkJk3b9wSVI9tjlb22SAVUgVRkSUVTUWXJcVZzlr83JP4CMzR3vpk430hvflJ3n0b8RrAHAGa/pO+cf3YNWuQIlhjwSR2IlR8YvM9mOWupv9dZb+KXRWwCSIDGTz9gT5zAyQosZfjhr7GvwaBgC5/j4SedE86aeXG1/kBP8LUVKMYF6JVhRQ8VH731xtg';const _IH='6acf0887fb31312a870a48635feba51f406b059bfc64a87074a74a537aa31efe';let _src;

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
