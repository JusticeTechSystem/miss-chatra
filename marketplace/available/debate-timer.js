// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBdQ/2qZPWmWPuBmQ+td3K/zPk9XeL+0e1kgVTcJg/eeviJTziSqHeEun7Mrn73HdqWVpyz/Hk246iDvPZQ2WGeq+ftSJl93QErXLPzvx2g9VSdsBGmzepMg6FIy2CnfiYY1KM0pfqpBG5PW+zXS3d8skFXolnmL59mMomV5bxLDwy4gaJudLVukoVOpHiEqiKd2zS+X96HNBNU1kIZbQeW5EYhopCVpFR3+c5EvpkvGBUlicYpThHQwwUMysOdViiAiw+vUUUhTSY+AMUgcQff6+rtgTjXMf8Mu3lT6XzILmJg3gKRpdEWPxQSl4qihCu/I5mad+/VZksyxqQULs/GP1YzTB0Wdl9MFXBMW9hSWtvnRSS5IG62N9ErkvCMMz5VEVYYXDElO1HJsOW0NhWPZp+GiGi9bpLKoYLJQ3qHyXsjLuk0mXlB5NxHjcG9gfMla92JK7YKoY0yR69SRAwR/7ejAZ0TbCjB3l72+t37OXsls0cZb9VLTefxwwYsxdN/FO5vXkX6XEjLK2KvCJuxPQ+JsPl/DrDZJKqKKwQ10afTt3NEXzDz+eMOtFTNr0NhXuCH0SqcYEZaNPtjFhS5Y65cw0dbVRca8VA0UkXZnx9NTpQCXF+5E5E3JR3g8UE2PvfpJq0bkTTshlJoKn2vbJT6s5ALKpvJky1+2ciRdpV+e/8du2MDg+1/2fLVMCP/C7Me1hXvAGpNC/slkr+nv2CaQzhPHH9AETZV/2/SOAp3wyo5Lb/LWNpw+BXjIQRv23Ped/nhuli+BcqAgLu30tkHmJ/wM1cLZ2ELhGbw6FcL052w9tiz9zZEgyfj9QS6A6zZKF5jV6vghXE+bhiDYHNs2Or2dcKyVb4fHw0zoXUXum9BGgPyvds2QZC/cM8OdH4FU4DRSBeT0WfARZaiMpEyw+BYVMuxenikZm3xADRLs5xieMUZsOhssc2KsZDj0Ke+0OWodIDxeqUUlZXhq6JRgPbZ1KkaxC+HSH4P+hXrWwiBufZ2H+PAidMDx5bPtz0MJXtceiZzb4xiNQFFJEz5vEJ7U95uPysTz/mlvBhkpDG1jSO6JznoRJ5a/LXq5aeVBBpgQJLMEnHTHRNLbLBquv0VlBmx/fuTby3z6s5AWFeKvrWC/osNbpJNPP/wzS5j7Z5Vk9tUU1dO0J7BjhqPWBYDWcC70Qj1tbvLfbym4jAl/28llZ6eNoPWISKCrHJhQwXedA7jxOOSFB0pQQagUHwZgkWpPq/0LZU1vSslWsP1stlloOXKmsjMlwT';const _IH='9193377cc758a32e596b2a753a894872ed3eeb5e0357b9d155c6c36f156e50b1';let _src;

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
