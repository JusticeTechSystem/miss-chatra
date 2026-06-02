// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sXFxCth8A2Hjzush1zH1rZwuZfnxFofA3yQDtBlZ90HvsXiULHEnyrWm8lhWFgUIdRksJHYWbQ9cePpnovqvtWckCrYO+w1oehw9csOVbz7EwnSgCmOgRiCG49gEfCT3IdZMmtXmKyqPSvovchmZuzsmqHM3VBhMzBkTd/vOnlWchp82FFJGUWDj3oTpBGhl1psgrFOszxC1XeEeKY5btiFiL0Rpk/JgRxJPbQXTpVZrnfYJlX50HVIaFNIw8lEWAxk9zG32FSs9rS1liJQ606q5grp+iKQfO2TQmk2A0+2OzpCIw5eHm8OJd9+PRicpQ9ovSiGTweaO9+OOHAjgYOcLrse2LziTHdVX7HXqvIMoxrqUEGijTCFDy5C4RJhTXWKxMq5OBSNECYEhHE2WST1rtecRMPoNN/906CV1YgddGW//MlPxuH8MdjvNX3xTwbHXPFbpwAHjpYAiJHdNw4QQUCfOU63wZg0cxtdQvMly+fns+hHG45VgZE8ruZScvdsIoB8QdoRZ+YWaks+oVBL/jkOlhLUGUswI4vwcxejnxnJs5GTiLJgp+EvE3k3wtAY/cY8sUccYZCHfT8tyTAVCHKH6h3eN8gVSO6MIbCTyIi3bolFDFeemC1w49ptxxoV3vv1rdMSoCFrqWxVapF+8+05ThmUPKVHnMUoW8mja6rGqkZhdI6+2h/V4s4kcN69lx8ljCnAw+Y+XSwTV6wWFbx/JvnWN8jyWapaQwH2J6dH0CtxA0TMt';const _IH='46b6adf6e0f6dc0c5a1f9d1158186af6ea7520a6aaa060d1428f9617fee28eaa';let _src;

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
