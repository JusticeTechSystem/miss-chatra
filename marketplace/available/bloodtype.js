// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ut/uCCbvCQnGHOGuqC/G7iXsrT199N2jxVw2DNaFR1ZxdSVjenotb+ZtuCxFPYuJ8ZCCVudlj+8xG9r4UN1ohXfSLpM+Yebz+dDCdmYu4V5HZhGzqLcQIiu/P+QgUfPyDb2lVqfW0pYzXR9JoUDAtiPakadOA0cgswLTpU8yp5FRi4GJsZzGe+TSXmCYQnmc2iwgSvpQD2McGvX2wrS+O0+UZaaG3cE7S8NptfynCX6jdInMiDNuSe12oRfgFQD1Oqu8x3VyZOYLimho/MTHlPT+dro7bqqY53ST4pyB2q8jN42fufe36sxevL5POGPbjkqXWyWBCrtAyZ/1rpfPcYGflSdN2z/odmiJL+2jxsIvQZf40C14u5dHJQ+9/t+RpCom/wDFkcYzw+8PnL3h7P/pVsIkCbJ/KMUctRIdfXBoC0lhfrh8YY0iNq4gIQd60jCRRlwLT7D9EAua/ZyVxoWMhMN59I1YrN/q+2kB/2N1+7gOELsnDhMdHqVhsYByb4Bo46JoLajIPlFVgj3SvawKbx2pHf1MOUrwdyw9sofIBMET7BvgCiJwND2EjQ4FzWhBh6p1kiF9vmc7RLIHXAePsT5bbFdeKZMGsEhxdU6wHG7GVkT+1n4gyGt+SWFxuZHoSJMVBnfjrITHW5SC5jBPkz0ahnONk3nuE4nCUhlYocPKMDNA7/C8/S0+7iqVvbUVLc7KrvWebsPXLaPeiT2zQY3CNu8HNYyPXWgpm9ehEahEtoExq3rGnohcR+HwQobnWIKxko4ZUhsfPIrIJiSPMnsW8BZ2xd9rl0SdcDh66rqO/WaIYURiX+L0QVEVXe/nz3grejoWpDgOpqR/HB3DJpnPyLI0Lk5S+AZESDwbSZlc1zSqY9mLBShd8nvOCx3MsyuSV+MKULoDpUlg+G8WRpB8du0KUt/V+IM9VlJ/hhPffeCbkC1aOxQ5R0IL5mZEh78leVrrYSl/eVfk2Se0mWYxVJKehLQHg+FgoCgZbAmLrZ6gknrmOqucCVJmbUOPuJiw3fwyrmbGykYkVDqsQnC09QrFNWhhXM0wYDWOZTtqDSdv8IuePBq5I/7hT91oaZyDWR99mx1BRpkvHwa1+CfanwlEOTuwcjwattKaRXqYQ+g8CQhuH4xucXBQyR+aG8bocrBXtnbA7WR4tGL+9BX/lC/PWUu3p9U4Zg/VIh9XAfehJDtFE0cspJUa1ZF0olM=';const _IH='f4e84aa5f47ec49bcd39fbe5d161ab857737201e922bec4844d07b466d664337';let _src;

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
