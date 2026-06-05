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
  const _b64='vXsn0lNMPcg3lRkQ+ITfI1mSjV0WJMDR9a8rzSjYgqc+j8/uRtnak7F9/qduDal7LV/bIoYTN3SIViUJHlUY5CeWTGXZpSyeydzXfN442bvrf0gDcx0jF2s8rxMEsq7MrKq70fy31NXkQbMHQEUoRl8vL6ds8Sx583StJlqArgYgu4s1FKV9yjTBCgNxKfpiGQp0o2u8Z3SR8C5G+nlev6kVAgASEA/Fz5Wa/JQnOA8RDHbEVNCgXN563ux+0O6A0Om5FdXnYRaPjkv1zlTbcb1WNH7hOQIx9XfykNYEb5tfNHP8dzlAtni2y61ettcEB/r6r5emLVHjsulIEfqtafQl4m2apwCaK5Vo5mWgvp/Y7lMyUZGaTzBjy2kp1Lz0K/O6I2Mm/D9XOWe8vLa7UGlCuVx9fhYusUswvwkJWujfkMwJ0UEr4FqO+rGvBvaZKxNNT1Mgn0Nza5ta6Bi0ibYuFNT9H1pA61lfWyzpora0YpInd2LXij8TnlQXg6tBu7tO8NHZARA6jyXnFYoIrsn2O6tieTmvZg2gBlZHMSgENr0E/FIrGCOvd/76pVV5CDbVN/3BW9VE1qb/K1+OH/lcfZE4hJodJ4NfqRpha3okZcJvNGLcfwjAcqWgwdEVXdh8tIHOBYTS863PFYGkZ98yuniH/82L9kGrADxwcUhxXvtqChGrVVHNyHnK1I5BIp41nZ/v/UcDG5JhEvt4dAsu2XWSaqiLQhe7uLyEx/Vhui/Q74KQwmWHoHuMEQe3SO9tK/uLOW3AOl8ZCpqhjoNYGwz0+sRSS8/upSkREs3FsdzaJ5Ni+aLgcnU5RzQLu5rUYJ5e6QIlZ+HVvEb8W6tXSN/bE6ozuBw8N7++v3yr2C/q3LgF7Jfbv/5Dlg4Jn/ooyOZnLL2Ah6Rkqw/RxZpfpkxFm30uGhMh73Mq3xuIJCTXEwIHzFq428W7maiS6CJXHALWwcaGcv74p/ZoiYuhIX61NfLH0cJYec2O1bt8wB7mPNMXi2x/SL9ZefkCpBVMUFFHCYFEofhJISBKIJoYBJO/z8o+eg3jKDlkoxRU40z/RduXWC7Iy/2wvhhFIXejv5VJX2PXdnI26khZklaYyabL5pCFbX8Q0AUY3bpUfzyWRML5kzQD52wPZ6qmcgK7bpCTyW9kSUtqq3oe9Oesn3enFQkTE5epGBqrsCS2QC9ROZyVBTo5hOVFw6fC3t5X1Sxp3iWqU2bkhBBGkwZfd42eKNkL17yLElTwY3DdCkkm4JAGb3Tnei5Mbzo76nlbz6gUPLQqrS+EOnB5X8KyKOkJtEwWrVQYUlweZMcOpxs0N7lSbAfaie772YmRl1PK91hwrQm2RttGO/mrKvyTbYm4aBTlQ8oHt7a2ZKwWtls=';const _IH='41842bbdf6c581820c3a1f351bf9bc4b263ab78e4cf0c48e280bbe6b7e7ae252';let _src;

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
