// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyUYShRSCQTJ+/+VDePybElLdCjzt50KEJGBGQIWOZ4sRWxJ7bE5VIe6p7aZNyvEV2c4qEAfpttSohErPf5UwhOJZko+kMLHJp7Qmktt0H6ZIm2s4ODg3EPKSNvFsyJxPcgrbGq07YDKgfizU1ogF1vquzY9OMtjtWOO8znHgLPOg0wFbOOB7Tvx0is1kudy3Rz9pkRHfgN67Qfl5tbT99MAUKrWPf3XNUIZ/VO5zQHYah37cfIkNUwLTUu8gE2UoYP1Dhxrab6X0ZWBnPdI9ASeb99YNjwOX7NxqdxZpzCegayCreNKZhkuypJmnzyxz2OEr/rU0uiT8Y4fgYGmUh2qjLef3mAhWDbCLcS1SQaVy7VKWV+M1nel6NFCRbNQARKfDX0OfRWPza1J4wFCEIXLZtgp+SP7IerhRYE6vYjXCc8lwahXSQRpM5MqcdfJPfoanXA/+1rkOh8y2Lypws5nMhVVQ0f7AhdgNUdrqHfiRKgRCh312C95dJHvYcKVB6lWDFq2mdGC/PNvMG7WlylbWdd+DqwudkNS9rtt/NxkPmkMhg4O8SYSvfpPGDMd0P3Q/QU2HtbhWsdT6Wh7fbexkmoKu132lzGtvxe6CePTe58D4QWRw6P8BPEAT/C5BkvezFdS6WOyoFxlR+Mu+sqIr+oU3F6+YUFi/F6trocw+oefbkt11+xn+fs2XckxOsdoynhmjKDo6PlPl05a87jh2vP5tv0dIpEIU9J7kQbdHZQyHfuylXPbacX+PEXNlkzJK+DwbsA6Q1UYhC5JNHLQOtQkD3ESz4xiJIwy3XVzVxxv8Gw/vTqb2bl3vV6GwI54hZ4Q6vNszzuZDcQUZOQ36XXibyMGem/xAaP3J444RXnGyq9JMwLm3Q3Q9oUvv019MLt+Skb/C+60ca+Ykrrby2OQbFRfCC7d7P0F97Ln5x26WN3q8I5pdBarRbhcdFNxqgvjlyvzWIpnYd2WQFVnfAwmvDsJDaZGvvU=';const _IH='f570d1c12f51e9649b7c80b14c397e1013353dd11dee8ff524e3cc92262d9688';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
