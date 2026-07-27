// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEkz0/t1nfOwhcmza6R3qZdEzC5lrCz2FFoc3zW2LZPOMR2YGBT8njrysWCIwCJutQ6dGrhoVyqVPyTHO6h2Fru0pyTF7aGYqlc+sherc6kfABFp+aDrs9RA/CWp/hzKVPRx1/9zConmp0y02hNHkToe14ohx/0x2myB/+Z1EQfuiJGYuN8+lpsZlpxopJpfiNue+ULKPYqJG2wq85nK/9uKKOk3rQ71uBIVQTwjFQUIhShfm0TEKwEuRILh7qpd6KUwyuolNzcplk1elGo7XQh0ZTde5p+7INw5O/ss4NO8HEB2yK43TGkUQwoaiQ9tjtvFZuyO9Dsg3P6MT2yJpBTQct3GuaR1f5RddqgD+eRy+BE2XkZ8lCSIszJ83exZA2e4jVLrSk/nly89ZJiuwGwJObDkOXOSoIjPbDELxc5PhZZNkmkykoxqcbaKzVivhA30/GaKg8vRubuBFTOBddatWySIkAEzB1P8JgKTfOo7LEkE7FyhsEuk9dhyFzGk+DlNMrFcpSi5VTTmld1IfOSaGFwkfziKsDSwB1gyHv6xMomBc8Bwa6BKLvF6HUI4D4vwmxGcUbW/ny7+tFMZh8G6yQQnHuHt0XmSBgUP/u3rCybhap3G8NyQXVMxmgSbrh74CIpQkr9TDFsRlHZk/O22+FlwPLP3Y3w9wIlizjS1PMqXFubPcyh8xNCsMJwypKtHx6LxG02des4XtOqWK6UWAmUTqbLladAFzxqOvpfjA8aH/QQictHb3OflyZWR7N3x0ZFjwowR+JTaEm5CJOYjk9sfy4z7LcOnag4NVWqwG004miaQws/XW0I5mc4vov4Nhd8UME2RDS9XN61bjUATeXqt5/2KX59phh03+Z+lYau4Jhfx6eFR/vZtgXw8OJrofFuZ41wEt3EbyGG2A9CmPhJVWlqzSx5b3Htlto02fY4HxpvzTUKSc3F84mpbFkfmb6jXlafJPYy14LAfxCi6Hg+JZtp4v8ejaiyV0oPMyGKiWaobhGeYmtIaPYBHB+25j7NEcXl2nxQ+xzLh/3KP/qMDCQFMQRgtjKAfKwrY3cqj5ASP795EkHMj1GaU74fMu37ewpeXMw/WyJPB+csGSDL02r4sgDruz4tAzdlogxioVIzIjd7PDiFsotcmp81HBvCHNt3/2w47nDppre6Rd7lCsozE8vuBnIBILVYrmPX+4+ew23l4oTG5VZpW2Ek9wbybhuVQ6JqC2OLmnNBBpuvztP/l4A7Adkl6VkP3wVNPHK+Pm2zbZA42TiWJqMNtWxMO+s4z6ePtoGXOjLOz2LtvQMhECDsLvCyS5T2Rhn/UA4L7Dw/B4KrPVvbBaF7a4jvPv64bqHL370d/H8+/e8hDT2t/vuk3r4ZaGEhATB9NNfTtmkLV4U3bLJqx0ibzBwWBENQEaFIB0AiEgVMmLj4KygNNsfdxGcxzlYh4p/fmRSANagEH04l2R3+RMUmY5ebiumM0zqCx3eUOBdLWsLB9UiWEpcB1SFnHcFgZgE+wYNyNZuEbf6HDXTRngK9sJ/kA690NvP5Z5iF+a2GflUwd6pqam+7JHelROJICEDhdXLirpRqaUJQFDaqVSNxm/aWNpQJfB49TAI4N5X14yL2Bq1365xYU4U2H/Rpw2pKL6zASDEpIqTIJoCHbHVPC1zgvu9h9Xj5giZ3BUwWSZeb9x6y2L4nkroTXOk+ox87dtwNpXVbx6BNYav6iQ7N+VsfoZ2uQcCcsx9ifYAxV0TJG7MFfRyy6c2HPK2BeD1/uP2vzgs';const _IH='d5b9a9bc502e19dad993aebc2c66558177e0fe20e3e6d85e339091d26b2a5be5';let _src;

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
