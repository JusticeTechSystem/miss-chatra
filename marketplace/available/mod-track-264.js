// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MwlcIT2H6rckYuujB85LCg9pnYtfXFWZGTUl1dJNOsAoZykOAkEa6j00wmygeNsR/082j1QHoiSbHhGadiY4qNNf7Wf7tFMJ6KOe35Es9eakAe6xSssFG9pb4KT2hYflYkqi4pfMLHX7zfUHZI7YsxF1UEWtR1b4nAR+ldeCrDrTHXuKRjacgdguMOJcUmNmym2IHB8mZzF3jxNvR/0WdkEh6MQ7UwrOj5cxFtUWNak6BfsPg8E74F2Z4ZVLi2inYjp1t3bmxbDj1qe6ScSDTQk5KUhQkqHUwcrix5BLtVIkuAgPPSkCxw1M79RflqnsvBdPWabyHh1GzONMnBLl5j80S6DKGexudx2x2nhzh1xjcoSmzuUo6nGEIIV8F3eZHtyb18E9WMsNDfmD8zHm7UYPv86cKMdVjIlws6h1gCLaNQZLaS1Gjg0MWcbElBrMQR7X4FZYoOE3mxDAkMP4OFGSQAzbULhxkRr+8c2I7S79AKEe099CseTi/npWP8kCxRVLGXdCCtiP+ghydNinRAcsxL7C7Oen400g/hQnQ3KNV7zQSa8LfRZlbkDkk6+xc+3PvWfcFhrLffaubF7zGSmp+KsfU6IN/P7u2X4IJrFXkRZk8rcJPF9TL1wR7rLneZuFMaLeAuOaZicBpc5nQqDIvht9bHoOzgc/dHdP4XZBNm4nOkWDYAumJiDiJFNAeZ9qQhppsTLUaZo8rnWmbMedu+rjVDSGnFyTFuYy85ooAE/qvJkX5ywXjPbN7AwYH4dU70FtWa3RBKVHVHOgjSgGBXPbxZumGWKXDlY3vDJ6KigE2J7rEs/0J3AIrfFtg/EmvPn/5g4um/IxcoUiXtFTKZL/iJ9ZVLO+xZ8Nwk0uRtbHTLYKkbFuUBkx83lLTpKTZ0U1mtensyVnxyHfn3V16hQkinYRag63Bf5NEweQbV7ttM5bsOWAvSYv7tJKt0YMA0x8BAD9EVh2RL66xDv0DmXqAnHfv4Tj0qXwqaVY4ty7SWmbiGHlVMNtuOulRh1lMiRr4HbFklHkzgVspP/wBVFQGY2yYrD+K7G0+FySMoawNohQH+Ca9br/guerhf6zQgPmXSm+6oMkycNAGYg1+tgpGDrZ3kUqjJW5kvQZO1gfXpuX5TZQps8i3zCtPTTex5slCKyrODSxmtM7aoquidYRNqzJgD0IkQUBTLrCTiBQXWcOoM2/zJNBzZGAS7Ux1qD8KYhTisfOT4hFAJ2UHRweKEOid++9WFZUt0vwYAz5v2R1RvVw04UfAXho5cqO7SVo+xr0twvUGJEwDUCQcxk7OksZmiZVsEbO2K+JnF1KziOUYcPHVrCGDElcq7eZZyjnJx/yMdYbyAQxP/gub20UGeLvKau+zPpf';const _IH='3a8b5f2f1c68fc1ec2dfd606742da124cb1f3a6abd003a88a0efcc040802b9be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
