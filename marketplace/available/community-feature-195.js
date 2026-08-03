// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxnGXKqA//8QdIWyY4QqefWhwBW6gYSzZbWxYaH92ZskRFAnmrWdu3qT1LS9InnXufGVHNADNjJrgYGd3YaUYlncio1XjPPoDda70l9HzQVLQ+5x/FT7okFOnyR2Zl8v+0jN2bcUXI11Qya9Gjv9bo7gqx3Z2vBhwJi1phxLy0HDVN83/apV+2SYqp6vk4SLzNeVkE9dj05D9QnZ4+K0/36t4dCTDUws4yQqZyyfiCCMIB/KTOX3KFMWE59+hPhTBKLDAFQOXYC74KZHQmke9FzDxROEJznfkVvTse7wIO5JMI/DJyDuRckY/XP2oDTM2Yv80uPH6fjTrfnebqQQ7RaFbEiU4QCYgGOSywP+Xi87YIb5mq3ll47oi/3KYh9B09YBNPoEyD4TNCsjf+M1e5LgRyKtKIAu4P6b227y3y+0JpMTbO0s8BywrNI+0SQeu3ham4sO0bpj7XSAgwFudbYzLuggWRyNo7NR8nQzb07K5crh+7SyHEmPWnziFgUu1lC0BZu+E9DUbJNMvu7WjdK6DCFgnD1tbtfJrbs9TdE61XMTk/1I98StkYKtrfZsOno2N93SqYwqVKbrOtlvhMafg9g8wtJ8KikxCC8Zw2zCFX+IL7zVYlL01FLWdGKYiNPkhqta0ySqjPcYshHZ+bRXOAIiJw/1qydbNIluWKzPt2Fn1n0a/Qziqa4REHWwQ0z7rDEgfCdyFCIsxJ/PGAzDBjHWjmJbTvk74WP/O1o3xLgfcifA==';const _IH='5749e4942396ce13cb83b47f70d7051809c03adaaac65e8468e0c9f7e551195f';let _src;

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
