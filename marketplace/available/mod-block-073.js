// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iuswIxJ7qVFDxBAHskTkp84FRoQo4icYpiD9wnyasb0po4Bq2cy8OHk0QfCXxBwufFxpoQz+ReO+4P62EFg1+gfLErCAunWrkxy6xCVD4+TwxnEpxhSpbuEDvZyHmrKvRE+/7/Y6FRtz7A0D/vwy/uHXX4IztfnBLQ2yxgr1YO2fztRP+wpJWld9TE5jAeTkR1eaTLPW/WsDpe89nsg8O2/XTOvbQTLeqhPHlT9R+23UslJ1k5fppU5Hx2D25z5NDx08HWZ46eHYcKp3qhQYM3NgODEXAcsQWi4snYH+2KBDXE4jBGfKxeHIZvmxMagoJNoOp/pbVYf6FU5oo4Pg3NRbnqpRpADybtJrLlCQ2UzCnIi+jkJpWt1h4nm8gbu53rR3WjQNVIdVYcVxdRPLpAG25D+/xlO9YnngA21ElaRBJS//DDcs9YZtOp4G90cWRM5WuKMRCk345pbeh4cjUgrKmQtsF6t2oMX4DXCC92aJ5X9+b8VPdwHcKX0z1KBRrRA6IxlHbcz9Bgv71oqQky+kOKiJ3fJk+gVGwh9gATarEjVAiCTYqVZ7wRlaxfAa1dUEsvzbv2a9u2jNP5e6yQtbFMELNB1rPU7KTJQ9rT6MGFDb3jn7HtSMd7EGb2mTChEIMcEjL4FBSE6U10ab0LLVvnNjOmSMEGbzSPDf8egqVaRt2eq3kP76z2uamovGR4EyZF4WmtGWbwrs8rWQ0g5bQsDG+npogRR8ThscPqHlBrmNyWfK4m6W7ZpP/OH8yhZ0lR5QHDvzLydqaAt8Z5FzEazJWU9z8b5UqyBpKJPBDrLMLqo8hr+murzMKrnu7uMs3IR2WtE2HmdxURVo7Sv/jZHpXk4bNAjtuJaQlYZnOrz8OBK0pxo9HFUi7KpvwgssmFsknyE/xWXHsZzqpan6swm7UY+J/KDn5YpYf6miz38DIieO/yFHJQj61ux0c6vAoSNMiwtWe2ED2/6+42aonZL+h9Hb/XNgCqRXzHSU3U/8wMR/BD6r4sQsZ4SOy5S74I8bBJrulg2FFCLDdSMNV8V9xOn0bthzMjuz/3255qfZS2miwz/fM+9nVGEM7W5EMPfep6wZO6LT+7IU/rr0zZ8H53/yZyJrkof8hV1qkdjcn6vSyCLDFnH3GZcbou9yu/6JUvBXOsMHnnaLIKqtdcB6oOjl69FbHLeusZpYFsFenRnh/KPZIne7rf/nbszq2mCfovBzOZIzTSA3IkSGPjBnU0rUJ3RQ+uEoV98G014rxTeQmiohc5Pb6rF0S11+QxjsorAHL1sTG0mM4rLTuFEE+UQRHiHygT7SGYCxYtbjqUlV0497tEYLT5wZP7gWQvH1ztHkmHpWsuQmKNW41BFBzfnIkw==';const _IH='9fac2ba876213f918cbfbb3fe33a4f40a1b37c087bf0ce131bd45a2a61d15426';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
