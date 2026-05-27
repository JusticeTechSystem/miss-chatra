// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Sr2Br/ZnXKbmStfcp9zhbxbHzA2glZiUQRC/8EWHQpx7sJUdz29g54Vo8JA3rlOA292zZ1rkvNVrwjOUAFYqeo7v2Mbj/h7SxTfwDxx5GYxUL5eS2KQZ8GwIGBDlgLFT8qLSoZJCuOmZDHL1SYcdgDBwF3SgIzYhVVRnTeUW1Ge4iuV0d0Y+iNpgkjuiiz8Fhjc0D+aPeunwaZnY6qv5gYsh3s3yiMEFKLQqGS33LnxLZIjoZGpL5bQ29seLIi3IsErCMwN+cyFzGh0WBJ86rVBo8LjIeA+kk+h5wDPt2Je/D9Cm+zB3w/GZRPidZ/mO2IqEaJX5jj5QVMwTWhL/hWfjx+bJzV8voUk4H+uyp6sf4znCjxTXvwH0x/U12e4nCXIkqJ9wEjkGVLlZqGkocXuoNn0UdJ1devj+ftr3KAlrclONbiPNsQOg//yvbjhysI/e0iWvlu4jsoHW4QCaQ+uPhcDJPIMzcbSlSDqw//UtTjr6CX7kFs9C1W54q8aLF9mOfsEc8FHZGvbXP5Hl7hMcBH+BK96cyUevFTDt1nvLrlmngUeG7mDVyorKOD1hlUdDjPm//5pU5qOTuLyLqOgYz7wviw4YSfEjoMUDqhSwdo9IbQHHZVMsSQs3yNFLQ+3WfFDcsG1m4EQH+SywKwkSUvxPeCbIn6QF7qp4nwFXIJC2c8qAe/fWzcV6b1gBbytuI6M/ZSNU2hLkQdsHIPNWlJQN0ZZygIBCWwGOds5zrM=';const _IH='42c1a7ec4a7a5a38f31ce424b3d9ff08e554cc2a28773fb8eb674d234da80133';let _src;

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
