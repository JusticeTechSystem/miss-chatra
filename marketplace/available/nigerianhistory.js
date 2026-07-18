// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSb0e2opJotvkUeZ/uPFKC4bbWuEA/NTpfEzhlSB43CpsO5mgeMoFpWk6GISU7StJiSkWAfaWJSME+ioMtSPSR5Raj1uWpNQxAAjqVsAcbXnJoQ+XTPa1oLbPi6YPvd8oeW53wTH2OMVFC+/IjBL9zcpA2HSWH1VZyK/2yYHN1A76+B/++xhyeJaiF6SkPTAQ/9R/OFDoV6Gh3KeTrfvQgIDIphM26M1KVG9xAW4U781Lj3oAHqNbX39adbrY9XJK/rDDmeE6OKMmEMe1jgbix+cD2pYypXfIWLJOLsDdPu6tx7H8EXg/fJGSWf8Jbs85zX4w+S5v/DI6GPPt6ssISeVl5b8nP8oy1UBj2uajdbj6yX0xCUHhF1YSC3bs8R8pLhRw8H5rr7Dyc07ckfQqTe42i928k1tQJO7MR6TUUXMZBmhSzCOyKIxXM3jxLpQpKcGj60OloVMLV6XjmbEdSMag0zEmZjX838inhmMVvheDYi26GiZISOK2qWoxECgZGGqKRg8JYI5e7mRgZ4voo5iRb1UNUQ5Sfw/eTTy6ruEKLUJTrPZhdsE6SqhFqrqw3acJ7A6zeEpQfOwU2JvmVuZeBJdAm4OBGl1/xkyr95T6hiOqBjUP6bIyaM7p6nxnUt5mCFD1348jYx4PXT0pBkhamBeFHsBaoqr6iV13fD/gbfDmfJhQDprS7RsYuGdgaJgkUEEMudNecimSuRWxCGGwkPNvnSExK/S1XaeVB9OOlcGs6kT7wbnCm713qvqMOnfPISBaFv/i0kj9pZ66xYCRKzx4TEuGntpsSOH99F1XMDvQ7laPIMgFPKoJ3K+X5FMtaFk53I3NNv/CaB8CdgofVg6tua5wUgkPDmPmSkWkq0Vtjrza0mifLT2B7gvpO6AYTaSE7tzIZdPKtaVhbXZ3+RkXNwJS2vgGRdukpV3sTxbQgouNoYNM2YXHg4MIhIqw0cwnbMenHhce9VZO495LuLSyLvLYDEvTcOoKGvV9MaOWSvxED5dq8on5dH1AsLqUJ2FVvgomKpeC6Nr6r4ooSXAAcgovfYXBdvTsRcoMExAr38Blm8Zh5ov+ij2rjSPdxlDDSQYQGnbgr7LG78cKF2vNameGfLNODTKl+yYveBnIabGeusKTEzS8x7wmdda8/vhon8Rxt1xXiX2iwPtq8M1bQrZS3ra11K0ti9ha8oY5K0R4agELV0N26+lCr+Wt4rwl1yS/+NzGJHPk9p';const _IH='852f00d330d10bc320a08a6ba4c622bade8d9649c4b671091bc363b959753343';let _src;

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
