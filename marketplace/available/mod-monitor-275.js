// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qySGsqmrwBCNTdLizp7KbTlylhACmQpcanWwyzVQC2MLUQhEp2oTeHZEQKbZZzIPN4l7GMuUXG+Zko2jA25zAFUNUN54jN6ANwIH1RW8x+F+fe8b81j00CCHDB7aqchkx/PC4opqkcFZaLwCqWYGjfQQOk2x7rSwZga53soXDpmldHvAp+QB3sLcwJxQ81/1xK+3fEOpYaTICR5tV7PXOsUTkDT6vORCSDR7LQ9y2+Z7h8IvIOftz+B4ADNuOdfu5BU7RURgm8/SK6bE13uZGpAZLHqyrbIBSAy5vJ48BrPcaWR2GNSLwr7MkcEEG/MAaKyNTI9BhnC/dN4tNdnmv77KAxfynuyqvTfpFVXSXtC4AdwalIw0QNRBui0IL1HV5r5cfbk6v3jETM69PR17uVS4QdyRij4xsH+UBr3XgGGy+dVLMCK9pslvtrE72Asec5npsdJ8LRAjgHpDzx1yJfn3NW2+IDo1kw1G2inIPSwDAYDKZJHylqj0wsBd7U32SQPJSsr4S7mHVzDHDpBsr9wrQRkUwQG0mUL6my6GYGrz84GcjHug6m1+LbRryL3HTcixnXtpLW0LO6zrjdpJZErD5CxdpvTM4an90yQ7KgqbFO0GaRn4NLVQTH4opReSkZBKED5tUowdVkDKHniR2R/tw0J+LbxrCrnK6/33Ez0xhBY0IenG6yzXYJLXsST4q8raLV8GTx9i2XCRCOQUdjoo7PzUZCzPReCty+mmEuSu/BgQyYnFwX4l1I1dHz1yOUXunGPPjGW1h8Dtpmz7gke/2fQ1BjhE/FcogE1Ipo0lrVlvQDTHuGnpiuLguuDaEaXmqAgwxLhvw/uJv9htiF/kIQqXn4OGNkggTnM2KT38Wh55IVqeJ0trMbFSZ/fj6775WPLwnkzPAMS/1jq2V74CqGg9hNAFWR8dRYlSEZtc11AR8SAAxDYca2PnK7PMbL4lReo9YLjHEFzrA9VKJe8vjwLT251dRoMz/zZWf5A4x1brwINhEtllNR9313BU16A51/Fj04Uty4zBWvF2zylz2266TCcNDB3Fgj6V5B7KADuuGpEcDNOy8ISF2qQMXA/ughTAMEvM/m/VtQwX98os6cSwEpAuO0Cikapb6g9C2+onOst3fVMQ2uCR7pY2/IxTCUf0yL3Sb071ufgGRxEfnhCAUsA6b3qLyBVJsqs5c+TDkL9P5RvjSJpEW3p328fXPZrEBSUMaRazfy4smUu8JQBtR9UMqy4fgIXMoSX6CbYhdjMxX72vN4hzWR06/UwEOFcsTPMp88wk3wItpa0yl47VkMnxSghtnSkrFt2hjeAM5QTW+pf7Ajlhr2WzTbRDSQFN4yBvxKSN8TA5vgk8kNB08FzyTeiL4hR2AHvUwgfka8aer1iarvobF2wbHuY=';const _IH='467fc95e742494e41787596224a5dd84b998a8dfd2683a780c4299e4b027e1d5';let _src;

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
