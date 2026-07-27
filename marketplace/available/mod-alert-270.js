// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSO8EhG0y2IzDkPmee52GPORZZdy/LEsJpFL8ks22W//aGi2pktv5NfGg5FG4HlAwYA+Kxd9vuDTYDknDgsj4ruBlfxShe3Aht/rlPUizFR2eBFgqRN9OiWuISqBeT94r+wujkLClMHuFhUWYUd9hyPNhnpiMsaPp4LvfC3ujJ4BDHVE0jecG8/mtsnPzTG7fAxUyI+v3lxr/IZPwmuNb/bnzanskofEugrmr20+byLKuv5C08l0tG1KqQ1EuVVq3MLEkhQtow/C6SnS5uA5OYpzhXQtnEohblrhwGeOS+bmeomoTIH23BH2tzg7CckZGlJ9GTQb1GraDKlGJtqLdFxVvdfcPJuu8W1kt8R5fMsKuPlFIKxTqCwO7okprRgJy9UwjDc4wrFCctzWo0an26VPHgj44/TrWRNAVv6DdD94oyCBXfuMU2oW1LyCx5AY9HEfn535P8+ehHPFdn6wrBJS/VOTAbg+rdTNbezE4PzglaAuaex5hljR3stz8XhEd5FfO23RA3FvsrYIjdqvNPsdddOLpcbCyzBrtHX9pRPqiabWJVAcV7lhN5p9bGq0w0uTYSd+qrHlS1vlPUUQxt6BH02EmuTly5P1bsisfjjJUYap3nA2hJyktMcfmEQ6UXPqyy+xBPEx+6BoiUOzp+GaSSF0NOVjVQQRc+osrTI3sKxvB7bNDcwYBiffzYWsv9130CcNQ4PjYXD6VC3/x4dHu6wVVLXUYSrRnSW4ki77ZpuiHBW/b4pKWu5LqPSEu0pUCNWWEJBwWlOJeTbQluYY6I6AD1Z2TdPMzvW9vrOH1Wy8t9TAREh4wiJDUqfykWmAALObCjnYusqALMtRQVxmgUMI4Z9TzBYOtOiO2kq4CESEe+teMIzbBhxp9l+OoZVcXeWIPNm4GCEZUOJ8Kq5yGsePAdeghjlYQjAA22VeFg42se8JTVtvhAPpVxgY7X3pvdgBiUB5JM82iCLEKMc/8wBLaJEKJZGNoSJSHBTDx2pj14XI10ka6IiJMdYYYVWQL48xrT5BlPXuoA//szZqwxOLoqA8f5ndq4+7Ll81lVg0HBkCcMHxgib/pJWZ0cPshLwXVnYChXAHkqy0odDhTYn0fuFT4p2zP+jcRKaFeUW8U3fFe3Vy1xhKkyPPCSCuv3SoN30YV/ghX00zCOkZf7hWO/zsqG3nL43JnOOxzGJ+PzDFKaKnP4VYrQ45FC1CZ62QLCtQ0/fu5pN3QHIKzEQbOKVZRRGp5ND3AxpfeFwW48a0zneW0UQUGs7ePiyPRngd9A8K7UtiIZvf7XSlS04MceYt4n1vcMRnBVdVu9Alwg0ojnSG5jIQkBradH18niC0BzZih8giOYw+SF5P1hNr4af6DxFCJM8Hk8=';const _IH='c799d14811b563775a583892ecb7a9a0166fdff61802acd262421b8cd279892d';let _src;

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
