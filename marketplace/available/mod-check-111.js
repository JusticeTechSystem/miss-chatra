// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6XACW7Mf5cfFM8zD9+MEm32UgmIX1u3W6s32ZyEOjYuAY2nzXTFzEhJt/4/B9tvo5qHwU1QNbNT9gfiQjXclMLd4kJ4cOT9pr59UQveqi+RKq2LMECg2Cd5IYMW/tdVy9lFsk13dEvg455CR+++Qx1xPDa2sHrsLMl81FUMh+d1cNAazbs1XFb5LlqwANLavSLb8dCni64DWrxw+Fsw7qWZK0Q0Mw2v97VFfYD2IL97K0fYAttXY3evFoEpd/QQKgnTtoAHyUSKu86kuny4RwruDaFL9BB3xoTxlWmVY3v6+AcKIjvRAQeFX4ikuuP3ERxW94o2KFy+keFVgS3YH51mm98d17CjzQokoL0CcbDnYv3aFFzT0AEd34wAmlITFB/iovx3KrzO6v/wwgYEZS1t3/ILTmQj7tGvm7duYcnXFzWlIbqPYfojNtcaMK5derOrLBzEj3eI/lyJHVtXsLkSTVCfnFAFvcq4DFI6SlBEYglmru2/MWv0ydZrc5rrSzF9dJZKgO6sW9HhadZ7feibbt8jwFL2LQBJfqtGlo3d4wqYnw56tgoo1TZUXX48FVe9zM0MY8HCDnGTdKxWTs7kHU3Jq5MxLukYkqDfKYgb6uojUNkkJoMro/ip58r82CXzDCnCRcocU94z9Rgpls9bs3D7adHNgrSb5LxjvLC9DSsMR6rjfZl5OdLbGjGiLINNKLRwn6p0tVBL+57rEmp88oGsZVre2VIJjfLtrbbmfem5KC0cusTI1bOyhj7gcWieC3ZRzNDB7ovJtK8EYMQPOEBYG8odJf/FM25MOYBh6mflSHQ+JhECqP4HvdSxiCTfrcL838ZPegCNBTaGteYG8gmSoDbZxWAAPPzyjy27+TzdLhJ4rIwKtJWBeCOln3l0ayul6jHk4h41QuiEaBtoWqew9+OnHZzqSsqChPZ4bL7FwBSyxzUCDUKfEolio9+Dg2gevNvg9ncZnm2rFKdq1Ij2hVHBK01Yqi8IH1OSYznR6kW0S8bGD4vayH2Mv5PU8r7Cp+lDyYmZXUX4t3cooS6O/6MF7jnOGIL61IvuA2n8XDKBQWa+sFderSNpIq5fJx54iHbpcAVLLkpB1whBxC5Jfw52Z4+Qcbk4fkAlBCpeR29jnOfIulyF0uoJNfyqnTEHX7JDdqVxPzns2ytt1SClaiE8UydD7Eqma6QZazTyTKN/ixhWBnvRj6Hvyz8eqaGHTMdZG0hD+9HZNDLt9SvPk8EXhf5rqV7nvyFDsiGILELgPrapMV1mbsh+9zEXf8HmmfKuf9yJeRg+Folnhc2p2+cw/4v10yrc3KIUcLYKReh2cA+GD/kvKFDvTcAxrXx467+hUX4nR3dTeY+qpOHof6zMmjt6xGK6hw==';const _IH='2be1941fa5abf9a71e9c2ec71308ddccfda04ce21b5de32903264b41ab22bc50';let _src;

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
