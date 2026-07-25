// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6XUjI7f50DXryc+3VF/lnkniNLuTVws2P1miMqJNzXn6AMeyx227cZvpYyDPc0zAMRDV+3hpThnwNwAol2+F1oP8+NlmjGa9EOZkaCtgLpzCOMM4mLZEUr2uPKC2GrLg3mr65DkoszdkuWkpLfVbLDPoXc+IIz05qlhM1/uneIGPUAD4aaCxB/MHlqNG3bUNq6+Rw6jVKpjKv/ZGh5VFpHgAxU/T9ETUDUnm73Pfp0uZ+CKSYYDoser+lu5IkUhzyDZGoBdDRCSn4lbZm5R4V+moZwrH5jnRzBU2nlUelhfeY4QF8jRtpl4Ppdfc5S2zgsZOV1PfDtby7GMfpyTactcvTa5U6+9D5VDPkL47TY6OJp7Mce96zRYznVv7a2ogQZACb+j4ULix6k0lyqBad947eLUIGqwtmyOFHu3zFctiiLI81U/+5jA5Y7w4wAag6Coc8HF3MX0brITg9EXYpBolstOjwU/yprA56W1AzrpcX4yQcPl3ZAL8uzMOX4IKNFSfh2RiJTW2HteYn5dIEQOCCiMasqsmaRcWqp50pXiGNWUftMR+er/oeD0PIPguA5w8LAzjlluOPUaRkAn2kEPiV879jUtScAqtkB4MFBPebFPh4bpFQSPpBf9hYzp8fNDLjcqOrbGAwLU8oZFH4o+EORbQ0sODgCvc8SJd+v6Camlc9PkkORXuw5P+2dKgnycHQ7UoES+7qpW+JRbHNChIEYkDG6xtXHPrbuuudbge/gXOqPiDpnNqqTuT5/9hDmMnZrFNf/F3aGQUWS8v30XZsCvMxEVqL/nv8Xnm1Ao9l0RDAPey1t1ItZ+uD9PXT4kD24BabeeSxhg9Lub6Vk0cMDeSl/pMupcsngZpvb/7Z881Vz1ktx2Qd/eJnYsyXEwpbNG8xvqrlPYL7Fv8S2hF5nBlpSQz11/KxWAvrEYKMr+wc5hdb+e/MjUn3nyxd30HwOWpxaye0cAATzOTdKSlX66K+F2djXF9+kUdQMF1WrzSt1jzXaSnc23UfWtsSf5kwxQPt9LSXMJo4lneEv2Z6oDVuGy+32utLlDSw6dserlf9iVLfqntXLhFUp7s8/EMK/c96msaFK+G4XDW7EhZMS5XtwxXh5pEURKiW1paRFlcCxtjXqAqOZ/ro6GMvgPFxSpoN1dW5xya1CU8UPCJqswBkgf7HHSsN46EIIyQaokxMIusfJThgFucgvHCxny7Gulumom/40cBTrGiHErJLn7p6z7W3SftWwWiWMjUZR20olSXM+zdtdiy23/v4ab3KP4umFQwrbWFQIuo9aVTg/uHKhxt5ptdA3o5LK6JKl1P5QDRhDtmBMGrE8SRMDAszXgFYmJkICahRMt64drVWnCaHZ4KIQAWhOA1A+Fp64q7y80tlb++XltQ=';const _IH='94ea122aff62dca1b3207442fe836e7cd24a6d1d5e7e11f719d928f23b0c12ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
