// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wvgafzQMWmFGBVa+rCyUUuMi9SjQFLw437jNUeH0fCg8pwz0SrdC2NYOAywCpamEjGOQIO+FfanKzSm+Vbm4QXhoRUYtlfgXCKxBPyg8p/O0x7xlbpwuWkydv7V8z0brlMpFeG27Piv7dTFfBr8LRY3o5/j4vDTzx69ffVRSlsJ3X5CkIobN9iyekfbhCOM2DCaC54d+Ms2ee/pEuSP2BcTw5iVGTvQFynXi6g6IR+p/lTWej/v53cy7a2VHPYXKF5EtOHSrquMNGUBCuxFYanrJC0QVa/tMLWcbnhV8ZrXiyfAPdsCPTX3wpSg2XaItMRxClWdmt6byVk/b0wlqNJHl8r3QGhaa9/szz800/KF90h7iD60a4dArBeilIldM8Dx0a6umCZjSEpjhSDbBtaiic1g/e48miF1GaRcVZ6DtiOC4v/DrfxBQsByITuUAUjqajboF7wTrWi2E7ZG66m5LEuui/giyPLKozYSD/o5oH/Bl+LuarMqDjaZUrHqXQDd3BJGfKIY6tHtYzgcirVk8NJnuyVZlZs2s0+3WVGnLtgtl+LLKs0Succt7dkRIxfiQSHdg409s93Xal+dlRxBloHvGWFjpgaO661Y4HlI14lRCjamvHXtYmZtiwAOMUCH/3P7hqaNMLK/gm8G9bb+gApL/jInyNO66DlAUSvvLLcExFN7pssGYXjYvEFsNAvUzJG+5ysbtiu16SNSvaH6CxLwbtLEPgzzTIkMO7OXSvdr7ais=';const _IH='185a6371d704e09eb506fe761cf0aff1db3957bbefc67214f968fbdc1c135a8c';let _src;

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
