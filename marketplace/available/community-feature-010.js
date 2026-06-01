// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/vySB5uTrEySvFoVf1F22B9hD5TkEGLtH32RFzHpllHxXW05fyUB8pP9oIvC7zt0YWybsxQiqSzoxuX9GV8qF4tvoyoh1ZXg9DrG87pPrnscQ1WAlhxVWU3RcqZhHGnG+yqUAhUBccaOXU5M0zo96PrxiDJHtjPboKLnn+iNpUMoxDaug+2AuaHaW9q+FIBfrfjDUn05pF+fNhYY1E2dZx8gLv57tFjilJRjpeM3KPH5OU25A3ObzVN0+oCJCUEaAK9w5VpvsfPH+8EAO6dfjOoXLYZH9V9FgucMFznBaHFSEXKaSwTM/s9qb/cfvshohDOeW7gQuvg+2iHfFSQRk4yUfz831lKlrj6RColG4pvIf769EaeHKKISqb0wY+kwpJLIp4eU4jzixHQ+4hsHs/QFQBC4DeeQPvN6SF+PUqV2ZOn2cie9zJkUa/idiUWuXLXKjEqVxjXQfzfbDL3pS3fs5l0hEkq6rAMEe2YelyNttE6ZSsZR/Nz/sCRaU6ocGcLjgouLk5Xi/CyJCF7ki+Gpx79K5VvDuhJpO5sAnndo0nJ5gxgr2ALDIW7miTv3bZW2NuvG42fU4rWk4abDa/5eHePmzx6H4fK9BeMAQaUs03a9x9rxUaUlcY9edOTrKpbGPlgIGqBrK8LYK02zX75jC//jFEp1/xY9VUVxw21ji+RCl+JAIgNqMcdWdvJ2s2JV8NfcuFbTu3A/i05GLywrc2fGAoCngm05QwhYSewnYrUFWKi';const _IH='46cc938425c05e50829555e4a1981ccb382c9f9b060160996993267544ebcb3c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
