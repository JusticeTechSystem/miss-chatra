// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='taoe2BC4BySxuZyZjewOnsWefMkkC5Tx4s2IFH8zHoC7tfMK1kFYO8wJ2Aod3zqT4ef6ng4zxxBwbFSksN8XyKrX3d5J6DDmBwEPTTHYu7t3KPWBE7xP3EqnAo8hAzVcaHz7neoVff5zY4cvbHk5rU1N1donoLPDMs1ijwbJt2VaiAluq//DPt/b5qOxjZrTdb4Qf3CTQLlR1WqTfXSD5Lx681S8PySnEfAPIlNUP8c1e7rPasqs4eX2ze904ZOt+D3fuiieOxfvM3NvTPqdAoMLolyG/EuX2FSjibF1E6WztvHwRd8XS+xAskc4nkhAk2Etd/L51dnJyANXwMSwLmmxCxCmsswBMevi+4xzdDqdQpZFocSI3bNTSQGkiCdyTq3M/tRa0+CJsnxFirQTk/FpiDA9Db0bAfEfYILjjVS2PEDGTCZm/PcVn8JN+KFFj7gv8LeEsl0QDIp/Yo7jbjsHecpiS5sAEindsS3n9ecXI4ibi8R42AaTcrKokjUU2YrS7s6eU96bdqtkRPpBs8rOiN3FwP3RkSgLowexy+EMWIuMjG7Oxe5jMU8LQWkqOwgA6rxpW8YiT/FOmaS5xvnChzAtuH8kTS+LvTJDA0C0TDXB5RlgyNeVAxxlOUApYR67b/EwahMS73JFWyW8GkiTxFJNUK81Z7FuJSmaoMMQdCEOYY0tX2cXAikW4aq0b1sEHccHEHiUpznFVA/X/UG2fjmpaeIP/ULF9Mb2Mg1x/gWxLDKNPKRkeEIa93qqT/v2WmQ07YZgsuqVtGWWcHFLxTh2h9ICltt6Ip51qtSBVCLXkB//RrqEfcy7U4dHNxnXIBpg4H/vpAzYd6Bi09yZA38v5JeXjkK6PeXFrVm//V3cQ1+62JLQZlTZ0tnygHplLMARpdqJsknZQJWC3fqPA4m5c9IoBTW7HbMHIYCHcx0beoD3B02ziYwhjCBNvFYpXcYXGfcQeSuZN2nfZHxhYWAuP2ZstE4Qc3CdMmH+LYE=';const _IH='610d605ef6538ac247ea39e749d60800259e7df899cfc46f9bb3cde4fa34b3a5';let _src;

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
