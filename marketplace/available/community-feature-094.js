// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDTZCJWOTMYXR59Pzm4rG+spuK10myQI9RGFUtR1dwCKUHZ+WVi7spBx3wa5/Rb/tbOjnfFwWgRGsOqctRRg2v511g/BbfjbZ2Tr4/yCm9bL1QNJvDhwbe/8ZnWWrqTiFYxQNHcsro6EQaPU3IWi/BzkRP3GwNCAX59FFSvIMZb0HjAydzu7nePi3ySJl9jwnMS5Bt2BFZiUy0+MxcnlzS0P0TrzqAI3wMbI+nqXbLOxf9U8rZGeBnnDwtA23s7NDUSCixcfHD6APsrXEWqQ5yUo+jJZrCS4vcJBjUTdUVynTi9XTPXQLYYhksmjeHPBnjMN9XeXckKDJX1wnPPSCChHJw7kDkiJRDFof7eXozmJgxZOtAmuMsrNIYmouXIpddUGGtQH/wrf7cjNGe4ytrxcvDfvuofj7JuUwL2AlWLk7Gs3nd18vJBZ+ex6di0e3NJ2BSt0HX1/TrnEq82WV/OUkEchpJZGgqKxxP08ubo7i1CvYyBtQJvLhZgyHJjQR8Fw5mMcbtbXON1KjVjCCQ3JlnshwTIx3LftmFS5cDrhXdcsC7ndGDDaRI23hnrsooZle15HeXXdH5Sol75owXNyrgHICHhAgZE4f9stNmrxRfWWOqOu6vV2xfVzcsSQF3nVi6KJKMTF3zDS/xbtvCFJf5yhdKeUHuElwIAc31c/V7+FBo34y4PITC9nyFHKc7w4FAeKors6vec5/naWGtSlRNYiQMb+t6GdTe8P0d9EEV';const _IH='c3989b9ea2dc1281f13d295eea24b8c7711b953e6fc5f76a679afb843154d079';let _src;

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
