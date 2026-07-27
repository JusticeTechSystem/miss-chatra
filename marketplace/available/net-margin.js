// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvOaKYkdcL/P7ci4L0JYwNsNuLBXZsz384tKxOm4hfAHOhhopM2JP/MrFoEpGhvoNAr2EsLHzAJbB7/Fmy7dCS7TWiAceJP3c/yi0U6XSqBYr/jpmVEavZHm4RawJHwZTN878BSD2wMHcjR+0msoVh/Ql8KES+0SbLC23fr5RQTcCE+0pcv/klY/UfIK7D03a9XhSB65V6SSk2WRA6JqCSbx+stvlkF/oFeECZ1Ie1udNJEDXVSNsdPpMtMIiA8KoMKjA4h7GyVjXNCr+1E0dmjYxkQgtpcT7UOxJ1FuU49zJtXd0ke0DbJv/DtyQAlkGUI4yhsWoddrISa795cL3km5n7U4d84z1XqGv93re183a+Lb8bglAaIYCURxbdf8NgnwQC2BCVcNda4w2h0YR6c4yCqhmeXtiGh1vOrA23ruWpC7DhZu2BFEHIvtRuUa8SawLxcyu6eGcdn7QLH5IMCXpO/wACd79k0aSfIMjyecDBuIiBOieCWAnkmo17kM6vIdE7Yv5f8wea27FdaZA05y43W+KG9tUmJl4TL2kIAaEyXR+90rSupnmH2S4yzRb8d61t3I9sBTow/lHDyXA+pHBcl4c1rGh/3/xYqH4uKoZT1u6+4MR4qu3XfpbUE8n5MtZ553329ZMN50gUwE2evNXw1nNy8CYAlSJFxXcCLViWnqehePt6vGYQA+5Oz6orq2fbZ11VRsOmAtrkBBPLMSgY3ReXvqA2Mf2EI7waLmlLbC+7uOvR9CI1cH1u8Af7XEojxcbdxAQfSd9tSsP+gidn6mulsfQs5HHVjh4qfBXAf+s6oZndXPCXwqNH05pFmKmkZ0tlWgP+PDnBR/Ih3RAitb+xu8Ng8kVq3TxSuvQEOR0tzt8YUNEj0OHeo8sEqZGT1n9KkdryftOuUd98hh60OjaJu/WBXwUbJWkAtoRPnqjCHK1xvNXSCy88OlEIcmMIUVhy+dPHQSrZwh9l3DyTRPqwoeiGNIiwFbk0RTJGnIz6O+gmh+xEHbikwNmVbVl6r9eoQJp1fQWCvs2aPx6OjrsIFxJgHxzH8C1Btmbqio0anDny8ENJr7K7v3jUph3VF3gXe5bBPIqb3DnZtsuzF2QFOeRjhMPN5glxz52hcxETCH3KXKa7/jnLPpjOZDNM+iZQCFdQN9ImojXqaIWYUzwxZ2fAdU0vxMa2lM82HBKWG88RB+5WjyEaLbBHJnQApRS4OMR3wDubL/YXV20i6zge+D26P4QT';const _IH='7eaa11f24d3ae367d28b4fb626c544c207103121a34c4c53d9150502288cc000';let _src;

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
