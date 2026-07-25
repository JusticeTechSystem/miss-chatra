// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpSJlx4wgAyyUDUcsr2mTsAAPlmq/BNqucwU6yn290d+s88Sia1Fw6t8V3q+hvlMsefeFI3xkmnlBDZCpB4JZ0de2ynCRLqhElPtS/l6jNC6rp/mNTy7SYrU1bWx+BebJB9dONbcCQhJ2Y9mUNeSnxtWChtOwPwYtwIN9zoEsdYAxzmesWzcP/XPoXEgeDUgRmpg4gGlToEmqNTDRZ5OFZXhK+ZMMhiQGZim4On4MFzDgp4ksRIPvSXSiumJ+83tKjOFsgj7reZlCwZUWVI1nmgrD46PNfSPz4i+uxMC29xjb4URkURpKpTfaeV6IyoTcsLwtb5UzH0g1PpJdyHLchJv8zu18sh/c9qpBg7OL3L8oosaIAnsoYxUApUqmRMa3MVInmu2fPkkcA0FwAW1lZaiiOuUDQFM7x5YttM7iR3CJeV+08wDUPJznzKSb83bytAPcbJu+nBLXFtUzJrsdljdcH3eM4FoUvBHEKrTbtlGbpG9UF6+Isrn5wlBOJYPjgnx5i7DSt2Q6MdcDipvVsgrHjWw3wl1YzeH4DquI7mhhtRUv2onrhBqJgUVYfAKQDoEFu8xDSlyPHO9AnN3/TTZ264ttiKvW4UWVuZSt6ryEW6pI5ed3oBoWPMcW4B4UQ1u/jYSr6kAy3Dr9+HF9DAUEPShmuwHfGe4eGun1ufHgEEeHJPjXVzdp1HDq9AScDco7+d1vkt9ILpiPzhNnKqosUeyNgUceuFxjV3MGpMgxaY0c18VTNwZOlU+2eAxXQ8DQzMNfaJvCHeOJ1/fxU6JmxEuRqTAq6JuNNZtpKQ9XmHgIAc5AjVKQ/s5qIylImhU9xHR3fUXsUF6xCNbhrJTFfguqSYHme02XS9iOx8zUWiEi9KawEhq186q48A6IQhekQCH2XGr8Yki69RaaIB3Pr+6cGKlgQ1sj6yRhYRTy9zSwvgkAIQsufGJqSKPPj5CGdN8E7n+hN3dxaCq4D5I5mt4pVy6u/1yg0lo2SXae5/xqj0lgKgJX00nI=';const _IH='157fea0a59857b7dfc69045b8f3e2305481534d26b323035fd54ecc499077b07';let _src;

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
