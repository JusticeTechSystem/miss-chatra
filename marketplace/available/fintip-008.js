// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUC79HMN+oZgL1DJoceWYG2YdusSZeCgaTJJBOcT6eUz0JaSpjru35jTJ/8akpcxydvtNJmtIXA9bArnDwswjntLiHCiZ31UnA0ICJgAWG2JujZ4GnS8bI2aTMSCZ5DPih9tE13yJmzihzsfuyp+FQ0A7Ba25W1p/5q7deJ2h/57XJMlsAGCYjlTAUhcjiJzMYUEvXcysRF1JtnRIEcvHG3tdHElcP7aKV2U3vhsiLgTZa4j8E1BCaYWjBvjFDjl52KmdDpMJJZwD8ZdvUH3XET6IeJ8PWrr6O/2AE77lWpe/zSgyHJIqhL3z85IHvViJFlWBUvk4OJJ0IEqnstH+HrRBYJT1Qs/b/d6zqk3JDc/mp1WkaI4tGyfGYuXbVOpiS3i/1LQXuixYjOphg6ev9kJtq5qcaItACwKxhYpdn7NKyIu3EzJVJFBkCkTG6M6VfMAUbHVq0wClGcurhRUQjIPrPEsVfbV8e4oi5LSWZCrNcmvALv2I09hygH7vUGGBN6QlhmvNUjmLlrgf3on2KCgEs2Bx9f0NToRHk8/Lj4nZBl9lravYWPXrysCD3hw2ALg8irpnnP7CofJMIAB5rOgufIrrv7N5HwNz4vEZLVi4cD4lS4ImXG8er0mS9sCuENzacvXr+3vFe+3Dk8HTQxJrRzVTXK0nawQXc3pIN3k1A9vr5MDeKWhTVVMFxI01SVUiNYqaYEWIoUh1UgsLVXV+51fr3PtP8mPAAuNu6X4ufV50RdYaw98gggCWpXTYvULbKDX5S8gsz8ZOCFdXaOKQe4/oLvRgdyNhpjecqqU1KyBWE5CrAmevgBbqePUD604m2bWUM/Jn8WiXtbOOriKhrXP5I82zAoNGYjf6qACcFZE0bpAXm63vGtsrHcnzMh5M74+ybjoFktiFQ/ZaQ3THFL/gidRWV89YIKX1tX2bJ0gVZVxc5F3jUcyCK6DeBSUQFiHWjXBTsiySxvN0sgX273SssR8LpDBF/5YG/zi18YA1Ur5fUDp5R4y1HHckiunNJrakhvjrsEnD7z8phhRdgJWIxAW1Xi4G/bIw=';const _IH='73f2c2114d4840c0042410497ff66d0358e0f38f4b3014f72896695bfe17f9bd';let _src;

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
