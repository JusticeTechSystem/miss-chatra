// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmuWs3dtq4p0l1EAmWansyBPIDXklmiQ2LzpWfFJkkveW8rX+jY3UaTcaXwHiW+Y59MfAfpZGh3ldH288EEuy2bz9hCgtqD+6j+eyRGy6IiP3LrTCx6kZBC61k4S5xEAp0FfvKqnuMrLLqWny9ATc/DAPoduMwu9DRpWEkSaQ5z1mDGqOTcjdkkB7ZnvSR+PXssZPOEerXXdhBi4o3zl3RCZt1eptir7E1HRgo0q8RD997GUhk3Q3qzzuJff/VZ32VwRfQgqc6hevBAk5jrpRJE8EzNpeBYtOMYWGjIDCyU0wEnGq7vIvWaD5jjdJdAY59yVEcgKUBCP+PKAw380vAAnZsQcbFgBNNWbt2kPGSBVufczsCconXXCnfEatLjDDC4RoGxxf07bJYP4Q+SSXWMGdYbCqzos4/ipIYHaejCIsBuc6CCiQzg7Q2zaxl0jkqSJ/cU+CAWlnXVvB8rWo/1Mqq0CqdTXvsFa8BT3spWrpop8+jKiWqUQWu6X1GeQLLqOZtuVOwXgzE2KSwvLF5xA1SGRj7qfJq65kK5+h+6wUNtbaorI1TP9+fXiSEDaNHLGVt64ZiJMRi1FJXDPtui/76xcisWhr8oXVoWUksA5Q+gBrIqYQ9d9JF0fcfF0bRYA+qsL9x5wxI9n1cdiPr5+ZpPtfA/b9sOo7hFxKBO6r4WJHh1KuK/LQ1Ccw4iNowafsSorhURbgPeG1m5ivyhM65YhJJuCodBCMESEvvmlyQS6SsSO1Hzy/cU/a3oQnhCoXNWlmZyCUWT+JJqZjCsa5AV0iGBrHOI14YCJfG8T/beV1MmURb3gEzIRY/IMWi4+5ZmdC8EoRNstXIUQ3y8NUmatL7dpCruzkdM1572fT8qJRlMYEsc9qeX209wfW2Q2RMQL0XeG3pnpLEXSbuMCbhCrQkWUGrF1vJhVtxbfFzH8NQBddi/5gdl/6gktNF24NMM4+4BDSvXpvX20+zS1yZ41cWMgsqi0PbH6nItwRmX8Sq4jK0HXcPEOtgn8EAblc3QIloIRoXT68PxN5CLS5aZ5VFPVk3q5lsEjJjUiKckS+rvrqJOd+19Cc4WXG1uYirQxfQ1DqCdteZXO9RNIMc87J/hA5swbgrkpV0MSmNYIYqIP7ohVqnl25ma+zwN4118d3fY0t4M+I426VcWCjDiCQ1ieg5/x3KbWISjsS5oJdV2z2uekKzlWKQKrVtlHxEv+q8Nw==';const _IH='93c6e1c63a2a690b514afbd7f8b5fbe9d67c8659181bd75be3679a3c6396cbea';let _src;

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
