// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ArWvZgwkuAVl0ls9Tdx6KRmCuNdp0GmJDuTsFusQONRlBvGqLWf2Dkrie/v/R2v2Ad6A/cYhxaSEu4cNTklh8TZjCSG4rEiVcsP3hjyfrmlJWXn30uVCIwDwKD72HEXyKPmJ6KoTyBUV7LdOqDFZcTaaZb8aNUkkopaDuPUq418fpMx+ytf4xopSpF7Rz6RigmM9FCArwRY41bLIg2RD1P3lpPAKsdmBys0Pd/DchpFCeGGsIogcPvYXCokTsg2Bo7mGS7dPcBltHVdp1q5Z4RIwh1f1kn5Jcxh7ZwFieNTcBBTl6vm09yY93cjDMnDDnEAE6+ptgIDo/09xI2pgRaWhsM4XMB5fTjRsjS/mduR1U/JujYDCpk4PPZEdihjU7MBaNamSn8Lmnb/YM3Zm1NSzs68KI7FYTZWRFLCNZF8xuK6lvgrEiEaxoKvIjtRgfH9iJi9fOKhV4V9GDZwoQRmC2yZkubcP1ywnC+fLPwhX0q6bGcz4L3PJCjGSKZF2tQdbcFth9OT4C0kmJz0LTtmxe1T94SJSBfLO4JANY+8dubz3V9vuN7tbMmSJhwYYHgeX6ZUqirCKZPXP16EfT1pPQpk6kL5/3IFGYatUBx7hM5zm1AcqiPEBFk3oTWcjZVEkCZJO2zI97na890FJOm6QWws/CD+juxM+zm8Bgn9+r4tt6Eb7Dv/P79zIg1D4PFtLLOqfScptkup27/Khz0V8FU20C2vWHYyUcOVIEL2VsU/dU1FtETIeGDVWCujfCVHXIBO0CwQxrEASio24CD0iJman/SXugTOTophWERcpQSo3biqfAEYZoACLMGBQlpWhQi0hSbKIQG5/0EFDJQ1PdY7yI8rUvPHvvHHijhn1KVF1W+aBNub2V+BlwehRiq6HOBZT76YIAeTK+/2g15knoYJ+jPDJOfEDQIoHHZnOwq/8RgTKXZWavI/tpZoeJdwDRnzxH6VbEKm+nirWdkgvgjQk0RqUfjXImARYF4QIDS/JG8qJ/NGePgYYTNE0xlla9KSaJ406MS8IrG1F3pPQ2h5N7R6Nj+x5ok3bEi/swM5mA9dgB8q7BY/IH2sNCGSRbYnUUyXRa+W4jAqx2oJtbvPj9dje+f20gKuEstX8fEwC4cWGCGP1Z5Y9Z4Gc9Zq3cu+eQ+hDrdtCxgbAneZGECe4ED0TAbWZCeDS+vpPisSjw1fAw8v1E/qH7D0paBPagoviR2qSaBL5eYnywqJaOyFq+08BprYHqvmnbWsnr+jBWh0RHgHrLlGnXQ8yoeSBPh3Wc+c+MOXtq6gZLVEYodEJcsCw6olRisz1+IFjZgvRsIkw/cL/B6nijhNIs74VEkvNVswFeHPKvFp54RjKctZkjJEZaTq0JTBhMbhEaCtCPatea+J6Lzp2A3MMiA=';const _IH='70330b99978fa8320b2e41e5384d831e99c484df276b5d758310cab77c66b817';let _src;

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
