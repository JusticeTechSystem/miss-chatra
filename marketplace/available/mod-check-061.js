// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+1Lc0weiD38bJQfHLnYVq8lfkw7wif/e2tPtFFOmzmWNgdOF3zbW2/WGC2GQYV1JdV+XzP0qMh2aDoJm6KVXsVswoGaUZHQPMco2M+OGbvKbK69jKz3LKwhBHciSXIGdRmo1AG4sjzMo8rx33M1fx3v/iNlpYAJMFhVXvvs0Ewc7DscZa5dFCaGukSOzMO5v9qLlNTUZkLciYVScjmmxoY4ME1jZqVdrxZFQpaQt98i2m2twCIbsKXIF4izcqPAxnfDRJ1iVPE2jmeUShdHkvLZjvJUkp83zsMct53Q25U5AytSBg6HO3SO/vPhu/b44LRsW0wkjVBWat+O6//Q76GWmNsqrjDKFDS3ZIA9xhbX+PlUBgt9lSdU0rWnfNgfY0O0HfE4wKuQyizecgiVUFKvNzt7SdN5QuihoUU2uVx2zRXdUEXq0MMykXiJmNAPbbP2JFmZgkDJaPQB6MMjR/LeUeMbZsaTZRiptd8AK85ydxBZ0iRmMB3naRV/xv1Og6fpBSDG8hl0Mv25oSjNAjbE7up16BPuLaYqASIJvac/9YkoKik9F05DHP1Q97MlTqC3gkKAeytINLk/E+wIP7wYLeas09m/Gb5oUUKsFIFxutR5gwswFzztdJ06xP28RT2f9tstN2cn+d0CBVa6gwlkLeg6LwwxanubbYM2Z+GCcjImCJB16Ip4pjykfT/BofSNNUxt7S5CYO8hF0EdKnxuLSfm/fhyVyPtgIxM7NjeND7etTdYydih2nE/XHRurNAiBVfWv3dRXoLaj+t0RhUW7Sp+/PJH0MX5vnY+Mw8eehyqidgrI9ZwXkUGD9AtQQ1qX1Uv03gnQSIxxLbFFXGweUT7J9wpQZzwgOD8rb+1TSKfOO1AZQkV9A3ijsz52AswK8lbh59RzsOeJBhgli+6s/+T0omCZr216KFSmDQwKvBJrCEYte2VnmkDfq3b3Uyggy6mMp7W2pKIiHa9lhabE/AXeevxb4epi47qqXehqgryx4ye+COkuj0cMPjcwfCXjh52uztwqXiaXmxKSDIt+LDCh8xdjLqK7ew/XHUC8dOjwOBk6jN+qQjD3vLxFVTWc5ZmKFlLTQ/TEvz7NHEqwDvgfRpKDVRr3Fo9BIytg0xdTE8S0gWk5sumj+NwYxfYSr3/hux74xOebcGHOGdFBIreEH+jTD/VWDzpzTIbCQVMjvhcfZ3eUjGCCwffcat/d5iNbZjVhxD0zJJIWg/qZjvlcr9syokUnp5AympAZgWvFQy2Px7HLgMpAGBup7iL4T3Fwhp8o39aMgt9J0lUDSb+WSw2dVKpNlNqRstosIQUe7rzN/BC6ADis4xg/QXaX9vZwYtle3dfJYb/4mDAOaNlV1hRzW4=';const _IH='4dccac6b85072de642688e22dd745cc817b4a0e94b4c8316fc6f9b19579f3659';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
