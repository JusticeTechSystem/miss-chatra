// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/msP2fNIVZ683DNI4TewQXHiWQDJwkc5jQ0yn8N1bPdHxYf6vmVAPY69kc5EJ3ANRBJuItGEsHlwW9J8exWPqooeIzdljYZYBLPTusPiqBy+KUJF+6yibVMTY9qD9J79LLrQJu6wkaubzc+7nXpke7NnKvxUY28aT8CDjaHbNuUkdaH5rI54JuevNMLJwaSDlziYqtyK1tuWL2qaASjm4K6WWtkSYwSYq/jKdQJAPq3lyc1FevIyQ2SCRNoiDh/q3Jd3NVoE3ZjEk6is65FJgKYECbe0sUebt+NsT9NcpmPueRR9wNWsyhHAqMfin8hz3+GEIjwUYP0JIHoawnaUtfdCpj3oLcI6VsEMhYvrSCdsyT4vjWNrflTPUsOrcX7OZWo4qY0miCh1MyJxZ9wp6z1f+ye3n4bnP+7pIYesK5buH/aOqPyMIwOUj3adAvmZsyIZEFc6sykE7CAPq7BmHIG5X0L5YAGXThBHAlBDbB90hOT4ei52Rp3QtHGHSjMHKIkWzSX7jtz2iwN2aJQYd9L34fGbe9xgWYgIXUObb3iZmM8CXMS5oflFYIkL6vvlI6F37xFZ+RA05ZqKXsByAUZeaUKEolYbS6YumIw9M26SegViJPNwkVJTxEuGV5lpdw0gWEBErYp5Sixj76U5ns60Hp8DhKPpxuGnf50hmaNFZHAhDxUO9Wj9e3Un3Sikev0RI/uOuQXtrFuP5i8pdFZ64xLjzlZ0FGmvW9aHltQ7D+XkWeHET/3BsKfLRThRZMOFWtynyij5g8RxuidknMKFjVQj3Io+kIPxe8zoTXQck6/0lvadMd4kVPZJA5iEzL8nLRpze7mBFvC9lIhrReQECsA2FfaFnMQRcUht2/ZMNkCT/26UP0Jwtad2xt2E6gtQzgjx5YuhsDnZIFvVBnRplHA0XUI9qOQU1Be8bjAIx5iUl8/9B/K4ylCpsfVNRb8LrPMd2IN1ppr+kBqiYBZ6S1joQSIZocL+2R0lsMxLO9OgruReUX94qn9y6N4MeQDWcSS3oDC4CZ3sTeIXd2ivz3kWiXU6Q1CP3QYa7+c4Bc4tQaNcQVe1WlTDfUYMoNVYnaCqasW6i6Sxre1XFyP44OxQaPrs4Nwy+Af8hEATg30LZAmAdiAakY9XYmbSSnLVC0iGJhTJbKmRnHGDL12z3QQ04SWEUkp2yF2R8FmN2dHS6EJw7gaSsHeMWre7dv0bswBH25w6IEvVy4u0wd1f0vG5q2L22Y6syw8ArQEQqXratGLsFnvSZW5NQ+/r8Lpt9VxZ+mUE+hWMP1eBK2RJoCn9eT+moHqwwvBFDAmfcw36R5yPh+VPSBqWudPYP1/dISyHaNDE/l0ut51gJiIHf4i75kZd8Q==';const _IH='04e82a68c00635066120afec515cef7697c826af10130737465795b76d9931d9';let _src;

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
