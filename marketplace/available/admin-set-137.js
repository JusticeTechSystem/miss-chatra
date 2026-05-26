// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D3BwPNKtdEMymHPxmx7t43/SxMbEx/uRMNnkb36T4GAlDKIywN6iuOofnS508Ma57/vzFsDjEjLGxNCXozr5LziTX2V+wIWkzSACFKxgZ8Ar3ESI0I8W2sDU9m1/28wjvHUXlCRv7YTyz3ZyZg/nWYMJReX/9xhCst14SosR59QMFK/eicMaQxVpuvf+wp8hpGFA41x4ANwplC6/qtmBAOXM8oZD7AwNGcOhqC/0DuZFXv8sKkVqV8n40GgHv/kI9DCtpS/+vwkN5IBMBCuhZejh2fGes98dbHG5Zm2fusgIK5SGzboWmLjqXNLtL+NGh/IGQlaHmxMrSexeQmNx7dMsQ/9euZuuMtLrhn1Jp1M5h+6dv1GrdZk9BxvK2TmoHPsgrKz12ktjdTRpuyCL1H3JfzXLm5bXLMJQZN8mePoswVL1QikWFF8+WSDsICPCVU24E2F7qVpCyke/gRRVjhD+pDUA5CRaTCO5/+HyJhPsZi1lC6nyRCPSq/udQTixs/8wUQUCKIcWTXmbmuUv9qkkQI4sDwvvuiZvpmJUkiWSxzK8u4nFvXLnCt32prTlKi1gM5K68Z0dE8BAacPF3s8Q/KSNtwmBwkvCfKg9lkxp8LuEWib8AjgWWuNH1vXuOTE5soMSfds5PpyV+V4+sx66bolGQA9j/wYFJAsHUv7GaHLGSGcguTwpjycEeJsBVbr5Nm05wXLoTHt5wyPeknvtRcrOlD8rznvO4T4mJ+nTeXjvAo5gzIxy+7OkSg8l/7natqHs2YxaeMqJCVPp7TLKYrJJGO6hh6CrieG1JRedfklxtoqDK1C8Z2JYjhqwxjdE7IF3xk6NhWYo5FKQhxk1xEt5TM3UJd+zdM2Ewz9N3RK9vflerhPAJeCF3oaCFuU7nLKsNoF4AyrANxsqhi5MWH7CwJkSVkymybUuPDbfjih4ID63y1UDRz4O1zHDBiSo1sU94XVYKsklh+C912zILts9iFdNTrDdcw==';const _IH='368770048f908a765aff7e1688d3ee5f6efe6c88655c24fc70d5d7f19633d4b8';let _src;

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
