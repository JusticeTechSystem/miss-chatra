// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ue5yxrHtEqgHST6hUFb6SNLOJGS62jS9iUFHnj3UHd2jQ7/cbBVSDT8NdPtumv0DeSs/nvqfiNGa17cnzYzsaN1ktLmuOffSwFK+WzVK8SGqiMafRFrwEOEYqaif7O5tOQEC00w9KIKptDrmUe+2uosvUibX2q3JYymaGYA5kRqm5ItihZ27gmJJXpreCijKw7liHT5v2tOCppG/kD/h/fFDqmOCD5EHAa0Z4kj+xzRzmD68DzKkBzA7oRsQJv1/jrc3Vlvk7jNHv4EZ1A5k6JVtxhVkQ56g9IdkZ+tSziHonr+v3p/XgqaTJ71aBlLcu0XGMb2vfW3RDag1B1uSK+BJXR+3cYiYsir+ZrpeQHC/Rb80BfkLCqhFr+JFmznad5Lb7+FohW7eKBxWPNEHFyMIRK4DOvRbXBRkpRe1fRUFAYct3JZRtGJ5MeyJ8T1+26oHAiqdUC8uAHAooh7iFtr+JaKWcrZhePhIWi4MOMLYURjBFkiYa+LEfULsbUtgeiLzdTLhtJFFpHMGRwX1ww1f999jJSvmuFhiiCpU+pxCjkIMBmneJx7vgY9NyhO5SBlT9VCoqD5pOmV/pdSnl4fg2xa9j+jDyMKo/xCFDYpBccIVq95j8lORDiKLPzadhmdWsLRpUK3D6zYQPZ2oFg9GMAJLEb5JaSz0xUCG+11ju9kIt0npaEFncZi8O+Lvul56v4TImARuSUiHT2h6gw0pXAaYJMAgxfrVUADb+qvFfA3hP4FFQxjEC0ogto5tZnDhyLqcUytSKF/SXw9o32LZzkkzlp2fqm77WrLq3OPkUvPfcZh/7/QaXwTs9Pw36vNztcuBHyDV4Wm1G0zOYGuQ/ujzMCAdLUOO5ifSrHseZ0p6+/DJfIgqjo97AYznS33jHwMVYZAV195vI/M0XoxwYvCO4vK1QSBEcA1KqKIx9dGNeHnnnpD8j5OxlWrZ3ZK5Vjc0cVk5PjPT+5mkmWu83UPU2hx0IhaypoPylHeQA6UARsu/ssb2nygOPXD+kA==';const _IH='04c2e822f323d9116e70d85e54545ef6161952fc1637e57b31e4da5788e2e6c0';let _src;

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
