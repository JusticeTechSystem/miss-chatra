// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1NJ0LIHRQvmuHPRu6QGv6GrCDC+a7yyXxC2o9SpWIUs+fKvxjohZDOoyseiux62puNxSiMgPo+8C0AFi2UEkgeqIl7iDOdXrHyQ07e9/wbywLU1Vrd9SUbCIZjG1hiXVWLJn3A6QTnoNR32p1gcfPWBL1qzJsq735QSDys4kwlDtt8snMvnV5g5J0C9l93w1U70Ipv7c92gzDWQQYK55wIjzklCQDYngWjcS/iotGhTWY5v/x9hWVWlcyw4+pjG8YNWiYalm6hjoAJ+Zq4+6nG0WmLByiemXDKlsWta+7J83z81JrrEIag7Rg+nN+43WblGD3lWVi5u7CowTdE8RSDmpSvYlnD/B3bTrxr2XfGPMPoi/7+lBvCaBy9eQQo8YFcaqlK1V6BXjqR3zO7OZXZSTYIOVDnuOokVrjJUfgXXI8bmQY/mVkECw3ETKMsNCqTAOf/l6PP0BM/5FDtnzdofmtQQmSTYkWe88qWmUPWynb6V1cqG2NtKyJvnwv1tb5Dm04TLW6SkFz8OFlwy8BmmoofhPPOQWAYlb+r0B84SMVch/xg/KgImQpFI4aWQ5+odd5PruxSdOYhLvH9Vu5wm2B7T5nfrPriL8+QPDxvizYy+6qAPgibFHWwl8nQSH4c6N5REwKnE69TQaFCpYbKjd/MMJaf49Lw5RWwImZYdzuDZeGA0qNzMtnAEDzvZJnbrQ5jNm8yRpEvHV8RSx0eIgKWJNvFEE/uYIM/ibiCMU/dIR5u6Dh1FDLz+H3UBg3wpXYi/eS/XYTphjvlrMdFWEzp5btlLiH1q727OCKxr4n6YX/lJYLJ/FjPLi48ZcPNau9yVpp0W956U1qDXzadZRvnLMK2eMN4uIzByfPUiQ4LmlxKA9/9J6zlh8ferccdBtXoLSFELO1GYqExemsSShMn4EBJbYkah61TJjTO817m4EOqJi05tyaAhs0i/Mk5TVhSaA5swXLg96IXwa1rg4DL+l7ZLvizWDoTPCMhMaspMZH00bCKcVo0ZGIZje5n54nJcBFDvfZDECp6nIu5EP3VUd79EhgrQK05n4JqGM9zQYKCnHLU0n/6KdFk3c3PFvNhhSt4TNWTj7tHRPIXD2uglhHfRjtnvQMeEKeNTZADKR/Uwd1L/lY3wQ4Zy4bMgmlEF8oUz8t/zfFG9rg23bEB1K0MqvZw/Pq5QxRI9lrCxtgERDnX6v8s56OgcZ7HlSvDfRaxViWoJVQh6SNSwhEuYJOZwWrf7VKp6dD3uMO8CjYOhIaiYczhLcWczl0/yv7TlkRP9vTFE4DfpwZR4xGNBk3ENDqZCQQ8yBda1TqzKw2mshCQxzzEmBI3iBWYRuI5UIUi5UEB3JUSh2eE+Z/ntuzin7mzPs=';const _IH='3ae4428b1f3e451c9d64717c760deeeeb57df42caf13fd9ec83e6de00c18d6c9';let _src;

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
