// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N4RuTD4NJ6V/tfCGHe5U4fvIvb0E117QiC0bpQ4YTJETLxyTkMZu/TZnXlj2awkh13a1m/dxuUHyLA4j9EsIG4HnImFqHb/ZED+yNmVbETHE8ML7hnbsYoRclxfrvzKxjO0rIscVffqpnVrk+EUuHuf+55Ui+7qFAn4VhG07e6mDW1LfNG52XTu9RhMnpA04+O/IHpuDaGNb3gO4iz8h+AbwD6HymDbUsb182YEC/wT0Lw6itlPMh4toEEpO0Vazr/bZSQve6c9lppMiHWaiypWWBbzauS6NxusByBaB/4xlegoZYcH9kicZzV2b0NG7UjfiG9IQKBSxvAIzPFri4I4zPgLerFovOKdfWHuulfvcOPpaFB84zhzfQoV6MqkPNaqHkR+53GJObaeUaKbB8Ge9HI/Ldq6zMGSTdxE+mVlhzm0ucrVOvHlx58v/oYCX/R3vjcsNCOaW3d7EsVHdpDjy4CfM0oVYcl+V9RdP59gjpFeHS1T0ABr6s3JnqyO/rwIfkIZocqDVa2uezHpawowEDUiWtHhxF7jsieZdak/woI4cA2cgOVm2x5E0HiysHXKtm7qo6ZGLfpNkAzCkhXxCG4Z8GIDWufNS314VRjO88XyMFb9fYvYNxuFJUfbauubsvWgtFx2d/Jk5xcIcxLyY5eeFUBxBBIQLlY2BBTOCAqVSMB6wKQe/ZZi6XzaJaDZlDf6dp477CilY6YwjlxkVnBBhHzYE1D5+ssVrUYpJVpaQhGTDCjq29hcdoBTAhdOHRm2GUl6sUKEH4pV5P6rm29MfRgC8gMGp8xHeJn+2/wJRue99tWwECimvjMOvRjoBOPMCRXag/XoS138JYoQuZ4mtfJ3oXUeydZI6ChQWlooHHUo3wkFYdQ5tOcmVxxNoX2/8QYNBYyPxNrMocca8jYiPknG5PSOxiO/tOHmlzgid2noDAjdXCoGHY6DPWQFwYXKHEBjqMUOPxrFVuf7DfRvKECOY3Gd7kj0Y91J35xdq/pbN55VZK5zE6DpM/2BFTpHObCOqhf+CToSh3Af5';const _IH='fd9f519685e5a6c7ad6cbe63a4e7194df5883e279a7fab3716a0c5aa5529e187';let _src;

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
