// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZ0KdrrCLb77xdd3MfvqqIvuVVDXTQJo1FgWtibU4UrkHR2qRb0l1j03S95b6vsPlJev1cRG976UF24rN6Gc4rI806BiwfH7GmVlHbZVszn41mmo8nbmO2g9Nm/qbAWd9wqqnaDBMmSNvwEAwZY27Q3gQRLozpzn97fT9OnRT4dyPBmZmqP677/CK0TyajR9mopZ8+Uv7xA+4PCtOPP3XGeQxroNygMuVKwRm0PnzEses1vV0kQzRwD5rHeNRP1fadK+YlAbxr7bl3ztHvJLONbmqh6uFHJUZlbQhS/zFdPJhfb2nMIWniCuwpcMqA9PDRVb4ZwDc5nGj6og7npbbIKtlhT3j2cDRg92O6oYXyrOMbKyGKBsSD0JV9WLcAbwjdXau3vC4QXl+01sFQbd/t0az2xuFu50rtFYE+IDvFad7mmSPjk8LJR9EDHvAVS7zJlkAFG5dzQmt/HFWnHGoDA7pncxLG6Z7XDnS58+FeCG8FrgjqCnXjdzCmIbbJcC1Gc5nVpZreURjjyZJicr0XLOQz8khNY4swteQgn6D5PuAB1fvXP0yF0RZRA1wuryzTHZlwfEDnUBgKGF62VM7k/N+fVOsgpstFEihrAJazKlSJnzfvDISJ3Ht7oc+3h07cTMTxwdXEP66OEWed2hdkFyBY+wr01YSpJdwWcDdZDBdCmG7wIr9LjDwUqu8XKFkqZfpTWoc2eJVhQ7CFnWFBpM5XbJm7TP5oyRl8kwWusQJ/ms3JtiKTt5Lrvg1wxQdKOXGNgGyaQdvzyJ2V5+jVmg8EIwtH4wEJTUwkDgIp4tvHhUvWaMjpb7H3mVBm+TA/WzDATxg4ZkkFPVjsSTcXRzQkIxDeJKwZjkcMABoCN32VeSZ7a+9nvbjsCtMIbUK/iK2Q5SgpA08ZhpUEh2mZmK8QYmcMGHU0UX6PEFEecBm4NkjaKnOQ==';const _IH='81dc7bd6a6cdf66f399077c34869abf9ec439053c6310e2309b593adb61ce035';let _src;

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
