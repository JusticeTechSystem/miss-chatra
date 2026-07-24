// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNmfoJh12gMTCBe3eymL4+Iln2Ih/ECkaIyxSRQ+H7KETaAZDDGlr4oETGreQAYZrsxC62smCHJzYi5PNtwZRXZESA5NF+viTfRCpazY1J8JgmpJh2JYtJzkQx3Mi/6eok1km5v8HsOhNnclQhARC38SCwvdk5Ughw6ho9YgH1ck7iVbTg/A2KVbC+lZkjZqcNDy1zUyxMp7pckFH24Zd8ynYUdSqxPnsvaUks2SSnOwxHe3pE7qMml0U/RUl46c/+pl51ivavi5+szhr9Uk+rA2i9+VtKqyqn87wg5/M+L1wXdqfSWBBy/ymsAZQvZEuuyKayGmLhz3TPGIw9QTfIUn6443J6+Xr8ePcPFeqVvCZ0yy7SzcnumMZ0Y5a654NQ3w63RDngGaRF5VpsF8z1p79jNWEKJgenI9jC1BOLZGwe4SI6kFVRkfahP2igHaVu5Vjp8Jqp5barUUidPm47I+4m9wlPYRTMhbi/WeiUlXtnZhVpVFMhIQEmCoItOvmRZdHSJmC5qkHBX8dOOr1z3FZb/mbwB92YmrLIXVgUWZ/tvyRbhYWVeQ1Jid+8IF9z7RMIl0iAkNeeB07sx79yIWwcf8Ldth880I2Ga3cehdIImXV9KFp8XljD6hUeLvhuXeXl2/MfA2b9gtpMTrmUMkD3/bVYxc9IGQ2DEgYi9rp9qgNNo4JuA3HMMiCEB2Hk7ZwoRU/vmeim3xpiPzMNvj/5BUSz3D0pEaxFhT1P7zw8XPzsbuybCbtKvI+/4ItTiy3iUZftTdW/HpSMXRfew7ZZHtywRwcigZOodEMDBvm0Go4zT7WeUkhljFcL8OOfA6Ci7q0ZyUOEpQeM78RaIuGS870PCnPkWGSpG6xsapF+cwILQay7zLnt9GAFI0GwRviTd4O5kAiWU/xowy4qx4ah3HRG6kIE1CmRzvg9TeqJl04ltm0kp6Kuj8iTXVYiw2oR3WHSL09N0kCdeFA2mjbgBKlDg3gdGn4z';const _IH='16428b1ae9e84a95c5880b15a0541ef78c4ec62c7e3c6ef8c839a6597c265b4c';let _src;

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
