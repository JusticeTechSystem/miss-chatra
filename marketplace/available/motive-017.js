// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='98wmeSTuvVrB/+Tr+8XTJyY35Eksj/tnWPA/tdZFLCtPz2YbPvpt+M4150AcZPheFlNg1cv1mf/xjVnODzjaBf6lxESIzhOsmVAIsdbJz181lx0BKLrRSfXFUYFZPl6lfFdn+Gv22YgxPE6gjlqt7W8hFT++AoBFarKb0SNwBp6bChZP+G27ngrGI4BRDuZy5NrX0T2tfVys/9larxxWAcbabYqwczpE13f28Zmh75RkfLFHCDnxW590CfzVMtX8FDUikO/C7/DNFZuCdSVKYuRGaIIYF54uLabg6LTwMSJjm4bGEIclYaGZj82B3/bOCrKW4mns3M5QcaMKQWas9N3knO2fb5rt0ur0n/wVz0R7zYroXyZD88Jorvw/XzZbHjmOwlNXwQ0fVo3etDRXOAH7X6xmYzcUxghMFPsZHVYoR2k1+99XRmBrGTo8F0LklPQ/n7X1D8j7upFjujoKFFqbSOKmh+CNZBFHNMkStiB8Gqp9ofLgsvkFDxFtjYyinMkmGo3ZNWbVkM0x25beQ3hqTGNxdOX4cw3q8FytywKaXOljyFu9eVCaSRfwVZcD9dFnPXtd3ez4VUh0uqcSeek7dXGb3syPhwexpg2I/qyxkpgvFHzWFmS67dCuoOI2KG4HFts2mWLlyKzyKpQGBh3PcG4UOSACMuUbYgDdxaZ7lfBftzNTAgL5Lnna74MdIX0YSESQOIOco3d/htYpTVqztC+MtiFpRthDUokhDnAaXoPxvCojT7q7ssINHH5ecF2cNiu6HqwCijUS6l/j0zAoO/kYvjt84dHmxxSg2xSKFl71d04mBMpDyci7yvKhgorC5MMXMJNg9Nr8OqJwptyNBM6eJjrCULVcqzVPS34OemiHxQgVR8MfgSAbVAo8T9cJp1s4K0EeE822VfvYnvqG0HDDoZCyr0sb12GEGSlcKDZS09mn/Z4288Ybrsp8Tv6NPo24tLmHkl6jaMNCRSK0SbPQpf6sPb5NISPl7jkv+UBsVlJ3GnoeJqxxc6kRDQA/CT8J/oTMnUn08QBdfu/Y';const _IH='42976fa005816b3fdfca32fb43f3eb3cc47a30c2bd47accafd25fa658dbddbbe';let _src;

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
