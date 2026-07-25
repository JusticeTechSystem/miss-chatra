// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMf76XhyC3n+lJCUBTVW1yAjZtJr7UQZzsyo+2xTicRQMWKJJ49v1rSnRAn56+y1o046OY/1GGMdt9lTe8k7+9iY1H6LLzrCbAfjzEyJxDTj3yKurBmQT1wbxgH5XAmgApqarevOeKl8UlRzzatXALc2j/XgePLeGBkNqWFdux45NjMD+P9WxuujA/ZGH2IjGbmQ+xGQkl13KAlpIZZxFMkUHSYDkDkPSV5fVF/IQbIa3vaiNj8VB0fRJUXMHALFlsWiA0q7ncINHLgSH0Ne2TSSEh/GQ7pk8MTANy1j88QOxmbAl01h8xdJDwz+kHsYFu5Ea/BT/xAa8NEfABGJOsryX0SUwzXwb451lwggDG0AiT9J+G8C/O/xF5J6MWSr+iZWEy1sEss7QMZmRp7q8CIEm9J/KabQu9kLFq7IymW0Tw2mTk5SVX4jVbLdy9F6w25gqO5gvnmWEpdB+B9uMYlmtt80PhQRUYOPwVuwJWZOVTBj+AseUrsg4L6C7QJpVkqlRREJ7ICYs4XV1utipp0N2Rcsrk1zKomV9D0L2x8Voz/OiHT+f8+v/19n+xIUfufDISQcLTorU+acWpUpLLtHkQAKL0DoFZ83kQeVbzsJVcjIZSnoJY2CzUf0XSjQ/MubPL6dGtHDSlhJmJOJo7goLp4IKGq1S11PT86ND2D7UAx2cPZWqlcB7AXJe2OoQSMS/Cc9MdWXm8/MkaJagiIOvy55na86RD9LbHUaLNbRB+criUKFmhogO21svD7Bm0Poxi6mSChDlDrqPPX7COLIHr2ku+nvl2alTjv7RJfcvxBIupIPs9cp7xvFmbeJr1tenR9uqz6C8b39piBf7tfv++GPS6p2A1Ij8eyNRCMdLQBaoyEI5TsDZPCRgC+HZOTkNSE2k86ovZpIzwnJHMutFBpirDaTvuCG0bEV0OMiLezfOvBeFOIdnYK5Ya8TaATs3H2lzPTHS6hVoygDUqw9xdKwqeYw4UzkEyUQV6eDW6kBCHBm0n8DXROkIiHCBLCb9psKxSXgow9He2Acqg2inHDxA3jtI0t06ULQfac0JL7e7oO9XJI0jvpSFSP2nW228VxdohKIlJ1d9MyBmkJlMmAV0+iWiEJszne9onZ3HhlSYCnlo+5ezV6laoCjwr9IuRfhJvlai7y5DpR2K0rBzd1OggEjnxvIC+eze4rmuvfFKZ1P3ReMQ2vdizv4VzXT+v5pshesPnjywcrBDS6KpyKe+uXbUwy4HQevq35kX5FPT1MfmNbnv3gCCtTdbVxXOdwFUyoqQQ7vBb9R3V+uKMvaLIGy1T8yJr4+Z3sgtYv/3SxIm0JvFNgxnmGm/sKI3tnV9slcJcv2GRTvyxjU9h2GaHFQfzS4NBoyMZsDzt/jplyjbaORG8E7PTnkXDaOYaOCLmcBBMi8cHWSE2nFKx7AYPk5GDvTI9r6L0EzOnNspVJc7iru7RNAhzu9tVDMYQ7vS61wvD3h6DLfcHO5gYZyr0HF+/fnSLS2ik5Y42Tcl0CxnFCMGwZyaZBPux7690E5MA9ARs3ftOkUGXIFcSOLBY+QXDJNbNAO2nmSsTfueFo5rWh1nYrdKScqlVoyKnNePrtSeyMoivw22YIToeie1aK7IR+1+3VTC4UvCtEBsiisUllCiYcRcs2/xnFTBV6Y9rDEn6lzWXFDMmQyrFfeFE89GyDGmjlFgSbLI/p9+6spV2dpplE9NJFoY0zpm46VII+KjIowmcWmktrqClCJthM1i8lbrBtfZmojPdM9ocEjj6rpnOlnls4qUsEsMVF+G9ce5KEUoDFtKJdF/GeuFCBURBYV2r0/11Qw+VbVlo1w==';const _IH='e18ee1a074343d6fd365062742567c887113919d4a05f9ca21a6b2e459ef1e08';let _src;

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
