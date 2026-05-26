// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51jhaw3HDQI5vmYeInw1xFuUGvXHTmyCGw6PWK7V6uYUmC5RfRsK8/nIY6l6hWvROD+r3XbgVCXq+yBTiX94Sc+BZGfEjsKvsY3kYb10WC2J9CXYfVcZ45zh6I2KHx90MWR7Ur8DKvLqWkkKS1ddBkFjcy7qf9BBp39ZuQPCJpQFXiPzK9bSH98cz0CrzZyR7d5vw8jFqykIuyMWU15KUnyIXxYYAelZHw+Z79PyNchbSDm+LZsPapMdcVe5UR4oxcfrODTJrRMN2jfCgx2puqGaWkk4h3OVcFVSOdVnfHGEuasEqHplbQ6J6Y3uRKyP80oWdMCgBpjlCmZ0UbSbzov3+v7cT3DTpOVEmSVsQD/sukqkBPhPFB9iC4NQbl+z6PrCU5ofpDQ0ntErvcjMOpPZDjTat0hUlMc4Hosb/pvXnUh7uGns8vqA89fziiyoXcszZUnT0xMVzyyFREFNSXutSq9zFZ/9X3qnVbOpV4oaS76GsYWblT7H1muXDL7DpNvqq0eU9dC7HU3IVE92OVYgnX6NuZ5b0IsfOQij/vKHnYz4tcNp8vQiDCcHLhge4uIau7CxWIEAgNbTfn1q6ThePZCMj3OV9w4NlkqYmn72ZvZDKX7D+Zk76XthKRo8O2fz14bhRZ507HxLD4O7b8hGstqMv4F6H1foDrPU+6yxVjSucknQ5/yWp14VN8FadfK/2B9TdOJGC/Ruy3dpHczmYiuR/sfb+g==';const _IH='cc070541857aed4fd039489b6a59b766ed05a8b9017555bd0e7fc0b815cf43a3';let _src;

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
