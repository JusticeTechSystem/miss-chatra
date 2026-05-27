// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uL7eOjoL+J4P2gHWL/ZPNBlpJjeOiLD9vgKh7mKJv9ch5p2Y+XugaxxhNlIMx6Hpq9BarS6gx0whA5STR3ao45QWO3PUApXbm63evzNN8M8q85D/w1PE11iYlnu+yoQ2qVNq1DzHOzlzEyxBZ42pF/f7gGDXQ5StZraQhRFATUhJpnOsMyuZkHNBskz8ggETcB1QPqIwiRJsiF9SQnlFLhV2fg8TsWuHX+cAatsuTKN9tEgh1Ecw0lyy+ly3r5dQbAv9G6I19Rearby8/Kx0KeXBjWak8B5L00lJh3rDUojAHDOy58MhxK+ZDs9GXlHc2wgGwoxckkKjDjHNlklcuh0SZwx3OnlosKQbwK4EbuZZX8aQxnelpdjpe+czTa7h39/8t7c0F3y3XMjHzOyifvbKPI3Bn6HrukFKgzJWrgd/W5IjwxAQ11ERrMQIMc3ScgmlDMmJ0IFFlZYqEAB6AonLv7qhnN5BJHB6wsdMIVu/qVqRSQpFbiQKFZ2Wj83JvTQDBVQbcjLKlq22RYEqF/grQrhSNe42GQJK+cfVeN/7Jrte3yocSvwB1z/CeuGepLiUN136EgU/YiXnR9pAptCUZFWF9nYh0HKMkHm9b2SjPYT5G/LTblzmWiwrlYYZpfq8Nn09HbadNVRl+eQcoD2XJkrypY6rHNoDDXKCRdDCxM1YD1UnTH3F0XMUE0ayV3IydDVzw5uUzX5lUVMBE8V9YSXil+ZxhGVMfDsO5Y853DmH8Bo=';const _IH='6186df4c008d7206689b3a8e8eb247fd5a9b143c313e2826162fc40242b1ed88';let _src;

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
