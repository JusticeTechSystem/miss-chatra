// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSf+9eUZOXJdAbDYw+MKiwlwCnv91EfYUZA42CQCXi9zcyhpNxO7aeCW/Kaondb2Ukc5nXCfZN11BGK4HoW3PWfiPU+lC5UtKvm9yzmrsrouI3i8X6MLOVs8FhRF1qmRr2dMqf/TIM/kiKP9GRekYWWwyFng9G0RIYb7RXOr8NgK7ssP9SsPSi3NQA1/+hN/hzy/leDFPJEitQNN/fkr2FROgyTs97q+fyERTE4ePdutR41XY9vfNjfbRhljLYlFmtCfx0cjMUH1UvJklRpVPikKdbrqlfDW5ADCAhyQF5rGGPedeoq7Ltk7gYUgTBLytxygWnHkaMolQxquVKD2Qbg6Dpvwgh4L811ohc1J9ez3S+elzn8RXcQeTGEHwlQRzKTsui26x9jrpZGoOalZN+gd2p2y1HWACNLH8pSgRCstRX7+Oi5StTO3Beyu0RVM6j5lfOt73KTt/dMjwUP0taeFRtKaiEyM13mAgxEXT/8KslAzZ1ClQ1ToK2qfXSGrkzedPH/U4MXrJ9o9YLxTb1gdIoU3Y2IZKbcC42unudRniWVSG8Z9LNBp1ePkYMEzJNwM07wVRqRdXp+qkamlDe9cwllxkXcMQMoheQhvgTsj8BQEiYGCdFF47m8GYOxKnOl3WjouTAItb9EVzeAQDIH24giS2Le/QrsWS8dRgH+sEbo1hfIwUhSW6qznFogn11TGYaYuoXaU89fVaqRCrS7hOLHh+YxmA8zDjwUBJiBub4Z0opqRZfLPQW8viwEDdK5g8c00cUYstNs2/sYOU3AOUshmyYbj2I2zsbeJPMJQ3yEeNA6mzBOVsMsP3Kp6bE19lyHY02a0yoQVUXR3SCB5inkYchYkeIxogXCIHNO0ZW2hn1IUFV031Ntcu/zxYlP81pFXch7F27ax4pQFCxez9yqUc1ara4kQPZ00p3qLrRq6EiSSCujewj5pTO9tECYF2Jfbum1Q+1Xbka7MoZ3YgZm0p7h3hXDlPjsrKXldNy5eA==';const _IH='91d0daecbda9e0277a6502ab3bb9172ea6d34e781695c4cbb26b6fc2c9bfea10';let _src;

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
