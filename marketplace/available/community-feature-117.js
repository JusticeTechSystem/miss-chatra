// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ObNtmiiG+2vigHhoDwfdYHrpACjrIrnxVBfMo91dnNv5hO5RiIXKZuNKCURIlXecPRAi+7iW36TlC1c7GcapGBwodpAdeMeIJylKCn9oRHza0xTO5BGJTUMMFRoBrkCsdGUwKOcFGR5qFa4KfPf9PTSxcbvxFffOnA0tyxqrzS80la52cXPLiaZPF9nN6ENbZHtvh3e33+bEx1TpIMAfwE01ipIfYTfnevZc/TGu+AaSBsA3Xxixq23xiZN7SWVdRDM+9Y3P2UOvXJd0KKqlhEP52rAoy6sFsbeNqttJitkYzdLK8GDNbetDTBD1AANP5aGNlJ1wMrGkjhIy1DMzLI3B6tAYQVsYUXjdAA+aobV23UHNB6Y5eMB8wY09al0oeYWFbR+Ls0/MBQQZFVt1bOrqDh7hrPUlWnc9XQsgVkOUynNcgCg+v791iqqSjpwEQ3Os2jXT0n++vJNFqrb5SpVvKJxif+fqwPaPyx8SdJvDpTo3MFIRkt82CHN07X0TeIQB8z9nEZzDa40m9oihdAqfS/FqmaFGgC8a6ph1n2ddDapRCYfQ5os8pk6LoakxojHXLioJynw29SOt2WJ62GzRqlupsPCKrTqFU/F0+tPf4s3GKu1IGQFX9r4TVx6AzeeUlQjfkXXm3qigOhBCQpQn2k5AaUposS/EgEhEKMYzW9gIcPHFaRBLxxAsm19NfB0YET523jmZe3qpLlUOfguK4fbBGM+Qzztn5A8EAySnBMU=';const _IH='d96b730c5a9061c115a08526b3c10c3afd23b6f3e3ba8c0d6b2ba2ccdc51fc57';let _src;

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
