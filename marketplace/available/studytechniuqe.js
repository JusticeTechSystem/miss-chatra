// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5ZvHqR7Pgq4FLyBztARI4/miLDUFw/cv+YPrzIpZTwDdIXgw7aznchLERkv2uhFZVNN/ubfgr9Q8khDhQrknSwcoskZzRH7UVcO/gN9C30RYwqxvI42vbwLrqWf6KbFKPQYueZ5CcjBlVc5K7FKtqroMrARsuPcwXb5H1GMS3r+BWXn5/g3lAJhmsOqp+MpglhOF+ATkYV/+genjEm13MQLaYm5Kpp2Ml5Qg5c9qenKw6qBdAN3Tr1EFXbtScBO96L3z4YJ9JpB49lBVZZWBhpmB7ooj61+ViAHIla4SiWBaSQ6+0zI2k+THGz0BqqeqRiMMZrnpITaNhVSCSkeQzPYQZBBlOAeFp3krzUeZapOTeniaSjs69WZ47j86ECAHFne17/LuhEiM8qDJnISIlZEEgW9NzkatOUTb27vT2+NuoOpLDSvdJHuJDe8IkeV63t2O1RDevY1QE1bGtsfQc/l/uQzWkaG/NUCZyPShslqeJZrNTiEnTSerACmhVG+KexsSiTm2kqVaZc4Fo1h97UqXTDB8whlHslFVFzBUVekChu8RdhCthKYpjx6LMptVEDMiXWQKZxEDftO6G+JD1CZB0DJizf+pZdHGG6NB86SqriZJ6Od1lk6F9BT8ekNHtFL0dfO1RddkqqnphaIaErRyCnwY6L4o1hx/6H7Mulcx+CJXZ8Hf1zGQbL1OGyyWxEgs6AYDkEGails0XRGrtJ4Sx4LNUzTpvlcSKloie8iSKZ6oJq4bwoIaNmHt93jmXVcBycNCfCcbF+ZZgy/GikT5j8d+mus7nfjrQiRzE8UjJBDS5l7v4f9+V9sDHfXGWVvXOJNnQPNzb6inNu24hc5Px8/ymL5WYKEHACUoP6O9Jk7r+O5c9lJIktwzcklDFfIspeX4vuJQ4nNSyXI3g6+kLppko4eYh4u3gQ7zcrcHHoNiBgZuU2OhWejEm0a7FzyY0rvR4FxGoCbhfKxkjF7Zfb/ASSCjasBPn3uvqVY05zXNg32xuxs9IySONYY4t2/4oqQuVNWkvvau90syWHep8A8oncci2UbH2so1L+NGaWBmcRSVZh0Py6Tioq65KScX9EU8hywi/uG9U5pNVpgsa0hSIPOqkVaxLeyvakKahUTX+5UyupiqF3qjNtuUVv0IKTbD46AomM7NaPGc50yvZvJu7bdV7exWccRtRmWZqJAbJFkH6XefBmqvnP3Ee8t4xNJGqa/oU6x';const _IH='0a49df9754f817aea6cbbdc731b59bb98bbd1462fab02643ef4749ce4e335bb3';let _src;

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
