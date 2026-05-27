// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GDklLK0Ofu/5AcLqcVQDXM5FRfG7D6AbyBAFkgCE2ikOLWpakQo3mXF5TQJPLY8exAQcVCemE2lFHs2AsaUwU5F4tySVuFVRdyP8LxngVWe5kWc1M7e2M84QGDnOSv6gMHsE9s/2ifrOqEi2W6e0Jzfs0t1gTUXFC+oAzlGp7DpXEC+7qEKLhR9c3WLZ+/GGRauOisjO4h82GD595aM78F/3ylOcsR3cLqQYt1Zpd1/OP72KfuEZ52PC9OPcA4ryObf0IOmbjXhAx9uGDV/px8YVaiuk3i9UIjg4i2q3PyZ+DY6ceR6vKPJHIifOl+yYfgDYha1MMg657WySQW4CAdVQXrKM7i0TuV3BDvhbjWgvceqc526UcYTkr+WozihYc/57f1jK5HHU62teFbqExE6Q8Xki4cUQDvHa7l9xqSy6RCWgoCM5oRL0EW1zRgyzoJzlcRCqkxkhtwh9YLBY6aPu4BRLYmslf+pAS8feuHXQl+LEqqeIzoeGKk9iEI471u8LDJOu94S0aisItXk3DD8uowILb7kvEBFXRU555LNqMencGle2VDIwdLuxfSJr8V0aaX3JauI++jk04MRxh2KiqNsTHDX1NvlTgbB99U/+4idXYG9yOTOdx1ZTLrMrSup8AHK5z+e+M/gXFXtv397hhTdf5pZapFqRu6iZnqiMySiMk2RuFjDulbjcwySEf6bKHnm4KdGXgaAqgLu1Z5iIxdRi2mOrdIFePFLQEKuOxhAvkjt/r1fSvci6DN0pQtSjA/IAr74FOMtFllwClXu19lZXFU2bmKqr8DFjPUOB94V0hOXFfnXOBss9UeBzCXOVct53UhVNAl1E7JsNGf0CxTMKrSFpqR56SA/QU5dViBBpz9279NKIZ4tnHEZk/MLk4OLYm9lsgIEYrKLry5m26KNfk0uMccTxgqHgQRGiGIDh/aPkUSjZY35J1AQu4tY6xbBAZyCt8NQ8Y3Qp82sy5PPETjqBnwYERcISaF6fn7ECbN6h9EXNQgpD8r6oFOzxRJ+VHRLAAsutjRHH6i4dFa0nhGWPDlJSmA74ATkqmXLLic6t8XA4JxB8IS74+HjDn2QHxx9DfjQKYa2L6RC0tqjv20Z/15IYycy6P1wTX8xbES7MFkUZmmb6LbhSDcBC+eidMOwvdfEvhgg9/9HHqNaNz/Q1wBfEpmGBiYXAviVOaSUxHbduXnox4euat8DaP6hMvwapptASm4p2ga0auSlnso6p85+Ty/g7MhhZZWeXR/xgHqcl7zOUFm+p4VelhvdZkelyFscjwmqixw0dX/Wb/Hb/tChsi+XixOpW3lqV2jEQqmOFErSYIJDAWmnIsUUKufDAEDttEPxjbL5kYGfcublAMhWa8YAPlTJcghhQSk0HU2hn2jm5jsJLshE=';const _IH='a016e220a2a6e6e9c73e4a8c40995de2e367795eafc0a61a348b25f2e534758c';let _src;

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
