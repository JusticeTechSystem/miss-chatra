// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IiCq0ah8rkbWDCYeOvreYag3nZX7PpNFU/OiawSeFFlcykk6vFeAOVZC0w6TcLiKtkCBS4jondupK6s2GOPyCapnk/pFIUEssvX49VnVN0/Qt7LGq665s31VWr8wh/e01+jwwbQc/im2YclpyX/9hJAYMvNmB4wMC1DI0yXE8yATFqm/cD0fOXTLa9EAtrXAN+sC9Pii3pQKaYYkK5wkj6pf+koMIV5sGd/RTjp8fQ1jDocZ1wGkuUoxn86qbfn1xAfCF6ZPNLBTdEp5NENbH59G9HGyk6R0Bmhgp85hUb8rEWxGlMArp0+DXEQb2GYungLpCilAPIpHIrCgcwdOhrArmJ7VkC0dagk3XPe5Ie+vqD1I0XqnzIf7xc9ppw1r06mqqr+T3Ivb+K1LgGrklTZj1KmkzWrQ0c0WaGt+L5xzQgvImM6QCI7IUEG+G2WWrqQZw3MBQvwjt5xuAzVpR5iuYf7ToU37tbjtmLqKU27yjaz3YGlybkdf74zKU0/CWIY+imvr93xgh2qQb77tQnuSwfxgRu06RFHyeW6+XGfS66mXQ850WFTmLfPJRsTsBTG3SQhDY5ZO/gyM0qNM5+87PxsO/1Zk7RiOvcHcieDXjXGN22fJvui7AjO45Y9gkJySFpB8JV6NczNgTnp22DBVADus2cuML5oZFO6EA5Vs+FYRoA7O2bjmAD07Rtq1N/L7J6l67jzCRt6iuH7uM9wVMsNhZ3sxs2uLR7ghYwqDlKQTJjIYzP7ufDOOkeWY4U5mNTbYBUpKI+QTwE3cYjIkca5l/XJwT87a0BK5f4LAw1H7MstctR+8ZukQkSGjv74Hk5fenjo0x70HD55/STas6twH2zE0jZWwMm8Ha6pINR+cJz1NHPrZ3vxdQeqHcIwI54SD0yvA5JKCgfYfKYTMtJqkbfFXztMe2gpMZf2PiBh1B/8P9QmLlmJJE9BXQcIMx5AgraBMiwmLyHBWQLSiZ/TBCqdfW8yvn2ZeuI4HL7Vr65qC1/xaXU+1ejfRAXsvYglCxAR0iLBxGOORgMd1SdbtQg==';const _IH='dcb5119a2dbb31637c04284fecec9ee18e0c8bf0579941914449b8517607c67b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
