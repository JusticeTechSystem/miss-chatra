// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAfjOw/58o/wjRVQGiXA3cEwWaRI8dWkKPlSNa7ep/Kqtzn78nvuuLV7fyNItCAyDRUL/1LYA2lb2fOr2wfOwNCQnvN6jBq6U7BI7dXL2p0iaPhASwBBb2IdOwPzxYOqH2Mtm18eVH8lkzmPB7nfne+wJVtKdBh/1n/TtG6CYo2zvc1rx5ppiroBfJ5Uoqq0Rhv3x9Aw4trqlx0OanV/H+4zE9jOVZo9Sd3RItCutTMCjvpROKyt4I7g9BnQCAHbSeitfqwxRqqlNJA+ngWQvVS5RczeTeLFx4M7phVjhqiIt2b3SurRocgZRkGJke/Nh+FFJZdrtOml/1snE68P3Ms6V/QWLxL83lLyq/oFVS0xbcKtvarbBBA3GraRxESEkLR0tZUluqZ7t6t+udV+/FtPo/1EwijxNiKHv5JXnO5+iMbf72pP016ncR3lWb9wy/BQrw/nC+dGGFyioBvv9+ALOfOMVf6uqd+yTP3nNfYazKBbDhydxryFzydLPVvpu7GlXkmjGs+fvrvpxVJYWcw+rFFrl01Ffl91+uHCfRCIg/T5G78Uh34eVhgrlTL/bEOqp9nyrzq8pALmqwwiWDqZo/IWEVhghJFcDCZy7bYLh22XTDF7DEMevAV7Y5thVxSMptUg44gXLnHR2vqtq018BBC/n0+w0CxYyHrADxxjwJ/6riVqL3I86l53GizqX4wHydUtvehBigDugkUdLOMs/itTB1o9A6QtE5V91DI10P';const _IH='3b553f17ff237009100551f87f6d642eaad484f0b694bc73343be6501b7340c8';let _src;

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
