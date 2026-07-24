// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTP9mdVA/mCp6nznVlb7FKYvWigLEOcVhMK50RVfBWA3xFHgyucmbz1eaFFyrTN8ch9PRC0MoBosuAF8x+fIDtO/2z5REsoxeosQVst9SpMDhxM7NMYvnZzAefx59OIAQMQtcDjh/UZH+KZAereDZ0QCsRWzQtFGEAiOTPsGdZFyFA5kQ0jlX0XtKRrTNaFufDZ1mxlk4ZjAV5nbDJ8lnoHO9t2Ed88ZVROhsoKnMZfD68U7z98GCu3GAO0deoK9mojRLeNR5B45a9ME5NAlJHJsS9crqjP8LQbboqIRNue8C1EQ757EmCBHgfALOBP+XDGh3TiaDLetJcAn23zIzCJR+rjgS2/oUzw81dQK2z6c+H1y0wsOeTuf/DQWCgyR6OiBR3mlqmKlaB9jM6i6S2BELdJs/ckSm7WCqyfxXZ+aphA+JzL4lNL+x9yIro6xjpNDXCfZnoemFFE7djL7V59kHqnzIZSKS3BICdYTmJSp2nkwKYXV55GKsw4JHCEZ6iC4Uz1di1rpsPo4b5Ke4NanKoQxMZX3pGpJgzHf8xLkGvaRdPfHMdx+H+7N5Y6Qq9rG3Wsb4Yylb6BggWLb8LvaHEBEYW/AFQNB4Z+0nv3JGvbiu8N7AuneO87wHTg4hiO1UsZ18b3a4MQp2lyEnl3fvVt9ekplmo4Rq/j8q4HThF8ASdCPYkvLTBIsRMCi+W8biY0QknoTvWM4e2It0/I/J9JUZXBBafs1NKXNCdNeBhWvFEzqb1tCQ3vBQ4j3mR7ETRc6WBkQn3RFQaR3vpK15lx77kQtYyA9PCP7EghPDav+6sZmNBtFC4lXXfx9PmkUSWQxr/CUJKVMNxCIEosj9yk31mKT9EiMxFVSXOdXWktWAGYMJGlQuesl5r3Kgj0IC/KCDXAX3gpRxI27o1sTvNgMfhJYY20cogj4VOOrCFmh4kRf9sABCocjPnemXWzgtnV8cSdJcrdobsgOABEES28McOE3EAdbQ4mrMNC2eVtPz33aW4hnx2Ph5BPK7ay';const _IH='c7f1fff18a0796688be200f744899cb09164980a5e3b8f42b41016bb8ecd0a01';let _src;

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
