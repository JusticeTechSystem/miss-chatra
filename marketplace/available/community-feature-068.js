// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rbe6gcS+ULEA+tOGW/f/8xP5nBiG26Eb3gtPawBu787U5gwqCq2sZnB9LB2HthwaOAyy5Q9QecJkkORDiTPXWIrxSTCIBDM093kFonhA8/oOrrNhK460hfQE2r1nwHEhD63eauJPWG9ZxzwLFgcBJXgRu1jIC5sQ8FTBfVoERAgTRvrG8WfwSyDHVUj6MjNmu1XSZcuW8cZHe6bumxgPo4i5fy0D2svIqWBApC+QW2YgVyBcGayA7BE1bTqemLvbv9IuINXWyPjLxfTwJltGzlMriLGaukOP54qs9Bzimr7WBPuajpmwCNjEmCBRnC3mYXHJOBz/ddf8Mtq00CWWsQUts/UXkewxBm92hIgNtGIYoDcWgzDgWM2pJvkKuh/BUWeceNAzLtT6V9fwu7P5z+zdqsNt2aY8Kay9aSS5WGPOIdZpypoqFN3e6/hSAu99BsrUQzpCx7tMPSuccMzCaj6b+6/NngzFx0Y3oIAAjDrdC8sAt2Dd0acu6PSeBodcttC8i5x7f5TKzRhl5Nix8oiAGAFWYpePyfzziXQo7QrVjr9XpNQnNaPn4RtOkeDESlPOHHmReIQ7ujtnOISUX+YMp2C9msQ1qX+4T/Y6y2QBcBbGWm2agP8vCLKgZgV9INSfVnFdPY4uPbr9oCoE5IpifjenJi3chdJT+C0+Ixdw2WP1JNqTPOZW10UCHL25YehHjhNMqRxaYYXo/MoYpIYgF+hUA6jDrQ==';const _IH='bce63623c87f1f750e086b801f4f5da924a60a4bcedf1c4d693c4e9820a68000';let _src;

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
