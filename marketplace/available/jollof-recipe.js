// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOFIPtC+FGv3dRBDGxfo5o23Z4+UQSfii8j08ox0iQNeKc2H1p5XJOmuKGpGgctXc0HsoCpOySNdN4/FJ7JFIKu0okeH7OykKHWPcqZovSgv+z30FahNK4Oki6g/qAjW0wJev9f6MGMjzD+uCMvDKTnz1jHR+E9ZzQRSDaKIaAW/chKGTvTcuuBFYBXagSNevnzu86Vh9eG3v/5jYrn/YqwvvbYS+vhfj+hd6glz5KAreih9B2IlPLI2NgzANrzCFBbgRjIbc33cAXhWMD0UoCRbkaHpyBdAGrtyY/YJCE4y/iMUXmiUpt2686ib59VIkFaKLPQkTtFecr5JMwOxdV/AWFR+OOwsvtoK37wvwjWurLxKoGOv90prGFFKrMjTnbKOhBVNrBSpQdeV735dLR0ZHZoCGEHKbupNnDdf4r+hxxkwXkTYK2ULw7rjFkBAs76IL5wRrta8Lq3XJ3tOZlWS9j64TVKCPmS8tWep0vw5yELaSC9YOrgg3ujuoKwBsCvE5+EAAgSSnAVyGZIOA2kqcqUAQtshGkZkMSaDos+Ox0jmxDkF22cnf7k76URVCc3QRCOIttTugXnRDncoH+XHk5';const _IH='b4c8ef17bf84efd721c9f8a8c3f53c83dab133708e16a9ca64e3ee33f7da9820';let _src;

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
