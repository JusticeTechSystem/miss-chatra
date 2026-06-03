// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='racMCiUjST1GKj9VuisLkwEy6XJl8hQsuAnpkVtWx+OOBknvypekUwFlXKEG/iazqSrnRkbk7Eew4XJG3hd0w8yKTVeLQqylN0Nz0TQ9M6mJi0oyHMdW0aDLiwkdMucu85ZpztSI3Eh8uP78NGnZ8gDibLPwh+G3E0LiRUJ37J7SNmwgAJKLRGUJJ6gl9HbHC8M4Nt/PMhZ1kZyKjVCEiUM6SdkejTiOdyvrQU1myrlptwXfw2/oZCm7oqNoyJJmHzBqZT/LxSHcFAEDrvtU68Svcn/t3ozKz97Lp1ayYkKT7Njudm8PyQJkO0qMhDcAQM5b69C+8BYtyDfQ/+PiymQpBE5ai1g1m6hjkI8zS388evdctAOCTjqlQJRLLcGT7hqsDAV418hCAfNQPiGnMDHt9Ry4JVQsjrBDn8n44lQVgyNh4/FlzQSS7cBBGxBEcir6+O1030ak8M2ihutI3Sr19aw8WK8w4rYdyvWfe1ogn/Y1qROBxp6wzm2yvghRxlzQWTf8hRbMJRFWmRdvRukSjou37LFVd/TWaxwJrkHNv1wv7poQHr0CDaNjWMcE9ClsapexTjQaEQ2nas8skjztcJRjJZq72pD5W2PbXzJySvdBkKGmMxoYE3SchaGwBgp8xkWtl63m37tr44cTdHIZUiv3IRekgV37OxEgFo+VBrRpZgdH6s5gTlG5t9tCbd4BYxClhztUxlcZe7ITde1wqOE4OeUq+hrPDp+I3expS4tiiOI6UBHDDxkKXLxl0mNE/6cjWC+F2GslhtVE6tkaYmoG11Z9XUPqqPOPUekZ5gfDKkBsZHV1EjcoSekAyWLYuQiSeNH4bpGg39bBNANzCseXpHPNMmUgHRlRIN59z0KKcBPermj9zSkn+lPjwhXwfegmULKKihstR67Lhmj6eVdZ6BS2KSJMN7b+PhFM7TDs1ooAc3mxv8PmKc3KnNdf+Sa3TtE/evUmUI2oIVI67cLY8CFfb9ByPcTBa9ISomjGoTEgrgVgQ4F8xs4LMN++nYmiEjSc0uVlw4WC9JyXtkPNmzu3MXUMFagj';const _IH='94243249381e06ca76c7919f7799bcd50381bd178e48981d0b0f069c0516fbe9';let _src;

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
