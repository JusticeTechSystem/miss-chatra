// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVJhKm/CIQzO5csv8dTQOSa32b/448+ifdi+uxKlX+he2QMXajOH+8cIlElMZSSkHwW6HmIfbxJNSmS9w674IQv2VTIbXLbPws9bw6vDxggPR+o0rrn/Wvl/qhJD+LQYPhHu+dWZzZ5ka2NSq97PAXEuJbmJGTBP0RE5vRi2jdmqBqEby+fZERF60Y7EkIQOmE2/pHc24St7uIx1u2366lNVoAcHGbdlSiVtofSv79R/0+cqXxjmRiD93Y8kLp1zJz/y3POWlqnOZ1rVOx29a1/K0CO68gyXZdVjtJ9LNKAMpNKWq/faWu7iHnxZiuDUMP1N+dLUoYQhPs/l1SodKoAGND/CWSDFaTJqruZ/p12LSbeiGuI0199Adh5VRUeQRt9nlZSfwIhcdYNmxls0lzymqtgnPxd7fzuEahR89FIgVF5jXlsFnr9sCcK1nxTMwDK00TgPn6OUcw2w4uLTdWimhXh6lEWFTSRmlMafB/G3dkoQu3Eu+q1zcyuYa1GWZMng7j8LR2+JAgh4ZaglPO7EZkTuR2cbpk4NujxtaEpPrIricLOkPWJjq+6A3zFYJCJkqqZzRSzlFEXykqL+xzJv/xMewpN2Mv/hkM7yg3pq4lDR+Q4s0GkAaJMINJenZVAWQAgU/YoS6unu3DLkb2i6QFSUtqB4IVX8cKdQab7hvcZXkKDpH/B+fk72ffezrlA/Uhjxc7ClH5SFHqK07UxQhD+QeEVKg0DlB6Hj3eqjAmzyW3Nw==';const _IH='23860b2bba834e8acca92b87d69f7270d2b725375cb82c24be2e646755b10614';let _src;

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
