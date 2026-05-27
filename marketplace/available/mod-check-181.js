// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHrfRum4QqpretUgqwdINcnSTCN0POTtp/YESNDAlZvHnjhW8foayg/VQWupE0C7LLv2F9CBozrW4p0RH0t7579B4X/0N0gwQHwlMKbnW6189mJp2cbik5FkImemDECZkz2SBxxaevP/RDM3VVQ9fajs8XaERggPsQIQIXh8IHRr2fZaGKeBCZwPPGEsAqqYBMbCSzAbZ9Y3Vey6jS/MYZPcUPHc8Qm+bDQi/KA+no7ooF1djqW4349OKcfn7wOFSS3sXXSFRig3y2xKSQn7TLzYspn17+73nTqqNsqp/BLLUwPY1PsIED8UHCs+97mYgilz4g8MDYnqoAthJwkCm1VZuA7HndjZNh5Ad86k0JVGqJ4bN0d2r5FPbLIHoOhdpbkPb5d54KwjjgeuhaL/gG2O0KaSODieWHoKUTeysFkw5pMsIrMT6mi+qWH9txMGbUYdAaFw3aFgtTnqGomM3CWbTIEEU0q1U6fh/dsNUD/qlyMK7w+y8SaSk3i7+nbhPpabTyAdBvjcKoVXnQRw5qTSoLp+1+9B3knFZgGQEU8WL6rGo8xAb4BhUWf4Y1nZWGj4NRpkpW0zHip9T2/jHJQOjyN1i1Q4qkdMymG0J/7Adtqy0LW5rGjU4njzbGc6fnBeMrP7DKcZhbBedZ6+SOW3PrDoMEjuwRIRilvQU+z/xHtacYUWg7FX6XL8iAOs+7887OsjGZcQFrn8TsB4St1PNnHujHOBuuRQLkTTlBrbqQtQzNvZDZ3AI0S74vwQ2UKWzgzQ9auspd4faqkEB4BdjNMmrjIVJQZSzVVmfM3Ve7ElWqA4iIE7ff3aaTIDhV5Yi2NyOnTIt02T+OLQuHQvUqjNbAgLwlcrCRK18ZzUk4PmuVicOAfl+ft7PeTwS3KJE2VqsbJpNYTcTfO1QgRD69n0UZ1sR7kE0x7xxCbHkQ2+tLeuI2seTQCkuJNQ00tf6eCZeXCJ+4zzl5cBhSeTxhZyYmSIl441j417nqUYMmBpRXHVl2j3/SOodytX7iPY+EOM5Jr3yCfp+7OVeeDAua1yytEO4dSHsa7vo4SV0wWjFC7tQNjSJ0/596L8Qm/4WcHF0YWjf2oBl8a3Y3NFZbfDuyOXu/F9mhLObxgnj/RajeAn77M798Brke3YTSmRnN59kXiwPJYfzC+EgvG2DEChQ15iH+zn4VNG2LTpST5eS3aKIbM9D3/v+Sc7afKq8MdN/a6WEPpZfh3VGZVCYUVaX+e2KwkGFsCihirVZPP/Macukctv2gpd3ZrW8RU5lntqCTNULNUdvCaMXnqvyIFEezcum86+Y4fQafDjtXgAMDLeTUeJg0VQAKZAa4x6yCVvUPMz+I38DxkkJ9jA//p6YgVFjlUVDeVR';const _IH='052ea0aa3661409cd398317a97f3c5b02f1efc9dddd29cff74e5af480f702050';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
