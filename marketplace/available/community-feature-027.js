// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT26g8SJSFEIPpRSqXKw7FWUW89sMBrV26x2DBERbX5slbJSALmRznM4qDbnWVAkt6qCisZ09w9fEvMPQAm9+AhfxNJrH+eMNVHiDe4bXKN/E2HxBYFctCdAqB/Bpi3UCOkijVkFZ3pRhrBXebwg43nXC+8pH3lMVCRF8wYmyrPvDY+oUijO2EbCmhe5MNy4R0gnTjTc32y5juf0WvzXFHHo2Pz/7KyR/S+8j/7yjmA0QOTeEEoOc6ZmsHuvzKIutLdXcOjKQp6fYbh41AjT0wmrdn7dX6tZr8ALn6kAO6+xDuX5Pmgq5aSrCYXafEcSLbT8bSdc7g9RL4zZ2tQcvG24g2fSZl5OF5AHUFOFr2ECq0QpMq6CbGW/gHv5MyiNfu+OHWaAObTDrb3nWfoqcoizpOjZSqecRhbouMTra3rK9jPH/Lj6+ScVnEWVpAZSoD0PF2aiSsHsUePZ6JHjC2/4oqOJXsytp5ZD5vsqcBnoQUY3Wa8r3ER57mD3i46yzB9sG6IWPaNv931zd0ZNtbtqLF9zh47DdUxja121WMHWv39ZWpDStQ2Yk5IYQR/cXx5lOm572+oyPaSxE2/QrFc5sPC7xsPPpV1h+c4REmCC8zH0QotZ+Wos+71ugfmUjIRgORJxW4ap1MltbbEyo1FhXLd/i3bdYeW5uKVDQEMcriGJT6U/AV94Ybrc1HgaKyzWgD0WlnSNe274dHmQTxoI6Xo46xzZrOKYxy1nz0+';const _IH='da50e74a327424155aa153dd771c9e3bd100f1a12c954f39025807bbbdaf579c';let _src;

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
