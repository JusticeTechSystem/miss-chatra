// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gIWS4sN/L1fjdjf1wmDrXkVSKmGlROXuNlzez8c+ICDvvZQQspYxuTdj2qUHHLMfGjTz4NlNPz4qiQO/yTlywAog4nbRRLOz++EhiKqptOYAM9JiiPhmqCfKPXiVnK7NudqBf7SpZVY/7y9xk4erhlGsBfIHHrOonP9b8pp5c+R02GkFdSYdsRHg++Hg8aUtBwNIiWGHyA+62NGBgpCltNk/7MK51IjungJR273h/1bPg5KdQ8aadLLojD50C4F/4lh5MDfx4i+Vz5LBxKFT/lNewcLcJ4HCDhYraQCiI4bmadKMa8jmgojbqDyApf8hFHV/88fo6bBSrxsNTEM1yB15LT2hlFpNlJ4BUulE4Haao+zy7+p9aG/RsM4vkjXOFFyEp+ipORKmsP0JaVIiejqe9F+r80O3BbwptBn1MVMJuvTLAOBUq6Hb70/5sPaw8eVxX95YWrmFns7VCDuZe1TnGB0EJTyShZuaWiyn8vVfngVc0nqmKUwDpLQetXhDRsinjwXyyz1UkxRMJx1QJeG1mrcmaQ7ekjMXQ4oMJrM53pgdkJAtq5jyAUMMiuCZUAbd3bEej1qicuOPXM3hAVMnv2QM+1APuf1CmKQJIiOZmIuqcj3GFk1UumRUHKuXWitoTdMMEjOnfvCKINw+C3U+TSbNYDCUSQyRpNLkdqe0O0zEUCoJvEf+Lz3M6EMO2NNv+RAH7Bx3U/qxz+V8P8hxc96+tsUE3LpCxPofrsXuufntIPudG+k1x+xR7htd1GPrkmykfLGRmvOcqaoddL/aqg4g10VUGRoeMAUYK0COORiqQHD4p4W9o+Shvlo2eQTvPmwp99jGcY1pYl2Qn7l8rcM4aEM52UI5Smmhnyy/lnBXz8l/6V1FQttD5ws7Xrjl+8/N3OFyBkCL44EOHkc50OjxyXwraLFhOuqP1TeV0fHpl+rBx2PA04Smh0EEfkshGjehkWiAMd8bU7aK0A8Q1sgNJgA1XFlNBWuznv9rCsu4l4L90d0hb0VWoWadY6TnEqjDhZyPUSDwSvi0xL3wx2nJsn6OCQ2v8QnFJHcg8KeLKWk5tdbw2XNuzWQse5m4nhS/XNBLVM0PXV+OeJ3psD16Z9NjafHRL//y06SS6RUmHbiiIh/XUoNTDwLsiBmxlzgnfmBbCNzQBTR7y8vR7PYA3Qmg8znMSVIOwt9QxbgenTWyC9w8kvJ+K01tfxM3aBB5TgG6vb4r5GFB5eMik8s+e0pJ8OV1qwikpRy4Sry1rt5NvgaXNc8FShddt7ni1yRif2tFwk3jq7wJQIs5XO7qZBF5PiT57KbdyksUpAYe9cwH+MDnewMULUAODiqixz3mmzTM5nCH2RzuxwTFbUIc//Nujg==';const _IH='e312059a5150a3615e408de8413e65a15d3bab8715f33913ae09da3138b8e52e';let _src;

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
