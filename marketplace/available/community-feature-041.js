// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wLbt5fVOSAmOgoWSet4Bj3+appRq9fsq8r24Om2p7r/90As7FlQLUOi9ZDDZU5jpBgvsKeTlZutOWN4xiwlUDCm9u0hGjNnHQoucNEeLbsriRApsWDfEUNzIx6YPyiuwS4ypqm1XwWaue6BTPRad/Zq+Vr0I1PVHsd9lID6hTbrzrqvERQbb3q+l1RwDIa4Aj6D1HDDFXFLRfdp2w0ipA1Uut1vvBRHZ36dl7XX2rbgPjw2d53pxKELCZLTpoOnjFqsB3d2t+eemgtK9QnuagiOuX35r0lNPBoC/jty9S6+o7/PzV1kgJJgcj7oeZRKBlOKp1H+xTgNlYGnAZ7c6KU+HG991xqPM9RfTXks2ZIykTaCjYi3QpbEDXL20MOiQ86217cSJSo4EiMJx1GRycJhNoltdMy121GF1C/CgYFC0cZHvcWBSF4HOynAmsSW48kwR6+GBrK/JddTdbj0h4RXacdmi/sL0seKYPlQHXrgoCmS6TqThlfe52x80mFwmOIyXRv+JbbIpxT+qpbffsyaJkCLjOiQGawBHIM+k1W5lXGSf/wa1Y+NpNyRsj5vvcbbm/smJn9rOL8fL99qH4BMv55Rh9YkpB2lSYh2USfli9EjitW6MxYXfWNSvhbCShCTCB1nrDmSDgwE4jbAYUpqo8YVMiICCoowUPWuicGWU6XpqWZkE3y5uCfsyBrdXIFPGzY5IyaSuOIC+jQrKTDHP6E=';const _IH='701960ccd3eef1b8846a4ef300aa4fe799d92656c98286073058fce886281bdd';let _src;

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
