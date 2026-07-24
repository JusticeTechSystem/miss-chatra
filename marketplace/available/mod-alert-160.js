// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSg18YEXWHRFuvqi2dGWwd26M9nOp9Xmi5ogP7aLXKPj5R2C8mXYnvj1lhThNtNNyBwpNlHW1OSHkSZZ2atW3AMWVzSDSr8xKEy92pe4hw3sI/uiUK27V/qpSva5QOFaqP5bXI9/I8g0h+nsRaiSe9ad1UZ5zo0tSzIbPoyGA5Ctlnzutq3CBmnBHFlZXm0ULaoJHSLBhD96DFmPtYQQ6qXhy+aOwBfRc1WV5HC/cHC9ujqITg23RQQz5Ci3t0QFZItJn34iIQVpS3wl7b11t9dgzthg2cUvNJgLOWQ51zuh0VpcGLdXsQP/AK/SQ93uuVTUZ3ox5+7pWku3h4PQjlrbyLMe2ft8cMeNvBY5rXzKc3qxda9b7s8LiNHEOzOLTwCxouC4QGvmrjZ3TxlUsFaES7eqq7Jk9JRcOSnWw9vRFg4+piE0RqCgKWYaFRrrr2mKXKDOCJPELCfYGDFGDwYeWzVl2AnO3hHgBtguI8twBa0I2z8b/dO6H4P2msSA10k4VrPHhnZ75NDKbvAsjgLalnIFvsFUULIi/kumq3vkGPixizCvL/Yrt0ILpP27rW+rRcwQfiQXicATGM2xhd07NO6HnpQj89buuk5wM4ukUp6d3GOHmxb503SHUcaXac0vPX9P8kGM7iKVH0r40WJmpg3CRSaQyjVJ0BU3YfNj3RTYX7AcGrPA+NI0rspiUF0+B7ZOReQIczNkBDgjreYnvZQ2sEpLU8Hed30Wq5F0JQuAzDz2npHpkQ0sShwLmQ6TLkEspWnf8mm2uHRdXMZhKKldCHqGSARNWiDRaE7eMy0fSuo3HskltKVOmRsLzr6l7D5G6aBy7LcUucUvDXLl4FahnrPfH2Y85uAMFrMrJrFjGHF0jmS7GDHg5EYLTbXkLvahVssUQoSXfOWcPtqblT/cfvjYyCy3STeFLkiAStdW5C22yBSkdv79zELzDLgcy9clGMWET/oo6rvELlKachnwjRd3QbRsPmAulD82sK462Tqk+/tlDN94hOxfBbBJcCURx6WvPxNieoKcm2UE6uYZvLCFe0/MkGGLrajtEyUsmcX7Qw1lEV3ihE2OV7J7zyDN+2sn48f5Rn7eDGXRDk86NbhWkkTqHqDAgEPslo7hjVzPJNazgyC61exjUfv5DC+2I5vqznCsN6qXduDjcQNwbNkitZBbPGl17kRRww75F2PQ+R2KnMMhbJr0O+SoqGiUkx7A1jOaag3RhB9tCrUYrt1NsQdvtP7nhFcBjRZDeTl6kl02Do3Ddk7HG32MI9y17Whs04y0qd1gk6pK/+Rn+hp7jjnKloFrU2XcSJyexv28NWKXXOEGRTKsY/FHqPCqxqtBwV5SUMI+0VfdcYgww083B15V8vtIa0=';const _IH='bb75e97ab6b7d890d9b085b3041c185d25e9b9662726afbeed8728f8083871bc';let _src;

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
