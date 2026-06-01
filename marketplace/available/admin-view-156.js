// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwyTkqaWtZuOh7ZE+BbfWqwtBnpGXaob08b0OwIfrXNfKQFHlQBAnJMTXstkIf3jBeaK7VRxp8LNkI373bTXtC7FG2S2SzWZvnzruEK0X0BdP3/gteYrb6iDOUvcnjIugq+Rj57X8VNBGHLoRidBCnXK2VHsyVmYgVGvk1T2t3M98KIO9PbEN4MAspyCkt6vjYzD4Ejx/ztv5n9vURyhD2xXDN3nPZoDp8MeI4IjSW8ZvHPGbscjxA2+7MOJJf6e4wf/3kbxYQbVTbAf/LeKy8dsKfoiJrkezL4FmptFCQhQTs9Pk7mmKCiFWTLdDDhOv/J073wL8lio3sJH9TTNQXBY4qLMm/p7KlCYgnAJe3pCQDhOv4ZVP4YqSAx978eMmJIX+xF1ovg4qCbt8ygBlAiYdLA2TGwRLq4aere2/pdc6YwRCrw9DL78CxI9n1Vk031/MmNTIn2EX+M7GRf/FNTFKafU71ca5po+s/BTDi8hsxwb9TD4zbmJf5/4UNEEZ69n/SVxyrBsMBufYO4uQA5u9aORSbwndHaEjqdTxHv2mv3+GJR2Bdu/dChbxx011xmejQXIrb5oQ+qiOKA1K35SUYNT0rjbqQosabo+FqIy8vJPAuooECEpQQgu1NilnUtGsqMPkd+k11whJqhLUypxDU491kqdCwbm7WprRtZ1tXISqFzsQCxQ7TbaQ8w6c+NqNHe/SeL32L8GJAf+NXKFNg6ZugIJaIALFDLhKKGhSnv9E74iZbSnwBXAxvFWh82V5pIn7ilI9+XHs91ml2KU8i1MqVczDyZE0598+JNzUmFrlEAJgsdu2nu5ZRjbmFju2uxKqdQSZDHrOSKD36c9X9hVdkh71AamSdV7ErhhG+YxH9lExI2mgIb4RpRof5iSW0Fm+ejip8mTgmBtXuXhYbk6pCSz+Zv12BUs5hUwuNBH9cljtJSP7FPENr37O8Na0KtypUl5ZnrMOITpHAzXHbaAN5SDkieraQnwsRXmR30I';const _IH='d218e5e567b0c3cb7014d58eaf1de0b7a49578c1a3d01847beee3659ce6adf31';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
