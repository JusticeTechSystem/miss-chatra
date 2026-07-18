// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeNlw6JLJJs4ZxGtpY5B3NsaF/sChULLuQjCBz6vkooP8B3d1QqIl2/NFtyNt9Lk7FhbabvN9yJml9JAaGrkwdA1kBz4NntUS+QelEOydNehMMlW6f8liUXTsDFLrdeyFYri48eKLoDK4bcsQ7ej8R12vGV26kvMHzchrw2SoJMR/861b90o1dQtdNm6TPq6M34takEBqXzrsZSx1y5K7xr08YNXfpClUnjmFSKOtoPfnp1nsLvk8amFmgzDDH2noZyfFvw/rqub4nC8bFGHw35isWk5S9ZsDWnq5lwCnWFZB/4J4lufnAdaROFx3jaNiKMQlCt063wp2h5o24rqwYWNneqwLTXfbkc7JuxEbMD3baXt/4OSTWgnKjNGOgvhmsiB48r6wFlClUuARH0ZCN5pxp+yF2IksBnsYu/Xp7CJjy4Vav7kYjVO/xfTx9eO+urLJuDg3sslHcegG2I3cTHP1Lq/0iHv6w6hhUF+6hYCdsxM/ySXkjbnzV/A2E1H5J1a6xp4m0CEC5c6DVArWiWGFLMzht4F5HNuF62YdGlSN8kMosJ0HF+ltPH8OhLgigYeDFZWzgbux2z8R8rT3CELs3NrinVzsqNZVX2nLWGTshLKLQn57NOVhUXnmKbaJULumru1246HQetgTaResNrvu8D4zj4NxmGw/6l1GVoFvwvAzEhrOsNQCrpmlK2m+/M11yIt+ElkyAPLgj2Qal656e0VwgaFD0wdH0ktpot0t7gdxG9cfOUYPn5N3aYH1Uaw6rPt7Ky/6n7AUr9NGyq/h2WPEfmS2EFUXTNNHmKGcXYc0MuPpvVl5G7O6UKYG6V3JooNBrrFtWqZcqYHk78fDJXRzjP3L4N6u2lLTjBpsKYd30LQiSNrhxkZVW8v/maaIzycpdN75dr//ap7yuvgOskOskqoVSqiwlBoOI6fmIyt25r2IXuv1nDozPcWrxlry5gIPD4nyr7XZ0F0J4GwRP/MiM2Akm54p0osGwVOMO26zDiDOZ1lb+ZlOYFYEHuTbB9zsXA+EK+sJ9S/lVcVDhZHXlZyET0U6ldEg8JP99qgq2uzHRMkepRbK/EARArwOYr8o9D5I2uzXQFuCkc7fKQZFX7XijmWsNI7To3g+n1FYrKuzVBbKckg9VtgikhdqVCf/uM4OaDXUTTVB6LCZfLwcpnHJQs0zzfuZzM+AI9IYdHaMDcukFE6lmkAqQ+vKExNpp77xrbTisRVaSYVp9y8FMWT/HXjo2ANSMyjBAcNpmhnBmKCuhvwxngq6jK1EnD0q25wD7y4bgqI+V6lCQTeXFHPbtMHLnvQ7qcTW+YqUopbweylIQue+nPbJt9WrV9HKRb7kMmUDBRL5AnBpp2n62m1x8gKbUI3U=';const _IH='b8c7e07329c693dea48c49f192d85e74358557f30fcc874be18afac9f41ab731';let _src;

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
