// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQioKTko47WznWupvq3tRPmMERDjbwEOt5AP8MAUM63kHkbFpcDcEBWhNzTtDCUqVzTn6U3gP99QORqOBdwS6R9DlokatRO9YX5c7PAnHSrdlJUWP+6eBuM5NIKvJkWA7lV54N6D97FLHoEm+7T3dqGaypHM7NpP8v0phi4xmoTs8gA7ogruEwnlARVNfQM3LET+fXPOSbFm44fBxFaBHTzGQwu2n8E2DcRDnDqytfzTNeIaFeLJrAIq1MjwgmiALCgXk7/XYgPDx7dOsUuYs8tbKs00m/BlePrLmlm/1i6A3tuhUtY4PSKNbbeFL4Tr9NjMi2DneKNDPSzr4rRvzTO3BGLQ11l6xRLxifmk1tTYcwYfFMChCJKkCArVJFQ161hw1+fxFroMdHVaF151nqzOxKJp4e4OOtqkL9vBPl2eWrdD0qBTbz9Sxdif7isBeo6taXVgRgu9lXZGlK7f50upreabovcDQ8UbU6w2QEgJjazZe4Wh3qKrkI+4v195SG/ZYkhfa4OTCVwKQsLfcj5qF+6DEy+DiaE/mpfrIZIfSMnrU2rNl+VFfntcz9BN6hitGdYddSnqg41pYIcnx9hZTzy89Sgvx5p26C4j9eP88JGgzueMB6Da+LRRxM9bA1978/7fBhdXSlzT3wXZbECLwMlcnN5R8TQkJxi8jTZcYnW7bV4+UVjotG0WcSLseaqorG8nK911ffhnqLnyXFuq3ov766oGU0cD3lyXvrqiTCv6KE5kLTSMhXQwYdVB/aUxaZnjKbJGZr4bYkz/6f28MuFVoEGSYTFXgCaprqJKLXzbdT5JoLOsZqDNknbUFVXwWb2om17g0dY5byPY5WgBBIRTVTRc4ngOXjDpvqy+SvsaygMowBO30m9YQ0aIrvc1BT47RfQzIgDBWsxoMNe/rf1z5cA5Vv09+W67KDM5aDnC4wTyXYnvylJ75cX/An2rWjX0v1pLo616H/qd+AH1COvX8oAHsUzQYuQdBMb8bE=';const _IH='69b3ad0f8ceff3553fb970643993a82a790497fe3c47b9419fe843431de59674';let _src;

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
