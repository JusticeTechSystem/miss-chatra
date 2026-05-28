// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yQMJePIxqOZWxhjfx9axZlR/+42+7/fbJoRtEbmVREVypFyd+N1Jb7VQS8oMa0WM3m3/3GBnpL6w5VD1DGT52eHUPutJuvvzrGP2l/8yD2gDgdRxKR3AHaDdbNeLwW4AU5TIh5N039bRPLrmQq5x3oMj6znuvaVS9vFxQlAXzD3zA4FQ/rPSdfboCY+s/Pnmg60f8c2PjCmTe9EtSvH1P6KVjZ8uIoh8KU6bWNwp6ghpPtisuep9CrnobKLefAaH+k5XgbOvzVt6npkNLOu1MivinVADikhsObWmIXT7n1XmO3Bsn5F4Baw3vXLS/AoCJToA5eyCE39ITPNoqmdmMVMkTo7itfjy9ljRXqZaAbScg1vDh2rfncsTl+gG2leJcGg1Y22+Q0VwaN7SdGzbfS/rzyou+4EfRKLDNifjqf0EZ2kBlf80uP7WpNtXLfCh8EI/vdhmmYBOXptA6+OPRMYwkOsBqV/Co4nUpZuACegg2Ha4BPSNsq1uPpMOknPvORd7rgmmc9MdRC3M6dlkHqeRX16s+YeMiLDkCC+wV+l1nrHRcqlpdf8+ky2OLZtNBtCtYT62YuKI/+V4trwcs53XB1QJNEL0ZsXAwGjnRX0VF/wUcXiGkaBKS84IeGAxzSiIHjyAi40GQqWak1ZfTFg+GhEzWufEIBMMuL6db4gJPPZQ45sNGcZRjXYBhnHk6MfiGzmhyeHT2UYUJpnpZ8oHTeURyCtvHnqV9Im3RP6aIiSsCnDu6J2InY8xL5vmd/cb5xjxqALiXYgE4mtipsEgItLNWpyuj+hvTco0jXaR0XhobzD2kwA2bWOX67caIPEHqazsu6WNQ6f+MPcp6dGNmHcA96Jm69TsmvgLlBBPXCcJlEsaB9H/x2t/ZC2uFiUhS0+stH5wUgL/QE1qxyAG4UuX5iVs79ObCw8FS1gn/N5D3/HeYfWRtxn3YK1aZjuXO2JTRrsLNuYwe4kKt4Okq6VYNPdi6LxcFNVCW3kmGWn1to5IbhSzArYeAEgeWFspMMBYjVO3fPEB5mygLjggbzZ5fZuq+9uml6EhfSpAiolD6+88CO7G4w3gbaQS2q5qF2vVLg7Zao2OaZHAWAUAPjtZkKBpIA5Ce+3NanQ/qBDbAKYE9DL6EUYWidprR2aDXkrWa3EIZrTMQe8eOoPr8hTbo5K3Vs0Ug4T1V695ZpJw6CmxndJ/K7SrXY2aLd46GVR+f5ZU1+PUfq3Y/Whf+jDi2aHGWEqFp6V9Wpc8L5v2sa4EL3J+b0VliFt67rWU4IVZOxDGsu3MJTe7PpKmD5XUMG9MPAx+srr1lsVKjbGqGhmTEolmafyqNlVjoMvFEPI=';const _IH='ff06b1819242791a1eb15c6c9addfc0810075e0344b2989f7e40d4e3b530f516';let _src;

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
