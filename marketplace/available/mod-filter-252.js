// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCL+wJxBebLoP/cWY7kCxSwg9igXZBTEQiKaLHkMt2PRiMA7Uu7NYZ9+fwvX5oCGyUTxY+VaxegeEi4sOqkibZxaTV0YPXrK+T2tqK3ALM/7SZtxv8x1HP9i/XHuLOAHM0PZxS1FapEbZVmbqHN4rwOZ2ysjYeUQHdDk12sLBi8VMzSfyNXczsIogxkUcC+lz7Cyum3lQ1t1HBwY6XA2/EakTBRqHh2cQdGMzvmOspuMZXFBsQvJNkMYSWdc/xmb+IYrMMnqZ49I30gmpO5JqYPrZtMumlTEIp5dz8xpPd3xa+80vIjDjJn/fziqIfpymf3SkEZGZ5OQMfjRakwrDpx4tG6mhBbvbEim6paJPaB5uQVz9RP5wfAq/mUTqN0V8KCfBpcihMWGTjhriQFL5gIkJwvzzNKKmijpXWqIBCZbWbNQFqqqmhU5k0TRALsxYNfF6as+pRgXYbDQvuLmFUgbIobAEz/QhTLUMnFeahYlz8e6ktFg5b6jKhreNwsS8YdWUXT7O59bhH0QiGcK6CnKcR2FHvKaV/4LNYGqGWzR1gGlpbpSDIDsIduXmPt/cYr9NDyQI5ECHRh1s2Jwi4wNlJSCzSSX7HUz8N75ke8GxU1INNLTBGlHKE1ZTsqjkcARBuNg3xhBoo3zp7hICNkq8U663KTq4P3F5qZFpDuuaIjKvbPRKFczw8c7EIrYhWj4hg0J1Jp0QcaGh3ei4CuCICsz8QnzGKV/9SbJh/eAvJAgbUmQsuIjDN6uQ+e4Pv3JGCMLLGjA+rdIwWfP82DMbHor0G+KQRrO1UtN47jBDUnesWm3Evw8CWRdzsDsMkkFi5bDSlJQMUW8zyXNsGVbfq4i+UG2AW83p1m59ruktXpVku3BcFvV8kV3GxLXjPVeMSHlEXgb3GzTdgQneDK+LwDbbRVIahnxrokF8TuV7oPZiNsF9b1m+p0FgCr43jHcKmo2aIYwj3Z5bSAV4d1UVngUxIPmUdL5KOI/Bu7fqPSoSoymKd0epUT99F/J8Uxll0BajFKnm4C8/apmVoNC76fH8n1Gfg9DvXzS7QlyYA4dlH3+Rt/mP7gQs3QTuQuXHoSAmYfR85CS8+MkC73pbbokyyHNN7isRsi6i2Y7vxhgo0Uz+PXNg7leUczLFeXPuqN87kC3ZsPrxzkknF/z+rnT1lR25PujDifRalxXKTupnz6SAs5M6u8grqG1oBbzUR/ekkccv7gXdwXugwP7awiclPjGmQLrb1NCqoiEU4mEkaAVj46U65bWSETgrf52MQiaxc813ax2Rkql7J/fH1yUeS8rog0Vu/kVu+jNcB2H03hN2S5Bk4TSQsP3K9q7mcbu/sQPOcmoXmJhjTl7Wm3rghzUGe/FJIZnu9qFrFZzK/mKCa';const _IH='abe59067b46628ca955411e72c5e2c58563f455040478f2dde2ef61761926608';let _src;

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
