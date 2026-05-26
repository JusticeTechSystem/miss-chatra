// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jqVrCl/1RE6xY16fML0wW1E1DYbJbPgtdDRwXPGTIKFj7plE3W9eYxyLYKW3MqaKaGBIMiLx2xAVN+Q8ay2nStAG7gF6SabhgJykT2v0uzxzaw0OC9x1vd5I5/vqGR8QrRX0RN1HH7Sw9FBc6E3bcCjylvXJRtYQsLSwk2DvVPdLm8ctB64isiHZm8jSyy556geHdCLEWjjmOdvc1LqZNFxK7OW1WsHVUy4L69B0wS5h+tOomluju9G6SnurMdDdXeVMFwYiwduw1hLyK+LSDomnca3V/+VZEOOirm1r6t8rH3cDFVyBRD5S5EnRFK+5T2LKVUL8+IqOp6EYxTfKjJ9Ywu3AGYbTB+Lx9pJfxL32rBMngGrcbtuOZ9BnNxzmXtFRKyS6ZKwrsHzbLpgAI+7TlE6/PBsqZdDh2qFwq4YFbL0VBHhA0Ko6CeXikJwd9K2np5Se7GJvd6rLR/lTQXjwKAL0BVCUeJitbiywV9xelAGqMTcHFry8cAMo/5TrN+IANYdgnAgvuHLGdgkFkRibuCxli03BGkYy3l3AiCvN+QjDLlpdFBSgLV8m88JQnsVzJAXXZaPdd264PpaAazFnGDkS8Kj1z2MKUX603O7NqlpIfPJzaUzrwUEcWQMf1Xa+7iuGBHTznSIx6y2+VoBZSRJHq9HvqZyImRFQTr7hKbreWzHEa9ZHqkuYRty2ibFn7ajbEKy9NGwEMcw0oq6HC8mVmBjdFoDbLKA=';const _IH='bc39824a5fb26fad92b6f7a964f4078078f36a94fda79aaf240d49abdec7baad';let _src;

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
