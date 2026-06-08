// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VBwl5QOL0NjgjF0u8QiotUA60imK3IC8ELrM11/PVnSYe3LwdmPy228oAzPinMJRD1OYo6zzquK+s/FIEuLj4G77PIt0t+7w9lWB7vAN1JJ5lvDH4JV64LF7dwkTf7UaXp0JgopeEwrgnG2K9c8NvcIDHMO/o0ypzrJYb/NitQgTdHXPhYMgCa8pY1pys4UXRB0nQwi+2PD+ksU6/hCpoEFzaw8A1KuBuW4Sv8Lk2f6CKIL4tfwjyhbZwWc3porrEy7DPxC699nkGxr7QAOvUMq9x/VaP+P8drYIkPZBmBRSUm17zNfStxzkIsr+T6Ry3YEzOq/PsBTVmzyAsNMugeCucWfTxOKNkEpmR8W2CK1/vb2/LHvdwbaKGQpz59dZnjhmS7KuMKGAISxFL0cJ7ciny0dlqUMF9shuyZ6ge0xV57lYbayTyI3YTiZ0jhoe1ZJXRuItz+CTEDVwYAcdOffH3mmm0C0umnk5J7Pv/MDCQ+fVNyeAZEG+K220XqoN0XtiOB13USRw3UKkiK28hktvBTbE5KKvr4Jo4G4b394rKrvnRj7GzpWgvKtkvK8JYFtVsP6vdEsR/HD1YzDzoZigYGc+TUEHaFzw0IW+QF08GtolRr7Tosj2utleQSvxXBdkfpbPMemGxVS2Q66VFxoVa72TT736jxBnObbJsV6pg8JBXVsHM6oPMJp5crz5ZuIpuQEtUQM4yGZI+am3OMqRXSfhO14AGcrUhQ42TGoPNV7B62nHuZouzMtqimpLw7HcsW7QXk9DVbhWocOOh75w40/G14hbRm0HEWaMAk3I1gJH+y0a34UDQV0VK88VFCxsHNTK/ZMphUYcLfp+91+nkNzSMwf6zpCspg+ZLD0S4bYevZWOFicz4EHaxaDJAw44xkV8GFipODR/BzQD1UyMWQ1xJ8wO8d20HjI42yg9uuMKK2buCt6obvk0/HtOg++FxX3Q3/Saa82Dg/aBq1FPdolquHx3F9w8tIogC1rrHCsZ+n3jnV+4YDvy3fHQQPHvdCKnOwRdnTqkeAGxWh9qu5cNlK2QyQ5QuBlLlrdjI2Rx8RFCxqb0aNuihS7RaQE4C9icWDsW8YVuveUjdL8upaNYyYhowjsmieMl4aF5ZXUd4oEhRgJcQYtsmUbD0KecLmzp/O4bet5EWguoTzMozctke0E4SRqIOSTXBCQ7HvUNO/7Bl55H+9cmvHgD6TFAXaMYDJs2oNaqGm1+jfz9DCGJ7PfbdXDmmWT3EWXNmiwycGMlmpSIYGQVR27pUVxWmU6Q4IvgSYCh7cjSLfWOBtEBPSIBcG3twGNEIl7i5DNIRFxWrC9aLImkCw2f9dQCxFI=';const _IH='0235c25f24f69cf07040c83bd14326c904bef57b6cd9649878d5ec4c631e22bf';let _src;

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
