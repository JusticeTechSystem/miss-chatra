// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ44WlzqBEhiyrtuMTX1lExSLB/Zi0DLxVoEuwUChPk9yfZgtbMQsmvcW0vczxetjQYcemTA7yye3AnXHnGEUbvc3lQ1jicl2GuC/f9r2F7ADMid7egEd9PV9ClLbKZoUn0+j0TIqeebNw38e/JeLZ8jba+ybI4QvUd/XvTn0y0MePz1TA0jfDX64KsuS6JCfmhOU/YzoON7XadrOJj/BhUChX7SNHdVU6/YKYfNUQr355wYbBAgQuFsPJA8nC7B/qw7jg/shj7iZo2wa4WT91s6mQULRyOEHVPHc6kObktzKPiB+Y5azBRGn7mt4LJEIHBVsVFPOAG1fjIrE9vRr0MFcrsFXJY2mUNRdv9LWNI/3A7UHM8+FLxZvCrAMxeqxaHxDTcnaGk1KtGHognCq4c+PwwALrV7sjp6QqyblVDDa4HV12yJrf4nhWE5ZN7shvEX0K2NAsmYIT0h8tHn2d1WA/t8TlD0fI06DhVL3lomXwMz1O9gwodR9rYpEvTZb7dJmletEfKZuMK1NWl1eYgSnqo6zsM/l0jmpEAOkBw695wQfU3WwbFeviDqIAIpb2cIz50SyylLAVWFskY77N0QfINaV0nKZskk/ooK+RM9NqHcxmdrnYhgDHUCBUNHSa9SXFzQCyZ0DIYVF41I7TIFCRb35RlcyVx61pn9dl1mMkNkinWOEAqr+afYjNIsBPP5UkPzWznluD6yU7A5/AOHwPsWO42ZOPjbrocofwHousWVNldIN';const _IH='f65dc956bcea00f2501e45d2fa1846ecca0b6e69565683f75e4436494ccf079b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
