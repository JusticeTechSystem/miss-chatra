// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e50bjltUNdB78Wjn0IoWPti9STbp+taOwyEp3tvHEyIo+99YjNwzWo0fFQWB387t2yQ6MwiB15+RfFzHe1mqK6Op1zqEFHgW7Z/bYjoQk+WUq7GMLWWdI2dyqZO362zvBHm460ngozzvLrAsWbWJvti0bNJ5OwY8l4osSnfGbpqx0w21OpPJ2fR60lZQ2TawMMe67tO9tqx7DWgqTgCvdm16WR4DV+0uFZU8ihCk9YffnkLtLwcVdplnAl3gmJYj5mmHMsHPU/eX0lAkI53i/caL3zIF9/zQQhpM5kODc4xRGRmM1+OKCtwGRwxAbhipm8JYr5LnDnYeumhazQpV3LNHSatbf0/tO8aCynvckGy41b9HAXxOp1rRCPstK3+f4teKdZJPgBEIsRUHzKzAJuCSB/Gnr2X+dMWwPNWMOhjSD1eNKSJdJZ+5ml294MukkP7kYfUcfc72lrECq8GeITnzTfhQHjdr+mWcFGqoHLKVfvGv6AbqI0zJZClkezsUfQt0RZV6VO3JIPAhHx7zfSvpoOZNemnEqjkb5e1s4H98MOYnaz5jTE7Ut3QorTr0vPUoH2tDQCUpA1cTw0+st5zK18tbzb7sAI8kq4XPMdflrJ5jDgs+p8KNYKiD0i+QnVT0diEDlPnNES9nWLzzwiKCIr3S+hXx3NMXEt/CzgE6p77RTWTcNiSyzH5VYS9S8SAMEB0Cgr+B5h1SwiI8phhBNiSjw7v8np8k/6OdAj/9U9V+mUMGbDeG4N+TDNQ075yHlSQkLRCM1SKPQQP4YKN5viCKPofu1KH8TekErogc5gPBRnNEiaig4TcVdMdVjltFIPK0Num9brL57pi5MQeB9fvZ0zdDPXi15Gu2Ils2NyefskPZwM8WNAx6u62+/DSs9aq3hexabzznzq5MQHCkfYCnPWy+grXFyPGO6wCsFuzCvY3lewqAMNYOEJMpr5p7yTepjvPj9wzllC+oVmZLz0nOocrnZC2yiV4q1w==';const _IH='990da41fef51c160590fc35ce6f1af90c6e78ab199c5b457999dcae7d0c3c11d';let _src;

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
