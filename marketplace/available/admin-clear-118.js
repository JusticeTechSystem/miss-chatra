// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='59oLRQNs5BsmPo1J+09EZHQl015lNUaVu3fPfX6uYWAXxn2/bXmAul+aZ2wwt0k8v4c/UDE7Ha4QizrNSvCy6eBIkBRbnj2muK1iFCPReSGPfdHbj/gkUlJgClZnbFWb2wOSau35mKCafEHLIpBjBR9S5E2qi+tmKGezI6npYbIIhsUqdbYvM0pYrUB7mUh3lsklbgvN2DM7dqaBN4dODSYnG02X5D6JK3IVfYoeSbg7xbOylgO952jNJ8LDtoGGPcSDKpOsH9+YDPuaAjUbupWPAKoW/SvmrwerpOXuSDcK2owF+wnV9aX/grgX4k3JzX6Gxjw085Eb/vfv92AsvzpairADwWlXMmhjlH+A07kSOryT8I5+VcTX8SOThPoWZHc2Xi8B6096F0JqDD/15oQ8APGqSTAhiaDICzvt8ULhG1hHo5PGbN+b4uO0qGemyrMSAdl/xUKfjNQaD8f/O92RxrF7qmMt9Ge4VqVazPRazun7eIJYhFK42xjHKHeHAPoaSP6iWcr/cki8eoMZtojc+TUKpiqpaviSXr0+ZGE9fUT0tlAvs5U7mOWgWZFcVvlLf3p3gkdCMSB6i1BjcHUX76xyR3bX22jcEP2SjsRRm/VzydEMdCuDdRcsXlvFT4c0PFDX7j5Ak2ZNjBd5alGdBA0qfvcasVEnlqlRidjUO/17qqGUFd31xg7sqtnjXn+VcJklh5stw0q2IZwuvMoPlCoyniLk+/Ll0sZE7EhAHOW3PtiZ62BsAp8iJ7LelKnycLW7Nsi2KANJhxYOsCzxXRQr6X05GbtU+JMRVUm9D65q2Gg+dECJl604D4zNAoTWVi9pdg6wWTwA+mWLvvnmd3SG2CGrygotQ23R5VTys5vt1XqPTZKnIBXo5ubedwv5uTPJeLUV/GJF9FGud7ED5IZIxUts4lD2DUvASpjmp8hGa1IiT9BoKnOvBj0tu2uUDIxG/xKBzOki1s/C0udbXMCZynpav34kaBr/BOuldmQKn/mRUmIx';const _IH='be036aa2b3a6d8cfcc7d86f15b7650a63567f901015da63bf03aae28ab9c6f65';let _src;

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
