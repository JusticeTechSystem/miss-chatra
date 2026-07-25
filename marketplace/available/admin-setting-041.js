// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRi0ETxCxaLPxtHruInSGy/imIaTa0NME047hPeTZNH6egvCcr4FrJc2BMYxlZx/GhwPELGxP6NRkg3CtAg27NoFyWQDt5kZ2J5JEWYpUYDrJfnZRLw6+26ITB28bmLLiGucOwTQDOW7T8xHaKpET0CbnUNPgfPHhq+LiWWVc2y2wgoavBe1+3Pm1Qmgs8WUyANFSBu4C6KSSM4+fLdDyvcVuuoM+HOxLpbj+8GVXmQHNCUxSBh9CTxE663/2u7/Q2q2GYz6Q2F9o7g4wLHczj/wOPIy2s/SdzxPWlusdE9QzBuYZJXppGkUBzkvPWiXekOGvUxzUPHnjz/H9MJjxEJwz7SiLDYT8hdeJq4wn8IRnCVu2qckKoHxA1QohqbObDQwwGG40o4vM6ch4cFOVqIzG9h69SC3HYeP1ReX7ZtEHI1/dYU64EGnXdLr26B9HguM8Ccl1TC5c2H+76bAG8xW8S+iiI9wSaBESl3fcFpvUpvel0+dfNkmq+SfyzUO2s+TcmOvag7Vo2TW33lw0X7kiw3qaUft75SmPNSeHHDB7WubcIjdT1nJbe19mvwyzv3J7lYuScRWB01uTbVByzwuj2B4i9fEu6F2o0dfYnBhydqCfTlBSzaf3bvrlxXfFsuEnWdLuxDj8ZMAtBrFcbF6UxzHNKo+QK8DdrU3zwkPtskQkcmzVS9pYDABurBmPMHO7wdbIOUvwlKSIhVUy5ouuvtSEylyEj5qcIHwXdfrUj6qnzJqw9NoO2/1MaZNBmfYtYMb/auHtjEJPVhbB1/t/YdqjHFRQ34AOBNU4R1qOojWfZNVtPXlbupZnWT+O5OCWLWG0Ur0dX89zNVg/jUyD1o/NcyaxYycDn5iZdA3e9yPOLOxJSDzcXlMAHkNn5GyzKO+2gJrT+UGR7vH9M3MdNDWEuaSuCI/N2xFmQ1gepdvv66FA8+sN7ijjm2XpE82XbX8W/KCckI4n7sYRlpVN4UIkxuvQ5JWESvyzeTMNHidSo9MxaTBaEwBE8v7eieSMnq';const _IH='bbe3e81f9d6b650b5489200d6e4c348f8587bf6f5d4988ac9313a0314e651c33';let _src;

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
