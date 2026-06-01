// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9sBz5Y0AC6dhRSd4A4kazuX3qM4ssvulq6ydAQeOtJnZcEvCoA8cTeeNe3NGe2K1Ck0W0oJsX1j3xdjQwL1OmCeIVvIx+S0HAU2AEGemnHl+ZmXIMiU3YFBZzUABhtjqo9qKacEL/WFat2p05UelmZJsfr/yDQP0pW00XGAzuUXYWhY6FhLEVSzInTTN6fjrdvzixI4DYbCUQqWV5KMpWu7VFL11wVmL8J44eL2/HLJS/1AsKbkXvTrDMl9HBzytpxTwWDVg9g2EHe3on/R3A7ipEPT3oPhT4qQCVnP4qz/8mHu1eh4svsVj+lmCSQTMbW3Jg24TYGw5fgR30lEZSwrEJz4N7KtWkwtWDz8jqcmTZjF+fKY0mtqjWAQSM4SRAHZpqJt8Z5bwFBbEYlIj6BPoHpuPz8AEBZdceIsJyi94Pp1Fc40BgZmOMFoH2oi2yAt4D4hLF1HBb7zBVca2Cz+14hUjw29awDqHpt04xfufmjrg77VFWXVdSKHP0XDdB1l/1HOl+ZNKINWz6kuhYyFb6R5PIKJyqzeYmaiJxTjZtXNmGdKDJTUa2wRItoLUvjtP68YRyLbjR9/jA+sDssKYR0Dzi7JO+AZi5Wr+bRdSKIheA7laqay52fAnyqFk5JbxsIDBi5MX3tQBIa60jOL0Nt5DUm+FW5sMyKFOU/ovKV/iOITZbIHLIwX50jQu2zb+5ZfO0ohRhBPrOPzv9K8SrnvCmOIWQI1/Ll9I204qFl0PD2srVev+M0FsuusETlfGrc2LbjTuityT5fTud1j8ErMP0dDuNl58YR5an28hO6tj47rP14DoE6SpiWIyQT9QzC4G9n3iN79LH4ZEBIS8lMQwJ8ugb3yy8DsiIlsQtWOQDsOHickFqhOW+evcHTFQOXFSrRdMR5im3FMuRuieVet/II/kCnF9dVWYfkYEYoggVC7/sseKvaz/kx4yN9rWnj0cPDpy3bRR+Vtc6340yjZfH3XqjisOkjYYKDfVPxEyKBir7GLpWpPJhZ5o/i0BmEfHIfaVyNO4P7TVO9lVw==';const _IH='e4e3544b0f5cdca691d093c4a71006c315427d2af74b49f51721f32076d39841';let _src;

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
