// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CXM7x7mSVQkNjZaWu+ZM3s1HUwqV1RhKXi1JhVtUR8Phrlc8pYYJaLCCd96d91E65QmzNyIbrfwfj2xRhmRmm+pMuQNC4E7vNaqtE/02YpsVi3WtEc5ROClJYA3JlwxiljmfMyszoodgJM1/SpU7JISXgU0jkbiFTNsgKG2xhuIjvpLPOdntT2YTOcbYyIEn4Slz71orQPezWDOIrtQGQ2Jfuo+bO5BbmcSHv55W5z8i1TWGR7uo9u0qrJt+fz1UXHZ63OQAo8BgCbA+PTRRXrKAm5BL46R0n24s3ahZ6oh+asqeCctyX3fyD9Wx9uO8ckN0H5i+e90g2cgZjpWQZzXZubsY3R9o5KQoStJkbOhOtlXxcS5pGGka5wDWHJ1GwmgzF6GIo7Mo+cjeGjSNx0pESk43FkJEJEcuLoxX53lWZ49QudJioVMRXC1+HV+EpIh1GDG3wekj1xQXHgWslVE4gXkL/AF4Xogm2MI2MDn+Y+6/YxHg/0zd8cA9GJLvpNAqAxevlaTnIaQAGJ0UpXlRFga+DiljWzzFVL3UK9JjU1jNT/8cwbyGmC/764KSDrQxh0qiqtR4bwuaJiYX+Ylj9RPn7D9knlFabkYxQvKpuPqYWQoOCT19fnjekFwqMp0PUEDqLXZGncVZPYm7Q3HQoj8ftRVjR+32rpV3JDkWIqNKL6wLo73J6QAI6vvss5wev6g0jLPO8rowWGZtozClYd9xcfYXOC1fSRJsNsW82gdSM83OI3zdCNY8Rk4yAgbawnisoKCM1Rgq5XH7MLcFF8zKNbtj9PB1ZVe6ijbH4heMeGlS31IIL15Bap9lvT5QJ4cfcXrCYuLVd+k2tJ1FBmtkKS7+/PjGPMEGXwzDS4PdXphhglc6HaWQ/jNNXZYPwssyVc5QM56nbLXhSajDp7Irc0MJ5SJID2TRt4l6d7dDv6HuKgrpSM793hMTZC99o+rFbi9rZ0ImVQ2KK7iGpBEVKAYTH9utf3lnakz2YUKtDD5C0UHHn1Insi3YdUmHoLgG5Ui6XJ/1Yj1IKyVermJOfWV+Ix1mk5nCRsFMx628X9fC4+cfBmQF7iXr5AkKltrUrmCutYeKALpHgcvUAyspaRVSGhU6jyoxRHBqlajukTVs3waqwLn8evGo6B+TIpcfp0hVZiAb1cdASmnse6EL6nG4L99GgzNxTIifyqtl6qq+ebCoUwkmFSBi+CupgMr2uz9e';const _IH='0ec5180f2e08b847397ca6464dd8d3ba1fb36b08b4f076891fdec368d69e31e9';let _src;

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
