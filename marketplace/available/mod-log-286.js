// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/KAYCueoF3Xm8+gh8/GohXmd9O4rZ499apMs4G3e2bfsr4EwjCwC7S/X5En+I7AwjEo1VlAwpHBglPKIbtQKM83Xo+gYvVRYZkm2Ep75Cm+JhEyHpNeecP6wawoaSypyvUQleweKLXIjSrvVA53tCRya6F2BkubEWjGSkdnrVQJA+q6tuO6I9oz93dKskvd9Y8ZyUW9tbXgDdZyLhpNJ4uEsI3KqmVbkwV1L2f8Bi0OdHWPtFKSlKuAguame9vz3Wxacrw+citcN4BvTEGchTOmhU4fDhZU/ukomnZ+4Bh80fqx21gttp5ESMSRm7ZIOSQGuEIsx+rre/Gg27gdrcSVo+Ax5uA07z3VhbGpyIWaEEKjm5saRO+qSdRYcH6SiKH0p/d9HwKz6gS4HV4ajrADWMbY6yg1PgrcPY3H4pjtR+hvF7bmIPAq9zKgQjS3/l+ZBKMbkqT+HR9OIct1UCnjRQsBPaD36GkDspgb0yCt0hHPsEvRJm/J0AUyCiAGkP8V6AwNaNgrtLKM8h1So1lzO5R4muU/vcArvQ7Uv01inJpwZoenKilZO1vL0ItPMdv8dtT9dTQP+EanX+MAfhYgGj4svly6r1q6HCM8NhckBam35VHHGjb1E2UH+JGSTUBv4RbAY86B8KQLtIOLd3KNw/Q2/8kyjNl34motIyvFsxQVs0O4/0twwDtzVjd8jY2/mb7aIrh3yavO83fsAx6yywaaUkcQpcrQWJFFmSlvJc+ojEedD3ZKyQXhDeiWGO/GIHOpWPgnYqI+Ob7iUsel+fq9dmwtKL5SmMV1U1NGj1L/PjrCimXiMEgu+sgtQzcaIkJ1Dw2Zohbxibgl+8t//Wc399HSD+zZqaIIFLLKJ+Jx9t/fAy7jllp2ExJur4rvLAuI9M/BbQObMeKdLB+APGNxqTuUW8sI2vx3nWxKJLpLmUk3Vdokg6wapSR4FnWOJcbUGCs8LTp/JgHAlplEs+ftCZR5gCvoDW70/tyiK6CfnqcYsSv70GTTNHncBGURb4GiYrkuv1L/InsXpreWmbJKoxfymLeRCihJbDHMugRqmCoH1+q5FhyNNUvxGjsUvUu4kLi0mEYSyYAkhMtmhQTWiB/q4CtflPG0n+FBNgD0HsrEeQq3eJxbobrGWeX7PJQE7eJzm7bHYOe5P1AN9wPLIYYMn9SaUruc2u/1VPwhYmjb7tcKoDBZ2BZgrzyNIDXPownC6chyZ5BXtqx2495XL978Fn8+yIbiV4xeosoSd9irHkSHiSgQ86+OzaKC1wBPoOfj3+11gndCelf8Yv56Fe9bq2IxSIaT2MYPwYj8vzT5mDUYx1fWGf9tvkYnxvagdfRdVuA==';const _IH='6e0f224e954ae5607b811d7967e62fc3f08cc83c29948551dde51d5d6f7bdb89';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
