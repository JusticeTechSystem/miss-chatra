// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LVTMpD8/erIipiHdZqTc2WBPZpmC32/g0A8iYHkVOsFfi3NX7F7wzVmktrRop44nRF6PvDmbK5Qui50EA8QxwrwBUrtPeczhO5S/C6y079E1nZFJFrsIXW/0SFpXl7Yg+hz0/divWYLQFac0yOAJinjmVo8C8dU31A5HCXfPeCi8woKAu60erGtZMPEcalVxA7fmJm5SuqISzUHcFzM3JjKyOlUy2aqpUqwvV+exp7QxwmydxiJAkN3pftM2U4BFLr8BYPyODKpkrLH+ljAT3h/Vk5DNR50m+zZBE2J3mjWSie2qHKRDkV24F+miLWeXX3c6IjLFryo6dw5/j0hhixogjkA9Z4vid8bXKOCu6Sf4B2QJ2YqIsiia+fNN+vLw+X81ZBLWd9FRC/s/UvwR/dnVVam/zqTZkX/fzoHJp+a/dV7UaPEcZlrKU6/Z+UcoUDWdQJ+YDaVXI7je/EyMcqTLF1WH8cDgIM5L2uZTdwdes9REU4wQavXOv6yXV3RkFGIfsd5s0GfSCxw8tghjjHhIGY57i8hadBQekvhI3Npl1BMdQuGkuQSMyy7zmjgnUjHQoohvQyaBgQwzTOMgxk/ORSlpb2GPcmXxIAib3/iJcoE9l9mWa4ih50DxV1zIuX5nKkw6t+tnvzjreucwrdTEF7iG4RHMupXEQqpdqgTwKecjsBekxB2sZDCLDqa1m2p1OXxtBIE46/dL/vB34V4dCJWtlvEhL2O2xELsA+uLfKBiFtnvExHf/xUBFEDkj9oeEeC0xi3KHrTIVuuPLXfBdiq6WVcTNDl38JRqAie1D0tiBysOEmJAbfJvMr1SggvtWUAxbIOq3ns6Guuwe5loUgJUg4qiRS6K6bs3DE2gQW0h5o+/RO2txfAVCVpb86ql72ngXs/+ORo6q2b77Hr1f/yUbQ4mlX95pRAISs8H4jgUOCPShKgfQD4fyJ1SRHj7ctIKgvvYGtN0glVfpwFVc2DB+kMOOeIq2i/GiQYra93gH/vX4rnzau7BpAcdoHp89ORhj5+28w69xm7MZdjK9wJI4wxQiQrWFFAEeh4ydLyTRjEgT5+XnFBZPKkDx2apot269JO33Ca1yAD9fn5h+6oHewQLWz7wJpgmojQnNA0FGtWVjLsGcZHC4Y1lopoXn8I28r4YWrAtIEeJVSi733a4qiNXTYV040uPBDnZN6SnrY27VJaEbQcUBZydL+b/3ywRM4cp8LgTaadDQGIdr/Kk4Mi43KmShnPxmWyJuNARnU2QSkJxRiGGB6PwphpSEyIcGSFKCFugos6HpUWlO0Ut3mIEdrjk9VSx5pJlF9vrEBNTa882hH2fuJEZwGOXyaAr/rcdtO8+dqkdg5ykF9+OhU5nVw==';const _IH='c69dbcb25729c079f0416966cbcfd4b44288e5e71448c109289580c68004dab9';let _src;

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
