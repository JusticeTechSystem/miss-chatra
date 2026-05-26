// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZXigNc0A/eFcMT0mBpQ0lq2+hNKpFOfw6PhfVCp4x4bnZ453E3VaA/WmEHD++WEjbyFAxzp7Q9vB8kWM6F0rt0JtPkN1Z2Jhx2z3SssJ1RhnQ+HYl9FbGh/geLSPtzmSGrfLCs5YJkf1iioVrpl6n580ZTXJMHEomto/ejZxHGgzWadO6PLkx/5Usgo/5IbC211jPj/lReWeyaaOg9/1QSSrpjL64p7ngsLCLdzBt1ZlDcuNTgJPF2N6UH6W5dDgO3q6AE1ddxGiVKFo2zFm8T9J3A3aSiCjned3cKROfGf4itD4cSP8BhxN7QpPjZOruCFzjGdHuEpPdhNGY0xLpBFNRfP/MI6+pn0VtkBDsPN0QObC1/vfw9gZT6BFQqCskei+dEHAn21DsPAyMwsnZPRjl9KRXBzky2n3yXqaqRx+wWZiehn1yxa3v1UzROWWzsR6IwKsTOSe7jc/3aBBkV/aIdS4UnOPdBCuN7XBVWijsZ2yC2FoH3qUkgWvUVUAuwRSsCnFfqfXCV7V6vYumSDcx2hyJ8W/TsNaBYwMt2FvuJ0RkPA3Ct3eTkE0m+sfU23cXUHH6ANfRHfT/vOR2KDtrV5cvWKZAq2W78/jUDXbn+u1CS9FldJJhibAJ7sw970Nav3r6SrrlNJ9PUx97tWjdVj7yY7ym6GiUotXpUJuZxMaR7KaO9KCaVWpLo2s5Uqyeq8XUPrQe+mSkhieeXryiRSL/MnSE/ZnQwbHEUx6sGUY4DppG3eJ9cl1Sx9K7HLVO5obMR1lPCoQaZ71dhBH70hb3SpGwq6eKaJmE6lf9fOfioi+yoKAX5Lxvz33T3dE8vmOjXFHJk5/pqIGprnmemlPJr8jMFBUWWfTr8LCCdEv5QVfevh0F09o7pRt3bn073hzPOEopeDBKdxiqGGasvSWue6T9byKAtmVYtTOF1AhWeE8kp4uSeVXjvHwBHiPC9O75+3sdvi9dCXC8NelefSBAHCu7HPMzrP94Mjzab8UeEWarNWHlE25C5KwmIEXkDO4GZN7guoZtRIiBndUZWoMSyr6CsvpCiDpLLyTNXqSX9IYztvqrW9KOxO+kloFWnJ1D+E21x1EwHIWsd2Pjt/N6HYWp1Q3gfGmZRGwPFrF2VQxN/AQ+dqis//dpBic5EOHdsuZitB76Qz5/nteLgicRlK/1peEBdA/CdrfmLadDZ1PGTNBm9MEAmQ/AgvDnWi3iGI0U/6VTWVDbQ==';const _IH='2ed5fc149a671d917cb7a65966e5b6fa4a2997ed77dc9102c5d795c2ba61bb7b';let _src;

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
