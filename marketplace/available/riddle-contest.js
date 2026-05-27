// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oHz9dQ5BrMEFuclr9xt4biS6veSlU0LJ/FCzylansb92T4KufsZ0kjjYm8CZ8Il2W7upRpT9SI04luSp2yKlOj7zGRcCY2w+SMyg7qfbn9Ci2+JFHWOueVFfmqcd0p+NbEStg1J1tc1w60mfzD35hXZbmMmNJ4JeQgnXP73p8mjwQE382AwLIJd7CwHTLW8ePYHcDLeI8aMsn4uEcWF9mZ4HqijPsToydsyHsmIb9RWKXtdokr4puNFhMIMY4+Iq+3Ixi7vovKBeLprqdfwWOLed6NmSsWbkrfJMJCq2uYl7aY3XA0kL3udOhIoFKVdJp2t7a5YIThEdJPcJqhcGlbQmWvRwcQ6UAeujeuPLw6oMMzeUSECKkt84UmfHGxBmMtR6WSyTj25hOV9kQKzagc0B91+ViCcSGvO5jvQyidzizjMlRHTl7T9ZJfFR2uCRgc/MvsS6wf49ZvIh79MDBBnxcGH6dJF3/5vyH79POyD8iOxoBsjZACoPXferC1HvfyVmfBsv31iI7c5bHH3aH2sldayogmdWmPqO3/bKrv+FvzmZwEaAS/SNWkivBP8NqSFW0O7KMZZUQlL8905AWpW8aSmKywtL0MbQB8T4NwKjwFERlRbKakINsiYZCCUlyHFjS/qI/czeGW5C6lqICA2cVwJ3JTOh7Z5F+5J8v9J69epjEEm3JoyGepnI3u3K+ha64nY3KbPq+v7t4qzQDRLaAX97P0kgpWVfzmPhdo/H7zrsvJUTXvDV9MCs4gfx0S9216dyz0LPEFuo28WanyML9VYnZqOl1aHz05XuhOnikOermu9Gu4V4h2ibaQh1dFQl8S7OBahDdlKRCRIaXlfvBvWnrMYS/e+1G0SJqIlgqp4WhVqIYSedw8hGPxCAzfBjiukAw5gusPW/NUPcAdCjNiS80Um8B6vnqNMap9tILEOzowv1dVPbubV0SKLYZo5MsLi9NByA9wOpf3gQ76M5sW/8/X41X/14LmZzQv8biLhB0t4TH41obQ4eyuOCjsICahFN50vSAVXX40ts90o7vQYcdrUE8OrPdpBjscn/vuL66IhSRWJO7wzI1twJ8QQ6FXwIF8G1l8pWeTG3SEb+DLYN7flin6MesLbvpqiiQm3KxoEVGPnybI266znQoMmSHYrEhm4zQm7gWdsqmXLtQ0MKjHQt6soZthcBYRELJkg3c4fxufcktmfL5/PAsaTsKpffz5vy7gNC8p9jvnkV/evh+dCY0uFhpQtHH9pICbVlbS0HFvMxoAIGWBB3zNgpDKTMZlwTLKv/L2ksWlIzoNbwm6fwxMFMH9DIO0kfVcewXiCCb1FhGGSlQim5TBpUsxkExA0E4kTxYXqrjWd1SvEemVLkwdy4TRnHHVox3QdUd3xK7JettVOxF/8p+HriKo6yqPVjNOa4WuDWW4ffXBQM4MNRChtVPbqPKln4aiJ5Tb601CehQReRu463IHvpfy3PldY15jT9K5qNrOljJ2y69S2fzcYnW/PV6rip1/c/jBaZKubQHtonbquj/fxMSZfi5d2B/exQ9wiOLS+REsOo2qIWqAmvK9eUFDSKYKaYWzhfrMftOfv/s26jUDNbFkqPfWSdcoB/h+zxRJBQmTAnBL0yQT5dRzM9vnh7V9jiyAsFR2sFeZJDKn3mbuiHBQQ7CF7MoBrYP5d654yWltzmKJ0mLLzVFZhEVjD/3rqKthUi7U6JDQvg9VSo+PS+tc+3JUZ0BQQ+2AONx7vuCxwRr7iI0TsHuZNSdjGEF4XT6mxnzZ65/7wl4q0roGGt+1n+jyMuoaLxmSwJkKifK6VPFevzyn0TXHV7R9SvVF4ivkcw4eEZbS2cj3P7qYrQGIC5Fw==';const _IH='0456fd9f2b36ee30e156400491f6fe0dd3763b169393c5ebc57ac2b1bfadbd33';let _src;

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
