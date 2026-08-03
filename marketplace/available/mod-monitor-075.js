// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSoWhw5uoftmm9Og8ctGwnsVW1stFqV+odddoWJHgYWj9WcIAFsmFh2BRmo+yClPiDGQjB9hPapdiNm84dWsnr/6CStJIlxbyJ/le2qDkseADn6Nd1LOLqCB49ppzodzK2naJ7Xp+3E7+lm5St8hElCENZrvFQm1ghlGNsSDbzpnHqaR9t6zKZMh5QdvPs+06hpYyZ3m/K6H+ghoWFuqqg660F/m8tnsoxUh2BmHXizK/32xybDn3WwZ6qzPbggXhz94wqBpV4K9I5kVoKKxd3+Y7XxGpqHMMzpPYeetkjeamq7DCHpZtBa82hP7Vy/Eq+T2NQkPBW3RoZFsn9FCw+BMqWC5uNQfRZYSL8xkrnv5xTQGlqMZeB1fxF2MpA7IGyA5oCMfJddx5vKJzt2BxjbAwGMjDDqm+4jcXcHSqtlmCBr9ncy3mIVghCmbGsHCNwg4pN7Okk3yavHiyJMSqBbxs70BCKTAmwUpN6IxhvHyzR6VxEs4PPG8+JF03L94X1QX30HMXY8MTcbYakrroXYyOBOuvg8DTaUAgreQFlh7gvQgCyPtA0jmx7qrlNl9aj5rH+SehRpZHWGI5CBikReTzZMbl9Bc/MDJpNpZb2K+9XKYcmM5pp58ylzO4qFeDJu3Tshm10QcRDcD8sA4EsokcMrheYGNNbcMls3JSPK31GG0zfI06fzrjkqjUE0WZAOlVRHi/hMXlbFzMeOfbImAPZsl4XkmYWtMYg6m0EnV9jIECLpTJjtTdsv80JmzSiBc6X09AkdzzRfk9Yo+bD6eYm3gXGELoaqOrFFZlX4qbLnj2oMFOa8YB01f4OBq1m1GrL46so/4URxL3WurBfiiFc25qrAhX+CugX7XmDBECldXPKkqaPddT5ihUIwx4PYddF4NQW/Vm5Av56o1mWULmSRL5RQ3IeNoxzab0UeXcc9GkIGWWf0XweOnV9YA2/cdCypI2xXZUccU9RP5LAJiZvpBeb3UxXOV6NnKCqot2tmXIQKiOJkmBp1MgbsZVLu0I7ccAxDFtYzALEYOX4h8ex+HZQev6G4LUFbILtCAeEDUlRlGeYKrRk8yG5gDUUmOJvyyiSB2EK4reXnZ5Y6Z4D2Q8CssZVJu1GQ6ruW4OSp/aP2MLlqa/B3ZsrbcZiAPdJ9+TiJbt2bDeMMYrTZpsmUHyehRiNysMBzLjzSmUJjdTKw82VI0el2ki6YadH9vMHc5Jo21cfnYEAVCpt8sbIGVPORPd1gsDLduN3P5rzFR4E/clN9E8qP281p5oif33pLkGg/0wOxzoqZ0MasHXys5JFJa19W0gLxsd0mtysy81We4+0crAB31B6kVtCOaAvRRZOnfL0RMMmfAg5GZc01vsARfnHeIwh0X+0z6owl5oafDGkhyU=';const _IH='fa2f639c803cfe3594759a9cc8761ab90ff8d47b9b171c5927815bf6813b765c';let _src;

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
