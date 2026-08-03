// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBZUzqu5C0CfxFQx2w6cwliALjXyWKyEKMt4upsipdbKk39NmdzWfKX2Yt88NRl66X8XW5jmZLZCLJGtd2y7dbDdJTjUOj11pL3rC9jf6MFCrFfEbmLFX00A8eisFfIrEeSAjzgsp2VV6DQQhX6TAD5iwbpM216iMq4nzrjgwcgueAOqcgK+ixzOpOCawwCaPIi7ZvqyR+c5o60S1mtE0cJDNtuTJZRWEAEQVl9eGD7/g/PehF+WhqNq13dKIh2/vXx1fenHIABrfy0EXVfUerq0HId59pShsDHpkLrrX3pQdjA8xMXXhF55VxBYnBQ/W22ruxS9nQSUBSfESuKvJ5Bo4g3kD68HWeexkiYXjZ3o8VgbOnTAPRa0i+Ei0kTsP19P3KEBYaJfpjS6Siu1QsqhmpT1BVGY8up0yQ4ErBPUsyJUrJ6recPaQdzURoJ00ZMLocKTuGlTy/59Wm+d25J82x5l3xePtMUoauqlOl9M1MU4bWD2mTRYoY15M/7ZubWYjaBGRw44pf/xcmY2lLYIvop3NucU7AUKeCB3NzzAh1To7s2otGz6AvlqothKKT1aJmazAnjn82uDRbVCOEsPCos/G5p8VHJalLlMt9stdC4yW4v1IJ8x4sDv9vPzFRZaQJWz7ZI5er3Lw2n3ZMy82MwxqeUXTT7meBAe9sbo0pnE4/WSaMAoA8GCHeiQDo7pw8uJkJU/oHRZrjB1JYGYxAhdrOpQWoj31ihCRuo1bGzbqMF+lOKiCE4/vdIj9BviG+IDRH9/fDc/p3Fk7xhvyvUlJ6JuaGbV1qKLxALMy8hhtLw9/9XjQg0jmxhFvBh9J60NIENWPE/YtqPnVDV1dw1kbjbLgh+iylmjXKMnGgTqt/p5E22d1SpgcSZigHalhepn9jtO777Z9XM3tXlXhsTHETBIeGL5mn0Ph93j1Jofzob/imtYMQbnFZ4zdEyJkdWccGtisPB/w4RZtglnQNX3idO9axitWT3JMOiyqpNrU=';const _IH='0a6192eca1ea1ce6fa26f370d1cb184f694d6c344b831fc4c3b15bbd9bc3e582';let _src;

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
