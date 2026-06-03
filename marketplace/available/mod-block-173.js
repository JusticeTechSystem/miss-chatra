// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gewHtje6hOnYBKuZIakpGKlsKhd0Aqz1EkIQGoaz31o5ZYOIBTiGcsyj5S/7W/y3OAHKs4PigqvY+5BHZ08/NiSjOjJui3bY8IVFcjhwnuL/zis2wfYdz6FSZN7iVfRThMHOlcOP7AMs/JmQecVQS9duTYPFEaS7A4qYGq23ue8G9u2OasO/W/fdQ1eAlMWo0x26qrEeW83/cucBl8sP+qacCMmh90h9g0IlEp4lBMxynyErUNsTl/Dx1KBwFAHw5/K+LpZT6SwjbVweLUwwjvfeyTeUAPj+8l7L3SEP0k2pjmbRynFlfzwL3ZdAM5XQhrw5utjozMsB5dqNlpqg7mFt4P9bpUiDzcgDx26VgIE1i4+bFc6JqNZCFvqY6x1CoPyWNtrbHbIctDxpgElBkrl0SoidLU6xxzAnjGV1CpHjGiYCQZO9B2oWXToLH4nZUfynaxBg+YdHS2TW669/Z9odamnDuHjs7mi1Vtttm4JUUejgDGwvqxWv+ANjWvcM3ljqEQ7r4WKgbPWZJx1yp9qoMj+BmrAZSq41TR2jBMswL6CO0pO6uIdtM/b9rZoUSGzB2FbLpP04izQj6/3q3KT0RiE/rgokYPmyfzjzdBtxoNRNv8Nepm4xo8/iBkx+R/Iz05qLWpBmFlNlucXnb09ElDGwodTB/PuxkMLYLPtUmaqKtFvG6Y0iz/jsiaiq/tdDvFi5cMVB6NMNE9oVNhcBduAph8+tI4ljqjjILwMarMmuUGCHKG/y03puhOZftu0rlF1Jf+gfC4ZW+JA96CrNnEiaTz/Xhpgkhk8ecrGRrl9qO1q4yopk78VVAJkPHPbSOqBVJhBeU4Acvjn1r56LOvk6iriw2QiOB+rcCoo0jkqWvzaesFhiPAO5WDs+sCh6Dqe2ipAnHfM2zXHFfrV/RBWcbyA23jP9Cwyi34V6N1OWReqheHn2pfABbq3PmMxuuIVjYJVJ+CWj714IB+qqxV1fpb49F+opAVhNG9AjtpoREJvVW04pRrFa520RSGXK+K4ECCseKw44C7v/sottz3ZkCjtvG04DoMjcLt923pvi7Q4HeRyPo4c6f59LzOl9mkU7h9gaoHRYLYL6GBVTTbksfyk4+5bTb/bvXqH/8dwAcFCT4xnV0O794NkjdGy4SozwsbrcVaaAONN1MF7JDimDKBNDKdU4xPNuPcdR9WXTrDJc12Ofa0MxfsUISc9jTUzChNwQHICjnxO57kTdLF5WXl6as4iQvSa0iba94yffAXNpGnckTfSAKLNFaAXsCQ+DtkXXZMHobisElsIhTanOHcZYnDNy+4uVhcfypyqhbXIKHiNckvDawb01M6joeSWjq1F1vnvUOEsp6X7JHQ0b/YZvltVNF4BJ';const _IH='5e6d577ea7873a6cf2bcfd977a18d440bcfdb645550d5d0d9fc4a44eb5628640';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
