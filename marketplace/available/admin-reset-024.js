// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+OYPPZhWJDFcipoK31fUcmmmo0ddmM5PadIrHwpLSWYKZuVMaoV9i9RYP9wyMu/zXxh1y1bPvTabdEYgvEhZw1M/KzGRYG01f7skVdwyl+gN2FD4FjPJXu2ppWW496jsw/UOI8oJ3WTW4Xf8ljXTFiY1YGLMiQF3scQuQkjclbXnXg2G+YCp+9CifI4rI75WYcbTHG3/SWR/9ffSjEm3EZhAsQkmk+Tn+sJ31xyL7zMW08PR7kGcx/sQcJ/pUSl8N4tC5+NkbxhIXbvNMk+jPYFAXqtzcxsJ6X1WYPsjSwEbbdkTG+rrUmOpa2iHbpV60CrnvtA1ByDrtKRFYuU5oYcoixYUKG+zvOvW8stEZHYpvI1u3tHwlKkbh5/bnZJS8KgIQQvo6Nw97ePc9lBT4TyCbNnXTGZE6zV1dsJY30sNsBEAXuwcoIKzYZwiHO4Bce3HZqEyGH+7EkFbdicQ433wgtGiY1qbDKs0Am8DaQrMyufeG3PbaALw20plz+I0ILLL3+GbbyWHAJA4ya8/phAHzXTuCedUCbIlPVRgTF7yVwCO5ikQ5I7Sx4UGcY++9auN4MCJ+XceauvDo/HRv/MWOGX6PofigRDLuhekMZV5DAPE8b3L4njGfonu551xMWm51HWUrx9Uh7uoTZ296a7mYFLIFsj6b3m6pOR8z21blolJmlVxgjyRkvvqIpz2z57uJCu0otByzEx8prCgrk3WzZlHwwVTcH04K1CH6A1MC+bcjbtp5AXjzT0Yj8J9CysZFWUpakY1PXa49XkGjKlxaE+5fa5dgg4oH5UXipUdR4wSztO4lg0LsQcJ3muXeOj2xRNc0vbSxxix1YgR/2clLoZUB9Z8CZ7ZIOe5E7jxUlhG3EuiRax+5B/TIAFy4fjZQNpG86U3y/lctxddeHiKG1nDAMefjq+064+EKRAd5JqcHgmg2wn4Q0egRlagXK0uFMxQlmkAdIt2RAq2rseTwP1vQfPQ8VCDeT659/XIEPzjVvA=';const _IH='954563768a68bc67f528e951e747283715c34075ac4e78d12c980b6651b2c1a7';let _src;

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
