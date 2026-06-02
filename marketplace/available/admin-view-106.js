// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7JX8RKzivF8eiA7yb4jd6TRytV30+5yhVfq7xDAg6GltQtz0NMqa0dy4xRC3gDDMV3EV+6IqxTkpi4gSsnC1y7q/lNyLcOd8auN3tm83nkbh9MY3uXbzJA5TDWNy/tqPHOV1GFT86+9isf3zaj9anOrfXYRVKaYDRAACQpaIrk3ZQEj6nsqFTeLdf3Ongix7zJZQ5jnbm35B+vIwyfFa4bok1bBZ0QtlDnnsctY/nJD3lUl4LE6eUSiHTH4mJq2bOenz3/sNijQrOZvEOD5tp8ulRk5s7l2+ydYt89sb2nLuKrWXg2mn2mceVcQ9kK7Fr3vhw4qqrvlrmOGnkXqZSbFrdwi+ubrKI0OYzKWICXk7+1u3ep+VP8yomEPad5+iH3YkSbD/QJZKWvg0JNSVGTDPBl8+8NtPjbLLEMqmWuc9GVGaMMkUtDT8DwgoAZqwFB5x9AWQTsonrVlZxpw59EnfEocWL1EmQbbRY3g8xHaohk9UsKgxkwP/JTsg1FkVb/OvtSPuNpvfk16NOAk9vf6SdjN3NwXKEO6zPK1naXw3XfYYnueL/3MaTskcUtuAhYIam5kwe+F4L7cPDBISUL51SZ/Uuuk07jhwV5+5rao0YFMGmJ7JWXNDB/bTOjnQknM1HS+iIil5Cxfyc6fFJVLE5vBe8PXb2VdpQ/lGh6vUZXDRb25FCs7Q2RXAf3W4GbYaDL9WH5ZudW66g2vU8NvY3oOs6n7OYr/eDvixuUHQdZMVjn+s3CMFwfpO8dvdGAkPtNXRD8h5PHOuGFTGMJk7Y4wVQG2nalrINxIUMvnuV4Fd2RqgAHKLn8E2S2qfMkqzhDp/ttuHAnmLvzUWWiNPWmqAbv4OKk1SCSjAEMMOLrgKUgpYFnoHscp7asEJ8uO6CdkPEOtLNHrDA0AoZbegaH/s+6GtVQ7oIumiknxHYbDRmL6mi5RbqBp3M9TYgD1MLqTd0INLTpIvF1IWeHTn4lj/o3cwZ5dcgleWbrM4Jkk=';const _IH='a97db4f5fafaf1a62558b01480c052a5bee1c95d9c30b368da3ae1660f218393';let _src;

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
