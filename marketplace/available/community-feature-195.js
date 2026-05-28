// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+0MNF/b0tr/Qc0tV2Au40d7QyyXNCHVG17JDLD7+EzjMOEX6BQvRXF6jpskPp0pjdxAqJCklGPQXqrMsYA4kBx5SCfZb0sdKXoV+efb5SYHVeOGO3Ehy+eGDQUAY+q3iD9JHMChXRCbvPvFZlN/ysGQTSArN69F26LFyp885GFPwqFWbdazGHkB8zkohPE1b5bHmt9vcLI2z4RtZlOV5qV03Yn1zk7EENxzvGXKmojkgCVJhT1G7QriaNhoFG/0EtTdoWJpgw90tXqaFu0twkjJZvtHwiMTXCLcuwAx+swJCOLQcg8ZD3+yNDqYcAeN3fMETKqr6UgxczT1XnBiKldl0WHYekWKkcMVJzSpCar8DT1ljaOAAqZsoeM75EvxYeR1j1NBpePUy1nCQD9+syyUHSkdZfz4LEAJQS/GSgff8KKgwMVdLBblRdYRN0Lg5Adc94Q6BEkxHhMXvy6oCkr8ChTIJZFTVUHK9XGB7xTNYNU6L4tb6T+5/z5eQWu/iMEr1RYy5VmI9gt9el0T6kG1xKzuP5Ubmj2EHKYNlzcPGKpmU1IUYptBxL+cqQnwiBX5oOC1izW5d8FBQtAcYniBxG4ValB2zkI16lz1uD+zGDPvq694xYtORVJgcBoONqCPBswEoojh+NrhLE0SjFm76r3UUeXsiZwg5TnzqkF2du6L0u5Jhq1aTXXlImt7ixzabk92NCdbvCvJmd6RKvC0iJzwyqRX2ki/j9FYoqVuqvrpuygB1JoJ';const _IH='06b7cf7e1eb068c4cfbf1708af11de1001dab71b1d29652aade0104b0723139c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
