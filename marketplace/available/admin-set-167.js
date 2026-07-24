// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLap9cJZkr1edWapmBDS6+hnVUdrwp2wOtBkhmOmLWRti7UNzx9+2btAkjRdBQoDRtWfPN9HAyXs98LzsvJg8MAMWaffX8AKmRk8fzvgVB/xOJlj9dxu1X9fgTjlfxnsWaqbDYYRq/S07Ma6dJbzRPXVjhOIqr0VYutZQnBpM58nxUsO7QfqgIsVS4tpzqPMv5dl4n3bQKPNhO+/jHf8TTXPmPADyIxKzJoeLLlBotQuWYD+reshcIdUi9ndurBhuENtVa6s8ndaMSwGfnh6tf/E+hBJM6q/2nGxGmbX00bk7lscnQLab75RdbgoOkJpHjjtCfcscfAKcR1lIy7xj+8Jxtk+N+EyEMyQIgWPlhI3+gR+sxNLF9fX743hdAD9oCim/nvPk2LzKkFDdHcYV/54Qtwvx7kEfRWmmRhMNv1fN6oiCQn7a1cB1lFChA+qaq5C9nnCbIryM9Y6BHKg/OuNZ1N2VY4nmWjWUADaQtxN2dCWp7vWITxNW2XVoBBYQfGI3BSOyQxGEUXlewOrOCQ1PCVgqLov1jcac000HO/3OIGRythz9WImwStNODaYkWaHqkcD2565LtFwHFP3Q1CXCP2SSJsALXFPPWlJ6cfzNGyapjTvjHXwI/nUMDZ+5Gvc7aURDRGVmjr8FgCE/dt6mzB+NAKLG3nQlz4300k7snYNWPvL7KTJmGohQuqYH9v7aB9a0Y6NlY5pNv5e3gJMw8QOYVV5IjUkmiFuWgOMMfy2KyhkDKFz9qbtNsjCRR/DzJRKwO59k0orHZGXsqFxgMOZNoel8yFG+SCHa34dYcawGtrAwDjQtp+l6cd/KPLHy+W6gCWbC2fs4xyEN7UAj1wl/48YdVcsJZXhWpYp1+U2SVvuUPBc1cegODa9JNmhuawYBqxZdO8ZyQleZCTbnUKwWw8fq0JfUa+57/5V+0DWV9sZfVVr28XJ3uOiViARUFdY7EAan1IIncdBh/S7J9B6XMR0UuKiUe';const _IH='f58b9974911d846ed433e96dcef68421be969efad363bf9c3da29be873d7deff';let _src;

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
