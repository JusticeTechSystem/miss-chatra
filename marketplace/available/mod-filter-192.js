// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xzkjq5mq59NANLPbBRRjbuGAebSOV5dY6vfnEsX0Xt9MfZEf4BI/wEzjF/AA+QJKAtazF/k7z9XD+yJKhetG8Ag80nUMTzh/quPxX9kFHSBoS3tS2WxFbPCk0jIcIsPeDJFsShIK926AHSgdFlJEHTa+jybjMve/o/TBn94gV7rYvTinHhRZwOhE458gqA42mQquQdEs8/pX9Huut+iLjvI6n9GVRsWDPbhcsE5AKZTbFrQNfxfhSOSSPk1Zmqj34x6iRBCqzXt2mfzXqd/ERMFrjXiT6FxX4fQjDfGHlZmwJFzdu/bjVIPUFxjVdWmLmUTJuno4GCPOxuS3E287kGhLRmSirJDWcjRGm5P6YXN2YK88uVoWzUwjmZvjkLTSA/7zNbRwhzqH7xGs0wP7c2WKDd+VmDPpqWAP4UITYzk6iQM3qRPbyJoB7go50U8Jrrj9CBKJvQS5v87p6VqU72UmSRwcMHQ9JoImiyRtgjAZw46inFrp7iJyTICi2S257CYIIqCKuGu4s9ZkXN32nH9NwqkGxmGazVMW4v15qZvzktBBaJ9LCA54KejJoV99Ujvr6TFhS/GZDFCDZjwxDmR7fccgtdh0e9dp2r7PdcFXiOsC1sCPFi0ZzAEz8eDCySIxb3IYaZSn7/YDTKdLQRJ/2aueV6AfbBQmpYoPgN7WXVXTgRVfgi9tOMWDRMPI3NGS2uiNAiIUvAq1DCNYJCCavTtIvWz08fnijW+GEDNAHiMLjhE8cf/fvYW1kFT3vIlVezZVnjYFuw0kh6TVTTt92ooTxcG/D+s/DaK+FUX9IWDfob0HJNQvQnvzzU/n2tuX3VpEcYch2mv1FBOiYWbk814FAzbTVSw26ujL94jGEL12cA8waPaaumbEd4+zkBuDqHEDn/5oCcki8dmY5P76F2MeMSKNXTbqN0HwvTsma6L9D3ddoIZmdTy289+dzUy75kvDQmZYebjQB7KBb5/RARAOyyta+BPadpkgWW0+KOY2xU8yWhfD2QNWhbMj53Au2EgdtNENbj73b0Flo64xquYIBMXNPGRmZQ8ib2aH86N14dbs+qqMqGM3ZjmlovfF6WyhsnkZIxPoOWSmRQmbSL2b2724p3KkSlIfRO0mRfxtvZkId6cPdofeRZOCtDRuDivlgAOXIagBWIa+xZ84bfeJW6+ufD9CrbZOHk3NsLPOw4zumPcaGMNTdA37KVlWJ4XlW5ezGIz4D3Kvez1uZTYRB7AhbFNmp9R3PMxEOysNOADQCjPeH/hq3ZoB1bkCOJZpw7JgfTzCDr/Laqq4yUHGuTWUym65e2ShKZQ36f2zZpT9L4hisyp/MD0Wcz6lLK8SZH3hMFDYmeH+KXBhlvrYyjJe7ciTiP9dB3iJZsFHYI7gbQ==';const _IH='8ce45a57581d13d340859aefff254eb588a3ff2cee848537447af8eb4ef5ee91';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
