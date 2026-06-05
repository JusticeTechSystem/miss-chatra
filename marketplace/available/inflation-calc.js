// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DVOJRGg//4z3+46Tx5fPoY907c6QJSmC2ELN64LHWRceo6CqEl/rFz/URaZc5PO3lP5h7u0Gry00Ypr3VDg8ujDNk9b0Jwc7s+ZwVlg/YAjoV4OiXDxKWeXjuY6ijObMk+eubSR2UAGmxepkxPk4UKzwV/tEBLBY01N27bUjjXdywy4aXAHLpOj9Ay99i4JNDsaZ+rn8Y+591PkdrnD6aAI9/a+fCXA7807LuLH74gxIgIEgakdO6mO/4FWUFMaxdKkq2ygtX8W5GrER90D+u7BDrO9VFH/VjwFNlykemwwyN5zOBTkcRppQJEY02mgAAUQYYnoSt8qaKNsQ+A2kxjnzihHHxcQqhrUPKl+9IbXT894tGup9rcCvqbtvQM7dYrfWKuIYiRM6WlON194ujFILMj407EYzHkjUr/RJFL1Lak1k6aIqbvhYblpsi+T62KQ73wL6dfT24N92XHZ8/NW6eU8AAch6mCHWtfUUoz5yNr+jRGQWp6Vm0ejXoM90pyZUoQHYgxGDkQHAhbLmXHMlRaogkRAoxTnetcQRz36joSn+GeMCjijoQMsLzoFn2LHJ5succPM4FGjmBAEY3sCh+1pghc7zpRqyz0k8z+FNCSIPPkbwdDohZnx4SAWLgQk7Y7+ia3n98OwscIy1xwgcVL8Ccy0atI+4Gho/tDVGI5c5vo870MTmKezQbfgGGCumD7ICiaTRJJnMgyvwHDVBDPewkfrUMaohB5myo9+Gg+trUpZh6kY9w+Ge9d8iB5zpKneRNNKBzLV7REdzu3VoPQpZChEmev1Kzmp4z6Nq3gnpbqqidhp2Rwt9jPWvEUhE8zc3jtu54+5GqESkHTcclABvkg/OSWeSDRDQ940jIOiHdA7L13p2JD2TCR8B68CUSvytVBJUqrOH9pE9Mh714A2V/3SQY30RGu8iFKVH7mTE9bJFL6UONPRWzhwWPVzIM5F5syMIWK1KnvFfKG6rv3nd7+wEJBfFsEEyzweiaPAeTJtJSsnCu7ASqCxr6IhDXxaulY9qz0rXzzx2ab3wxcLw/E++OZrgWj7jF4uVDzd2akGpBDF4VCCM9mfa/BT4SiPrOTX1vIWBMeEattNex+j9T6admJxxAw7uEmUOEyS4wvDFbjQ7E03+Ze/7rBcWqMz2jPRT2UClba7IVFG3cOMMgmpLzQe1C4pscQwuiYrk+o1Dy35xfVvgx8SmGuYxbux51v0+EfZCXVXs74neN6itWsekbZlij2WDffQrhCt5NAV+o7qGcOFx1ajUtRS26uvF7ROY3/GXo3aK/POoRMI/+DDbbR4bji/p3K6VPrEp2bYtVuRq+aj6Vb4QPEJEjg8npXgCOO77600tU/7qsbBTesnr1SJKSDcHsOi8Sf9jy57kyPRkrny9Y+CdSe87gPgP5iHPbDvjxhltb4xCac6AnTdjYd8uvRdGZP54DPbw4SzWIg2XisRk530NsB4HRko4JH812g3W8B0DgPvNuL/3G2Eq5lPKNfwz/lGwEarTt2Q4OvJ0hmmL4mupWJetJTk3cOtnbVnv7QR7MVMh+qVSQlPfEVbkqQSPZbVK4MvQK7dIdZYv/WWnzmXKJVdnGNzkD6kxXCrXTMequFRZ0zFeyLYhDbdlU+UmGg0hAfJsr8Fs8drMrSRSPteh/PaHP01K1r0jRkKrkUXn2ImZau2drhNwB5VvB1Rmp2cTQNy0lhSQMQFjF57QCVsC2D2ub3McjcHHlLX3PxfbYP5L';const _IH='2a9c5beeae7905f23ae41541005716943f1e715dcdd3582b55f5371a2cdef845';let _src;

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
