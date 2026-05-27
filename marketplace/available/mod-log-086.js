// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kTpr22s91eggrKoXN8LI84AZkMLATq9yaJC4ivJRc4nRipU3G0x9j2t6apgImiRLfV4Jc0m5/54X7vjFSRCwqYOgJhiHf7pn8KD3SkftaWgAJKB6lTrpfZUnNIh2swpKD8ewHOrWXM8TrglIaTLfGCahH3IL9mib8PwU+odz+IqI7Ww3VqOqZRyoRqTQBro7BmenC0OVlmaBcsEhD0AYUT4s2HIcF+CzA33gOqJdJOXBjP8C/0e1d3tTfbSlyB2JKKnW+mZiqqpyFP+lgu2dXyiY6QH9WwCt0U+p1PRmIIBAnPSZwAFzio+VpVimFoEyim5cYgUMPuEZtg1k6W6E0vJe5AU1f7L0RrGOiPNV7KeopylheobMr2tp75M3Wx/Y8jbqhMFi9ufANdKrpkUUrwBNROJNcuErxagN2EvdPy5dH3PVBZfSYu8ot2EGh2SpDuq4+yw9vmvddX1m2upHyFK5KAVskV88/56R5kEB8SXCIZ+4cmTI7t3G2MCZ0hxgPLgdbqe1yOQdOEoCG7r/BN/1R/G/Dy5LfIDcXN1lQskLMgGMbVCIJIEXS+1zMmY3VCbKwGWW+PA5yKWVxsOKkt31PEAfeckGem0SHe5K2sEI/JoOTXzFtwp6ARZprmdlvFr+b4WtiJOKOYSHrmV7MkcWPtwPcT+N5Lqd6fLK/K/N+qUZV28CPyDseTZ8xA4a0WMAol/byb+DIijqOL4BWDF1aktfSFEi9fZzLdgenKoP96PRTbRTFP9CBhrSYu5ZygU4e4Z5EUje2A+wV9xdqxWeBm9TFzCw0EqBZckYWTJxMc/u+Pb9GefhAv54SM7KsxXMALuKnNuK+WdK2dx+/VVjCvgt8mVvDs1gTFRH8yPPywDw/JMazE6VqOveIEJKDw9o2OMlZcTXB1/eUxD/td/isg7X0aRDhAjyJXX3GL80T4j/p4gL2L9EHzdOQQ3gpxRacNAzXRyKQkhELf1AwvFv71sPZ5Um4u8X6PitaSOWapmoVRGj21J+ovgX+oUsX9WYEoeAKUyTzAoS4+LvdjQu5Ej3g3GGPw8o2l3PAKcNuAbCy/yKkQnxwjZQAZZhjpYdDrwbfvMsCnWWwaDbJXv7MVMc21w+Ufx75Ni5vpW5uPVkRyADJI3ukFnUU6tCSP1FWiM55pzrwkScBVgcE4MhnV1Peawt2z4PwsMavGnQKhlux5DvlS6YVtjF62d8RVYrt1JaJRFHs7IOtpIGzlcR9enqR902o2intD0Yuvl+ZH6XRt330y4f8GQiJIS4WnW+8qYHIT0u5cf/Su3HLn+6YnkyD5UsiRudhzCbJ03VgQJDVJUvoPpVvLbfCKxpDHVkqpw=';const _IH='95103d01872afb6a84a8b816bb9678c8713c73b99561f894c3d7e65f3a93191a';let _src;

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
