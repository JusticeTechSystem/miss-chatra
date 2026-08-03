// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDw4XXiU3ifuxjp8kd3bt6zzk/rQXnxD3BpylApaFBpsOdaYNzWNzUSxwIKQDhhB3KhPorPG7pIgqDPQpQV32t412+r0hHPyf+13TffjIqCqi8gO8VNioljUojJ2wlNd94WIJtIEfUSODDCPxdmTdwxWXtufViawINvJNOQauAiV1dU8+Jlgyv30aftEFOx7duYMYtANeBc8tvMu8ixw9faRBtF5eCfnHuY9+khIuJIAnOvtTT1mIK+mwF4FmeGeKSLi0Rm8GK9hHgjSGZrNfLXM+xS6y4eVcj3BsaynlwZmlmYXz3wEE7jUN9FtIcK7a3POzkuc7gAbLcJmnUqZNTjaxerSOK1az7rw3XEU0ZizaqBVdwBREpGgZGRzkUN5e7b+b6IoEu2b/Z+RRRjl9fOKBZO0OKxsak1QANWdp9Qru+9I1n6JS8I69pGn6alMAcsRBh5btqIUrpst9MNN4SOKyTQ6uvy7t528xvcfux/79OdLv0nGQuNZv77VKyKzQJVt51qy2FQ0D8QARoYjKK/jn+x6psAcmrshX5TIpDHo1dnr4xodR2eg9hsYM2dZ+jILXQPcPLjvWyV4SL3s/UMz6JQMVqrcFXDImy+nL+dTVSlPxNspehdk9vbwlA8rw/yCB+DLl+6fx5kSdVQXOBZq8VbNIvvqynBvsLmbleSaQvAe3nDK731lg7quI929d33S5Uhw7GL4px31mSs/Vpv0wgzwI9H3o6OwiJ25er2Ogwui2X7p+6EMGkwyw2SPY4FNw20rfmi3FZ5ghy4UWPCiv+JrN46htP5TzPc2NnClruYA8Zd0uPZUXR4Cbblc1qibHwZ6zuBDWmgr5TkxhlBUaYhqxFcJRIp9ZTqAW8y/hnZlu/pFGbXHJ3kOCcNCwUVAZwwoHyFVXp175nXBxV2JOdTipfd3G3WY3OEPqI1UWHmGeIXSneLkQNY6rCmYw10v4Er4ijbEPE7+5F3WBswl4kyFq1jQ8fr9XOWUCqInoJp7TJwj7ChhBRE2m+q64ALWUGK+5jJgc0/+uqq6qvcQqloRmTpiv7F+4w/8gtvYDm6FP6isOzpgUsx/51UnLGXeu+q9+Aaf719JC/3iBI0g/cFkxnGCjf2ntPqV2Gg7LHkHcHP4q9amJNYWwsOCq23WfPFg60k6AYEZy4+XUu+mnqySm1a8N48pt9VFtCm+v66YnlVtXaQ4z6pDXGvF/iZUmQxmBpR2TCvoRRgmiIV8oSyDgBDfKP2fBr2BJQxXoDViN66KgEmYyI2qM8+OfTbeLLsEhtXlXnWZ1lDF+prGDDrxqJpI+YczV4z1WYiViBYSJg2Pdl3GnKvdWc15FOakMSOFiJZ3r+25WMYV3kyOhMxyIGAUgJzqyyIvokJHnOrikE1AOrEpt/w4f4xgv+MOOTsSLGd6jn5uuGUbM/rBwvl8LJiRLXXqZHypW57Azqb7uzrlKFtKs/tgi6fN8R6212ccI2krnE2PHPambFsl7fho0z3YZrSd6bPNjXdudrVxOuZ7lvfGiz4sxvsDo+VhywaYnr5Xbeb8ImczBZO1PHxBa6s9WzbXrJJONz6JChOImGx9GtcdWx3Z6ZGP64988GRQZiEQYDoHXXBNecirBwtdghdC9mpknhynDmyiEWOzhsiNW/9rT8pK/oKH7YN8YCLU0Il26Un4iDb/du496c7pDh5GcDeeNJHCCgPeylx16BsvhD8rXwHLJ+J2GXN5EW1BWVpTl0+paiBUMTYUsKseRJBR+6e9UKN4RNSwueVicoibxAR0ygulGDWFoqTdAYQQ==';const _IH='a2f1022f4a472b38472f893408bc085740b2ca4cc36091646d29a9a795af8509';let _src;

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
