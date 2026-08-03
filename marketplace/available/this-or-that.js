// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1p+iDV7JwIH77dBrkFcDLh6SzDkdWE9LHIBbL29Fmx3WnUdSriPRRr7K1jaElB2MlPuurjkekCV5p6RwTTrTptPR32CjazxyLa5MLIZBJlpjMdtf2F6O2ekTVvPBJ6oWl3Fd5alrRq7XWuk6DaA0toCWeX2BGAf6rBFfZqRbtacGB+BTe/dhNHxH44uEnXhFnjxdrfvKzC9rKJFac0Zyobp7kT0bWyGomaqFD290x2B5h2an443SEXQ+ju0dv+SpGqD+NYC4fDpMdXY5A8efKVJE7AS/if00jr+7v4ZHpbGn9EPuxCfmU4q8OXYJRkldGf0Fd2ZeclytUjjEHNFnpm82Z99lXBOrivBZYm6ldtTtFaGzuaitio2x8GC56A/qR/ft8bvUITO8vB3kJzLAQ8RVxmSiaSgEv8DjgAaTAqn+ePqlRSzOKQvko0qph8Rpaief74oiKO4JBnUWVLMkGGWqeghPpfqL+QnF1Nc/sxNU/QaNWh4i9qNSYzz9ckJAA0uQrg7rz2JCxqU76ueCInYYHl0pHxsGFGUiHnEkpJkmEVEe3WIlb/4ElXrQv3WdlqO6hppLlQ3SHLhNhtQ==';const _IH='08b247dbd2be290408970e76ff02e3c08d9427d2a70db2d08200f25f7cf841e1';let _src;

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
