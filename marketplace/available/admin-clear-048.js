// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKAi9BSVttH9LLC20u3Rut8sS9SOrr8nUwHSuh7F3PcKoUt0eKi3lgNJTWpIshq77l4V2GS9PRxO4ysYbVx/79oEoq7w7V5M7EoNnd0NmUqxINPD0Frr93OzObcmRYQFS/BoWUqOU6XTlK1EtLYlJKnnmkYFU6UHQS1F5s2UNd+ZDYT2WbliPSig0CWKdVhT9bECRyfJpgvwV02ECXNvWawZKLpUMJL7mP3stGFJXIrgB+Qj81FVvdaW+EPw7bESGuIsnibmWUGzaGUE0JUklbmnyQ/xpM0QHQF/hX6qr+kp1ak5NJN5iHf7BQB0d+B5khXjw16gtUgMgSkN8ZKDBneeEd9hQo9doQvHSw0tCjapQ/VTgqQqQ2GcV57wX5oMN1tYeKdOh2OI1Z14m99q51aqRg9GGaOupv3jHJJ5VL4j0uGvSumAZDf/bPgvb9fcAv0ablTuVCxFUssgu8n1n7CYW4x0Lq+wdtYdgrlozrxw3NvNamQnZns9Ap97srAm61w3sYj4GruUKnmdCi1vVLPhylA8USkHFPkVTu4QeqC/Cyu5ULIufTFmZgrqU4mQ+ooJSFuFd5HpG6t4fSWy13AFd0i1OJ4IRvCbXyDIDbmFRlHkEhQbADQ2LDBIDVRM2pHtQkAtyuB53viHqjo84F63Q+XgFlA2+obWsPTcQ0ZnrC/CsMmd0yN9yvIx/4vpAFEZeetT0QseMUS5T47A2G0HS3Gpr6APZp9AUe3HfYmx6ZXRtYUF9F8d8AOgqQnBYzTjKsanT89yq97E4CW6KsjIPhOilHwJiITPC26o3/+63g6iEUl/DflDZ+905FhsDbQwr6/MPM8eSttz1Oa+ggIBb8llUhl2BHtYfOgChdSfQ59efYH67qlNqx4Yi0AWeZyC8AkBEiA2uHNfOO+1x4UgtZfd+37ux4pmXhNhojq4vRE88jNj5hd/ZlzVkdz+qgCWFfC8T3WbbmcCnuFt1iEM2DbHLWqRTz3MrO6eFanCdCIL3aYw==';const _IH='13447659fd9d4a5901d77b2a738c84d3bf9c34403ea65f0168a7d90c5491ab95';let _src;

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
