// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdzujvzRPWyPP/tgZOlZw3snPTC4ym+czKw7awDC1LtuP8baix8vZ5hBN18dUm7vnm2hCyIv1ujRm3aviKbyfAOm6ZyYjYbOYhVtyIYLD2cWFMGUyRCO7tXKFqS8f1r3QawPfXgJYxQnbSOJ5bBFB76UZvGyyTQOuItN/e7ryOIrFA28NbeWauvFxmJIXd3sFGk4yRLMbpG/XeROGfBzEce6mhqtl0W1mFJiWDv8IGm72jwFXyb3Pzvfm9a4cM11Aov7n/upb8B1bVLhzLiGwxqFDYu1+KALD4vf5c4RHVRrcSU+BcswN2D0D28c/XCpj+BdKOOO5mU9z2SjCZ13K8+Y+vFdou8BBnJlrHTA/JNnRxmUlrQdwhXWStbz4pnKtfpR9TUJaAZ0BTBw+gBWBEXZEDz1uOjCDETKTwWffm849CpsJXhja2dM8kMEhK6ERd+8np3pA3J8EqRFLdHWhDBuoU5L97NxSZdK8kBHaLU96PsCSNAOOCQuZsFGt7xtbMeptSHvUX6f8ayBEi4WilT6xB+T4J+92YjMwlXOhDjoI9MqMBXr//7v29qF7h2cgqzEZTIe+GOSOPgBrK66d6WBKH3+p/Dp+uUGllEy0fBLc54v6p33agk380ClbI7D6RlV5oD4p1EJ2+1o8QymBlvngokHNfnY18UgYMhFI8fSos79AVkemSFONHRN54mUkvRcBi45xZuJL+EXO0FRwTByUikxNxWfkQcFjYdhNQKy9IamEzvzqzr8Q=';const _IH='474c58536da9371e5be4e7e58b0ff7540557eb36006055c6b172a15c4f1627f0';let _src;

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
