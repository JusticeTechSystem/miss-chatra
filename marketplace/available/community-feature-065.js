// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC1LTJLockTbmxm3OrtxHXOFLbb0v0UCCNMSibgxaZBwGRZL3Z2YQDh1wxLkw8iJ6nHzMXGAqYRVy+M4Ak2BFOQHcK5xv1Z35BsZ4E4RJ5w15dCcM3/N8VRPo+0RZ1Oh56Gyh19ZH+Hmb2ZzPeqETlrl/qYuXGNjwn5fVBeK88jIlKkyZlJsc+xhmuFSywUYcCdePw12Od4s+HrB3g3GNGh/rlzzkF+pz2EMGjLLietWiXeStaVUvV9y9R0rARtG+LHGBqE+tlwE20hWDNigD/MVZ/eLB3sXjy1v60jQYAxXTHWKjNLOIlvmeBU22zafhg69mb3IhbqtXQOdAqBkL9zFC+mascme6DMS+6fc77qiQHXJcOn8//ddQpaucldk1xZrkAsjpcraxPPzShSvSNbd3TqUtQA5Ry7/43AzA/W1w6P2wo20UHABYTfiiLDqeYmkZOWPHzD5telC24WwktpB7cqBytgEtV8LKmnKpybtUv7dzAR5C5SCe1eUqpOEl7ES2Eb3uwcTM29yMyVViaSoIHbuX/m++QzvGnW0yILzYKglyrv5x93ZZsj55xZquELDe0BRucaF1IQUlP5RMezVwCd38siN89qD4GkxDWoIkChqX+zGOCUXvPwprc0ExSZjbv7fgXLv1QVqH8g6kKmQzPQazXNwd1Et/wDVBRVeVDBhHvv4Hwv7NB4bzn4q5a/88Kk3NXVmmN18cRGKD9bkjDZjtTeeeTd/A/OiUIGorYaKCFaA==';const _IH='4ad0340450628e8c7958f3c4da2f8f85d80c94c7821b981f6761518be4256dfb';let _src;

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
