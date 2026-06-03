// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YYq+5V6oi9pCzkWY5/sabkhSbqj0l7AOZ2glrIAOYV32jwBXL+ciCfg1TG7McQQK58KohdqztrO3JlMLYVGIDsG3+c4fXREURgPljdFQl0/AJc7C8B6RvTLxHgpwtl09tjXX06cSIWAUpgOrUxQlMIXIwhpO4aSFjxOh0nfoQ6qrcmoLD+VrAq9b8NSj17D2h0rfwByscOdLi2LTSY8UVD2zBZI+j4fjBRShZt4FEPSFJNHXgrTJwAN4KewNm9GMVZ+GwCWFXwFnezAVSp86kurUB5jWMMLWUQigYWr5VgCe4S0hzdZmBaYGvhs5P9/Ciec/eF6JDst1s3lbQeSX2M7zJiw2BcPyx5DVztLNXhno7mglukMijWvNhByr2AQKLhQ5kPCDwG79h8uczoUzHJMMMpr/8rngsn+5rHUnCPeiXNg6WsKWbTQf6V0KjUifWF+EpcIAH1V7oFNUyg6BIAiL8c+zzzfo9ggYg6CdLPVPjnszMhqeGCVJYXEdBNbPjKlAGOut9WtNx3R3zGGW2TWmFyh84Qcg4BC264X003IVi2rvJ9qIp8vuw2GLbk82RT4v7afrcP9UVDoXgvk4rh98XACjir+gCj865HoUHkli37pdi7phpI9t15VvRCyERO1YEl1/Tp1HrHS3Dqls4YpD9kSAEBNjmBs5Q8L/ApWSSZZXjmclChcbXR0MxX5yzjNFxzyd3Y1U3eYk+jYFBi6nV2qH/7ALdg==';const _IH='d95dba91960419ca861e17ce32b43ed81e1605a70282b19c51daf71268a6a82c';let _src;

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
