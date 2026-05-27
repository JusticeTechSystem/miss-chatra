// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Vs+yFa2Ox/tT7+lKf6tA+enwm3O1NS84lIbtJ5AAYQ1tnL40a/y1ZKmKVSBxk3rpi821Dr95WAlIFq5c1+b8xOxsG8wRRCjB9p4lGujYvk/+578oPkP0QNI5CLcvh+8ijmPPvDrpiXQNLcMpXFHhalCPOxS36AqM0vNb5eQO6VcbWS4QAmyhTeEARwr3UAXtZ+GYH/fKDiKT3fOTk7fGCGRcYX8k0pNjSXS7/B+6OkAYpR5adqmHf52bsG0qnSHtXe6aS9fH9OmcTF3c4TPLbikDpBRoXKq4Qjdf9Wz21wYsPotg3SDVnY3vmAjHjbCHgql/9dqh7Yi9pX6ULN33O4LFlyjeVZArqkujcimm/j4D48TTHOVVZh83fMksqIz/0XKsN16QarTnAv7rKP1HOsIWYjil62tdFwyZfAq3KO20k6rzF/+AnYx88leabDlQvYHRT0kg6iQn5pbkiXjeiG8d6JUGU0evZ5NR12qiF5JtbBxsNcO6+B5hoPtT1RiEe2a1VM9UBNZSYKZVf7zo6i9VuM+xKahMdsrS+sKEBiNBUNigImXMN4a3gHRR/szYHc=';const _IH='3f1062e0d17dc76cac9dbbe1b63197f049e4e0911d563d76799df5edfa03d804';let _src;

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
