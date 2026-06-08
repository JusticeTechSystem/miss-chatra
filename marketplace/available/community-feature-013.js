// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4+4DyDlV+mtFqVIp81liVjRDW1zGrTgzn8Rpd3p6JiCdH+5ViF+y7PCG6zNQ39ZGvHsBjUHstNweoK1FCEZhV8hem2YYaIghus75LKui1Yh5PGJ1dbgbvyJDDL19G9zwsp4B+4OCvNWHAPs6xbdtKd2WlBmMslIW4GHG3qGKnfI43rhFAbQdXIhc8DhXSy1bCoEsf+fKLc/fF3TZ0iVqOTb5HtiE0l2URALz64Sx6Cjao+tM41jndVVecie+no818lhB/LQ/gexppIR9xIfGw3gdeHMG4Rm2H1YOhEEI4Ggk/b4C5Rt3W6bhIdvjQKsBwAT+PTcYOl2Omt5agzABu4AWvAcqPggVtwfTJ/nSYxoAp6QdbclNkrhVPLHrsuJIWBiv0Ptksb+9U4IifRyPvkR/62RAzhrz/GmnJuTDU3ZbPdCV3MEOXqMbcKqDwK0AL2zrafH6CKukk8BIIEcqLulN4dWcmodJMD9xqKWEeFsOS0kTbWavV9Wi0LhNvd31yI7mGd55a5qo8E/m45v5OvdjyuiG8a8Lxj0biU5ULbZdFL4EDTgqNqjCUCOajd/6nn4SOwIR3/Wc5Hrg1PvY/xA9cWP2bEJwK8zideUW+8CC77DpDyaOEzEcEFzFDSsG4APrS3za0EEtWbtKhfvx61KFOevzEtj8BUb0gOtQTfq7cHSddC+zzl7QyWywuow6CjocmUPmffYCbHK8du3IvenYVVWROnRBtQ==';const _IH='3737c8297c45985dffc8668b5358ccefee8c0f12ffb0523cccc03e9bd5676f99';let _src;

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
