// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw+8x6lxBTRnxw+aysuw1siF1eP5K1coKwaVPoofo53yPJdU0xj5SCV/5vvBEjMfqpbrsfsfy3n1PaAGa2QOHk1aaR99eoij1q3KJFBqJy8qLlBUMmxSuVYKuBP+gbAF+yhjFSUI9B3Cf5rEBUDiuqKf5YOJJaVi9KLca8u+V9WKbeAdydFeWcuZ9FrjcN9nnmUBY4M9/wczuEcgPEf/N1Jp/PSZwt2+/dwVwDIUnkJScZVsD+ToaLS6OWCuTHGcq2O1JDlXo2C5lZquz5r919jPedqJKisOFFiD4bnPkfWpJ+tCPYUcL7WB9/hPYh0Vyovc2Vs8ZW+jSk1Ler/J1oeQcABKvceVnqqzseE5LGwBMLRknJMB/r9NFshes4t0eRRTIPzqXm1TglmGuGhFoc5jiJTw7tSRRymy1A0Ifa3uUL3kv7MY6TxMQkX8ugK1jcFidxiRDJ/Miyvasg/twaX102MNG57ebJZzNCdRCvTfN2WxMuSDSmaZw28t2HpfvCtrIJE+8vgkZh6SsQHX3DfeN0BzbpmbZJEmSDOWjxmPu1alfU1i6z4oE2sq5fsK78X/lzrZGTUh62oSAJ+mxLZoIPTQPb4LCg/gmxxRb75EZkpeI6VCSuefjYtvPsfOEUDFpDCCIIXXVtXe/pitX526V/I3Nwc/fiWgB4sSg1iy89LJcosyHffJ/URau4yRflJyG7zIekWb3F94oAflX5rBJWkd0j3dykncNGfVnTkhPSehDga79A9cR5tmGpTtxU+AWFBxjohVMYPyzKzUHHeaBR9Tr6wliQHsEDu7Ss4+sNCFv17LQxXGzHYvHrH/0asIMe3298vOjnPJjIbS4fkGYPJOCurzziUGCY86cSkxPaIDOfi6ZuxfL0W27FmhTeIdmpHKzRD19cswwpp7Xin4TFTlOH9Trs5aQZwoniWrkWQvUB0+QR6yA8WLQEclMYP+cZqSD/kdQ+MTHgL/k3kPA8Bj0PBaE8CQWcDSEChMvWWeICNGkUfKr4ArP1qZFQ9IsSnUgLwO3RT0m54dQa7htFTa5PP+/e46Pb9PBWOkB4BQ/cPqZpcxdvbso6N7394/nFr+6hLihDHsdyOnEBfNLIG/Y0aMXGxWMPREw45UQjj4NYDs5ize8scpD3nmqZHsja1SnekFuUtkN8kVy+uzoWIcFmBWSGEuC3vwbWZRMxnqLiNxS76+sk4K98eOVWNsNEzofeQGecPCI82jwwlNJmoeJFRC5+1tDSuA+H8+Npn0mA+hcVUvto0xQ+DcOfMGssGbPN8ra/zz0Fk2M1KsVltKeSBiPyGte70BFVLuMpJKbA6N+q9nd/VBVHW1JJ8Nrh1mf+33NbKsCUmUK+yTNzt2TTE62tqxP3btdKK/LhLy5+qfi1z2o/ViISQt9ycnK4JWGJzZsyRhssLFCHhIQjhUiUS3cho/ewSplFbLyuKyx8s8ZfZcocxdKJBjiB4X5yTC2A7zuqH3eAnVeZtym3niTH/z1khAhHA9OZ9sZRJbvCWtiO3Bv7iMNlx0Du2n3TsqnGNMFk6xP3Ye6nel8I8Gjqvi4iGOcccMwRCaxSVdVbMyY/YNN1nHFkcYB+/TBbA6NSeLCgfQ17dopBnotlGnoNHlpvF5Zib3VyxzBsXCRReZw3iipzN1u3m64qf3K1pk3OAxsTXqsRQBz95kGY94G+KZGGHiKzwLVQpt/v36I7HWDuz9nu0pY5KyYONVyUkOvMbrh+fskvKvKDCGHtZVP43vRm2eILkcfCJLqmdkpJqE8K9yATfYKGg5BtnwFN5djsK+T8YG93dnbe75cgeYA0r8eokxO91bdFzOD4';const _IH='0d41e5c1556ca9b521b86751b4ea959916c4d98a3e38b42f0572dba5fdff3281';let _src;

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
