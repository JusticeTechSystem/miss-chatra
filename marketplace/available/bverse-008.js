// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvLndbzUyBreYA6/XjpcU8/08IvC8Vm6iHDO/fWNNi1Trl/yE8/eGOFiB/T0lKbRJenYFmnvFpDAy7yJ2RruoM6jf2UyZjAXqlrcsQ+bBMprTa0UpaHRQXSyivl9N8dDbrAJzkv/JkE6JVqaB3eUCnzdm9CBXqzVQmM2lz1E0fddkui3ZLKUxPx4G0YMeqtx0ORaK6w3SF1TS0nUgRQ13xIx2fL/b4wn3FlWSQV0MflrkBgjm1YxrS4snPuPaoHlaIBCGSvNOyFE+dL8KCkw85MkF00L9xIGt6PrmhVpRXBad47CcAU827rk3DbMRxuTtByFc02yNBBURQgrqQKv2k+pXrf5+SAmxwifTVQt1nL2+5CZoSVNt93qVX/a/yqkmWpanbrWxJeRBnb8HMVR+3ev0TC4BqXfyACzId8tfEDRseFEDE7H9zlpnhfwXw58WE1D8P2TofAJsEIH/suoFi9jbwLG3vS2tbPo0kRq9hfCWL7BVl3TgT/+gzM9za278+vNk1/gBuvMfhXzelUsdLNjck42cTQKQaDm52is3eQ28XNFP8iivXg30yijPb/x9jIr65NFQx7G8unFp3GbZOhsgfeUogwwiUxvrHytdYNrAnbJoFp+SR6iSc01OzyjY9y1ih1rZVtyhFPNvPJF/xC3xlFPZvDAYZPxHkebFhxdF4fMNRrtAsC4fNYR1UjKhMjeQNF+/bzKuQ==';const _IH='0004d1b2a7000c69b61176220345dca89a0f3947520aec2b5fb8c962c7ea3c86';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
