// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPSYX5bHuI94FLR+KhfodMZzMjB0u4UQ8ucnyEYApcfNXmcCDL1FmxeNjb8jsu6KRFmDporTZDgkXZkP9AF1VhZZOU8Yznz6sWyXYqEpzTI3knNpsW87Cf5q8Cd9t8n3FcIp5f/VD744/o4DR8DT7m7auBHbwujdouiial7CbxzCvWuaJMnUlnsGFLrcdYqivKf9BcOkgTBjrelFw0k/EW4w5lyKpn0vwQCc7v0Rfn7upzdUWvnN9oGLhMsleCvx8NsvZ/yAIHz7G1qnZfqu5/ttoVyGF3wgvYXjCJT3zhY17aAB60X7++37JEAHekvESSlY0a+S/z39HgJF8S3HU6UxqGkvwnaTuc/OI6aJHsQWvs6dEtUIGi4OMDkFPE8rRO89Yzb2HZltPFZ+ujc0yiMD0KkZGrHWjRMEciAXynTw0WcoAvjoWdhA4eGIVg58S/h7PFlPOtcO5LNV2E3o7Jqpj+Za+5ktHG3f93ENj25qrOoSQsHoCS4vbDqDzdbMivjy0x3vo6YT+Ea0kE8gxJJ9oCUogNtzwuj7XBx3E6z7vA/dba+R6nQDpW6bBhiximKL0olp0Fm2Q6AUEAlmI6n98jMMoTjg1KEMe7hBUr87PJMGuSFZ954yzuMYO6RA9SocSRry+fZPQ0Yy/D5I1RvqMwoKzZCcXYEku1honctQiFoAVjtHkfBt+hL2guWR8f51ZHmKttr9W4yKWQwtjASfKoyklvz25n0FParcj+KWsKJ7Ted7/J9D0tYeFw/YhTbb85I38j7n015RzOq8Cim9fspNH5C7hqArkDEQ3v9D3jjudm/qVf52v1kDjAakMoOiEcV3xgqvZpWDEgta98JlJKofCjRRLGMfVWvQRNl0KPjznZv78FOnDHLMt7n8JrYzp0xU3To2kn/sfRQz4l73G4UR9w7j9pTWBI3Am8b2nGGCBDz8KaQOU6olmxVxgcencTlgujLbFjgJVhZUrnpFZFaZOVzFy6YqlBUmR0AZbqX0bhM42YWST0dsUzGRoEUCJ7QnqoqqkabQbQ4mTgFn6+8Gb4Z1lmF+bmE0lkHI0X2OUrdDBgt928/1mUqftSLDpoKVAH807gYw5IdkfkxLGTuHO13zoJ6aQ/Ln6eCOq/DVPhNM/j7m9w8OCl6ZQvb5rDOdfB0biYw+bYXfDeQw/GDnDzPhUVti388c2L5OMdBQbeM7btiY9K6YB4FtVNLLLDW1lqbIZ+usk+5uCxL1D0MLL1z5Q41IIDJd2BTNrP2eH24E2q39MuideC1C8ReSHVQMjhi52JtXUA3bJeIzL9wpQsydchrcxd1EUXQzFBbSzVXOAVwwXamd/PbJ7bxeumiTujooBa';const _IH='4813706bea4b5dbc80d09a163efaad35f9dfbfd91f9b32362e8903244c5912c5';let _src;

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
