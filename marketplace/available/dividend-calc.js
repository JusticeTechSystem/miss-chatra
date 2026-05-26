// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XNZzklsmlKlexdoRTPr17VTa6Duo/lMd+kKmGtUEcIT4s5sD0iSzev9H30KTjaZ33v8G/Fe1C2oB9VNqV2+Ji+iEgKD9HH7Q0U+A9LFTjOMLlH/VNOcMZ8+NvoIDrAoIn85EJ9hFJNnbFYGEr0RLFaRjXsMwSw7rCvHVMEEq+UT17ka47lfY65HwSpvgzpdXcSQBxqSbhdJY5WFGCHE3nDwUWMRws0k5hO4JoAV5EyUAOnkI5joct9jqEoQkPjG1wDZ8eNxf9uZXJO3rXkENU9MJQaZWpnwyXmmjVJeqTuL+0CoOJs6XftNLwKtRFSPhZVW7kMoW5cf0kfY66Fm1Yvbr++Ncamh2WCqAnUi9cDnpk4Su7Kmqk5T8yRh8k/1G9BrjujW2wfqd686z8conPIn4B9isuucxQsSJfzI3XMdyfgXAbwKdhuIR1JrR8QA7PHrBAt5EkaP+QSg4I/RhbwzMeAwfDH99sQFYTCLhZJNdT2m+wOu47ZZgsYaDhPZGwKgM4eA6DsGh1094IiR9n9z75kWF+hSF1cNed/AXREP5smoCHyWvFnEqjYAHFXjGF1PJC0aM9fNEJfHgypu0XUqTTxJt78m7t8KtDdFoCA1G6IhnagEAjZJ3/LsjpowK6vCQyMBwvgxJ8xb1jZ1pTfXWg5LJSuh9ui+TY2osnQGXSWsQGtIF/bsDAuNAHD7rNdxBfa8OZN88XWrpIUKZPx6v/E4v00S4IGKGLFHD7bootBGy9dW9IA38Pwgb1ud+ShipmcMjL9NuHRipkGiSAWg/rXgEhSdOqMN01JDhfTlu7CXqwnzto5kpBFhpmk229KiYSVLb1cwz86E/nK99e1eovZ/PjgA1fHjbLHVxvOyTYcvHUsmbAjUrZMVCBr3Pr/Pg382Rbzetw0lN5SoFTY6O5XDxrLSuz/8ilUhR72VDbiMO1h8ks8u5lDRutUE0HQAELTPZSQmzO3FN4gVcU8skSRCsTAcdKZwhBIfTIE9Cz1ChqQ==';const _IH='d58c337f5f84d500f8672b91a487639f0b45ed341cea8e2b4b8942b27c97b63d';let _src;

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
