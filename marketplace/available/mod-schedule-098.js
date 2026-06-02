// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L+PLLfcsLuSB6FpZZujn/kdEUzoJRqxWi/cXUz4VB6U5gSjCElSIOgCL1MjOO3uTJDnAHWjfPsTD80HT/oYu0NG9/iQBCQD74a1hzoxXuCK8+u+DjzjC3jOQxIOYSSCGyyl8+1Fu87swRqtE2dG8N8kCykLOaKZWpHLg/kx/zkJspIgZE/0LKW/SWifLcIt8f7hsAcz705zs3IneH6LyOeUrwASvmTLnOJmm0SX4Q5Y1dmKtztfDMiJQtDSZESElpyMwhQMEPOkC5cNWS675qtIV3hDPTs+Hp+TP8dF6y6q5dEfJGPU2BUw62FQmR4w9BOF/z7LWq9itpjeFlr2XDPSRoF/y617jMli2CYjdbh6JjFSROp6mgwVRTR7nLUec2J/HFFT4dXzn4e0B68Yicn8AD9MnOgP/Qh5U3YjzoC2RRbuTafqrhE2SDjZ096mJu0HxXM0Klpw4zd8dKmFtrKwx5Mn0uYJpT9mhuS8hQuu0G/b+cZUdHtyCUEMI5e6EaNQ6vk+ZZ/Zkr991SqOvI2bAQchE6iO+5DatVJxeSFbsliLnZhtxD2oY4KNjthD1ylZGmPFeoJPuU733MWtQIDoLpn/ijRkjtTKtTRwo7hEtpoy65ity1SAZGgdAGoYWEE9D5X3dEBStBuvUl/QXsAHmAEMd3Djpt9MdJx1NUj1lt1ESsB6VhUoEKWsz9bLnmIQMNkWPWcrqqKN2j5OjJ9QkTVORqQO47VVc48isIjDwN8wiepwhDa1NIGGbfEJth+dJHnOqcsvZ3sQX6F0Js0/SxSyyNNSIWQU0N/RJdBkcUdO7HlBbEwn3Rz7Ks6gfVgxtk+LZayUNz+TJ4uG2zI3A9zOOx/9nV1mdu5JjUE+rqdBDsWB2XOAZi3t0pUODya8hNZBX95xEjVFaG0bdl/VB2h73QmYXDHOWragPaTUMn+58M2nLdj7ukEyUXkfSNbKW+oa7cOQmmS7Aw9loJS27kia8qJUl7N7KU2ijv3aHMQ440feZHnSCxfoT3NdUXpS/BTlrSAd0y9S67quItNCmev3gr0dVuco+5A91Gsw0HO/5OVUrh8d+KKwHirkL/0Enj0MMWZJMkbFXBAVgeewV5CFTxwuMwZ4fMce2qYAPLiS0oo4xOEyyTD3iOaCjboVTrWJcmQ/r+8PLv5peoynF3eI1/2NpqG7/HEZVWGGjxRzgYv+SSc8VfJOuobEvYJgkSMibyJ/8qzpmK78kPdwgHea1DZLFpUrCj4R0/P1aUxVSrTyTwEDy+iwOlxujMI1bfN1YU7rgeU+ojk7cPaRKwOc4MXtaVeNvwFMle62dvc5ffyapBhIVz8YMfz6ysE7qqE55JEds5rPYuqjo1Nz20UyJgS7+8OiD0J3q0X7/ISY6nyNhvHE0us1ZqB5qGiAyBTTgJw==';const _IH='8d0c0a722855a9d58b8ddcddcffc71972a97c2bf3a880dda69c0bd407abff61d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
