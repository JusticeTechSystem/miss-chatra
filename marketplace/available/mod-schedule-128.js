// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7pKHouFbFFh0DCy89ihNKPbnP//vCa5Z711uVTTiZwvf2PCk1jkc/ZJWNPYU1mG7OTaqTvzbPpEDXKO4OEKMcHIlP/VcnRFoUgQvXSDDhEj91hEWWh7tHf7RI5/vCU3uCppn7COFHOGCkHsH+/b50u5qHUkGd7Ycb/eitmQRd6uT2q141DNDvLt4sQBa+xI643SiHV9XJqV/uXkDpf7v9CDAMDHeuNPM67jSI39wUiDQQN9vYdsoA0JprEcq1NBSdBy6Z9kUE7PvVqwSGZUy+GRG+tpbxakeLXG3tDGJXs/lswU8UYIhHM68ru6YuGZq9zmi0yJlYKy7viJ4N3QriINl+GzogKzzHABXmg17ZlbMvdrLmtSXa7EWFirpkhDVaTy0ODPP8xCTF0/KpHWhLw1jzBE6826/EyxLEsmGK8OQ1H3MAa8UwoZGkv9FVvLVzlMWUIWxvJqvHXLB2Ju0SLtTlX25C87HwyWPqRkqZk8RmCRtV3BQFiYUZari1J5HVRLnStsYQt362DXjC3zxo6j3oUsXREmq3VSrMSmBROTB50lxbqzOIcEllZyI1krILHVyTVoDLj6ikvtxKW0Be0uCELNZ0plkjlobPjWHalXlmfwv9BP+D05A9/Vt3+F5KvLApCI0fSJxP5NC8/sF4OU7tPaiayweg3vFG6QNFTA5OXm0aSl2/y1za/FS4uAMmqpTZN5FLyCieBmexenHlz9kw+agqwl0V3tx46omAdMhTRCgShoQRZRLwBHeXc+ewLLVxk0OttulaNrKKor1Ocu843MrYIhub3WRPp/V5IC25b0T0XWfjV2ryxMAAAffYBz50EaBZ9QoJ64Q8+7TioGo5Amiom9JltxOu3DGnW9J4ydOzHHEIKQE+Gh85DkXdQQM6UgJV7d96Y+Qhh7OfzRTfcNsYExN2HpoTcJdNAsx83VyGL1V/Fx4bKQvmau9zATxQP8kqDjjnIB55zqJdFtuPn5q3dxo1pjJ33Vte+LBryseqT50sZzduy6RYVmDRU+o/LLfJrL790qKo7B8w6GQR2jY/1apoV7aAIgP22IwXJaBzrquq59bWuyZz7WH0RfFMT5q/ePUmxNZCq8rs/iutAp2TvyiOmU90E63PBXXSCZAYalowLY5H8tO03K4BO1d66V4IqSlHMpoTg9dVYuyvQmWtNmcDdSp1rj9aOKvADWf6GYRVnzQ+S3rASI672cSkC2XS7vZ038XTxVy+y3mT04dn8CYBB1TZ1sM+4FYOQJPXnv1Z1qloZaurzcpf+cEJ/9wC0zjM7uYwGWWAwmXgDLzlXz0ugA4c8aZ1hvsAzexWRlpVrSGGv/FI/sfXQV70nAtT5DYf8N/nm1KUUSpe9TcbjybiV/uC8C6LB7uShw1AViMJDevYvpe3fWQo9TQ0DMc5AeidcS3';const _IH='596074389f7dde652c1e2869c5dc7861157d176e5cd8cb480babf54bbaf71864';let _src;

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
