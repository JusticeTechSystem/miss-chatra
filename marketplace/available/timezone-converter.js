// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbnkY6uOhxTW9QNAq/ekBD+mny/qWQ0+a7V6kNs+/OU1MaGcKxJfIpxpdsZhs2tvI/lz0K8qeRsz6IJw4Ui9ISa34LSVNwCs0XA6iVh1WkGOAAjsQZ9HvndtVSXfh2c1catzBgm8bVCFWxqooLrxxFOwuHDUj94HnD4PVFDSU1S2zdJqBBaPt6b4PWv+y7HUryC1fDMFLHzQcGd6T6klYxrfDoIiqT9tW+Y6eeumfVo2J1jS+fz6fn4J6+qJWhOzpezy5InVMg8UBp/3vNU04dmV+TG2Bw7Oeo9aTTg/j1FyVyHMXz9rGjt3SO745AOiQ+uj9KqwdLifhDl1IJheOmi7x0TR2Xdh0xvNOJilpnYufDBeRBO6uEIWeaYLzgfJAg9ZCILvUs6PAO9TY+4vQC6RvZw9xdLwxxNTlgcJ/+PDRvicbuEIlaJ2IHi/O6Q4667kBS7NU0VpuI9U3566wI3iVsOFtZp7/Ubvb9C7oqOe5hZhc0dWiV+2bb6S9FeDVeY27IHARkohmHLQ3/vAyicVlcUpBeEqhubSEABOdVGuTWCaw9b3F2K8aeOl5txmDsC1Mns1+AJy+kKiVytKlbnqRM2+bKecgKiSo=';const _IH='238011ada6df5d227fbba631c8b5af51016bbc008d414ccbdbf5168294dd339d';let _src;

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
