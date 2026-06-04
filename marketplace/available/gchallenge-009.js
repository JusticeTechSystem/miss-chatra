// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rw+VJTyzSkQeexQG1x1R5SVBncqOnkoDMFYu+d5i4jnNWwCp3wfuwgIgKjEXCHmkve2sAoYPaVfKohbqKdsk8HUkaW1zhyCaxn3FutnkxTUzHbtiFJb+Gt3Y0ZlMwv89RGTpDLS8M6XmSXwqPA6Wuh1368SNY73TuQWogx50LDXUdifHi62Z5HZ6m79Tz3IjUza0MRsLgcl6thTLvW2D22UcRVn1G1W0nmSt+R5HZNjEdgM3UZkDLX2cfPvF59Mj5EyGrAaTF5kSzD7BzLe+V+oPgpHeUJy2iPTMMgOo1O7CstvXtf6pPAo6vsc9JC56pEIjKc2GLSYJU/EQ0zJXsJBiqCQM67bKh4a/CYuar3qKVcdQEzUQXmNNhcULZ0ICzkEtJG7sHJAYx5Ee2svhgriDbak9qDVyP8iJ6gswILfFUrhIsN0vj8QNQiJGSvNK8QYJmpR7IhSR5gC2Lor+Q9tXVMkREKFAilPLTrGyXz6G4elpAkE+oiRtJ1Cv6BfyFVWuX9+dmWw+cnmhBXvTo7rpydlvFDt48y7hzT2o9I6YbJVMmLIJlEZAUdM9aSh73BFmsgLp3Nq/IpHmNZ11d8bJ+rzeLOpxb6S9gxJgJodxWePEKIf0Io7gXlZUonIP2UxEfVY=';const _IH='8ec31cac123060e0bbed8998d010d0f2bd54f536a6276a636a0c3f4ff0372978';let _src;

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
