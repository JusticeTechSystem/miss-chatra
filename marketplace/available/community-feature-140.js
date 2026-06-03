// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1jZnAFHSCfJL4blTEXBQFuF0iFwt9BIvgLKvpjzVUlzgfAk/D0BAaceyxHDs9iOT0hkbGTiSmI6PHuhas90kKKJAa1UgnkNg/ZmLYGF+vCy3TGxQntP4WIqGi4W0rTjSdRnNqeW1PUE8orL0GRkvsEZgvSld7YQD2xmGifIgxg3ow6TOg8HOtdatUv6ma0ARtMwdwhCDkGd9hrd4QyzWdtANxwxa3SUqmZlMC5kSqvMSebZErdb5ItUoGUhRDw4AX+zXkNBQpSjDDp4PiJlH6K8fWgl/dcgsVmunFwdT/0VdIWfno2/jS82Kzf4Nrk9EA7YJbKeFgKxOqACm4xCpS6acCOnbYeFdpBNPkp8p9YVEUGCWsOMMmoS+ZXezgtlWk/WaMFvnqN4CYrZOM060+RfhApyTBgum5PlVc+mFB8w1f3gpUKr68Oyqdbl6iEKbDY64Qnv7EnPv02hPNI0vpJrO4qZPXQcbFb9oS3ikrMlZPztkMioyyI1pU7m2WoBcBSTORnKEHQl2maRP86juzjMINWU19K3STSmHffGn32gdI/v1Dp0vuYKzbmzgDtHWLvp7vupbugdonBx6B7npPbnHTZiWV8vwelwwygZNTVapjaiYMiTeSpcPBMNvNh3dVBnBncWD/DUkZEjzESCAPtEZdx3dhJ4mg3lGo+Yl+qNOJXUk7IwuMezQfcF5CkJGzF5oBNWycCDxMtXYOgDCxhhhXASt/sRMT5J58yisQ6ulaAYiCTeM/Lcs';const _IH='0329f273f5190f63a43ce826b12f51feb163ff1c74010c7a04bbf127dad0e438';let _src;

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
