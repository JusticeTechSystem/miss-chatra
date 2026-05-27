// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EgTfOZPNjtsMRlOqqUou2cqCyhh65EI8f9J5e0irJJnbtToiw+CJJKBitsSuDBaTiFsO4qXuUmKCgQzhuFbMoPe94kC95k8VhTGqQC+JZOIdbTZ80DLaSJowcatDueD9/bPKaAyIBkJwWkrfkjd0x5LBF20arzMC5PAP1keMGyU3n518IrUcYgATxwa5F5fyzLmp0eNZgQ0MXNXe3zuQV0IYS19ypzbXeG6d5VVEVzt4jySgC+CMXQ710XqvUJN89Af75rqgm9YlcG9LYt0RmLvMihdXszUdNK1NqFQYSD3GZtffv21QTVk33cl5hkvFPyei28kUEH1HPkt3bmcdhoCeQPne0SwZbrn9FhZ6cmTzLdLS0CR5Knjl0ClfkMqh9ez3trEYEanUbdQaLhhgA5QsyQqru9fQsZsc6lKziUs0dTEetJdwYaUyxuypvB87m9yc/hR9JMZRj9kGl+P52QzSrSGYES/RkaJXYDwl5uRkALxJ+6F0jZJnGuWi3SkPDJrFDxYc/xF7NBnAPoyaFjs1dF68LI2Rm+cmoZE2C2iZ5LV9w9SCHKe2gHkoqmyrkcM5UNTWSpKJOEbvtC2TH1+fd8NXyzEKqYTSNBF/ot1alRkJcKH66X7vxDDvM8F51cMaZcYDOVJ93BuEgXFA9Z0vCCheJ5Di6/v8v4Agk1XNssMjtnJuY2s/RMXQBh+EesKKsU9Py5Wc2FtirlKgTfBtJintBwe/y/3lbarROngsu7F+d9XkyuRJAJwDRwEKMwj8RTY9GZLDQ7WvriDutFav7yhCG4XJZdhUs4Qlu5bQxa2R2mfoSKc+zmeFxgVn+ns5iQPpjhytO7Va8R9TupGzGf4u03qjwMS6jLJOcLcIYBE6zDiL0f54mKZMy4oqgGp604CW0T18Vs5hZTBCig1Pz3JGHNPGJ8TMkC+PqdqN02vuSjGzAvkOqRUDAFOvUSloKqHnOC8Vc2vJ8X+Kj5IDpUbes4qPVpLygdTUU26ci33xJ6nRfyHGZ+28sLFKlA==';const _IH='a2fe138979e15afc12ddc5aabeee22678969b4c39b4df320ddc4aaf6ba3f3890';let _src;

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
