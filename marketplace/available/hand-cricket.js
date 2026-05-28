// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tpJJEJMzh+MR0rkH//adf/jWA6t204oXqiSKWKC2aeeUh8n4kouTDHJOzmHnbIfmA6S/9oPVixLLl/bWdzEBKkoENm5JwQ4lG92oIo3LJ9gQgXGs2MZxMpWUaZLAtir6cTaFe8JdTgSoa9TIKgPvevQRTs4QSvcgtGDHZi/GteDVhwZ6rof18X+/RRNQAGQ6l6bWDdxqrXhNm6FMjZWdfr2kKc4uoDQfDJ4VrGFA9yb8mo9YfhPesMO10+/+Ma9tyN8Euu7fgGxFIQU3bD6yPAOTAOqtN3Xito7nLSLFcjkuMhROMq2qEOlxV/q2kBaJlgh5JWu6vGEpUuSicruqeMkWABbQPXTbU4urfVFeGi5xY3STiAWrkYSqoPLDI4wXjmYEd6kFqKOLIpU+chBeSpEgRTt65IcsMjpSQp5nvnG/E8sQdLa1KoU4M+sWT14L0xmTGt104FuXMK4dgak6bc9qGsR/zaVHuUs9dPxU08hQx//5iflUN3J3Q8/kl5i0vK2XFok7+9tSknjvXHiSN/XguZaIFti5pB+609QuPL4ifeidfiblhlmJn0XHqMryBuOl8jC3205lUVDle3kobqd2XY/grDytoa2EtVShqJIxqYKiwMdkdjiDe7A7GcDETgjhwbNUOcXHpbExVYw5eMPYYytQaoHoU0Mx4nylUXjr90oZ+DLFkpLr/OvbXYyQPG2+FtQ0uUNC38KL5ebHvBwDI37ER2Q8lfvOH47HG82lDTomMJp9szxD/PLBK2Ec2WUVOOobwFUl7Hv/7WSPCh5Ved25ysGruvCfSws9RSiugrSTVkA+mrW3+nZWk6K41SSXTyumgH8tmA5yXrYhmG86dFzLky54kL+hQ/WRo7DglKtBNBLnyMkmiIefCq4trdhCCDdSIqeed6h/iFV7xqU51u1CnOxrdCR8NVRI3SLl49UjKbGFITOc0Ulnfq0VguvJJ1tcs/lAFZrZPBI9vJdacF1PXoiI+hLnpRmZcjRyh3i/tC4WRau2IJ8s7OkTb86CKObbihUQwgNvD9ot47YfPPsSppoWVQwPgppVQgPwIpmXB0AVPWSw1zbn1wSflzjSOQbZnXt2Q4uKOFrwMKBoc3eT/9wabQeZ05lpoLTrIXCxzcp4ZYfo/a5ss7ZGjnpbtFf5MjQb4eGoi1s4nSfgxRIPFVW8YUQ2DeD2YdaiRV7q2hjUc2elQtxuaDbj5DhMCr6rlCKm69KKkr5UlwPFK43AK+gY8dAouBhy5XGV1gb/8+8lwvXojw8kGlhHNnlQCqfHBbN9QxQEfeDt8AsLT5B5FnqS2l9lyIy7erxF3lGKZ5JWv2RwgMJ/Kz6ahSJ8O0RnzBPKKbC1JN/A7hdOy2sOrAD90rDHmBs2S1eblTJfrg1aZC4uc3Q/f29P5aCR0FX6vw3rcSzS4Wva+nLjOwe/WPdKW2V2hGpq/nxlr1w0CfAHrp8Ook9PerhdZlYQhKhaja6BZl6TEdcIlzJ8p84TK29xG0f+8JFGcLtzFl7eyZLD7JzOl7Pw46rNPgMxzCqV9to0X9nXk7S+evRO8PhxJwIlcaQTMSDgrQHWulv8nwyRmdfs9uwBNDCxcuL5swi3QvplhIBYWXJN7h2I/Zot/SpMaTfBrMJmHs6AKZeF1oWIJ94AVqcghWfuV3mQR9l8diV88420JEEvYUrK6cTbhmW0Hty5qhWHlaejpSE=';const _IH='a84342d7d1daaca41efa52b37516cc193d23ce069fb03caa1f573ff6eecfca07';let _src;

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
