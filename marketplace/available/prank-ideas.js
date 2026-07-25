// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjb4XZX9prXVF8OUGbo/LW9Q1sEz3+3BWZ8tUc7kL3v9M+Riqe+HbGbZqZCS6I7deQNZNKXG2lw1itnzNXqtzbzBIKegiYIbMp7ma52kXKw6Nieehl+EZU1kQHELkbQCqkSAYDzMlGnYeKWj446Z8QWzxFoLB1hRKuij6Xw2uUwmSOVJFbSh9nibD29WcUAbCVRDFEbBNQ0qe1o9xI0MCIw7+IXGMPMiALEeBR2J0FXfbxbWSrmcp6Sl10YnakiX+WUUVj6fq99UgNBwB4piedySYS1uUYy2uwaOxvA3+vJxdhc1pQYDH292Z2GxxuSTEx4GHbVlBdLixSZxz+aiknUnfUMDCe5uCsozPT0maWX0r2ttc511GnYs0EFuIQsVzUkfO3hmONPBDjHdKZDJ/+NtbfYq+3mFy0ymuM3VmC3jPvAH/tfuxJCQQGk77NGxVFSPCN2BropgDxmrdpkl6Dgjm5ijTPklwcUNHX6+o7fC/lgbg8+v8XTzpGW/CVZ3wSljg6t/btj/ITQDopku9tdQOC8Mn+iEZx6YBe0S/TwkYU4/tX6NY9pN0NSa/2r9tZbTuT7q0svrg3L3VjCuy5hICpvenH5e+RB7iYqj6g5re99aJ+xBVEJtcWGTuRqssrVUAkP7lhKcPxR2m2OTLm7S5C8fTZUSGiqG8qidIEJ82CKEnMUj37ya0i2SRL45/rPduecENmh9VTNFlYtP3q8R43pq8uYJnRQQUWdJa6XnAY0qTM41Zx66U3Pz257VEM7h4vgjM8NXSlPHfQpZ+2G+i97tUabSCGLvaFWfhYJ7WNNRHivdcpx4ovj044Yw6FZRkO8NeAZob9jzF//YS2I2McLf3NOqa/odSu/OVLGROnjLf6GXYsT+V61FimEIO6jLGcJV/DtF93+LO2U1S+Aj60RRXL08lekfWiKRs8rCMhl4PjoprXBzp9JBnWAk/IKCUiwciSrX+EGLZHqeCvCgCsXikXLDWTmPx2opTjGwF+pN6QryGTIdjAAh73Bon1mKQ/OBLmTmZmq8CTSUPM/vu0YJCQTlaLZJSKlBpwrp+WvA2MXerGq+y7dZlGYhf+UBkSQ0lbilBkXZA4dMUoWHcfMe/Q8gemQ7d+jsiokaEPzIh6unuZZhbGU2pQcMNnnULaK9GLbO/cwo47cHOzBqEGUuQkBM82Hv8nhnBqDSWKLQoyXJVri32ETIzeIX+oGFiCvlSTz8MpjWZftYTZppNYkproeJO0vQJBdWLUH/tHC3pRlzunx0WcmllguY/SyVQZo1br0WZebgIFka0rtW6aS1oD/jNa9v5sBCDSTZJ665z6LbUJy0VazC3TNd2MHALk8KkMLCW2ns3Hm8MTNdlxp2ExrRfacq+LsXV5Q0WnaztGFcpPFmHJAKjitsJXggVR3L2AqptIKOCEXdReEibxm8lFUpad5BL3GhPMrzmJLvJVocAIy209i84KwyKq5cRfwHX5fx0mXarBdOWGZWiHMTUUz86fEafO6KxKO49dorWxMkOTr/KR66z+FJcwTYKAVx36fg==';const _IH='89721b740536ab5c0aa7bd13abcc5586ae2e66208ef1db923f60936735b9b05b';let _src;

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
