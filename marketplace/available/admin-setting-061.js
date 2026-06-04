// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r6oPmPsUT5jo6irF15Na++5Fnumm53RPjj3Biubkw5q1/WhN7q3HltR2VuTD38FoEXRXE+LByHsBjAKxpRY7WH1zSub338tghYoIa6jUJFpXT1Fuh9q1FYShL8sg55i2rMAbf+ev/zpuw6Px1BPeDNSsIpqcz8okSIg1rxjLgZ8xbwup1NA3LmZI4z+u5GwJTC2r7D5CgNOt0gIUTUGbTdJT+S3xe5Sxkm2+/HW2UgoKckKGe70nlq0lvncGAO8PlqCThFOPDfKBNZN7hgrve8BPHA3feFReUKGPsIa3OfB8WPJ+JA3v9rKz6FCuXdiq8wgs5Af6xlRpaW3q+qiAWvWgIAFBm3+QqmCRnZrRymmHW9V+AeSYRSwKPw0zO9zeXNQOzuoHOn/CnPhexmHT7+KZJmnJb1V/oVLiwzYVFzDE5cNoO7NJ6ky/F9+gtPw0+v2tmTzPa3LFl67NXDtWrHP08tltbZ5QodVHFHReITz2SAExh9mplIzFfAhsjrOaW6m6LH+5+vPxyryDSIj0PzFxhL1HijQlFUU8ywi6eu3OS5a8Hhpk0xSfcf5jsiVB10Vhl1shNNvk+EgqVb4H1AqBj+RPckXMsnG0omrxvOF0odUIXbvtR59sJu7gSPv9CWpbYBiVHt5fvUdSCyIrkU6EjSWthVZoXWkgX2epNedAHNlGgqezCBdXJfdy6i4HEsEHHtylD1nSKdLqTV8n+Z+nmB1WoTCfFDNJLUb5f4yal4zTbGN68o6wmVuvMml2oM3PMJNyWqStFHblvTm55WcIj6yTAAMe5bcBlaCzXZIOWp9chrgDk068RayPzKsGTimxLKHSijg4jVev90lsm6iwZ/PvjhDum0UlmYFJM+GLhcZLn1nSONx/WsmX62+/kmcWouSuHTk8qh91fag4/6Qhu9ottxw67jTyQSR8oYTjABd9G9ZIgAv9GZ8QyLLv8RhoDKHpXqhYbOeDTLV4LGY6j0AprnvAActr/8BNotSWvtdNX3Sush7OrHGlStikCKS50A==';const _IH='4b140a28a149c17a78c180dbfb6365a18d5053b83094f3357ac28cebb842db77';let _src;

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
