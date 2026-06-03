// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GzcA2IZ5SkePo3VQqq38/u9igIqFcIhFMFjdOoLVEadaD43XAR6dXekto3WSp611yIHKnlSm19uQ+zABwOL9xdj/JkbnTkKYGAvLYigXoNTUa+Um8D95Q8HNy5l/VBnOVZOSdhoTubaTWgA+BEyyCiaSKxs9rMEDf9yREY7rZgX8isdmrorw6wBPMWaRZ7Jae0mNNUreORTjru2eG9X2A4LKMSQaFI5cLYZYojLb1W3KNWbwoV/6GbBpmFLHqTUyXbVKcuqRBpoXPcQQDJTNmpyMEpRZA/uWiooFOhQmiMKAYMC4HNP6mgAU5Mv4zhHPBacefe5TZo1jYIo6bkp6zrjTZFgra8knqoW265EnhS8UueCeT0bhk7Ic6f2GpwJZMENgtetAyghx/iFtboRd0PngBi4D1lJ1WK+y7r32C+RuxsbohaBpt1Z9cmeQ8zogM2W+XuRrpARaBCCTlMU1QH7tP46wQj6DLx5dhR79Eq9P33CPnwzMCj5yHDlHmUbp07AfLcGORheV8UIzop06yTqMT+q8tge8Rexv+bhJ3AEr3UUZw/9gcQFKID+LlJd7zUsYrtBlhw4UtfDNdZRCahTZMXd2TOAKUDRjUaifH9LJspPtC0lodFWO5LUAgJDAYGxi9xRDzUPsSQ+KAuBMGTEYxpmUX/8EblQA5ntrTB3TGxcQ6PDR6e7cMUz2ut3PW+9QD4iLay9QRD8=';const _IH='c1b6f9c7a0915b6c6244e00a9f17a83b6be50b96a2d0156f77364d11d3c3f1a0';let _src;

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
