// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGN6pPxvoV+rbJGE17MSTjlvvRhwJxH0wGkzN6VD0riWS0rRRSb+HkrAjlrX7Sh+fMQilsAkle9b9lZdnMlGq7/psw8Kqmv0LpkNjFht58ihOHgqotMancOSz5DfAXA+Xr52A+IPilePoc1w6qzInqCtioc0+GZliT6JAR1anXB1ktb0eJkkqV8WdqDlSr7fctwuQcrQDJDEGTkpMB9HIkHMVdqXpphbc/68JPhWExOM+vsWPPNniGlwdR9kE6s2nMKnaJSacP6iqA7V5/YVyLkvrD20xWmROr5uvbYYf2yM83pIH6g0w+KcSvUxsknYkaEhuPXc0YWLRpSktGOKfdSKVX5nKtrbAElaUoRMRhLDkOSYCirUr5OvI96GetEph0P0P4/LzUXgnIM5AtARcxawjeZdRNp82wGgdU/PDR7BUVoGtcjRzccLM/8Us6LB/U7WVozNa1aX8FA6rCPiuyuCwGPSNiyr4RauPd5ET1y6A5xo3rmTHbekbyLPsF08pM/rSHSwJE9LFCabtUBWPUFMVBV3mpv4YNntrtiIk2YAf7zBGowrmlmwQuCG8N8J16Q5a9TgZzcavnCcsBHZf+Ux0tLAJBIBr/jpxfqZyNAX+EraHmZIOwYemBwyDNhYEKlx9PUvcPXFLlD6g1VZIJDXSML6UWciF53dn76eTCwOXfh0UPlLlA6bdCLt960TiKRgIDB+YS5Vly/dJF0N9juW3RBeeMwgVr+6MDwjmNbgGbUXhS8=';const _IH='20e6325f96638088dabaaacb781a05ebe00e66f4fc32780a144cc2fc8c7a7deb';let _src;

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
