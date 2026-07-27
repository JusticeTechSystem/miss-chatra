// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaugORT7eWU8tRZNjLiDeMFMYOfv/AKk0pNzDfJpJV7CARF+VZbf3XMud9ei8+pQLNFhHRGM1/xvWVWg3kLYS4sFCMekn9FPnioUcm/PPLbh8vWjcqhdiXRMVAKIHnlKsWhsmtLoAQPZX7pH/9XPTFGtLoCrN4GT9fwUi+sNPM26nnJER4TGWoxDRmsYFH6ZPIbdrHzCvs2rV+/9OkCnjYU2yjjP0PNv6fZaglzyr7GusmcMp6uXbkUlBI/hUDB5Z+lUt0sphD/dKqHwmbiw+zLOmsUCyf0LlX/3eaV/lA/FZQN7FmhCRGa21xkGGju8mLvtZbL5tlbvGpftO7/Bze4K9KxnlTM5e2VroE4wKHVaEC5dKe1DPu2U6Y9hYwFwqOul6okzHCZKMCJsW6U+IwdKfkDIigkq6UeUONt40wxv5b+YiVhKkNTyMs1GQXxcy6DZsZpWSGT6m+byebHZ2l/Js3XCpgXRibgkRFdFdUb386r1Na9LOdG+1NeThFsGgd7p13e42qWJiZV81zCGifdWoxzqIOyOiREQkEtWZjKoG3aUMfX1EW3+UdogoHhjW/j8gUU2y18FPN9YBDrVjUJF64G/oNFAnQ2uDMgjMqMUJihWJyIZFKyc2MJYS/f3ACT7scpjJ7gyf0Li9V0AdwYGXBOStQAAK9OMPf1bjEpem8FUNAthi64Pc7dtXTV7/uq/GYLUli8c+ckMZzRY6yrIuTFhvn/k3p+vteUqrwSwJO31JZFyhc6bbl7AJFL9dZNb5ZsoMlpryK2rAbR0LoGamuHFQz6GW1xJGyvJgUwJ1/1ULA5aJ/PrvMNDxYFRUYOB2DqBMLyPZ4ti6IHu0p8TcdwhlMLAJF0NmsisBHBuK4tv2RZTzuiVAbyNihYHYzpYFIgcgtFIkU9OiggHBuJiL7rkSl29Dr6aKomnreqEnkBNNwWdWGgV5XNMzYB8RVhhX1yHQ//A1eKq/rZ0MbhXxma4WhgmWuk3DFEiAXbVobTN1uU0/8ejbBc8VXljbbhyZg+bP60i2J1NzjF3JN5waAPPMvEc+BtYfY2F8Xu8yHiLfNzFSNzMEVYbsaa9uz+NldIpZ2/+Scp3AX3h/iVzpWi8098JZJWQZnVEM8rFngqhn+Sy6vJvfCs03qgxmJnyzqXhUvZ0uaY6Vcc822+9ZciJNbrkxEg0d+AUfymwr4iqHmqLWJz3bkkmRHmGsHiX4p6xWb1LDX';const _IH='4bce9eb3be1213762032d958df288f2feb1878126088fb93e9a9776d3190396a';let _src;

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
