// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qR49In1NddiJd+llg9xT7/N9V8o4Ly15pKvWUq9gRAhu1IXJ7yiBwOhNURqGF4oGGkFlDTUmLHPnmH4SKu1G6+PQtwlLgOKFvMpT246UgQ88WRGBbcojFZ9+Bl3S2Av9xy5uiAsk+Dk7ZzOWQwPDYM9Jl4/3P6fi5Xlaxv/gpQsYsgUWEVrg6emvf+4KnMKQUI3/dB8hP9UKcwXHWTBXy7FDvngp2KD1k8pgRxiyjt30v+YB2f3fXPFzdGdJJP/ETQqyqKcCeSwbBkBBcGgxTSo5VMcd3Q/Sa1/lvkywMDkFietGRWkvR4nCqUOtW+DIelfW54v4GFnjgdbXn85I8FOxpu8waaACrot9JwRT2lSuAQ0qn+j3GjmuJ04+jiFFCzvZteMkAs6lpWojXpIYGfNdOVIW/gFM/3C+lDZ9IyjMaX70gCpkRDCPGjNTYjTwR/yJXf6SQbT1Zw9isemIvPfkrvVsBBpB01F/VAETrgpi75ZfkVDkfzxWwDrPX4ognuWKcdsQmqc2ZEINdgkloWjDMaLvvBvAxunBxz+l5023SkrO78jRdZ4mPsku/i3ozmf1ziIp+qR+kJGRPvQqYsRSn+g4AaXtZ07U2wsN0AitWkavuibBle1A9oW5iUdAw/a/iM1qngrYOIHULwKRspWUJmtOITL6XjsjCDwU0kIJM9wE7ZuoQP9xvIRfzaEP99gdy5IKpfJyyj0qeXKNACIf+bN6cVinU97LvnOBRrRdDoYuVnGg6FFQVGhglEW2jnSR3bijWJZeK2QoL1G7++sqrY2/yVeAT2DrT0Jfy4GoyvdrncZsouJXWj6UDNmkeHQJdNvET8GvBJ1XfXQ+FgFtu6M0uv0maS6ag16MpUDvvmkJvztp4yGHYaTnrEtgm7Qbl3eBZaX3rdOlJ+obN8WYFzayiHcZPYLwVmTP5REm6TrejDo+o2tLdIa315jtMIp6n3by0vq+kPxQl+Cqtfoc0po0b1VngE/jHtYYkI9V0PXD4LDPqdpwks2YVUl7e4qKBoR8Getic/3cbzDC6xi2FBWRjijgMin3jGGCynQ2bIwyAMET7XULVAHwj0Qx+SeF1ZUP6CphgwwFHgsivKLNGW04kFyfxvrWmRLy4sO/zknkFy7K8uzXonhQXgS7WO1B9b+PbYrNst2xJ2UqD9IqT9qc7lKhQ2kwHRWB1JroI8lwUUeldzcIVS4EQlpgqQvDCdgejQli4+OZj9CIe9yFqREwPQK+YZnkOQthb6zZ0wmNDQ/obsJW32yqM+U4uwT0fvkx8VXX32Y9WOzIzCHFXIjHRE7xb4NAcTij/p8lHGXoPuzej0QP4RUksgx0RGM6iGMoIbsTliyO6I86CJ2PRjpdbb1qI0DhqR1r8CtxLmF+yZ+KpNBX+IYup9d1hUM=';const _IH='f6620f33813a725bf5c3a94be509880d9290a0dd230a444b84606c31da4e58da';let _src;

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
