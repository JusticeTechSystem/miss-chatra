// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TdT4rnhAMI0x6dKUz/9FvxNJtEuKFxxaBmMLxRQHI8225gjZnR+LVjS6MexGTi2aRsiGa4ZXlLsrDYpwcgkYPEeTtdii8UL5GJkqSgBc9Um9tqpHIaARucdIXCCf6Cyye78+IYx5T4jB0hrBx+mDYAO7FWxCGIRmnFIQdiwv6uVUb5bfp9TdP83at67FImsw+CpV8zfehGdKRgG2oR2mrluGq5K1AptHKaQNhQijA4rGOBdPF/gswWd0UDr8FZcm5dgPMDVvaKXsAQm5NzSXGdjt1zCogEkWEwrpPTyfqX0IgnB/15YX9RQ1wBa1MsL7RX/0VIuGyjxERieD9Eh6R6krg0w4ZU62GWuHiGRwaYkkymQqaTX7chZGK27et1PWuYJZGh1Ri5ykyq10Gcxok7aJIuS/lvLkiSddSFteag3VCCxRx5pvClnEAsEf7a3Sp5HazKeZvaVGy/hiSulqeFyCLuzU3x9K9N90e6VQWAmFJKP6PwNAHOjggs25ic9xsYhkFfD0rGey43Uq5wGRjDTX4R3thoRVglYedgTDdbo6C7gchPXtNTzzBmH1+60BDZYKjGFo9k5ZTpvgr3aoH2ADeS/eUANvPj+vOKIyWdNLCHfH5UuhK28Qn/QPuXbJijxZDrEhpl7s4mcU1EirSImRKb9Z6kHiJXLWbv0GAkbSH++Os4q8FtB/mZJ0t1vLTFxliSYqIOnLMzVGEKrrlc0eq9iRNXGCfiMz47VbT65CDz9Md7g=';const _IH='d851c3768e1eca84c6377ef5280e10810adb7e2e5c908554b8d1e5ec85a5fca4';let _src;

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
