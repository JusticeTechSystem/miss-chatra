// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxhpxvr6kYI1fNg6t8aQOgALHFaTpEN1FBYcy/oGt4caRTc7rh3asyM6tBj/OUYGEtprLcKGDhHvwxe2wzi0K3lJZbGm6wpiT9tRIdlYR3vTl3ZwYIj26NgLWHpCVugEK0T0lMQdpE2TVrcgrUcUv+XdtF6gJK9k5Dsvvo58gOrZ1lFxgd/48CtrbyhDY23AImUMcXEA+l8NRSNO5pmsIlC/kgftMBxQnE0PnPAZ/ViYe5UakIhnm2hxowICy+/eVGpLS3mdYEYDgozaAF1gqt6vJ6M9jjCQhJYTU7Adjvzk4aAXY9v3ILHk8xXtIqPb7KkAVDjeUdwkggC1s30WmHPoxMWmZp8oLmnzSwVONAX4hiBZuXesvxCbp1dlGqU/4WZg/ZJrOVb5OfYZBWJ3lTVDlQij2oC/eoJuh90trjYIHffkZBMLtEr2p8DT1n7LctN2LIpj/fiLJnrzJLs6nD7KsElsq0tB7+N8K/fa3BWZP+qNweDtAb+hRYFQYvmadcKXT7GN9xT9qKh2EzKXSDYPeupE0v6nWPuJAcEVjfCVluv9qHMcO1F2e5r3RbKwKq/AS7XeM07p++3WDsYaufPe+VKMKsP0Ft2QPiwotBBQ5Ahbp5qvkq76+IwY0pKW9MCB61hsvV/PBkaZPdCJCfoit7zc9l6Z32ZTE6+GHgwZc75Po8rg/LkVqwMP44tABQwtDdjs4F2HBJvlDTm9Eei8JGDOxTNxTYVjhUafZMjhOO3P2mvOpVGxNlrCpqaR6ZUoOCqzuuxcJJDbCuGVqabRKej36QS8tbQMmeL5VOXFP4y5N9mFIlsWpW8Hy9+hbFktCKELJdOdORhb/Gwo1933+hSPWfWgE1KHpqSTFLTVuBrcd1+VEA0NkWhxISgD/4qPEABhv+/BNPpz6xEndzsjJOyxQPVU2vIHiyUKBaVsUcqUgoUMGHM15kWX7aVxSJtjhDgPSx1rcjtIkyswJIImP9FLv4mOHDIujOMDMffldZBRRTG7PuUpItbTsLMmdQyjoyXwVnTxeocuV7TLeJUArORk/0xJqcC2kBRLxAZ0Cc';const _IH='c099a040eb263c53ea770713edf5111507cf4f1e4ebe1c62941445a3755159e9';let _src;

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
