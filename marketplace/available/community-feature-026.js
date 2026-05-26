// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y87qYZP/FyMI92gn1614HqnofXb3Us06KEEgjZSKuImyBMhMhPBneiRt7KJD3pm8RFYNn23WV74wYzFHurw3Ol1puOCCgexKbTwoxxJQHua/+Qwf1ChzlDnL9NLzEJzU9fGifxlV3Xfew/KKMPR/fnn3E33EsjdLmaTbXkvoTzpFv1tG14ToEjjv2fLXJ23wD88MVC4ccnlJXi3bylb36vfC9Kq86Drq+5qOL1K52PYSWgP08qkuCtdHiylBIeKcVJiKc4Bp6wMjHDJ1J8ui74oMX+UX6KVr7rd+QDHV+PhmLHjy7ptWccH9ZkXAW5ZPPA2U8K6hHI5x2nz4Lw/gFL9PD+N6ebNQot8rUFIkSLceHTQ4aX3x5bvu7P6SAuiPtIduVkTxYNr2FKZwuNWRD4gcIfSQU8vx/ERJOtcLdSMaNc4ySgFzMsvFDKcsZdfWq76qc7xzODNDDpvSPmPv2AI7v6M/KSYEcucso/5DgH+2XQXkLrxRwp3434Am3Dl4MZaQbyLVhRDuSrUZDd1yCERUg40cNYk9is9gZgMr1hCaRDApWNTiTTYq+tmVbjFYqXz48ucchZMH76CoxbJOQyQ/YNp90RZbT0RrutnuqxGvh/XfUuKsfha6DPrOoSNygn6wopuvygH+sjCtjhBN93WYHFCOz+iYUmnI72egcjjqs7u0DI8Y9V7TNp47oBPM8LOhSpnecVoyssxbIMypnTLxFXM=';const _IH='697818fecac1c891e60f2e148601a0959a8801e8fefc0e504b77905d38b2b8b3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
