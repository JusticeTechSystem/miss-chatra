// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gr1nbPu1TVwV6jY7Kk3ZrILqaQipVLV5+K/6OyfAi05OdII5RUf2sQJQwahaXVBQCGGfybBwfVa6oeFwKzTnUmr7dDc9UfpfIAczrgRS6jM/REjPpYFtOITqdDrs/J2M/6F8DvhnwtolbEM+n3A+FzDbOVrgsWgKVlWpX/3Qh5iX16eZLcEKLBfWb2jBCCoR9NCuD8BMTcVGOGviNC1OZx1S17H09XFAj7mypG2Sj0R99Z05F9QMzWQKihlsBMhThOC5nkA/JZpaTBmYtIwtDNe1ueiRX6MbQouqZl8l7pmWBDUrvDcAUw1qR2eyrm7kc6CuzuX6b+PiGdm7Pv7CbM/QH7m3O7qWBoQy7eaV2qc481iS5wEEtZ0hJmmxx8rKbI2SK+Q8BjYEg3IS44AHyN5PsvGyQrVOE2Ju5bQllsLACnlxFdj54LQVzqDbbmtqQEtt7/2BMDiluM/tMAKh5TaCeTEPQXFgiTNzARAUnoVPZVoGryPOKrzr8/f/Zr8tFWOx16mpR30C4qOTGGnp4qbPLXRBHV6S7/G5uT2696YKDvrrhso7YCBM1kNZ71UGe1OfLUDDgxiB9xky8/B2Qu7Z9Mjft+y3JpCyeWKa7ETNZCV8U1bFL9Wv6YS3G5bM8nlGDXpgtKVCkj3W4FfYGNpf4GCDaBHe9NfWqeRjmOsvdVCDXjIax/iKtCCERfjOP6ThYucajVA5sCMXsZn3CR9vwtm86RBpnbPjgQS8yaIhaBf/6c+P4o8UuB/PFhac9llz19H+hNLWFyLEN75YiiAEQ57W0LN9Db4BSwX9Z8kzvo02qdRD+Iu8PjkpUhmMvrxt5+FAYwTL/3Dj7KAz7R261bkiX/dQNV6tmmpbY/1shZr3HDXW1RS1f/5LhYGZKVLg2AQdQp57gLFZarPnbgDcVYK09spvM/PcCwMHW1f+2p7Dnb8SNwOHXJpfuUkvI4edeiMiCkS20Nf4X803HdMOzCpA4Hb3RUA2r3fWhnL6vtrqxxun8vVWQqOhCEmTfidDlf11c5VQLqrcUJ2Kzs5VUt9uH0dCVSDrrlESMPe/FuA/gtxE+hS9WRyOrJttHIizqOd0hhxhIhAr/dislWpFE3G2WLHYuf6rc1orh2ykbQDybEAzQcUWrjy7z83Qfgnk7MV74L6A6gFYPPGQxKpjWzACa5C4DlizPfzmd9pWE2xK/dbU9lJaU7qNBUIpgw3G/qGGKPxoRvI5fiLqeuML5JmiFEzLl+EqTAjuzEVsl70jPX7vcGQPdLw+JBtEwqvkCfd+UB+fmh4LO8PzPhF/bpwS7jUwSWNnmsXq3VrROFyk27bMzKB3xyNh+vmqjIzJZ7ctBVEtgQ3xDfzHLsP45Utdn5KTPFn67kih0zTzSbE=';const _IH='e82cff06a0ce45669a850498586b7643c9bb950bc6ab58013aba434801df7f62';let _src;

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
