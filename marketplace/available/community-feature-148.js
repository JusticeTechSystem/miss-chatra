// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FAXeY4R9ESa2+91EZFIr37qBNREmPDkPUT0DHbCNc+gnOyYThe0HUb16RTMFap/KREvEmBAf0jDtDa/qtbZ5cEt09pjsa16a4/31AAdIVBBgtm1goNmafCnFDouQ1uxCk3qM8H9McpLrjZfx9lVu5sq62vdvUkXcRALOE8iYimynCy05t+N1d2VzBstbeUuMQWk/C4K0v/u0q1OJrfozFJVQCsUVFKTx4Q6rynyDICjswJIeR7wIqiXqGfO7dMzDscXDrLkfxh1VncKGpmrGw/2bJPejZfgDJ9w6FRxN6/tBfMOBzuBRoL5qSAb5zh/T6DnytEZYl8GTl4+pBzlDytKvr0nDOosy75542MBDlOoC/ltQG1y/p9NTuhhgJPJzA/iSqBB6qqS65Whaa/1cPgCjQklB5sh7ZLMd9JwoI656oxm0ozr3r3WwsxLmPPGzNXG7Hh6ke9ZkpHeLoybV866jgQAhurBuS/oDVX73gmtEWnNFXjPZjjpNvJ1zmfvCS8NrIbyT02d7Tow+aMxt0YhsCNl6IFawX3MRMV/K0bTLoddhAsS2luTDfdpKFo8gHhO4xCQgW5p92roTt2OAp9P/APf/DIG8ZnMbRfQNSsaQHqGbNdref3V7me/UiFqO4Z08PTt+HhlO78BihQpuaNhpXTVpJA6lC1lmAb8r7hxQRZc5WA49a/sy6Ua56Om8K/m8T+usVKzq9HICDGw5HVyi5Ow7o3G72V2dl6c=';const _IH='7b27d0cccf018c732a0a69e5297fa5d34b4b1c6968029a75c6a038859366dd60';let _src;

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
