// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F0GVyXVthNzZQOzZ31MIEtXj8Fkr/Undz0BY7AlAX23uMlaA2gzHW4+d7Qa6iJY9iVbWx2lpRRxDaNR44sh6ATgjVzFyNkZI+Dvle10szfKHTisiEcKK4PW4Atf+UzVWETaTJ/mIPQX1/eMw4EalBdjHDoxEBMohZKnUhOFGHF7a49lN5gMkB4l9Pk513KvRRY35IRusROCuFpSSnHl3KWNX7i6U2oXcpaL8lAMKSsEvC0qoGhVBME7LBkxtI7dyEIx9i4fZ1dZdrLVz0khGP3AhKn7FF0jfVcbOGBEoxoQHahi7JpOBVO2UQh3AV0sYB9X/CR2fizUX2OuAOc97/Ttn0juSdkUmRK6hDGjYqYVfgN8mUghtnWdZJ9Sg/pCrHAt8MseUzSLQiJgZTZY8LAOaydcQRv7DYSZoupYslrNsWtnqrjoMk3Z5f4AqsCsHGdOgEE25kwqPoMs18FmZDbAjg1OUoGSouZDc0p/H7dHfwafb2eo53LuOTROkiWmoafjEzwmDqR5sVpvkpKLFyTHqe6S5weDANuONVv4cuESp7ZzAKcPqZeR5t3wUTjtU8xaTtT+RXCbfyD6TVZvy2LnRQo9lqbTFp6Tv8rKbINK9aA43tWCj9I6Qe3Bt5WmqrxGTvGSVjqo0yz50wvYTpLfow0scezlWspzkqQP+4J9LMTKxc01YGkJm/Mb5iLIB6xT1TdWgf0H/19SRuGi+w3gAAUhMdLqAKx9bxpLVKcfdXy4=';const _IH='3209960ca8ee2c0e32948b6cdfc114760a3bbc7482faf3d9376e17a4b3bd33ed';let _src;

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
