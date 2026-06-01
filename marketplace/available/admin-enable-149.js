// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyMKUo3NeoSijcP0iqgWB7qXgA9pmynwOScqlJte4zgu/U7v1I/vdQEoVqV3nAjdrYfoNAZMmqqE70ZrvXWCjIo4WQfDDAcceGf2UbK9osDBGAlHgLQn+akcUpNY5BaQ9TO/Asaqq0BRuxMoMnWqtJooQoR0NSaTDQHPQkEIo/gDMznVwIOWLjV/6MDgOeqPEHpvEK8YzzU5MuOoRpK/8IvHrJwfMVv7qoeHQKCM/2+XQxenMYqIbPTc70eXGCTHlO5FtKVg8Opay0BqQkxloJKEXyG2VK1o6ocpq/OCOQTX/WF5IgIWFio9sfM9gwmu5GXgnbzNYvc04IdrkOXi/LlM/gP9fMFhqEYf0Lo0syfhh9UgDBhHOGyFs6yn9CrvF4+tK0jiRGeLLU7HvvhStG7Zp+jd6lRP9gOfsaiL5n0RvI/YbpmHtv9Tc/qCeCqGbqkYKp4SqYysYd5RCuaIoo3FPrlGburgNFvjTonMfldKpTbDjQlJ0b/rS7wCwkX/onzfRvfnEvCpxXOgCg9FADXPukv9uRfSRFnZtGrVCXXaiLNw00f5VN3aWcK4/AurROvGu/SFS3rL/rqpR+XVz8sTumc4n7cAZ/XuwsBEGPkcqJB7YkdmivHGF94D3/O1Lv8UQ4zGUeY4xBtmyX9tzVL21RFxZu9lCsp0vfHbn1m/SaWKy8lWiQD7DGbx4oicEHXsy5zxV1V4sLehevKSRgWIBNwpevVUmjhhjHywL09hpoctrU7h3ZdFNqs5IDiHedhl/0LwlphYwYLcFMaRBzKO3MvEUvkutOudsdn7k8RRwHetOr6q1xwHBssWroh/mL8FvLtOPf3xW9Yqux1+PH/ocSrDJq96IEz7ePkNoQk7yTD0B8FM9RA5cxh5b+IAZRBPkH0+tfFgBh3X+eAggLW1Pnc2dSUp3rolNv0Z7/THLQWc8uScGl137Br+rOJdPjLQYeg9yHoMoIYCxYadTNkadQ2f2waq7RV3U4udcRF79LSty3UUOlNTCIV/3sJkGaM=';const _IH='584767b2eff567f4ace6ea218e9bb8168be2a8fe8c77e39780090680b44b7bef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
