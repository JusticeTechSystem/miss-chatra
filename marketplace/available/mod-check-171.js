// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjkf3JuGadc+SabhrLl2EXAuEiznePDIgZChwsIOTP0hc9q0Stsut0f/yI+0wALL0nslM7I72c5x5YrTLJ0uajqUuAngbXAeFXGggOD3zOMrJ+OmoSFpIMIiccTmSY7gcnxj5GTbzZ7F2YAow2opRGNRARt0Iu/b9T4+iBgiGhJlNBFckvaB0Biz4da4jSo9iArASCw9zddfV8YzrMbcszU2QH/RHQH7HwRe/DLQbIE8wbpYgMxyrmtTRWvRfjWCWlfsqpNB4RfWHSQ5G5dUoKtiJP0VDqlcUeF6Nws0TEGJnYGQGaky3TeJIQvxhcqTNHkTRhZXYZah1KvWAY6FCfr7Ck7uDsZcaIL/VjzJfOTwEJjmW5utlua5FZ3ftbBHfk9h6QWuLceOB1cQjk66ubcW53FPKfnuR1/3KvYAt5FgaS3GyYBI0CDxmSb4/Cw/huW8i4HWkivMfDII2P7lYuS7CSEEVU02no6COtmjOckdJAjfnR/YYKjsNjZxEfqHpRkMg1tbAdYdObtMDh5p6EhqoSzIeNigt1nJIQCcgndfmrsl1lBkHvi0e0vNIKiMbCXctgtuPC0YIctkl1A2FUHj0XmbLLjI4VbRWgXRcDGATe+PsVJK10kGBwN+3ZiXHOCbk5aZFUAxJYBbKVdIYM4/kQv5SBVFsM2GxrCU0A7qh3GpJmOr4WjTMnzes1/DtsRSijRpABVP9XDltF3tGqTCofzjyyN/D8zdltpUQbpFhb38qy4ffsD8T4/hpGLwa3C8dFRmFj0Rv/sJD/mPt6Edhu0mh1vcodmttWs24GWO1Y1eYhHdLFMqa4a6sNHlnyr7YoHsdLOPCrygW8oWit6GK6lPNP3kZq5VmnkD0SUHPWAlYivRyKBWUPbjZ71frmOr0gEO5euYr8sGpwBlqHIqFyIwqG3TrD89bGlrq5FqIDU7S2aRrtSKXB/BSjSzs/kNOHPDSCkQCQfXZqNnThveejaftaPPmTSgkrcQ8suUhGvcsMWkbvp8qPkkqFLPQP1UMStAbrdtJcHd2igTtXqb6/Gkb//mZhjHhVDBbq2n6gXbxtoN/xqBeK6hR3G0thuWHORrSrjJ+ejdfGk5Mz6+lqohN/Cp+cA5Is6gJvgybqyjQ5BjeQoseAvU7BD3BhaDt4ClAWw9VXvinUmltndQPATU8HogUXsX6iyDdeZ4pvEt1DNn3gPOtc7HK1nmNiyP27K3lGlGpvi2cGcrKSOUZow9YD9NG8iTQhtP2wRCpNYdQPFo4OZZ4/+qAoAWEX5VDwN8wZNHJEJEZ1b4lbmiGYa3IojWpXP+WYCCeN9MsKQ/4xZLqyFaCgGSk2WlCrNhlzTOpFxaEWNdl3OOoWOSHsYXAtR1Ok/fk579o=';const _IH='c69c1652efb32a55e2f5167710c49db5572867c49ee6483e9176fcc62154cb9f';let _src;

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
