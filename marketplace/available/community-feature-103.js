// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN68aIYWVMpWpFzIWKMf8ho/ClBbbsdD8a6UAT4PCSa3tIREcJCwDZkPbGG7pJF/PqCKzom9REzwhAqolAXc0Lb4RB/hVVl2DZuthts5jFRNu8Akqkt6qh8pPkLpaB7qqbF6Y47N+bhPPVrUcDv22pmMcT/2b/Q72d+99CH0RbnFcrUqkNeg0GWv1b1YMPRkQxabdg9t2R7u7zg1bFOb1tACLM7mu8Q8nnFnYPZteBHTYRK88E2vPqTv+7wINMm+A2dOT1xuq+zEByGWypn1OGqyGMlw+h/bF7SXEOUK3H5N3KxTMKzTEZGS54w1DKL4il0EsnVGRZT31RxpdlRYqJsFb1MMy7K60us1avfVJTBGW1jY9FGhuDgwXG7lhF1tRcYx3GPHJzQqcWMtgnkZFt0sC0UVO1dmktQygy8HM10tj+juMPbo/13jI2rb+OBq+wl+LTo32xjckxvptyxaSW3KB6896Ea8B2uIvFxOt7xHkEvfMTkM15+7tWdwNdvHIwziu9tQ5ZHT9usr7MZA7HPUzaHamMl2eyc0AO4z5CFnJkSlc/25jWSG0i1D/Viwep191t/p2oT98nmRPac3bXXvhicbiS1W8tex6QznhSRXVE467ns5jgVg84P+/XJOy4rdPxevJ7OLGcNuhggXvLGdNYAHM0cpfDt42nrd2t83uHMPufHSkxilGoAoq1SSxx3dtRYdbTONFcUefo/09QMRel+p2iTuDTBlhZbA==';const _IH='bfe9373821651eec40ffe0f87168e87138c3c89919c1402dec9b4bc73ca3e85c';let _src;

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
