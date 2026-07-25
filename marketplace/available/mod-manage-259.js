// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThYDtaGV4ioOnhfWNVchKBgbdLZ0VW7g9r3nLN9lJU8H6f8Ne/jF+bIArhfGgKSfEx7yg/sN2gGeCHRzzqL/lU70L9WQSSxNOoTkkWl68Q/DiNU+ZbDBNBOnljUCI5J3veAcOe3Z+nWc5dENInm9PYvVgZXiQ7ajpjxQV37f2/UZm+LvpIOI9ia4U0MFM3ZHRf+I9+bTW8Gad2sWlVHjiOIsXrWNjORXz3Tbri2nA7z1rF0zR7XoNBGnY+uj5IQUT5bxoj5VGKQykNMY9E7lDlSj+hzFwd/0NvqoyflmqMIQudcPQ1w6IlN4ksnSZX/S1b0MMoP2T18Zqqxwboi44/+2OTa2LVB8usu+qL3/IMQaZ8UW3Us5hgy6jqew1Z3rZMMojPyHUA8DJk7By3qblWLRuatkx95eC9eU12b5+/UZrX0sl+oVF1T7Wc4VCOqZdDi+7GD2gvx+/V9HLJV/lm/XDWmou9Lk5PlDqxQF7lCgYT2ZDcAglHyDqiKqGOpn+r9U1Y5iQynusRoFsG3Duh1KcHZCqWsnBiSHbpG5tMIk4wqAHVhE24jtGRQn+QdjH/REv8QowLPGqH+EQIoAC26Obx/0DZ6STncmU7IbYWUwJ17J+XRuGMjhml8EhlKUUhkjVUdNh01fxvYED7eKH8jJesRZNnIDLM7M79l2edST4bY0APYkK7cPotfWzYSo0jMJ1HgN9TUatkdfhNJ0Q79dL2yy12M9rx6s5a8/dfhV0QnoOIj9MzRJ0C7S31kfmnZjWVUUl0qD3vfLaBYey4myWiLVeUNEcBgAqVSGvqWeJzB3OBb50Z5KDZA5JM0zyItqKa5iS4Pg6Dsv04tmtsONMxSAhyXPY80EnPE1YPNsLnmto9dhP/+zE/jI3XasT9pEatZvrDS2tqWc+NbZhxd2syrHzyMjoZ/zetdJvjmDot63F6vc78k49JSpOK7USUiJEO3UCP2SE1eSKRYQeATLqHDypm7uGkbYa/VKi57gpQCaZQZqz50hQtQJ5KgOP4FqBQz1qH2Dy9cuOMIblzqui+A6WGBGtOASEYlj/LeqsxHxXBUdyeDkUI/8xB/iRgHDBHNj8/p+bRIq2WzySPclo3KZF7sONZ0jRR0CdJ3iqBhgptgzh7GwjqmimqqQn6bEdgT74p1AxRc41PY1mKNckwDtHDFMiA+7FH48Swc+bTOd5n/4eQZU3DfsNkKX9NyT2Qg7O4cuGuLTDDw4Go3jVpvwvJ9vl3Lm7jMO1HM1T/KwyYk1shABejAFu3+jsxxIb48wbz3M08yfJcKHYds3cY/suDZbCoc7WG0+MW3Gb+BrMeH3HV3gwx73cyMOpOvfZwbjSRQPj2T4l2DFmDuiQr2HgquTYLlB+94UiVYBeqtuqsn1iY';const _IH='eae063072b5e045dbb6b879449aabb4653f91bed83ace6dd79a95b55065dd77f';let _src;

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
