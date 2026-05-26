// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n2dtXSt4JOdH4SIadYTpPCQVV9E5+1HB04zhjo94evmd+mBBnAEtELQgKNZZzoGvMdm1fHbzsleMBMFRkczf389x6YtbKsy7VAUrI2toRCXGLZAL+fpd3hdXyoEbjFjqhrCxn6qrY2LXAfVVDrl9ob2Ene6VSGQSSIfI07/Yny98NGVKvyeC/upS0Q3HygBzHQqSrIgPAmp9rsNSbfA2SfNcB1Zqpfd81iEMAYrFDiTHigpOLGjWBX8aE4aRlDbJsbG9gnvb0gvl2Tw4X/A6JQIpkxzr77ramuGgL4pVOmUc017q4WI38W6DgKJY0nAcIKQ+Ms+r2Djqbw7gcqEdqOoNkrhnQurPLBpq9LwqBrS5cBCXu/+Ku2kelYQvQLa6G3N2jwhQ3EHNLxRKfIIESZJecaEktAqVdvuOT570tbF17gN9fVxCHji1CTaDXOH4FDAofYPse6lH68Wqtjw0UB323/blANUy8dU5sGkuhHODG/xL33pjIkbCYntOdzOMoOff1tTlsO07RfaYbbVEG9rcR7P7H4CENGda61KeN3NxCHXPjfT0feGqyt5aFfov4kXu97enhB568lhZpjdoClXsz2Obujj3uZi3jLUhozzW0X0rUHbX7MSnelclHsH7qd+5/ZPN3IxpBUkoSKsBBTPcr5hFxY1GKgynK4R/wHL/6iriofge6TsRjYqzFvZuu8c2Rk1pekgZcMTJaHqhftgk2unOgUb57WiEWIwOlQcFdOtj1j0RoWDf9R9kj2+XUh2e/cH/BKqhdyexkQvg4io3KXsIJ0FHnrIzmEl9xjs9iDWqXQkugzAO52+mtOObbaWaaa4hhC92iy6j80fRt+/i786lJAZA+LhiRwNbuQw/IUGLrlxyJvlk72nQvDWXSoV1IGba7g41a4Z1g6x+eHN1+W5Z69rz4F3O1gEW/aksWmJVIdp0eiwVVBlOmIXgiU9TibCYFkoPlGnkNxWbTQCFNMPnaJDKwBM8oFcACoZO4YDUYMAQtFvUmTq7Fd0KsePBS33j38Kz8dj/F7lyCiNshUYKEDth2gwawKzHoB2SM1tcX52ZOl3C9oDdC4Frt3hho/XV+ztxb1pnmoVnULlbHNTOOUxj+xL/bzxNS85hY+Ybrt0cYC1/5V2WL76fImAlwas6Eq/B6c6adR2v8oHAcd/m0zJi164Kpxtgx3d3EyMUWICYAExNmxlIpA3dXmBzFybWdypGhuGuQA==';const _IH='2242f6a527d350935e886c2961eb6cff4968ffe62a6c5528d9ad7c30905c09a7';let _src;

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
