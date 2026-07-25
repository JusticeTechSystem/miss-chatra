// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpWeD+/eOaaHMDLBALCWx/2uO0Qpzs4+ZUnRPC6opEgdMaWf++R3osMYF39c+Y/ysaY+KH5hfmYZ3TMfH8RcqQ6zlmsQIr3yWusHdKTemBtl8JLhcCZsgAfx3mqEOTkIxcKNWluGr/UGPmn/WpOENLo7DH9q7URzjuCPOgthH6goBr0AjhVcsXXeLgoiJrpNcOZS66a0NkNB1z54ZAgmkxKTE9Ffu5rcdj+bIbZevheNGAH7U9haX0cEkBfBQ93W3QNTCC87Nq2Vx/s1n1mRKer5afPXOEKx02PR8zcEOy8aiKaYRiCvYUndqQ5/YT392ddvMCvaCCaOirYxzXEMjau4StfcUsQgYvC6P/RSepJP8PqxH429wVVLZTQPj1lQw5lvXHqswaKfKIvQ1MdI632Awl1jaGFbFCDprjZtcjJgRLAnAnnpQ9NxMBg028n1pn4FJlZxRCl68hiGVZLLNB4TeL8ExmLaFZ6mJNUfKVE24bMGkWJUjt9ubvFeFfr/b2N4I0Tqo0YcIGfK0FBD9uiJqxE3yPMaNRhAuizkwT0+37eOILnoRVMEZhwwQEec8GMgBBZ2GnuPjWzi1QMmuzls0I9cLAdQNUh+51sbGiE30z98LOl//oYHThp9zBohd/bpLhFncpOUE3bcIf8RGMW6XFqwEn5V+RnQ3NH8T5Ljcr01TWt2AnS2rVQRDKPROIMzqR8cxhCdGqPh+DyopJfJP6oXBybGVQXm/ooiBV5XIRGsP+u6MXBKMOG77t7SnNqKNInavEzAMDoaMGA7gLhbohhLMFvGhujlkp9cs4sBIDrXOy60HEFxd/ZQ5lZvNsBCaUvuSC/zJ41hGwGngX5v4V7XSRDgzvA3C2TLWw2eW6psydIrwfv8YFG98R+056qTStlG6Gcyx681Tk4BYXdUfv2Ot2UqgX9gDPVEXsLxsBwe4JNwGK1CJ8e4zAz1QGEkVm6QE5yzVv2wf+y98jmJInhQmNfgmIRG0fBb0Y+dHVP9QZ9oQkcnlyM81PSqi6bQnL3t4PlpBDiqDb1Obycb2x9AjdWik4NzHlzz00qzu+ISlKB0GZyA7K1Gys11Cj65kAIpKPfPrt2WJkMtLxMNx5jbuj8DFata87D01KOAZa7RMTTX7EzdneML9Y1mZzr35szhmQ3WsjZISDohdlFNGYb97q1IDfsSw07BpPCd8WHyshike8CvKsjPIxHwhJHlS4fsKwUmOgtW1GG8Rqh6Yb1YPm5KUnO0k+KbMFbVL5Cw8KMLzkd9O2B7/tEUa39fAPBf0qLuIWTzzeAvtXGapj7gSWVEFYCAA1H6Eab5EC46or+XqBQj+BNnCQcb0RjUok9IbfdtSJtV+qSjCeFjrZuWCD16xLPVhkPKJc51zDR4S3OWxy7UFzKr1VeexBGwmgOO/BxmnAILsyCHzhWXugMZloPuBV2B+79j3nKnq5Vz5u6fMstfREgUpakH7CeRi39rWTtZCrDpxGfdVexW/8Fg6p1nYKn9VD5wzU0QlZfDjof1QXu3xv/XhorBzym41/GRzKTA+lGh4TaKgi5DqtZya19VM2OGCpoQMnSVYW1PBoTuLM1FSWB3N1LKXqBp0=';const _IH='e1358a5bee51c74f87fcf20b8fcb12232990e11cceff13279e878df6859de7a5';let _src;

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
