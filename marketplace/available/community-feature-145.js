// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ11jr+DPB7gzOyXUisrrWMcqPDjtwhATb1D8o1Kkaa6HN26Veosi44p9smAmPAjzGGt2OqD7VmzQF3WvDkWZH8iXG+lkYydrgvhBZxNYafArXag83LbLNexVcITAyQGvkvoPxEK9B3H1KmQagUSPvaIAMDo+JLrm016zYtNHspYwbdjhOqCvJdilGdY4JEiWCPSG1RrzzyWc74JPOxlSFNYsJjx3sFUoi1+MZuqvI7DVu7Ve4HxQB86XRZkGAaA/8O3TasPLOF5X6KN3aKfnbJB5ezM/cuYBmF0iovSKN7zkpmRGVK6ZRNUR3lf3WNB8SaqCwOr3+3bLs/1M6kqowkgQYvZi9cKgJGpiyfrXhwXLFxAxm+qdvcH8o3bFhjeDMzpCqD9MMOq0HbnsjNPP5/0zedyxXGX01+Y6tWfHEfXtB9JT09FK1vrwWhP39YGi6QlpDkGS9uP0iCP8UyehBZHNCUmX4/bLGwE+aaqvpRIK5fU6wbeZrTW6Bzyt31x54M72pCkgQbbUvOw2+Xx/EgmYS3NzqinWrXZyx8H/dRJrTZvn0dMiiHC7iZHyebyzqBLa93rkWFqTJ8y19yHfr8SThKte+8v6MS+TrDFxoKGgX2CR0FQ9NXNGzleqyoSTaSFDIZWqNdukWQpAClTKLICEKby7jhd1E4Fwwl84n2Ak5bYY3DuvGek9kcBnpKyPwzA49bGNiYhWdKO/U0G6HNyz/3OV3hOl8MmF/baGpJkorFekUBnewQA38=';const _IH='4391aa0d8956de0931bc93a8bfdd84216373831f858cec84bc7324a740e70cb2';let _src;

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
