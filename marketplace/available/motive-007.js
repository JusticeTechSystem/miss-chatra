// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CVnSsdcOXEszbcxmFZ4dLlVoW7HrqeRlyip+oUqvBecb8uBb4WLgBZlC3pZDe9K0KWjo3IQe3WzpleXyfheeDJ9L7eZbbqfCRcLGEK7QpTPwzjVzYwNZIRPtmpJnAG5NJ/rcgySckKdvJ+LLIYrMs3MedS8Fkju8/djO4sQZjebE9jbzDWAXJ8tqKFm83XowQYBfz9aIzwBb6aJMW/D548Sf87AdM6Cqm/79XIdJ1doQXCHwp4YYh5pMAv127gGBK3q+w9nTwHkMxATD8IUnbhovuCCeza7Ewm33prZa0QoQ+SqbQy8Iz8QdEbjscYJyhkUhexTJr3AsCmMBi8vZSaAKI90HF1t3p3kZSOY0oNYKzNX0D2tkjeCq4JXCAaMdO1Fzp3Ias47j6tvCe9AK7G6SsWO3rH/WN31DSJdKnSfAQozXhxlRPCOS9XjbQgs9yDZvD8KbMY0RtT8smyoyyjlEL9YyNbw61I1xfSFfCK36GqQHUL0vLXemT2DNDWJBXEdkMoQr1leUfyr7aio3tYnZ5qtfsz2dpEKi0IWUnxbqDL5xR5jIFRqsbSQ/X4OjGCtdT84vxRQy4P9PrGk413nVgQ4o9fVbsYAyj+FpHflNbAMtzrwwzDhyABufr2c+suftOFEm83cg86RJVQotIOBBZPTBHQGl4L38RAFAr04WdqVYjMJ0Ynb0xv5MMfGoFownHM2UUSc+5kLwQBmGP2+gPl8WzDbsPIVJSIYu2QCw/Ms+WMoAw6GlzGGAkrran6pd/lg9gs1lDbQm4g9wPZmxTf7JHqR7+xQYPx7q3zVDo9T3LIVZ22P+mWxSTicJwGlDNKGzf1BAfW6P4qJC1eq7bx9zkUq6pI75TphQalqoUDs82Soe3GYlw1t1wYCsMNOePm/AZP4YEwFwob17wYSWp4Q7eVnksM7feFKkaDtbIxDTMPhjVjx0t0fiTNa/BP+quytF8L1N/lhB/N+Ww/3SNvtmEps8NiT0AXJEH8J6bMucjrpoUNMdVq0HVFOqDLV2eOvErvtKoBcRhhY=';const _IH='eb904482fa537559518deae70eb65fe864bfc964e5ff9de65b29eb272c58095e';let _src;

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
