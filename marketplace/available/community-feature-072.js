// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLH/zZUYyvyMLXdD/dJvUOYLDfqK8WyFJLavs3fY5FJs4cLz6Kgf1kckXRGVmNXLno8gbZQeoZoY/okFtiJbcF97YgBhJp2BSEzM5x52BAC4xOPvXSVwdc88eKFzmT57e0E4gHd3finWv0uI/r/fJbe2jhGmnXOw2tgszrH/+G8LgQwczvZFxfmsfcjUtNQ+eGWOgABAZxAz9FJX6BnSrjZvC9Wqa7BRocydPo2clKVZ7GVnlzoubuGVH9m9tDvNDUZDYyhudbEpN5Pn+1iSgfu9JGwUFEuTtAubqaUXcKN3Q1+c/rIFDIdjMolOvGXyljrpxIntG2f2Ui3GtnyIBC4EY4ZXVrP562a8QvHmxFACrkf1wj/QYr48n3kUa4wqGR2xs2KkcfpibwV+zTPB5OBVH46Q/XeZ6UMaStFhs1Ga7tftbSMgwycD1+9c48PPztuvyCZH+uZc1vHhP9+OZpEaFcn9u9ZCtRjiHafpptIJOw1kw2DN74XXWhMaBWde1Il37KpMjBvA8jCfLwx7WnCQe1MNsRogK5+Ub2rBexWvW/w4hBB9KFcV+xzkXFsb6869taZ+MCN1IA/wF55IE2q4iMPrh5agJtjrCwtel/zXag8A+06KHrFVw0YIMOyvIDL21lyW2SeOfWwyU9m6wzIXv1K8FLhc+lR27qXC0/hUDjhoHNDJFjfgpyiwLwapaEc6ImUwx6FUl6xbxVM1FwpvoITYpWZDuFk5TFr92G';const _IH='31b252a6286d6f018d6f74b2a06255efa9b8a2fb58a30402c4661a4133dbad97';let _src;

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
