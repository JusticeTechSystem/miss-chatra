// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStcGUBEku2i9CJ5tqImwdhU7ClG+W57IcowELmenwOk83VaGNZZ/8oxo4Q6C2vul/VSZGQQpS3tqZSvX9P8O/oOAUOVWzdplr1yF9YsUvUqFpDB6IF5h6kDdij+7Rb2Ee9Yt2ZWUiQO909udz517lo5Z0NNXAOSAU0gIosh9GLLlwRAVF6BIrGE37o2lV1pVy6dn0mN1RSgjUHqz7TbT18NT0nMTVWbjYs3WrOk5Pbd91zoE7X3V+OeKV79glz4coVeXx/Tmn509uqnMY/r+pEU5IroFGEo4sZZ2V0E6C2kbLZbTl4TIrnJQnn0/R+ZgGY3BeJ3ZkaFeMmFceguxq+s0LEidCiugw5aoI9h/doHwnuMCAcJBrSBzjkmWwdS9gOdD556LPy3PpSRbcv47cCHBG1VJXMTpzMEg6/KPBCuwE3znrrHc8c0HZf+HbRu1oedPvSSJK7WiMVtmAy0yO5Rwa6ASPPZuAO8bKXd2+yyA/m2dQeV1ZaW/AV9PH4q8UqYXKvHbZVgWkW4WLrx6MOJYc2H25oIE/IuIM8ok2h8oF/xCLL0X3N7PPA5vS0D9NKouChsfYmIWqfpX8rcEipei0jB0P8/jJum2XH57KgaLK1NcZy5fJtrOSXWiv+yb8lxoVyVBQoJPKx3iaIhw5LV5DjVCF9xqgtZ7hE/4fvYINrtWaEhE3sX1XptEP21kY0DlNeuO1iu4ZgaDF4Ci7nzuTrgKlOd4VJNrNGPJNLVDXgTw==';const _IH='c75d33e81c78ee9822461c1e202dfd005a28abe5ce1844eceda4da488cf6e719';let _src;

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
