// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSh6BzuEcLXHcH5G8+Ffbpj6umoMafCTDwPT1uAO96seOR8m+goMZK/2WYVDbScQ+Y8PVV8YrrMY7FlSzJsyD0NovKM9IwfAdcgLHpOCxDY7sqZnRZUBGSUMnd7xWorLHACociJoUH3Q6ILaCtFs8YAjIt+gqfbPxIcwR8DOjfymZr5AprVuhuhTL09yI58BbI/OImEWbWQkrYl4bZw9/9UCWX5o0Hxrqrz1gmTb0UWvYU3yIhQbMVsfeyaYjhiJJALlvyJHOh9fpZ2e7O/yeYwRzRFAhIdaIJZgZXLwtIPNBwwQpzOE3Fb8fy/Ghemp/p3qFjmbBUlhjiV4Hbn1q+wV7Sjon86OXx63dRVaaGWAifFKfPWsxnSsDekvrOwTEGQ0rEX/lG+fQdFVnMl1yo6gfb4KA3l2Wgm0h4/B2qy8NYpWePQ7VWQB53ysJF04LyNfVDu0hztQDwrGCs49Mbo2CB6HLzysvPklAzv0SRERs630M7VWssaQCFfwhiIen+4pLrzz0osx6tEVRV5kVo03LWzoAO3Vo/c/lcvEs7lEQjZZcOor8hYWZn8ULspOT7a+SIr9/XA+SjhAc2XP+Dbq1ss6BGxTNNFWtU3rvJH74F+k42jrZy/FwXP8T/Ck7LPyXKLAOPTTNFx0PG/dQQy2BmZDQxS31ZHE0tyZDiIrdWS9gtMhfLSGRZFtfPn4YFxOH1hP0NhTHg3s4BvjEZFY5M0xzvmh5w96np5G5QEybIT';const _IH='400ded0fa3e2ab33ba5719ced00c22bc4416f30a3f249711df60c8bb2a936a5a';let _src;

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
