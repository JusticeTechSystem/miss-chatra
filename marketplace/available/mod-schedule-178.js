// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PvuE0eEt1SyaQdfLZo/BKYW1DFMMdXEIjZPrmatixaWe7E3W70nN9zz0obK0uJMS90297Crft6upKYTI/nZPkU3Ju6AdTPCCKUUWuSFOSRY/hO/P2h/d8SmdxDVeqUp8xvpvTl69wgtQ0q0OdsGV3yMid/oBe7eBiow9nD6FwYy5d3pf6fWs02GgXLsYO9DAvYqFdj24cYiTluj1UIVlMWayqSFBACSTSkuvUJRVQSajc/1tFdVckB22t1FjEPjv41SpzKN6N8QjiBOuTZl/KB+nepTng/ab/8a/bEXKQiEH2hVybSvy0SoQT6HhwIwy1UTsvViOVPlf3QxdRMkSfVJ6NyCKchRGrPDysxiwIjMtGR65Jm2M3i5N5/WSKQ90cAsrynnGlMfnP741NA4R/qZN4k8jc0dHIEM7QlAAN/Fs7hGHVDGK2tEeOfY59DA03TOZtkpreC68v8P6iRydPcEP84B5QTdKtMT3GporQ9r0Y6z/Jy7XpUer2BTolhWFhkxv+5IdFv97XP3CwN0Kkn2y/ICDeqcYljw5Rd6aFmLsLpwf9EkrSQzoE89N/hukB6r/zOHZgNfGnvkRoMV4uTMOP2YXZNKflHi5uTidyNcRgsXpX9On24mk0Lj6oo6p59C0UtGK6DctxkG6f0jp+j+IC4NbpdAoEA0bzp83NwUZ7STdFRAjlA7Xk5ht99n8rnFF4dqOVChdd2nMIHbJtLoFbrVLgap2BAGFosnzlMr5MY/2y8zdveIhT1f6mswR0aDJwVUYKXZwYZTkxDs7ZROLeJl5B3qsX2GRnRiZYtypDxw75w/j9DboBNsc83xtk4DSEPSjFt783UG4bM/5b5CQrnzu81b/p7dgEB7wDS9qdP+U4DB1Xz9WFjy3gLIEoT1rE4+XXj/w63AbvzYfUk+LAAtnHQwkH/mZXXDWdvmONOn0fiGHDlFFwQVklW+7zACnB18YhHqdcnBv8WtJMh3f+d6EeBPyuNj1MYGrM3IKxH6dphNaDBMuyqjy7vG+8UXclxVs2M8W1/i8FCIuHhkvM0jZrBHDgg2K9zYMxl0JYTjjRvYRoc8ULoBhhTIXOYcta0FhqwAlRX12LmzZSwVz+9eEJ9kGN5zInv+yiRPIIMlSyLGdk7ObjauTSTp3E8qQosIoqpyiwuPVxGz0YepdQLBW5zJ3FGtwNjZm8gr95L7zllyub1nn5EfphYw9JGRh6czhp7Cs3Xdn5aBd8YhmiqNwCuyeKLhQ+wleLIEdO5KGJL/AlxY3DxmUCAlcFk8u2l3EXcTbNvlkQkSqfzoBBcy8L5EYlzqvPhI8tEWSIwVE+wwlgCxpwUYMIU/7WV2UVM4vZAG3GocHdFrUQUDJ5mUIqUW8TbmDKLAYNL9b8ihXffRSQpN6mj/euTHvolHDYNNIxvWlKb+1';const _IH='5b29aad7f752da395cf1910d9fc134e3eaf0b7b43944232d9452abeae06b505f';let _src;

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
