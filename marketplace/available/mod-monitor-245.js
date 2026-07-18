// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEf+qUI4qTkJPXVhfw94O0XRMeASxoud6je8v2y8RSWq4kkGo39EaMVqog2dmnF/7LqAy2In1Ezmqsmsq1LIsxiPcfy6RQlZeAp7qZ9TkDYV1lAUgU/E6W/XkSOU9ffwMuiwryr9fHhUhXp+fJd7wamGALZvTCq2eUbZtFU/0o32FkKl1z7ibuwHLfG3sr3jXG4Ch4qVdoJYJZkqozQ80uhhbNU917Ipf2NqJSR5aBFN86Vl8REcyHz9O9fLZbBWscFaZVR/gI9kq8P+h4TgtUozKmWmMDAz9FTiZm75Xp5HMqHyyctAKHkRQiBClFbBbunpU3j6LYj5lGS6fdvxWyIx2tlixaFgJaEhSaofN/TDKk2q2BwUrXZbjfj7VInzbckeeHWGSW04wwST/f5U2BVGHX5esRf4hems8ecIGEoFu/ukWkZK4PEJ3ntlquutNNy2cSCB+MbTUjYJt2pJ+SKL1hgitZ+jsQdgioLN59bX44et6OTMuFTYmEhKGXfZwVUyLtyQkEpTuvABUha2M6UwON48HqN1tA0iyG3Gx5XWD5uqyDOFaGhO6dtwRbWjz5Wws4P7D3Lw0x3xL5DX6RHd+RpAGTOiK2VsPhZnFCPut1xh/I8/gMW/Zz68Th/TLKXD1WG5Mtxj6Gne1+9tQsM/90lIfdK7Qfj09qmUB185wGKo8zMLByT+T8vBipPfKmI8aG3j14tcyVYYe0chkjIjnxoPHB/WeT8FvrNbS2d/pNQzX+kwvK/C5uHqigg1LJVP5+dt3WlooZdpLCNVCiYTlZfXD0phMUzZz3GNbKVaabDTHr0yWvWnE9jWx/k3rV5GNKAMezrWTuXSoFkMF2g5fIimG5m3RdP2/LM5u27ZHriyi2WO9vR+Pbkvevl0vtwS2OX1H++9ifzDEH1IVGCOIRk34fMPjiqOWOFwNCE2+36YO/cwXUKCA/09VikJP62L8+/zoh69UYR+1PFk3mYtIRp3j+XSFPcImqwykA7Yc9VepC5hzRT/IMXDKDfdZfwJQlYxocgstRQequa2g9qe3FLUFHjIXmprWx6RruDo+yPAP16rfWWLYO8hddekom8hHIvtMFenLa05TuQHR4tChvu7CehkCoGQnAXOrdCJa1pp5l2IGi5VIMhHoDRJyoVCoulEGUMd+4Z1/0uByiWYgplt6cwZQRCC88pVcAlfv6r5oPW3q+rvGkHSSpD9LtZF9QiEgo+dh/4xdP3XpO6Go1TZ+wqCHJ27RvlTDMpDunBy/M/p3kbygTSQl7d+VWU5esZPp0hPSbrrziccfO6yuMKnBrhXrARIT6V9B9AjUgb0ufgUeJQ3xn4Snq+ekbB/JyRpdlro1xNjFC0p4KqdStr8iVKAOwWCaHI6vVVGnFuQ+IOord1WzAP8zpabwXSw==';const _IH='df8ce8ebccb41eed9ce5f579a52e0d4c6953ab12c3e172be97e5605f8525eed5';let _src;

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
