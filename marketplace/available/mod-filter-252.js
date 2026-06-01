// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQymuU96XNjkG79kkZU3CtTODnrKVNTD1ZR6zC6p9loM3ZGEz5HCDjQIwkrItOOgLWRrU18gbHBxN4vFQzpqqD7TG1SMqR1C8iqSNBEBnw4IRbocU5rfYiv9PN5cCGwW3IWuzj5OEyrAZq1OryORTenZNz/8729iYdTkYIc2sUvZ4/J31Z9+mte4KNDKVBRgSIBpBeVKxF6V4UF8VWGIciGHDcuY1HqPs2kHjPJEV9cH1grETmPzdYFGH9efwcr1znGtz4FWB1W2vANtEVivKloPANw7fwbFj7unJoXYF3qQnsbksPh33C/uVSguXEJPo/TvF58d+4+TR9CvnDXp99RWFv3rIJaqg6knOTgdqmunBI+8hlTPYNCGAHfL8o8zUMtBO/fqXfVP81xaPa/qq+OCCvjkDAlwKy1IzAIqQImOHzV/oL27Rr6PWecZz69xRA+59qbedpNdVcTdm4/R1DBI3/31b/qGVSY/s/ykR9/7jaFEU3XRXL+PM0ANlCkoCvoFBahr8N8ar/6lB0X2CdF/PEJuLpFARFlOrGK6n6xJCCbMdZ0lr2UlxqeTUolHmcsd9OZiXtzh0EsF6DNyHAvGpAqwAkrgCvFwr6fELj3XDdIL2UXLKVDCbPPVU8XH4VvbLu3jpzYFYLi9XdoIqnxv8uPk0QidoTkZeX/8n9mJl2rvOA4Y7KJAuWp8NVu31JGdJ/4a7ApTagIAn2A2se8mvN/nylxqczP1SFkkjBmrNlt/8MdctOpkkNSCDRQ94V6xCLiqwga03XfIP4evf5WKd+w0SdYGXaucKSmgYhg3C6eAPmNYm/yPN9UcoXty/MVAHFY+6imh/dS/fGmaWYNMWvA0tgTw+FFYphZIHpel4KtXIBVaNRtqm9xsyNqhdngzC1OEgS3fqFMwf0K0+wGNqqBG6Zgbg2fHBHTE+96PEXmNhObSDBDiV8ctRFR4V5JvpNhCEoCFTnQm4Pd2AC0aHtGcWHQCcVldLY51j1hNdzfRswGDzrNEBoscoI7K55vcgTiDV/3aRereW5c5GxGy+EKFCLjcgBC37A8DSlkkbE7f9awjxzRd+mjl1lkDE1edAsbqGsInHEy4SHcdfVt/gcwvYesrPI0CJ3HoEmV66XHBzRnIVq5DN7MYb2HNQJtVtHf78j+sCZ2joGei6akC2HrpOQospYvvnleo7sD1sxxUrF21BbgFW2It1w/zOeV9vn3tV7DSQm+qTpCVu3NiHwC5rSnR5cw0tGjdcMdqya5his4DZg6YE1DSjrTo89m4jFmkGWKEDVyDZlfclfsrZGVt/DKWzOciwKsm9IaMyAavHyD37k0Zy/A+qIsxOJojBdApjHCNqu2h1voqgDGmoZfM/kx0kwDhkgLJIGa7dwq+J8htMl2E=';const _IH='f6a67d0f48b57a3b2bed2839d2b59f31b8acd089ae6888ade3955daac0d727d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
