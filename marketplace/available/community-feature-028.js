// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+fMCxQioxTTx1RpUP54bSqv3FF3QkLi7oKmx/Tfeu6WKUC3Uzl00RawX4BB7IEitIR5cyDHReuUyVVLW/DgRV/QGZqAM7auOzTivB1mRcdQ8nDgwqoOBfIbD9nGu4SyGdl9LI9z84bEarxxkgWUMAHezKoiI4OCW2EupXmTNJHZ8Yy1u/khlVpmxmbM04JYLkI0gxiXPjsCrSPd6OYTgI3loavJnoCcKdLoemJGYL7IwbTAtqEzQocsTErEIK334Tfptb8Epy3gjSDdNZxmHQYZhBGnHu4aOZJKMZfbidUb9rYkEeuXIEKNQwYES6ch5L2Ja3jeltaponAuVJJaWBPnkSacUIbc+qnv/cm4BT/vKPvfST5pMnpbl89aXS7YkaVKYpa3tYnDmCTMZIAxv7OUtYM9Ob00bLh97n9UTcY42cUlBwO4x9J41nYcgO7yYytAqjY6isMnWs5h2MTcKpj0mrI+Y3da1cGRVh6VaoLDUtHJTbuw1u7AS94OoEVSd+NLY98Tlg6fahKL9Ke7J1FEU16i9shjcYeu2p6jjCJknSRj5SGSIQ1ee12AqX4rLTGX9odhYNXYOwjQY4xfSZHNopNw410Dq4QueUmyLF+3y1jSL1a3hqAeJvbYlk7LFq2hfg5AI8HvkxgoTLwNG4xsI5AaJpNThSQhZqIeoC/swdcf1LJoBpL7sZF2KmRWKJ1tML+v6JOBKaEP8fzZcsGyS4FxBE5yEg==';const _IH='9194367c8a0e80b78622b2cf2f9d0ee0e93015b6d7ade7da2c205f304440bebe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
