// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yHKoz6Llpe2d9wc64XX4cv50lgIbhKe2zJyK+hc1qLzEwG6TeIq/Kli+4dsxeCiy4mpCoDjdziCF9GPI22S9O/Nj4lKOO4VN+OFPecFUq7aZ0ktbhDFdxNU8ZVutOjbh76tmeq0ezCS0RpAgVocydtoCSV83k8N04f2EHQ0SgjML6SalsSx/s/nwzvsJVZgno+qaqIabywigNaEEzkw7PXq9peRK4NnELCKOnhF+h9bnR702Pz6vNohS24fYqjiBFRRNiOmH0PTgOcbjrMSHSA8suYDz/Ks1uiamDvmJ22GBHzKs1qLl1fJ1K5wg6wVx8Ua/fq6bLRvZJYeWJsyad7pJdMMXM9adzkmj5ffOZo/AY3dmr+X7p3aCeIpGcqIVsLLspBGgPngGVxmEBX45PNtwBMKN+ECYdNLXIyy33CrNO+6jwvkLGemX70LId0hnJyNKtZFj/+0qH8ZbjEH99TptFIktidJFLGV7FpUAZhSrsxn7G09cICxgC1X+TYuRIa8e1bwinVjGnO9WoXQ6SxdCV+ksB/t3fwDdduDinvOKCNzG2+zfqD1zZ4GU9DNp9KH+/kaK+wuMGLJyQCIIGKAYJHauqZIOLd24WVbcvCOgCnyqOoFxIPfSpU5X0exhaNg2RuZ/g9WJ07RrBEVNKTWtribYMOpptWGiUj2pdPjyDS0VLIPYFaXFbsaxWZTqjsgg1XJmyumruxcsIcDKOLBuEiec+EJxd2oZeHu6k0BKgm8AMyVzmsYDXQjsW0cADNJDpPWLsmtR3m6a5FaUEa/lk124HBQ3dukD/8v+55jrPhE4QihpHxjgk6ac02du91GaY6k4R2WgCnxjiELBDR4XH4vd7FtJn3pN/Zk0HUOHJEIwQHVnUB6FFMlcT7ykMzMAMM8cW9YMJh80XbuhilF4PBmMDJOgMxZ4n2FhI5hINNhoFKAd0O7aVmw6fD/2wTGUpyy00anQ7Xvn1iNv2rVK4bNhN4x84KAFazE03NMrO4t43zgwAr7xj4Xp/lW0U9uQIJPomfN+ndWyyRxSVAs7a1PJWdceMXlON0ZVOCap7IBy+vCD42h7mhc4kmyWk1jqD1/gTIgg6lexHvEZ816hEzKQYySBwZajNLTKv5BCHUHDfBLq/bnS/DPK6P6ewg4RagnnMEUf2z5RTBdo3IsV+G76tLlnCU6q9dBklnGkBQsT9BMnR4Un7wHdMK09JB/zYZhS5+ANVe542EsFYhNuHfrJREVGvdWH0QaDWMwAhJap+cbS4kwjb6vdGfd1ANFK+mYEH9L4a1ZzWTs5zjwxc7JG2VHofBopVb+pItsz/BMSo2n5AYwniBs2cjVRAUBYZNiqWQLKe1xl/3BJeKFjqDvY+/nZn/g+Ta/uMUNbcpn+vZnQuKi9PR4x0tHthBXRrNWCjNSs0Ne+';const _IH='4c0c3b85543d812ac748b9d9909965277ac991e0b2d01e213b078440cfb76503';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
