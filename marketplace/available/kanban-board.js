// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gEc6v6c6EtRYf3GomS2FpZoMq6bC/ZXt3sdBAZ8BfrV6zuMRpuoidZ7RLrLPLclBJK66JQnjaxpm/ICNzcxi2F4oiTKV/yHAN3M6d7/2oVC1wSVF9Ma4T28YLUna5+fihfBU7lCbRZtY067iMhm8wWbSJatqrDgqIYiB6/rxlAbZJy5TAthZu2ObHYAOSAcI6T0WDBwb56ePN781JgnT07mdBbdWYZq6yQmSpfvpZUlQmeecaqSrZ04tLy8/XYfphcTa7pBk3wy8zVJxQ0s4a3D9+tB4VFvPPD0ho+nLXCbwsJy0O6vRFe0cZ3VP4yEzRXNKwQWfNL6bIM1imuGt+v9QxHxHvZq2abkXeJhUd57LwuBF7HeeA9U3GaqDXAWhI5I8BTeSC06LpV8R5QzPmkfmJOcbIyTZ61vlVyiIBH6Nqrfd8GzPcNbF+q8VzXyWsfRVFQf0D8MwtsBFaKf9KpHqCF9Qn31WfhviVS6dYCgcxh0H3h9D89Sn66Ubqhvu630QR6Cl0zphuO1NBJcsHXHaRDRZWlOHTRzUP+NZZ9b7O3+wNoyJccI0ZA17vCqJZKoX4VeYdO4JU0TJ';const _IH='6f1527b7a332052b220a3f07d785d7bb1679fa58a4a7bf039bd63942219ec0be';let _src;

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
