// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXhu7cMmZFy9NoxD6xLK95p4VkQr6PudCUqDqSpBfgGJEL/jNlWiGeGFUKD5E36jAYA3DM5pVB/Zg1HDkxWK2CRrUqaaCtulGnNCVFqgRG4emSMkXr2/Lx4hbb/2gK2RH4TyLPuoXiLeAjygQnnhIAMdjrltSV0ElPPTGUN3pA/p0spgJEmvlkIJXL59DroAXI1EsKNCV1wjVU0t+buzwHSG3ps6rluRqyzBc8aGux3mNQC02DTBnBh6S6PZFBKspjyuQTMNSLa2BcNnRh92beX5rvir6K8g9+JC+D3zThGH5YyajM2A+Gmfg0Vx9+BAfAAdGeuAeLV70gAOBbInegyzK31MYeG6GOVkFfjNHYy+MRfiUQWCj+k9PFp8eNTXqSVCoDAyrKpsXvNyDj3fOb4IlUv9ESNNQ/7fv3bT6yovoXPKqaR0Qlrk2KA8K9/vBQBxTchat9iYeoRzOoeDB/S/J42RIoikaQq+nNJNOKZEkTfud/lcDl8vq40/FpY0+eHLW6gnd+WYAQ+M58D2PgIXRooLQ3629GmVNJcQkHaBeGBIaDrDXe6PFt52nYdKgUU1x7pPzX+UgidirtJokV6B2ACxvRN2HZRSUOoOo5tdvogC/8c2ZhDv6BslRtyEYagHHYrk+YnINmgG8ilw7SJ9KowCXAaLjSKXpUDqAfgSKYV0C1bwYRsIyAtAFHYx7xkk5EQluoUjxQ0vf4ReJckig3SukRhFMAa4Wg47XF4ZpE';const _IH='cb5cb0189148463736c58a566f1ae08e8230920ad8f208edff426e2029acdbb4';let _src;

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
