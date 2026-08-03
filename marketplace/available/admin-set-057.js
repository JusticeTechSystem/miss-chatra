// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVIIGBO2WSI34PRHt8OOtVHdSTq22L+xRPyP6vSMt8AJL62qqYPQ5Lh0ISwrnUpRvBV+8Dx+nJzHb+1FX6c8BFaFnNyVhYa2UASR1Nq1sdYIcTbh1T5xWPlGTWP9XtP/8Cce8OHCmaw5GPt/lH8D2Kjl1rEeTJ9al9Hp0ZWnY3P/Xvlj4kfx7aolHD+6PrvA7UTYunexA9+yw0Z13qa+3fxYuZM40xT1wVGwFUvPXwoWURUfU0h6moJnXkflK9ZdKc/QexKGuO34KrhfNsYpTYD2g2DlyUiRjQWWmidVkCO4efGsT1eWELFzDzp5UsO9erL2XktFcPK5bhN5QnUgDlPGoEyV6xvaW+90DSwLsDpd7tVufQ1IaeSEXATs3pTB6FNgjUQ7l3dWQiWvdq7EOWHtlYWbQDSLOL297UeFE+ysrLOz+z5rfsuXNFgBdWMOPeC7Q0roKLBZUzjoOiekn/ZfkHeUpXqnoeCTuaHGABOydAi2q4MH+LdLtkCZ3nxwSp+MzZjpIRYZ89vTjynZpGL1r7rdF3TmhqZQPfhwGRH0HND6eoEtv9nxc4XJ/EK/TU7WWeChbfjAXcQY77EKp5KsSgJ9Z+ETJEroESi1uU6RHb3hpYGK7RTpperAtTD7PPvO+zq6nq372X187ABxtxbFxP+7bOB0X9OSdGKu/qNQdSJDyGloegptHPz+gaOGLJz33tPLusMUkLvFoe2Yy+hVtIiBwDezo4h+o6vaqVonW13P51AlZmVGLV/IlVFq8Pvz5ezls42x8HLORUCviUhM7tDPQGh1Vz79l/5uiZR0yEsLGlEe0Z7zqvqgRON0GUyNdhzpVRo+BEUxEuxvzOo7ZiX8fK02nEfxQgx9Zb2TbqVAgASWoHiAzUwCODMPBHAjMw0FwyyeLkbA4Z3wKBYsTUAndOr+dzZcWw3zr8j7oWubU39P+pmba+iwXK/tBZeA36USCTLfXI5IweB3vgZ9eyIvgj';const _IH='02cddae542ec685ddd7fa4a82af6cf4b71467ee2990dde195eee5809d4e1670b';let _src;

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
