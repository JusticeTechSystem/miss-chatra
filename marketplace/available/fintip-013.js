// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSi2RyDaWDq3BuRQXx5LUZLDIvaQg7saq4UiSrw59HrC8doIjAUObxo5Zw2TP47ik8TmLGy6JQnIatKR59AK3ZAZHEdI7kNzZMPp7m4szsu2j6cge+17AVlNGtefwXibv+PF87TAhpsPiQ5XfvwtDpEAEe4+GNtOpBhSvHr0vWzGkdTlBKVHBRDYAtO5i20m8Scg/6iogeIZN9UhhSo9mGiESHXtTmnmZm7AfdNCopiMD+UehKOhpO8jwZKO2iSx9+WJUh2dgAPk7lsb4Oc5yXBRlFJTkR9d/cvdFCQYKssSArFTHRhPKcYfhLFWvq4hi2lBQ2wwFWwBoWvU+1og9zEcPGrmSC2h18KswJNh4Qq5N7tAiznbzknnCWkHBlsoDw3apgzwWY3FyFNUNPxBjeI3eQmDAtRBMqdn03SDAN4GnnXywt13/dE2PhLENm29gNw2Lh+Q8OgyqZFj1tzi/a+Fa44Ckr1T1uA5gpPawHRE/evZPOcHIh5p3u6IpOelIbcLIlHkSNGbznM7+YwRl6JmAjlM/lbsTcfdBKTs5EJarusy8DNJF7Ar51WwueOd1ambqT6l57lNZAXDM2Uyf7IgM/EgRy1lGrk4UU+0zgJsgUkJOZQzJxJV3U9I/A24nqGQQhjXFVwf60YAex0Q1ezeumW3LfnDff/IjthwuCzxxaJ/3hyXOimDpLpze1khe0kFYgJIQ4uZFAfb3US0P4ho0W47LDBTyG7NFhuWdiOVNSTBbhM87KOvFYu2kRx5BS222Kq1LaIXkMVRmW3ixsRBn5pl+E6i1GGagceJWupgkqs6j1OWcG8zFl1zQjQgrOCT7bjc2QVU7g896FOAdmcqNU6uMcBTkBqnA4aIWAJzQabBrkUIooNtRCvhC/90V764G6pqTcy/NMBEuaQd25ZxQ3yKnU90N2fceJiB+y7wpossjNRr2MLw0o7toe5BB2quU4F/1vmfPony0CV5tL4/2QndH8yWcnR8n366AdQo67gyJvtNNacihLVXkp0k4M3//RRxiw9n3VcX/c6TtLhfJbg1zImqLLmvXpzlpdFUnE8';const _IH='16372a4546fb40d52d7d768e788c9a03be6ecb62212c594351a97d88adf9d706';let _src;

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
