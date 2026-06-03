// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T8DBT/ODgFjshu9BvEjKXm6EM+rdHezAE1gh+8YJmgDj6mZBZM6Ee3n+CEHLEi1JK98MjSgySP/sRqd0tExpQq3cSVGMK62IM10U4EtJ6DQasOPVDnob7NbER2c4EnLuLbrXqOGHkfzK+rESGKk6v0z9GqKo05RIKlFQQvKh1HGrjSP5PXGwiZFXHm42+1FyrkjzsXOg/JenOJKMAkwlVEkm5M7BTUHPUA79G/sFtvHiu535QLlwWQWgf7xXqCWy0jf9JMweGQaoXq4ZwnDNR8vfHXgH98k+03xVy8pux7tq4w1meNsUS4/2DpD/N1890YVUS8H3TpqZ9LYdmBTxMWgVIdm/XxIsS/589mjQ/bjoCyfya8aGB9DS24lvQ0prruXZi1ofws8NBd/x8KbgyQnANjOAC8BZyhqgq2hbX3/O1CZTkZ9tHqIq2FbYS1Ytshwe2FAwJi2h1UAbhKnTliAvePnOQzcsSEmUSkZHrCYFJBNqoYNcGs0gkGRE/94YL8MGDldiAUTaPbrxj6guk1oRjxKGzWSJeMrKkM3OaUPGehnbU14kQQGVzIO6rOHLWd4AvmijHv9HBIwI3SMvgxB5vfthVLriqywpUZC/C+PrU3O2Q0ku2DKnd0wrOWdYwR7WzRXpDpQRlPBfUZK5mfCN0n6f1VQHSqloz6VdnqYUO3xm9B2U5cYUQoSZuOHeN+MuUycwVrjdRd33gdK9VAZ1TzH5fP+kvWzAqDkWSg==';const _IH='d2d1c889dfde44fc743789842524074614eb124c4143647732ddbd0afa0d46ba';let _src;

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
