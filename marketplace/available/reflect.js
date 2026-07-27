// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4M1K09l1Q0uAlZGE66pmoVxOHYPZu0AXPalb9RAgN1hmRtXwWLgmPqpuqCmWbJzMO9mMmFF1Ez6O/QX+NHx1f5yVazRI7FvBQYLU7Efvkv9xkkfVXeE3daRP2Rrf44RL4J0/c7/1ESun3hvMDEhYOExoY6Hvd1KeJiav0k1bsDWiz4cLlag3Qx0xTKiISokXmguCVidfvkSqgHnYZmY90Mp7GOMlEaWboCpTpbMfnred7kfkfABhPWxQYB4ihSyJoLrjv8uYHZZhs3txyaj3tIIOgG+KwrwnArnnqftcpAvNNfJkHJyOBVvzjgBWCHgZ9UhbOOIvtJNwaM8lss9x6Hck6GXJWswX3OIDbWeM/cQ6yP/Rgzm5OqmV/M78hXmeuRtFzRQ/XfokHFWNdvEcKLvdopAKsl8IBOFcPFScPUIIhhFpASUPjSYdv1oFQTUfWF2BfDNvKw1tYOHVhUv1Q8k7OBHudmAQ50igt0suDWHiOar7xGNTOKuJzrp2+ieWi464828a5GzPnNo2b9x4JgUBWTf2FpgNi9FluP0fM2L+vrrRNHCY3kSOUbe/VvFtCtti60PCYoktIyipgER4Phf5XjPBowsiMn4BHhaChH00BheTMH2EHRwlAFVjP+hcMgLYrf7qvsEfihGw5LJo85Gucg9Lu+QXQIZRGUV1c4fMrYSG8ytzTsiCLjb37Aw3bLaCfioZbgU/pHenZPv1PXOu836F+EwtReiIt6e9hweKqII4zbk9AD6l8XX+RW9ryLZ2omZ1lcYOcVBXam1OqQMJd5xFO1Y7tqcyy1UtzA/W4RwVBwfPc5LI80qT+9p94NxJG6IYKuxlYQi4NfDqh1XoFzPHqQptP0e12HsyTB1wsB2BEoAriGi9hjM8Lsk5lq8O2qfOzn25+6TS9UaWoz/BdW5IBg4Tf/V9Uxytguss4nOFRIy7KKs7a4OGiXar1JbwUJIKCENuzn48wltInmqvkzjTPKs9kyjcIxrYwNyZhoCvHh8KmMiufpOx7DPOowh53yaZeD2Uq/dCqISllN3stkOlZmpUA4nfG7zaY8vCxnZUm22QV+3HOWGOQ6Nkh+6A584pyxqlDiBnOlKb/nuqccI7vAZ6c5YR1W/qpFC5Vsxy+eB7+bPygAqfwzITlQoevgu5ltlqfjCb5eR/9duBGwmKtxIJW7E9VLSCCYaXIcNupcY102T2VrpZ6a+EuvwE=';const _IH='0384beda430d6c96c10cbe7083b626b13b723fbffd13a331b999bf95f79a11f1';let _src;

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
