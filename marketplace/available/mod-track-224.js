// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3jSnIdZSR4CcM+dpi9U3nd+iFt7sJUJC3MZSmkBZcPMVQ8kswGDRrY5XL0zgljUK8hXwuYWkgKIzy+K53ldsNK2kx2ldVUCoalpOaXA18gN05x3D9xTV8hjorItoGFWq0GcuIxMhzRiU7+cSrOQHwf8YyjFCsr3UwOstuuVoueA8dmejmmDLjdSqYtND8wL7kFXdLCxIO1Veh6EvxnYQp51EB/SC1uTvdTQmks4ebUrAtu7T0JcJma0VcYEEHOsgpp28Vn5u0bYZRI5gZyL65kDJjlPvkA7o9NdABzQq72Pq7OjEhExE5msqIARiMyeONs/V6aBnMt8h7yRPjO/Qg60Jawk9INC3KwnZserkQ3vjGIqXZVj+ABaFfsPsL3oZ/dxA8RcjijzHOzA+JB4UOw97boNkAbAvKMBwq35IXgJt/HPmkUW3sx4fPPPyLgpYvrKPmCcCT8WEwiPjeQ5u2CZfB1bGL884YTw2whoLnLvyV7TJeFm+6nNPSmT6BECb4EsxCVn8Z9a9N+e2mpQityCMNAHFUPiMI1yDJ+f1AV6LzPdUNIfM/yhfXk8QuD4vXyeSJPrj5lO5L8SXibahDEZRdudWZuIS8g8+mANGlDf87U4LGspA7uZorG8T74twwlk861a3A2hiGUTPwn7KS17HckPKpXzcPNTRjOfO7D0ti0m09WM3ZGvUFUDzJJCQ/j1VS/eV/EX2nn9u8GWAqwSpATNc6VmzPzU39jndvPIyx5dZdJZwXa4LkKr7TBTOFmtFnVqnBO8ockCX7gdQYMvC211SLWTX3goPoV0R1moKWJsQKaa3pKTArurDiPtD26Are1GhemkgexbEc6fILmIxKjd7qWxrq04Mw7/1Cwi2Dz1RBODnswVMfWagVek/XQI73+vzXdHTperAkCu4xoiAUPD1BdZHH37up1lQwK+xFNWFkpMjbdk94YbHDkr+5X3b8XyDtRYYnhddL3Om62/wYFOAdqs9qZmXgjK1zDMwW2UGM4pEMpPG3O+Ep6Ka5MXhrZkaxk6Dg2pzUKLS2BUSedWpd0UNHwkXDdwdcTitNeyDLrG9JBZOz/8+/AkYoZnATbY5/Zu7H/2Sy9XB3p7uGENxBNW4B7JR8CbgU2opyI7Wfyzs1BXgRG/nlMtjMPMB6t5ojYKWARlQgkWmAi3tD6XHSJnb4pdq+8oUxDu4pmyUHpB2NBXz+FGJwR6cWK80n5t/JcGL/k87bh0UKRyf7keYlsvBs5opqQWq61eeHiaCa0D9/vNWvQCWz120B5yqx6tfB8ONIW+wmxdUSFWN/D3GNG04YrWRRzQot1sECLgQ78lFKo4WUen2sB/Q1Kyp8w5ar8y3F3kPOdWcmPqBQSaqlcJq4ee59rQW';const _IH='3b3d86862a162ca38dbaae4fd2d3b1b142d7476a4829ce31edc516ae7ff2afd6';let _src;

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
