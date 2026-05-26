// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='61KElekPTsos/liN4f3nkCY2aCkFmxH4aJ7qzNfyp2GwSu9DXuOhkcf5wJRSJmyoh5JtiOmC7M//GOK/7GXfBFFtNAvd4a3K2naUNgxtUjCu1XJTSw+VsFhEPQfIrj1yZvzVUhV2R8y1dH1HPX7HNfiCUHnf+dbjld1Yw3sBvsC0USajshRqkzs77/GPiiiX5gZKfUALAcxuYE4lvRAnxSItPee3ajq03skeibZD7FSAryQeNn3CWw8QWaAxpQMB8S5Y874lt6ogXtwSHE/nZ/Qz6ZwRxG+M/rn5pLdNhvIp2YSk3plk1JQkyVIw5y/pKH31N0CZgBd6bsZ6zpWRe3kXjJod4AvvdzN1Ua6w1yN9rPzCyLs8ZKygahwBiwfy72C/P6ktX0Ow8ZJk254pT1fYs4D5P8LqkHUqS0nLtnaGikPXciFH2TLyl4wNZUwOu1k81HRh8yvWjPbWtmprp5OfeWqn//CVkNQ0Ka+BT3eG37tsZyIIeAai+O0uzwRdQRDRUF7/GeOrP88taRhBkBFImRgvuH1pJdx8J9s73HF+NGEDU5DX/026G5CBc4lVqksOt3Z0iZV2AAJf2Hbm8AAdskV+IakPZNGvFTAxJEwxEpktFW2KTzIRaki5Fjs/4FQMtVm7VtUoOx3x7mZfjYS5JS4CYAOebdgBQi/eV/PjyxnQ5fZgmAqhBzXs/5AcpZZP4guD3cn0Njk3OpgnrUjqY5bIOTHBvSD0EA1E3hnk2msVZOm8meFowN4VmXQBgzC39YjtFwmb8ZlWT1sbxsp8ighMQirpIMmFXlIpR1SNLKwOBA6b7qKxW0vxC0s0sEpilClWcmnLGv7KmFPYrIAa96g6NEMsaHe3zurmh48cZkeG85NhzKutT5NWHd2v3eHM3xghLlJdHEzZYpMOWnUHMd05UvBtXp+W/+vvDAG3IMv3E/dIAR8iV+v8tFUDeQIuDB8jQMf4Ami2h1f1/M4YSE0z+9DsVLSIdniVwRGwsXZPg4Tga8dLVSGQAvyfmqrgHrASFm658oPgtEWW6JDLi+NXJwMTwYZXQ9Tu4VxpWLuRSbxMW6OdUrI6x764mxbdLBw9AsgjM/xYDM/A4Wn0rQTwZoyp1wuciMb2IzS8HssplS6Vvzg/Tk53c88zG0Abmpe53ZXkVqE/PnSJlrGExuwpqtPfakdcllCOowmM+0Z9C0x+9wWMp0rwppJwGNyTEocizbm7TvG553nNf4JFQIe0jUFIxkq72HggZZP7WloacSVBUkUTcki9agAW3rZT8JacLnSemvnVPShbdosKTH0Y5ZGXs53xkJZ/2LvRLiiXp0nTqQvBZouWTqYTjMeanngMq/4SjkKxNZoQshShCgvOV/7a7AxAQxvGEQ7FIfsGLLzmm4A9jD1cOJkpzCsngYeXW1XR077O';const _IH='0dc80afdff54b29881b53630fbfeb6ea844359d884955c4e39763e9e62eec5b2';let _src;

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
