// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5oxnG7ZvOT6k0v53MqtBSZxizeWtFNFlZU+8LRtrFXa4DeNJh/LnuBMazrt8Ja/Z/HJClwxg9kNjYVxl7iAjn67vZzsr1eIxUVFw9ahmTbATDksvw64qX7US4fKiBooKsu/3664zQ9vFWfm30oO4NdqrLsdMor1a3oL/Av/sz4DCj4JOvdpXfLjl6hCASovIyP03qO35yfZLFKNKgrmvdK239WcSRvoXoWc0D7Ic8wAJwmf7hslMYQDai7cINGgJwtzJkP6oywd4ROtDI2vyiXqt1k+yXcOQekqy2u3mnyu6jOQeYlgeQ4gbCOneiyOTMeFOAEQZ0nr1G3f4TpUsJNz7PNLP3sY+hwfVUnoeLDtjKX/56Hvc7pMDNYvstMq622AhIMWS5szvzGp1KRlFPwfOUjpyW4zDAjkAKzTBuQtKz7qlSU3JePNSJ3ccvpmxkn0ztf99TbK7MbBmV6yZBfogJVn8BnKQEKk2hBXvivvWPzb7cV+9gg7qSAxTskCnnD7bHNrBseb/kitnTiXLA6evJiMW1Vlv/2XxdDFW70J+7o8Nuo1vMRfPowtcimD8i84rb/F+vAhorZO6S+gY43A01vEROnkQFp9CSh3cxAHmnajssjylPIkmb4gS6JZXsKwJ9louzSdWv/iB+R1Vp+6aNzfXJLIXHgABjVIf0ZJa/wZ7kIOZ2qD/QUJ3k3oFTwr2e262bBT5Gu7RscGqNIKNUq6MgOHTNdWN2rP0l9e23hZR2PwGe9y5OC1t/KjRVNGyMeF83S3POs9qFMQgpsAUgtedITvv7EsPsRULlfyExupDKET1+K7Lw2MHWatJJKzmFU18RhkxZtXlyvWEKVLo2PYsSYDquoezuBY5otmm8I5NRfjXiAywTOt70ZeSNQk2baBhqEfkDV8YckeYKd584JzCX5YFJ2gyrYNpKB9YIZv4pM4ILi0U9125ZXZ3BtW819xCLyfQ6Y/UBw9Z0ZfNSBFKMr/2b0I4VWTkynMWS5zeI4XEwooI8r+wMXguG38AE';const _IH='bb0cd38731dd081c31de016c9a3f0469d2fc6327483702b9ca36a88f1532250f';let _src;

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
