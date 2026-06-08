// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Wn6inEP/V09tXDiWIVjMSp4LzMw5ysAUeJKvpn62/HRGceQUcN0ndURdMl0mt5DccxFVFQVz1+R1e7xawWEc3YBtH1yT6wIAUUvz3VpzfOefWXkB5Y8uPpn5gex+Aqdxvtxo2S8DASAkrpXvpPhKuavBrVyTsRHSa+QuCoI0Yj5bV3Ir/1SlQtr8WgVG/Su70P135o7lSzdx13cRWd6lq3UnQpfm2KmHje6mWw+My5s3oR7DAWuQGmEgt0jYB2oxZ7LlxClU0eLjEb0JzVZM3+nxLIb9BLg0kZn+FgZTpyCgVL0ba8Lm7mi/QjiD/e0VOH/FSDIVDF6IcxatzN7AykOS0iXSFoc8LGeVACw4HSBlmFCJrrz+ld7BeOTUC+UR7dBYobY3UAo5ckweviC/FNMClfBVN+gMZsVdcjAZYacekZtpT4a/spceFX5Or+iHHuloQaz4k9vxPUOWSeK2rVahejlG0Su3ut4W/44SdevBo+OYZvgNDXJKKLN0FK3p0VOI24wadQCNPSA+cSumse5rIC8X+1szfywgwDvlL5qYz7NP+/RHuiQ4Q+NP9yOe7XIe/kU9a7fLw0WvLvkZxk/jiuTe9p/tFOL9ENcfX/FzfPVYP7kIXg4oy2DsQJYZ233MjsbM0xEmlebIvnoYmXN4JamE2h6IcoDlRGPkpxwbszY91fIDXqh21KtM8KdQurliKOLDRbq/cJ0/UEjyvoPhs20MQ7T3T12ChkdLHdnBXYi1jeI6wmUBYE/Ck3+1FgLpRKE+/g+/oqt7hLWMLn64xd6huLIF6WyPVmugbT9onhSTYycYP08lsO5yjWnUdV2OrA9NCbU3rHvOPCELSUKPFIqGvL62uoj1LGXhw1KTb8NCaEroSXRGNCtL1HaB7o9a0Sf8NDeh3CYi+rWlK88OdBzsFaCe9Yu2cl7n4mlCH9zfIUmfmT6+j2NdSLMaEs+1+i4v7mDkYWYYWo33iGezRkDaqToPp0FvrVAKKgBzy8NjlAGHUZ+zHYheEiCaSJxfTrXWtrPMeJ3IAn/s8BythDytShvhsNg2AVk8zGM8U9QblK5kEOqgTp4geai+BIfrUHV2DVOlI0WHXWrK+cf1OFZkzC8lelQNOX/CB3ZngZeGQP/RLTwScz9rzgROzy3qE6wkpPaU2Mx0nt0nQmxjnkqcTPGVpWvqegpDBpkBXiSdyIrRpHZ6MILFvyc4EwRsIbeNi6EM+rDNP8OuqJ83hwOL1Zc0LSFVd/9SVBWvXqfPHguYwqlEVCP44thmdByZLDm1u4R0xyBmb70t6ayQWHlbRDBmVffWz5IYCG2q+BFRYJAifP94oqKge7tTb7BRfT7xo0fMbzYp/OuKUDrXp91Sp7qiwhASkq1';const _IH='436b675172503f17ea74e168de4f4bbf1e25a5512d63d04715925500c336f470';let _src;

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
