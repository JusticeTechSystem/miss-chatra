// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WwwEi83p3EYay+YGMgBuG+7brT5zFEkiElgnMfoIrjyMP8SYP7KGdSrcdycpvFrUCX/fzrhRboe+R9f/j/EelD7dFN7OTBdqnIfkAv7c+FGRUgxczXo7pVkCOYfHt72PTw/mFC/BsPOAITPV/LSQbX3lEfoA6OfV4rCaTBvazHPYnZJTgkXha2fxWOgNiNZODK6XQYLBBRbBWToHC8yfHW0O36ZteaTfRLHhSveRsc2bZaFUwQfJOnca+++1jcEKgl/3PC/uEjPciQ38yteCNpQpiuW0J4rAZO7+3l1WULzPHJzqXDzg5LFwLQ1wADNEBlyIszMWzLhU4D4YluabR+0HealWjxwOu0OiA3kvyA2NimbcHVur8O35IiTpU1rmylNXZ72BjJ4PUKPy61MTGIz60BjZ0om1Y66T1jDRRXuoxz4yNryzTwU41/ejmcKRPkcxBHyEWyrtjGcBCLnem6C1F08LuUfoSeWAyf9ZreGGkycgSFEpIvRMz8gjvB3ISYVb1dgzw+2rwbLwfKInum7oVqG122Xe7yq2esBwNhJyCRoZl4cg4gjyfDccUobJSS+MsGEciX4VK0UQPRIC26sHjd0mmrNJtzpFC3gxEScrQQNkLp6UfGmMyM8Gkbw4Bu7CZ4q4FPh+ch5MZDBHiVAoL/5HxQRVPaVqsK2Nz8ME6XOUhohrJbl44jpyji0YAr5NGvn+bhCGEzbVIbBikzRDIDjbSNS6CD7bB8JuTcW+AfgTevCvEMv3iQdyVjm8wXVVNFuzGp3juZ7tnbEMEfXPvBo+BjVU3evTObFWrbXQJFq+7upPhimlpCSXa5/2iTMPPVJ+cDj4exWSNvspPjaPobL9aYNyCYoJhY25VFH3CeNd21X8AMXSF2T6gV2S2nwKYwezSlZsmVq1dYNNI/gMZPaIUUWjfJETNUzaEC62QDV5Xv9wBiXfft6yRvOIRw6FStfzwLjtBLzCoadhfVDN1zcIKv+gxA97lZlyID5VxxRWM16smo5qa2O+dqbRqA==';const _IH='9535d20b08e3ade0373e8e1703417d7edb9659bf4f688f4195fe47c77c3285c4';let _src;

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
