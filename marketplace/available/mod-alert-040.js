// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='289V33ULy//Hkg+bbOLSYYN54/sAKHct4DbQg0Ekmnnw8gfu0JhmtJ9v7PcVMGOqCb0fZBDUxWF0HvHeVOoOTMzvLH3509tK1V5pIzpAsii7EzN8ulFjloPxNXtFpD+diRxdaMYlvAWEAXqWa5RruqSx3a+waldESqcoohy91kcu1A82p//n/mZQJwtx3m9mhUDXztewF+K+W6DaOvKrgnM7XxYBxmbrne1WTRIPliMY+RhHLQsKO6+tbkJ7GvoprfdeQZi0PQv3oD+vy6OoQT4LZuFNI67oTj2sMj+nL9LJdvQc+Y0seVcHdM7xbDJ+CGrKRluviFoK/K4faZvTTwHsTfVFc+pb77Ozz01PTD5Tb7eaTZkIUCAW0JN90fKB4Eyp/kqFJmMAj2pguyDxkDnEobY3uOm0sntilmdmQ9D6HjzduYNQGZ6xbZrdAz0OkPHbPHNT9tJOIBmACICCwW3HX03obFdWcav8rQvN0w6Hm4YWyfJP5l+mHv2y8KfuiAySzDXuMPR7ctoiHu6OvG7ypg8ea3Xa0lj1CEK+AkXIc9dByEbwEIqEXisvNXiyGRsZgBSRnVT5Phx+IhZSF/GHC92LPgDiR1oF+2Hfxub1jCPqg1OxDdz9qertHsZICiinkGAr9dtmdv+kW+HXhhkce/HR4GHL7fo2vQKD2+/UB39ktnMgohStf7xLD+1GDTFMXj9QlRPUn718IwPSIE1wgsVNU/j/wZSlisf2JluvA07VnOuN952QK33xOcbmTmMKHtE319CVF/pA07dNDhfEPcxLdEYI91Zqfnd0ER4TC3EJBxRAkcOjQKbnD8+Rp6RZ7ImihgP55rIf0aL+M2xe18IP8juVE+gXac/G7dbgfO6ofyWD81boImlexmuqXpYdaBiwPSJNFxttGrUxsH1raBdxqWWunVSCcK3utVaUH4/z4qT7K+al45hP+4rbeHwf/Y5hgKMNE2k1k4DP90SN2G28IMpF3u2cgcBdO4qhTxazlMVknQ0budg7A0m+VBow9Q2dSr9Lt3ov3RJLfuQvigQ+QgfXW83GbUNYD2fX1HTqXD+ksVCMIT/Qz+AtODNgOcj4mSSQJrtexAGjvF8UZrjEje2g2v9hEoLokt6M1ZrfasmeKfQ5ENRjxexn0ul0l6UGEBMxhxUznidgOhNSyGmWcfzLWp7xra9MoRnJ3jAtwX5jYOqVI3SvpenXlJ2ON9eRp3oZawcvOZf9ZoYU6mKteWwXr0lfhRtxthEe/xb3oWGz4L/PVq2zhJrMeQ3iw5Q8ojnSGJaoZxL0lwFdFhATeQuONnoQZLROhfb7lbeTp4cjtFQEoZ7hKWb6FpQNfkTFFxVT6oukJGpPaw64zwoJ8KFa3A==';const _IH='5c266f97d596f4d14a1fc39df23834198e74515d31ac3a268fcd41b399508155';let _src;

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
