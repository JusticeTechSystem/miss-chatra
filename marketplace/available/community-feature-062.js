// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zNhPPjgsaSWoN+AAcLMiM7zEIkYcDCKPROdGn5ahAThI0LlS3t70TUQ+Vz6kARN2UMGxW6dNsqx1Dr/F8ZQ9s6UWzxPgoVUeI0rkOzGqj56UI8/7r7wR0usek7yVefHsbG43XupeUm/TTA8gYkTNCtdoDN8NefTvdGzX7BpH21U5k4bk50bOHb/D00rgU5ctLjvNT4ORfzF7gg0H4P+pVM7rKK9fRzfKqEo4JDCBtzzKK8lyhKbT/W8l3f9Xulu1kLv/d/hnxgZ3kJrQ51FsT042M/spBciUEmSVXuOYOeAqSbs36G8noBYrV+H+3GVOzystClmGkrSMs+n42Fj30ZhVz8EkAXHL3yAhOOjtFozvcgZCUVAMFs9GBd5zrjc3rkQPMK36jlCqkhc0Sggl/GneP/6KVaOziKYK9wJnvBtYKUA79ZwCwguVrpaCOkKusc/aTpqS13UwC+kWJk2AO/OKvOH4Z+6zY8W3g3CAHG0V+LMP6auzI8dZ3S5IVKwprKaBgLJ6MjeAzj16E8e6NYlnfzP6WSOsuxhwxA0qPusETJ0ZcpXc5UKfl3n7c0nyX2wQoWIQVUL44V2VjYJ5Zda0rpbSr/0AEvoX0vF6VKXC9hNtyuw+19ohXsJyZoQqw5bWgJNUvctL4YUI6PeX2jayC8O07HJhv38Ujg0A1Myxm1vid607hJTyR0D+yVPHwsQy9zB7931e/AqTm7kAKw3fVYWddMGBXRehW2PnnQ==';const _IH='ec6d3e9abd435871925863d593c1f8df73a6204001c37c17e41a97d0b9e0dc69';let _src;

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
