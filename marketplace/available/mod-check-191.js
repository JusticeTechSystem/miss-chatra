// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26m34/e+C4ZnyT/WvbYpuQcHlCYXAEMGym31mxRCBg8zB4WxGugN7LPsZT7zL2ZcXYBGleBPXsq/aGWGC/HwtmcqSSoQg1EHuwn2IXXnNkYNird9oinItmLWuSjWSRg1lf14O0YOXlBbHz31HI9Wk22QBMLgBfmdOV28K48GREPtqHc0GCjdJF1QaKjOSHYpSyEovHaR4sEwZuj7fd/NwoEasVy9eKtHm55e5L6vdYJyGIcdZur99Jgb2VOV1DR1vWfaIAe0qQnExi3Ekqj4fkv4DkRepTKw1glpJuEoZ1z0OkFaKAjnrRxmmJOJgTb1JkhRk/yTCn1BH2fMFVmv4CJaDWvNTySKVJDgnhPdxDowDKsMgOw1CxdQqcujnWEFCKKY853jX7DNsWFzMOKEuud6r2nbGordEWWTMFVtnRiaQQ9z7a1wAqCTz0q8HPtw0bPir+XKuqDp+svPogd7xeBN5oL46nUTyiyKRppOSBs09n1Kbag1AKrK5CiwUAfCGgESywO/vVyanC1fx1LTqRlXyg5qeT17vdngc9eNzu5+KtykutfKkBGTlOsAi+djstk/prF1qpSVLKcY2gRpQNGEey3PEdtD0QDwJH6cZ+RbszjAMVa6jL8W/aMUIBL1j9l3CR8sFc+zvksnkhWD7YIAUkJ62onri9Y+5VEp8+9KxBXkBJC6yzP/1OCBcbVKqL1otPgI/qsTDhd1SAV1cfM1fZ7gWjEYXB/x1y+34txcFL+/9TBSs1e+rvBElNrR/2iYfpJkoyRt/s6jK9aVgdEGC2mhrljqs8RjbQ5tSIbC7DsODzyzDWvZOz06wNi72lCmMp1B6vvYUmBS5k+S4PxH/8Q5iz5sv0XREg+aMutEET8GkpOmy4/FoYV2/fU8ldh0urCK4FNiL8WZ3TnDpIk0txB5uUKQCTxy2J/6V+m+7/UVIq6hOURXz9KrOm71sqXBP5mck1MYY/S9Qeq94NW4aV+6vYLNAqyksnuJZRUWUzv0d4AsG379pA6r29DdubBpdztSjYtEX2c+hshbEvxegNv7K67N/+d3pOBoZ49GrTqNmFv1toCkg+NYFqFzJSBHtox+7BE4wwaZwivmHtsifgrXH35QZgpBhajy3Ay+nCU8nvvfuofpzAzI/hjRyhh1sxe7lWr0O7p5OVoWFe9jS7OuL9sduDYIo9UJLJEJrPXV57Ko59XjZh5WQ+LwUi4AgvEvD4HDxPgnlmZPlI8PunuTGb5Xli9YSbNDH6+6ghRtirqms2S1tEgvNZzV+vTTWfAi4GMQ7MPgBmUsKADyV3M+alHWUyzkuZygQ9ZoJpH98DxLI7YF3PSNeQHPEhc81U5Y6yV4tpX8SMeMwPouN5TrpsiDdL2rFxwh';const _IH='eb69163da5844a8ef5ceeda49225cb2139461a4ff20da05ba35238847bc710bd';let _src;

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
