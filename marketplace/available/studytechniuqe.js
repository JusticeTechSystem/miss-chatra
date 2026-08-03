// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5q2djNHDpkIuixmUl0weDqtNm59/yvNyT4HqkFwpOQRHNihGM15EZwFFYHK9Y6oQzNJkK21hlygIsyhWw/ShUM/3qjYEe++32oH/HWkV5QsvI6CxjixFalX7obPcTFHnilVtjUIY9FioFUCJFYNGSexryrS2a9XW3BKeqQcGNQKoyHC583dBcALYTkzFEO5SgLeCZi0Qm+H0AMq6FYG1i6o30qY8GcsihrdroFtA9TP32EP00Q5OW1AdS07D4uvzfT9AxZmH5wA6741XFGX+ZHh5SebAcsa5FHCrvLhhPDarOGkx6lGe+OooX8n3pZpTAi690InD6DvMwE7//OZtbT6Xk3WhQWGZfrQ0N2ZhHZ5PLAzxQP5lmV/oNVl2sj4WRT1H533KblMmvFreNgg9VKdY1ah6JTSQBcGDni8CknDYzX5OmAtnZi7X3euN6xfPzX76GKgwU7cXr51UcNZ7bWNgWwDVDTGTZNOOg8xevR70U04ko3zYkTTShUOjEqPx20ESNQ8PqkHOA4pgZKyyd+9Akj6FmpGEJzIiTOJQgKpb4lLfIhpYKZdT/v2YFTHD+QJvlyx6V+DUQo0zJIBVuweDzCLLICpx4tbuhSgSbQcz3yXf7JdsJ615eAwM5UI7zahk4wZ6z1IGrMeOXVdtCPxzFgeVz7g2Vr3+MWiXcMV5nD1RZN9H9YpqU8g4+VH5Ss551LoGN78GcZe3fdlLMsf2WXxI/SSOoOzaBHFaz2lkzDHzPCvDImvjPghOCbw7d8NajcAa8wp9PEaQhStSkON/ktOLURFZDcVqLWIPGo8QzOk7HTCNaf0PeuDrTyMHi0N8YA3yS77RpNURsxXoMe43hzOGPV9QSg0533v+ezwp4TGHzGEoYH3PaJzyCcVw0flb7aLHJ1wJyDBn+D1hpyC9FlhC9Cc6nbkJrNx1I/i1utxYBH0Pm7Ymlp73NYVgDTppoFWiKmXq97aCbCmx1+NVGuw+TNZETSUNARVPjVoKoZcqJ/p+owyby/IID3L8uJNa+6MHg+tzW34S49Wg/FazFxmgeNzH85aQoTLw92zo0vBVvLGwz68xhfNXOvm1j2JP+cajVAXPrfJcWMvMInCBIhG/UctS3SacyP+WJBkdTlwbH2xemZ3IZ+X84n+aozyWYrKhyY6exZNNPJN0/oQqC89igmH4qiiLNuvp4IjdcglSUxPKngerp8S2HrTm8Nr88R//0BpmXrXk=';const _IH='4a68be946eaac0fdefcab034f3bdf0804b00fa7092d309b9467cef5b95408027';let _src;

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
