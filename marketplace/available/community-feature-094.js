// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XKmBDu9KzoMDTGJZxjW2jiRWGfZRIvuD9XUfkRJTXcz1uWUz8r53qKiZdCNxhXdlFi97af5TX9VRTDY1YZw8Vxrxx9Stjo53D7xOP3drnvRKm/PLiyCT7oEIDFW8ttwuCPDLxmWLVRXYyeHHxOnapPczGMpUI6pnjIH+KSCaoOuA5i2Hb4g/Ro8BN7W5G1HweQDqSI+MAvGNZvKhVeaEkjnkHtHMUZHnEN4q2FjWnoPSZ/1GlstioUpvF5n9oTuWDuxfK9qrukDEq2ZPIEu9HdYHZ9RAgql8Tzs2iybKN362YTME3zbT281a1qYxZ/we4UDZZBxIQKsa55A08LnNDUBFG5DdCHKlJFgeH5X3nTSwpbReSNipOUk7XdACjJx5QO8KAbW73IEDdEpz9XVfE/whD6Um9J1P5ixmtG72nghdec2sc3jDEtekN2f0hcQRe5Frfs1yn439w7sHFpGlqkPsCT39MWupS3fgbS6CwLGfS3LvBm7/fT+J9mHBj0olW8pwmah1nJso2h3YzvzEePHw18QKZpASIRX45yKDRJ7+zi5oQZfjwv9huf9/HPEy6f2xyXs8VWUVB60LnfvF5Msu/Scj8Pyjar4OpPdpjKm5j/rxGdEYnK4DftYvUy/nJ4Fa8KbV0aZCnA33ZnCd8aME87IwuvBi11TnZ5iroL9X86bzdKVCIzW37z0Jcy3xxpSBXnG3UIRieOs26Zul7ShuIjPOfOkBsWtp7vKd3Dck6A==';const _IH='f27e274ce703920732c79e8e56b23c62d4cfcb2e34e620c772030fc6e50c7d52';let _src;

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
