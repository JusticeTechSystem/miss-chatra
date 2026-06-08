// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MfoC56oR6ggYLm8Y3vs84+ppZtHn2nmQ61VGpyFwYsWOPiuMKcc5Np8G+UYeFfDWkMf12G1DbABORTFAjmNXjRly54Gwm6/asCEplUHrGqdl7EaSJj+lCAfNYra+JXVrKp5ZzenoNhLXzM4lhrX4PZNolPM4X22jRsYAoIVINAAkqu8iUYU3BVcactFNInYvuQfpYiE1elDUcFW8YeJ5YyFYzPgPQuZhOEQ8xvF0PKnO5epc8BKjklHRWLjQr31ny/nJKqjM/Lvjud35acjUrl5P837Ii7GJcCDXvAZH96WxebIZCq7aZ8F0m/5h7VAGYVKs0psEGOc4todRHX1fBZkf7k3gVMkLZfD9EHl5cPfycWuLX8JXX5WJVwQk4Rbb8lntIuAk2V27OxeLpP43mIfqyIe2d33vS9QB4PMir8O9qx+uxv4coY8IfsogdwJnz/FiR7nHiRUASoOzNSd3qkdEH4vHifRIoOXZJeSMgQ9CfgqNdTVzXdpmoObv4LtkCVmIrrsWeTWUgg23SmpSQbfa4yrS5MCHAqON00+YmhURk1WLMUPKQwFsoa4HhmuhVLsGdmZicgo+F/5LeF0WECUsCdEfOUo64IVag9T6Pmbj+3PYG1JNwUbsfzKgyTn4MmQOOPCUNzh+ZeCIrlzL5DAvDmqBcwWEMT8qoOomP9mWEfrDI4o0GHs2CR5t/EuZfW9oZHQX3LBsk5Ph+6yXetE8q6Msdj48LtVb+c1gELeDMqURM0XTiJDqDlMmRbtDLyfEMMPMB/KKQ3E1Mack8Hvexuua9p9ArPL3J3Bmkb6N2R1vimhjOoJO6lx6F5L2mqVwAR+V5YmajbTOI0DXWqy0Vky17CZ0FnSdqE1u7Xbb/sfVgwAjDzzWi3KVOviVXhhy408RCaFP1be/wkk2qLgYhE7Dywb/C+8gP0MyExpjujeMRycYUUkRDfFUT2ukqZ/HIrvcbxIsv1ThvaBDsJjDmaDxJ/Y+0pjiEtUsqHFQv4Ik3lxJ88hX6Mdt9VVekaoNoQFmehgNCS8e716Y0Bm1Pj8AVEAwcd0+FFyfSOmEherIB7WNd4hxNNXMmdeyYRJaadVzeTxJXwHfIGZ619mWuh1ZdYKA9ZMKj3heUna3mbFXu1MjGBXCjSyjjs4PyORZOL5W0NkViAPtMfvenXSLoTY6o9vIdDYKuaqSFILIqaXZULeUJc/JDBYG2BnM2w==';const _IH='c60fdac1f7a418eed7f7a96632d2fc18448221df8ca0c09e8268fbdd58615a47';let _src;

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
