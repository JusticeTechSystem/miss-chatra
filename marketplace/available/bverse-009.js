// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRedM7LygPRdJuILFjlgmmEpO7KrBpZbilmWlbVRLgwdZ0LWdShjSAK1fXtBHuzqBOa+LZ636W8JLgyZPpGGcFsR+M4ngIWt86HO/oyGzorgTkwLCqr6Wm+OSyHC4vkRbuyezdMZBzK9vUThsrxNQy7nwiYuRVb43AZoH4lWod6Hs/2ccNXGgrMnLoFQ3BItwKlabnu/xV+4iICoW4Chvzwx7TNpSfNQZp9cTBYoYb1I7enh+8efUGKclDMmCGsYHKOBKWxFjABwqzck+3p96pY4khmxIlcmn3twEP9dD+6D60HTioWcckd3O4Ax0V6qoz/dk9K3FKAhS7Wan9ih+UH3SFV/hLHP6rQwtra4aING9M3S3wKRkufXteVLBphwZU2wEJmz3/G/fem9P8+HtVglmSmqCwyz/dbyG67wKTbyzMtta4J4VAJSNmju2BEa42+GYTTwtRjfLgx+rQkW8cPFEQOQruj9FgN3qcBybg3MkLDQKx9dVp7Wg046bfgQFqsTxqyXqHVXUfYuMB22TnPy7I9GZtfWAjcV6L/hu9KM/XphhUng9novUVpJHzqwgM01ZBD+SId46qXbI1CjbZEs6xK0Ty3Rj5JrfvQsefUeFip4izYZBcGqlSKZ5nin1PemXObwWGhv/S1iX5NNGDIN26NARVay0Zeq3EaD9XkuVViXF3jlDBpUMAQNuAl3Ar3Qayx3ZmztWXYEaxaJXY=';const _IH='c08e4da0b3d1c7055e4002f7e42f75a1735c482f30deaa01b3093129f120e7ab';let _src;

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
