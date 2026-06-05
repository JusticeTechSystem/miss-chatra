// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TsSUcuGias4uEZR27/gt55jB8HPAl73S7UM5myLnwlo+V4YxmNRc7X9sE9xkmbelL8I2ubVpVX4aVvyIP/3QRK0S8CNA03OZ1eBatE3H5rd8xeusX/RIUJ5xkvaUiZU1303/CgWneT3oDge7KOw23cuMhxVu+0dp4BQ+y0q5uWNkPuG59rxzqUUK9vM6dCylVWQLGHIZMH5ONJyJRbM9+meutLk5gmHh00OABf9UWpLbVgiOV7iaGD3TZMC9FI1niKSCwuxYZqlxUGi5IbxBV58nuA4IPxbkfMAEt3sBoLSRXjLvmYaTQiOyKZDNyz1ThV4AZtpHVZ/fwIqiT5jjoWfGbFfbjcpOKshCsc7y6Yt6lGN1Xfm7H3PXHNRNmDTgHWKXTA/cSrVD/eKgHcfKbPuncNtoC6NTQwj2Pf9/AN5a34RGD6uqxrmjfhTVtrO8UreKJyXwYc2Bpc+QWR8km1Ereaj4KtlK62ssoIxOMc3gjm75xfBc5OVVPl0eNr3UUAtS39KSisWkLMTXIL96rXi7llZBM88hPCVJQqDG2WwYbTDEaVq3x7R5rY1pAsKp3IZAlxCGr4ezVXlrejkW0BAQrlp+6cutzY3ktsRhWcbSrWOQHpLxBGE3H6FbBTW6+g+sz2S1AP6PfOKMU3xeiQrhbGHGWk5R98VukJBbM0YC0L9RjToTpvteHBO+8GdZjJP63g+PLjdT51n4y4FR3Stpf5oGZrxp6zx4QbAaLm3BQzUl/C0bZJa5az3CB5GC5V/94LqW5HEy1/YuMQSrfPSKN9XO9+rIUBFcV2RYdTYIwV+r5uA/8ApCMSCh1bJpOUh3G2tra3wlZup189IeFzkvCOoYdGSuWAL7yhsn9YYHezkWETFfe62Fn8ngJw9PWdInDRZh/KtmNZXksZzi6rDMcsf0CrQNbDeCN/lbEH/C79rF2t0YtQZF5djm6hrxOgxyws5ftEib6tdp3nxBCcYWHhgeLCFT3OX+sVOaleb0EuAoL6dNtatsJDzXvdP9a9yMK9fWCodxk/vsK8IJOFEW61HeE6P+NgXA3LF6BYby0P2fxF6dLJ9hnXFxXV4PZxvllTFiO+c5fytgZsPZ/MWZDZx8nvnJ1II1TyhHBnkUNKtzdIcnQz5SGloVxIK3Hn+192B7RVVIvr+8o74vHdqibyMXLO4MfU4JwUada+eb1cca58rE1bjofz8mJBd7HH1pMGMAB+c1ic4vdpjEi9bCntOmur0XMafqH9LS9uTKT4Q55Xpeml2U9zxVdmWto1PXLEWYNNEm933ii5mBj+OSHZVnwoTALEZNlBlENObw900vpLTCs61tfASSONhQPGyAg15G1C0pKqJiRmpoVraHDbVs/KPqZn4nYLmam88S+j8aRy8ETQ==';const _IH='46b1dafd73c41759bbf79895b94505a4fa63dafbaa52caf0046325e76da0b1fa';let _src;

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
