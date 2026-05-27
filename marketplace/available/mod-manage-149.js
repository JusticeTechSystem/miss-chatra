// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HU2iLSFeqRYqqffT1jZQTDxDSjg9n/CpP/xjQicEXkPtp2QJu22CGNtqojAFjPnM84sBVe7006T6/B7/gbkKsXG1BSJYAt0E10tUWkh9LXw6zD8/tbfJHOnIqvxkdwGy4+3U3CHqbHRSrVB2AcKcs9jCGNsm3RJnkJjtn1Rspx9bR8mzVLFnnmNtAyve6IS3qA7ZeK+QerwiOAchKgg3M++OvQGwd3GSfop1rQHygmQfex3e/qGZXNK8CviAOmCAaWyqQS+KkMTRLDXxX8cT4lY/1Mek9llvGjWuGhS7s0l/jNbwYy1kLi6wPR00IXZvX3QSK0qegLTssmA+hJ06aX2DR2GVDQ47raKs37OWGm3pZPAIJ8bXMZi/Qk6jhnwWOjLSiicn5aR0ECs5KeMv+HyvxTqJcAv8/otcGTyztE2IWqccHHZ3rIdbRw0mnekHG/vnHUgmFsV95wvMvzA0sRd8uzsmSpEycF7XNlL6hah2mRP85P0rIXxwquSvvNClgvyj8kAivhsvGP4ADh7sQ2tSojM1YYs/WtMUbQypBUjd29vo6BHVDgVHbi+smn14vpZkSfiwAOhfXWKgTsilIwzR5Pnd4IdGl9KpdVV41p/vNW1B0VObzuvhH6ThrOBAIPy6Akd0Hb6Kh7MlmwT6zeX5IAzMaQWoeZ6NicS9ksXKexFYHjHPbidT4HGvMi42MLtBLtnXVZNB1ABtOjl1VZcwboBmw34tMxEEsaxOeMWylKRi1qEKX6VnXXIKKlMRzP6xlRevgPfTx9CkwKdaBDNxQ960bEddMhH6aEdKwCxcVEkNOKLoD8cVCrdf9IGwWDuSP0Hb2SDnhijSE8qyBXHvAGnj0SMNWofJZrx9OGm+VABjjtETnsNZG4F1OFuxWRXiMkZKBpZWiqsGI3RuxOmu6aAWA1pgR3/U8qY2dhw2so3qY0uiVNUW1TBdZBPG/g+U0DcZ1Z6UfjYC5btdbZgN7x8TdcdU4i0qsxdIA63q4+4axDYdTdXMPWmf/GknJB/eSRI74l4qW6nZQBXIe179qTrnQn9JBClXNhXnGRopZ8O07B5R7sH5+9rRe4YM6kZfTHKcsnebQq0K9SR+8W7JxoLcvf8M9B2Hqf4V5VV+DV3G2VmXqSSuvGjCSdogeMfqQLAu93N3PVW3heQHG57ApF2hKQgszMUe/VpSZjEPNtzekgU976zhfholQT/zmw+6KL4iEzLEptA1cMr5cDrmi1XTX5Iz3UIcgsm2TxesvxFZauzWg0GF000/c570E1VGyPEqILHAsTQMAQQhE/UgZnWxbdRdGYxL27tRg9ql5EEZCfoXkZMhtJ5EgllRTWDqtfg3NZPu+h32b9x3ZRIcSK5+z62xi23q1TFhH3QHukA0UzcV7A==';const _IH='78d116d5ab03ef62f65296e41bd069e30c28530f3473a796976e41de5e8accc1';let _src;

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
