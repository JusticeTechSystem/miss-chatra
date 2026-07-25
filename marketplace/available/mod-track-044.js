// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ39nCwiTu6dXdrWplmmhFQScs5htoLH68fBNEPYh0wNIEIO0hNU/i4xZzFEmkMpHTjfFcjaaZZ/risEKCwC4Du2BFG4KQ5fM0Pr+6CYOohXbfmFv3hRg+QNbu62ETq6Ts1syVhE17A7tzM+Fxgqen88aWUZcvqzvWnSRONve43V9HoU0AJLk4Ef6K/y76nG7B6A5YTl/bSIwQjnm0e4sVL7hlrMqKgouve822xgSZuUsT9qi71lOvIDKGcE5Am/9kph2N2BHyc6GSujt/Ik2p9hjYAxLvflwTTgvb1dawU+U+9sc6+AsPTko9XIzQ/LBdcG6E5vY1HAiE06f8YJE9UtEhJ/haJTHFqZbtzdUxYFG7FIAFS4IjC94jt7Ot7+MrYiuBcnVmDMI1B3Yx7b98IpD2jnwOFQxoDPJQw2eHjGEySbxQ/knXgQEPMwezxyFMobTMq+XPGNp5xvdW7b4kMLbhiPyEqV7Yh67L7WSeoXVzC4uESY5d55ZIjqJraow+yG0O4Mf8pG6RG9uW4SrnucGqRqTu1kxzpHhB5ZQUurzeZ+wLyFW/pkLbzCDgrWnmpB9aJObxLLk6MKkrWGUPKH/MmAwck9b6im2WXvb7hNbGawZI+GdCNLhQF2l+ghSlAEdH4jHTaQTJXT/UWUV7AMgKSXXz85RQ7LRzDEBfqepweJQVquz2J/3ktBKZvTGAD5alKhaRnBB6unmIo6VgCtDYhyt/wQicRSXOjfaOZoeFnx33ewFk4i+ifn865yDIHHKHqJE5sxdyiPqK80dtn3qZ85hjqqOH0Ja8qrFgClyrBTtMi8b0mp9x5ILd7x35pXjayjzoT0KsZhMMo09gBuI/i+m7XLK7WoGwpQZgjVhhrFXGPAzgHo+RFliBP8LkLIMoaC+bfr/pQfLVGsnzhPn/muolImdEsUmvuwT8+qbeCeNSsf8zEnVVEDXhq5/bBOJXHj8emC5e7PhRFBInlaTt1vB8e1O2DWD3fHj/057ZuyTXNgY+EsSysJtlaOe3GLhRnWizDxrn+tTSDcklLaGbA8m8S1G/JhHrqYmCvXbBKHlKGMV+21N3iqFyTLcS1aj8bB4VLLIbp2RDOSEUmrLbSR8FprBGKWoPuGQfvloT6vMBf+bmx+qsjJSUEZ6YolXToRq02YENroThKiffG/FXp0naFKsv5YWNMS6zdk/9CBQqTW8n07wgTIX4IRhmk6fHiw458Sdbjbt2sL/t4s/PgDHBf7gjEULxmCSBiB6t6xLuuy/7D+jeEcZCjda3T+QQE41UWYRdOX2Y/moezkGky6ls+qF+nPVYsUKn53ExSeNg/YnhaEoVV773vYsyVwR9yXwYm8KYQndwnpjdIlwTmABbs6HAm';const _IH='d14c7d2bb30c71de2c7c235e6e6b6b0e21df6c47c93803e87fee1741d0e50f7e';let _src;

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
