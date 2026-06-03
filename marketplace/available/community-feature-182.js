// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wXQ1xcSZeeO5TjP1X37scqEuhJAwNsDwuofF01iy9ih1l1QmFuHzlbBRs6iGSZMYtgf33ArNefi9pcy4qQHIIxWRRW3lzoM5ti6Ejsorb+MJ9/T4ptx3fHBrCc1y+VMms/2MWDyGU3IU4tnZ28Xnbjp8CCWwMNBPGGcORclUeALBXhjkk7u3VyiDnTvn6czTu7HFcVqAyNhuJWVCsRZJL3jRG0fh+Tc5Z+9YMMbpT5/U1Y74eQFeklu+HjtRMY6qyt9XBxX5dMN4wo91KZrfHxCnaMxT2Yu5d34nN984ln9RKc7hHayDa96MAchZteWsDhJNmQgHdtOXPk4ShPBoZmzGPDvxHiR6HEbZcaT7EZ+TnFD00HGwR7WYtdQgUSiwPBkgBNG6gJb/CkrwZTMEbPT+Ctglh/4WOn5Antxek4Wz58Uz6yFZ1g457ivR6ken0f1KAgyhBUxc/PtlwEVODcigST2qjQZXzqsEL2H5DqEm/7pO5bYef6UN+Up760rKbZd1e1yBteciMTcgnN+oi52i8PiJimkPAFdA5DNM0P/c/3Lpm9CVIAO2sRd5oQhpllCZDlLvdB6J1Rh1ew0YfkLbhPX0b8Uff/BtERNeWdOGfgnJa0CCulSmiepbNIT8wDiEpzQ4b9TBdVPZ4mrNq90DYHrxu5z6RleanXspPc9XY1JEziSlMJjijBgYfLLMSLbYos7zJwCfSxw+3EckkoXuXgw3qHOECxGhnvyvN+9NlWk=';const _IH='50c774babf9e250bc6156ac69178acf8878468772f7dc85a5c586b2d08e3ed2e';let _src;

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
