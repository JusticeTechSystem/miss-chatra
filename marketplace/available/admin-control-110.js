// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ACsZpArhyF1b8Ibvi2ttw7/Jd2XMXVsn6CT9T/qZX167uZTjfENnVEC/guf/BNCa2oHk2StH7aIMJOY6cmZdLIveC8FsYBE5YUUm9iT+QC/oOyVJHrNLP9FHig3kFvnW2teRzAkDzk6UVyAC4E8Jf1w0OenV3KbMJIL0da0C85wMaYNNU84YwhH0EyXuPUfouA1lT1dbpdpj/7JeenXvTsTTHMZOIdqTOH8hlRto7lDS/vfaZRhpykGoHtIpYMpH9tsCSrcdpyo1suMnethxHtdQS3Le5A7TQpWullyKDDk9b0g1EmmU8lGDhm5pNQBUki6zZ9dHd+XNUBtL6jFgWdAxNBfaQbzrejgS+WudpV1+Q0wvKBmvOkiMwzwUOKWT5hZzLVuyD/4eIxIF5l1yaAUT5IW8Xw40pEkPm6A//TSexLS92vlipS9UCgF9SRXam9A4yKIOmPjr4Gninv6MN4b0bn3GtCk4bvXd+0ev9HmaZog7Hqz300y1HMwDo+QDq3GAWe66wPDaOVnmKYBHEJuXCUNHcn4t8ZXXb+8XVV2I7EmL741mFgHVUjYB5+xO2V+9tnrYN/Togtr/tbszTmW8TPAGzYece5haj+2xku9I16Vn46PTxIWKsBElYsqpvLqRCffGk2dADys18ZbBuRJo2nV0yXEK7vyl0n/1w4S14pcL4Evu78MZdNI0rmUtt1JhsNGCkN+JaVVcc6eSB5fh+nQVUduX7OG0VqD/BcSQN51GBEoddgXfBa9yvkqtXNNtCl2F+q5UKQ53DgAJ3lu4KoDg/OVvc2BxHdPnLr/eGpg+8xPeqFe1oPW22spWuEYPMPfhKmBZ33nE1KNGH+UGKYUfda9qL9SbuWPH/zNK4xKAmURBBcAE3Hz9aesoWRF1Pf9AM8Uc+3OSMtqeY9ig2q72N0rrghhNVen42ZEEU07QARg7i3dhiihtGpGBohpYkwTb1HQsYm4I9lAWsmAK/spfWDn4OdCie0pCXpYwcr3ACtJfaO3jG9V7RoHrX4Yx/zgaBWc=';const _IH='0042cd1155c8114391bd7d34534907fff9447a19be9ffa55706bc828abb69bd2';let _src;

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
