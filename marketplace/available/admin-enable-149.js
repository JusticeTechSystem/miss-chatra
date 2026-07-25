// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSP37TbRhGMFWRECdmPH5x3rME2f4htT3AQO+GRU1yOhxKgmbJqQENNMvyy43QnQWhdB2UFQaH0Dn9dipE28oKJvSWk2FrS7MdktV1E0GNnq7JJCE6MGAwspNued+NCB+iIK/80GcqpDULgB83NpT+2ITjjHLIBFs1Efnv3iOY7GjaHo6OtZPmmYWxYOtaiQAum9SQlP8Tpa6QiKQy/g7JjoxBWDwAIqXW5KJSwQpjZrIEhbFjSFVI2L/k+BZ3JLwy5u8sXmDkms9pvoezt+DfhIrBPOVbAoSlUHQE3pR8zZwyOUbqK1s+Ml41e8gs89ioMYjmuFuCupx4BarCoo46hGVZQjNXGCxeCoNxl1QxguguRtRQBrNyxpbF065oJap9gyMw4u3bG4ECW1Jiey114UDuHTxK2/81X1h4msVx3B3lP4v4D6YQXcLTnuIpPvTGpqdGsViLUCOC7UrUek1p2H4KCJIT77TRhNCim39EFgtKf6Ln4E9Wike8Ran+U7SRzo0+2KrDdpSpbuQmuIxK41jrPLGm1djhjzkktgG2YGSY8XBjCwGG6k+c2PD+kBDqiYQPgJ+4NUywV9S4/JWIK33YZfp9taZJ/AYSTP1lJ8fkPcsEhcok8z5lha12DBFP2o0Pf8s4Abzi9F0ePOy3aq4woNgQ7BrUwYwhLAAXUjgKuL9pp5NlCmVjU8O6qYJwSERuYrkD63MyhmxfFi3MTwblXy0EDHfZk3GJkdGfNHVVShG5q/7IT3pPEDJt92QoVIvBjfbZag3EASzu7ynw4IVyYRA+C+zfyFvGZJ372BXc/cKk4NJXuoR3p61KWStNhFq6v/cQeHdHI47/jL8FALoNaDy99uyyxl+/r5XqmkZFxGXKGpqib7Ij+nwHq8t2aaflSfv43aq27hXM9caAUPPlWOVLvaco54Ue8COfqwYzhCat/3Urfm/ANoeukPESereVE6pewaYhZtGh42NFHYvzAHf91APTKKmALCpWgNq4V/jUcq8rzMYqbngcbXPb5';const _IH='173a2a795cb85b48212e02f87812eff9ed944f30a01d40b6dff768feff9140fa';let _src;

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
