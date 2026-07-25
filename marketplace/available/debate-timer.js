// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzn3brpUX061YN6YekpLg9dEMbhuLid2FQRnWU5d3DuGmbnsGPllpKOUGgIf7I46jWaOwNSowH9ukkJjX/E7SnDSIfPd8L6eR/ndzBkB0a6+fO6Df8QjY2Eq02XgcOOJEgLRTKAMQYXzpFzRVnFhYW3k/pPs2PZbLIhoxTUM26ozuxxOf7pilQYRfwxkYvxXKlQtWFL7p1sA+9Y0DqD5jlNZHToxaK4Ti2PCDo2eMA8ZmIeMyHzkZfU4E3Mnh0Zz0Ava4u4OrPMsSOH9r9wAlrqC6/Vkd5Ng9EptK9O/amBROgUSyW1QcJY1Pyohv70vUBLBpWPVk97fK3dS9Y1GypDmdJHbLKDJbqBCxMGxZxQA/gZz7yACx0/ovxGs1BWALsanOnuIGvKlLket2Xn7+kXycpxmX+6CDQZOJSpuD9kN6DkY07KQs/QtLwBEp/AV30n9r6UoaNOqBrYFgkFaAHZ2ivMHklS2RKWLo1vQ1assPBY29y2+ef1u9q7IU1CGJp34VEc3bY+rcXOEd1K7AJMOx9ruASdIit3PtI3pR8ytWEviHbj7oxN6WrA4DI/UgPxVtHzLlOxuEryvdgqvQjLot8Jx2hWMeJR/0/O5tZhuZ/M00u9rZEgepS4jVGJmZqfbOxIw+Pwtd40jTC1GGnH/nt/MFLYbx4D11KEbe6FSlwYoEVbfZYVoPVxIXXXVoyyfLiYPP3WaW3SZLakvy8YGoMJTbkq2NfHL/Gh1SfGHKuCn2sgSbjPNO34GO5DixERf+RM0ldBWo4IeH8LTHV8vSJOtMXLVNzMqbwZhbX8ElkEDd1QlQSM6q2LhKLLlpxV9vifMn5UsN7vNAo0Xof7wl4zhu9jM+Vsyx5RLF8bwRbOsbamvv6iPRzmcILGeBsux4iCgRUMnd/H2GZgRfLEDjT3w3W9cJ+2mpguCJyIfFHOxbPWrn8KU12FCQDKWmcqRL/Ni4Gj9ynv+d24sQXtNDq6qyNtINkOwGqiEABYl3FSXlDap3XegJIUT6ZIfSMxy/5HowQuVHxLtCzTy/FodIyEzE8qB8g+YWbtSQtfevN2e8WeyG/2GyX+hZN0oneqQQbPPz2ZihsnW03VeBNg6OmiiDo1irxsmKIpHjyGuyLioSEyRCA5W0b+vUf0pEPje6FFwduASzBvSTlp7/McKIDpikLfSnDvJ5j3vA2kpi9NWBEj7/6Qx/bIl1/9qfNUxe0zSgQM3cjTMXqZlEvFm498F0vgBh/MZdKdTh33205zl1aPoeU+gKabtaW9Kx4';const _IH='9fa1167cba4e3faf5ae0bc3518ac78535d2fd89c89cad121c6b029517031416a';let _src;

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
