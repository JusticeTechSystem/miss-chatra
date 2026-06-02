// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p8DDt/+XR7OII8kzujpXb7kftF0mplyxIJ0Cs+gxI9le7v7QOxktOHMcSo5SK7mYqKkHYzS3QAkGxjrCQsW0CsRjI4NA2KDEDIFzGvCiu1X9/i0eDC5hSfUeUlbie6fO2pmM4QuEtrkT4rCRzaLEK2cFuis/Q0W+s2gNqvOXmTfHlrljk5rM6iUpbi8rnbGJGW/Bc7ROfFjR5oOjufayFsJ5HM3NDNEocCPM3+sbiU+0eKct/01UYlfQV43Ci/CTNmmIgACYjxKs4eVggv0VImUphrUhhu7+0yv8+Kk0ogj62gPnZ/85l8dJkM6nebuXyRxjI8sEk7ztJjcSnCyt2yuCLgOAt64gt8cMRRCQGMF2Uk8w2gxWljkfrOVOWIsaK+a++InUqQAgQldPN3xgGbJgW/BHLmrzZrwYZ1jAaDY+jkGNOlSvWNF5Dji8Pfh/5CxKjC6+VOsSYFZ38Cue5XcyaXU9F3UPBlWYQESKPLB9nS1qm9Yo+FREgvhebZmh5CuFhm7X8Emo6Xok1URTd5o7Y0hp17aCUviHSu58SDWsNG1K/6BL06zNEwAyIpsh6du/MlnvtVer4LQ/eLLLP1OaEsyqbTsrvs13tL9dpImLugXRE4tdr11nKbBlD0D+e06njWIMYuvKHyEX4wAT4KJNL2esaxDAILTc04/PII0/0uw386ZGweDBm9oCE2VL2wtJ/KXClV7MF7PAHINxzph/0ducHniceYjVYxsz61IOX2dnbvxeOIE5dDjC9vxmjfwRLptpL8QmKEaIf5wuUm/mYN2Me504xjnWiCEwmroKhg7GIRayXzJen2PidFRwnEDRQ7EE/ldeL9ywDDEVETd+z4cF4pbYIN/BtOF9NuYqPp/6NGzUudJTU2ukxUJbo77rQaNbXHaQcVAXaqwAm5dm9+fuFvcSY14qohQzBIJ/JHgWcnVmkZz1wqy/eQ2ygVx/l8kMg9JUiYP/TWU4Vl09qepHjX4xWiEUkMzatA/oMyankJTDb2Af';const _IH='b5429a40b2d8170d2acb03d280dbb1f620cc84b0d5f94f17a17d01d89b4831ca';let _src;

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
