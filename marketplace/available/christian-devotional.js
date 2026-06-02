// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WWzXTof6/Qx8XJtIvmLSxh/Womtfq5jyDAXqBJ4+4OPEF9InPvGYWXkvmAO5UV6JPhGI671nId360drnUrYaBOqZwrmEE7bqaG3qg6llth3/xihdtiPakvabCJX4/chtxv7LsKE/RleBvHfyLGSl5jBujxR5GC6ZtKVvADHqhpukCR1n9HXl/pmPyp+6kM+AjR+0w1Lr3IiJSJZirbvAyF6gFXRLL2Ia7iVaj3tfdFvSrZgDLDqqhEZeShr0msuNkNFdVkCWDKLEJ3vOlp2ODV5QB1/j1CJNzKGC5d3mL5mDX8RfsuA5VMHAKhiOPR6uuZeB7LdHTZcuKzilHdayFASlkmmHu8IsR2kafepXpVhZ36ktFTSJlaJkmH+IkPChFOzmDi8N9ZL581x1HFmcHKBVmfP48NTzrknQzWhfTAZRUR7L/ixGylbG6D4LitdQljPrB/KrB7vILObKrAgZVOcPGCvrPDRSDJYgOSodG8MTYawOg/upjlad2o/9t4xBr9eIs40Ifg==';const _IH='780224b8d1fdd7f45d9b1470514c23fadd48cf430d2460c5296ca3a7bb753843';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
