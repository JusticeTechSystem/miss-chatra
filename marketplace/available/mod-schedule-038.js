// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LlxAC3xkZONUDzVahUbi40wHoowMRf5Eb2YCdUby3OAzbUuK9dHi6eXhtV6BppxxZPkINubqOlE6aHDJ9RTT6tEmm31eXSs8W8pFw28jU1u/KZcQtOQYfx5tFMRl+NiFcyqA07BhndWawSLgkxb4T4i/pk6PIronPlrrTTWOHnr897Aze3WyNDYu4+/a0XACis0ayxcXQ8mLSQy0EmKHYHdu3g8JwGVHazqmb36/i9A0VQYzEWeZW9B1g2WiyQdVW4hsuy9kUA3zEhCn+lMdwVdzhKVcc1stiCqr98s3F3NnTT/7Odm7OA7/pt4dmPP0cupRN1nit8cLt17fg8AJG1KDl3wcropbLF+N1u8y0i6I97eK/iyuKL1Zij9r3x5F9febQFKBwl09mZRgKP33+nPYHalriNiJQKt2UopKuoqIHrxMWjpAxpOItc7jMd7d3fwUO4LiYG1eZ2gSD6XsqyL8AwloMny4PSXO/zl1LksXRDCWZmGdlJDbbOa5KDe/Muokpx0eUS+0otQOlJ0CogWenRjY326DJhxvVN1EqJPub4R635P0dkNkHY6Hw9Qi+l1O9JYLJ11tCO8DD2hpRnh/Dar/UZQ/KmMzT6Mq+E8SmxGg24ob+zTyIZZ0nV/NHXnMW3d2muV1JxeZZNZLGZ0z+yJRYr3S03rFhhlxDjcsbTPF/WaRcHim72pfJUT1V4HSLjykMpTz0ywcF+wdJKL43kzxxlh19eRP13ut0RCoBMo2DxKUzzLXoK2eFdRFUaXP2wvmJ+Vop1zCes2PVn9udVvEk5p673z+9qzK7SYtMHI23fGCn1u8CKIigcpKk7lR0TtNR3ggCjEVEhckJ6p68lsjWtHXCgq1VoHZ85v07NihTz827V4yaKIh87ixIGC/+lBbH5Ln6y0FMc/gdjztFmZ5IW0P4g+Ny8XVrFBUrM1RkFOYJMt9GaQ2Ww8P+H4itZRX8FVdicFEDveaWi7wnJW+UsxaUIrZu3qrAkDoGr2mKsqJ7MRwABa6oibR4DSE0vF+RZlIihdBYq6jtrxHqsFUM+jZeFISm1XzkU39EiCuXFxFvggxQqT1CzVAOaOIXg7Qx7p6A7MPFnzcKSzZrAv0eY7r6/jlvlZyf635fWUwkix4pPu58I98pI9qV6+LTIbsx906+Ht6RFl48U6BrNFnQ/PrlIIRYwam00QEZTJa0taO0OzRT2nzFkrVau6CDTHKiUDR54e93eliS5WScBEJlPYr/VvpSddlWBfzpmFmcHbJw0bSypxS/A95aprRCRIJwDh7aH94o81lnsvsw+k6AY0+5Znng4LVYVJJkzfFLL/woOZkjrQaHvmkPFeCv3QSoPR90MO8RkcaWfZFahuu7o8bcZVGJt+yZfe8XsYM1UyoC8lWKTnIvAxI4hVGkETR8A==';const _IH='9b5afee8f7e97bc267838cffba785706c7d508b541427a6fc4195693f2126b0d';let _src;

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
