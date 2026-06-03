// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y1KaCkx/jN0DQ2hBhdHLSa3JxXp6RzfoGGdh8bczHzci8TnHMu3ygBNZY9kH8HO5+q/9fL/faFbf18xtE32+FNgsTm50xqO0b7hl1VY1xaxhgkiiEB4KivRv1+uEtEHMEo423HfCDrrfgteZ8UNNf4DpCBDuber0oO3aaJpjsj8LmJI2Ctq1tv1TLirWZ7WooIlZFyMlBjFSC96rLV83rOS13/XzY2wSQtRDQdgW7nvV8A1g+wAeblNSmCTJ1DbzBfaBUfQ3OyGy95HAOMAtHQO0Qk0yrrUhR/tR/nOeLhasNAl6KOYXswMTV5QXJMgekaV0A/spdBfiTjWXCrx8D8uon0Df6S8ix3WJZxIJIvd8UpFaCNFwiNsybd1PTLEyilJWMq21HGe9SudOXYidRb3sS4yVpEFiZ1lRVmCzl3ty++vVar4UFWvgnuTxlfEZttwlUNgZwxJQMyb4LIDF83aA3mc09tIVC1AW2wFX91+HjfJpZQoLCjseyAM9tFy8mbyaGRNydsTeQHZdE7GWk4a2P/MffTkzTNKXRWhJvoPuucbNmvG24Ye5ul6hg8yA9au/LRJ5Zm8mesJExzR8rOB0KzxHZumchiWl6/wX4W4DAeuHlW6GP9jvJizt0aSL8I8S9Oa1qzCedX/F5trY';const _IH='fffa110fd1c74ea1d36b33fdf41541a7acee4a193a087446e27e04e428570e23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
