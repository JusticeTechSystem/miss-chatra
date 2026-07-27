// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRNpI4J4e/GOtLEYeR/R2G/8TXZHLeX0jpI8KhhoC5JVdnkmmFrxxczqSwLUBTbWl16FGoxFc28KzSRw9npfiszfg4CeZL+SEuStRpMgSGkvCgIDXQs2vDLEDCmhM++TClGXI5LnQ02bilroHn9F2OxfaFXrZcfLAItJkK3QW61bdLJk4I8x6L6RH+A+lRtBC/8Kv1KwmH15/V7TDAbHIz5NlBxB5Nv/MfAE/Ck6bsfFpvbqAm7fvzNEngmJD3UMjnRhYGXCylX3Ak7HSZPkuc4kh+wprq2Z4O6fUpKDJjMJ8ljbevGjhKT1QZHxbKDoEeZG8uJ1kKIidJ1WNuWwsQUGD1IN8Tx1p0I4AFijn0Y7PoaBu0dPbfFzGVpH91cOK1cIXsM2puzL7KNuhiuv957eU7GfR6TS3oc+gyo7pM2kPGSku8es8d5QqUhPTaW5U9odxz80j9/PVXz7TxJicAiC6AIphxjk9S7bHs8CInRYV+xsd02BKHIFCeAatxA8nyS49KJ2BuaRcn0RCY5uWzNi+ObkzXVHJOFkyAxBADY2YaNDyYs+4JDVa+uSKYbdQOqN+RIxMoTdWMtYWPtQH6UfEiJlVkrKytWB4CLQxkBMiF1B4Q+uXrq0WWQrAa/GVVPzUN8eAKJp5bH7RW4ABp1JIDCIYp7JS9TGAPias9wKDr1ASSeUj/Ctt5A0y+GJvqi6qWih20qIaTDKDnRiEQHhlhBEjtNsSsmGdjYA==';const _IH='6f80a4115e5a7df07025aa4d57a0ab8be7f8fc7fc15afe83660b3d8149a3b322';let _src;

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
