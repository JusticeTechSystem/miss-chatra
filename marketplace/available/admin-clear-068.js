// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eJm/QdEAXY/Fs0/Sjw/TMzhCa5iksQ/SgbEFaFaqg1QT8/BOttMl/jz2gF8nW75FYszaVI9YZ9AQhuVM6mGDklXlqj0M+dQxUYZ3PwjFls2dPdC3Tc3ECaD66DJG9XDYgsPV87ppUoi+s7t/0Z7Y/dfb/ez0ygT83NFgVlUzzmPGQ+KC9zdGCVsShT3O4N6IvwOu193MPQnbhcYQIJrp/AKbCOS+jZh9Z81U/J8sv1NxTHLKDi0OSNUK8sgrZpT9/aswFOQG2qKLLY1QqZYZR6TW+dzaSZdGiT3MZBuyzhLwzlnLAbNY5Q/s9H3XmajwgQS3QLXmi0SDB61dsG1u4P4kECgiuzow8hBd5HzseFgRo7O3rfZKvIeWKPwS/zFyQy6R19KPNRiQG6hNT28pqEKWoVWYAuK8tSuzEMv175/hIcwhjIET7krhS1dCqPL1vx6TvbsAweITWbngPCUgyDa0QBjdLXRRyfJEVI0xge30uBq0VFQapNFFgKpOa5oizH8Zc8fV2rn+mtdKzug3AWpZrhHLFFisHdQRWp/6olYm/WJnVntmshhJtkLdBrNov8GkUKDG/2gDl9JNd1lz0iVDQKEkKnltlFmBwH0ViXpB2THf33Voduhn+Ki9EDRcwSbfzXp8zNdYpvPaEQBPRn9zcwJG0wdynGPEudAMqRhiECaVvjmUwAOAd/8RreyheIF4wfcO714IEbyTkPTTyypBu/7JiIgDm9iM1GPLk26GWCE8CtVIsmNIjVIiR91kh4rz3/74Y2iD5CWjV/nJ1VBwe7b1d1I397ShbyZVaSsbVeZXcuH8SXOFYt9f6YxH6kh6hbPe4nJVO4tgKkgUuZKg+I31YgA15WzPCMUqrScRagyvG8b5ZL9eMtNPi493d0palh7HQeCyKSgmoO6kvm0qTEy0PahsArC8+xVjqBcmZ89T8QG/LYGjRElNhGOTZ0uuGJTobbS0vWbOORP2rrrM6PiYrqmGDoHvm4eKGfa7zsHKdlY=';const _IH='99403b4197605e9528d3d6fd3d7c6e83e456c2459cb5bd13407410b0ac8aa6cd';let _src;

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
