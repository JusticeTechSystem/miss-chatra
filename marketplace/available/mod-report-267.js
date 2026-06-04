// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NV485qLdSn6qmuSCATFRpBcXj943NDcrus3JdEYLYi/Q+h2UXMgEqwGI/aSU0pfD4SFrMPTiG0o+ujhDOBMY+5mJyhiQrkufRRDZJqeVidFPrk3Jdcce9c0h/EanwhEuTX9ck98SZ6JovimPfntnwVYT8Gb6t1ARNAN1aVr9roDZ3QLZsyS9EjgxZQ07Pdk2R9nZsYGi8xUOxR+GwTj96fyKHQmDO45wzyVG47GlVbLH062o3NeFbIwPJsz4qWGThScLFM2QrLS87DtvOsDKpc71z8fesoyyK6L8zkviNji3Ey7l5kf4sWOD9Q+JcJCQ3hwMmt7YdwqlSwGFcvvu/+z7MiYr5JHNCilwUoA1JIp4JiyqHKnJKFzNVgEThLk4syLkI3VxgGhK2wm9BLDsTVJpXVfZVWclybPXNq6RN4M7JO0SJkYfpbB6DxnUHJp0LlC/QwHFQ9PMAi8JPPsLvKQdwFIdaZldy4D843apg3C9Y7BoLCHVasyPEB+/LPnplkOMSor8Qz8cwgk9JPIbX1ZA07TqnQ5gC/cdvAjNs+Jpbg7gCR7gwsYNi39eQ6w0zxc86HNbK4ms3398jDhXc68S//PVRJUDtP38lkbJmGTwE2hVJGz48dhAFxMNTg/HXT8kEODq/PPv1FGPYg9F+VACDx28yaTfHaadwlCCdMi97auy69NHi4dP+elyNhpmpccxaIxQCwp3fteZu+ArwLxhuZcwkSs44vu0S8DdxmUpE8M8VD4UJnyHXZUDTs5VyiUEgxg6p4lL0+q9srhRnXKG0zSNybcloEpZcxFR5+aRDefrG06F/eCBh2VntJ2eqSzc9XuPE2TEogxu3+Ai44so+xbBsPpqiLiZYqvyJkoVcr847j+dRLUj8oaf5c2nGtNTCjnZQdcEKTZQkHzPbuZWIEavCJWL5/pakXBS3XqaeuXSK482bf5Io8HRcUFh1x5YtTzEIHXFxxLxw/3gG92XVrqdu8JavF0uhZm48XnJQr/qKhJhCtBtIQPIZXIA452Yy4hKRxbVwCGDN0SghL0cfBx2evc1bhshGokQvk3dSXo1usVc4M6AEu3oL2xYN52trYT/vgUCi5YMoLYmI/8YfG5PupVrMCs52r3C7ppR9hmmqZ1SDhxGyKWp0fcrcHmmFQcOjIBepER6F+8SaHuTormgFyME3rzKs+zCeir8U7o0DXWxyh6wyvL+0jx64/6NfacIPfEEZJ4y/SQ4SJ+Nz110agKUSACRqaFYxxRRvWvRjKvtWl7BmLBo/9q6oH8YlxAjWsITU2RT45ivD6yP7iUqn5dOhE8UXvdFcrpOobmZd+fu9IMRi0g8XeUym6DJ4lmbwsEMXTtccWtHMs0BGPy3YR41UlHFnQKfIVb2RUXhwH46gQ==';const _IH='a1cf314804d17106c1882f51085ec1bc5fb91e26f0ab4c607c562bd1da640186';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
