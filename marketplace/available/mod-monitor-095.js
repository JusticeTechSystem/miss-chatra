// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2pPG6QS2gcwUfrxTC2ylauS/2ryAhYc12tByEKBNqr4zZ0HrYlTexz6kkDG8X9Z324IRp2ayTaLSCIUrFp4BpXEFkAdkTk1UpyqVoXvLrrFxJV592AsVqZ+46xwjQgsuLHWm/Q0zTqYbDRbMUOBNDtOE47jE6YR3iBvq5aWc8DvnbqyoPwFsiUfPpmpXA79wqS8G69QEFUijbBuFEDbMhhc086hNmDMj4WoEsSnqt68uL+UAYPQhBBFza5UESYSHiGZYkuNasvLYLbKGvhzO4epATUJNzCZB4llYxO4QxRiBERz71hre8dTpVw0LCKi7PVuKb/8DvkNNlKvQ2VNS9nucQe0Xs6s8xEZk0A6Cx/4xvGfFxpNHJ7T98YDrkNKuvcdgR9p6N0FPfYQ2SoXmuDyV0amgTx4dLQhxlQzE4wnQDQIMMU5sJU2iYeNcea3CPwWQV46tgdlSdwFsYSI3XUPIT8AjCi7JGbKDaL1cZj1yUh91a/ZFf3KtsAmQJK3MouQLqriYjIO7Obu1Orv5G9Qz1G1wBRpAbFsVmd3T3uP+1HcYYxR+ilALYg3+uWMwsGlpbCCbvI0x1vX57dAYPz/Uo93r91uKNKHyAmD8hzBdIpeieK7UdcqSwTgK/QazqtHTjtry85/d0GJdtA30sQNP3dvbPONCTiN5P6mzCyueV4NbodkHZO/2G7EVxA4Ads3nT4xROhxWx/mvroOU9N5sj/cmmqsYgO23AaJYN9XFJOV4CiFTOC6Yxdm/jhkHO/EamNo4qA1ngdDYma4imn5YjCPG9zIYijAdNLV3/CYGCXALr0QSH415ugp/BnGINfHSX4JjkFHZwC0QFplclZ0R1V2buSpbRNQNxPkDcNO6DVMfoAb6KTg54IiZTeRgPZJMrKYWe5Vi88vRggO3b+0GcM8jJc3K921T2Fgmkq0c82eA5jzcE25Xo6MUYv9hIisr0JdZeolEGqvu4zYllYuRiXrN3OtBhxBCoTDnkaQkzrx4Ieba8PV4Vz1I45H1avnCPPKzDV5xJ48e1bysooOMu+I/Ac6WtlUU5IyackwME6joEBZMbAC8ZiGoS2Vmt69jb7VzJcNF9VcYl75Ko5ggpbluG1g4cYS3kb8vHIfdJcj6NgmTH9Clo+Dm8gzaIEpZPpmhgHVVA/s94f3EzJ412MeslLxOGP8NiW9GbdSldAk35HzJB+DuC4Bv1wutdBEWfv/Ah5b8GpRCWwdzwE0Z2S8JkVQ6qb4hv++mjAhJPpEknFBzGcnNVhijLk4TaAuQvI8R+KqfIvmACXbLkNTLhwS1lh4KlwdJGUL8qdwnA621zLLxCO+vSbHceCPccBXqSlzMJfmTwbvl7OwybOhE671NlDj0lHs96Co7hK/Fmc2d4SCKa8v0CR+w=';const _IH='4ebd2ae341235afb4f88015d0f90b0893ca3bd43edf5638935ace60b6b0a1c73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
