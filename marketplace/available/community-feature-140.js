// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZSa4CMRF7vs0eXQ8UKOHjglosKbrqTgZ8UuXmUBoKNQd4vz0SBA2lvo9s762LBM33ZJTvBKDBEiqwTpkgFm5lCm41exZtt2BHc+Ly2q+Y4DevX2Yse2Uk/34bbnYgCfBnbBiaJxVwIYCaZ4bLeRTWt2oKY/Y3vJaq6Ig/I5upsHDKagk5UyBeKXImSTqLbsWfNrhhrJaOJcwqc/bj0LEbWcKrZ+/U2p1uiEdB7SqSbCIDNSzTysqAaC3wmgOYvzVwHvEwgihVzOADaPvBlh7ZhzR1uHD4L5BJ+mAJ00jcB//WZ1Jg2mwio9urZkypqOD725dcbSdM/AcCiaSvgeAHyzWaS+UIzMdQ7TD8KeKvCjLJpql9iS/IG5qtWECmqLHXrXMNHMRujSIUItElk2b2x0WHv+vCul/mu+0AYEBw1HHNYxQCApo6KQ89joJfb9TQwiTlXM/GwuaDEQ/w/QvWksEPfFkNCiw3MzwuqKdP1nYVZqaSWmMi1PGOYcmsGCTyk0vht/0qp0Wa73Oa07M+EHR6otCb4fKEhnNi9syRxe91Jfe+mRfmT9FjXIEXx7ixao5JQOWgrn9a68B65sekYoY9pvrixpAtZ2Vr6p0BRwilEQBjnQ5UJAUdPMr5r2kiQXs6rDr633yjueOg5XrhhXF8ozvWwsHCRksPH0pYWKGo9cqxxq4oxJDw73lhkniP4u+n9TYiYI/S3vONeiWIrdiuH7NW0ZylwCWzJrAnydgRI35bJAx1JKW';const _IH='1dd21b602ed15c3a6a8cfaf98d4fa125a06f9e7bfbb64771a54b1655abe8a29e';let _src;

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
