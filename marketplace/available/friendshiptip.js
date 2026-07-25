// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRazz3q74hhC5YTkGguIcgmpigty5W4h6i41c/MCc94itqvF+CG9Wp59ETh3PkocPK9OT68e2QlI8p277xZH4jTkN+oZhcmrqsvZRXmL988RCpfJlkSoH6Fzb8vpOk4li/XoaAn4XI+UBokUa/hmybt1mrHZJLkOVSGaeAH0YpXMwMCyfK/WlCz9Jf6oMEivw+SnuL94VvcNEs+3Lej9yrkflaVlyiTTUzUmKkX1MtJu9wJHrJ07X/uA6102al+rB4vnYG3i0RF7bZV2KwNmNSNTkMd3GRJGX79ViKESLh/+Df1psSDJpFblQ8qVSjv20at0GRnmy7WQWHrNt3gAv5rTcRFJogCkIY39J8Ef+HipHyzlvfG0iuAN5qfLgSS6qR4U5maecnI1fFC5QL7ecrNTG53rljIqdrqOmPFyckF2x9CwEAH4mAL0KJwzddwQyKbVpuvDsISJEXU2YdFhJlMsP4s190gZU3vnnmjfZFx/6SQAlMHUVmHixjdjGeoJhw+9lYexIrQweWsVgL/Dr3vLbEBxQxAv1pApGS1Jv+yLOc7MjeHkwK1V+X2pJ3/0Cmgne54sWPLJrq67VEGcYgJ9/Z21zlv9nXYNCK4r5rOevHKFbc3RXM2vL9dUqnWq6CLWn2lry7rGeXXaeqTTwZnqY6o5QfEdRGblAGfcgWYHMllyjyORlxqQPAlJU+QV0AdWGEcSvCc4ApkT7LW04DzE1F0ZgTRwVkPwjfOunkVC2hJG7lSohX0GZtWYuguD9pRj8icufSTQhAYzOLeHfIOwcGfeuPKPmsVGVrFmMHzpv4yTGubUvEgH1fKJKWrZDM5KMFKaMVsk3k+tnGTEbAa5Do6ps2gEY2OOxmFCnlBI05hYSdWOo8Cq9VX/JzEkdzDa1WsBBUzmn5ZQKx/TBxr0UkgrYVAjDHtZh9yWBXKieDMKkx1RV8G888yMlXsKUHT7+MqO63NoStytlDmCsEQAMoifCCa2PNkUektqhuvFs5W98YIz0hxLgBA+fV3c1mJq9x/22oIDRtQMaeCEpU1moSrQwoiWJQRXa0jwEABmVslDt2Ftllqn2ahXmTOZarepTfuymNaX5mFucg0vvFOK7/dqv4y7UxSOIvymcxvDUbweoDA3NBhpleAil9Wj4Ncsh6njRScbA1zuEJE19ergIcLbjMrl8rOr9WdXjc6fOkZJYdgFuXQwns/+DADrNENVatG+D+ivEFeuEmaGYAn6wJZXw==';const _IH='d0b41ddda3b37324e28e737e8ef73271a80bd924ed481b1a2edd11bf48a9c061';let _src;

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
