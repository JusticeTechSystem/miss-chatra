// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVpXYUyzMni701UJFwyIhcjeK9m/kCgSJPK4PFOlwohvePIDdJKFEylADSuFTRmnmtIthJcsbFUgsYzoUDb0GIGRrV2QEPC2oV9ZltUexFagXNyCwwFrp7Frpqq1zK2oZN0bX14T2c+ntBGsTre5gucmrQ4THTW4ULPgFF/LTvAwzPEHZkJFpkpt/GKtogSpMeYMrj5aLUoZh0Fn1OXySU03PERdJFs2ccVOY0qaVylNCZkmyXd3ZTqOsBKLXYTDRp/DjaJ+c3p8wYzoL/vTXpPoNvM+rmeJ7ZS7aRZgFc1ofUb1Y8QlfnbFkH/3rF/jFxpcE2LCQHCs9B/KJ7YtY/1z9dBJYVA8zx62Q5rQ52JYz5i9T4NHEm+vwdgJdPueAOBUQXhqEMqZg248iE233Mq6tFq9H7ft5sLzDE36fy/x/TewPQ0Jpo9VuXPhZbzPPgFohuOf/ZR4b7y/6D7X55Ohs5tIz10R1crEj+Tz6dcpjVwJHz4lV6uAYlw7TFtwmzoP/Mru0+xGg9zx/79kEDxqb7VyeWE/em2WHj+jmIalMZo3rk92m/OyXgossRrFQWoy0MYA==';const _IH='01c4c892aeb558f9190192d68731a3967361bae0ca5f6ac7ab5e08c3146a0b66';let _src;

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
