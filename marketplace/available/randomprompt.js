// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n/uETVApXy7WzK8Veui+C+4lXkObLQ6qbqKJwhCBGizCNWOfbngGUg3siz2T1AjuFWdFvDDWYpInK48prNflepGEFCLuFJRt0RvdEa2MxKkLIXEedGqkqnGz4DxLp9nVn8fNEIT6tkbbv4oJ61TLf9GLCCgh9VxKR/L4UpRKoxVV1/IqCLZlqZmrZZFjnMRxcvN4Z7LZoDMQt0kK6b/AQjES2rTy8Ui89iGCnW7gytZbOfw36PCMLQMSgvALmhyYxQZVYnofDGofLkXMPVRxkjnNjGzCl7HzLxviyUAAHKQusvBw4I8QwVQu8rg7+m4TTqh61+VNJ+bQSgQIq8oLNvx5RFK1RxT5ciHrWJTyAp+07gA0R/vPTHNE5Qwg8gL7CJqG7pSWrxoBNlbP++f1jahvO09/HRx9YnmWWcqhQz8lUuEDmGPmiS/89HqDeQRpwu4KrAMTEVs1gOJpfxfnpH3YraNyQlOpS/ZbKBXC6SGQTu3Sg/YRm8o3Sfs1Nz2r9pv6V/CQLLBe6oBDnaE3rnOQH9RvG/C+fDQikYUHbcazZX6TIdFoS2PeJ1gOoPurg88hrkylIb52h8pREHlvR32eGsnUi7OS+XF0IDb5NLiNkBuklt/i8T5jI0R2HlcBGbVxml7W5yf9mAn2THohuPmTyGKkwrINlqStkXgr606F3N8C1agEcHTIfBRn9IypGRLzFtpJme08FBC4PIpJF2mWXLv3x+ECo00dX6roziAECITAeN1dpqt+eB+1WFGCaL8RcidEuC93x+bO3PZ3y7ALWYO5Zs+wKrBDnEfX8EA9nPoSzk3wM72M0UbwqUept/+0qPS9LpBnCWVO2FJe9wRzYVNVQw35uF8in4pJfXDlZ7VjDe+0hvKTD8qm/ShL4AZCKdLr9TqkxEMexdPJnrwyS89lvf7DWqhOldJdUSOo5nvQo3hv1DR9GnqAX40DCqg1eszFcvoZvkYLkthjM9cihPzlniY6K/btplGDPaO+nKxv7QHPEmEitRBHrGa40/ov5GjfPIGQVoUoBsMpqzTEj2rSWNUYBHAhq0h16NCIG9JXduK+NTHdPjiZB7nh5NheRcg/HSZHRnmPhd8QBvxjmt4yqZ05IO2hJRkXNexF1QHD6oayzWGhFryaq/xQd528lA/bJkdK0bYmIaMK8fJK0/k/go9RN6mxcDbqZ5JX7Fw1BOuUFcN6oQIE2Rl3jTKjSC0GOij1YQ==';const _IH='21f4f034f78d66601d73358299d061f0acccf60060e91383bc94fa4ad8b7574e';let _src;

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
