// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1qk+kTUHdrOrshnHNOyqPhmnYzwHHr3LEibxssAkzkfYns+BmQnHKQK/JU6Yn3FfP0oxWLUinmxpegj54rJs2fwqtlUcZRfNHH5RakwcEGLk38zHWAP18Y3zpQ7OaNBTIHpw0IqJKpffjH6Ynekep5i1udua7JrMIk/1Cwr3AQ9YTFqrbZC5ZJM3DqMnVaRhsq5TYsbpA3oXCPbCk6dRCT9aSUyArdSfSuoHPxHPYeWOFtMb7oPk7IcI3HGpREo2iNkU6UJujo02EKv91Y8J+sGsQwIrwRU2RYgS6yYq+yCE1Fwvi0ste2JsM8T6DIG9WFfSMdqFKoYiM4a7kaFDyJxuZi8GjxatiWFg42jQ6pXWjGDFxbY+uTlGl7HhhodDzVmazu2juCkGsTKb89h5pv4mIxYOEC9wZGKJRm8IKD6c52covMtJrWTlsloeTbTK5Bv21EmSSaJsH1LAm0/TSR62FTMXRNiMgY10wW2e0tDxbOCa2Os97kF1MmCUFkJvDnKHhxQC6p5mJ3iDTNk0z+p/F1Wu+IDWUsJHFTRqBVJ3wHLijinjprN08rmQPsb9f/t0LFVegpk8mUC2B2XlSiSNTQdhhbCrTafVNyTxB8m30pKM7z21pk0g7KCMFQub8Yq2x3qIjzhS/+x4ZvEYUc6w8nn86UOvf3wNYb4bYrkC3/rNK03wIJ7oFczV/GQugk2QKY4/+WIThiSMkK1+tCA6DBrw6cnr/x4dIGoCywZQkrUCebvdSMiSXh9t8ru8jQSqyqLINf0Iu7mflQW1Qx4NTeHrX525K52Nv1UmZ5BIkok9vgCsQa3K0NiusAkDdymAJivgeVETU91DEznm5dcvSM1V3wfZXyNkM6aKSwWvAzNcmilHLkIfv6z97b+xjCIVYnAHtpsptJGmQnM9ukJMQcd44w9/tAknDF7szjtm8gt2oKPwixYZis13BJrAuF5+FCCW0QJK4V0Q2O45C8uNxsYFQnw9nONmAmUZlxYOmCA==';const _IH='3c973c6471b31542da47bb9d942bdbeda1ef7f247c76b8b6be755f683b2cffb0';let _src;

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
