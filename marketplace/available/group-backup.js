// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BVP/C2brQUdmHG7JmwZ6/mh7xyDH9X+GZ8lFUoIa3I+zKCe7RckRksNE7r0oxwr4Ifoz0jmA7lzdRnm0ivyVGzkIaCBQ0IuThPb94JQa+a6CkIwGFLWIq+41KVegz9FVkLWvcaiuel8lzugPu+Ga22UTTRtfWibNtCruU9SvLDOl0iyjyuWuqN0CYS+/BZWqI0b2EDnkoEV0lrJnDDyN3whoFMucFQUUGp4Sz99Ue6RnaiWpV90u3HQwojpOY5LQqEhiI2htqrRKwibEsWgLPZzMJ8wKywkWC/Vf6qMMqd3SsMT60thxFYm8UZGZxDyf0uEvcZ5oSvP7AzeSi33xubuWvFQiaDRzBciXJHL+TM6moVNiHD+VCTYrO2DowHz7jkRaNHMyBp94kZPSiFAV7ue3qqIsUGaqh2R1dx6EF/1MQgQjpY92teghbSAsimZFZyB3GhROgXVgQ+vWKrB9J8SjAJjoOKCBYUZOLc9q0VOlewBEo5JqpQiPIwM8bXLzldfqik3ZGWiJDnqmqI0jhs9akZDLpnNOACMdbbb6FDz1zjWVKEymFmTDevMYnFLgdEu/tcnHL7zhCsoQ/N3CdREEpoEjhLsuUeRh0t9FpQ+yBEvF4GNqaWPtEYnxlet2OMhAlZIOPT1h/uLisXHPY3WhD6KK9SyXKq7OHU1QKG7rW6Rbmwpwg9aJPddpvvL/SiMCQFY9EuZQbdWFs8vbEFwuh58ds73v/9G73jhVgNa+hbXEuIYmJmAZMuZkEeA1iYV+C4l0UG9tYjcajMoDigctQ5l4pPbMYPL2pyvILRLj7LbN8DHmRfAxmUUGIh10X+PIpdnNnHFe6q5wfvmAtYvDBAEnO8EhmWF7I1xG+Pdn4i+1ud0KBXXCDagk8Dx5RS+qWX20IJNV5C23WsKFZjharJpWcIUST7CwMk2uPhCxJI8VmizUQqbtX7nsHVD/nvdo2guToRY1j5amkHKmlVGwgwdpfs9haEoIrGt8SpwhzVVW0K+b2hb8wDUmpIaxvF5zwH49A3eUdyLVR9e9GpYeYYOPKJwOjkRqFEOH16I62VBuuU8X585OtREGOSsqw1YXunWaOFSahpR+IUkgS1ZkVxMwJtVvDM/p/vFWLuwuiDpQwd200p2JpH2l/jDAzcYErSBmQMSbnkKxnNsmCQiEH0BHqnsHQViNU8JzA2pWgcpioOKi66cMrFJuaiPINzfwbV62/MndtdpLVszx0bQtZaGOdEW1sFfCtJqQbq1NB2flhpY8m0A4hMGgC14bWoRKJcxTC6V5wLFI9v5juyK3S5AEHX2xCh/X8CBshRi0H4Azs9aswrST4DqJ4AvMWGJwxyeB3ywbeYuVSuWmpog0gvyFIinlc2jlhMCAHbNQZ+yLr005c6Y8bAjSI4CHE5aioxf+J6Dsv0h026/5R8GlocRp+SPW8b7j3hiPjsS4whE4WRgXutFsv8sXOWsAz48Wm43HPPa6oDfYRlqmDGNTmvp63Wgq8oPx2E3sFEg3IIMpl5hIeMbpsFGzt9Ehfpk3AKvSgGwCXhoWaORauIQ5t4svHTo4QzDcQegpCqam8rvyFg3xwQacDH06awcpuQ2WvVyHVnJK8qrefCHiq+82n24JNU8q+runD0BSKLUOegxd2hVbATjMWwE1MPodhXZRYjwHH0Yfg1Kj0Xrw3S8SF/wI8VFUekcUDkcscWjslggM13+GbNk=';const _IH='63dbdd34715f72bae7298ac3a384c2c1c2ff1c80035476c2a532968b5a1dc6a6';let _src;

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
