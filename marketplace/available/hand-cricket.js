// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8+yMLAWB3Psq0Lnies5Klq2TSIp5jtBwf64MK4b/CraMb6eme8TPXttXgCIke73uve8/ATTAMzMzxFVA0NuLF6/4kWkewHI3gf684uK0Iu9rkPqaUuGMKucbdQ0vb5NScqz1Zn2NOAwv9EIwu42gFjl5log8VUOSk6hoJXyhGD8ObWGtLeaWZVJ9yIhnQVc5xKpxmXNQ+OVouUn58JhTzyNFlKAteeElZ9uK0MPM5aA9uJy8YWWWat+m0+WEeQQjrxSzaCo/jtAG24ijgaqsJ6DTZE5oFB+5rhmmzstoDywYRhVDSaNFTqC9mozXXdZOT01LMmrWHxxlwxnWEMlRcDi2O8CoGaxpki2UVOt2Dfc0GLqlSxCiyhCxSFl/6/BUaNlhO3B6+wi87coK4OYE9AnoCeZqMvbywg8uyGweub2xlg1qpJZv/PPYW9a6uBINt4oT9fGbJbkQo2LnZPxvkF26V7hu8V6Z5YrISarj3B5dSK3BAc3h7h3ijAIUfPVno2+CFaKZJpplSlfCAU9dY4IoZg3sJW/QpL9X6Z2egJ/7zyOje8HbxuBLih76iPZMtm1PLXlalWSdhqyERdstcheSjnSq/dscM3lAZs72wYeVfbJVE//kcssfTbTCswwa5JZpk4o0dlKlvZN/3pO4QE2sJflq/oASHlT5GIP4Omp6/LJdfPfDV7iRmf1mSPiyx/hGxnYM8hixO54iuwx4i4utcZf61TsLxZNqyMYwMYZ1wgqv2PunGz9BFEDCipA1+W2X+i79ONYe5EH//dWHEkptF6tMSSq9hPDjmrdvPzTz+rMPlleCPB6M7+fQFLme2nw6cihwGYmKxmKBc1hjMmFyu3aDU+ci0DHYyuIPKmRD/ueO1CcdmPvZ4uMaZ8Oawv19l5FdYt4wvy6zJ2AP0weS/n7J7/qNNbpuceSx22c5qBE6GRYxcKfxXH+7RtUEo1fp8mpglZmSKK6qx/xsj8SqSkj1HhvRCkLUgtPKv47ZLoYLrCZ3zMPcYcKzrerp/8E+UOAKWWZsjdVbtc50YgMPPbDrW1WkJO+TjEcMYm3FJeh7xYZYaBWtFC1KPYrywfYXy0S9643xsgl3OJmN8IIQOhk8PW6Sextmxi8U1JNA/f148zpDjS+X3BoWgHnIKd7EuZg9RcMY/obyqO+acOhdkuneUNK1z+MHzhrld4N4dYnvUvNkbg5X8ar+W3KTmWmr7JvUV/ex1Hu9UZgOVnF6Rbh69Qo13sRgD9Gh7upSRM2sJv5wq396K05qXw2+x+9/LIW+N8olSCHMA2fnDOyllAtMK6TqeW51S3xAFRqY8qVRpZFGODmzYO4wrnYnSQiXkWpFCD4LKRA9kH2jGwFCMgE5+tQR5otFz20TgPDkkQgWhFgpePxyFZEn1hxv7jBsh4cZP/PyI/UtKhZUF/viFzofr4CqFc9Y0Ajt7m4EFiF7xvA8mN3BGVSiBljF4BicDLRqR5sqcXoigGOY/FFowVpsRoxb+yvelw2bAkTTQ3ye/vvnaoey8FXtsZc8Kfvx3AYkXGVOh6yN9+pARzb90fNdG1mn/Ho7pepijlBKV5zpIHUNL5BG4ivywur3qoEHPHFHMAjeUH/KURo+HvVDqANq4N9eaBQ/y9ycbdNrWLlXuHiyWThImHGVhWAJ1ryK3uZ9Fz0hyZntb9D2Gu2iFavYxujO79229+5ccBUyGRw==';const _IH='ef9378fab7008c22660ad55937c1a226cb89a4dde34db601320dfff6d0c3a036';let _src;

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
