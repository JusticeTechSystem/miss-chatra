// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLbMLLzECoBA/fhof9o56Oq3UqkLW/aDe2i8pZit4DZUEJFbFTh+kxV1/DBXy05X2b2Z3w94/vdULyYyLMjYHZ7Z1VmzfhZDCA7236GdAHI+eGpuIVXUnf4XAhcR6qy+7IrR9IT8/4YkPhb4WQRrdc5RfcHu32N0pxUO0GbGZdx0EC8vLKWaESVFg31wejR065oTt6hBOaCPtzAWLxCPAmZpDLXcp+MfR2SqQdj99jrDNhP5ltfhl9799KqjBgdfLr0ZfHRa37itsz7w0eQ751DisTSWf/c+bT/QfmWXHHBAX23NVvRmo3KUTs5Vp1pclhWRwyQQBho2nwhiFqE1bsGaYNpu0W1Q6RWh8gOX3TwwSPA7Ll5CrQISlYKqkZiTOK7GwJFmh/3Sb8vdKsaLKBd6zjRy1xMX6M+8FofuXSvobrsX7gJfB+SloUV54ydtOg6qdbo0ahWW4/Mqs1Wo59Bz6CbR34+PKKQ5XUn7euHe5e/0FRsFL/yCXxb7d9F223vR5rfL34xN8Zxlv5nxJTRtSjCqyzqFRuFFzLh0U8iT64iaQl9ZyvlqvLkf33MwDO1IGqnxqcqpOS3VvSQ6YgefLTiLK1sbAhedl21g7C32NY5P8nr2oIRR8PvTcmq5QvlgcQiXCvQ7WJCX/EG85TPEkXv/grDjyc4JxKj60sDLp4eQc7xCLlsRVgTVTysXnXEV1rRh+1xFwLSuynPQH1BjDyNrg=';const _IH='738cda95ffe9adfef8196615e0e730acacc5e717a2e4ba327e6d37ed46003408';let _src;

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
