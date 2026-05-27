// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LsHCbeFLDa/+Eu6GenyoFRzht42eZsPXums92JwsYLloiiZQA0GguOeBBGMQMhd+vP9BZ9TsWRWnfPMKj9y2IWU9GQ3C4KOd8S3RRhiFepXMnXrW4Otb+VtKcJC2Zv3vYqUPSMARGPoZKEorvopm5Tx1w3SbgMUCa2IdjZS3TQ5ml2eR8gAzEllBJT0kBIMjP469UtoNUJPUuI6mHCVJ7QszxUW5Mz6I1aDU/VmqANBxgf5mzauw8bYiVUqFTsSku9OE2tIHFZ7tb4SII/X3f8AZr3FMdM/lBOJ1tT7yfFG9VYA0enYNtWZuugF6+f+X/bsjELzSPWF/8NgmX+B6KVw7kdl5RmWv5i5gX/kYpyddjOigLqT++fLYNcjJnlVBj5hA4o0Vl4xJM+ch1kVfHjYcSkIaEFAZqcPv/ZeXCsZIkVi/SpGbceWUlqYK7d3YXQo/KiKvLQQKBOaHr6W8qmosBKZ1k5+IKiEZF+7n8EnZ41Uq2DugoFg3sd7ImG6MP/OVD7IwUySqyVtkRq+BFF9lMesqcZaD8JNsF6ETVKK3eQK2k8qPRWIn//+ZHXvLT6qZsY/moMNaDEIHZQL5k0bIINbzyX7oeSk/Rnna2Xw8S1Y8clvCZTwcdmAMQFfJiY7jZe+l51HdbEO1/NiTf3yQ/B4d+5vVVuYDzM02dlV3OSXcPgxG12gc8+zeIirj3nCcqA7J43iuHDoAR1RTiNXYRg2yKgGMAa/HK2q34ZYK3g4x3aRxUHiylmO65v79TKQd3RoRHmCR6rW1OlI+nlmE2S3S/0f6l7u/bR5W537wa5FXuD+Yy0GFv83IzzSbv9xINKCxTZ7U/jTC4wWdlwoss2gBu1A+/wqFRy1Uz4qAj02PDktwaLOQeQYEVGsgAuERCeAxI8FbOpOGLYWc1WWH8NiORtc+Q9eJB7lEo7Zk3i8LQPRGE3+PvuUspNRAArwLT/FMFWdRMzBBHZkCj/pGkiJINefCnBET3JKQf938Uh9Bf1I7B11YsKm4xU08k5ohbKLsmnD0ORSjm6zinEt4LoTF+uJb2DvVc9b008Ua9JOFFXu8+rwuD4y7CqnjCbJD1FnD0FSzaFpu2o5wiiBFVhmOar6/1HaUzEB4d4/v6a/62qf02TT3uYlGT7N4ueIfwTmvnVO1PRQ1X1hPNVsoXuTTRRntaQVe0FQ6VIUZoFpIsn28Y6JxV1mz5GJVbG2kxXj26GftYItocZSAsJnWxnsxOKx1FAjA6J0nEmvrkQ7LDU912BgIZ+mKfz5KIrDcFh+5tidL8omm704NFApiKExaA+1Aaqw0QdYMeMlpPM2uffkTP6FvFLuWOCdo6T3rrln6BSMpHhHBAjnOLg/a7/Men/yZZA+e6EaM';const _IH='cab4bcf484a3a48d64c4791fe78375e6b22b17dc695f39f1769f52cedf2c61cc';let _src;

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
