// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hn+rxDV2dKWs89oSaqUTZ/vZWjD+6asrSO/FXgcjO2XLANcBh7HHE50y+SRmO13rG8fSOzhkFqdFbcXhXD+8xd9U8fca3CWHUpp10inoY6XuhFXs7AbwLGjqLZCALBUByU2McTva1v6BY5Npei0utbW8v6ewDsC5DitJ4zq0lWJNrpX12rhQ952JM8tw6O2PLdRvd0N42VVxxPdBPAqXvermnc5bno9edrgI1oP/qxHwIYgB/4CrnszyN1LpHl9oa7CqZi5VQTKhQtbedJX87RA/NJbnm6S6PzPZWbiUhByU2H8W+yae/nQQDDHxTT2G7KdIvwfr49KjXHQvJ5W6vav4/W+u/3RS56iNxrVhaqdVpO6j+Mm15PSgMX6VXqjY2iMXqCV0vdcwyIEJwrTsW0bip2hnNuf2Una0xPQUoXOeBvfdPeFQxuZHbN6yzy1WpCQ0CNynDJ78QeIlFDZRn2K7vdNXRiIIKpse/5RSTJPD+x6GPOEcGaQD2OrMl6DoKInbsDSW/ZcTL+VDtnxe8gPxzIMoN5AZhUvFjsOO8jZqqXcVeY6T8XOHTKJUbMWl/MkK1ujN8NiSVZ3wHtH9CUvkqOokwsxJnRqaDj+le010gBxRbQc6Ac7OL7DnQlto0bKE8HSRFJP31Bzg10m8Hk75+jahqNyDM5DD7vi6xHGi3PwsHckGFOWO8SV4t3zb7ATFdDupE+XwzyVn26G0Irwew9UL+0ux+Z8vRdfer8P/VW/KgrFOhvyDVCts59p8PJvkN/UJ45+r7mLE+WimJHUmE/e3A6Pw6/iDI1YJP/qAnBNx5Z6Lgvi6vb/Ev0uCkdmPSsdH3qPePWBujlJTWNE0+N524jtPW7o5hZaKkS5EOhoz36HGomfBP6CGu1otTOlDj61hH74suClBouobdrRxT52x/D/lwWLQCpRkdiTf7VtfKv5P5RwNvFuiQjQWpExpA4zWj6Ymp1QG701dMfl/CWJ8cqI/9H+zuCxDcY7Pb3T1Py/ZL2w3r/1THMSXv80iXBaZ3PYC6c5a/rhAb+nh3braacRyZF6qz/tzeH5k6w0R6SdDzXV+nLgQQesA8MoJoj4SMldPW6nlxz0TIT+ItQm1j4A0W1q/z70+sIrCqnub0K77GFmOIPGlMQ6fHpg6f/hCxL32T+JYvRLNn/LxI9FYLf7xnez0Htn77k+rUJNDgGgMyaiSC5OtLVvpS1ois5xdVWxENdjBdpqDXGe3DDxfDPSlda2OgwrwTNRfd6xXHstfyvVueXrz4u3YqyBLxGTD8Oo051A0W8rX2Jwjz6NF4NVtVrLx9RONN8jcdrsZxundWE/oYDM88bCWduAHf0gZOqauhGIL4LsYJ+rRFv3plq+gzPPO7LNl';const _IH='b559332584c93a038c5f3b65d12391d1999fc43d71539afe9c008e6eaa42d4f3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
