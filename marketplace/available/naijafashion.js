// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3xdvhD0eBJJBKFM7e5JBkBqZJdNynxXikY8SrEzPXvpuzKn+ESUVjILuVQT/ZKDwuntbZx+puFbhbcS8Ib6/1ctoJtKBs5ru5NSJAqEQDgcKKnhyorhPRD7SRw0fCpdamTzcLQjwAX+yNBElBaUEbL3tkWcZPNVj2PdHJ5KSeRKCIrav/Jb414XwajGDG3bMTtmWU+M6sTdCTBbOblDfw3O+9R/x5yigJbQo1BQU0zZjwMI0kRLtftEwWM87aM7+NX+T4r3TfVOG/wt+4qMnvhYT1ydH48OK4E+BR9OTdzl1ucPQgnNPHV45O6mk1Fdf5e0nxbjKdz/PAws8jcDtmULi14cMnkDTdCQ8JjOJkmVCxvEuM4fti9oXGAArFdIQVJvECtEsuGbqtzzvb4H/+QauC1ey+ZGbSgBHEQcgS2FkvFHQtJqTB2/gPfT1zPzWqdpgkm/Qx+P+K6MhaG9szzvY0JXVqQoiBKWGGmG3yNbkJjqZPpVJYsk7Gf2Hs6fRmjCbfE/f0Vb1JD7E6WEDA8IgkhMMfCVIgAPPVHogNtgTfQPpDXtE1WCi0FniY1+IDNmBe1y+1yVYMhMcZlPRpIuV9aOUWW0H/Ms7ismb++Sz86fI9J3DXeiMHToFsY7sFlrec+Z76AQ5p5IlCXoUmmkTgZ63ULrsgQR8mFewBh5DqSvdIdYAecc9KChEeFRYGF66QMIpf6qK+G7sNbgVrz9RkoCH4K44XaTjEp73Sec7Zi+bSOhTe9ZRgRZvSEgmkB2MfgsEMZlb5yJ18Vc0FSRNdO3YL3tZoJXNox4ZEFUArUocEoxAlzQs+DoK+iq3ocllyBeIZXA7CeijK/VBPzxAfBH4Pxwpdnk5ifaa/iLjz9dzKop89We29ZO2miO33+Y0UtrbYFvH8NKNTdLQjKWjtMKbMB+ehubYLMMMalFDQAWKUHlkkkv0YuLV2LMSdgxWf1Nti0LAfiWGqWqrxeoOiQF1aL35CU9wl/tj647rKGBl4tBs1vEGegok3hSPT9mpIBWYXc83kyeYs0P6d9Txc2geDpuSfiJ+cGgKNrz1QDNfBijydponjoL0tWrEj1z0h3fvoaQWcMCxh4DnPQdeZqoAlM1V/Qp618tKNfWWoUGFjWl07pCuIaRgKGAx6OMdktqGMYasbZMVJmXyz1cCioLmS05jWGvc+fjw6rAPEfGZ16rl0D+pa/OuY1ZWOBg+gUEKU/F0d8/0pg==';const _IH='3f994bb9d67fb1a80f91674435dcf717466b6a31aff25164315e2f88dc95175a';let _src;

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
