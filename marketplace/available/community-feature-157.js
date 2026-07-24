// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdmTHm160MZXLewwzSy4LbYJGOEx5Um4E/JF++QazmVFRDp5A2UnD1GXWsxsuR3DESPRb+wZ1Hcz5IWk3YTz3popg/rIfYuDjJPDpmWtsVLt3jusi7u1I47RMAoP6yx0/NelhtZMlwwGJALfIEx+PLAKaNEW49qCFQLBg5pjMHFQYWrfCACZQSP2N49uIEO7TmEmMl2IMrDnJlWRrQ/Rl/Uhn3j901lLOMZrHfaxboCRVixMHbJlXFthWVUmtLbyszpLp4GGnMTh9OjCS1jUns+8fws4OUSwt78XDGoTwmWcYapFDMEmT4TTBZOs3I9A71di+1TiNT3do0BTBwlm1IAIYgFOVHAC01xpBg58ZoCNZzau0YcAF3Ysg4ygaCvk3Sv+Azt4Pn7khRFNP3TYsqOelfx+J7lwG3FAWvvVJYKE+/kjhb0f2xkRvnsO8tA6uzJaNM7g3rNR/UWPfJ+LB9DuD4BIoZxCZhsFQp0Z9XYhFJq3x/1lrMjGVec9PrylFBA1/VkyNmZgqVnHJkduODKWZ7XQV0joQ5C48AwPN0qTDo9JYo4G0nMcHPPZThxEQiIJxNH9038dMs5l0c2ocT7BKjIySNI852od5wXMlahT1kQUutLsOb4TWX/6mopbJXrLo4h8b2XawsuURHiBz2cjCD4VfS/u/1OJCQO72a0k3NdcJoSPZjNH/c4KrWuux3gAGq+C1mvEjfd7Y9oAC1ew4Ji8irq4BORUnL/Pu9MVKm8w==';const _IH='e7ce8492ca5ca1c392c8820448539f7d97b0d4a1c6918ad77a684e3b686b26ab';let _src;

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
