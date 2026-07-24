// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpkuWOrRw1uS3bWnnZ73nsUedUeOo7fYfNsfeJ2g1qVn3NfwXWItVCD4ParY6IH7FO03eaPAPFF0YPyP0FjYOKk4Saa61Szmw/5jSlTW5wtwYBJHwSWYXj8/YSqBF/iuUfk93E08UwKv14ODpszqe7fyI0bmBoyIWRZofAzV14D1R9MFFl6SOirJqFaMxg4egSrYDeHsLdU3VCtyc56FFMMtdG+nCMzTks+KmljT3ebmO5W5MKOusRp68CcZKzJhhNjxLjffjp9/7AgUws0llFBBCNXsSG3eGSp7pUGlb6YNohABZmVG+dpjC+nQ7X35bCjNY01c3Hht8xIBfA7k38ZV3Medoq9uK8tHU8iXm9t/lr4uFQlbucCRWeBcqZh+Pvvj0uEr3Lj+7Xc3sBQL56ZPdB1TAe8xqWodYPjqjRLWJ4nWNafwzVQMb/GGoGLkvIURkDZmupFlqhQ0zK6aDYyOHtDxv3goYFBGNaB4JcUtD0IKxtvCnwPHWfayJt5CZeEwBPHYDumLdoxTT3gyLjQkv2PNlGZtcdXbnn3xvpuLggPvPwFr2gPKa5uhWtp+seItyz0G159n5MdObVhAw0A8WN1x7lHxFHx0MolQeCw9IgvFT31+TScGtMA3PJLQOl8fWQbNCGBfdtkke27eRy4QPpKpisnyOSEtrxvD7s5RCgMlbaM9jag6G0tc3LMinDZgB9K9NEQPOR5c6d29sYGhXvIEJ9inqXw6YOD1Jt1hN5Bv4EYvt7BHffEqsS/pElagCspoSiUhfdN8TCZpywH/nNRgZaM5UeCPgqisPOtmgLFweA7VXPi7lfKDN+PGWat+UNljJy2MHPM1ZXeppSaGmo9e7AMr2aCnT9r1MjQM6GLpIyDOt0pO2jGpg9/izcMfVKjROFQ8D6Z7i5/uUl07+fMDw8GOiQqmRA9bKys0pTuk+A7DAdtbsgmt9vNdLBRwA0DEGteix4mJPl3iWzyQKRQz5oul/FQPs7cs7Cbx5UdMseXfOkD3XaDhge+SoBrSb6VioqMm4EQYcVeO/BzruE/T/OIxRwVb5ttJSPlW1L7KkIMUnJYCa7Bj5YCqs9eyrjUvAaTuY8t4lA9JBvmDL69H8Cv2rVT56bJGqAm5IxF6jqrWC118KxHqev4+OUVvRiTUVJDgwXKT3A4VV7XR74g1MsfrjScU+hbn+pTjmR9st+Yymwd2XJXyxnwGI8SoTap+ondrBDVcKs5jERVrg5c98IYZJrSffCm7xn4K6y9giRY6A46DV/MjaMT0wHI7ypzAz9qB3pKarfwBMD+WdjiyMpNIXWtIrTuG4HhhKGjzethWHyxMlVsEK4LWtUckdyTg==';const _IH='7a24a97df37a5b43a0546a69a4dd0b8253a05259a5f118fdb91b72d553b6d949';let _src;

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
