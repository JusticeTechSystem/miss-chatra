// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xEvMR1W1fbGXLA3Mx6LWYcb4LS5ehzJCLzlm0bu4Bfnz4OzRkrbTO7fXekDQkQe5ARMl6Rl2FG0K7ex0TIgGNwHnLrknBNNbvtg37EhHdnnvzT5ZkTb++BaOgDqMX0G4H4tICgUHwbbXfNjDMo2wBNHFOrfPu1xGBk1lLepRtKmHYBQ9D+2/lkrmc+l/CWnf9sI9Iibe+8qD29mhsZQp61KpRr49fcVt+BMd8jMWqGJK6xX33vSKi4kSJJDq/LgY7I1Z/ONrCwbm2i3K5KQB9GUul9vdjEWv407Klf9m1p/w37C6+qcjupFbw5vitLIGQQ3UJZ2F619MnTrnKCOjrh2bdXV3hcxuubCbKLNlzmla/82O2xi9+ZQ1Ox8oJb05HUXUURSCcoHC1Zp05thajo21V3KmFGPN+7lOlsXcYIywgel/Etgb2nHiPHU7w5lHWJ5SjZKObVQqW4CO044yoi7BN+ckifOtkjht1IkP8odqABNnYZLpLMOe5AggqifYKh2YKGDhqq1oISuq3LXWD9olxlTXQjeBYLp3XeK/bXaXolo6T6YYeTes+dLHZnS/iNvl8yWb0NQUKSYqjebPeYeaWBoN/EbCZ0tzeV2PV7K5173RFvXGk/pd4CfRtKydF2VRCs1+GLDFAJCB0bc3t4T2wKG/Qc43o1zFSjFwQ90bPP/QKqfnGqyrvfZ0/y+rcIAkN6xbDM1t1kWGBZzmMH1wUMD8WKVRT6pu8QbjH8YuvnCn9hNCTY2XGguE1caFwxffZqpNd/GEmIpJvhF8v0ws4XjBcyEsXeEG1acOCL1TataKyT0nzH6nwV1CZ5+W+IADUv3ZRPd6jkooxr/G6zEbxHhZU0L0ZXRPKZZaFBaRj2hyURKFRNFjV85Wo71bgB2V0Uq8O3BzMnK6nxNAUXKDy8+fE1HZydDgu7nvaoyJ0GsyICSQ1WBUV4lNBDvmGzUXEpUsjBf5CAgHbls1gO/XRWOIwxr0TaQ2W9bMUD/QtAox5B81gQq0CwAe4FH0uvU+O/q2n4DnDff8CAGeb+ZgwzMIRqIXNa3kT0fbUUx8FLbNytB2zPZqbo1/8roxBCbw11v68dDvRjhJe6DkVGwqASDx+bv6oCWif7UMaZMtLF48Q6pLEkynvmX24QTh4n82Ft2l45GdvGViXiUsVD2NimerYCdVuKEAn6tag/joeQrdtw2eKrbCQpC+LgWyhEKp0flA4QT6LOqWsHK9t+UuQojJJcL5hEUwPjGi89oBtEbI3tFzDUaweZNx67M3Z6rHscuHpgKc4nwFe1995G9BbfiUODT0b5NGwM4xNLdR9c9OxyN/cHEVbUCl7KzVqKktGkzZWjrm9nELVear8Dbfrmx4HKY3tYGYTEdbHIJjiFo=';const _IH='ed465acfc223db24635a9c394f76d31b098f3f7a4c5d45bee641545432f3adce';let _src;

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
