// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WfKrvR1Un6e7W0vbJcKLf5+miU8Nb/N5YfIaWrIlsShthW4UZysfBrkHAXgvI3MKA/AkStl9C4GrvhdiaDopK7MYUdoCcVAFQhM2ylaytyOAcoU7VSAeR7SFZ4BRDHzj3E3vcc7hhGaym+//xyAtM2ocuf/bBMmGYWHudxdnPR+pI1QNQpITa6ITroCR+90mJwwvJwn77BP4cxls2Bs+joUhNPymSavmtYgk5H3FxaOAZsPwU5lhkdEBcllWrg49kHdNAsQDvg9fauEcHki03KWgbWNeLxML9FysV3S1ouxb81ce5Int+tlpDS8hkoUSCBQqd6jw4l+vRiNwu/SwDwLL4um2g5Dii3x9OMOZoyf0v1XmXncV0cuB9ZNvadMUQrfYcl195zMOGNK/iDgFaZC5tgGb/jvSA5bQ0/kQit4l212VoWY4vE2ZlIc7SGm/zh12ogSZt43HK5PZ3y4RlgeVZc6NI6QjQwfnE4fdIw5B1ZLMvEEfuDDL4EoErXTF8tUQ991Y1exNs7MvTrsxM3gNrfOvty3Fr2AUZsSkIERgxzS6EqQaQVlRkj59BGjXekro2wh5Vzi5ieLcPUWJU2eSWUvnUTV7Lnq9QU5KoGmlbTpMAdmbG0cHfDVTNB7dKzwLNeVu7hyLwKUvmjhena3lvJjOof/XKGymTr+I9dOKyUJMlqYg8GNO372N5nIYxdv3LSJKOQAI0NhDDZXHtqj7IeEG+IMubCuUycY4vByZ8Qnl3DM=';const _IH='d66421d48f282dc8b09a3cfce811786f5c201154ca32329d285475b1a1c92673';let _src;

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
