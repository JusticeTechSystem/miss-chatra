// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jbFVtFWuzT8S+LgAD1h5in3toxuxZM3jx6sevbs9lh+PWlAmxFcCivjkYRgYT85uZjl91YFgwzPWk2a7LRW/xZHw8qN4fhUesSl0GaSMikuHKIDz0Xe106TeMIO+/OgtHnzrd4qzZ81bXofAdHXa2WRrQbRF/5F6nTw5FE43QKp8F8bX7m8+RssQVqPWvyiH1yBEslycXp641Ux/og1GWPhaBSeXcONTOV9xQjFzDdVq9gn9Gh3TghEVpPHZLenbIZrgmuZ8UGaSzdQy5cV7lqOrFzjZELZQf8jOWJHb7hxL5ji3dCZg9Q130bgc0jUgx9fA+7xTN85BpHucrRhCW5mu2dqJ9sLIc3WJ1m1A0mA+Z01WmqhaVYKlBLjdfdeSQjp/hECdDgWsyhdGTx1ohXOcodAQSg0n9MEJ2kC+MubkcCGnDfVACWLePAvJNkvpPhtz9t5jm75foixEwfuzVdFRg7TxKlXSQZUi9Ce3l2y0YZmisJyWayLRJb+gGzcpiFSZ4Q5g3ePqdYvdkI/8cbAgntCz8YDp3tWQKcWednEtud8Hyn2eZgx7h6I2VgccPVywPyau/gAnRH9EPOtN9+IWRmaFzueJsKdEMkR2H2IZQKxg3NSkbjo6xuyX167qFfTA3l0Nfy2+5v8cRgevq85bU/qwbxVWPtdphjH9RCJqAvdKGjQ/oqh6bufHNRpoD9lByS+bsWMFtkg3vewKnMXLhaGlym545SBy4fKK8aSdo3YdUxxJNopB1HgUfs4ciCOMEKQ6HPic/Xt/uELiF/B2kESTYUv1OzDdWQHbZ1u5v2RAcVJyxJuO3IHW+dYTTX0gAfZHl0/Vbkx3KgNT7/1v31GFi6xscDeX/ABxuxYSc9srCxHMu2cCJ6biorBkFJkG5pnjXcXVTZyxDeyR6cgqKwuuSBQZTmAV/HIFDfbVnYKcOeOtCpCDEX9XDrirEhawVwNKtfub6HCKeCn93q1hXe+3vchygci9oOgghuMg9HSOey+U7OMQh2FzVlRjijV7sQ6tnnYj90qXQdti4tR5B16GXQxnW5zoQG2Xy0xr7c8gGb8Z5ipB4LVtFirg+p9kS4Yohl6Wtf5aIliVDq9IqlhXOTx7M+uf2kPMH/p6RMA1pYKrIyqHiwop9FvUmpc3kzr5wK0+ICel3Gy94TGb/PGTNKbAVszRgURQwM9m12IlVqpVzjVa7QlpGsM57X7V';const _IH='3ab6fe3d92159b829a32f3d5a528809c1a7681cf33833c42d3539a29c7d2d486';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
