// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S8PsGXcMbzsDkNlvEIkGQjhroHVZAZcotK0t4BI93PT9gwfbBJrrzCPpO1CaiG/2AdGeFpK33U8sFSTVsItsdkU/iAjhmnWUY9STZ39NSCNtL/gyEULUowkPz3FlzddzskrxO1KdPZgGMJrQo2VGMbDyfQCBLcijuaJ9cqvZ4z3zxCbXZMIV5DGywc9QzVudbV6eK+VLiDEmAU93GcUDFgKV2/Uyv74VWgarzszicjg/o7GTOO+8uW9JmPXhLFsCW1UqM+JgTcATnXjqR5qqQ+2fv8YnUMehBTZs0q4krzvZJcUq7TTT2WL38J5n8Xvlo+4x2G73umh2TYDuCVmvyoXsHyr1k65BOBLDiV8TQJYVep2GT8/1z77Cb7P0fIU0kyGTWhVzQACrTazclR/As+6k69ijhzg50kDSxHe+xQI2ijBWw4GZDQ+UYxtn9flqLLzeev/rBaJcjPcBnV5f0RojXHhIOGu//ZvCElA3lYqmRMIqjr50Odq1bNjXbC9Wee98vQ+RH3aCD1ftB4zkvNSTQodDUvbGpsoZoOEHFIEDuhbJGfkEKuQ8ZBCc8cE6Ji8je2brf37SChk5JVM+E6jnf5sV95CMslfqGsJaDQliL2zjLMRhFiekwkmiN260FQPUmgLSJ97K2J2v1uc2yxbL3FkL30YD+j2kF1kFmH2D9Bu6UQLr6qrzA6UDDSBlNz6ZVYnvvbe0wAom/ygl37Na27vs3fu5vQuOqqVkG5j3YZsTCZznrZEkReJODUkXeKLuHqq3qsLbkwP9uaTlCbTUm4Ux/9V/+Uo8rew9iH+WFbQIagbeyHssdVs4WEKgVNiqUKXAyhELHo7lnXYgIZB7PfKxkOVTMqIooaamPhj04YRSYA0T92Sr0f59UXq/qdJyrJW/JU5VJauSpUctXqk+5E6+sjWcPJqPN0IEUdZc5ntrRl9WpM+fPXE3ESbgXfkZxNR/WttkPI4hvSXS5dGeN3T4ZDCwyC36aMZ1ufWSk3BUX2mT/gBLdgskoEqJwZssSH9JjiWowZ9tgtJr843nRJYkGtvV1etnCDDGOX7q+e3699gsjzDrlk0Y74hH1cG+xr1cDb0YJmNYWNX2xvUwgqIiiP6E+9gvY6s3UTtHkhNfSW2H1gehUqN9rGvAM7QpBNDAlA4KIbaOLvorm8W0L1eufl5vv7MrIT2fQSM2DyHqXah9artkVrC1KyPLJpLZ43o7r6JG1kh3TGYgMTctk5qUUzTb2yg3Xx/NqQU54DIO2EYygVfYwS2/SljVOJVt+FvD/3zNeryET0kC8ksnTn/2/57j1dEut0QxWvIAQw5r8cy7JhqvOtUVQtOelv7oSzOoYUUPi4r1khLzwlBWY5sF5HHTSFZWI2hQdAyUz+0=';const _IH='464aa85b5116e42c3897e2715b6eff93ed7300bd811c4f7fe507f2c8f1013ca4';let _src;

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
