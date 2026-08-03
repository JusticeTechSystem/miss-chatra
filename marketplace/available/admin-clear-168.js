// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGyFmz/hivOZSYgi7v6NrvelyfI74vJ0ctGMzKxqK4WiKuFf9Rox29mJnF243vjXhXuPMLnwjG+M9CTgXTjPkHDO8jJ2rM5/ImN4eGerjL+7aINxB2OtLwV9HV+C18LAPKtmcS8q9SYTkqRFEiW+oeGg4EWG+q+nzPjrGn+1zyIyiaVRPxzqYAsK7TLpruxKPTBPb1iX7SayAqaBN5Prugj/dcg3h2jHiANAcH79og1q8hhcckBAWE10IqAScQS/XtFbtl7Z5t87Md1bSPIcCrfMEGFM+Lrn5SDZPiDAhdr2qCSkIB9zfPrO7QO59x+EY60h3sDm0Nb8QGX+RTALX11+mwPPEjRbPM6krzTUa/Y/m8DepjiBvQrB1kAckGBb6CecfNPVy334lP8KayH2c1kJ9JeXKyTLzrgTrrzHAlZ9sH71U/eyEN44rplmqrH2PtWXr6VlUz9M63L3TIWj2pZPc145xV/IyGSYFhVeLRBlOPFtu7deASvvvl3lXqCM8YWdT3QwMu9GvuY0NfGvY3BlSaG9gKv7gFpm9HXLH7ShovhMHGuDtoLjp2qdDciUcdh97piVJQMUMsrGYUTWubJZ7vRgYmey2Nz0DDtkUVczj+yM99Ax3HzxqrRY8w0697p8eYjFSfOEEEnv4n2H/FXxzHyf1w30QUozolDXEHaDc6unflglQbI2QI+XKaZcGIL0pBIscXuLEMkTZOXOyXBwPcCf3pwNXmuU8H1HWYqFyVY2JouG1gpaWOWVG+uSHMthJQw/HC19OP9AiyQgMFoFFS3QpLzlQS97pOFxW0x4r1VQ4Lc7/8DEUDzF2jNzdKW+DUTjvo5RmOYijLr5OQ28cTwDqkZSjTZS6ON4i2xAQFpUPBZRVpKWjZlWcNR8HL4EjhLIYpPMePrWEVUKqjffFR/e3NjKEml7CY+OqsD/efGA16oYSbt/sEfBo/us4eIU5TplsJJF21hFV5NO2MM4McHtylWAPmTI4jiwmNEoP6KZMMAHs5';const _IH='77134bcc20609709e883eac2276fee5929b294714d8eaf549163dd08fe75fe4f';let _src;

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
