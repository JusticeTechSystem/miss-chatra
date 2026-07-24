// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSW6WYDMWO1q1Ukif5nXhkEaCvd3xkf40ZWKP5ZPFJzTR8piokqOIez6GluHjyhudfoT5J5zTI/3cJBgmL4fL0MJnIvpCnwfVhAb+xxw3NmmNAdoEpBBnbU/R+gG+DoWK+2aw5Ym5zKyqtssowypiT0334luLIxrGsoYumDzDrsA+uy3Mn+pz0LMNaBtKN77fmkXJ7q+4I1FuGg9+okinnNwgx0Jz1yRVJ82rW/XBnIv+5fKLu3+bQA8i/VVOZllAHPpvVc32vRK103Fh7SA4cFkaVzjIMIM6D1UatUp2uVAyhRNRZMjzwBH210F6phvkWHFysU6E6/MJ1fg1YLBGNv8+F2gavf/tIuKkOweEyKPfvk38TM6cTjHVCjGrTW+v4YKPnEPeG/cNhaSdaVIZudFpA1u5T+QcZXyQOFcNLNU25OG6sESbnNojlnYZdmYymF0lnv77sxRrP/xdKU9h96nDjdQeW38NdkmdXm6OC/zbQJuw6kPw2yK+NoPNSG1/dNwRqfjXWUUy3byfSQzt5eY01Lel5aGq3MzUiX7Pgpg8K5DfUpx9U1HeG2l3oEvXkE39F6frM2QTWqJdraM62XBhFWPi+gyyREBQk9T+RTHIKFntR6clW+l+iSO+3w4Ix7TqcZJgAOEdRELYxJXme3YBA5V+XI3okxDRkpvR5lNIyZPjnUPgIwkttc1lrVUVnmWyRJy+6rLOjEQh3nak51qtnimKjJV655VLnumqzTQyZIrJepS8KTxBMqg+G8BCSQVolFjJwkq6AZgTr9XDPISmHjpdX61ml/Fb6+Mmdv9JoXKm2u2UB7iB/XtLJgGv2i76/unOMthXAb6lvLKJpzVzrMVaEMFwWOgKtmzV+GzZS/Eu6b/1Q8yFgnGgLMyJYl9z3rL6fsARys1HHuwvie1HNRsLTz2MypcPttH7pEdsMIJ3/MftSZiR0YrHj4/4Gzr9ajjYKLNVEHOBY9oH+7K4bDs/gjRRkXoDIIRuW0VGnmlUFw8IxgjeA8v46/989IbxzFut7kfI7/Iw/qBlNsGXX7505T6cyITUNNILRALJ9VOQwko1WSpybfCHjyoHVsbAjGSMgqidKwlgn4EXHfcxsJJqaFedgu7UizomXf9AhgbbBkXyDlUN2YVDtaoRjFNqhTxTMQesVKXEpAUmlR5i9Er1d6tfBOR6WPHe9BR7aM2x5PehVZnCZPh8J2PxYb5xZCmaI8m/NuP2ohSe2XhKDue1axm8jpnTamQ+0rQSOsR8LBCPnu8GV0wYCiXcKev3D/+rhv3lLI89SPzrkdhPJH2HwDeFXHRGnJj0uaAkN3Sqy/+6GzEvRsx9RzrVk/Rq1h3634Ip7MzA4OJPs/7cp+IwulZXa+';const _IH='2fab15613b05987494557b86810c817785a15dbbcbf243885358b807cf79aea1';let _src;

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
