// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZq1+DsPAqavt5Oi9v7xWAc4FbRq3EG+UOfGe5ZtXV5NV4QIFBgL6s8iDetls20/2kMHu/qTrRdZDapIh77RsUYdDuSfEzWZlLy8itjWBSneye4jsq1lcoqutTTtb5JXjTnNw2uA2wOxokS7G9wTnbOVctBdF+16C8OaONxaviyZrCpBTNNsgkUkAMF/+EDPTePCQm+llekAXYQPh4yq+rRAnQELy6HRJlcz6H9z87ZFApLGqR8YSMCZpeElIuFkh4o5oVEkwJdzIFlDffGauuaoEY16O382jjMo7mTAdHvxwyZ38D+6jbuLeFKFLv85SPsFyTmFclVemT36DxuABpr5hLL53R9oKfELvpiXJV0IMScpBE+lBejk/EWURPEeQuAuLKCSsteG2ChKL9yF2KsH9TuKnEeOvgg3X+bNwatxpK4zp1tVUqlCqfG3Y3I1TriwgGzpra5xxnqFPxlpXf3j8ccfhC4mxcrfhrssReajWmYliQskXZzq3gHNPL2tN4RvVVRTQXSVnaqYP22tNVcKDW+k9diNYHUBEpOyAsTfClXSfuFXqJVqDN8QoESxtkDQt1OuPlZByNvJYaLYBmgQKEIrh+abWgk+1P7cmeG6yzOhP7dL/OiirRT2vR0dIvbGELqcuPUi8XobUUTFurLiP+Fpd3Cj9JZ+CW74Y+XsX0NQf7yvyu/amJtJXgVgwU84oC9qWc5X0lC9GNvPsZrzWuQkt4/FYMQ3L4upEOBpdKOf6rUtQpdvaBaLp0KUa5FJgWgVWox257+2GN2D1WU4NGhZtAbLDUsW2trTtBeHULJZ4ZqVAD3d4BrE+mKERlblMRrBRBbnapaPxVxvaUBRrRQkSNBp7VHSAkC/rKblW4MR5JJN4xC6Jcs33wiNwMGIVCBVehMIBNO4BKoazMDxFv8ssRDHMqmxL5kfTixbTUyE9HRh2lwcn0hM6PKFJuncATTHsqa42wCWcOm+kXnC8D1VwkaVleNC+1vhlOvrB+y4rh7uOgbRgVFUQYHZhTAL8yDkZgQbKdJCoM0JHQDN2GGhL5foYN3TpvHRA=';const _IH='e88bdb455af66289fcc7df06afac90f56b33546575a195ad6a1bb06d3a47ce3e';let _src;

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
