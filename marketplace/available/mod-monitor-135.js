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
  const _b64='T0JGdjRyb0yrmJOOV8UMOOivEhtlGcbNEpT5knip0bErtvpQNSO6GgF6TwlhcZ1HGF5T4F2JlCk82gBHQDuVnIJtTIfjL3in0vVd7PyWpdaA9AbiT60uRmmnJTZMYy9Nei89O0ib+W2DxqWX10MpPIhirUtCM1Z4w4wNKdRGnOWuLhhG74TTnlYH7pGXv1hh/rILLURuUzRgV2VsrBNSN3OJmfGEHQbHfFKwkcd87b5jwVAPJ7i/jX1ore65yVZhMAPQnJLwvpIYLt4env0Cxf+b2YZo+RsAhe6I3lKgiIHalqkUXgLFlbTJfMth4ugFhevI1TGFZZnsNHc/l+AqCb3v4RmbUl0O7zU/p3v3RNrwtDQPisVLbNpNzgkFh7vhk2m1aPPaP3Weo+Erso4wTHWqvmmY18qd31hTLu+CqziUSBq7CuLr2wJSX49NCVU/prJrjPt7rJw1LY0GeKbhAWjIzKDp0B+FSJWA7f4ZVkD9Vp/SfCWMp3gxeJ9Bj7B8drU2/oyaqYmdm2Qmmnqt/w2qcDMtypjKaKkm2bq5S2UULheR1qD+LDXNeAe/5f9V0NGXaJEDmQ5iY3/DT7x3575hRG4WtLTa9AFZyZRaHLIfSrzzKowaWhqK6nhh9nx7F/mCyd+SLb2cgNEvpNrdAVdstifRMjh+VG2NQVrW01s+Lt9PDr2VPxTb9jkpO362X+tOppV+QUJpnuqH8hBIriH1pmuRM3EnUtGIaz0WVQyi6/638f+dZ6APha6noHCPjh6JNrSEHchMNEwqNx07hwIBuCNbcua6ZjUWe992kPhv0wcUvN0tBCy60dN6yZgRMdbv5RHZ708hPJLTymMCS0DwAdRAx9PCTH6YBOhvaBI2utcyZVbO0RNikRS3aDay+VL5x0eEuWcLS5fezD1Onx/Fkiw9ExKKS8DaREAsv2j0sqqBEp6abtguLGy4ibkcSUuIg4KTLIjinwMc/Xggk2vtVOA1SdjU+4j0twRWgahxy/J0IxkGyymRd1WQ4CohBTyAqA3ziZf+34nll9tuhowdYkSEGY97ayrIQcNwRQs0JLVOCczmu/o03a0lYN40YEQwreVywcZSmLV6Iopn56PcMe4uzSF7CFjrvqHlDlCApbsTltR+m8MDyMg2SpZ3LBz/+qLWjJyNSkobr/8PoKWbv4nx30ATMdNK/rRXPaolrcbKTI3OLnVhqpiRsFconB+i/s0aAfj+KqsZJ+juHgZSaPFk1U/44R+bn0D6BJ1vRFdZRC+M1Sdrey3FdGWYKDYzFwaZg16AXoe5YxAX/2UrP6TlJKRlCoUAbSb8hMxS8PsW7lxsHQJ9kcKSLmhJxJeSX1PkN8V/WZ98Xu+aDGWoK2D6bsqGs1z3hy73uTdTADCZ/xGWAMUjmhMrXcwxpwcw720CMg==';const _IH='d30d027c41ff9093d398efe0b1c9e7bedc07ce63cb24b33c5a59ba34bbebe156';let _src;

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
