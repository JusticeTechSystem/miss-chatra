// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IS7LZsctqGuY28SB/P9FqFO4ENTS6jPNhAE0qB+m6u2xwxux3Fu+XdSS6gsKZDWYx9s5ymcG1t8wHZSxnnXwJM3aXRFOhTkYhSISSg0bjUpe3GqZyFA/X17w+1YhlE7qwuUmWiYTti4VpniSTW67TowCUYc/vNng2w0topF+ub3DBiUvqBOA742YipuO7y3ZwIxbFLv61iz7Ug2Zex/aWDNEVtF/PQ+XlR2H8AnLIUXG6hdVU8nOogy08ddRRzgZHe9C/+vlhZo1Q8YOTqpGc2IADIDgPeFrdf8gYHQg6TLbiKPNijrbG487zGK27W4ktkoVHsSRf2cMcI4XnHvwswnypnIP9LXck2Mjav962u0BHorXHmgMCqyiCz4qNe4+RgfJrll6Oz07hCjbuIO4ANOzg8iNbUGnU3TbrulbSRPz484jvdqGodGcs60CEmTcVLsutDmYm7v+zuh6l6xLkNN5uFCXc8I0I2QhUS8LjdHpu6iEgRQIHe2RO3Vv/xz6LUhXNv/297TWumQYZm992M4j/xv1f25ANDLBf04HSA0V7heQPED7RCjD/cE5BdprD3EqDw44lk1F95k3/rShOg/oGwOnXRrPwEytTAv7Vt5pwZp+nX+4bb4F+LJA/C13AM3mtLVUDERxuT/VPBn8qNMO4t1SIrWVloZBHR7MS/GoO4ldNVCz7wyMG4VNcZL73kMOVDk/MTElGQtgEXU4JuwuIwnqblyNrTByRO+aopan0UYqV/uZuNI+ZN7PrhVmr9zfXHPjwiABJ+eHFa7jPZO+RmVFcOu2Q4nW4i7HiAALfkEoUbUlEXNd0P35qeLgw0EBmgYUkaR8zXcUX+gz3usfCkQTB65tYUnDgmGAhLUZMeaMobwgbg8D9EVPWcXMCytCPOG+iE6jXnxYbL0oTHgVBKGTKUhjIItfr3ufwB4MEZljrYTeefVGeP32ORWS1KRuSTIRfrM0wpxlVwuUBngXUL8+jH6/ywFfelyLWH2bM8aLUj9BIyVdtvPfe0S/zJboh5hw2+6ivsjCk1qjg2m2ZreqvUaRr3hwf6oOjFHBVVS/lZA3ZZA7rG9GiizF4an8iheJvrMQC3mzqmr+xw/3QOdqMwZiJl3zYzEF+r4NWmaM0K4N/6njiGy/IOVRAMQA42EGFM8RDsLgKXWg4q7TYAAtmhT2h5bfq57m3PLaSjHPuAnDIo7qZj5VVFioMgBIfQGt2Q3iAzBhhg==';const _IH='5d29693a050f47cd630e4dd1d5fb730342d3c4cb428b767daac2181838e3fc23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
