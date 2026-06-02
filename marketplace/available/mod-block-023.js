// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bf0sK201ZrCHilogmFXeAF3L2TsDtvv05RFiC3Cac0M2Jh7URkSMYQPn7304WztTWAVLM35MPBloGvFrE9lkUhfOSi0sJi2WNABA2y+YDTzhSswiXRs/y3SJfZiJHy2RINd9ZxZqbaDRBZhjyX55V/bSUzupStvquaefTZFiJCZUC8GeZDFgN1jVACMowtJoTWXO9OXOOW/RiEGbYHmCnmhf/+N8G6akoffNWCGXiXjwhTZ9OaA8yBQQtYb9QPGYGd2tBawkYxocCKJn8RxIWh2fDSPyoxTmkQ2gNa27E6oPU9Lodvm18V3zbUPBZt8jCR82F9Zo7F7hP5IxvQ4tzVjFBf/zRte2hD1KUyvOQDyJeh/OqcBIVAMfPqFupA1cdlGheGPjuBBYRmc/qFPKHhsiQANqQEqVm1b8BhYxcM1aa+bZcyqcrE7cHT4ut8C8pzvfnxqR7kGjxuPWfLPWtL1P3iZWAnLiYTkhIi7oDCM24B4shfVlw/z3fWAnrTboyTFx1atraFrSTbPSZIBpbt3cfa7KMf8imdRSWOE/Dve39529T9qrcSTvYjRGbQZ+pz9ZvlDuqHbDS6eR6Q3Dh5v+tHXW8aj5BXc5E39PUsrLyNOcyNjJXPV3O7EPJjlvsXLp4CFlaVFwSxh1YRVeMkiJ/blP3CzhhozC/FiGJZ44dixDt/FKwnKswTO/hPDWnMFImnK93wGXndVaWrx7BLXq4WPph9tVfMI0rgcn1Mm5AgMmMZcNsLQlShzE4WHXzPwE4ki7Dd+9FJcUIacEEkIq+YN0Ka1X+ZyMYXAFP+GHxFrQRLFAtLunXA8gtKnH46P0PkYkcyuHRP9isYkgAgCJu85Sdz6Tzrfv5xqOh2QAlX/3EVblCByZH1QUA3wOk2RQuThO65s7fmJ7lFbe4QGXYmHGSGoB4HRYls4CTbwu6WT3LfJ7qY0MAU0ucBdX2Y/k8IRhK4nkqkRA2YkS76d7PGk0KbxeOD2AvjGWKIRoyXrdJuAZ54Zt7PKA4ERvj4uAYCuW6GPfZmk1gS6cPBsW+X1i3wGv7Wc98PG1bfo6/FVNha5MGtBoVznfljN+E1ORjJUTHORnPZ/RJTmPheEWhT4Ue4LGEng0MxTgV0iD+UpKbDUY4HqW08civ0w1fby9z+5ZGnsDAiDrr45wx+IdGUzaUaPRsgEef6Y+th7iNfcxJlhmN/u0z1fQYRhNgd3zIhowRrj4RTFNssgStH7l1kv2pmzbPb58QZLOuJv+IF8+uKd9//YNH7t+CCz/kADRUOPB7BRJHxdwgD8eATKTzg81TPUqcsqrc0tIaNQr4+FBNn3TfHWw0ZlP/c3l9JzF0ySv5x1Dr9w3Pelt8c8YegTu7K/4GA==';const _IH='6515f81aab3eca442fca0d2827d3675b5fb11b1dbdee1fa87782177c443448d6';let _src;

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
