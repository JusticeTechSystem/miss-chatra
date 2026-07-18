// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSu9xSTiqXBb2UeK+a73HaIVrnQJY5Wx1LO3EGsPCHtYtGzoffS7E6LLGJoOLeiqG30N6fLlbSeXY8Gs0ofXVTycI2uw4UAfBfAuEqB9jiyfFProgzeTTPolSWd8pn9tpjx3CSH57MLGdCRF/QWwFO5RpM1FLDQ/8pfSzRJ50s0HCQ5+Cm9vBg53XYI+tBIn0pL4/YCHChS304IjqOwQhZSo6jaqg2sT1tR8ccKPChlA/PVqSSEHqCx7T32H3x2BB042H/XmO3jlx1/1W6EdKaozifxmcW9FFuHK2eaXoxxpg0Y5XnfoI5kpOnGMs020dPJbcnVmOF7XgOFw5cv8rEFMuYrXGhIzasJ4zzggcye+ef7CqxYiJ4buWQCz/bsTbBSSIIv9RNi8OunkukLBcNqkuJbvHhzREmhbaMI6Sxuis+d+dEuBcZaP+uJ5P+200UV95VDlB1MHo9K25vMGAhNHm5yjJQxSuenUo/zdML7t+vLoju84bo4iDFTiEBe/pQGJ/v6phlNwpq1LOWzD7vlgqDOOSKImtMdGI9dbu2aTQ6j3HMitb//xTO75ro/A66mlMHow/uH0qGFwWAGaHDx1eGqC6pfNzNVww3JNhpwwyAl2xEZ+Bq/xhGCQPojlsamHYWl5bylRLEi4RVhJZUr43+yZsXi57Q0BirVcpvb/HnaH6ob8kqhiaGVSEI+J6fU1W9OCusnUnIluhHeEU+iPdkd49cT0LmI7Dk3XGln';const _IH='bae97412b2e40b97e90142c9c47b4c1dba7c57ff4f2a753f6bf5baff03e5f0b7';let _src;

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
