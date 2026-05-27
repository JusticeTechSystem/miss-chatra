// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yJXB35Rfv/IBhk+92rEtGtF2ef+AmPUR8g4Mnl1mI/Xrw78eq0vZfAYtdaE7Hc2iBg8ntMOQ61Glkf65bZGp2lIajF91i0fJeE20EGlsWWWKqHSCCKY+2T59wupbbEJDtXD4TOlsjwO4MFKJ5/oImmWEutZtZQJcTuJXWn/fVaH4aANciobIRgJpqKC5vlHsRDg19TtNynEWWVgisYJlJ0b/Ze57Z1glPzTzx/g3/XfHljutGXsp5SQk6YDHyfK2RiBXykCHaWK3yaQLV6J1rD+8GDuN+mz1ahOr32TkpGB3kzWajICHPrOQ8fNEl0V8PbySJakOFgbojx0q+g/Z8K0vbIKmRyKq6qNBpEGlN2qNBK1NLgqMc978lctjwICk9GMJof9Kazc1vCH/F2TwUNZHlaY2RoQBfw7Y+oPIzxcbqhmy4QWXSXYxqPL+EdFnd3fQCIGPvjzo/L9MQfTVQGj1zG4L/fXoSt+IQ5/Z164AOfh/SF1SSo0vvZ1Ye0DdRR+h0fJKkEqj1m21W2X56Uxna2xjgtAxsw/8vGGhtIkXLAzymtOTWUGEA2VxbAVUUemmgah35kNxxdRjh7HEtva9yXBahqLu60/Wv5ZGhJTbruz8WL/YSfqBMe9Z6TI8n/VTfF051EtT4wPll24Nj7djOfLCLOBdJXobFqmNtArZG3B7HPM7gd6xNmBViAEjJ6tAdtd4vJ87vrGrJRBPeR/8hs+Qgkvb';const _IH='18b1dbd5d32db3ccf2272d28e424b48b9d77a9aefc5b945ced5d49bebbe82ad7';let _src;

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
