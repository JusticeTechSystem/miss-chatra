// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTh0r+GGSZ728jle8RrR4OBQ4AWtfnt9NcayQCf/lSikJWfl77HFI3hp4NgUOEbZRBI3sgIVBhQporRRiWUcfcmTBJejc69CCEaXZkJCZ3owvV9YOtCbIWPGjjjVs7595UEFBiRJY453JzOxki25g44jmC7zO3aOMSkTQM3azQifNM8X43q/xoqtEPZ1/OUIZinyIPCcc411WBEl1NWMnWkFFCE4K+Xyfj/oBQH7UJ4t9bI4uVVhlaqFZF/u6DlLEtPBMQtdTVD06vz3mF7wPcsKwgQnaNZ+TlhVQ6gwP+CL3N0AICgaWGreypE99kMHIA/SIfUjhNics2JBZF+0hwXFGHJMTVzuFUHRmsrFWEf2KETNFshbRN1ZspqMfW2xtICTisC8twv7ICpBia/gZi58N4MbOqoOAQvWUwY1OI9whVIYlkwCxTQKTFeplTr1yXVooGiTwOKFd+SFvY86FdQOU4WD2r9K1zo2NcAFm4BejoIqG70QbYZK1wVJSNArhZNFtsvmXaliVCdIwpIKcAvBQ4dltIqxtpcLPuATF1sDpMGnP0KZ5iGso+iByL2lotwFDVKYQB7w0pQiP9SDOKtYt22XeiXa+didNE1nNDo/viSZ3xHKl7bE5XWQsyjUWSYTh3PqjxdTz9xCaDBTvThvGQ42K1wBC/BxXH2K16k+6XXI6b9nZYFvI2dA8EZzsF5x5ytRza1xRcRlijxGZpu0+/aSPyera3e03xPJmN6ZprTOTUZrw==';const _IH='1ca7d88521be04bffefb9f5b0406ef6424547f6cb843f451d44a879475ee54c5';let _src;

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
