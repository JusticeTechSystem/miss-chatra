// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1NbkaAMw5/z37ho1YrrD5negvku+hlgnSrSam7a4t7zzk198XR0bJN2f4fQ+YSlCvI5plwzyoOkjrfOqUsT6QjNzFXUjbQBytE3yilR1glgN2VexnRBE46wO3qzyOr3n/v/hNF5vu2jZSgZUY6w3/7H7ADtOhHVpbGfMTrquYMI1MQU1GfAhvz+KuuIlsKsqERzMjSNirUJRhGr6WPxZiM1nrr+w8v7LuC7w8UWmq/GeyB3DexeO1lpMfMldrQ/FuumqPFRTbCk5Ht36GEtqFsmTKwdWe5OCC/EMNfksfu/nVM0BlE6g+zPzA79NBFgfzRQ0UOkaz8hRk+nj+M3QReQwZVAx48GqDotBr15OONNsUyWCfA+/4rAHqu8T1RBuS518xmGpWXHqhRauuT/Tq8wb42Krbd14m9BD9sHUQbDlo0LlcZ4ocV5cVbkom6qRf4Mq6ydByNizPLDoc868VkqlXldGHwIJJZrGOaP2/f3BgVNrgTSM67vxCnRsW9iu0x5KwZaFP2TbmZEFJH6yJda7e151mlol4vtl4bWel/L9gYrVIGw9NZZVb8kk7NBOcMWDMUa0/Am1DUtysXPxtMi/kBGKCMxSPHly5EboL8Ss432lvrlyRXRJ9y0+pQZZs9gmQ8kMEeLh2QJvWm7w5aLSC3tGq5YgqxUA12YHrCyP031DGP3SmhH8N8xCxfFbfGlp7L0UyRxIMbU/Iwqbu2p0Ym/+M7v+mGB6ofHQ9g==';const _IH='727badd53e79cae7c2465efb4a415ebbeffa3c49dff97007d4308a0a2dbde9e0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
