// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YKnYqUgM9T87rkq/tvkuxlc8JG+oDqzUD+FQ0J8Ye7hoLQEpQnPWtn5XAXKPCYKxqybECR7AcvoXmXyqB/+TQ0BXJ0xGlVLEBbEey3CZyJ2jc2Odj/OmAV6YXlU0A1uQ1bv7pKcvSpgAPNG7K+JZY4LC0BeN/bG9je3FlG67lcZSkYyKwyJWOIWC3mbkHIT5x0jVaRGKWi1DUrZfIvnFPfXWyTx5krxU4rZRfFdxiuY6zMiv1hEp99rPlC09ITVxGkwdns6sG6Ku82srslaMaEJVqjzooUXSZg6FhrY6yVx0E4b+cEuKbEcRRqd3xAPubxaxUpBSgnCe63k3l0pJ/WOl3qrlUJ915l/f0/DCNY45EZDWQ+PP/P3G3JL5tGA6M3gocR880aA9cdgqOt+R0YH+86Vk7WpQWIOX1a0gu02tvU4tYy1U6SgU1hTTS9F6Aba+YcXybrvwSGDr/F56Lz/9hyhFEj93aHXbDtgLEFJJJd+LYBqH2aPg0FQJAyUVeqinkZZzPVTrTcLeFuiIDOAJYGgV7POPSEGd7db0KjOSOlCsv74W/BdYFg/+GYgwsMj9MrDYbJEkm0z8OpmWfK/EDAlzIR+/TevpHPZUnaVpWp0a6EeakQssjwDmf1hqsJ3k/XDrr6j4rCVVmKNYcQ8KOeO4hhEEOvORRmFVW46ZvKkiRVxSpoOXyEXbn3sWADoiBgGKHrzJQeIiER6qC1sdHdfRAyMPL3pr0CsLYhIDvve0/X6KiHX9Qa7LmBB51PwUbrioWK2o9f+/1EJCiLq8h7tUMxzOmoF/RSiKlhGa0CCg0lUniiitdTYBfGsWLDHxhQUuTDQPzvUsmoIOKF06GXcygR8m2HuPSUo/NLuY568iHyEfdTS+HFUOG/JNuU0WnB2qh5zYhgvbLPcEmSGJKpsmoH60DFYSJgHlBqw5QbM78Jns9szla5frfqPu8JTZE5VMr/SWExE2kfvvTaWSsUwqpLaXZXgEpco179FK8ysBN+lR9/eln3/Ewo2tyNeJhObh1KZ7EwvuMFSv8hiRIKLcmI2YvLtvk08SLE/5QA==';const _IH='72aa68a1adea3092fec16f5c4402d551422befd7499595bba892e17c6b596a8f';let _src;

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
