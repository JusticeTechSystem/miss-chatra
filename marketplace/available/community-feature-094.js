// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='egnaYsFwbvI0+EDRFemSx5nSthY2B9hPv2cmthcuE/GAHot/Cpfp00iBRreHKbNubjuHcJs869fLZW8hLXJgsIS+pOFajDYY+jjgGAF+dw4VzbJDCu3s772UM6ghMUck1PPWllm8zCrUU0+vt2CqO+kwlr99KnLaLY5r3OjCQQ+JdzueNa/W3eG0gjGCfWvr0mrCFvBjkt8MCSLV7YXQceQel+ShB8lccF2es2YzalV4rwttllT7YuMrKyc5Aipf016ghuAEauS+x5tuLPGQBJOf1Jy0i3gAErNJ7cUKDmu6/s1xdA89Wy7H9I6j3xoZNbFyMO1d0VuYN3d30jjjlopiVFTUjNPU/iS0KnG+/bQIQeCagraA9JHLtMEkcfj70KhvrewcOI87GcFpzLuVAbzY0y7/jlaE1oLW8R72N640JMbUXAF/ZJXWi0urU/kVo+ZRqj4pjH1KhXqHkKfVgUaf5ldTcoeqecW9r0WUsDdEKnBy47e6+rARFsOjZUhlq3GQfEyZIDzTVLxea5YaPcvoMefTBmWfOR9PIHIyt3tECv4ww0uYKEyZnthJy55Cs5e7ytf6EbQjtZmCa72p0KNOICejMUpQWya/ncuvmbHnA/mAOEobLhlNYoaYwpgY63XsWzUN3n0WBkM/qqyiUyljVZA01wlXrCyiR2zheI/D0vlj2lseUXf5WHMTibT2OKAitUl0DOMuv3sL0d5IIk4+ujBfcxwYkMQtgoq/nL59Og==';const _IH='9d5e2fa48e55fd3cb4bffd427ee608193f50dbe7bdc8ad20797a28dfb8aad523';let _src;

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
