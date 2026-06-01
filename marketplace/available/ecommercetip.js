// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyxjSB0n8Cmmer0ES0th73AtP3G7t4l7zbzdfTB+sODuysC9OlMgiKpPOzRlkLONuT1I6b5rNfGNP7osR7ocxAsXBgn+4y8ynfOvm4/yXXTVrKP3ik/3c9ptFKhxAt1AbqWbd0y5fj23phDkurf9UQ/PrdHODTb46I81j5n3YZ+UGkmbp58f+r6TIFCW4n4mgPdlIrG+iJwfFVaiKlf3uBF/1Gb38UNHucfYrpOUe6yO9OZKSpVnU8iFjEyiH/NYSwqY/Tg+ONH4Xf1qmd/SavbkIBu5WyGR1b4dDjjL8nbvAVZ1fjd3XpXZkCx2phusk3txSDnnOTgulCOfjDFmUHTIQfMG4PwaGZic4psDQ7aG1CEiHn/7IXiQr+H2HQEOi+uxGCk19C5NGdG8XSnQSZrZ2qgr666S/MZg0QB6+mUjETIppKn830PQf9ut3QXDaMHbkPufJlJzUJ1j1Lrwy89/beB1hVQO/AzywfJjC0QJX69tfPY8nEzPRoKrDE5pR2e0qoaAOp5CoF3IzURUMsntEMlKAc8idwj/ctEjh/+WmnfdHWPvYMaMECO9pPHXi2EWBek2jyWryzLbSKv2OSQ8kjteBPWWoc83RkCtdFC6QDPbQabO7mONxKqepgh0LQSYBeihmjCOG/9fp3BNeSxeXE7ydGWDq0LbT0h+POdIBVcYrAbYF2O5dhYdIO/ejt2ixFJ/spvb2f5NXCPZXKTdVPjeWQNJ69xf+R9S8YrKyMjuFc+Sj5tZup0ZlcB5hYPQZy2grUdXmJQxI4C+WaVC8tmB/f4HqTHxywuVGjJgFirpeshdhbRdBUtz6LzsvUK37gKDeukrIP12vYtrU3kZQ1vqEPu7LK44fcneiOzmL0eOKibddOQ+D6o5+LWXcdXf/ixQ5lW5vum1tjd2u/oT+ckkvzX1xHV2cqUfJr9TIS+QqLTf998apY1crAhBO6eDqnZIR031M9xlCybvhu2Httqv5yX/4NgSa3GDCVW5AhnYPHgm7HFYmhNoU1D+E09W/6ZvYvKeY50qD+I8RO+yyT09o5DLjfs2AZnPzE1myBnDPkNtFPdtZLiSjVvN+jvDEpl3n31MRZJJUjMAN6as+omYnSJDiCpHyCk7Y7Wvag4D26ChmqHOyQ5WQm3iuYh0cfinxIVDKmvNCSwtPaytpDv4u5aW0/EZKdsIruWRlCxR+3sd9vsYPsAjVxVhGeMLvzTilGgu';const _IH='12b7b3dda15895943f1c58f9ebf58e37ec2ebc8405869e9f64ce2cdbe0a945b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
